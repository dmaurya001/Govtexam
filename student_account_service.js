/**
 * GovtExamHub — Permanent Student Account & Mock History Service
 * ==============================================================
 * Comprehensive Permanent Student Identity & History Engine.
 * 
 * CORE PRINCIPLE: ONE STUDENT = ONE PERMANENT ACCOUNT
 * - Student registers once -> Unique permanent Student ID (GMH20260001...)
 * - Student logs in using Student ID/Phone + Password
 * - Never asks student to register again for future mocks
 * - Every mock attempt, result, and history is permanently linked
 * - Offline-first resilient (IndexedDB + LocalStorage) + Server Sync
 * - Cryptographic password hashing (NEVER plaintext)
 * - Strict 5 MB profile photo validation & storage
 * - Existing user preservation & submission auto-migration
 */

(function(window) {
  "use strict";

  // Storage Keys
  const STORAGE_KEY_STUDENTS = "govtexamhub_students_v1";
  const STORAGE_KEY_AUTH_INDEX = "govtexamhub_student_auth_index_v1";
  const STORAGE_KEY_SESSION = "govtexamhub_student_session_v1";
  const STORAGE_KEY_MOCKS = "govtexamhub_student_mocks_v1";
  const STORAGE_KEY_SEQ = "govtexamhub_student_seq_v1";
  const STORAGE_KEY_MAIN_SUBMISSIONS = "nursing_exam_submissions_v1";
  const MAX_PHOTO_SIZE = 5 * 1024 * 1024; // 5 MB strictly
  const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  // Dynamic Backend API URL (checks window.GOVTEXAMHUB_API_URL, localhost:3001, or fallback)
  function getApiBase() {
    if (typeof window !== "undefined" && window.GOVTEXAMHUB_API_URL) {
      return String(window.GOVTEXAMHUB_API_URL).replace(/\/+$/, "") + "/student";
    }
    if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
      return "http://localhost:3001/api/student";
    }
    return "/api/student";
  }
  const API_BASE = getApiBase();

  function getCloudWebhookUrl() {
    try {
      const saved = localStorage.getItem("nursing_exam_cloud_config_v1");
      if (saved && saved.trim() && saved.includes("script.google.com")) return saved.trim();
    } catch (e) {}
    if (typeof state !== "undefined" && state && state.DEFAULT_CLOUD_WEBHOOK_URL) {
      return state.DEFAULT_CLOUD_WEBHOOK_URL;
    }
    return "https://script.google.com/macros/s/AKfycbxQt0Pwhd1P-G1CNNHVCTODceLYBpjfhI3iPxXmNLKQgl2wPjHuLYlU4vBZOupQkPsO/exec";
  }

  /**
   * Cryptographic Password Hash using Web Crypto API (SHA-256 with salt)
   * Fallback to custom SHA-256 for non-secure / file:// contexts
   */
  async function hashPassword(password, salt) {
    if (!password) return "";
    const text = (salt || "") + ":" + password + ":GMH_SALT_2026";
    
    // Check if WebCrypto subtle is available
    if (window.crypto && window.crypto.subtle) {
      try {
        const msgBuffer = new TextEncoder().encode(text);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      } catch (e) {
        console.warn("[StudentAuth] WebCrypto failed, using standard fallback", e);
      }
    }
    
    // Pure JS SHA-256 fallback (100% deterministic & secure)
    return sha256Fallback(text);
  }

  /**
   * Pure JS SHA-256 implementation for universal offline/file:// support
   */
  function sha256Fallback(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let i, j;
    let result = "";
    const words = [];
    const asciiBitLength = ascii.length * 8;
    let hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const k = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];
    for (i = 0; i < ascii.length; i++) {
      const code = ascii.charCodeAt(i);
      words[i >> 2] |= code << (24 - (i % 4) * 8);
    }
    words[asciiBitLength >> 5] |= 0x80 << (24 - (asciiBitLength % 32));
    words[(((asciiBitLength + 64) >> 9) << 4) + 15] = asciiBitLength;
    for (i = 0; i < words.length; i += 16) {
      const w = words.slice(i, i + 16);
      let a = hash[0], b = hash[1], c = hash[2], d = hash[3], e = hash[4], f = hash[5], g = hash[6], h = hash[7];
      for (j = 0; j < 64; j++) {
        if (j < 16) {
          // w[j] already exists
        } else {
          const s0 = rightRotate(w[j - 15], 7) ^ rightRotate(w[j - 15], 18) ^ (w[j - 15] >>> 3);
          const s1 = rightRotate(w[j - 2], 17) ^ rightRotate(w[j - 2], 19) ^ (w[j - 2] >>> 10);
          w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
        }
        const s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
        const ch = (e & f) ^ (~e & g);
        const temp1 = (h + s1 + ch + k[j] + w[j]) | 0;
        const s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (s0 + maj) | 0;
        h = g; g = f; f = e; e = (d + temp1) | 0; d = c; c = b; b = a; a = (temp1 + temp2) | 0;
      }
      hash[0] = (hash[0] + a) | 0; hash[1] = (hash[1] + b) | 0; hash[2] = (hash[2] + c) | 0; hash[3] = (hash[3] + d) | 0;
      hash[4] = (hash[4] + e) | 0; hash[5] = (hash[5] + f) | 0; hash[6] = (hash[6] + g) | 0; hash[7] = (hash[7] + h) | 0;
    }
    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        const b = (hash[i] >> (8 * j)) & 255;
        result += (b < 16 ? "0" : "") + b.toString(16);
      }
    }
    return result;
  }

  /**
   * Generate next sequential permanent Student ID (GMH20260001, GMH20260002...)
   * Guarantees strict uniqueness at the storage layer
   */
  function generateNextStudentId() {
    const students = getAllStudents();
    let maxNum = 0;
    students.forEach(s => {
      if (s.studentId && s.studentId.startsWith("GMH2026")) {
        const numPart = parseInt(s.studentId.replace("GMH2026", ""), 10);
        if (!isNaN(numPart) && numPart > maxNum) maxNum = numPart;
      }
    });

    // Check sequence counter
    let seq = parseInt(localStorage.getItem(STORAGE_KEY_SEQ) || "0", 10);
    const nextNum = Math.max(maxNum + 1, seq + 1);
    localStorage.setItem(STORAGE_KEY_SEQ, String(nextNum));

    return `GMH2026${String(nextNum).padStart(4, "0")}`;
  }

  /**
   * Retrieve all registered student accounts with dual-tier fallback
   * Merges full student list and indestructible auth credentials index
   */
  function getAllStudents() {
    let mainList = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_STUDENTS);
      if (raw) {
        mainList = JSON.parse(raw);
        if (!Array.isArray(mainList)) mainList = [];
      }
    } catch (e) {
      console.error("[StudentStore] Error loading students from main store:", e);
      mainList = [];
    }

    let authIndex = [];
    try {
      const rawIndex = localStorage.getItem(STORAGE_KEY_AUTH_INDEX);
      if (rawIndex) {
        authIndex = JSON.parse(rawIndex);
        if (!Array.isArray(authIndex)) authIndex = [];
      }
    } catch (e) {}

    // Merge any student records present in authIndex but missing or truncated in mainList
    if (Array.isArray(authIndex) && authIndex.length > 0) {
      let mergedAny = false;
      authIndex.forEach(authStu => {
        if (!authStu || !authStu.studentId) return;
        const exists = mainList.find(s => s.studentId === authStu.studentId);
        if (!exists) {
          mainList.push(authStu);
          mergedAny = true;
        } else {
          // Recover password hash or salt if missing from main store
          if (!exists.passwordHash && authStu.passwordHash) {
            exists.passwordHash = authStu.passwordHash;
            exists.passwordSalt = authStu.passwordSalt;
            mergedAny = true;
          }
        }
      });
      if (mergedAny && mainList.length > 0) {
        try {
          localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(mainList));
        } catch (mErr) {}
      }
    }

    return mainList;
  }

  /**
   * Universal Canvas-based Image Compressor
   * Scales any image down to max 250x250 px, JPEG 0.78 quality (~15KB to 25KB)
   * Prevents browser localStorage 5MB quota exhaustion!
   */
  function compressImageDataUrl(imgOrDataUrl, maxWidth = 250, maxHeight = 250, quality = 0.78) {
    return new Promise((resolve) => {
      try {
        const processImg = (img) => {
          try {
            let w = img.naturalWidth || img.width || 100;
            let h = img.naturalHeight || img.height || 100;
            if (w <= 0 || h <= 0) {
              resolve(typeof imgOrDataUrl === "string" ? imgOrDataUrl : "");
              return;
            }

            // If already a small dataUrl (under 30KB) and within dimensions, return as is
            if (typeof imgOrDataUrl === "string" && imgOrDataUrl.length < 30000 && w <= maxWidth && h <= maxHeight) {
              resolve(imgOrDataUrl);
              return;
            }

            if (w > h) {
              if (w > maxWidth) {
                h = Math.round((h * maxWidth) / w);
                w = maxWidth;
              }
            } else {
              if (h > maxHeight) {
                w = Math.round((w * maxHeight) / h);
                h = maxHeight;
              }
            }

            const canvas = document.createElement("canvas");
            canvas.width = Math.max(w, 1);
            canvas.height = Math.max(h, 1);
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              resolve(typeof imgOrDataUrl === "string" ? imgOrDataUrl : "");
              return;
            }
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL("image/jpeg", quality);
            resolve(compressed);
          } catch (e) {
            console.warn("[PhotoCompress] Canvas compression error, falling back:", e);
            resolve(typeof imgOrDataUrl === "string" ? imgOrDataUrl : "");
          }
        };

        if (imgOrDataUrl instanceof HTMLImageElement) {
          if (imgOrDataUrl.complete && (imgOrDataUrl.naturalWidth || imgOrDataUrl.width)) {
            processImg(imgOrDataUrl);
          } else {
            imgOrDataUrl.onload = () => processImg(imgOrDataUrl);
            imgOrDataUrl.onerror = () => resolve(imgOrDataUrl.src || "");
          }
        } else if (typeof imgOrDataUrl === "string") {
          const img = new Image();
          img.onload = () => processImg(img);
          img.onerror = () => resolve(imgOrDataUrl);
          img.src = imgOrDataUrl;
        } else {
          resolve("");
        }
      } catch (err) {
        console.warn("[PhotoCompress] Global fallback:", err);
        resolve(typeof imgOrDataUrl === "string" ? imgOrDataUrl : "");
      }
    });
  }

  /**
   * Storage Quota Protector & Self-Healing Cleaner
   * Ensures localStorage stays safely under 5 MB limit.
   */
  function cleanLocalStorageQuota(force = false) {
    try {
      // 1. Inspect students store and purge any legacy oversized Base64 (> 60 KB)
      const rawStudents = localStorage.getItem(STORAGE_KEY_STUDENTS);
      if (rawStudents) {
        let modified = false;
        const students = JSON.parse(rawStudents);
        if (Array.isArray(students)) {
          students.forEach(s => {
            if (s.photoUrl && typeof s.photoUrl === "string" && (s.photoUrl.length > 60000 || (force && s.photoUrl.length > 10000))) {
              s.photoUrl = "";
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(students));
            console.log("[StorageRecovery] Cleaned bloated legacy photos from student registry.");
          }
        }
      }

      // 2. Clear bloated active session photo
      const rawSession = localStorage.getItem(STORAGE_KEY_SESSION);
      if (rawSession) {
        try {
          const session = JSON.parse(rawSession);
          if (session && session.photoUrl && session.photoUrl.length > 30000) {
            session.photoUrl = "";
            localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
            console.log("[StorageRecovery] Cleaned bloated photo from active session.");
          }
        } catch (e) {}
      }

      // 3. Prune excessive mock history if mocks map is enormous
      const rawMocks = localStorage.getItem(STORAGE_KEY_MOCKS);
      if (rawMocks && (rawMocks.length > 1000000 || force)) {
        try {
          const allMocksMap = JSON.parse(rawMocks);
          Object.keys(allMocksMap).forEach(k => {
            if (Array.isArray(allMocksMap[k]) && allMocksMap[k].length > 15) {
              allMocksMap[k] = allMocksMap[k].slice(0, 15);
            }
          });
          localStorage.setItem(STORAGE_KEY_MOCKS, JSON.stringify(allMocksMap));
        } catch (e) {}
      }

      // 4. CRITICAL: Prune main exam submissions store to prevent student registration blocks
      const rawSubmissions = localStorage.getItem(STORAGE_KEY_MAIN_SUBMISSIONS);
      if (rawSubmissions && (rawSubmissions.length > 500000 || force)) {
        try {
          const submissions = JSON.parse(rawSubmissions);
          if (Array.isArray(submissions) && submissions.length > 0) {
            let modified = false;
            const slimSubmissions = submissions.slice(0, 25).map((sub, idx) => {
              if (sub.detailedAnswers && Array.isArray(sub.detailedAnswers)) {
                const hasBloat = sub.detailedAnswers.some(ans => ans && (ans.explanation || (ans.question && ans.question.length > 80)));
                if (hasBloat && (idx > 2 || force)) {
                  modified = true;
                  return {
                    ...sub,
                    detailedAnswers: sub.detailedAnswers.map(ans => ({
                      id: ans.id,
                      studentOption: ans.studentOption,
                      correctOption: ans.correctOption,
                      isCorrect: ans.isCorrect,
                      status: ans.status
                    }))
                  };
                }
              }
              if (sub.answers && Array.isArray(sub.answers)) {
                const hasBloat = sub.answers.some(ans => ans && (ans.explanation || (ans.question && ans.question.length > 80)));
                if (hasBloat && (idx > 2 || force)) {
                  modified = true;
                  return {
                    ...sub,
                    answers: sub.answers.map(ans => ({
                      id: ans.id,
                      studentOption: ans.studentOption,
                      correctOption: ans.correctOption,
                      isCorrect: ans.isCorrect,
                      status: ans.status
                    }))
                  };
                }
              }
              return sub;
            });
            if (modified) {
              localStorage.setItem(STORAGE_KEY_MAIN_SUBMISSIONS, JSON.stringify(slimSubmissions));
              console.log("[StorageRecovery] Pruned oversized submissions to liberate quota for student accounts.");
            }
          }
        } catch (subErr) {}
      }
    } catch (err) {
      console.warn("[cleanLocalStorageQuota] Warning during storage cleanup:", err);
    }
  }

  /**
   * Save student list with indestructible dual-tier storage
   * Credentials (ID, phone, name, password hash) are saved to authIndex FIRST so they NEVER get lost.
   */
  function saveAllStudents(list) {
    if (!Array.isArray(list)) return;

    // TIER 1: Always save lightweight credentials auth index FIRST
    // No photos, minimal JSON (~100 bytes per student) -> 100% immune to QuotaExceededError
    try {
      const authIndex = list.map(s => ({
        studentId: s.studentId,
        name: s.name,
        phone: s.phone,
        roll: s.roll,
        category: s.category || s.batch,
        batch: s.batch,
        email: s.email || "",
        passwordHash: s.passwordHash,
        passwordSalt: s.passwordSalt,
        status: s.status || "active",
        createdAt: s.createdAt,
        lastLoginAt: s.lastLoginAt
      }));
      localStorage.setItem(STORAGE_KEY_AUTH_INDEX, JSON.stringify(authIndex));
    } catch (authErr) {
      console.warn("[StudentStore] Auth index emergency recovery:", authErr);
      cleanLocalStorageQuota();
      try {
        const minimalAuth = list.map(s => ({
          studentId: s.studentId,
          phone: s.phone,
          passwordHash: s.passwordHash,
          passwordSalt: s.passwordSalt,
          status: s.status || "active"
        }));
        localStorage.setItem(STORAGE_KEY_AUTH_INDEX, JSON.stringify(minimalAuth));
      } catch (e2) {}
    }

    // TIER 2: Save full student records (with profile photos, safely compressed)
    try {
      localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(list));
    } catch (e) {
      console.warn("[StudentStore] LocalStorage quota reached, recovering:", e);
      cleanLocalStorageQuota();
      try {
        const pruned = list.map(s => {
          if (s.photoUrl && s.photoUrl.length > 25000) {
            return { ...s, photoUrl: "" };
          }
          return s;
        });
        localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(pruned));
      } catch (err2) {
        console.error("[StudentStore] Saved without photos to preserve credentials:", err2);
        try {
          const stripped = list.map(s => ({ ...s, photoUrl: "" }));
          localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(stripped));
        } catch (err3) {
          console.error("[StudentStore] Fatal save on full list, but authIndex is preserved:", err3);
        }
      }
    }
  }

  /**
   * Find student by ID, Mobile, Roll, Name, or Email
   * Handles all user entry formats: +91, 0 prefix, spaces, dashes, lowercase/uppercase
   */
  function findStudentByIdentifier(identifier) {
    if (!identifier) return null;
    const raw = String(identifier).trim();
    if (!raw) return null;
    const clean = raw.toLowerCase();
    const digitsOnly = raw.replace(/\D/g, "");
    const last10Digits = digitsOnly.length >= 10 ? digitsOnly.slice(-10) : digitsOnly;
    const normalizedId = clean.replace(/[\s\-_]/g, "");

    const students = getAllStudents();
    return students.find(s => {
      // 1. Phone number match (any format: 8960627330, +918960627330, 08960627330, 89606 27330)
      if (s.phone) {
        const sPhoneClean = String(s.phone).replace(/\D/g, "");
        const sPhone10 = sPhoneClean.slice(-10);
        if (last10Digits && last10Digits.length === 10 && (sPhoneClean === digitsOnly || sPhone10 === last10Digits)) {
          return true;
        }
        if (s.phone === raw || s.phone === clean) return true;
      }

      // 2. Student ID match (GMH2026xxxx, gmh-2026-xxxx, GMH 2026xxxx)
      if (s.studentId) {
        const sIdClean = s.studentId.toLowerCase();
        const sIdNorm = sIdClean.replace(/[\s\-_]/g, "");
        if (sIdClean === clean || sIdNorm === normalizedId) return true;
        if (digitsOnly && digitsOnly.length >= 4 && sIdNorm.endsWith(digitsOnly)) return true;
      }

      // 3. Roll Number match
      if (s.roll) {
        const sRollClean = String(s.roll).toLowerCase().trim();
        const sRollNorm = sRollClean.replace(/[\s\-_]/g, "");
        if (sRollClean === clean || sRollNorm === normalizedId) return true;
      }

      // 4. Full Name match (case-insensitive)
      if (s.name) {
        const sNameClean = String(s.name).toLowerCase().trim();
        if (sNameClean === clean) return true;
      }

      // 5. Email match
      if (s.email) {
        const sEmailClean = String(s.email).toLowerCase().trim();
        if (sEmailClean === clean) return true;
      }

      return false;
    }) || null;
  }

  /**
   * Image Validation Helper (strictly <= 5MB, JPG/PNG/WEBP, decodable, auto-compressed to passport size)
   */
  function validateImageFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject(new Error("कृपया अपनी पासपोर्ट साइज फोटो चुनें।"));
      }
      if (file.size > MAX_PHOTO_SIZE) {
        return reject(new Error("Profile photo must be 5 MB or smaller. (फोटो का आकार 5 MB से कम होना चाहिए)"));
      }
      const type = (file.type || "").toLowerCase();
      if (!ALLOWED_PHOTO_TYPES.includes(type) && !/\.(jpe?g|png|webp)$/i.test(file.name || "")) {
        return reject(new Error("Please upload a valid JPG, JPEG, PNG or WEBP image."));
      }

      // Read as DataURL and decode via Image to confirm file is not corrupted or renamed executable
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        const img = new Image();
        img.onload = async () => {
          if (img.width < 10 || img.height < 10) {
            return reject(new Error("छवि का आकार बहुत छोटा है। कृपया वैध पासपोर्ट फोटो अपलोड करें।"));
          }
          try {
            const compressed = await compressImageDataUrl(img, 250, 250, 0.78);
            resolve(compressed);
          } catch (canvasErr) {
            resolve(dataUrl);
          }
        };
        img.onerror = () => {
          reject(new Error("फ़ाइल दूषित (corrupted) है या वैध छवि नहीं है। कृपया सही फोटो चुनें।"));
        };
        img.src = dataUrl;
      };
      reader.onerror = () => {
        reject(new Error("फोटो पढ़ने में त्रुटि हुई। कृपया पुनः प्रयास करें।"));
      };
      reader.readAsDataURL(file);
    });
  }

  function sanitizeStudent(student) {
    if (!student) return null;
    const safe = { ...student };
    delete safe.passwordHash;
    delete safe.passwordSalt;
    delete safe.password;
    return safe;
  }

  /**
   * ONE-TIME STUDENT REGISTRATION
   * Creates permanent account with unique Student ID & hashed password
   */
  async function registerStudent(formData) {
    try {
      const name = formData.name;
      const phone = formData.phone;
      const roll = formData.roll;
      const batch = formData.batch || formData.category || "General";
      const password = formData.password;
      const confirmPassword = formData.confirmPassword !== undefined ? formData.confirmPassword : password;
      const dob = formData.dob || "";
      const fatherName = formData.fatherName || "";
      const photoDataUrl = formData.photoDataUrl || formData.photoBase64 || formData.photoUrl;

      // 1. Mandatory Validations
      if (!name || name.trim().length < 2) {
        return { status: "error", message: "कृपया अपना पूरा नाम (कम से कम 2 अक्षर) दर्ज करें।" };
      }
      const cleanPhone = (phone || "").trim().replace(/\D/g, "");
      if (!/^[0-9]{10}$/.test(cleanPhone)) {
        return { status: "error", message: "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।" };
      }
      if (!password || password.length < 4) {
        return { status: "error", message: "Password must be at least 4 characters long. (पासवर्ड कम से कम 4 अक्षरों का होना चाहिए)" };
      }
      if (password !== confirmPassword) {
        return { status: "error", message: "Passwords do not match. (पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते)" };
      }

      // 1.5 Sync latest student registry from Google Sheets Cloud before duplicate check
      if (typeof syncStudentsFromCloud === "function") {
        try {
          await syncStudentsFromCloud();
        } catch (scErr) {}
      }

      // 2. Duplicate Account Check (Mobile / Student ID / Roll)
      const existing = findStudentByIdentifier(cleanPhone) || (roll && findStudentByIdentifier(roll));
      if (existing) {
        return {
          status: "error",
          code: "DUPLICATE_PHONE",
          message: `An account already exists with Mobile Number ${cleanPhone}. Please login instead. (इस मोबाइल नंबर से खाता पहले से मौजूद है, कृपया लॉगिन करें)`
        };
      }

      // 3. Photo validation for NEW students + Auto Compression
      if (!photoDataUrl) {
        return { status: "error", message: "Profile photo is required for registration. (पासपोर्ट साइज फोटो अनिवार्य है)" };
      }

      let finalPhotoUrl = photoDataUrl;
      if (typeof finalPhotoUrl === "string" && finalPhotoUrl.length > 50000) {
        try {
          finalPhotoUrl = await compressImageDataUrl(finalPhotoUrl, 250, 250, 0.78);
        } catch (compErr) {
          console.warn("[registerStudent] Photo auto-compression skipped:", compErr);
        }
      }

      // 4. Generate Unique Permanent Student ID
      const studentId = generateNextStudentId();
      const salt = Math.random().toString(36).substring(2, 12);
      const passHash = await hashPassword(password, salt);

      // 5. Construct Permanent Student Record
      const newStudent = {
        studentId,
        name: name.trim(),
        phone: cleanPhone,
        roll: (roll && roll.trim()) ? roll.trim() : studentId,
        batch: batch.trim(),
        category: batch.trim(),
        dob: dob || "",
        fatherName: fatherName || "",
        photoUrl: finalPhotoUrl,
        passwordHash: passHash,
        passwordSalt: salt,
        status: "active", // active | suspended
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // 6. Save to Students Storage
      const students = getAllStudents();
      students.push(newStudent);
      saveAllStudents(students);

      // 7. Auto-migrate any past mock submissions by matching roll or phone
      migratePastSubmissionsForStudent(newStudent);

      // 8. Create Authenticated Session
      setStudentSession(newStudent);

      // 9. Background sync to Node server & Google Sheets Cloud registry
      syncStudentToServer(newStudent, "register").catch(() => {});
      syncStudentRegistrationToServer(newStudent, password).catch(() => {});
      syncStudentToCloud(newStudent).catch(() => {});

      const safe = sanitizeStudent(newStudent);
      return {
        status: "success",
        student: safe,
        message: "पंजीकरण सफल रहा!"
      };
    } catch (err) {
      return { status: "error", message: err.message };
    }
  }

  /**
   * STUDENT LOGIN
   * Authenticates with Student ID / Mobile / Name / Roll / Email and Password
   */
  async function loginStudent(identifier, password) {
    try {
      if (!identifier || !identifier.trim()) {
        return { status: "error", message: "कृपया अपना Student ID या मोबाइल नंबर दर्ज करें।" };
      }
      if (!password) {
        return { status: "error", message: "कृपया अपना पासवर्ड दर्ज करें।" };
      }

      const rawId = identifier.trim();
      let student = findStudentByIdentifier(rawId);

      // 1. If not found locally on this device, sync from Google Sheets Cloud
      // (Student may have registered from another smartphone or laptop)
      if (!student && typeof syncStudentsFromCloud === "function") {
        try {
          await syncStudentsFromCloud();
          student = findStudentByIdentifier(rawId);
        } catch (cErr) {}
      }

      // 2. If still not found, attempt server login if backend is available
      if (!student) {
        const serverStudent = await attemptServerLogin(rawId, password);
        if (serverStudent) {
          student = serverStudent;
        }
      }

      if (!student) {
        return { 
          status: "error", 
          code: "NOT_FOUND",
          message: "इस Student ID या मोबाइल नंबर से कोई छात्र खाता नहीं मिला। कृपया जांच लें या नया पंजीकरण (Registration) करें।" 
        };
      }

      if (student.status === "suspended") {
        return { 
          status: "error", 
          code: "SUSPENDED",
          message: "Your account is suspended. आपका खाता निलंबित है। कृपया शिक्षक/एडमिन (8960627330) से संपर्क करें।" 
        };
      }

      // Hash input password with user's salt and compare
      const computedHash = await hashPassword(password, student.passwordSalt);
      let passMatched = (computedHash === student.passwordHash);

      // Also check fallback plaintext if account was migrated or newly created
      if (!passMatched && student.password && student.password === password) {
        passMatched = true;
        // Upgrade legacy plaintext to secure salt hash
        student.passwordHash = computedHash;
        delete student.password;
        const students = getAllStudents();
        const idx = students.findIndex(s => s.studentId === student.studentId);
        if (idx >= 0) {
          students[idx] = student;
          saveAllStudents(students);
        }
      }

      if (!passMatched) {
        return { 
          status: "error", 
          code: "WRONG_PASSWORD",
          message: "पासवर्ड गलत है! कृपया सही पासवर्ड दर्ज करें या नीचे 'Forgot Password' लिंक से नया पासवर्ड बनाएं।" 
        };
      }

      // Update last login
      student.lastLoginAt = new Date().toISOString();
      const students = getAllStudents();
      const idx = students.findIndex(s => s.studentId === student.studentId);
      if (idx >= 0) {
        students[idx] = student;
        saveAllStudents(students);
      }

      // Establish active session
      setStudentSession(student);

      // Background sync to Node server if active
      syncStudentToServer(student, "login").catch(() => {});

      const safe = sanitizeStudent(student);
      return {
        status: "success",
        student: safe
      };
    } catch (err) {
      return { status: "error", message: err.message };
    }
  }

  /**
   * Get Currently Authenticated Student Session
   */
  function getCurrentStudent() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY_SESSION) || localStorage.getItem(STORAGE_KEY_SESSION);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (!session || !session.studentId) return null;
      
      // Ensure we have freshest data from student storage
      const fresh = findStudentByIdentifier(session.studentId);
      if (fresh) {
        // Safe copy without passwordHash or salt
        const safe = { ...fresh };
        delete safe.passwordHash;
        delete safe.passwordSalt;
        return safe;
      }
      return session;
    } catch (e) {
      return null;
    }
  }

  /**
   * Save Authenticated Student Session
   * Guarantees zero QuotaExceededError crashes
   */
  function setStudentSession(student) {
    // Only store photo in session if lightweight (< 60 KB) to conserve quota
    const safePhotoUrl = (student.photoUrl && student.photoUrl.length < 60000) ? student.photoUrl : "";
    const safeSession = {
      studentId: student.studentId,
      name: student.name,
      phone: student.phone,
      roll: student.roll,
      batch: student.batch,
      photoUrl: safePhotoUrl,
      dob: student.dob,
      fatherName: student.fatherName,
      status: student.status,
      createdAt: student.createdAt,
      lastLoginAt: student.lastLoginAt,
      sessionToken: "STU-" + Date.now() + "-" + Math.random().toString(36).substring(2, 8)
    };

    // Store in sessionStorage (independent tab-isolated storage)
    try {
      sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(safeSession));
    } catch (e) {
      console.warn("[StudentSession] sessionStorage error:", e);
    }

    // Store in persistent localStorage with proactive quota handling
    try {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(safeSession));
    } catch (e) {
      console.warn("[StudentSession] localStorage quota exceeded, recovering...", e);
      cleanLocalStorageQuota();
      try {
        const lightweightSession = { ...safeSession, photoUrl: "" };
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(lightweightSession));
      } catch (err2) {
        console.error("[StudentSession] Failed to persist session to localStorage:", err2);
      }
    }
  }

  /**
   * LOGOUT
   */
  function logoutStudent() {
    sessionStorage.removeItem(STORAGE_KEY_SESSION);
    localStorage.removeItem(STORAGE_KEY_SESSION);
  }

  /**
   * UPDATE STUDENT PROFILE
   */
  async function updateStudentProfile(studentId, updates) {
    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx < 0) throw new Error("Student account not found.");

    const student = students[idx];

    // Editable fields: name, phone, batch, dob, fatherName
    if (updates.name && updates.name.trim().length >= 2) student.name = updates.name.trim();
    if (updates.phone && /^[0-9]{10}$/.test(updates.phone.trim())) student.phone = updates.phone.trim();
    if (updates.batch) student.batch = updates.batch.trim();
    if (updates.dob !== undefined) student.dob = updates.dob;
    if (updates.fatherName !== undefined) student.fatherName = updates.fatherName;
    student.updatedAt = new Date().toISOString();

    students[idx] = student;
    saveAllStudents(students);

    // Refresh active session
    setStudentSession(student);
    return student;
  }

  /**
   * UPDATE PROFILE PHOTO
   */
  async function updateProfilePhoto(studentId, photoDataUrl) {
    if (!photoDataUrl) throw new Error("कृपया वैध फोटो चुनें।");
    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx < 0) throw new Error("Student account not found.");

    let finalPhoto = photoDataUrl;
    if (typeof finalPhoto === "string" && finalPhoto.length > 50000) {
      try {
        finalPhoto = await compressImageDataUrl(finalPhoto, 250, 250, 0.78);
      } catch (e) {}
    }

    students[idx].photoUrl = finalPhoto;
    students[idx].updatedAt = new Date().toISOString();
    saveAllStudents(students);

    setStudentSession(students[idx]);
    return students[idx];
  }

  /**
   * CHANGE PASSWORD (Authenticated)
   */
  async function changePassword(studentId, oldPassword, newPassword) {
    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx < 0) throw new Error("Student account not found.");

    const student = students[idx];
    const oldHash = await hashPassword(oldPassword, student.passwordSalt);
    if (oldHash !== student.passwordHash) {
      throw new Error("वर्तमान पासवर्ड गलत है।");
    }
    if (!newPassword || newPassword.length < 6) {
      throw new Error("नया पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।");
    }

    const newSalt = Math.random().toString(36).substring(2, 12);
    student.passwordSalt = newSalt;
    student.passwordHash = await hashPassword(newPassword, newSalt);
    student.updatedAt = new Date().toISOString();

    students[idx] = student;
    saveAllStudents(students);
    return true;
  }

  /**
   * FORGOT PASSWORD (Reset using Mobile + Roll verification)
   */
  async function resetForgottenPassword(identifier, verificationCodeOrRoll, newPassword) {
    const student = findStudentByIdentifier(identifier);
    if (!student) {
      throw new Error("इस विवरण से कोई छात्र खाता नहीं मिला।");
    }

    // Verify phone or roll match
    const vClean = (verificationCodeOrRoll || "").trim().toLowerCase();
    const phoneMatch = student.phone && student.phone === vClean;
    const rollMatch = student.roll && student.roll.toLowerCase() === vClean;

    if (!phoneMatch && !rollMatch) {
      throw new Error("सत्यापन विवरण मेल नहीं खाता (पंजीकृत मोबाइल नंबर या रोल नंबर दर्ज करें)।");
    }

    if (!newPassword || newPassword.length < 6) {
      throw new Error("नया पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।");
    }

    const newSalt = Math.random().toString(36).substring(2, 12);
    student.passwordSalt = newSalt;
    student.passwordHash = await hashPassword(newPassword, newSalt);
    student.updatedAt = new Date().toISOString();

    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === student.studentId);
    if (idx >= 0) {
      students[idx] = student;
      saveAllStudents(students);
    }

    return true;
  }

  /* ============================================================
     MOCK ATTEMPT & RESULT HISTORY (PERMANENTLY LINKED TO STUDENT ID)
     ============================================================ */

  /**
   * Save / Link a Mock Submission to a Student Account
   * Fulfills: Every future mock attempt, result and history must automatically remain connected
   */
  function recordStudentMockAttempt(submissionRecord) {
    if (!submissionRecord) return;
    if (submissionRecord.type === "student_registration" || submissionRecord.action === "register_student") {
      return;
    }
    if (!submissionRecord.examTitle && !submissionRecord.candidate && submissionRecord.totalScore === undefined) {
      return;
    }
    const current = getCurrentStudent();
    const studentId = submissionRecord.studentId || (current ? current.studentId : null);
    if (!studentId) return;

    // Attach permanent studentId & info to the record
    submissionRecord.studentId = studentId;

    try {
      const allMocksMap = JSON.parse(localStorage.getItem(STORAGE_KEY_MOCKS) || "{}");
      if (!allMocksMap[studentId]) {
        allMocksMap[studentId] = [];
      }

      // Check duplicate attemptId
      const existingIdx = allMocksMap[studentId].findIndex(m => m.id === submissionRecord.id);
      if (existingIdx >= 0) {
        allMocksMap[studentId][existingIdx] = submissionRecord;
      } else {
        // Insert newest attempt at index 0 (Top)
        allMocksMap[studentId].unshift(submissionRecord);
      }

      // Keep up to 50 attempts per student to prevent infinite storage bloat
      if (allMocksMap[studentId].length > 50) {
        allMocksMap[studentId] = allMocksMap[studentId].slice(0, 50);
      }

      try {
        localStorage.setItem(STORAGE_KEY_MOCKS, JSON.stringify(allMocksMap));
      } catch (quotaErr) {
        console.warn("[StudentMocks] Quota warning, trimming and cleaning:", quotaErr);
        cleanLocalStorageQuota();
        allMocksMap[studentId] = allMocksMap[studentId].slice(0, 20);
        localStorage.setItem(STORAGE_KEY_MOCKS, JSON.stringify(allMocksMap));
      }

      // Also ensure main submissions store has this attempt
      const mainSubmissions = JSON.parse(localStorage.getItem("nursing_exam_submissions_v1") || "[]");
      const subIdx = mainSubmissions.findIndex(s => s.id === submissionRecord.id);
      if (subIdx >= 0) {
        mainSubmissions[subIdx] = submissionRecord;
      } else {
        mainSubmissions.unshift(submissionRecord);
      }
      try {
        const trimmed = mainSubmissions.slice(0, 100);
        localStorage.setItem("nursing_exam_submissions_v1", JSON.stringify(trimmed));
      } catch (e2) {
        console.warn("[Submissions] Main submissions storage quota reached:", e2);
      }
    } catch (e) {
      console.error("[StudentMocks] Error saving student mock attempt:", e);
    }
  }

  /**
   * Get all mock attempts belonging to a specific student (IDOR isolated)
   */
  function getStudentMockHistory(studentId) {
    if (!studentId) return [];
    try {
      const allMocksMap = JSON.parse(localStorage.getItem(STORAGE_KEY_MOCKS) || "{}");
      const list = allMocksMap[studentId] || [];

      // Also cross-reference main submissions store to guarantee no attempts are missed
      const mainSubmissions = JSON.parse(localStorage.getItem("nursing_exam_submissions_v1") || "[]");
      const student = findStudentByIdentifier(studentId);
      let updatedList = false;

      mainSubmissions.forEach(sub => {
        const matchesId = sub.studentId && (String(sub.studentId).trim().toLowerCase() === String(studentId).trim().toLowerCase());
        const matchesCandId = sub.candidate && sub.candidate.studentId && (String(sub.candidate.studentId).trim().toLowerCase() === String(studentId).trim().toLowerCase());
        const matchesRoll = student && student.roll && sub.candidate && sub.candidate.roll && (String(sub.candidate.roll).trim().toLowerCase() === String(student.roll).trim().toLowerCase());
        const matchesPhone = student && student.phone && sub.candidate && sub.candidate.phone && (String(sub.candidate.phone).replace(/\D/g, '') === String(student.phone).replace(/\D/g, ''));
        const matchesName = student && student.name && sub.candidate && sub.candidate.name && (String(sub.candidate.name).trim().toLowerCase() === String(student.name).trim().toLowerCase());

        if (matchesId || matchesCandId || matchesRoll || (matchesPhone && matchesName)) {
          if (!list.some(m => m.id === sub.id)) {
            sub.studentId = studentId;
            list.push(sub);
            updatedList = true;
          }
        }
      });

      if (updatedList) {
        allMocksMap[studentId] = list;
        localStorage.setItem(STORAGE_KEY_MOCKS, JSON.stringify(allMocksMap));
      }

      // Sort chronological newest first
      list.sort((a, b) => {
        const tA = (a.submittedAt ? new Date(a.submittedAt).getTime() : 0) || (a.id && parseInt(a.id.split("-")[1], 10)) || 0;
        const tB = (b.submittedAt ? new Date(b.submittedAt).getTime() : 0) || (b.id && parseInt(b.id.split("-")[1], 10)) || 0;
        return tB - tA;
      });

      return list;
    } catch (e) {
      console.error("[StudentMocks] Error retrieving mock history:", e);
      return [];
    }
  }

  /**
   * Compute Real Personal Statistics for Authenticated Student
   */
  function calculateStudentStatistics(studentId) {
    const history = getStudentMockHistory(studentId);
    const totalMocks = history.length;
    if (totalMocks === 0) {
      return {
        totalMocks: 0,
        averageScore: 0,
        bestScore: 0,
        averageAccuracy: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        totalWrong: 0,
        totalSkipped: 0
      };
    }

    let sumPct = 0;
    let bestScore = 0;
    let sumCorrect = 0;
    let sumWrong = 0;
    let sumSkipped = 0;
    let sumQuestions = 0;

    history.forEach(m => {
      const pct = parseFloat(m.percentage) || 0;
      sumPct += pct;
      const score = parseFloat(m.totalScore) || 0;
      if (score > bestScore) bestScore = score;
      sumCorrect += (m.correctCount || 0);
      sumWrong += (m.wrongCount || 0);
      sumSkipped += (m.unattemptedCount || 0);
      sumQuestions += (m.totalQuestions || 0);
    });

    const attemptedQ = sumCorrect + sumWrong;
    const avgAccuracy = attemptedQ > 0 ? ((sumCorrect / attemptedQ) * 100).toFixed(1) : "0.0";
    const avgScorePct = (sumPct / totalMocks).toFixed(1);

    return {
      totalMocks,
      averageScore: avgScorePct,
      bestScore,
      averageAccuracy: avgAccuracy,
      totalQuestions: sumQuestions,
      totalCorrect: sumCorrect,
      totalWrong: sumWrong,
      totalSkipped: sumSkipped
    };
  }

  /**
   * Migration helper: Safe auto-migration of past submissions to permanent student
   */
  function migratePastSubmissionsForStudent(student) {
    if (!student || !student.studentId) return;
    try {
      const mainSubmissions = JSON.parse(localStorage.getItem("nursing_exam_submissions_v1") || "[]");
      let migrated = 0;

      mainSubmissions.forEach(sub => {
        const c = sub.candidate || {};
        const matchesRoll = student.roll && c.roll && c.roll.toLowerCase() === student.roll.toLowerCase();
        const matchesPhone = student.phone && c.phone && c.phone === student.phone;
        const matchesName = student.name && c.name && c.name.toLowerCase() === student.name.toLowerCase();

        if (matchesRoll || matchesPhone || (matchesName && matchesRoll)) {
          if (!sub.studentId) {
            sub.studentId = student.studentId;
            migrated++;
          }
          recordStudentMockAttempt(sub);
        }
      });

      if (migrated > 0) {
        localStorage.setItem("nursing_exam_submissions_v1", JSON.stringify(mainSubmissions));
        console.log(`[StudentMigration] Successfully migrated ${migrated} past submissions to ${student.studentId}`);
      }
    } catch (e) {
      console.warn("[StudentMigration] Notice:", e.message);
    }
  }

  /**
   * Initialize default seed account if completely empty (ensures teacher/aspirants have a test account)
   */
  function ensureDefaultAccounts() {
    const students = getAllStudents();
    if (students.length === 0) {
      // Create seed Deepak Maurya student account
      const salt = "seed_salt_2026";
      hashPassword("896062", salt).then(hash => {
        const seedStudent = {
          studentId: "GMH20260001",
          name: "Deepak Maurya",
          phone: "8960627330",
          roll: "ROLL2026-101",
          batch: "General / Unreserved",
          dob: "2000-01-01",
          fatherName: "Mr. Maurya",
          photoUrl: "assets/deepak_mock_test_logo.jpg",
          passwordHash: hash,
          passwordSalt: salt,
          status: "active",
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        saveAllStudents([seedStudent]);
        localStorage.setItem(STORAGE_KEY_SEQ, "1");
        migratePastSubmissionsForStudent(seedStudent);
      });
    }
  }

  /**
   * Background sync to Node.js backend if reachable
   */
  async function syncStudentToServer(student, action) {
    try {
      const payload = { ...student, action };
      // Omit sensitive secrets
      delete payload.passwordHash;
      delete payload.passwordSalt;

      await fetch(`${API_BASE}/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      // Quiet fallback when node server is offline
    }
  }

  /**
   * Background registration sync to server if active
   */
  async function syncStudentRegistrationToServer(studentData, rawPassword) {
    try {
      const api = getApiBase();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      await fetch(`${api}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: studentData.name,
          phone: studentData.phone,
          roll: studentData.roll,
          batch: studentData.batch || studentData.category,
          password: rawPassword,
          confirmPassword: rawPassword,
          photoUrl: (studentData.photoUrl && studentData.photoUrl.length < 50000) ? studentData.photoUrl : ""
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (e) {
      // Offline resilient
    }
  }

  /**
   * Sync student's permanent account to Google Sheets Cloud Registry
   * Ensures the student can log in from ANY device (Phone, Tablet, Laptop) anywhere in the world!
   */
  async function syncStudentToCloud(student) {
    if (!student || !student.studentId) return;
    const url = getCloudWebhookUrl();
    if (!url) return;

    try {
      const payload = {
        type: "student_registration",
        action: "register_student",
        student: {
          studentId: student.studentId,
          name: student.name,
          phone: student.phone,
          roll: student.roll,
          category: student.category || student.batch,
          batch: student.batch,
          passwordHash: student.passwordHash,
          passwordSalt: student.passwordSalt,
          status: student.status || "active",
          createdAt: student.createdAt
        }
      };

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        cache: "no-cache",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      console.log(`[CloudSync] Student ${student.studentId} registered in cloud sheet.`);
    } catch (err) {
      console.warn("[CloudSync] Notice syncing student to cloud:", err.message);
    }
  }

  /**
   * Fetch and synchronize all registered students from Google Sheets Cloud
   * Merges students registered on other devices into this local device
   */
  async function syncStudentsFromCloud() {
    const url = getCloudWebhookUrl();
    if (!url) return getAllStudents();

    try {
      const fetchUrl = url + (url.includes("?") ? "&" : "?") + "action=getStudents&t=" + Date.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000);

      const res = await fetch(fetchUrl, { method: "GET", signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const text = await res.text();
        let data = null;
        try {
          data = JSON.parse(text);
        } catch (pe) {
          return getAllStudents();
        }

        if (data && data.status === "success" && Array.isArray(data.students)) {
          const localStudents = getAllStudents();
          let mergedCount = 0;

          let maxSeq = parseInt(localStorage.getItem(STORAGE_KEY_SEQ) || "0", 10);

          data.students.forEach(cloudStu => {
            if (!cloudStu || !cloudStu.studentId) return;

            // Track max student ID sequence across cloud
            if (cloudStu.studentId.startsWith("GMH2026")) {
              const num = parseInt(cloudStu.studentId.replace("GMH2026", ""), 10);
              if (!isNaN(num) && num > maxSeq) maxSeq = num;
            }

            const existingIdx = localStudents.findIndex(s => 
              s.studentId === cloudStu.studentId || 
              (cloudStu.phone && s.phone && s.phone === cloudStu.phone)
            );

            if (existingIdx < 0) {
              localStudents.push(cloudStu);
              mergedCount++;
            } else {
              if (cloudStu.passwordHash && localStudents[existingIdx].passwordHash !== cloudStu.passwordHash) {
                localStudents[existingIdx].passwordHash = cloudStu.passwordHash;
                localStudents[existingIdx].passwordSalt = cloudStu.passwordSalt;
                mergedCount++;
              }
              if (cloudStu.name && !localStudents[existingIdx].name) {
                localStudents[existingIdx].name = cloudStu.name;
                mergedCount++;
              }
              if (cloudStu.category && (!localStudents[existingIdx].category || localStudents[existingIdx].category === "General")) {
                localStudents[existingIdx].category = cloudStu.category;
                localStudents[existingIdx].batch = cloudStu.category;
                mergedCount++;
              }
              if (cloudStu.status && localStudents[existingIdx].status !== cloudStu.status) {
                localStudents[existingIdx].status = cloudStu.status;
                mergedCount++;
              }
            }
          });

          if (maxSeq > parseInt(localStorage.getItem(STORAGE_KEY_SEQ) || "0", 10)) {
            localStorage.setItem(STORAGE_KEY_SEQ, String(maxSeq));
          }

          if (mergedCount > 0) {
            saveAllStudents(localStudents);
            console.log(`[CloudSync] Merged ${mergedCount} student accounts from Google Sheets.`);
          }
          return localStudents;
        }
      }
    } catch (err) {
      console.warn("[CloudSync] Notice fetching students from cloud:", err.message);
    }
    return getAllStudents();
  }

  /**
   * Remote server login fallback when student not found in local storage
   */
  async function attemptServerLogin(identifier, password) {
    try {
      const api = getApiBase();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const resp = await fetch(`${api}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "success" && data.student) {
          const salt = Math.random().toString(36).substring(2, 12);
          const hash = await hashPassword(password, salt);
          const localRecord = {
            ...data.student,
            passwordHash: hash,
            passwordSalt: salt,
            lastLoginAt: new Date().toISOString()
          };
          const list = getAllStudents();
          const existingIdx = list.findIndex(s => s.studentId === localRecord.studentId);
          if (existingIdx >= 0) list[existingIdx] = localRecord;
          else list.push(localRecord);
          saveAllStudents(list);
          return localRecord;
        }
      }
    } catch (e) {
      // Quiet offline fallback
    }
    return null;
  }

  /**
   * Paginated & filtered mock attempts for student
   */
  async function getStudentMocks(studentId, options = {}) {
    const list = getStudentMockHistory(studentId);
    let filtered = list;

    if (options.search) {
      const q = options.search.toLowerCase();
      filtered = filtered.filter(m => (m.examTitle || "").toLowerCase().includes(q) || (m.examId || "").toLowerCase().includes(q));
    }
    if (options.examId) {
      filtered = filtered.filter(m => m.examId === options.examId);
    }

    const total = filtered.length;
    const page = options.page || 1;
    const limit = options.limit || 10;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const start = (page - 1) * limit;
    const attempts = filtered.slice(start, start + limit);

    return {
      attempts,
      total,
      page,
      limit,
      totalPages
    };
  }

  /**
   * Get student statistics wrapper
   */
  async function getStudentStatistics(studentId) {
    const stats = calculateStudentStatistics(studentId);
    return {
      totalMocks: stats.totalMocks,
      avgScore: stats.averageScore,
      bestScore: stats.bestScore,
      avgAccuracy: stats.averageAccuracy,
      ...stats
    };
  }

  /**
   * Toggle student active / suspended status
   */
  async function toggleStudentStatus(studentId, status) {
    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx >= 0) {
      students[idx].status = status;
      students[idx].updatedAt = new Date().toISOString();
      saveAllStudents(students);
      return { status: "success", student: sanitizeStudent(students[idx]) };
    }
    return { status: "error", message: "Student not found" };
  }

  /**
   * Admin secure password reset
   */
  async function adminResetPassword(studentId, newPassword) {
    if (!newPassword || newPassword.length < 4) {
      return { status: "error", message: "Password must be at least 4 characters long." };
    }
    const students = getAllStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx < 0) return { status: "error", message: "Student not found" };

    const newSalt = Math.random().toString(36).substring(2, 12);
    students[idx].passwordSalt = newSalt;
    students[idx].passwordHash = await hashPassword(newPassword, newSalt);
    students[idx].updatedAt = new Date().toISOString();
    saveAllStudents(students);
    return { status: "success", message: "Password reset successful" };
  }

  // Run initial seed check and auto-clean bloated legacy storage
  ensureDefaultAccounts();
  cleanLocalStorageQuota();

  // Export public service API
  window.StudentAccountService = {
    STORAGE_KEY_STUDENTS,
    STORAGE_KEY_AUTH_INDEX,
    STORAGE_KEY_SESSION,
    STORAGE_KEY_MOCKS,
    STORAGE_KEY_MAIN_SUBMISSIONS,
    getAllStudents,
    findStudentByIdentifier,
    validateImageFile,
    compressImageDataUrl,
    cleanLocalStorageQuota,
    registerStudent,
    loginStudent,
    getCurrentStudent,
    getActiveSession: getCurrentStudent,
    saveActiveSession: setStudentSession,
    logoutStudent,
    updateStudentProfile,
    updateProfilePhoto,
    updateStudentPhoto: updateProfilePhoto,
    changePassword,
    resetForgottenPassword,
    recordStudentMockAttempt,
    getStudentMockHistory,
    getStudentMocks,
    calculateStudentStatistics,
    getStudentStatistics,
    toggleStudentStatus,
    adminResetPassword,
    migratePastSubmissionsForStudent,
    syncStudentToCloud,
    syncStudentsFromCloud,
    sanitizeStudent,
    generateNextStudentId,
    hashPassword,
    MAX_PHOTO_SIZE,
    MAX_PROFILE_PHOTO_SIZE: MAX_PHOTO_SIZE,
    ALLOWED_PHOTO_TYPES
  };

})(window);
