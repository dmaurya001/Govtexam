/**
 * GovtExamHub — All Government Exam Practice CBT Exam System - Core Logic
 * Handles real-time CBT testing, timer, anti-cheat, scoring,
 * student review, dynamic exam selection, and teacher/admin data management.
 */

// Application Global State
var state = {
  selectedExamId: null, // Dynamic: loaded from user click or saved preference
  selectedSubExamId: null,  // Specific verified sub-exam stage/paper
  examMode: "mock",         // 'mock' (timed CBT) | 'practice' (instant solutions)
  activeExamConfig: null,
  activeQuestionsData: [],
  candidate: {
    name: "",
    roll: "",
    phone: "",
    batch: "",
    exam: ""
  },
  currentStudent: null, // Connected permanent student account
  currentQuestionIndex: 0,
  currentSectionId: null,
  sectionTimerSeconds: 0,
  lockedSections: [],
  languageMode: "both", // 'both' | 'en' | 'hi'
  fontSize: "normal", // 'small' | 'normal' | 'large'
  timerSeconds: 7200,
  timerInterval: null,
  examStartTime: null,
  examEndTime: null,
  tabSwitchCount: 0,
  responses: [],
  activeReviewSubmission: null,
  
  // Storage Keys & Cloud Sync
  STORAGE_KEY_SUBMISSIONS: "nursing_exam_submissions_v1",
  STORAGE_KEY_CONFIG: "nursing_exam_cloud_config_v1",
  STORAGE_KEY_ADMIN_PIN: "govtexamhub_admin_pin_v1",
  DEFAULT_ADMIN_PIN: "896062",
  ADMIN_PIN: "896062",
  DEFAULT_CLOUD_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbxQt0Pwhd1P-G1CNNHVCTODceLYBpjfhI3iPxXmNLKQgl2wPjHuLYlU4vBZOupQkPsO/exec",
  SPREADSHEET_URL: "https://docs.google.com/spreadsheets/d/1IjVmBmR-q2c7ZP9UORJAn3tqDIjzl2S_hzB0oW6LXhk/edit?gid=0#gid=0"
};

/**
 * Access and manage dynamic Admin Passcode with persistence
 */
function getAdminPasscode() {
  try {
    const saved = localStorage.getItem(state.STORAGE_KEY_ADMIN_PIN);
    if (saved && saved.trim()) return saved.trim();
  } catch(e) {}
  return state.ADMIN_PIN || state.DEFAULT_ADMIN_PIN || "896062";
}

function setAdminPasscode(newPin) {
  if (!newPin || typeof newPin !== "string") return;
  const trimmed = newPin.trim();
  try {
    localStorage.setItem(state.STORAGE_KEY_ADMIN_PIN, trimmed);
  } catch(e) {}
  state.ADMIN_PIN = trimmed;
}

function resetAdminPasscode() {
  try {
    localStorage.removeItem(state.STORAGE_KEY_ADMIN_PIN);
  } catch(e) {}
  state.ADMIN_PIN = state.DEFAULT_ADMIN_PIN || "896062";
}

window.getAdminPasscode = getAdminPasscode;
window.setAdminPasscode = setAdminPasscode;
window.resetAdminPasscode = resetAdminPasscode;
window.state = state;

/**
 * Access active questions safely
 */
function getActiveQuestions() {
  if (state.activeQuestionsData && state.activeQuestionsData.length > 0) {
    return state.activeQuestionsData;
  }
  if (typeof getExamQuestions === "function" && state.selectedExamId) {
    return getExamQuestions(state.selectedExamId, false);
  }
  return typeof QUESTIONS_DATA !== "undefined" ? QUESTIONS_DATA : [];
}

/**
 * Access active exam configuration safely
 */
function getActiveConfig() {
  if (state.activeExamConfig) {
    return state.activeExamConfig;
  }
  if (typeof getExamConfig === "function" && state.selectedExamId) {
    return getExamConfig(state.selectedExamId);
  }
  return typeof EXAM_CONFIG !== "undefined" ? EXAM_CONFIG : NURSING_EXAM_CONFIG;
}

// DOM Elements Cache
const screens = {
  welcome: document.getElementById("screen-welcome"),
  cbt: document.getElementById("screen-cbt"),
  result: document.getElementById("screen-result"),
  admin: document.getElementById("screen-admin"),
  studentDashboard: document.getElementById("screen-student-dashboard")
};

const modals = {
  submitConfirm: document.getElementById("modal-submit-confirm"),
  detailedPaper: document.getElementById("modal-detailed-paper"),
  adminAuth: document.getElementById("modal-admin-auth"),
  cloudConfig: document.getElementById("modal-cloud-config"),
  changeAdminPin: document.getElementById("modal-change-admin-pin")
};

// Initialize Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("screen-welcome")) return;
  if (window.StudentAccountService && typeof StudentAccountService.cleanLocalStorageQuota === "function") {
    StudentAccountService.cleanLocalStorageQuota();
  }
  initEventListeners();
  loadCloudConfig();
  initExamCategorySelector();
  if (typeof initStudentAccountIntegration === "function") {
    initStudentAccountIntegration();
  }
  initInnovationSupportCard();
  initAdminPasscodeManager();
  checkUrlTestModes();
});

/**
 * Innovation Support Card & UPI Donation Modal Logic
 */
function initInnovationSupportCard() {
  const qrBox = document.getElementById("btn-open-support-qr-modal");
  const modal = document.getElementById("modal-support-innovation");
  const btnClose = document.getElementById("btn-close-support-modal");
  const btnHeroCopy = document.getElementById("btn-copy-upi-action");
  const heroCopyWrap = document.getElementById("btn-copy-upi-hero");
  const btnModalCopy = document.getElementById("btn-copy-upi-modal");
  const heroLabel = document.getElementById("copy-upi-label");
  const modalLabel = document.getElementById("modal-copy-label");
  const upiId = "8960627330@ptaxis";

  // 1. Open Modal on QR thumbnail tap
  if (qrBox && modal) {
    qrBox.addEventListener("click", () => {
      modal.classList.add("active");
    });
  }

  // 2. Close Modal
  if (btnClose && modal) {
    btnClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  // Helper copy function with fallback
  function copyUpi(labelElem, defaultText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(upiId).then(() => {
        if (labelElem) labelElem.textContent = "✓ Copied!";
        setTimeout(() => {
          if (labelElem) labelElem.textContent = defaultText;
        }, 2500);
      }).catch(() => fallbackCopy(labelElem, defaultText));
    } else {
      fallbackCopy(labelElem, defaultText);
    }
  }

  function fallbackCopy(labelElem, defaultText) {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = upiId;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      if (labelElem) labelElem.textContent = "✓ Copied!";
      setTimeout(() => {
        if (labelElem) labelElem.textContent = defaultText;
      }, 2500);
    } catch (e) {
      alert("UPI ID: " + upiId);
    }
  }

  // 3. Hero Card Copy Handlers
  if (btnHeroCopy) {
    btnHeroCopy.addEventListener("click", (e) => {
      e.stopPropagation();
      copyUpi(heroLabel, "📋 Copy");
    });
  }
  if (heroCopyWrap) {
    heroCopyWrap.addEventListener("click", () => {
      copyUpi(heroLabel, "📋 Copy");
    });
  }

  // 4. Modal Copy Handler
  if (btnModalCopy) {
    btnModalCopy.addEventListener("click", () => {
      copyUpi(modalLabel, "📋 Copy UPI");
    });
  }
}

/**
 * Admin Passcode Manager & Security Modal Logic
 */
function initAdminPasscodeManager() {
  const btnHeaderChange = document.getElementById("btn-admin-change-pin");
  const btnCardChange = document.getElementById("btn-open-change-pin-modal");
  const btnResetDefault = document.getElementById("btn-reset-default-pin");
  const modal = document.getElementById("modal-change-admin-pin");
  const btnClose = document.getElementById("btn-close-change-pin-modal");
  const btnCancel = document.getElementById("btn-cancel-change-pin");
  const btnSave = document.getElementById("btn-save-new-pin");
  const inputCurrent = document.getElementById("input-current-admin-pin");
  const inputNew = document.getElementById("input-new-admin-pin");
  const inputConfirm = document.getElementById("input-confirm-admin-pin");
  const msgBox = document.getElementById("change-pin-msg");

  function openChangePinModal() {
    if (!modal) return;
    if (inputCurrent) inputCurrent.value = "";
    if (inputNew) inputNew.value = "";
    if (inputConfirm) inputConfirm.value = "";
    if (msgBox) {
      msgBox.style.display = "none";
      msgBox.textContent = "";
      msgBox.style.background = "";
      msgBox.style.color = "";
    }
    modal.classList.add("active");
    if (inputCurrent) setTimeout(() => inputCurrent.focus(), 120);
  }

  function closeChangePinModal() {
    if (modal) modal.classList.remove("active");
  }

  if (btnHeaderChange) btnHeaderChange.addEventListener("click", openChangePinModal);
  if (btnCardChange) btnCardChange.addEventListener("click", openChangePinModal);
  if (btnClose) btnClose.addEventListener("click", closeChangePinModal);
  if (btnCancel) btnCancel.addEventListener("click", closeChangePinModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeChangePinModal();
    });
  }

  // Password visibility toggles
  document.querySelectorAll(".btn-toggle-pin-visibility").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetInput = document.getElementById(targetId);
      if (targetInput) {
        if (targetInput.type === "password") {
          targetInput.type = "text";
          btn.textContent = "🙈";
        } else {
          targetInput.type = "password";
          btn.textContent = "👁️";
        }
      }
    });
  });

  // Save new passcode handler
  function handleSaveNewPasscode() {
    const current = (inputCurrent ? inputCurrent.value : "").trim();
    const newPin = (inputNew ? inputNew.value : "").trim();
    const confirmPin = (inputConfirm ? inputConfirm.value : "").trim();
    const validCurrent = getAdminPasscode();

    if (!msgBox) return;

    if (!current) {
      showPinMsg("❌ Please enter your current passcode (वर्तमान पासवर्ड दर्ज करें).", "#fef2f2", "#b91c1c");
      if (inputCurrent) inputCurrent.focus();
      return;
    }
    if (current !== validCurrent) {
      showPinMsg("❌ Current passcode is incorrect (वर्तमान पासवर्ड गलत है).", "#fef2f2", "#b91c1c");
      if (inputCurrent) { inputCurrent.value = ""; inputCurrent.focus(); }
      return;
    }
    if (!newPin || newPin.length < 4) {
      showPinMsg("❌ New passcode must be at least 4 characters/digits (नया पासवर्ड कम से कम 4 अक्षर या अंक का होना चाहिए).", "#fef2f2", "#b91c1c");
      if (inputNew) inputNew.focus();
      return;
    }
    if (newPin !== confirmPin) {
      showPinMsg("❌ New passcode and confirm passcode do not match (दोनों पासवर्ड समान होने चाहिए).", "#fef2f2", "#b91c1c");
      if (inputConfirm) inputConfirm.focus();
      return;
    }

    // Save with persistence
    setAdminPasscode(newPin);
    showPinMsg("✅ Success! Admin passcode updated successfully (पासवर्ड सफलतापूर्वक बदल गया).", "#f0fdf4", "#15803d");

    setTimeout(() => {
      closeChangePinModal();
    }, 1800);
  }

  function showPinMsg(text, bg, color) {
    if (!msgBox) return;
    msgBox.textContent = text;
    msgBox.style.background = bg;
    msgBox.style.color = color;
    msgBox.style.border = `1px solid ${color}40`;
    msgBox.style.display = "block";
  }

  if (btnSave) btnSave.addEventListener("click", handleSaveNewPasscode);

  [inputCurrent, inputNew, inputConfirm].forEach(inp => {
    if (inp) {
      inp.addEventListener("keyup", (e) => {
        if (e.key === "Enter") handleSaveNewPasscode();
      });
    }
  });

  // Reset to default
  if (btnResetDefault) {
    btnResetDefault.addEventListener("click", () => {
      const confirmReset = confirm("Are you sure you want to reset the admin passcode to default (896062)?\nक्या आप वाकई पासवर्ड को डिफ़ॉल्ट (896062) पर रीसेट करना चाहते हैं?");
      if (confirmReset) {
        resetAdminPasscode();
        alert("✅ Admin passcode reset to default (896062)!\nपासवर्ड 896062 पर रीसेट हो गया है।");
      }
    });
  }
}


/**
 * URL Test Automation Modes for Testing and Screenshots
 */
function checkUrlTestModes() {
  const params = new URLSearchParams(window.location.search);
  const testMode = params.get("mode");
  const targetExam = params.get("exam");
  const targetSubExam = params.get("subexam");

  if (targetExam && typeof selectExamCategory === "function") {
    selectExamCategory(targetExam);
  }
  if (targetSubExam && typeof selectSubExam === "function") {
    selectSubExam(targetSubExam);
  }

  if (params.get("auth_tab") === "login") {
    const tabLog = document.getElementById("btn-auth-mode-login");
    if (tabLog) tabLog.click();
  }

  if (params.get("show_support_modal") === "1") {
    const modal = document.getElementById("modal-support-innovation");
    if (modal) modal.classList.add("active");
  }

  if (!testMode) return;

  if (testMode === "test_not_started") {
    selectExamCategory(targetExam || "banking");
    if (targetSubExam) selectSubExam(targetSubExam);
    return;
  }

  if (testMode === "test_cbt") {
    // Auto-launch CBT Exam with sample answered questions
    const examToUse = state.selectedSubExamId || targetExam;
    state.candidate = { name: "Deepak Maurya", roll: "ROLL2026-1042", phone: "8960627330", batch: "General (UR)" };
    state.examStartTime = new Date().toISOString();
    state.activeExamConfig = getExamConfig(examToUse);
    state.activeQuestionsData = getExamQuestions(examToUse, false);
    state.timerSeconds = state.activeExamConfig.durationMinutes * 60;

    if (params.get("practice") === "1") {
      state.examMode = "practice";
      const badge = document.getElementById("cbt-mode-badge");
      if (badge) {
        badge.textContent = "💡 Practice Mode (अभ्यास मोड)";
        badge.style.background = "#fffbeb";
        badge.style.color = "#b45309";
        badge.style.borderColor = "#fcd34d";
      }
    }

    state.responses = state.activeQuestionsData.map((q, idx) => ({
      qId: q.id,
      selectedOption: null,
      status: "not-visited"
    }));

    // Pre-answer some questions to show palette colors
    if (state.responses.length > 0) state.responses[0] = { qId: 1, selectedOption: "B", status: "answered" };
    if (state.responses.length > 1) state.responses[1] = { qId: 2, selectedOption: "A", status: "answered" };
    if (state.responses.length > 2) state.responses[2] = { qId: 3, selectedOption: "C", status: "answered" };
    if (state.responses.length > 3) state.responses[3] = { qId: 4, selectedOption: null, status: "review" };
    if (state.responses.length > 4) state.responses[4] = { qId: 5, selectedOption: "D", status: "answered-review" };
    if (state.responses.length > 5) state.responses[5] = { qId: 6, selectedOption: null, status: "not-answered" };

    document.getElementById("palette-candidate-name").textContent = state.candidate.name;
    document.getElementById("palette-candidate-roll").textContent = `Roll: ${state.candidate.roll}`;
    document.getElementById("palette-candidate-avatar").textContent = "D";

    const cbtTitle = document.getElementById("cbt-header-title");
    const cbtSub = document.getElementById("cbt-header-subtitle");
    if (cbtTitle) cbtTitle.textContent = "GovtExamHub — All Government Exam Practice";
    if (cbtSub) cbtSub.textContent = `${state.activeExamConfig.title} • ${state.activeQuestionsData.length} MCQs`;

    // Initialize timer display elements
    const totalSec = state.timerSeconds;
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    const timerDisplay = document.getElementById("timer-display");
    const liveTimeText = document.getElementById("live-time-text");
    if (timerDisplay) {
      timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    if (liveTimeText) {
      liveTimeText.textContent = `${hours > 0 ? hours + ' घंटे ' : ''}${minutes} मिनट ${seconds} सेकंड`;
    }

    // Initialize sectional timer if enabled
    if (state.activeExamConfig.hasSectionalTiming && state.activeExamConfig.sectionalTimingMinutes) {
      state.sectionTimerSeconds = state.activeExamConfig.sectionalTimingMinutes * 60;
      const secBox = document.getElementById("cbt-section-timer-box");
      if (secBox) secBox.style.display = "flex";
      const submitNextBtn = document.getElementById("btn-submit-next-section");
      if (submitNextBtn) submitNextBtn.style.display = "inline-flex";
    }

    renderSectionTabs();
    renderPaletteGrid();
    jumpToQuestion(0);
    showScreen("cbt");

  } else if (testMode === "test_result" || testMode === "test_review") {
    const examToUse = state.selectedSubExamId || targetExam;
    state.activeExamConfig = getExamConfig(examToUse);
    state.activeQuestionsData = getExamQuestions(examToUse, false);
    const mockSubmission = createMockSubmission("Deepak Maurya", "ROLL2026-1042", "8960627330", Math.floor(state.activeQuestionsData.length * 0.75));
    saveSubmissionRecord(mockSubmission);
    state.activeReviewSubmission = mockSubmission;
    renderResultScreen(mockSubmission);
    showScreen("result");

    if (testMode === "test_review") {
      openDetailedPaperModal(mockSubmission);
    }

  } else if (testMode === "test_admin") {
    const examToUse = state.selectedSubExamId || targetExam;
    state.activeExamConfig = getExamConfig(examToUse);
    state.activeQuestionsData = getExamQuestions(examToUse, false);
    const now = Date.now();
    const sub1 = createMockSubmission("Deepak Maurya", "ROLL2026-101", "8960627330", Math.floor(state.activeQuestionsData.length * 0.8));
    sub1.submittedAt = new Date(now - 120000).toISOString(); // 2 mins ago
    const sub2 = createMockSubmission("Rohan Verma", "ROLL2026-102", "9812345678", Math.floor(state.activeQuestionsData.length * 0.65));
    sub2.submittedAt = new Date(now - 60000).toISOString(); // 1 min ago
    const sub3 = createMockSubmission("Anjali Singh", "ROLL2026-103", "9723456789", Math.floor(state.activeQuestionsData.length * 0.45));
    sub3.submittedAt = new Date(now).toISOString(); // Just now (Latest!)
    localStorage.setItem(state.STORAGE_KEY_SUBMISSIONS, JSON.stringify([sub1, sub2, sub3]));
    renderAdminDashboard();
    showScreen("admin");

    if (params.get("admin_tab") === "patterns") {
      const tabPatterns = document.getElementById("tab-btn-patterns");
      if (tabPatterns) tabPatterns.click();
    } else if (params.get("admin_tab") === "students") {
      const tabStudents = document.getElementById("tab-btn-students") || document.getElementById("admin-tab-students");
      if (tabStudents) tabStudents.click();
    }
  } else if (testMode === "test_student_dashboard") {
    const demoStudent = {
      studentId: "GMH20260001",
      name: "Deepak Maurya",
      roll: "ROLL2026-1042",
      phone: "8960627330",
      email: "deepak.maurya@govtexamhub.in",
      category: "OBC",
      status: "active",
      createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
      lastLogin: new Date().toISOString()
    };
    state.currentStudent = demoStudent;
    if (window.StudentAccountService) {
      StudentAccountService.saveActiveSession(demoStudent);
      StudentAccountService.recordStudentMockAttempt({
        id: "SUB-DEMO-1",
        studentId: "GMH20260001",
        candidate: { name: "Deepak Maurya", roll: "ROLL2026-1042", phone: "8960627330" },
        examTitle: "SSC CGL Tier-I 2026",
        examId: "ssc",
        totalScore: 142,
        maxMarks: 200,
        percentage: "71.0",
        correctCount: 74,
        wrongCount: 12,
        timeTakenSeconds: 3200,
        submittedAt: new Date(Date.now() - 86400000).toISOString()
      });
      StudentAccountService.recordStudentMockAttempt({
        id: "SUB-DEMO-2",
        studentId: "GMH20260001",
        candidate: { name: "Deepak Maurya", roll: "ROLL2026-1042", phone: "8960627330" },
        examTitle: "NEET (UG) 2026",
        examId: "neet",
        totalScore: 598,
        maxMarks: 720,
        percentage: "83.1",
        correctCount: 152,
        wrongCount: 10,
        timeTakenSeconds: 7000,
        submittedAt: new Date().toISOString()
      });
    }
    showScreen("studentDashboard");
    renderStudentDashboard(demoStudent);
    if (params.get("exam") && typeof selectExamCategory === "function") {
      selectExamCategory(params.get("exam"));
    }
  } else if (testMode === "test_admin_auth") {
    modals.adminAuth.classList.add("active");
  } else if (testMode === "test_admin_change_pin") {
    showScreen("admin");
    renderAdminDashboard();
    const pinModal = document.getElementById("modal-change-admin-pin");
    if (pinModal) pinModal.classList.add("active");
  } else if (testMode === "test_admin_security_panel") {
    showScreen("admin");
    renderAdminDashboard();
    const secTab = document.getElementById("tab-btn-security");
    if (secTab) secTab.click();
  }

  if (params.get("auth_tab") === "login") {
    const tabLog = document.getElementById("btn-auth-mode-login");
    if (tabLog) tabLog.click();
  }
}

/**
 * Helper to generate a realistic mock submission with exact question responses
 */
function createMockSubmission(name, roll, phone, targetScore) {
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  const cfg = getActiveConfig();
  const questions = getActiveQuestions();
  const posMark = Number(cfg.marksPerCorrect || 1);
  const negMark = Number(cfg.negativeMarking || 0);
  let positiveMarks = 0;
  let negativeMarks = 0;

  const sectionScores = {};
  if (cfg.sections && cfg.sections.length > 0) {
    cfg.sections.forEach(s => {
      const qTotal = s.total || s.questions || 25;
      const sMarks = s.marks || (qTotal * posMark);
      sectionScores[s.id] = { name: s.name, correct: 0, wrong: 0, unattempted: 0, score: 0, total: qTotal, marks: sMarks };
    });
  } else {
    sectionScores["general"] = { name: "Mock Test", correct: 0, wrong: 0, unattempted: 0, score: 0, total: questions.length, marks: questions.length * posMark };
  }

  const detailedAnswers = questions.map((q, idx) => {
    let studentOption = null;
    let isCorrect = false;
    let status = "unattempted";

    if (!sectionScores[q.section]) {
      sectionScores[q.section] = { name: q.sectionName || q.section, correct: 0, wrong: 0, unattempted: 0, score: 0, total: 0 };
    }

    const totalQ = questions.length;
    const unattemptedThreshold = totalQ === 180 ? 170 : Math.max(targetScore, Math.floor(totalQ * 0.95));

    if (idx < targetScore) {
      studentOption = q.correctAnswer;
      isCorrect = true;
      status = "correct";
      correctCount++;
      positiveMarks += posMark;
      score += posMark;
      sectionScores[q.section].correct++;
      sectionScores[q.section].score += posMark;
    } else if (idx < unattemptedThreshold) {
      const wrongOpts = ["A", "B", "C", "D"].filter(o => o !== q.correctAnswer);
      studentOption = wrongOpts[0] || "A";
      isCorrect = false;
      status = "wrong";
      wrongCount++;
      negativeMarks += negMark;
      sectionScores[q.section].wrong++;
      if (negMark > 0) {
        score -= negMark;
        sectionScores[q.section].score -= negMark;
      }
    } else {
      studentOption = null;
      status = "unattempted";
      unattemptedCount++;
      sectionScores[q.section].unattempted++;
    }

    return {
      id: q.id,
      section: q.section,
      sectionName: q.sectionName,
      questionEn: q.questionEn,
      questionHi: q.questionHi,
      options: q.options,
      studentOption,
      correctOption: q.correctAnswer,
      isCorrect,
      status,
      explanation: q.explanation
    };
  });

  score = Number(Math.max(0, score).toFixed(2));
  positiveMarks = Number(positiveMarks.toFixed(2));
  negativeMarks = Number(negativeMarks.toFixed(2));
  const maxMarks = Number((cfg.totalMarks || (questions.length * posMark)).toFixed(0));

  return {
    id: "SUB-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
    candidate: { name, roll, phone, batch: "General / Aspirant" },
    examTitle: cfg.title,
    examId: state.selectedExamId,
    submittedAt: new Date().toISOString(),
    timeTakenSeconds: 5400,
    tabSwitches: 1,
    totalScore: score,
    positiveMarks,
    negativeMarks,
    maxMarks,
    totalQuestions: questions.length,
    percentage: ((score / maxMarks) * 100).toFixed(1),
    correctCount,
    wrongCount,
    unattemptedCount,
    sectionScores,
    detailedAnswers
  };
}
window.createMockSubmission = createMockSubmission;

/**
 * Switch Active Screen
 */
function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    if (screen && screen.classList) screen.classList.remove("active");
  });
  if (screens[screenName] && screens[screenName].classList) {
    screens[screenName].classList.add("active");
    if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Automatic fresh re-render whenever student dashboard is shown
  if (screenName === "studentDashboard") {
    const student = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
    if (student && typeof renderStudentDashboard === "function") {
      try {
        renderStudentDashboard(student);
      } catch(e) {
        console.warn("showScreen dashboard render notice:", e);
      }
    }
  }
}

/**
 * Initialize Event Listeners
 */
function initEventListeners() {
  if (!document.getElementById("screen-welcome")) return;

  // ── Candidate Registration Form ── Start Exam Button
  const candidateForm = document.getElementById("candidate-form");
  const btnStartExam = document.getElementById("btn-start-exam");

  if (btnStartExam) {
    btnStartExam.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleCandidateRegistration(e);
    });
  }

  if (candidateForm) {
    candidateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleCandidateRegistration(e);
    });
  }

  // ── Mode selection radio cards (Mock Test vs Practice Mode) ──
  const cardMock = document.getElementById("card-mode-mock");
  const cardPractice = document.getElementById("card-mode-practice");
  const radioMock = document.getElementById("exam-mode-mock");
  const radioPractice = document.getElementById("exam-mode-practice");

  if (cardMock && cardPractice) {
    cardMock.addEventListener("click", () => {
      cardMock.classList.add("active");
      cardPractice.classList.remove("active");
      if (radioMock) radioMock.checked = true;
      state.examMode = "mock";
    });
    cardPractice.addEventListener("click", () => {
      cardPractice.classList.add("active");
      cardMock.classList.remove("active");
      if (radioPractice) radioPractice.checked = true;
      state.examMode = "practice";
    });
  }

  // Admin Auth Triggers
  document.getElementById("btn-open-admin-auth").addEventListener("click", () => {
    document.getElementById("admin-pin-input").value = "";
    document.getElementById("admin-auth-err").style.display = "none";
    modals.adminAuth.classList.add("active");
    document.getElementById("admin-pin-input").focus();
  });

  document.getElementById("btn-close-auth-modal").addEventListener("click", () => modals.adminAuth.classList.remove("active"));
  document.getElementById("btn-cancel-auth").addEventListener("click", () => modals.adminAuth.classList.remove("active"));
  document.getElementById("btn-submit-auth").addEventListener("click", handleAdminLogin);
  document.getElementById("admin-pin-input").addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleAdminLogin();
  });

  document.getElementById("btn-exit-admin").addEventListener("click", () => showScreen("welcome"));

  // CBT Exam Controls
  document.getElementById("lang-switcher").addEventListener("change", (e) => {
    state.languageMode = e.target.value;
    renderCurrentQuestion();
  });

  // Font Size Adjusters
  document.getElementById("btn-font-dec").addEventListener("click", () => setFontSize("small"));
  document.getElementById("btn-font-reset").addEventListener("click", () => setFontSize("normal"));
  document.getElementById("btn-font-inc").addEventListener("click", () => setFontSize("large"));

  // Fullscreen
  document.getElementById("btn-fullscreen-toggle").addEventListener("click", toggleFullscreen);

  // Mobile Palette Drawer Toggle & Close Handlers
  const palette = document.getElementById("cbt-palette-panel");
  const backdrop = document.getElementById("palette-backdrop");

  const openPalette = () => {
    palette.classList.add("mobile-open");
    if (backdrop) backdrop.classList.add("active");
  };

  const closePalette = () => {
    palette.classList.remove("mobile-open");
    if (backdrop) backdrop.classList.remove("active");
  };

  const togglePalette = () => {
    if (palette.classList.contains("mobile-open")) closePalette();
    else openPalette();
  };

  document.getElementById("btn-mobile-palette").addEventListener("click", togglePalette);
  const footerPaletteBtn = document.getElementById("btn-mobile-palette-footer");
  if (footerPaletteBtn) footerPaletteBtn.addEventListener("click", togglePalette);

  const closeDrawerBtn = document.getElementById("btn-close-palette-drawer");
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closePalette);
  if (backdrop) backdrop.addEventListener("click", closePalette);

  // Action Buttons
  document.getElementById("btn-clear-response").addEventListener("click", handleClearResponse);
  document.getElementById("btn-mark-review").addEventListener("click", handleMarkForReviewAndNext);
  document.getElementById("btn-prev-question").addEventListener("click", handlePreviousQuestion);
  document.getElementById("btn-save-next").addEventListener("click", handleSaveAndNext);

  // Practice Mode Check Answer & Solution Toggle
  const btnPracticeCheck = document.getElementById("btn-practice-check-ans");
  if (btnPracticeCheck) btnPracticeCheck.addEventListener("click", handlePracticeCheckAnswer);

  const btnToggleExp = document.getElementById("btn-toggle-practice-exp");
  if (btnToggleExp) {
    btnToggleExp.addEventListener("click", () => {
      const expBody = document.getElementById("practice-exp-body");
      if (!expBody) return;
      if (expBody.style.display === "none") {
        expBody.style.display = "block";
        btnToggleExp.textContent = "Hide ▲";
      } else {
        expBody.style.display = "none";
        btnToggleExp.textContent = "Show Solution ▼";
      }
    });
  }

  // Sectional Timing Submit Next Section Button
  const btnNextSec = document.getElementById("btn-submit-next-section");
  if (btnNextSec) btnNextSec.addEventListener("click", handleUserSubmitSection);
  
  // Submit Exam Triggers
  document.getElementById("btn-open-submit-modal").addEventListener("click", openSubmitConfirmModal);
  document.getElementById("btn-palette-submit").addEventListener("click", openSubmitConfirmModal);
  document.getElementById("btn-close-submit-modal").addEventListener("click", () => modals.submitConfirm.classList.remove("active"));
  document.getElementById("btn-cancel-submit").addEventListener("click", () => modals.submitConfirm.classList.remove("active"));
  document.getElementById("btn-confirm-final-submit").addEventListener("click", handleFinalSubmit);

  // Result Actions
  document.getElementById("btn-student-review-paper").addEventListener("click", () => {
    if (state.activeReviewSubmission) {
      openDetailedPaperModal(state.activeReviewSubmission);
    }
  });

  document.getElementById("btn-send-whatsapp").addEventListener("click", handleSendWhatsAppResult);
  document.getElementById("btn-print-scorecard").addEventListener("click", () => window.print());
  document.getElementById("btn-retake-exam").addEventListener("click", () => {
    const student = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
    if (student) {
      showScreen("studentDashboard");
      renderStudentDashboard(student);
    } else {
      showScreen("welcome");
    }
  });

  // Detailed Paper Modal Actions
  document.getElementById("btn-close-detailed-paper").addEventListener("click", () => modals.detailedPaper.classList.remove("active"));
  document.getElementById("btn-dismiss-detailed-paper").addEventListener("click", () => modals.detailedPaper.classList.remove("active"));
  document.getElementById("btn-print-paper-modal").addEventListener("click", () => window.print());

  // Detailed Paper Filters
  document.querySelectorAll(".paper-filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".paper-filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const filterType = e.target.getAttribute("data-filter");
      renderDetailedQuestionsList(filterType);
    });
  });

  // ── Admin Controls ──
  const adminSearchInput = document.getElementById("admin-search-input");
  if (adminSearchInput) adminSearchInput.addEventListener("input", renderAdminTable);

  const adminSortSelect = document.getElementById("admin-sort-select");
  if (adminSortSelect) adminSortSelect.addEventListener("change", renderAdminTable);

  document.getElementById("btn-export-csv").addEventListener("click", exportAllSubmissionsToCSV);
  document.getElementById("btn-clear-all-data").addEventListener("click", handleClearAllRecords);

  const syncAllBtn = document.getElementById("btn-sync-all-to-sheets");
  if (syncAllBtn) syncAllBtn.addEventListener("click", syncAllSubmissionsToGoogleSheets);

  const refreshCloudBtn = document.getElementById("btn-refresh-cloud");
  if (refreshCloudBtn) refreshCloudBtn.addEventListener("click", () => fetchLiveSubmissionsFromCloud(true));

  // ── Admin Tab Navigation (All 5 Panels) ──
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const panelId = btn.getAttribute("data-panel");
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".admin-tab-panel").forEach(p => p.style.display = "none");
      const panel = document.getElementById(panelId);
      if (panel) panel.style.display = "block";
      // Render panel-specific content
      if (panelId === "panel-papers") renderPaperManagerPanel();
      if (panelId === "panel-security") renderSecurityPanel();
      if (panelId === "panel-patterns") renderAdminExamPatternsTable();
      // ── Daily Mock System Panel ──
      if (panelId === "panel-daily-mock" && typeof renderAdminDailyMockPanel === "function") {
        renderAdminDailyMockPanel(state.selectedExamId || "olevel");
      }
      // ── Student Accounts Panel ──
      if (panelId === "panel-students" && typeof renderAdminStudentsPanel === "function") {
        renderAdminStudentsPanel();
      }
    });
  });

  // ── Admin Pattern Table Search & Filters ──
  const patternSearch = document.getElementById("admin-pattern-search");
  if (patternSearch) patternSearch.addEventListener("input", renderAdminExamPatternsTable);

  const patternCatFilter = document.getElementById("admin-pattern-category-filter");
  if (patternCatFilter) patternCatFilter.addEventListener("change", renderAdminExamPatternsTable);

  const closeEditPatternBtn = document.getElementById("btn-close-edit-pattern");
  if (closeEditPatternBtn) closeEditPatternBtn.addEventListener("click", () => {
    document.getElementById("modal-edit-pattern").classList.remove("active");
  });

  const cancelEditPatternBtn = document.getElementById("btn-cancel-edit-pattern");
  if (cancelEditPatternBtn) cancelEditPatternBtn.addEventListener("click", () => {
    document.getElementById("modal-edit-pattern").classList.remove("active");
  });

  const resetPatternDefaultBtn = document.getElementById("btn-reset-pattern-default");
  if (resetPatternDefaultBtn) resetPatternDefaultBtn.addEventListener("click", () => {
    const examId = document.getElementById("edit-pattern-exam-id").value;
    if (examId) handleResetPatternToDefault(examId);
  });

  const formEditPattern = document.getElementById("form-edit-pattern");
  if (formEditPattern) formEditPattern.addEventListener("submit", handleSavePatternEdit);

  // ── Paper Manager: exam selector change ──
  const paperExamSelect = document.getElementById("admin-paper-exam-select");
  if (paperExamSelect) {
    paperExamSelect.addEventListener("change", () => renderPaperManagerPanel());
  }

  // ── Paper upload form ──
  const uploadForm = document.getElementById("admin-upload-paper-form");
  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => { e.preventDefault(); handleUploadPaperSet(false); });
  }
  const saveActivateBtn = document.getElementById("btn-save-and-activate-paper");
  if (saveActivateBtn) saveActivateBtn.addEventListener("click", () => handleUploadPaperSet(true));

  const sampleJsonBtn = document.getElementById("btn-load-sample-json");
  if (sampleJsonBtn) sampleJsonBtn.addEventListener("click", loadSampleJsonTemplate);

  // ── Security Panel ──
  const saveLimitBtn = document.getElementById("btn-save-daily-limit");
  if (saveLimitBtn) {
    saveLimitBtn.addEventListener("click", () => {
      const sel = document.getElementById("admin-max-daily-limit-select");
      if (sel) {
        const val = parseInt(sel.value, 10);
        setMaxDailyAttemptsLimit(val);
        const display = document.getElementById("admin-display-max-limit");
        if (display) display.textContent = val === 999 ? "Unlimited" : `${val} Exam${val > 1 ? "s" : ""} per Day`;
        alert(`✅ Daily limit updated to: ${val === 999 ? "Unlimited" : val + " exams per day"}`);
        renderSecurityPanel();
      }
    });
  }
  const resetAttemptsBtn = document.getElementById("btn-reset-all-daily-attempts");
  if (resetAttemptsBtn) {
    resetAttemptsBtn.addEventListener("click", () => {
      if (confirm("⚠️ Aaj ke sabhi candidates ke daily attempt records reset ho jaayenge. Confirm?")) {
        resetAllAttemptsToday();
        renderSecurityPanel();
        alert("✅ Aaj ke sabhi daily attempt records reset ho gaye!");
      }
    });
  }

  // ── Cloud Config Actions ──
  document.getElementById("btn-admin-cloud-config").addEventListener("click", () => {
    const saved = localStorage.getItem(state.STORAGE_KEY_CONFIG) || state.DEFAULT_CLOUD_WEBHOOK_URL;
    document.getElementById("cloud-webhook-url").value = saved;
    modals.cloudConfig.classList.add("active");
  });
  document.getElementById("btn-close-cloud-modal").addEventListener("click", () => modals.cloudConfig.classList.remove("active"));
  document.getElementById("btn-save-cloud-config").addEventListener("click", () => {
    const url = document.getElementById("cloud-webhook-url").value.trim() || state.DEFAULT_CLOUD_WEBHOOK_URL;
    localStorage.setItem(state.STORAGE_KEY_CONFIG, url);
    modals.cloudConfig.classList.remove("active");
    alert("Cloud Webhook URL saved successfully!");
  });
  document.getElementById("btn-test-cloud-webhook").addEventListener("click", testCloudWebhook);

  // ── Anti-Cheat Tab Switch Detection ──
  document.addEventListener("visibilitychange", () => {
    if (screens.cbt.classList.contains("active")) {
      if (document.hidden) {
        state.tabSwitchCount++;
        console.warn(`Anti-cheat: Tab switched ${state.tabSwitchCount} time(s).`);
      } else {
        alert(`⚠️ Warning: Tab switching detected (${state.tabSwitchCount} times)! This is recorded in your submission.`);
      }
    }
  });
}

/**
 * Initialize Exam Category Selector (13 categories)
 * NEET UG | B.Sc. Nursing | SSC | Banking | Railway | UPSSSC | Police | Defence | Teaching | NIELIT O Level | NIELIT CCC | State Government Exams | Other Government Exams
 */
function initExamCategorySelector() {
  const tabs = document.querySelectorAll(".category-tab-btn");
  if (!tabs || tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const examId = tab.getAttribute("data-exam-id");
      if (examId) {
        selectExamCategory(examId);
      }
    });
  });

  // Restore user's last chosen exam or default to the first category (neet)
  let savedExam = null;
  try {
    savedExam = localStorage.getItem("govtexamhub_selected_category");
  } catch(e) {}
  const initialExam = savedExam || state.selectedExamId || "neet";
  selectExamCategory(initialExam);
}

/**
 * Handle Selection of an Exam Category
 * Fulfills: "jo student jis course me click kre usi ka exanm start ho aur kisi ka nhi"
 * and "aur agr uske quetion paper n availeble ho to usme likh kr aye test not started"
 */
function selectExamCategory(examId) {
  state.selectedExamId = examId;
  try {
    localStorage.setItem("govtexamhub_selected_category", examId);
  } catch(e) {}
  let examEntry = (typeof EXAMS_REGISTRY !== "undefined" && EXAMS_REGISTRY[examId]) ? EXAMS_REGISTRY[examId] : null;

  if (!examEntry && typeof getExamConfig === "function") {
    const vCfg = getExamConfig(examId);
    if (vCfg) {
      examEntry = {
        id: examId,
        name: vCfg.title || vCfg.name || examId,
        shortName: vCfg.shortName || examId,
        icon: vCfg.icon || "📝",
        isAvailable: true,
        getConfig: () => vCfg,
        getQuestions: () => (typeof getExamQuestions === "function" ? getExamQuestions(examId) : [])
      };
    }
  }

  if (!examEntry) {
    console.warn("Exam category not found:", examId);
    return;
  }

  const config = examEntry.getConfig() || {};
  state.activeExamConfig = config;

  // 1. Update Category Tab Buttons active state
  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-exam-id") === examId);
  });

  // 2. DOM Elements
  const banner = document.getElementById("test-not-started-banner");
  const regTitle = document.getElementById("reg-exam-title");
  const regIcon = document.getElementById("reg-exam-icon");
  const regBadge = document.getElementById("reg-exam-badge");
  const btnStart = document.getElementById("btn-start-exam");
  const btnStartText = document.getElementById("btn-start-exam-text");

  // Dashboard specific elements
  const dashActiveTitle = document.getElementById("dash-active-exam-title");
  const dashActivePaper = document.getElementById("dash-active-paper-badge");
  const dashExamIcon = document.getElementById("dash-exam-icon-large");
  const btnDashStart = document.getElementById("btn-dash-start-exam");
  const btnDashStartText = document.getElementById("btn-dash-start-exam-text");
  
  const chipQuestions = document.getElementById("info-chip-questions");
  const chipMarks = document.getElementById("info-chip-marks");
  const chipDuration = document.getElementById("info-chip-duration");
  const chipMarking = document.getElementById("info-chip-marking");
  const secTagsBox = document.getElementById("section-overview-tags");
  const headingElem = document.getElementById("instructions-exam-heading");

  if (headingElem) {
    headingElem.textContent = `${examEntry.name} — General Instructions`;
  }

  // Update Indicator
  if (regTitle) regTitle.textContent = examEntry.name;
  if (regIcon) regIcon.textContent = examEntry.icon;
  if (dashExamIcon) dashExamIcon.textContent = examEntry.icon || "📝";
  if (dashActiveTitle) dashActiveTitle.textContent = examEntry.name;
  if (dashActivePaper) dashActivePaper.textContent = `📝 Paper Set 1 — Official Board Pattern (${config.totalQuestions || 100} Qs • ${config.totalMarks || 100} Marks)`;

  if (chipQuestions) chipQuestions.textContent = config.totalQuestions || 100;
  if (chipMarks) chipMarks.textContent = config.totalMarks || (config.totalQuestions * (config.marksPerCorrect || 1));
  if (chipDuration) chipDuration.textContent = `${config.durationMinutes || 120} Mins`;
  if (chipMarking) {
    const pos = config.marksPerCorrect ? `+${Number(config.marksPerCorrect).toFixed(1)}` : "+1.0";
    const neg = (config.negativeMarking && config.negativeMarking > 0) ? `-${Number(config.negativeMarking).toFixed(2)}` : "0.0";
    chipMarking.textContent = `${pos} / ${neg}`;
  }

  // BUG FIX: Update active paper indicator bar dynamically
  const paperInfo = (typeof getActivePaperInfo === "function") ? getActivePaperInfo(examId) : null;
  if (paperInfo) {
    const titleEl = document.getElementById("active-paper-title");
    const authorEl = document.getElementById("active-paper-author");
    if (titleEl) titleEl.textContent = paperInfo.name || "Paper Set 1";
    if (authorEl) authorEl.textContent = `Set Activated by ${paperInfo.activatedBy || "Admin"} (Teacher)`;
  }

  // BUG FIX: Update daily attempt status on welcome screen
  updateDailyAttemptStatusUI();

  // Update Section Tags
  if (secTagsBox) {
    secTagsBox.innerHTML = "";
    if (config.sections && config.sections.length > 0) {
      config.sections.forEach(s => {
        const span = document.createElement("span");
        span.className = "sec-tag";
        span.innerHTML = `${s.name} <span class="sec-q-count">${s.total} Qs</span>`;
        secTagsBox.appendChild(span);
      });
    } else {
      secTagsBox.innerHTML = `<span style="font-size: 0.8rem; color: #64748b;">(प्रश्न पत्र तैयार किया जा रहा है)</span>`;
    }
  }

  // 3. Check Availability ("aur agr uske quetion paper n availeble ho to usme likh kr aye test not started")
  if (!examEntry.isAvailable) {
    if (banner) {
      banner.style.display = "flex";
      const bannerName = document.getElementById("banner-exam-name");
      const bannerDesc = document.getElementById("banner-exam-desc");
      if (bannerName) bannerName.textContent = examEntry.shortName;
      if (bannerDesc) {
        bannerDesc.innerHTML = `
          इस परीक्षा (<strong>${examEntry.name}</strong>) का प्रश्न पत्र अभी उपलब्ध नहीं है (<strong>Test Not Started</strong>)।<br>
          कृपया अभी उपलब्ध लाइव परीक्षा (<strong>SSC, Police, Nursing, O level, CCC</strong>) का चयन करें।
        `;
      }
    }

    if (regBadge) {
      regBadge.className = "cat-badge badge-not-started";
      regBadge.textContent = "⏳ Test Not Started";
    }

    if (btnDashStart) {
      btnDashStart.disabled = true;
      btnDashStart.classList.add("btn-disabled");
    }
    if (btnDashStartText) {
      btnDashStartText.innerHTML = "⏳ Test Not Started / परीक्षा उपलब्ध नहीं";
    }

  } else {
    // Live available test
    if (banner) banner.style.display = "none";

    if (regBadge) {
      regBadge.className = "cat-badge badge-live";
      regBadge.textContent = "🟢 Live Test Available";
    }

    if (btnDashStart) {
      btnDashStart.disabled = false;
      btnDashStart.classList.remove("btn-disabled");
    }
    if (btnDashStartText) {
      btnDashStartText.innerHTML = `🚀 Start ${examEntry.shortName} Mock Test / परीक्षा शुरू करें &rarr;`;
    }
    if (btnDashStartText) {
      btnDashStartText.innerHTML = `🚀 Start ${examEntry.shortName} Mock Test / परीक्षा शुरू करें &rarr;`;
    }

    // Render Sub-Exams / Stages for this Category
    renderSubExamSelector(examId);
  }

  // ─── Daily Mock Info Widget ───
  if (typeof renderDailyMockWidget === "function") {
    renderDailyMockWidget(examId);
  }
}

/**
 * Render Sub-Exam Selection Pills for Multi-Stage / Multi-Paper Separation
 */
function renderSubExamSelector(catId) {
  const container = document.getElementById("sub-exam-pills-list");
  if (!container) return;
  container.innerHTML = "";

  const subExams = (typeof getVerifiedExamsByCategory === "function") 
    ? getVerifiedExamsByCategory(catId) 
    : [];

  const list = subExams.length > 0 ? subExams : [ getExamConfig(catId) ];

  list.forEach((sub, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "sub-exam-pill-btn";
    const subId = sub.examId || sub.id;
    pill.setAttribute("data-sub-exam-id", subId);

    const timingBadge = sub.timingMode === "sectional" 
      ? `<span class="pill-meta-badge pill-sec">⏱️ Sectional Timing (20m/Sec)</span>` 
      : `<span class="pill-meta-badge">+${sub.marksPerCorrect}/-${sub.negativeMarks !== undefined ? sub.negativeMarks : (sub.negativeMarking || 0)}</span>`;

    const stagePrefix = sub.stage ? `<span class="pill-stage">${sub.stage}:</span> ` : "";
    const shortTitle = sub.shortName || sub.examName || sub.title;

    pill.innerHTML = `
      <div class="pill-title">${stagePrefix}<strong>${shortTitle}</strong></div>
      <div class="pill-meta">
        <span>${sub.totalQuestions} Qs • ${sub.totalMarks} Marks • ${sub.durationMinutes}m</span>
        ${timingBadge}
      </div>
    `;

    pill.addEventListener("click", () => {
      selectSubExam(subId);
    });

    container.appendChild(pill);
  });

  // Select first sub-exam by default
  const defaultSub = list[0];
  if (defaultSub) {
    selectSubExam(defaultSub.examId || defaultSub.id);
  }
}

/**
 * Handle Sub-Exam Selection
 */
function selectSubExam(subExamId) {
  state.selectedSubExamId = subExamId;

  // Highlight active pill
  document.querySelectorAll(".sub-exam-pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-sub-exam-id") === subExamId);
  });

  const config = getExamConfig(subExamId);
  state.activeExamConfig = config;

  const chipQuestions = document.getElementById("info-chip-questions");
  const chipMarks = document.getElementById("info-chip-marks");
  const chipDuration = document.getElementById("info-chip-duration");
  const chipMarking = document.getElementById("info-chip-marking");
  const secTagsBox = document.getElementById("section-overview-tags");
  const headingElem = document.getElementById("instructions-exam-heading");
  const regTitle = document.getElementById("reg-exam-title");
  const btnStartText = document.getElementById("btn-start-exam-text");

  // Dashboard active elements
  const dashActiveTitle = document.getElementById("dash-active-exam-title");
  const dashActivePaper = document.getElementById("dash-active-paper-badge");
  const btnDashStartText = document.getElementById("btn-dash-start-exam-text");

  if (headingElem) {
    headingElem.textContent = `${config.title} — Official Exam Pattern`;
  }
  if (regTitle) {
    regTitle.textContent = config.title;
  }
  if (dashActiveTitle) {
    dashActiveTitle.textContent = config.title;
  }
  if (dashActivePaper) {
    dashActivePaper.textContent = `📝 ${config.title} • ${config.totalQuestions || 100} Questions • ${config.totalMarks || 100} Marks`;
  }
  if (btnDashStartText) {
    btnDashStartText.innerHTML = `🚀 Start ${config.shortName || config.title} Mock Test / परीक्षा शुरू करें &rarr;`;
  }

  if (chipQuestions) chipQuestions.textContent = config.totalQuestions || 100;
  if (chipMarks) chipMarks.textContent = config.totalMarks || 100;
  if (chipDuration) {
    chipDuration.textContent = config.timingMode === "sectional" 
      ? `${config.durationMinutes} Mins (20m/Sec)` 
      : `${config.durationMinutes} Mins`;
  }
  if (chipMarking) {
    const pos = config.marksPerCorrect !== undefined ? `+${Number(config.marksPerCorrect).toFixed(1)}` : "+1.0";
    const negVal = config.negativeMarks !== undefined ? Number(config.negativeMarks) : Number(config.negativeMarking || 0);
    const neg = negVal > 0 ? `-${negVal.toFixed(2)}` : "0.0";
    chipMarking.textContent = `${pos} / ${neg}`;
  }

  // Update Section Tags
  if (secTagsBox) {
    secTagsBox.innerHTML = "";
    if (config.sections && config.sections.length > 0) {
      config.sections.forEach(s => {
        const span = document.createElement("span");
        span.className = "sec-tag";
        const qCount = s.questions || s.total || 25;
        const marksCount = s.marks || (qCount * (config.marksPerCorrect || 1));
        span.innerHTML = `<strong>${s.name}</strong> <span class="sec-q-count">${qCount} Qs (${marksCount} M)</span>`;
        secTagsBox.appendChild(span);
      });
    } else {
      secTagsBox.innerHTML = `<span style="font-size: 0.8rem; color: #64748b;">(प्रश्न पत्र तैयार किया जा रहा है)</span>`;
    }
  }
}
window.selectSubExam = selectSubExam;
window.renderSubExamSelector = renderSubExamSelector;
window.selectExamCategory = selectExamCategory;

/**
 * Set examination mode ('mock' | 'practice')
 */
function setExamMode(mode) {
  state.examMode = mode;
  const cardMock = document.getElementById("card-mode-mock");
  const cardPractice = document.getElementById("card-mode-practice");
  const radioMock = document.getElementById("exam-mode-mock");
  const radioPractice = document.getElementById("exam-mode-practice");
  if (mode === "practice") {
    if (cardPractice) cardPractice.classList.add("active");
    if (cardMock) cardMock.classList.remove("active");
    if (radioPractice) radioPractice.checked = true;
  } else {
    if (cardMock) cardMock.classList.add("active");
    if (cardPractice) cardPractice.classList.remove("active");
    if (radioMock) radioMock.checked = true;
  }
}
window.setExamMode = setExamMode;

/**
 * Handle Candidate Registration and Launch CBT
 * Fulfills: "aur details minetry kro sab"
 * and "aur har baar student ko same paper n mile chnage hoke mile"
 */
/**
 * Handle Candidate Registration and Launch CBT
 * Fulfills: "aur details minetry kro sab"
 * and "aur har baar student ko same paper n mile chnage hoke mile"
 * and "ONE STUDENT = ONE PERMANENT ACCOUNT"
 */
async function handleCandidateRegistration(e) {
  if (e && typeof e.preventDefault === "function") e.preventDefault();

  // If student is already logged in, seamlessly use their permanent account!
  if (state.currentStudent) {
    const cand = state.currentStudent;
    const declaration = document.getElementById("declaration-check") ? document.getElementById("declaration-check").checked : true;
    if (!declaration) {
      alert("⚠️ अनिवार्य फ़ील्ड: कृपया परीक्षा घोषणा (Declaration) चेकबॉक्स पर टिक करें।");
      const declEl = document.getElementById("declaration-check");
      if (declEl) declEl.focus();
      return;
    }
    const modeRadio = document.querySelector('input[name="candidate-exam-mode"]:checked');
    state.examMode = modeRadio ? modeRadio.value : "mock";
    startExamForCandidate(cand.name, cand.roll, cand.phone, cand.category || "General");
    return;
  }

  // Otherwise, this is a NEW student registering for their permanent account
  const name = document.getElementById("student-name").value.trim();
  const rollInput = document.getElementById("student-roll");
  let roll = rollInput ? rollInput.value.trim() : "";
  if (!roll) {
    roll = "ROLL-" + Math.floor(100000 + Math.random() * 900000);
  }
  const phone = document.getElementById("student-phone").value.trim();
  const batch = document.getElementById("student-batch").value.trim();
  const password = document.getElementById("student-password") ? document.getElementById("student-password").value : "";
  const confPassInput = document.getElementById("student-conf-password") || document.getElementById("student-password-confirm");
  const confirmPassword = confPassInput ? confPassInput.value : "";
  const declaration = document.getElementById("declaration-check") ? document.getElementById("declaration-check").checked : false;

  // Standard continuous CBT mock test mode
  const modeRadio = document.querySelector('input[name="candidate-exam-mode"]:checked');
  state.examMode = modeRadio ? modeRadio.value : "mock";

  // Strict mandatory validation: "aur details minetry kro sab"
  if (!name) {
    alert("⚠️ अनिवार्य फ़ील्ड: कृपया परीक्षार्थी का पूरा नाम (Full Name) दर्ज करें।");
    document.getElementById("student-name").focus();
    return;
  }
  if (!phone || !/^[0-9]{10}$/.test(phone)) {
    alert("⚠️ अनिवार्य फ़ील्ड: कृपया 10 अंकों का वैध मोबाइल / व्हाट्सएप नंबर दर्ज करें।");
    document.getElementById("student-phone").focus();
    return;
  }
  if (!batch) {
    alert("⚠️ अनिवार्य फ़ील्ड: कृपया अपनी आरक्षण श्रेणी (Category / Reservation) चुनें।");
    document.getElementById("student-batch").focus();
    return;
  }
  if (!password || password.length < 4) {
    alert("⚠️ पासवर्ड अनिवार्य: कृपया कम से कम 4 अक्षरों का सुरक्षित पासवर्ड दर्ज करें।");
    if (document.getElementById("student-password")) document.getElementById("student-password").focus();
    return;
  }
  if (password !== confirmPassword) {
    alert("⚠️ पासवर्ड असंगत: पासवर्ड और कन्फर्म पासवर्ड एक समान होने चाहिए।");
    if (confPassInput) confPassInput.focus();
    return;
  }
  // Profile Photo Validation (Mandatory for new student registration, Max 5 MB)
  if (!window._currentRegPhotoBase64) {
    alert("⚠️ प्रोफाइल फोटो अनिवार्य: कृपया अपनी हाल ही की पासपोर्ट साइज़ फोटो (अधिकतम 5 MB, JPG/PNG/WEBP) अपलोड करें।");
    const photoInput = document.getElementById("reg-student-photo");
    if (photoInput) photoInput.focus();
    return;
  }
  if (!declaration) {
    alert("⚠️ अनिवार्य फ़ील्ड: कृपया परीक्षा घोषणा (Declaration) चेकबॉक्स पर टिक करें।");
    document.getElementById("declaration-check").focus();
    return;
  }

  // Register permanent account via StudentAccountService
  if (window.StudentAccountService && typeof StudentAccountService.registerStudent === "function") {
    try {
      const regResult = await StudentAccountService.registerStudent({
        name,
        roll,
        phone,
        category: batch,
        password,
        photoBase64: window._currentRegPhotoBase64
      });

      if (regResult.status === "error") {
        alert("⚠️ " + regResult.message);
        return;
      }

      state.currentStudent = regResult.student;
      if (typeof updateWelcomeActiveSession === "function") {
        updateWelcomeActiveSession(regResult.student);
      }

      // Auto-migrate past submissions if any
      StudentAccountService.migratePastSubmissionsForStudent(regResult.student);

      // Show Success Modal with Permanent Student ID
      if (typeof showRegistrationSuccessModal === "function") {
        showRegistrationSuccessModal(regResult.student, () => {
          showScreen("studentDashboard");
          renderStudentDashboard(regResult.student);
        });
      } else {
        alert(`✅ पंजीकरण सफल!\nआपका स्थायी Student ID: ${regResult.student.studentId}\nकृपया इसे भविष्य में लॉगिन करने के लिए सुरक्षित रखें।`);
        showScreen("studentDashboard");
        renderStudentDashboard(regResult.student);
      }
      return;
    } catch (err) {
      alert("⚠️ पंजीकरण में त्रुटि: " + err.message);
      return;
    }
  }

  // Fallback
  startExamForCandidate(name, roll, phone, batch);
}

/**
 * Start CBT Exam For Candidate (Shared core launcher)
 */
function startExamForCandidate(name, roll, phone, batch) {
  // Guard: Test Not Started check
  const examEntry = EXAMS_REGISTRY[state.selectedExamId];
  if (!examEntry || !examEntry.isAvailable) {
    alert(`⚠️ Test Not Started:\nइस परीक्षा (${examEntry ? examEntry.name : state.selectedExamId}) का टेस्ट पेपर अभी उपलब्ध नहीं है।\nकृपया उपलब्ध परीक्षाएं चुनें।`);
    return;
  }

  // Target exam ID (sub-exam if selected, else category)
  const targetExamKey = state.selectedSubExamId || state.selectedExamId;

  if (!state.currentStudent && window.StudentAccountService) {
    state.currentStudent = StudentAccountService.getActiveSession();
  }
  const studentId = state.currentStudent ? state.currentStudent.studentId : null;
  state.candidate = { name, roll, phone, batch, exam: examEntry.name, studentId };
  state.examStartTime = new Date().toISOString();
  state.tabSwitchCount = 0;
  state.currentQuestionIndex = 0;

  // "aur har baar student ko same paper n mile chnage hoke mile"
  // Daily Mock System: deterministic slot-based paper (same for all students in same slot)
  // Falls back to random shuffle if daily_slot_service is not loaded.
  if (typeof getDailyMockQuestionsForExam === "function") {
    state.activeQuestionsData = getDailyMockQuestionsForExam(targetExamKey);
    if (!state.activeQuestionsData || state.activeQuestionsData.length === 0) {
      state.activeQuestionsData = getExamQuestions(targetExamKey, true);
    }
  } else {
    state.activeQuestionsData = getExamQuestions(targetExamKey, true);
  }
  state.activeExamConfig = getExamConfig(targetExamKey);
  state.timerSeconds = state.activeExamConfig.durationMinutes * 60;

  state.lockedSections = [];
  state.currentSectionId = null;

  // Update Continuous Exam Title in CBT subbar
  const paperTitlePill = document.getElementById("cbt-paper-title-pill");
  if (paperTitlePill) {
    paperTitlePill.textContent = `📝 ${state.activeExamConfig.title || "Exam Mock Test"}`;
  }

  // Practice mode solution check button setup
  const btnPracticeCheck = document.getElementById("btn-practice-check-ans");
  if (btnPracticeCheck) {
    btnPracticeCheck.style.display = state.examMode === "practice" ? "inline-flex" : "none";
  }

  // Initialize response state for all questions
  state.responses = state.activeQuestionsData.map((q, idx) => ({
    qId: q.id,
    selectedOption: null,
    // First question is set to 'not-answered' as per standard CBT when exam begins
    status: idx === 0 ? "not-answered" : "not-visited"
  }));

  // Update Candidate Card & Topbar in CBT
  const candNameEl = document.getElementById("palette-candidate-name");
  if (candNameEl) candNameEl.textContent = state.candidate.name;
  const candRollEl = document.getElementById("palette-candidate-roll");
  if (candRollEl) {
    const studentIdPrefix = state.currentStudent ? `${state.currentStudent.studentId} • ` : "";
    candRollEl.textContent = `${studentIdPrefix}Roll: ${state.candidate.roll}`;
  }
  const candAvatarEl = document.getElementById("palette-candidate-avatar");
  if (candAvatarEl) {
    if (state.currentStudent && state.currentStudent.photoUrl) {
      candAvatarEl.innerHTML = `<img src="${state.currentStudent.photoUrl}" alt="Photo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
    } else {
      candAvatarEl.textContent = state.candidate.name.charAt(0).toUpperCase();
    }
  }

  const cbtTitle = document.getElementById("cbt-header-title");
  const cbtSub = document.getElementById("cbt-header-subtitle");
  if (cbtTitle) cbtTitle.textContent = "GovtExamHub — All Government Exam Practice";
  if (cbtSub) {
    const modeBadge = state.examMode === "practice" ? "💡 Practice Mode (Instant Solutions)" : "Official CBT Mock Test";
    cbtSub.textContent = `${state.activeExamConfig.title} • ${modeBadge} • Total ${state.activeQuestionsData.length} MCQs`;
  }

  // Render Section Tabs
  renderSectionTabs();

  // Render Palette Grid (1-N)
  renderPaletteGrid();

  // BUG FIX: Record this attempt for daily limit tracking
  if (typeof recordCandidateAttempt === "function") {
    const paperInfo = typeof getActivePaperInfo === "function" ? getActivePaperInfo(state.selectedExamId) : {};
    recordCandidateAttempt({
      name,
      roll,
      phone,
      examId: targetExamKey,
      examTitle: state.activeExamConfig.title,
      paperId: paperInfo.id || "set_1",
      paperName: paperInfo.name || "Paper Set 1"
    });
  }

  // Render First Question
  renderCurrentQuestion();

  // Start Timer
  startExamTimer();

  // Switch to CBT Screen
  showScreen("cbt");
}
window.startExamForCandidate = startExamForCandidate;

/**
 * Render Active Paper & Subject Badges in CBT subbar
 */
function renderSectionTabs() {
  const config = getActiveConfig();
  const questions = getActiveQuestions();
  const currentQ = questions[state.currentQuestionIndex];
  
  const titlePill = document.getElementById("cbt-paper-title-pill");
  if (titlePill) {
    titlePill.textContent = `📝 ${config.title || "Exam Mock Test"}`;
  }

  const subjBadge = document.getElementById("cbt-active-subject-badge");
  if (subjBadge && currentQ) {
    subjBadge.textContent = `Subject: ${currentQ.sectionName || currentQ.section || "General"}`;
  }
}

/**
 * Continuous mock test - legacy sectional timing advance stub (not used in continuous tests)
 */
function advanceToNextSection() {
  // Continuous test: advance to next question if any
  const questions = getActiveQuestions();
  if (state.currentQuestionIndex < questions.length - 1) {
    jumpToQuestion(state.currentQuestionIndex + 1);
  } else {
    handleFinalSubmit();
  }
}

/**
 * Continuous mock test - legacy section submit stub
 */
function handleUserSubmitSection() {
  handleSaveAndNext();
}

/**
 * Highlight Active Subject Badge & Palette Subject Label
 */
function updateActiveSectionTab() {
  const questions = getActiveQuestions();
  const currentQ = questions[state.currentQuestionIndex];
  if (!currentQ) return;

  const subjName = currentQ.sectionName || currentQ.section || "General";
  const namePart = subjName.split("/")[0].trim();

  const subjBadge = document.getElementById("cbt-active-subject-badge");
  if (subjBadge) {
    subjBadge.textContent = `Subject: ${namePart}`;
  }

  const curSecElem = document.getElementById("palette-current-section-name");
  if (curSecElem) {
    curSecElem.textContent = namePart;
  }
}

/**
 * Render Question Palette Grid (1 to N dynamically based on total questions)
 */
function renderPaletteGrid() {
  const grid = document.getElementById("question-palette-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const questions = getActiveQuestions();

  const palRange = document.getElementById("palette-total-range");
  if (palRange) {
    palRange.textContent = `QUESTION PALETTE (1-${questions.length})`;
  }

  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "q-grid-btn badge-not-visited";
    btn.id = `palette-btn-${idx}`;
    btn.textContent = idx + 1;
    const subj = q.sectionName || q.section || "General";
    btn.title = `Question ${idx + 1} (${subj})`;

    // Student can freely click and jump to any question 1 to N anytime
    btn.addEventListener("click", () => {
      jumpToQuestion(idx);
      // Close mobile palette drawer if open
      const drawer = document.getElementById("cbt-palette-panel");
      if (drawer) drawer.classList.remove("mobile-open");
      const backdrop = document.getElementById("palette-backdrop");
      if (backdrop) backdrop.classList.remove("active");
    });

    grid.appendChild(btn);
  });

  updatePaletteStatusUI();
}

/**
 * Update Palette Button Colors & Legend Counts
 * Official Statuses:
 * Gray = Not Visited
 * Blue = Visited
 * Green = Answered
 * Red = Not Answered
 * Purple = Marked for Review
 */
function updatePaletteStatusUI() {
  let answered = 0;
  let notAnswered = 0;
  let visited = 0;
  let notVisited = 0;
  let review = 0;

  state.responses.forEach((resp, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    btn.className = "q-grid-btn"; // reset classes

    switch (resp.status) {
      case "answered":
        btn.classList.add("badge-answered");
        answered++;
        break;
      case "not-answered":
        btn.classList.add("badge-not-answered");
        notAnswered++;
        break;
      case "visited":
        btn.classList.add("badge-visited");
        visited++;
        break;
      case "review":
        btn.classList.add("badge-review");
        review++;
        break;
      case "answered-review":
        btn.classList.add("badge-answered-review");
        review++;
        break;
      case "not-visited":
      default:
        btn.classList.add("badge-not-visited");
        notVisited++;
        break;
    }

    if (idx === state.currentQuestionIndex) {
      btn.classList.add("current");
    }
  });

  // Update Legend numbers
  const elAns = document.getElementById("count-answered");
  const elNotAns = document.getElementById("count-not-answered");
  const elVisited = document.getElementById("count-visited");
  const elNotVis = document.getElementById("count-not-visited");
  const elReview = document.getElementById("count-review");

  if (elAns) elAns.textContent = answered;
  if (elNotAns) elNotAns.textContent = notAnswered;
  if (elVisited) elVisited.textContent = visited;
  if (elNotVis) elNotVis.textContent = notVisited;
  if (elReview) elReview.textContent = review;
}

/**
 * Render Current Question & Options (Continuous Paper Interface)
 */
function renderCurrentQuestion() {
  const questions = getActiveQuestions();
  const currentQ = questions[state.currentQuestionIndex];
  if (!currentQ) return;
  const currentResp = state.responses[state.currentQuestionIndex];

  // If question was not visited yet, mark it as visited (Blue)
  if (currentResp && currentResp.status === "not-visited") {
    currentResp.status = "visited";
  }

  // Update Meta Header with Question Number and Subject
  const qMetaTag = document.getElementById("q-meta-tag");
  if (qMetaTag) {
    const subjName = currentQ.sectionName || currentQ.section || "General";
    qMetaTag.textContent = `Question No. ${state.currentQuestionIndex + 1} / ${questions.length} • Subject: ${subjName}`;
  }

  // Update Dynamic Marking Scheme in Question Bar
  const activeCfg = getActiveConfig();
  const qMarkingPos = document.getElementById("q-marking-pos");
  const qMarkingNeg = document.getElementById("q-marking-neg");
  if (qMarkingPos) {
    qMarkingPos.textContent = `+${Number(activeCfg.marksPerCorrect || 1).toFixed(2)}`;
  }
  if (qMarkingNeg) {
    const negVal = Number(activeCfg.negativeMarking || 0);
    qMarkingNeg.textContent = negVal > 0 ? `-${negVal.toFixed(2)}` : "0.00";
  }

  // Render Bilingual or Monolingual Question Text
  const enElem = document.getElementById("q-text-en");
  const hiElem = document.getElementById("q-text-hi");

  if (enElem) enElem.textContent = `Q${currentQ.id || (state.currentQuestionIndex + 1)}. ${currentQ.questionEn}`;
  if (hiElem) hiElem.textContent = `${currentQ.questionHi}`;

  if (enElem && hiElem) {
    if (state.languageMode === "en") {
      enElem.style.display = "block";
      hiElem.style.display = "none";
    } else if (state.languageMode === "hi") {
      enElem.style.display = "none";
      hiElem.style.display = "block";
    } else {
      enElem.style.display = "block";
      hiElem.style.display = "block";
    }
  }

  // Render Options (No section locks: completely unrestricted)
  const optionsContainer = document.getElementById("options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = "";

    currentQ.options.forEach(opt => {
      const optCard = document.createElement("div");
      optCard.className = "option-item";

      if (currentResp && currentResp.selectedOption === opt.id) {
        optCard.classList.add("selected");
      }

      // Practice mode persistent color highlights
      if (state.examMode === "practice" && currentResp && currentResp.selectedOption) {
        if (opt.id === currentQ.correctAnswer) {
          optCard.classList.add("practice-correct");
        } else if (opt.id === currentResp.selectedOption) {
          optCard.classList.add("practice-wrong");
        }
      }

      let optionContentHtml = "";
      if (state.languageMode === "en") {
        optionContentHtml = `<div class="option-text-en">${opt.textEn}</div>`;
      } else if (state.languageMode === "hi") {
        optionContentHtml = `<div class="option-text-hi">${opt.textHi}</div>`;
      } else {
        optionContentHtml = `
          <div class="option-text-en">${opt.textEn}</div>
          <div class="option-text-hi">${opt.textHi}</div>
        `;
      }

      optCard.innerHTML = `
        <div class="option-letter">${opt.id}</div>
        <div class="option-content">
          ${optionContentHtml}
        </div>
      `;

      optCard.addEventListener("click", () => {
        selectOption(opt.id);
      });

      optionsContainer.appendChild(optCard);
    });
  }

  // Practice Mode: Show explanation if already answered, otherwise hide
  const expCard = document.getElementById("practice-explanation-card");
  if (expCard) {
    if (state.examMode === "practice" && currentResp && currentResp.selectedOption) {
      showPracticeExplanation(currentQ, currentResp.selectedOption);
    } else {
      expCard.style.display = "none";
    }
  }

  // Update Subject Badge & Palette Status
  updateActiveSectionTab();
  updatePaletteStatusUI();

  // Scroll question container to top
  const container = document.getElementById("question-content-container");
  if (container) container.scrollTop = 0;
}

/**
 * Handle Option Selection
 */
function selectOption(optionId) {
  const questions = getActiveQuestions();
  const currentQ = questions[state.currentQuestionIndex];
  if (!currentQ) return;

  const currentResp = state.responses[state.currentQuestionIndex];
  if (currentResp) {
    currentResp.selectedOption = optionId;
    currentResp.status = "answered";
  }

  // Update UI selection
  const options = document.querySelectorAll(".option-item");
  if (currentQ && currentQ.options) {
    currentQ.options.forEach((opt, idx) => {
      if (options[idx]) {
        if (opt.id === optionId) {
          options[idx].classList.add("selected");
        } else {
          options[idx].classList.remove("selected");
        }

        // Practice Mode: Immediate instant validation highlight
        if (state.examMode === "practice") {
          options[idx].classList.remove("practice-correct", "practice-wrong");
          if (opt.id === currentQ.correctAnswer) {
            options[idx].classList.add("practice-correct");
          } else if (opt.id === optionId) {
            options[idx].classList.add("practice-wrong");
          }
        }
      }
    });
  }

  // Practice Mode: Display explanation card immediately
  if (state.examMode === "practice") {
    showPracticeExplanation(currentQ, optionId);
  }

  updatePaletteStatusUI();
}

/**
 * Display Practice Mode Solution & Explanation
 */
function showPracticeExplanation(currentQ, pickedOptionId) {
  const card = document.getElementById("practice-explanation-card");
  const badge = document.getElementById("practice-result-badge");
  const correctOptEl = document.getElementById("practice-correct-opt");
  const expTextEl = document.getElementById("practice-exp-text");

  if (!card) return;

  const isCorrect = pickedOptionId === currentQ.correctAnswer;
  if (badge) {
    badge.className = isCorrect ? "practice-badge correct" : "practice-badge wrong";
    badge.textContent = isCorrect ? "✓ सही उत्तर (Correct Answer!)" : "✗ गलत उत्तर (Incorrect Answer)";
  }

  if (correctOptEl) {
    const correctObj = (currentQ.options || []).find(o => o.id === currentQ.correctAnswer);
    const correctText = correctObj ? (correctObj.textEn + " / " + correctObj.textHi) : "";
    correctOptEl.innerHTML = `सही विकल्प (Correct Option): <strong style="color: #16a34a; font-size: 1.05rem;">[${currentQ.correctAnswer}] ${correctText}</strong>`;
  }

  if (expTextEl) {
    expTextEl.innerHTML = currentQ.explanation || "No explanation provided for this question.";
  }

  card.style.display = "block";
  const expBody = document.getElementById("practice-exp-body");
  if (expBody) expBody.style.display = "block";
}

/**
 * Handle "View Solution" button in Practice Mode
 */
function handlePracticeCheckAnswer() {
  const questions = getActiveQuestions();
  const currentQ = questions[state.currentQuestionIndex];
  if (!currentQ) return;
  const currentResp = state.responses[state.currentQuestionIndex];
  const picked = currentResp ? currentResp.selectedOption : null;

  showPracticeExplanation(currentQ, picked);

  const options = document.querySelectorAll(".option-item");
  if (currentQ.options) {
    currentQ.options.forEach((opt, idx) => {
      if (options[idx]) {
        options[idx].classList.remove("practice-correct", "practice-wrong");
        if (opt.id === currentQ.correctAnswer) {
          options[idx].classList.add("practice-correct");
        } else if (opt.id === picked) {
          options[idx].classList.add("practice-wrong");
        }
      }
    });
  }
}

/**
 * Save & Next Button
 */
function handleSaveAndNext() {
  const currentResp = state.responses[state.currentQuestionIndex];
  if (currentResp) {
    currentResp.status = currentResp.selectedOption ? "answered" : "not-answered";
  }

  const questions = getActiveQuestions();
  if (state.currentQuestionIndex < questions.length - 1) {
    jumpToQuestion(state.currentQuestionIndex + 1);
  } else {
    updatePaletteStatusUI();
    openSubmitConfirmModal();
  }
}

/**
 * Mark for Review & Next Button
 */
function handleMarkForReviewAndNext() {
  const currentResp = state.responses[state.currentQuestionIndex];
  if (currentResp) {
    currentResp.status = currentResp.selectedOption ? "answered-review" : "review";
  }

  const questions = getActiveQuestions();
  if (state.currentQuestionIndex < questions.length - 1) {
    jumpToQuestion(state.currentQuestionIndex + 1);
  } else {
    updatePaletteStatusUI();
    openSubmitConfirmModal();
  }
}

/**
 * Clear Response Button
 */
function handleClearResponse() {
  const currentResp = state.responses[state.currentQuestionIndex];
  if (currentResp) {
    currentResp.selectedOption = null;
    currentResp.status = "not-answered";
  }

  // Deselect options visually
  document.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected", "practice-correct", "practice-wrong"));
  const expCard = document.getElementById("practice-explanation-card");
  if (expCard) expCard.style.display = "none";
  updatePaletteStatusUI();
}

/**
 * Previous Question Button
 */
function handlePreviousQuestion() {
  if (state.currentQuestionIndex > 0) {
    jumpToQuestion(state.currentQuestionIndex - 1);
  }
}

/**
 * Jump to Specific Question Index (0 to N-1)
 */
function jumpToQuestion(index) {
  const questions = getActiveQuestions();
  if (index < 0 || index >= questions.length) return;
  state.currentQuestionIndex = index;
  renderCurrentQuestion();

  // Close mobile drawer if open
  const palette = document.getElementById("cbt-palette-panel");
  const backdrop = document.getElementById("palette-backdrop");
  if (palette) palette.classList.remove("mobile-open");
  if (backdrop) backdrop.classList.remove("active");
}

/**
 * Countdown Timer (Continuous Exam Timer for Exact Official Duration)
 */
function startExamTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);

  const display = document.getElementById("timer-display");
  const liveTimeText = document.getElementById("live-time-text");
  const liveTimePill = document.getElementById("live-time-pill-badge");
  const liveWarning = document.getElementById("live-time-warning-text");

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      alert("⏱️ Time is up! Your exam will now be submitted automatically.");
      handleFinalSubmit();
      return;
    }

    const hours = Math.floor(state.timerSeconds / 3600);
    const minutes = Math.floor((state.timerSeconds % 3600) / 60);
    const seconds = state.timerSeconds % 60;

    if (display) {
      display.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      // Timer visual alerts
      if (state.timerSeconds < 120) {
        display.className = "timer-countdown critical";
      } else if (state.timerSeconds < 600) {
        display.className = "timer-countdown warning";
      } else {
        display.className = "timer-countdown";
      }
    }

    if (liveTimeText) {
      liveTimeText.textContent = `${hours > 0 ? hours + ' घंटे ' : ''}${minutes} मिनट ${seconds} सेकंड`;
    }

    if (state.timerSeconds < 300) {
      if (liveWarning) liveWarning.style.display = "inline";
      if (liveTimePill) liveTimePill.textContent = "🔴 अंतिम मिनट";
    }
  }, 1000);
}

/**
 * Font Size Adjuster
 */
function setFontSize(size) {
  const container = document.getElementById("question-content-container");
  if (size === "small") {
    container.style.fontSize = "0.9rem";
  } else if (size === "large") {
    container.style.fontSize = "1.2rem";
  } else {
    container.style.fontSize = "1rem";
  }
}

/**
 * Toggle Fullscreen
 */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/**
 * Submit Confirmation Modal
 */
function openSubmitConfirmModal() {
  const tbody = document.getElementById("summary-table-body");
  tbody.innerHTML = "";

  const config = getActiveConfig();
  const questions = getActiveQuestions();
  const sections = (config.sections && config.sections.length > 0) ? config.sections : [
    { id: "general", name: "All Questions", start: 1, end: questions.length, total: questions.length }
  ];

  sections.forEach(sec => {
    let answered = 0;
    let notAnswered = 0;
    let review = 0;
    let notVisited = 0;

    const startIdx = Math.max(0, (sec.start || 1) - 1);
    const endIdx = Math.min(state.responses.length - 1, (sec.end || state.responses.length) - 1);

    for (let i = startIdx; i <= endIdx; i++) {
      const resp = state.responses[i];
      if (!resp) continue;
      if (resp.status === "answered") answered++;
      else if (resp.status === "not-answered") notAnswered++;
      else if (resp.status === "review" || resp.status === "answered-review") review++;
      else notVisited++;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align: left; font-weight: 600;">${sec.name}</td>
      <td>${sec.total}</td>
      <td style="color: #16a34a; font-weight: 700;">${answered}</td>
      <td style="color: #dc2626;">${notAnswered}</td>
      <td style="color: #7c3aed;">${review}</td>
      <td style="color: #64748b;">${notVisited}</td>
    `;
    tbody.appendChild(tr);
  });

  modals.submitConfirm.classList.add("active");
}

/**
 * Final Exam Submission & Scoring Computation
 */
function handleFinalSubmit() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  if (typeof modals !== "undefined" && modals && modals.submitConfirm) {
    modals.submitConfirm.classList.remove("active");
  }

  state.examEndTime = new Date().toISOString();

  // Compute Scores
  let totalScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  const cfg = getActiveConfig();
  const questions = getActiveQuestions();
  const posMark = Number(cfg.marksPerCorrect || 1);
  const negMark = Number(cfg.negativeMarking || 0);
  let positiveMarks = 0;
  let negativeMarks = 0;

  const sectionScores = {};
  if (cfg.sections && cfg.sections.length > 0) {
    cfg.sections.forEach(s => {
      const qTotal = s.total || s.questions || 25;
      const sMarks = s.marks || (qTotal * posMark);
      sectionScores[s.id] = { name: s.name, correct: 0, wrong: 0, unattempted: 0, score: 0, total: qTotal, marks: sMarks };
    });
  } else {
    sectionScores["general"] = { name: "Mock Test", correct: 0, wrong: 0, unattempted: 0, score: 0, total: questions.length, marks: questions.length * posMark };
  }

  // Detailed question-by-question record
  const detailedAnswers = questions.map((q, idx) => {
    const userResp = state.responses[idx];
    const pickedOption = userResp ? userResp.selectedOption : null;
    let isCorrect = false;
    let status = "unattempted";

    if (!sectionScores[q.section]) {
      sectionScores[q.section] = { name: q.sectionName || q.section, correct: 0, wrong: 0, unattempted: 0, score: 0, total: 0 };
    }

    if (pickedOption) {
      if (pickedOption === q.correctAnswer) {
        isCorrect = true;
        status = "correct";
        correctCount++;
        positiveMarks += posMark;
        totalScore += posMark;
        sectionScores[q.section].correct++;
        sectionScores[q.section].score += posMark;
      } else {
        isCorrect = false;
        status = "wrong";
        wrongCount++;
        negativeMarks += negMark;
        if (negMark > 0) {
          totalScore -= negMark;
          sectionScores[q.section].score -= negMark;
        }
        sectionScores[q.section].wrong++;
      }
    } else {
      status = "unattempted";
      unattemptedCount++;
      sectionScores[q.section].unattempted++;
    }

    return {
      id: q.id,
      section: q.section,
      sectionName: q.sectionName,
      questionEn: q.questionEn,
      questionHi: q.questionHi,
      options: q.options,
      studentOption: pickedOption,
      correctOption: q.correctAnswer,
      isCorrect,
      status,
      explanation: q.explanation
    };
  });

  // Ensure total score isn't negative and round properly
  totalScore = Number(Math.max(0, totalScore).toFixed(2));
  positiveMarks = Number(positiveMarks.toFixed(2));
  negativeMarks = Number(negativeMarks.toFixed(2));
  const maxMarks = Number((cfg.totalMarks || (questions.length * posMark)).toFixed(0));

  const submissionRecord = {
    id: "SUB-" + Date.now(),
    candidate: state.candidate,
    examTitle: cfg.title,
    examId: state.selectedExamId,
    submittedAt: state.examEndTime,
    timeTakenSeconds: (cfg.durationMinutes * 60) - state.timerSeconds,
    tabSwitches: state.tabSwitchCount,
    totalScore,
    positiveMarks,
    negativeMarks,
    maxMarks,
    totalQuestions: questions.length,
    percentage: ((totalScore / maxMarks) * 100).toFixed(1),
    correctCount,
    wrongCount,
    unattemptedCount,
    sectionScores,
    detailedAnswers
  };

  // Permanent Student Account Integration
  if (!state.currentStudent && window.StudentAccountService) {
    state.currentStudent = StudentAccountService.getActiveSession();
  }
  const effectiveStudentId = (state.currentStudent && state.currentStudent.studentId) || (state.candidate && state.candidate.studentId);
  if (effectiveStudentId) {
    submissionRecord.studentId = effectiveStudentId;
    if (!submissionRecord.candidate) submissionRecord.candidate = {};
    submissionRecord.candidate.studentId = effectiveStudentId;
  }
  if (window.StudentAccountService && typeof StudentAccountService.recordStudentMockAttempt === "function") {
    try {
      StudentAccountService.recordStudentMockAttempt(submissionRecord);
    } catch (err) {
      console.warn("Student account attempt recording notice:", err);
    }
  }

  // Save to LocalStorage
  saveSubmissionRecord(submissionRecord);

  // Send to Cloud / Google Sheets Webhook in background
  dispatchCloudWebhook(submissionRecord);

  // Pre-render Student Dashboard immediately so stats and mock history are 100% updated in memory & DOM!
  const activeStudent = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
  if (activeStudent && typeof renderStudentDashboard === "function") {
    try {
      renderStudentDashboard(activeStudent);
    } catch (e) {
      console.warn("Background dashboard pre-render notice:", e);
    }
  }

  // Render Result Screen
  state.activeReviewSubmission = submissionRecord;
  renderResultScreen(submissionRecord);
  showScreen("result");
}

/**
 * Save Submission to LocalStorage
 */
function saveSubmissionRecord(record) {
  try {
    const list = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");
    list.unshift(record);
    localStorage.setItem(state.STORAGE_KEY_SUBMISSIONS, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to save submission to localStorage:", err);
  }
}

/**
 * Render Student Result Screen
 */
function renderResultScreen(record) {
  const candName = (record.candidate && record.candidate.name) || "Student";
  const elGreeting = document.getElementById("result-candidate-greeting");
  if (elGreeting) elGreeting.textContent = `Congratulations, ${candName}!`;

  const elScore = document.getElementById("result-total-score");
  if (elScore) elScore.textContent = record.totalScore;
  
  const maxScore = record.maxMarks || 100;
  const maxElem = document.getElementById("result-max-score");
  if (maxElem) {
    maxElem.textContent = `/ ${maxScore} Marks`;
  }

  const posPill = document.getElementById("pill-pos-marks");
  const negPill = document.getElementById("pill-neg-marks");
  const netPill = document.getElementById("pill-net-score");
  const posVal = record.positiveMarks !== undefined ? record.positiveMarks : record.correctCount;
  const negVal = record.negativeMarks !== undefined ? record.negativeMarks : 0;

  if (posPill) posPill.textContent = `✓ Positive Marks: +${posVal}`;
  if (negPill) negPill.textContent = `✗ Negative Deduction: -${negVal}`;
  if (netPill) netPill.textContent = `🎯 Net Marks: ${record.totalScore} / ${maxScore}`;
  
  const accuracy = record.correctCount + record.wrongCount > 0 
    ? ((record.correctCount / (record.correctCount + record.wrongCount)) * 100).toFixed(1)
    : 0;

  const elPctTag = document.getElementById("result-percentage-tag");
  if (elPctTag) {
    elPctTag.textContent = 
      `${record.examTitle || 'Govt CBT Exam'} • Score: ${record.percentage}% • Accuracy: ${accuracy}% • Attempted: ${record.correctCount + record.wrongCount}/${record.totalQuestions || 100}`;
  }

  // Populate Structured Scorecard Overview
  const elResExam = document.getElementById("res-exam-name");
  const elResCand = document.getElementById("res-candidate-name");
  const elResRoll = document.getElementById("res-candidate-roll");
  const elResTotal = document.getElementById("res-total-qs");
  const elResAtt = document.getElementById("res-attempted-qs");
  const elResCor = document.getElementById("res-correct-qs");
  const elResWr = document.getElementById("res-wrong-qs");
  const elResUn = document.getElementById("res-unattempted-qs");
  const elResPos = document.getElementById("res-pos-marks");
  const elResNeg = document.getElementById("res-neg-marks");
  const elResNet = document.getElementById("res-net-score");
  const elResMax = document.getElementById("res-max-marks");
  const elResPct = document.getElementById("res-percentage");
  const elResAcc = document.getElementById("res-accuracy");

  const attemptedCount = (record.correctCount || 0) + (record.wrongCount || 0);
  const unattemptedCount = record.unattemptedCount !== undefined ? record.unattemptedCount : Math.max(0, (record.totalQuestions || 100) - attemptedCount);

  if (elResExam) elResExam.textContent = record.examTitle || "Govt Exam Practice";
  if (elResCand) elResCand.textContent = (record.candidate && record.candidate.name) || "Student";
  if (elResRoll) elResRoll.textContent = (record.candidate && record.candidate.roll) || "N/A";
  if (elResTotal) elResTotal.textContent = record.totalQuestions || 100;
  if (elResAtt) elResAtt.textContent = attemptedCount;
  if (elResCor) elResCor.textContent = record.correctCount || 0;
  if (elResWr) elResWr.textContent = record.wrongCount || 0;
  if (elResUn) elResUn.textContent = unattemptedCount;
  if (elResPos) elResPos.textContent = `+${Number(posVal).toFixed(2)}`;
  if (elResNeg) elResNeg.textContent = `-${Number(negVal).toFixed(2)}`;
  if (elResNet) elResNet.textContent = `${record.totalScore}`;
  if (elResMax) elResMax.textContent = `${maxScore}`;
  if (elResPct) elResPct.textContent = `${record.percentage}%`;
  if (elResAcc) elResAcc.textContent = `${accuracy}%`;

  // Subject Cards (Analytics Only - Continuous test navigation)
  const subContainer = document.getElementById("result-subject-cards");
  if (subContainer) {
    subContainer.innerHTML = "";

    if (record.sectionScores && Object.keys(record.sectionScores).length > 0) {
      Object.entries(record.sectionScores).forEach(([key, s]) => {
        const label = s.name || key;
        const qCount = s.total || 25;
        const maxMarks = s.marks || (qCount * 1);
        const pct = Math.min(100, Math.max(0, (s.score / maxMarks) * 100));
        const sUnattempted = s.unattempted !== undefined ? s.unattempted : Math.max(0, qCount - (s.correct + s.wrong));

        const card = document.createElement("div");
        card.className = "sub-score-card";
        card.innerHTML = `
          <h4>${label}</h4>
          <div class="val">${s.score} <span style="font-size: 0.85rem; color: #64748b;">/ ${maxMarks} Marks</span></div>
          <div style="font-size: 0.8rem; color: #475569; margin-top: 4px;">
            ✓ ${s.correct} Correct • ✗ ${s.wrong} Wrong • ⚪ ${sUnattempted} Unattempted (${qCount} Qs)
          </div>
          <div class="bar-bg">
            <div class="bar-fill" style="width: ${pct}%;"></div>
          </div>
        `;
        subContainer.appendChild(card);
      });

      // Special breakdown for NEET (UG) 2026: Combined Biology Total (90 Qs / 360 Marks)
      if (record.sectionScores.botany && record.sectionScores.zoology) {
        const bot = record.sectionScores.botany;
        const zoo = record.sectionScores.zoology;
        const bioScore = bot.score + zoo.score;
        const bioMaxMarks = (bot.marks || 180) + (zoo.marks || 180);
        const bioCorrect = bot.correct + zoo.correct;
        const bioWrong = bot.wrong + zoo.wrong;
        const bioPct = Math.min(100, Math.max(0, (bioScore / bioMaxMarks) * 100));

        const bioCard = document.createElement("div");
        bioCard.className = "sub-score-card bio-highlight-card";
        bioCard.innerHTML = `
          <h4 style="color: #0B2D5C;">🧬 Biology Total (Botany + Zoology)</h4>
          <div class="val" style="color: #1557B0;">${bioScore} <span style="font-size: 0.85rem; color: #64748b;">/ ${bioMaxMarks} Marks</span></div>
          <div style="font-size: 0.8rem; color: #475569; margin-top: 4px;">
            ✓ ${bioCorrect} Correct • ✗ ${bioWrong} Wrong (Total 90 Qs / 360 M)
          </div>
          <div class="bar-bg">
            <div class="bar-fill" style="width: ${bioPct}%; background: linear-gradient(90deg, #1557B0, #FF8A00);"></div>
          </div>
        `;
        subContainer.appendChild(bioCard);
      }
    }
  }

  // Always display return to dashboard button
  const resDashBtn = document.getElementById("btn-result-goto-dashboard");
  if (resDashBtn) {
    resDashBtn.style.display = "inline-flex";
  }
}

/**
 * Send Result via WhatsApp
 */
function handleSendWhatsAppResult() {
  if (!state.activeReviewSubmission) return;
  const sub = state.activeReviewSubmission;

  let secBreakdown = "";
  if (sub.sectionScores) {
    Object.entries(sub.sectionScores).forEach(([k, sec]) => {
      secBreakdown += `• ${sec.name || k}: ${sec.score}/${sec.total || 25}\n`;
    });
  }

  const msg = 
`*Deepak Mock Test — ${sub.examTitle || 'Govt Exam Practice'} Result*
*Student Name:* ${sub.candidate.name}
*Roll Number:* ${sub.candidate.roll}
*Category / Batch:* ${sub.candidate.batch || "General"}
*Total Marks:* ${sub.totalScore} / ${sub.maxMarks || sub.totalQuestions || 100} (${sub.percentage}%)
*Correct Answers:* ${sub.correctCount}
*Incorrect Answers:* ${sub.wrongCount}
*Unattempted:* ${sub.unattemptedCount}

*Subject-wise Breakdown:*
${secBreakdown}
*Submission Time:* ${new Date(sub.submittedAt).toLocaleString()}

—️ Powered by Deepak Mock Test Platform
Prepare • Practice • Perform`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/918960627330?text=${encoded}`, "_blank");
}

/**
 * Open Detailed Paper Review Modal (For Student & Teacher)
 * Shows all 100 questions with chosen options, correct answers, and explanations
 */
function openDetailedPaperModal(submission) {
  state.activeReviewSubmission = submission;

  const totalQs = submission.totalQuestions || (submission.detailedAnswers ? submission.detailedAnswers.length : 100);

  // Header info
  const headerElem = document.getElementById("detailed-paper-candidate-header");
  headerElem.innerHTML = `
    <div>
      <h4 style="font-size: 1.15rem; color: #1e3a8a;">${submission.candidate.name}</h4>
      <p style="font-size: 0.85rem; color: #64748b;">
        Exam: <strong>${submission.examTitle || 'Govt Mock Exam'}</strong> | Roll No: <strong>${submission.candidate.roll}</strong> | Mobile: <strong>${submission.candidate.phone}</strong> | Submitted: ${new Date(submission.submittedAt).toLocaleString()}
      </p>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 1.5rem; font-weight: 800; color: #16a34a;">${submission.totalScore} / ${submission.maxMarks || totalQs}</div>
      <div style="font-size: 0.8rem; color: #64748b;">Percentage: ${submission.percentage}%</div>
    </div>
  `;

  // Update filter counters and tab label
  const allBtn = document.querySelector('.paper-filter-btn[data-filter="all"]');
  if (allBtn) allBtn.textContent = `All Questions (${totalQs})`;
  document.getElementById("filter-cnt-correct").textContent = submission.correctCount;
  document.getElementById("filter-cnt-wrong").textContent = submission.wrongCount;
  document.getElementById("filter-cnt-skipped").textContent = submission.unattemptedCount;

  // Default filter: all
  document.querySelectorAll(".paper-filter-btn").forEach(b => b.classList.remove("active"));
  if (allBtn) allBtn.classList.add("active");

  renderDetailedQuestionsList("all");
  modals.detailedPaper.classList.add("active");
}

/**
 * Render Questions List inside Detailed Review Modal
 */
function renderDetailedQuestionsList(filterType) {
  if (!state.activeReviewSubmission) return;
  const submission = state.activeReviewSubmission;
  const container = document.getElementById("detailed-questions-container");
  container.innerHTML = "";

  const cfg = (typeof getExamConfig === "function" && submission.examId) ? getExamConfig(submission.examId) : getActiveConfig();
  const posMark = cfg.marksPerCorrect !== undefined ? cfg.marksPerCorrect : 1;
  const negMark = cfg.negativeMarks !== undefined ? cfg.negativeMarks : (cfg.negativeMarking || 0);

  const filtered = submission.detailedAnswers.filter(item => {
    if (filterType === "correct") return item.status === "correct";
    if (filterType === "wrong") return item.status === "wrong";
    if (filterType === "skipped") return item.status === "unattempted";
    return true; // "all"
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #94a3b8;">
        No questions match this filter.
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = `review-card ${item.status === 'unattempted' ? 'skipped' : item.status}`;

    let statusPill = "";
    if (item.status === "correct") {
      statusPill = `<span class="q-status-pill correct">✓ Correct (+${Number(posMark).toFixed(2)})</span>`;
    } else if (item.status === "wrong") {
      statusPill = `<span class="q-status-pill wrong">✗ Incorrect (-${Number(negMark).toFixed(2)})</span>`;
    } else {
      statusPill = `<span class="q-status-pill skipped">⚪ Not Attempted (0.00)</span>`;
    }

    const subj = item.subject || item.sectionName || item.section || "General";
    const topic = item.topic || "Core Syllabus";

    // Build Options
    let optionsHtml = "";
    item.options.forEach(opt => {
      let optClass = "review-opt";
      let markBadge = "";

      if (opt.id === item.correctOption) {
        optClass += " correct-answer";
        markBadge = `<strong style="margin-left: auto; color: #166534;">✓ Correct Answer</strong>`;
      }

      if (opt.id === item.studentOption && !item.isCorrect) {
        optClass += " student-picked-wrong";
        markBadge = `<strong style="margin-left: auto; color: #991b1b;">✗ Student's Choice</strong>`;
      } else if (opt.id === item.studentOption && item.isCorrect) {
        markBadge = `<strong style="margin-left: auto; color: #166534;">✓ Student's Choice (Correct)</strong>`;
      }

      optionsHtml += `
        <div class="${optClass}">
          <strong>${opt.id})</strong>
          <span>${opt.textEn} / ${opt.textHi}</span>
          ${markBadge}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-card-header">
        <span style="font-weight: 700; color: #1e3a8a;">Question ${item.id} • Subject: ${subj} • Topic: ${topic}</span>
        ${statusPill}
      </div>

      <div style="font-size: 1.02rem; font-weight: 600; color: #0f172a; margin-bottom: 4px;">
        ${item.questionEn}
      </div>
      <div style="font-size: 0.95rem; color: #334155; margin-bottom: 12px;">
        ${item.questionHi}
      </div>

      <div class="review-options-grid">
        ${optionsHtml}
      </div>

      <div class="explanation-box">
        <strong>💡 Solution & Explanation:</strong> ${item.explanation}
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Admin Login Validation
 */
function handleAdminLogin() {
  const pin = document.getElementById("admin-pin-input").value.trim();
  const errElem = document.getElementById("admin-auth-err");
  const validPin = typeof getAdminPasscode === "function" ? getAdminPasscode() : (state.ADMIN_PIN || "896062");

  if (pin === validPin) {
    modals.adminAuth.classList.remove("active");
    renderAdminDashboard();
    showScreen("admin");
  } else {
    errElem.style.display = "block";
  }
}

/**
 * Render Teacher Admin Dashboard (Multi-Device Live Cloud Sync)
 */
function renderAdminDashboard() {
  const submissions = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");
  updateAdminStatCards(submissions);
  renderAdminTable();

  // Populate the Paper Manager exam selector dropdown
  populatePaperExamSelect();

  // BUG FIX: Reset to submissions tab when opening admin
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".admin-tab-panel").forEach(p => p.style.display = "none");
  const firstTabBtn = document.getElementById("tab-btn-submissions");
  const firstPanel = document.getElementById("panel-submissions");
  if (firstTabBtn) firstTabBtn.classList.add("active");
  if (firstPanel) firstPanel.style.display = "block";

  // Update security display limit
  const maxLimit = typeof getMaxDailyAttemptsLimit === "function" ? getMaxDailyAttemptsLimit() : 2;
  const sel = document.getElementById("admin-max-daily-limit-select");
  if (sel) sel.value = maxLimit >= 999 ? "999" : String(maxLimit);
  const display = document.getElementById("admin-display-max-limit");
  if (display) display.textContent = maxLimit >= 999 ? "Unlimited" : `${maxLimit} Exam${maxLimit > 1 ? "s" : ""} per Day`;

  // Update today's date in security panel
  const dateEl = document.getElementById("stat-security-today-date");
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString("en-IN");

  // Asynchronously fetch live submissions from Google Sheets Cloud
  fetchLiveSubmissionsFromCloud();
}

/**
 * Populate Paper Manager exam select dropdown with all 14 exams
 */
function populatePaperExamSelect() {
  const sel = document.getElementById("admin-paper-exam-select");
  if (!sel || typeof EXAMS_REGISTRY === "undefined") return;
  sel.innerHTML = "";
  Object.entries(EXAMS_REGISTRY).forEach(([id, exam]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = `${exam.icon || ""} ${exam.name}`;
    sel.appendChild(opt);
  });
}

/**
 * Render Paper Manager Panel (Paper Sets grid for selected exam)
 * BUG FIX: Was completely empty — now fully implemented
 */
function renderPaperManagerPanel() {
  const sel = document.getElementById("admin-paper-exam-select");
  if (!sel || typeof EXAMS_REGISTRY === "undefined") return;
  const examId = sel.value;
  if (!examId) return;

  // Update active set title
  const activeSetTitle = document.getElementById("admin-active-set-title");
  if (activeSetTitle && typeof getActivePaperInfo === "function") {
    const info = getActivePaperInfo(examId);
    activeSetTitle.textContent = info ? info.name : "Paper Set 1 (Default)";
  }

  const grid = document.getElementById("admin-paper-sets-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // Get available paper sets for this exam (Defaults Set 1-5 + Custom uploaded)
  const paperSets = typeof getAllPaperSetsForExam === "function" 
    ? getAllPaperSetsForExam(examId) 
    : (typeof getPaperSetsForExam === "function" ? getPaperSetsForExam(examId) : []);

  if (!paperSets || paperSets.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: #94a3b8; background: #f8fafc; border-radius: 12px; border: 2px dashed #e2e8f0;">
        <div style="font-size: 2rem; margin-bottom: 8px;">📭</div>
        <h4 style="color: #475569;">No custom papers found for this exam.</h4>
        <p style="font-size: 0.85rem;">Default Paper Set 1 is active. Use the upload form below to add new paper sets.</p>
      </div>`;
    return;
  }

  const activePaperInfo = typeof getActivePaperInfo === "function" ? getActivePaperInfo(examId) : null;
  const activePaperId = activePaperInfo ? activePaperInfo.id : "set_1";

  paperSets.forEach(paper => {
    const isActive = paper.id === activePaperId;
    const card = document.createElement("div");
    card.className = "paper-set-card" + (isActive ? " active-set" : "");
    card.innerHTML = `
      <div class="paper-set-card-header">
        <span class="paper-set-badge">${isActive ? "⚡ Active for Today" : "📄 Available"}</span>
        <span style="font-size: 0.78rem; color: #94a3b8; font-weight: 700;">${(paper.code || paper.id).toUpperCase()}</span>
      </div>
      <h4 style="margin: 8px 0 4px; color: #1e3a8a; font-size: 0.95rem;">${paper.name}</h4>
      <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 12px;">${paper.description || "100 MCQs"}</p>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${!isActive ? `<button class="btn-admin primary" onclick="activatePaperFromAdmin('${examId}', '${paper.id}', '${paper.name}')">⚡ Activate for Today</button>` : `<span style="color: #16a34a; font-weight: 700; font-size: 0.85rem;">✅ Currently Active</span>`}
        <button class="btn-admin" onclick="previewPaperFromAdmin('${examId}', '${paper.id}')">👁 Preview</button>
      </div>`;
    grid.appendChild(card);
  });
}

/**
 * Activate a paper set from Admin Panel
 */
function activatePaperFromAdmin(examId, paperId, paperName) {
  if (typeof setActivePaperSetId === "function") {
    setActivePaperSetId(examId, paperId, "Deepak Maurya");
  }
  alert(`✅ "${paperName}" is now activated for ${EXAMS_REGISTRY[examId]?.name || examId}!\n\nStudents will get this paper in their next exam.`);
  renderPaperManagerPanel();
  // Update welcome screen indicator bar too
  const titleEl = document.getElementById("active-paper-title");
  const authorEl = document.getElementById("active-paper-author");
  if (titleEl) titleEl.textContent = paperName;
  if (authorEl) authorEl.textContent = "Set Activated by Deepak Maurya (Teacher)";
}

/**
 * Preview paper in modal
 */
function previewPaperFromAdmin(examId, paperId) {
  const modal = document.getElementById("modal-paper-preview");
  const titleEl = document.getElementById("paper-preview-title");
  const bodyEl = document.getElementById("paper-preview-body");
  if (!modal || !bodyEl) return;

  const sets = typeof getAllPaperSetsForExam === "function" 
    ? getAllPaperSetsForExam(examId) 
    : (typeof getPaperSetsForExam === "function" ? getPaperSetsForExam(examId) : []);
  const paper = sets.find(p => p.id === paperId);
  if (!paper) { alert("Paper not found."); return; }

  if (titleEl) titleEl.textContent = `Preview: ${paper.name} (${paper.questions ? paper.questions.length : 0} MCQs)`;

  bodyEl.innerHTML = "";
  const questions = paper.questions || [];
  if (questions.length === 0) {
    bodyEl.innerHTML = "<p style='text-align:center;color:#94a3b8;'>No questions available for preview.</p>";
  } else {
    questions.slice(0, 20).forEach((q, i) => {
      const div = document.createElement("div");
      div.style.cssText = "border-bottom: 1px solid #e2e8f0; padding: 10px 0; font-size: 0.88rem;";
      div.innerHTML = `<strong>Q${q.id || i+1}.</strong> ${q.questionEn || q.questionHi || "N/A"}`;
      bodyEl.appendChild(div);
    });
    if (questions.length > 20) {
      const more = document.createElement("p");
      more.style.cssText = "text-align:center; color:#94a3b8; padding:10px;";
      more.textContent = `... and ${questions.length - 20} more questions`;
      bodyEl.appendChild(more);
    }
  }

  const activateBtn = document.getElementById("btn-activate-from-preview");
  if (activateBtn) {
    activateBtn.onclick = () => { activatePaperFromAdmin(examId, paperId, paper.name); modal.classList.remove("active"); };
  }
  const closeBtn = document.getElementById("btn-close-paper-preview");
  const dismissBtn = document.getElementById("btn-dismiss-paper-preview");
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove("active");
  if (dismissBtn) dismissBtn.onclick = () => modal.classList.remove("active");

  modal.classList.add("active");
}

/**
 * Handle Upload Paper Set from Admin Form
 */
function handleUploadPaperSet(activateNow = false) {
  const title = (document.getElementById("upload-paper-title").value || "").trim();
  const code = (document.getElementById("upload-paper-code").value || "").trim();
  const desc = (document.getElementById("upload-paper-desc").value || "").trim();
  const jsonText = (document.getElementById("upload-paper-json").value || "").trim();
  const sel = document.getElementById("admin-paper-exam-select");
  const examId = sel ? sel.value : "";

  if (!title || !code || !jsonText || !examId) {
    alert("❌ कृपया सभी required fields भरें (Title, Code, Questions JSON, Exam).");
    return;
  }

  let questions;
  try {
    questions = JSON.parse(jsonText);
    if (!Array.isArray(questions)) throw new Error("JSON must be an array of questions");
  } catch (e) {
    alert(`❌ Invalid JSON format:\n${e.message}\n\nकृपया valid JSON array paste करें।`);
    return;
  }

  const paper = { id: code.toLowerCase().replace(/\s+/g, "_"), name: title, description: desc || `${questions.length} MCQs`, questions };

  if (typeof saveCustomPaperSet === "function") {
    saveCustomPaperSet(examId, paper);
  } else {
    // Fallback: store in localStorage
    const key = `custom_papers_${examId}`;
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push(paper);
    localStorage.setItem(key, JSON.stringify(existing));
  }

  if (activateNow) {
    activatePaperFromAdmin(examId, paper.id, paper.name);
  }

  alert(`✅ "${title}" successfully saved!\n${activateNow ? "✅ Activated for students immediately!" : "Use 'Activate for Today' button to make it active."}`);

  // Reset form
  document.getElementById("admin-upload-paper-form").reset();
  renderPaperManagerPanel();
}

/**
 * Load 100 Questions JSON sample template
 */
function loadSampleJsonTemplate() {
  const sample = JSON.stringify([
    { "id": 1, "section": "general", "sectionName": "General Knowledge", "questionEn": "Sample Question 1?", "questionHi": "नमूना प्रश्न 1?", "options": [{ "id": "A", "textEn": "Option A", "textHi": "विकल्प A" }, { "id": "B", "textEn": "Option B", "textHi": "विकल्प B" }, { "id": "C", "textEn": "Option C", "textHi": "विकल्प C" }, { "id": "D", "textEn": "Option D", "textHi": "विकल्प D" }], "correctAnswer": "A", "explanation": "Explanation here." }
  ], null, 2);
  const ta = document.getElementById("upload-paper-json");
  if (ta) { ta.value = sample; }
  alert("Sample template loaded! Replace with your 100 actual questions.");
}

/**
 * Render Security & Daily Limits Panel
 * Connected directly to questions.js daily attempt records
 */
function renderSecurityPanel() {
  const today = new Date().toLocaleDateString("en-IN");
  const dateEl = document.getElementById("stat-security-today-date");
  if (dateEl) dateEl.textContent = today;

  const todayKey = typeof getTodayDateString === "function" ? getTodayDateString() : new Date().toISOString().split("T")[0];
  const allAttempts = typeof getAllDailyAttemptRecords === "function" ? getAllDailyAttemptRecords() : [];
  const maxLimit = typeof getMaxDailyAttemptsLimit === "function" ? getMaxDailyAttemptsLimit() : 999;

  // Filter today's attempts
  const todayAttemptsList = allAttempts.filter(a => a.date === todayKey);

  // Group by candidate (roll or phone)
  const candidateMap = {};
  todayAttemptsList.forEach(a => {
    const key = ((a.phone || "") + "_" + (a.roll || "")).trim().toLowerCase() || "student";
    if (!candidateMap[key]) {
      candidateMap[key] = {
        name: a.name || "Student",
        roll: a.roll || "-",
        phone: a.phone || "-",
        exams: [],
        lastAttempt: a.timestamp
      };
    }
    candidateMap[key].exams.push(a.examTitle || a.examId || "Exam");
    if (a.timestamp && (!candidateMap[key].lastAttempt || a.timestamp > candidateMap[key].lastAttempt)) {
      candidateMap[key].lastAttempt = a.timestamp;
    }
  });

  const candidateKeys = Object.keys(candidateMap);
  let oneAttempt = 0, blocked = 0;
  candidateKeys.forEach(k => {
    const count = candidateMap[k].exams.length;
    if (count >= maxLimit && maxLimit < 999) blocked++;
    else if (count === 1) oneAttempt++;
  });

  const totalEl = document.getElementById("stat-security-total-candidates");
  const oneEl = document.getElementById("stat-security-one-attempt");
  const blockedEl = document.getElementById("stat-security-blocked-candidates");
  if (totalEl) totalEl.textContent = candidateKeys.length;
  if (oneEl) oneEl.textContent = oneAttempt;
  if (blockedEl) blockedEl.textContent = blocked;

  // Render daily attempts table
  const tbody = document.getElementById("security-attempts-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (candidateKeys.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-state"><div class="icon">📋</div><h4>Aaj koi exam attempt nahi hua.</h4></td></tr>`;
    return;
  }

  candidateKeys.forEach((key, idx) => {
    const rec = candidateMap[key];
    const isBlocked = rec.exams.length >= maxLimit && maxLimit < 999;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align: center;"><span class="rank-badge">#${idx + 1}</span></td>
      <td><strong>${rec.name}</strong></td>
      <td><span style="font-family: monospace; font-weight: 600;">${rec.roll}</span></td>
      <td>📞 ${rec.phone}</td>
      <td style="font-weight: 700; color: ${isBlocked ? "#dc2626" : "#16a34a"};">${rec.exams.length} / ${maxLimit >= 999 ? "∞" : maxLimit}</td>
      <td><span class="score-badge ${isBlocked ? "score-low" : "score-high"}">${isBlocked ? "🚫 Blocked" : "✅ Active"}</span></td>
      <td style="font-size: 0.8rem; color: #475569;">${rec.lastAttempt ? new Date(rec.lastAttempt).toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }) : "-"}</td>
      <td style="text-align: center;"><button type="button" class="btn-view-paper" onclick="resetIndividualDailyAttempt('${rec.phone}', '${rec.roll}')">🔄 Reset Limit</button></td>`;
    tbody.appendChild(tr);
  });
}

/**
 * Reset individual candidate's daily attempts (Teacher override)
 */
function resetIndividualDailyAttempt(phone, roll) {
  if (!confirm(`Reset daily exam limit for candidate (Roll: ${roll}, Phone: ${phone})?\nThis candidate will be able to take exams today.`)) return;
  if (typeof resetCandidateAttemptsToday === "function") {
    resetCandidateAttemptsToday(phone, roll);
  }
  alert(`✅ Daily limit reset ho gaya! Ab ye candidate aaj aur exams de sakte hain.`);
  renderSecurityPanel();
}

/**
 * Reset all daily attempts for today (Admin action)
 */
function resetAllAttemptsToday() {
  // Uses questions.js storage format
  if (typeof getAllDailyAttemptRecords === "function") {
    const todayKey = typeof getTodayDateString === "function" ? getTodayDateString() : new Date().toISOString().split("T")[0];
    const all = getAllDailyAttemptRecords();
    const filtered = all.filter(a => a.date !== todayKey);
    localStorage.setItem("govt_exam_daily_attempts", JSON.stringify(filtered));
  }
}

/**
 * Update Daily Attempt Status on Welcome Screen (BUG FIX)
 */
function updateDailyAttemptStatusUI() {
  const statusEl = document.getElementById("candidate-daily-attempt-status");
  if (!statusEl) return;
  // We don't have candidate details yet on welcome screen, so show generic
  const maxLimit = typeof getMaxDailyAttemptsLimit === "function" ? getMaxDailyAttemptsLimit() : 2;
  if (maxLimit >= 999) {
    statusEl.textContent = "Daily Limit: Unlimited";
    statusEl.style.color = "#16a34a";
  } else {
    statusEl.textContent = `Daily Limit: ${maxLimit} exam${maxLimit > 1 ? "s" : ""} per day`;
    statusEl.style.color = "#475569";
  }
}



/**
 * Update Metric Cards with 100% Accurate Statistics
 */
function updateAdminStatCards(submissions) {
  const total = submissions.length;
  let avgPct = "0.0";
  let avgMarks = "0.0";
  let highScore = 0;
  let passCount = 0;

  if (total > 0) {
    const totalMarksSum = submissions.reduce((sum, s) => sum + (parseFloat(s.totalScore) || 0), 0);
    avgMarks = (totalMarksSum / total).toFixed(1);

    const totalPctSum = submissions.reduce((sum, s) => sum + (parseFloat(s.percentage) || 0), 0);
    avgPct = (totalPctSum / total).toFixed(1);

    highScore = Math.max(...submissions.map(s => parseFloat(s.totalScore) || 0));

    passCount = submissions.filter(s => {
      const pct = s.percentage !== undefined ? parseFloat(s.percentage) : ((s.totalScore / (s.maxMarks || 100)) * 100);
      return pct >= 50;
    }).length;
  }

  const elTotal = document.getElementById("stat-total-students");
  const elAvg = document.getElementById("stat-avg-score");
  const elHigh = document.getElementById("stat-high-score");
  const elPass = document.getElementById("stat-pass-rate");

  if (elTotal) elTotal.textContent = total;
  if (elAvg) elAvg.textContent = total > 0 ? `${avgPct}% (${avgMarks} M)` : "0%";
  if (elHigh) elHigh.textContent = `${highScore} Marks`;
  if (elPass) elPass.textContent = total > 0 ? `${((passCount / total) * 100).toFixed(0)}%` : "0%";
}

/**
 * Fetch Live Submissions from Google Sheets Cloud Database across ALL devices
 */
async function fetchLiveSubmissionsFromCloud(isManual = false) {
  const url = localStorage.getItem(state.STORAGE_KEY_CONFIG) || state.DEFAULT_CLOUD_WEBHOOK_URL;
  if (!url) return;

  const statusText = document.getElementById("cloud-sync-status-text");
  const pulseDot = document.getElementById("cloud-pulse-dot");
  const lastSyncTime = document.getElementById("cloud-last-sync-time");
  const refreshBtn = document.getElementById("btn-refresh-cloud");

  if (statusText) statusText.textContent = "☁️ Google Cloud: Syncing student submissions from all phones & laptops...";
  if (refreshBtn) refreshBtn.classList.add("spinning");

  try {
    const fetchUrl = url + (url.includes("?") ? "&" : "?") + "action=getSubmissions&t=" + Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch(fetchUrl, {
      method: "GET",
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const text = await response.text();
      let result = null;
      try {
        result = JSON.parse(text);
      } catch (parseErr) {
        if (text.includes("Script function not found") || text.includes("doGet")) {
          throw new Error("DOGET_NOT_FOUND");
        }
        throw new Error("INVALID_JSON_RESPONSE");
      }

      if (result && result.status === "success" && Array.isArray(result.submissions)) {
        // Merge cloud records into local storage, avoiding duplicates
        const localList = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");
        const existingKeys = new Set(localList.map(s => `${(s.candidate && s.candidate.roll) || ""}_${(s.candidate && s.candidate.name) || ""}`));
        
        let addedCount = 0;
        result.submissions.forEach(cloudSub => {
          const key = `${(cloudSub.candidate && cloudSub.candidate.roll) || ""}_${(cloudSub.candidate && cloudSub.candidate.name) || ""}`;
          if (!existingKeys.has(key)) {
            localList.push(cloudSub);
            existingKeys.add(key);
            addedCount++;
          }
        });

        // Sort chronologically (Newest / Latest submissions at the top)
        localList.sort((a, b) => getSubmissionTimestamp(b) - getSubmissionTimestamp(a));
        localStorage.setItem(state.STORAGE_KEY_SUBMISSIONS, JSON.stringify(localList));

        // Re-render
        updateAdminStatCards(localList);
        renderAdminTable();

        if (statusText) {
          statusText.textContent = `🟢 Cloud Connected: ${localList.length} total submissions loaded from all devices!`;
        }
        if (lastSyncTime) {
          lastSyncTime.textContent = `Last synced: ${new Date().toLocaleTimeString()}`;
        }
        if (pulseDot) {
          pulseDot.classList.remove("warning");
        }
        if (isManual) {
          alert(`✅ Cloud Sync Complete: Total ${localList.length} student records loaded.`);
        }
        return;
      } else if (result && result.status === "error") {
        throw new Error(result.message || "Cloud script returned an error");
      }
    }
    throw new Error("Cloud returned non-success response");
  } catch (err) {
    console.warn("Cloud live sync notice:", err.message);
    if (pulseDot) pulseDot.classList.add("warning");
    if (lastSyncTime) lastSyncTime.textContent = "Offline/Local mode";

    if (err.message === "DOGET_NOT_FOUND") {
      if (statusText) {
        statusText.textContent = "⚠️ Google Apps Script: 'doGet' update karein (Manage Deployments -> Edit -> New Version -> Deploy).";
      }
      if (isManual) {
        alert("⚠️ Google Apps Script Update Required:\n\nGoogle Apps Script me naya code update nahi hua hai (doGet missing hai).\n\nKripya ye 3 steps karein:\n1. Google Sheet me Extensions -> Apps Script kholein.\n2. google_sheets_integration.js ka pura naya code paste karein aur Save karein.\n3. Deploy -> Manage deployments -> Edit (pencil icon) -> Version me 'New version' chunein aur Deploy dabayein!");
      }
    } else {
      if (statusText) {
        statusText.textContent = "ℹ️ Cloud Sync Info: Google Apps Script 'Anyone' access required for remote fetch. Showing offline/cached records.";
      }
      if (isManual) {
        alert("⚠️ Cloud sync info:\n\n1. Google Apps Script me 'Who has access' ko 'Anyone' set karein.\n2. 'Execute as' ko 'Me' rakhein.\n3. Har code badlav ke baad Deploy -> Manage deployments -> Edit -> 'New version' select karke Deploy zaroor karein.");
      }
    }
  } finally {
    if (refreshBtn) refreshBtn.classList.remove("spinning");
  }
}

/**
 * Safe timestamp extractor for any submission record
 * Handles ISO strings, epoch milliseconds, and 'SUB-1727418600000' IDs
 */
function getSubmissionTimestamp(s) {
  if (!s) return 0;
  if (s.submittedAt) {
    const t = new Date(s.submittedAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (s.timestamp) {
    const t = new Date(s.timestamp).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (s.id && typeof s.id === "string" && s.id.startsWith("SUB-")) {
    const parts = s.id.split("-");
    const num = parseInt(parts[1], 10);
    if (!isNaN(num) && num > 0) return num;
  }
  return 0;
}

/**
 * Helper to produce clean, compact Exam & Paper badge representation
 * Prevents table column overflow and ensures crisp dashboard presentation
 */
function getCleanExamBadge(sub) {
  const title = (sub.examTitle || "").trim();
  const id = (sub.examId || "").toLowerCase();
  let icon = "📝";
  let name = "Govt Exam";
  let paper = "";

  if (id.includes("neet") || title.toUpperCase().includes("NEET")) {
    icon = "🧬"; name = "NEET (UG)";
  } else if (id.includes("nursing") || title.toUpperCase().includes("NURSING")) {
    icon = "🩺"; name = "B.Sc. Nursing";
  } else if (id.includes("ssc") || title.toUpperCase().includes("SSC")) {
    icon = "🎯"; name = "SSC";
  } else if (id.includes("bank") || title.toUpperCase().includes("BANK") || id.includes("ibps") || id.includes("sbi")) {
    icon = "🏦"; name = "Banking";
  } else if (id.includes("rail") || title.toUpperCase().includes("RAIL") || id.includes("rrb")) {
    icon = "🚆"; name = "Railway";
  } else if (id.includes("police") || title.toUpperCase().includes("POLICE")) {
    icon = "👮"; name = "Police";
  } else if (id.includes("defence") || title.toUpperCase().includes("DEFENCE") || id.includes("nda")) {
    icon = "🎖️"; name = "Defence";
  } else if (id.includes("teach") || title.toUpperCase().includes("TEACH") || id.includes("ctet") || id.includes("tet")) {
    icon = "👨‍🏫"; name = "Teaching";
  } else if (id.includes("olevel") || title.toUpperCase().includes("O LEVEL")) {
    icon = "💻"; name = "NIELIT O Level";
  } else if (id.includes("ccc") || title.toUpperCase().includes("CCC")) {
    icon = "🖥️"; name = "NIELIT CCC";
  } else if (id.includes("upsssc") || title.toUpperCase().includes("UPSSSC")) {
    icon = "📑"; name = "UPSSSC";
  } else if (id.includes("state") || title.toUpperCase().includes("STATE")) {
    icon = "🗺️"; name = "State Exam";
  } else {
    icon = "🌐"; name = "Other Govt";
  }

  // Paper / Set detail
  if (title.includes("M1-R5") || title.includes("IT Tools")) paper = "M1-R5: IT Tools";
  else if (title.includes("M2-R5") || title.includes("Web Design")) paper = "M2-R5: Web Design";
  else if (title.includes("M3-R5") || title.includes("Python")) paper = "M3-R5: Python";
  else if (title.includes("M4-R5") || title.includes("IoT")) paper = "M4-R5: IoT";
  else if (title.includes("Set 1") || title.includes("SET-01")) paper = "Paper Set 1";
  else if (title.includes("Set 2") || title.includes("SET-02")) paper = "Paper Set 2";
  else if (title.includes("Set 3") || title.includes("SET-03")) paper = "Paper Set 3";
  else if (title.includes("Set 4") || title.includes("SET-04")) paper = "Paper Set 4";
  else if (title.includes("Set 5") || title.includes("SET-05")) paper = "Paper Set 5";
  else if (title.includes("Tier 1") || title.includes("CGL")) paper = "Tier 1 Mock";
  else if (title.includes("Constable")) paper = "Constable Mock";
  else if (title.includes("NTPC")) paper = "NTPC Mock";
  else if (title.includes("Model Paper")) paper = "Model Paper";
  else if (title.includes("Daily Mock") || title.includes("Slot")) paper = "Daily Mock Slot";

  return { icon, name, paper };
}

/**
 * Render Admin Submissions Table with Live Search and Time-Based Sorting
 */
function renderAdminTable() {
  const submissions = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");
  const searchInput = document.getElementById("admin-search-input");
  const searchQuery = (searchInput ? searchInput.value : "").toLowerCase().trim();
  const sortSelect = document.getElementById("admin-sort-select");
  const sortMode = sortSelect ? sortSelect.value : "latest";
  const tbody = document.getElementById("admin-submissions-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  let filtered = submissions.filter(s => {
    const cand = s.candidate || {};
    return (cand.name || "").toLowerCase().includes(searchQuery) ||
           (cand.roll || "").toLowerCase().includes(searchQuery) ||
           (cand.phone || "").includes(searchQuery) ||
           (s.examTitle || "").toLowerCase().includes(searchQuery);
  });

  // Sort based on user selected criteria (Default: 'latest' — Newest submission at the top)
  if (sortMode === "latest") {
    filtered.sort((a, b) => getSubmissionTimestamp(b) - getSubmissionTimestamp(a));
  } else if (sortMode === "oldest") {
    filtered.sort((a, b) => getSubmissionTimestamp(a) - getSubmissionTimestamp(b));
  } else if (sortMode === "score_desc") {
    filtered.sort((a, b) => (parseFloat(b.totalScore) || 0) - (parseFloat(a.totalScore) || 0));
  } else if (sortMode === "score_asc") {
    filtered.sort((a, b) => (parseFloat(a.totalScore) || 0) - (parseFloat(b.totalScore) || 0));
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-state">
          <div class="icon">📋</div>
          <h4>No student test records found.</h4>
          <p style="font-size: 0.85rem; margin-top: 4px;">Students' test responses will appear here as soon as they submit their exam.</p>
        </td>
      </tr>
    `;
    return;
  }

  const cardsContainer = document.getElementById("admin-submissions-cards");
  if (cardsContainer) cardsContainer.innerHTML = "";

  filtered.forEach((sub, idx) => {
    const tr = document.createElement("tr");

    let badgeClass = "score-low";
    const pctNum = parseFloat(sub.percentage) || 0;
    if (pctNum >= 75) badgeClass = "score-high";
    else if (pctNum >= 50) badgeClass = "score-mid";

    const maxMarks = sub.maxMarks || (sub.totalQuestions ? sub.totalQuestions * 1 : 100);
    const accuracy = (sub.correctCount + sub.wrongCount > 0)
      ? ((sub.correctCount / (sub.correctCount + sub.wrongCount)) * 100).toFixed(1)
      : "0.0";

    const examInfo = getCleanExamBadge(sub);

    const ts = getSubmissionTimestamp(sub);
    let dateStr = "Today";
    let timeStr = "";
    if (ts > 0) {
      const d = new Date(ts);
      dateStr = d.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' });
      timeStr = d.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit', hour12: true });
    } else if (sub.submittedAt) {
      dateStr = sub.submittedAt;
    }

    tr.innerHTML = `
      <td style="text-align: center;"><span class="rank-badge ${idx < 3 ? 'top-rank' : ''}">#${idx + 1}</span></td>
      <td>
        <div style="font-weight: 700; color: #1e3a8a; font-size: 0.95rem;">${sub.candidate.name || "Student"}</div>
        <div style="font-size: 0.78rem; color: #64748b; margin-top: 2px;">
          Roll: <strong style="color: #334155;">${sub.candidate.roll || "N/A"}</strong> ${sub.candidate.batch ? `• ${sub.candidate.batch}` : ""}
        </div>
      </td>
      <td>
        <span class="cat-badge badge-live" style="font-size: 0.75rem;">${examInfo.icon} ${examInfo.name}</span>
        ${examInfo.paper ? `<div class="admin-paper-sub-text">${examInfo.paper}</div>` : ""}
      </td>
      <td>
        <span style="font-weight: 600; color: #0f172a; font-size: 0.85rem;">📞 ${sub.candidate.phone || "N/A"}</span>
      </td>
      <td>
        <span class="score-badge ${badgeClass}">${sub.totalScore} / ${maxMarks}</span>
        <div style="font-size: 0.8rem; font-weight: 700; color: #334155; margin-top: 3px;">${sub.percentage}% Score</div>
      </td>
      <td>
        <div class="perf-breakdown-row">
          <span class="perf-pill perf-correct" title="Correct Questions">✓ ${sub.correctCount || 0}</span>
          <span class="perf-pill perf-wrong" title="Wrong Questions">✗ ${sub.wrongCount || 0}</span>
          <span class="perf-pill perf-skipped" title="Skipped Questions">⚪ ${sub.unattemptedCount !== undefined ? sub.unattemptedCount : 0}</span>
        </div>
        <div style="font-size: 0.72rem; color: #64748b; text-align: center; margin-top: 3px;">Acc: <strong>${accuracy}%</strong></div>
      </td>
      <td style="font-size: 0.82rem; color: #334155; white-space: nowrap;">
        <div>${dateStr}</div>
        <div style="color: #64748b; font-size: 0.75rem;">${timeStr}</div>
      </td>
      <td style="text-align: center;">
        <button type="button" class="btn-view-paper" data-id="${sub.id}">
          📄 Detailed Paper
        </button>
      </td>
    `;

    // Hook View Paper Button
    tr.querySelector(".btn-view-paper").addEventListener("click", () => {
      openDetailedPaperModal(sub);
    });

    tbody.appendChild(tr);

    // Mobile Card Rendering (for Smartphones)
    if (cardsContainer) {
      const card = document.createElement("div");
      card.className = "mobile-student-card";
      card.innerHTML = `
        <div class="mobile-card-top">
          <div>
            <div class="mobile-card-name">#${idx + 1}. ${sub.candidate.name}</div>
            <div class="mobile-card-meta">Roll: <strong>${sub.candidate.roll}</strong> • 📞 ${sub.candidate.phone}</div>
            <div style="font-size: 0.78rem; color: #1d4ed8; font-weight: 700; margin-top: 3px;">${examInfo.icon} ${examInfo.name} ${examInfo.paper ? `(${examInfo.paper})` : ""}</div>
          </div>
          <span class="score-badge ${badgeClass}">${sub.totalScore} / ${maxMarks}</span>
        </div>
        <div class="mobile-subject-chips">
          <div><span>CORRECT</span><strong style="color: #16a34a;">✓ ${sub.correctCount}</strong></div>
          <div><span>WRONG</span><strong style="color: #dc2626;">✗ ${sub.wrongCount}</strong></div>
          <div><span>SKIPPED</span><strong style="color: #64748b;">⚪ ${sub.unattemptedCount}</strong></div>
          <div><span>SCORE</span><strong>${sub.percentage}%</strong></div>
        </div>
        <button type="button" class="btn-mobile-view-paper" data-id="${sub.id}">
          📄 View Detailed Response Sheet
        </button>
      `;

      card.querySelector(".btn-mobile-view-paper").addEventListener("click", () => {
        openDetailedPaperModal(sub);
      });

      cardsContainer.appendChild(card);
    }
  });
}

/**
 * Export All Student Submissions to CSV (Excel Compatible)
 * Includes Candidate Details, Scores, Exam Title, and Every Single Option Selected!
 */
function exportAllSubmissionsToCSV() {
  const submissions = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");

  if (submissions.length === 0) {
    alert("No student submissions available to export.");
    return;
  }

  // Build CSV Header
  let headers = [
    "Rank",
    "Roll Number",
    "Student Name",
    "Exam Title",
    "Phone / WhatsApp",
    "Category",
    "Submission Date",
    "Total Score",
    "Percentage",
    "Correct Count",
    "Wrong Count",
    "Unattempted Count",
    "Tab Switches"
  ];

  // Append Q1 to Q100 headers
  for (let i = 1; i <= 100; i++) {
    headers.push(`Q${i}_Selected`);
    headers.push(`Q${i}_Correct`);
    headers.push(`Q${i}_Result`);
  }

  const csvRows = [headers.join(",")];

  submissions.forEach((sub, rank) => {
    let row = [
      rank + 1,
      `"${sub.candidate.roll}"`,
      `"${sub.candidate.name}"`,
      `"${sub.examTitle || 'Govt Exam'}"`,
      `"${sub.candidate.phone}"`,
      `"${sub.candidate.batch || ''}"`,
      `"${getSubmissionTimestamp(sub) > 0 ? new Date(getSubmissionTimestamp(sub)).toLocaleString('en-IN') : (sub.submittedAt || 'N/A')}"`,
      sub.totalScore,
      `"${sub.percentage}%"`,
      sub.correctCount || 0,
      sub.wrongCount || 0,
      sub.unattemptedCount || 0,
      sub.tabSwitches || 0
    ];

    // Append Q1 to Q100 individual student choices
    if (sub.detailedAnswers && sub.detailedAnswers.length > 0) {
      sub.detailedAnswers.forEach(ans => {
        row.push(`"${ans.studentOption || 'UNATTEMPTED'}"`);
        row.push(`"${ans.correctOption}"`);
        row.push(`"${ans.status.toUpperCase()}"`);
      });
    }

    csvRows.push(row.join(","));
  });

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `DeepakMockTest_Submissions_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Clear All Records
 */
function handleClearAllRecords() {
  if (confirm("⚠️ Are you sure you want to delete ALL student submissions? This cannot be undone!")) {
    localStorage.removeItem(state.STORAGE_KEY_SUBMISSIONS);
    renderAdminDashboard();
    alert("All student records have been reset.");
  }
}

/**
 * Cloud Webhook Sync (Google Sheets Live Integration)
 */
function loadCloudConfig() {
  const url = localStorage.getItem(state.STORAGE_KEY_CONFIG) || state.DEFAULT_CLOUD_WEBHOOK_URL;
  if (url) {
    console.log("Connected Google Sheet Webhook:", url);
  }
}

/**
 * Dispatch student test submission to Google Sheet Webhook
 */
async function dispatchCloudWebhook(record) {
  const url = localStorage.getItem(state.STORAGE_KEY_CONFIG) || state.DEFAULT_CLOUD_WEBHOOK_URL;
  if (!url) return;

  try {
    // Send as text/plain to avoid CORS preflight OPTIONS rejection in Google Apps Script
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(record)
    });
    console.log("Submission successfully dispatched to Google Sheets Webhook.");
  } catch (err) {
    console.warn("Failed to dispatch to Google Sheets Webhook:", err);
  }
}

/**
 * Sync all stored student submissions to Google Sheet in one click
 */
async function syncAllSubmissionsToGoogleSheets() {
  const submissions = JSON.parse(localStorage.getItem(state.STORAGE_KEY_SUBMISSIONS) || "[]");
  if (submissions.length === 0) {
    alert("कोई छात्र सबमिशन रिकॉर्ड नहीं मिला।");
    return;
  }

  const url = localStorage.getItem(state.STORAGE_KEY_CONFIG) || state.DEFAULT_CLOUD_WEBHOOK_URL;
  if (!confirm(`क्या आप सभी ${submissions.length} छात्रों का डेटा अपनी Google Sheet में सिंक करना चाहते हैं?`)) {
    return;
  }

  const syncBtn = document.getElementById("btn-sync-all-to-sheets");
  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.innerHTML = "<span>⏳ Syncing to Google Sheet...</span>";
  }

  let sent = 0;
  for (const record of submissions) {
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(record)
      });
      sent++;
      // Brief pause to prevent Google Apps Script rate limiting
      await new Promise(r => setTimeout(r, 600));
    } catch (e) {
      console.warn("Sync error for record:", record.candidate.name, e);
    }
  }

  if (syncBtn) {
    syncBtn.disabled = false;
    syncBtn.innerHTML = "<span>☁️ Sync All to Google Sheet</span>";
  }

  alert(`✅ सभी ${sent} छात्रों का रिकॉर्ड Google Sheet में भेज दिया गया है!\n\nअपनी Google Sheet खोलकर देखें।`);
}

/**
 * Test Google Sheet Webhook Connection
 */
async function testCloudWebhook() {
  const url = document.getElementById("cloud-webhook-url").value.trim() || state.DEFAULT_CLOUD_WEBHOOK_URL;
  if (!url) {
    alert("Please enter a valid Webhook URL first.");
    return;
  }

  try {
    alert("Google Sheet Webhook पर टेस्ट छात्र का डेटा भेजा जा रहा है...");
    const sampleRecord = createMockSubmission("Test Student (Verification)", "BSC-TEST-001", "9876543210", 94);
    
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(sampleRecord)
    });
    
    alert("✅ टेस्ट सिग्नल सफलतापूर्वक भेजा गया!\n\nकृपया अपनी Google Sheet खोलकर देखें: 'Test Student' का डेटा और सभी प्रश्न 1 से 100 दर्ज हो चुके होंगे।");
  } catch (err) {
    alert(`Webhook error: ${err.message}`);
  }
}

/**
 * =========================================================================
 * ADMIN PANEL 4: VERIFIED EXAM PATTERNS MANAGEMENT & INSPECTION
 * =========================================================================
 */
function renderAdminExamPatternsTable() {
  const tbody = document.getElementById("admin-patterns-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const allConfigs = (typeof getAllVerifiedExamConfigs === "function") 
    ? getAllVerifiedExamConfigs() 
    : [];

  const searchInput = document.getElementById("admin-pattern-search");
  const query = (searchInput ? searchInput.value : "").toLowerCase().trim();

  const filterSelect = document.getElementById("admin-pattern-category-filter");
  const selectedCat = filterSelect ? filterSelect.value : "all";

  const filtered = allConfigs.filter(cfg => {
    const matchCat = selectedCat === "all" || cfg.category === selectedCat;
    const matchQuery = !query || 
      (cfg.examName && cfg.examName.toLowerCase().includes(query)) ||
      (cfg.authority && cfg.authority.toLowerCase().includes(query)) ||
      (cfg.stage && cfg.stage.toLowerCase().includes(query)) ||
      (cfg.shortName && cfg.shortName.toLowerCase().includes(query));
    return matchCat && matchQuery;
  });

  const statTotal = document.getElementById("stat-patterns-total");
  if (statTotal) statTotal.textContent = filtered.length;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" class="empty-state">
          <div class="icon">🔍</div>
          <h4>No verified exam patterns found matching your search.</h4>
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((cfg, idx) => {
    const tr = document.createElement("tr");

    const timingBadge = cfg.timingMode === "sectional" 
      ? `<span class="badge-sectional" style="background:#fef3c7; color:#b45309; padding:3px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">⏱️ Sectional (20m/Sec)</span>` 
      : `<span class="badge-composite" style="background:#e0f2fe; color:#0369a1; padding:3px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">Composite (${cfg.durationMinutes}m)</span>`;

    const negDisplay = (cfg.negativeMarks !== undefined && cfg.negativeMarks > 0) 
      ? `-${Number(cfg.negativeMarks).toFixed(2)}` 
      : "0.00";

    const sourceLink = cfg.officialSourceUrl 
      ? `<a href="${cfg.officialSourceUrl}" target="_blank" rel="noopener" class="pattern-source-link" style="color:#1557B0; font-weight:600; text-decoration:underline;" title="${cfg.officialNotificationName || 'Official Notification'}">🌐 ${cfg.officialNotificationName ? cfg.officialNotificationName.slice(0, 24) + '...' : 'Official Bulletin'} ↗</a>` 
      : `<span style="color:#94a3b8;">Official Bulletin</span>`;

    tr.innerHTML = `
      <td><strong>#${idx + 1}</strong></td>
      <td>
        <div style="font-weight: 700; color: #0B2D5C;">${cfg.examName || cfg.title}</div>
        <div style="font-size: 0.76rem; color: #64748b;">${cfg.authority || 'Recruitment Board'}</div>
      </td>
      <td>
        <span class="stage-pill" style="background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:0.78rem; font-weight:600;">${cfg.stage || 'Tier-I'}</span>
        <div style="font-size: 0.74rem; color: #64748b; margin-top: 2px;">${cfg.paper || 'CBT'}</div>
      </td>
      <td><strong style="color: #1557B0; font-size: 1.05rem;">${cfg.totalQuestions}</strong></td>
      <td><strong>${cfg.totalMarks}</strong></td>
      <td>${cfg.durationMinutes} Mins</td>
      <td><span style="color: #16a34a; font-weight: 700;">+${cfg.marksPerCorrect}</span></td>
      <td><span style="color: #dc2626; font-weight: 700;">${negDisplay}</span></td>
      <td>${timingBadge}</td>
      <td>${sourceLink}</td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button type="button" class="btn-admin primary" style="padding: 4px 8px; font-size: 0.78rem;" onclick="handleEditPatternModal('${cfg.examId}')" title="Edit Configuration">✏️ Edit</button>
          <button type="button" class="btn-admin" style="padding: 4px 8px; font-size: 0.78rem;" onclick="handleResetPatternToDefault('${cfg.examId}')" title="Reset to Official Default">🔄</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
window.renderAdminExamPatternsTable = renderAdminExamPatternsTable;

function handleEditPatternModal(examId) {
  const cfg = getExamConfig(examId);
  if (!cfg) return;

  document.getElementById("edit-pattern-exam-id").value = examId;
  document.getElementById("edit-pattern-title").textContent = `Edit Config: ${cfg.examName || cfg.title}`;
  document.getElementById("edit-pattern-questions").value = cfg.totalQuestions || 100;
  document.getElementById("edit-pattern-marks").value = cfg.totalMarks || 100;
  document.getElementById("edit-pattern-duration").value = cfg.durationMinutes || 120;
  document.getElementById("edit-pattern-correct").value = cfg.marksPerCorrect || 1;
  document.getElementById("edit-pattern-negative").value = cfg.negativeMarks !== undefined ? cfg.negativeMarks : (cfg.negativeMarking || 0);
  document.getElementById("edit-pattern-timing-mode").value = cfg.timingMode || "composite";

  document.getElementById("modal-edit-pattern").classList.add("active");
}
window.handleEditPatternModal = handleEditPatternModal;

function handleSavePatternEdit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const examId = document.getElementById("edit-pattern-exam-id").value;
  if (!examId) return;

  const questions = parseInt(document.getElementById("edit-pattern-questions").value, 10);
  const marks = parseInt(document.getElementById("edit-pattern-marks").value, 10);
  const duration = parseInt(document.getElementById("edit-pattern-duration").value, 10);
  const correct = parseFloat(document.getElementById("edit-pattern-correct").value);
  const negative = parseFloat(document.getElementById("edit-pattern-negative").value);
  const timingMode = document.getElementById("edit-pattern-timing-mode").value;

  if (typeof saveCustomExamConfig === "function") {
    saveCustomExamConfig(examId, {
      totalQuestions: questions,
      totalMarks: marks,
      durationMinutes: duration,
      marksPerCorrect: correct,
      negativeMarks: negative,
      negativeMarking: negative,
      timingMode
    });
  }

  document.getElementById("modal-edit-pattern").classList.remove("active");
  alert(`✅ परीक्षा प्रारूप अद्यतन सफल (${examId}):\nप्रश्न: ${questions}, अंक: ${marks}, समय: ${duration}m, अंकन: +${correct}/-${negative}`);
  renderAdminExamPatternsTable();

  // If active exam was edited, refresh UI
  if (state.selectedSubExamId === examId || state.selectedExamId === examId) {
    selectSubExam(examId);
  }
}
window.handleSavePatternEdit = handleSavePatternEdit;

function handleResetPatternToDefault(examId) {
  if (confirm(`क्या आप ${examId} के परीक्षा प्रारूप को मूल आधिकारिक विनिर्देशों (Official Bulletin Default) पर रीसेट करना चाहते हैं?`)) {
    if (typeof resetExamConfigToDefault === "function") {
      resetExamConfigToDefault(examId);
    }
    renderAdminExamPatternsTable();
    if (state.selectedSubExamId === examId || state.selectedExamId === examId) {
      selectSubExam(examId);
    }
    alert("✅ आधिकारिक मूल प्रारूप पर सफलतापूर्वक रीसेट कर दिया गया।");
  }
}
window.handleResetPatternToDefault = handleResetPatternToDefault;

/* ==========================================================================
   PERMANENT STUDENT ACCOUNT + PROFILE + COMPLETE MOCK HISTORY SYSTEM
   Fulfills:
   - ONE STUDENT = ONE PERMANENT ACCOUNT
   - Profile Photo upload with strict 5 MB limit & decode validation
   - Personal Student Dashboard with Stats, Recent Mocks & Complete History
   - Password hashing with salt (Argon2 / SHA-256 WebCrypto)
   - IDOR-safe mock attempt ownership
   - Admin Student Management with status toggle & secure password reset
   ========================================================================== */

window._currentRegPhotoBase64 = null;
window._currentChangePhotoBase64 = null;
window._stuHistoryCurrentPage = 1;

/**
 * Validate Image File: Max 5 MB, JPG/PNG/WEBP, Image() decode check
 * Auto-compresses image to lightweight passport thumbnail (~15-25 KB) via Canvas
 * Completely eliminates localStorage quota exceeded errors!
 */
async function validateImageFile(file) {
  if (!file) return { valid: false, message: "No file selected." };
  const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
  if (file.size > MAX_SIZE) {
    return { valid: false, message: "Profile photo must be 5 MB or smaller. (अधिकतम 5 MB)" };
  }
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.type.toLowerCase())) {
    return { valid: false, message: "Please upload a valid JPG, JPEG, PNG or WEBP image." };
  }
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        if (img.width < 10 || img.height < 10) {
          resolve({ valid: false, message: "Image dimensions too small or corrupted." });
          return;
        }
        try {
          // Auto compress to max 250x250 with aspect ratio preserved
          let w = img.naturalWidth || img.width;
          let h = img.naturalHeight || img.height;
          const maxDim = 250;
          if (w > h) {
            if (w > maxDim) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            }
          } else {
            if (h > maxDim) {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = Math.max(w, 1);
          canvas.height = Math.max(h, 1);
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL("image/jpeg", 0.78);
          resolve({
            valid: true,
            base64: compressed,
            originalSize: file.size,
            compressedLength: compressed.length
          });
        } catch (canvasErr) {
          console.warn("[validateImageFile] Canvas compression error, falling back to raw:", canvasErr);
          resolve({ valid: true, base64: e.target.result });
        }
      };
      img.onerror = function() {
        resolve({ valid: false, message: "Corrupted or invalid image file. Could not decode." });
      };
      img.src = e.target.result;
    };
    reader.onerror = function() {
      resolve({ valid: false, message: "Failed to read file." });
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Update Welcome Screen Active Session Card
 */
function updateWelcomeActiveSession(student) {
  const card = document.getElementById("student-active-session-card");
  const regForm = document.getElementById("candidate-form");
  const loginForm = document.getElementById("student-login-form");
  const authTabs = document.querySelector(".student-auth-tabs");

  if (!card) return;

  if (student) {
    card.style.display = "block";
    if (regForm) regForm.style.display = "none";
    if (loginForm) loginForm.style.display = "none";
    if (authTabs) authTabs.style.display = "none";

    const nameEl = document.getElementById("active-session-name") || document.getElementById("active-stu-name");
    const idEl = document.getElementById("active-session-id") || document.getElementById("active-stu-id");
    const phoneEl = document.getElementById("active-session-phone") || document.getElementById("active-stu-phone");
    const photoEl = document.getElementById("active-session-photo") || document.getElementById("active-stu-avatar");
    const btnNameEl = document.getElementById("btn-active-student-name");

    if (nameEl) nameEl.textContent = student.name;
    if (idEl) idEl.textContent = student.studentId;
    if (phoneEl) phoneEl.textContent = student.phone;
    if (btnNameEl) btnNameEl.textContent = student.name ? student.name.split(" ")[0] : "Student";
    if (photoEl) {
      if (student.photoUrl) {
        if (photoEl.tagName === "IMG") {
          photoEl.src = student.photoUrl;
        } else {
          photoEl.innerHTML = `<img src="${student.photoUrl}" alt="Photo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        }
      }
    }

    // Pre-fill candidate registration form fields
    const fName = document.getElementById("student-name");
    const fRoll = document.getElementById("student-roll");
    const fPhone = document.getElementById("student-phone");
    const fBatch = document.getElementById("student-batch");
    if (fName) fName.value = student.name;
    if (fRoll) fRoll.value = student.roll || "";
    if (fPhone) fPhone.value = student.phone;
    if (fBatch && student.category) fBatch.value = student.category;
  } else {
    card.style.display = "none";
    if (authTabs) authTabs.style.display = "flex";

    const btnAuthLog = document.getElementById("btn-auth-mode-login");
    const isLoginActive = btnAuthLog && btnAuthLog.classList.contains("active");
    if (isLoginActive) {
      if (regForm) regForm.style.display = "none";
      if (loginForm) loginForm.style.display = "block";
    } else {
      if (regForm) regForm.style.display = "block";
      if (loginForm) loginForm.style.display = "none";
    }
  }
}
window.updateWelcomeActiveSession = updateWelcomeActiveSession;

/**
 * Show Registration Success Modal with Permanent Student ID
 */
function showRegistrationSuccessModal(student, onStartCallback) {
  const modal = document.getElementById("modal-student-reg-success");
  if (!modal) return;

  const idDisp = document.getElementById("reg-success-display-id") || document.getElementById("reg-success-id-display");
  const avatar = document.getElementById("reg-success-avatar");
  const nameEl = document.getElementById("reg-success-name");
  const phoneEl = document.getElementById("reg-success-phone");

  if (idDisp) idDisp.textContent = student.studentId;
  if (nameEl) nameEl.textContent = student.name;
  if (phoneEl) phoneEl.textContent = `Mobile: ${student.phone}`;
  if (avatar) {
    if (student.photoUrl) {
      avatar.innerHTML = `<img src="${student.photoUrl}" alt="Photo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
    } else {
      avatar.textContent = student.name.charAt(0).toUpperCase();
    }
  }

  modal.classList.add("active");

  const startBtn = document.getElementById("btn-reg-success-start");
  if (startBtn) {
    startBtn.onclick = () => {
      modal.classList.remove("active");
      if (typeof onStartCallback === "function") onStartCallback();
    };
  }

  const dashBtn = document.getElementById("btn-success-goto-dash") || document.getElementById("btn-reg-success-dashboard");
  if (dashBtn) {
    dashBtn.onclick = () => {
      modal.classList.remove("active");
      showScreen("studentDashboard");
      renderStudentDashboard(student);
    };
  }

  const closeBtn = document.getElementById("btn-close-reg-success");
  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove("active");
  }

  const btnCopyId = document.getElementById("btn-copy-success-id");
  if (btnCopyId) {
    btnCopyId.onclick = () => {
      if (idDisp) {
        navigator.clipboard.writeText(idDisp.textContent.trim()).then(() => {
          alert("📋 Student ID copied to clipboard: " + idDisp.textContent.trim());
        });
      }
    };
  }
}
window.showRegistrationSuccessModal = showRegistrationSuccessModal;

/**
 * Render Student Dashboard
 */
async function renderStudentDashboard(student) {
  if (!student) {
    student = window.StudentAccountService ? StudentAccountService.getActiveSession() : null;
  }
  if (!student) {
    alert("⚠️ Please login to view your Student Dashboard.");
    showScreen("welcome");
    return;
  }

  state.currentStudent = student;

  // 1. Populate Profile Hero
  const avEl = document.getElementById("dash-student-photo") || document.getElementById("dash-stu-avatar");
  if (avEl) {
    if (student.photoUrl) {
      if (avEl.tagName === "IMG") {
        avEl.src = student.photoUrl;
      } else {
        avEl.innerHTML = `<img src="${student.photoUrl}" alt="Profile Photo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      }
    } else {
      if (avEl.tagName === "IMG") {
        avEl.src = "assets/deepak_mock_test_logo.jpg";
      } else {
        avEl.textContent = student.name.charAt(0).toUpperCase();
      }
    }
  }
  const nameEl = document.getElementById("dash-student-name") || document.getElementById("dash-stu-name");
  if (nameEl) nameEl.textContent = student.name;
  const idEl = document.getElementById("dash-student-id") || document.getElementById("dash-stu-id");
  if (idEl) idEl.textContent = student.studentId;
  const statusEl = document.getElementById("dash-student-status-badge") || document.getElementById("dash-stu-status");
  if (statusEl) {
    statusEl.textContent = student.status === "suspended" ? "⚠️ Suspended" : "Active";
    statusEl.className = student.status === "suspended" ? "student-status-badge suspended" : "student-status-badge active";
  }
  const phoneEl = document.getElementById("dash-student-phone") || document.getElementById("dash-stu-phone");
  if (phoneEl) phoneEl.textContent = student.phone || "N/A";
  const emailEl = document.getElementById("dash-student-email") || document.getElementById("dash-stu-email");
  if (emailEl) emailEl.textContent = student.email || "Not Provided";
  const catEl = document.getElementById("dash-student-batch") || document.getElementById("dash-stu-category");
  if (catEl) catEl.textContent = student.category || student.batch || "General (UR)";
  const regEl = document.getElementById("dash-student-reg-date") || document.getElementById("dash-stu-regdate");
  if (regEl) regEl.textContent = student.createdAt ? new Date(student.createdAt).toLocaleDateString("en-IN") : "Today";
  const lastLoginEl = document.getElementById("dash-student-last-login") || document.getElementById("dash-stu-lastlogin");
  if (lastLoginEl) lastLoginEl.textContent = student.lastLoginAt || student.lastLogin ? new Date(student.lastLoginAt || student.lastLogin).toLocaleTimeString("en-IN") : "Just now";

  // Pre-fill inline profile edit form
  const editId = document.getElementById("profile-display-id");
  const editName = document.getElementById("profile-edit-name") || document.getElementById("edit-profile-name");
  const editPhone = document.getElementById("profile-edit-phone") || document.getElementById("edit-profile-phone");
  const editEmail = document.getElementById("profile-edit-email") || document.getElementById("edit-profile-email");
  if (editId) editId.value = student.studentId;
  if (editName) editName.value = student.name;
  if (editPhone) editPhone.value = student.phone;
  if (editEmail) editEmail.value = student.email || "";

  // 2. Synchronize & Initialize Exam Selector in Dashboard
  let savedCat = null;
  try {
    savedCat = localStorage.getItem("govtexamhub_selected_category");
  } catch(e) {}
  const targetCat = state.selectedExamId || savedCat || "neet";
  if (typeof selectExamCategory === "function") {
    selectExamCategory(targetCat);
  }

  // 3. Aggregate Personal Statistics
  if (window.StudentAccountService) {
    try {
      const stats = await StudentAccountService.getStudentStatistics(student.studentId);
      const statMocks = document.getElementById("stat-student-total-mocks") || document.getElementById("dash-stat-total-mocks");
      const statAvgScore = document.getElementById("stat-student-avg-score") || document.getElementById("dash-stat-avg-score");
      const statAvgAcc = document.getElementById("stat-student-avg-accuracy") || document.getElementById("dash-stat-avg-acc");
      const statBestScore = document.getElementById("stat-student-best-score") || document.getElementById("dash-stat-best-score");

      if (statMocks) statMocks.textContent = stats.totalMocks;
      if (statAvgScore) statAvgScore.textContent = `${stats.avgScore}%`;
      if (statAvgAcc) statAvgAcc.textContent = `${stats.avgAccuracy}%`;
      if (statBestScore) statBestScore.textContent = `${stats.bestScore} Marks`;
    } catch (e) {
      console.warn("Stats notice:", e);
    }
  }

  // 4. Fetch & Render Recent Mocks (Latest 6)
  renderStudentRecentMocks(student.studentId);

  // 5. Fetch & Render Complete Mock History
  renderStudentHistoryTable(student.studentId, 1);
}
window.renderStudentDashboard = renderStudentDashboard;

/**
 * Render Recent Mocks Grid
 */
async function renderStudentRecentMocks(studentId) {
  const container = document.getElementById("recent-mocks-list") || document.getElementById("dash-recent-mocks-grid");
  if (!container) return;
  container.innerHTML = '<div style="padding: 20px; color: #64748b;">Loading recent mocks...</div>';

  if (!window.StudentAccountService) return;
  const res = await StudentAccountService.getStudentMocks(studentId, { page: 1, limit: 6 });
  const mocks = res.attempts || [];

  if (mocks.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; background:#f8fafc; border:2px dashed #cbd5e1; border-radius:12px; padding:32px; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🎯</div>
        <h4 style="color:#1e293b; margin-bottom:6px;">No Mocks Attempted Yet</h4>
        <p style="color:#64748b; font-size:0.9rem; margin-bottom:16px;">Take your first full-length CBT mock test now. All your attempts, scores, and detailed solutions will be saved here permanently!</p>
        <button class="btn btn-primary" onclick="launchActiveMockFromDashboard()">🚀 Start Current Active Mock</button>
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  mocks.forEach(m => {
    const card = document.createElement("div");
    card.className = "recent-mock-card";
    const dateStr = m.submittedAt ? new Date(m.submittedAt).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }) : "Recently";
    const timeTaken = m.timeTakenSeconds ? `${Math.round(m.timeTakenSeconds / 60)} Mins` : "Full time";
    const scoreVal = m.totalScore !== undefined ? m.totalScore : 0;
    const maxVal = m.maxMarks || 100;
    const accuracy = m.accuracy !== undefined ? m.accuracy : 
      ((m.correctCount + m.wrongCount > 0) ? ((m.correctCount / (m.correctCount + m.wrongCount)) * 100).toFixed(1) : 0);

    card.innerHTML = `
      <div class="recent-mock-header">
        <h4 class="recent-mock-title">${m.examTitle || "Govt CBT Mock Test"}</h4>
        <span class="recent-mock-date">📅 ${dateStr}</span>
      </div>
      <div class="recent-mock-score-row">
        <div>
          <span class="recent-mock-score">${scoreVal}</span>
          <span class="recent-mock-max">/ ${maxVal}</span>
        </div>
        <span class="recent-mock-pct">${m.percentage || 0}%</span>
      </div>
      <div class="recent-mock-meta-row">
        <span>🎯 Accuracy: <strong>${accuracy}%</strong></span>
        <span>⏱️ Time: <strong>${timeTaken}</strong></span>
        <span>✓ Correct: <strong>${m.correctCount || 0}</strong></span>
      </div>
      <div style="margin-top: 14px;">
        <button class="btn btn-sm btn-outline-primary w-100 btn-view-mock-result" style="width:100%; border: 1.5px solid #2563eb; background:#eff6ff; color:#1d4ed8; font-weight:700; border-radius:6px; padding:7px 12px; cursor:pointer;">
          👁️ View Complete Result / परिणाम देखें
        </button>
      </div>
    `;

    const btnView = card.querySelector(".btn-view-mock-result");
    if (btnView) {
      btnView.addEventListener("click", () => {
        if (typeof openDetailedPaperModal === "function") {
          openDetailedPaperModal(m);
        }
      });
    }
    container.appendChild(card);
  });
}

/**
 * Render Student History Table (With Search, Exam Filter, and Pagination)
 */
async function renderStudentHistoryTable(studentId, page = 1) {
  window._stuHistoryCurrentPage = page;
  const tbody = document.getElementById("stu-history-tbody") || document.getElementById("dash-history-tbody");
  const emptyBox = document.getElementById("dash-history-empty");
  const paginationBox = document.getElementById("dash-history-pagination");
  if (!tbody) return;

  const searchInput = document.getElementById("stu-history-search") || document.getElementById("dash-history-search");
  const searchVal = searchInput ? searchInput.value.trim() : "";
  const examFilter = document.getElementById("stu-history-filter-exam") || document.getElementById("dash-history-filter-exam");
  const examVal = examFilter ? examFilter.value : "";

  tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:24px; color:#64748b;">Loading mock attempts...</td></tr>';
  if (emptyBox) emptyBox.style.display = "none";

  if (!window.StudentAccountService) return;
  const res = await StudentAccountService.getStudentMocks(studentId, {
    page,
    limit: 10,
    search: searchVal,
    examId: examVal === "all" ? "" : examVal
  });

  const attempts = res.attempts || [];
  const total = res.total || 0;
  const totalPages = res.totalPages || 1;

  if (attempts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:32px; color:#64748b;">
          No mock attempts found. All your future mock test attempts will be recorded here permanently!
        </td>
      </tr>
    `;
    if (paginationBox) paginationBox.style.display = "none";
    return;
  }

  if (paginationBox) paginationBox.style.display = "flex";

  tbody.innerHTML = "";
  attempts.forEach((att, idx) => {
    const tr = document.createElement("tr");
    const rowNum = (page - 1) * 10 + (idx + 1);
    const dateStr = att.submittedAt ? new Date(att.submittedAt).toLocaleDateString("en-IN", { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) : "N/A";
    const timeTaken = att.timeTakenSeconds ? `${Math.round(att.timeTakenSeconds / 60)}m` : "N/A";
    const accuracy = att.accuracy !== undefined ? att.accuracy : 
      ((att.correctCount + att.wrongCount > 0) ? ((att.correctCount / (att.correctCount + att.wrongCount)) * 100).toFixed(1) : 0);

    tr.innerHTML = `
      <td style="text-align:center;"><strong>#${rowNum}</strong></td>
      <td>
        <strong style="color:#1e3a8a; display:block;">${att.examTitle || "Mock Test"}</strong>
        <span style="font-size:0.75rem; color:#64748b;">ID: ${att.attemptId || att.id || "N/A"}</span>
      </td>
      <td>${dateStr}</td>
      <td><strong>${att.totalScore}</strong> / ${att.maxMarks || 100} (${att.percentage}%)</td>
      <td style="text-align:center;"><span class="badge" style="background:#ecfdf5; color:#065f46; padding:3px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">✓ Completed (${timeTaken})</span></td>
      <td style="text-align:center;"><strong>${accuracy}%</strong></td>
      <td style="text-align:center;">
        <button class="btn btn-sm btn-outline-primary btn-tbl-view-result" style="border:1.5px solid #2563eb; background:#eff6ff; color:#1d4ed8; font-weight:700; border-radius:5px; padding:4px 10px; cursor:pointer;">
          👁️ View Result
        </button>
      </td>
    `;

    const btn = tr.querySelector(".btn-tbl-view-result");
    if (btn) {
      btn.addEventListener("click", () => {
        if (typeof openDetailedPaperModal === "function") {
          openDetailedPaperModal(att);
        }
      });
    }
    tbody.appendChild(tr);
  });

  // Update pagination info
  const showingEl = document.getElementById("dash-hist-showing");
  const pageNumEl = document.getElementById("dash-hist-page-num");
  const prevBtn = document.getElementById("dash-hist-prev");
  const nextBtn = document.getElementById("dash-hist-next");

  const startIdx = (page - 1) * 10 + 1;
  const endIdx = Math.min(page * 10, total);
  if (showingEl) showingEl.textContent = `Showing ${startIdx}-${endIdx} of ${total} attempts`;
  if (pageNumEl) pageNumEl.textContent = `Page ${page} of ${totalPages}`;
  if (prevBtn) prevBtn.disabled = page <= 1;
  if (nextBtn) nextBtn.disabled = page >= totalPages;
}
window.renderStudentHistoryTable = renderStudentHistoryTable;

/**
 * Launch Active Mock from Dashboard
 */
function launchActiveMockFromDashboard() {
  if (!state.currentStudent) {
    const active = window.StudentAccountService ? StudentAccountService.getActiveSession() : null;
    if (active) {
      state.currentStudent = active;
    } else {
      alert("⚠️ Please login to start an exam.");
      showScreen("welcome");
      return;
    }
  }
  startExamForCandidate(
    state.currentStudent.name,
    state.currentStudent.roll || state.currentStudent.studentId,
    state.currentStudent.phone,
    state.currentStudent.category || state.currentStudent.batch || "General"
  );
}
window.launchActiveMockFromDashboard = launchActiveMockFromDashboard;

/**
 * Render Admin Student Management Panel (5th Tab)
 */
async function renderAdminStudentsPanel() {
  const tbody = document.getElementById("admin-students-tbody");
  if (!tbody) return;

  const totalCountEl = document.getElementById("stat-admin-total-students") || document.getElementById("admin-students-total-count");
  const activeCountEl = document.getElementById("stat-admin-active-students");
  const suspendedCountEl = document.getElementById("stat-admin-suspended-students");

  const searchInput = document.getElementById("admin-student-search-input") || document.getElementById("admin-student-search");
  const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const filterStatus = document.getElementById("admin-student-filter-status");
  const statusVal = filterStatus ? filterStatus.value : "";

  tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:24px; color:#64748b;">Loading registered student accounts...</td></tr>';

  if (!window.StudentAccountService) return;
  const students = await StudentAccountService.getAllStudents();

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status !== "suspended").length;
  const suspendedStudents = students.filter(s => s.status === "suspended").length;

  if (totalCountEl) totalCountEl.textContent = totalStudents;
  if (activeCountEl) activeCountEl.textContent = activeStudents;
  if (suspendedCountEl) suspendedCountEl.textContent = suspendedStudents;

  let filtered = students.filter(s => {
    const matchSearch = !searchVal || 
      (s.name && s.name.toLowerCase().includes(searchVal)) ||
      (s.studentId && s.studentId.toLowerCase().includes(searchVal)) ||
      (s.phone && s.phone.includes(searchVal)) ||
      (s.roll && s.roll.toLowerCase().includes(searchVal)) ||
      (s.email && s.email.toLowerCase().includes(searchVal));
    const matchStatus = !statusVal || s.status === statusVal;
    return matchSearch && matchStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding:32px; color:#64748b;">
          No student accounts found matching your filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = "";
  filtered.forEach(st => {
    const tr = document.createElement("tr");
    const regDate = st.createdAt ? new Date(st.createdAt).toLocaleDateString("en-IN") : "N/A";
    const isSuspended = st.status === "suspended";
    const statusBadge = isSuspended 
      ? `<span class="badge" style="background:#fee2e2; color:#991b1b; padding:3px 8px; border-radius:4px; font-weight:700;">Suspended</span>` 
      : `<span class="badge" style="background:#dcfce7; color:#15803d; padding:3px 8px; border-radius:4px; font-weight:700;">Active</span>`;

    const avatarHtml = st.photoUrl 
      ? `<img src="${st.photoUrl}" alt="Photo" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid #cbd5e1;">`
      : `<div style="width:36px; height:36px; border-radius:50%; background:#e2e8f0; display:inline-flex; align-items:center; justify-content:center; font-weight:700; color:#475569;">${st.name ? st.name.charAt(0).toUpperCase() : "S"}</div>`;

    const studentMocks = StudentAccountService.getStudentMockHistory ? StudentAccountService.getStudentMockHistory(st.studentId) : [];
    const mockCount = studentMocks.length;

    tr.innerHTML = `
      <td style="text-align:center;">${avatarHtml}</td>
      <td><strong style="color:#1e3a8a;">${st.studentId}</strong></td>
      <td><strong>${st.name || "Student"}</strong></td>
      <td>${st.phone || "—"}</td>
      <td>${st.category || st.roll || "General"}</td>
      <td>${regDate}</td>
      <td style="text-align:center;">
        <span class="badge" style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:12px; font-weight:700;">${mockCount}</span>
      </td>
      <td style="text-align:center;">${statusBadge}</td>
      <td style="text-align:center;">
        <div style="display:inline-flex; gap:6px;">
          <button class="btn btn-sm btn-action-toggle-status" style="border:1px solid #cbd5e1; background:#f8fafc; padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;">
            ${isSuspended ? "✓ Activate" : "⛔ Suspend"}
          </button>
          <button class="btn btn-sm btn-action-reset-pass" style="border:1px solid #f59e0b; background:#fffbeb; color:#b45309; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; cursor:pointer;">
            🔑 Reset Pass
          </button>
        </div>
      </td>
    `;

    // Toggle status button
    const toggleBtn = tr.querySelector(".btn-action-toggle-status");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", async () => {
        const nextStatus = isSuspended ? "active" : "suspended";
        if (confirm(`Change status of ${st.name} (${st.studentId}) to ${nextStatus}?`)) {
          await StudentAccountService.toggleStudentStatus(st.studentId, nextStatus);
          renderAdminStudentsPanel();
        }
      });
    }

    // Reset password button
    const resetBtn = tr.querySelector(".btn-action-reset-pass");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const modal = document.getElementById("modal-admin-student-reset-pass");
        const idInput = document.getElementById("admin-reset-stu-id");
        const nameDisp = document.getElementById("admin-reset-stu-name");
        const passInput = document.getElementById("admin-reset-new-pass");

        if (idInput) idInput.value = st.studentId;
        if (nameDisp) nameDisp.textContent = `${st.name} (${st.studentId})`;
        if (passInput) passInput.value = "";
        if (modal) modal.classList.add("active");
      });
    }

    tbody.appendChild(tr);
  });
}
window.renderAdminStudentsPanel = renderAdminStudentsPanel;

/**
 * Initialize Student Account Integration & Wire All Event Listeners
 */
function initStudentAccountIntegration() {
  // Check existing session
  if (window.StudentAccountService) {
    const activeStudent = StudentAccountService.getActiveSession();
    if (activeStudent) {
      state.currentStudent = activeStudent;
      updateWelcomeActiveSession(activeStudent);
      StudentAccountService.migratePastSubmissionsForStudent(activeStudent);
    }
  }

  // 1. Auth Switcher Tabs (Welcome Screen: Registration vs Login)
  const btnAuthReg = document.getElementById("btn-auth-mode-register");
  const btnAuthLog = document.getElementById("btn-auth-mode-login");
  const regForm = document.getElementById("candidate-form");
  const loginForm = document.getElementById("student-login-form");
  const sessionCard = document.getElementById("student-active-session-card");

  function switchToRegister() {
    if (btnAuthReg) btnAuthReg.classList.add("active");
    if (btnAuthLog) btnAuthLog.classList.remove("active");
    if (regForm) regForm.style.display = "block";
    if (loginForm) loginForm.style.display = "none";
    if (sessionCard) sessionCard.style.display = "none";
  }

  function switchToLogin() {
    if (btnAuthLog) btnAuthLog.classList.add("active");
    if (btnAuthReg) btnAuthReg.classList.remove("active");
    if (loginForm) loginForm.style.display = "block";
    if (regForm) regForm.style.display = "none";
    if (sessionCard) sessionCard.style.display = "none";
    const idInput = document.getElementById("login-student-id");
    if (idInput) idInput.focus();
  }

  if (btnAuthReg) btnAuthReg.addEventListener("click", switchToRegister);
  if (btnAuthLog) btnAuthLog.addEventListener("click", switchToLogin);

  // 2. Photo Upload Preview & Validation (Strict 5 MB + decodability)
  const regPhotoInput = document.getElementById("reg-student-photo");
  const btnBrowsePhoto = document.getElementById("btn-browse-photo");
  const btnChangeRegPhoto = document.getElementById("btn-change-reg-photo");
  const photoPreviewImg = document.getElementById("reg-photo-preview-img");
  const photoPreviewPlaceholder = document.getElementById("reg-preview-placeholder");
  const photoFileStatus = document.getElementById("reg-photo-file-status");

  if (btnBrowsePhoto && regPhotoInput) {
    btnBrowsePhoto.addEventListener("click", () => regPhotoInput.click());
  }
  if (btnChangeRegPhoto && regPhotoInput) {
    btnChangeRegPhoto.addEventListener("click", () => regPhotoInput.click());
  }

  if (regPhotoInput) {
    regPhotoInput.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const check = await validateImageFile(file);
      if (!check.valid) {
        alert("⚠️ " + check.message);
        regPhotoInput.value = "";
        window._currentRegPhotoBase64 = null;
        if (photoPreviewImg) photoPreviewImg.style.display = "none";
        if (photoPreviewPlaceholder) photoPreviewPlaceholder.style.display = "block";
        if (btnChangeRegPhoto) btnChangeRegPhoto.style.display = "none";
        if (btnBrowsePhoto) btnBrowsePhoto.style.display = "inline-flex";
        if (photoFileStatus) photoFileStatus.textContent = "Max size: 5 MB";
        return;
      }

      window._currentRegPhotoBase64 = check.base64;
      if (photoPreviewImg) {
        photoPreviewImg.src = check.base64;
        photoPreviewImg.style.display = "block";
      }
      if (photoPreviewPlaceholder) photoPreviewPlaceholder.style.display = "none";
      if (btnBrowsePhoto) btnBrowsePhoto.style.display = "none";
      if (btnChangeRegPhoto) btnChangeRegPhoto.style.display = "inline-flex";
      if (photoFileStatus) photoFileStatus.textContent = `✓ ${(file.size / (1024 * 1024)).toFixed(2)} MB Selected (Auto-optimized for passport size)`;
    });
  }

  // 3. Password Toggle Eye Buttons
  document.querySelectorAll(".btn-toggle-eye").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
        btn.textContent = input.type === "password" ? "👁️" : "🙈";
      }
    });
  });

  // 4. Student Login Form
  const loginFormEl = document.getElementById("student-login-form");
  if (loginFormEl) {
    loginFormEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const idInput = document.getElementById("login-student-id") || document.getElementById("login-identifier");
      const passInput = document.getElementById("login-student-password") || document.getElementById("login-password");
      const identifier = idInput ? idInput.value.trim() : "";
      const password = passInput ? passInput.value : "";

      if (!identifier || !password) {
        alert("⚠️ कृपया Student ID / Mobile और पासवर्ड दर्ज करें।");
        return;
      }

      if (!window.StudentAccountService) {
        alert("⚠️ Authentication service is not available.");
        return;
      }

      const res = await StudentAccountService.loginStudent(identifier, password);
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }

      // Success
      state.currentStudent = res.student;
      updateWelcomeActiveSession(res.student);
      StudentAccountService.migratePastSubmissionsForStudent(res.student);

      // Open Dashboard
      showScreen("studentDashboard");
      renderStudentDashboard(res.student);
    });
  }

  // 5. Forgot Password Triggers & Modal
  const btnOpenForgot = document.getElementById("btn-trigger-forgot-pass") || document.getElementById("btn-open-forgot-pass");
  const modalForgot = document.getElementById("modal-student-forgot-pass");
  const formForgot = document.getElementById("form-forgot-pass");
  const btnCloseForgot = document.getElementById("btn-close-forgot-pass") || document.getElementById("btn-close-forgot-modal");
  const btnCancelForgot = document.getElementById("btn-cancel-forgot-pass") || document.getElementById("btn-cancel-forgot");

  if (btnOpenForgot && modalForgot) {
    btnOpenForgot.addEventListener("click", () => {
      modalForgot.classList.add("active");
    });
  }
  if (btnCloseForgot && modalForgot) btnCloseForgot.addEventListener("click", () => modalForgot.classList.remove("active"));
  if (btnCancelForgot && modalForgot) btnCancelForgot.addEventListener("click", () => modalForgot.classList.remove("active"));

  if (formForgot) {
    formForgot.addEventListener("submit", async (e) => {
      e.preventDefault();
      const idenInput = document.getElementById("forgot-student-id") || document.getElementById("forgot-identifier");
      const verifyInput = document.getElementById("forgot-verify-code") || document.getElementById("forgot-phone");
      const newPassInput = document.getElementById("forgot-new-pass") || document.getElementById("forgot-new-password");
      const confPassInput = document.getElementById("forgot-conf-pass") || document.getElementById("forgot-confirm-password");

      const iden = idenInput ? idenInput.value.trim() : "";
      const verify = verifyInput ? verifyInput.value.trim() : "";
      const newPass = newPassInput ? newPassInput.value : "";
      const confPass = confPassInput ? confPassInput.value : "";

      if (!iden || !verify || !newPass) {
        alert("⚠️ कृपया सभी आवश्यक फ़ील्ड भरें।");
        return;
      }
      if (newPass.length < 4) {
        alert("⚠️ नया पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।");
        return;
      }
      if (confPass && newPass !== confPass) {
        alert("⚠️ नया पासवर्ड और कन्फर्म पासवर्ड एक समान होने चाहिए।");
        return;
      }

      const res = await StudentAccountService.resetForgottenPassword(iden, verify, newPass);
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }

      alert("✅ पासवर्ड सफलतापूर्वक रीसेट हो गया है! अब आप नए पासवर्ड से लॉगिन कर सकते हैं।");
      modalForgot.classList.remove("active");
      formForgot.reset();
      switchToLogin();
    });
  }

  // 6. Welcome Session Buttons
  const btnStartLoggedInExam = document.getElementById("btn-start-logged-in-exam") || document.getElementById("btn-welcome-quick-start");
  if (btnStartLoggedInExam) {
    btnStartLoggedInExam.addEventListener("click", () => {
      if (state.currentStudent) {
        const cand = state.currentStudent;
        startExamForCandidate(cand.name, cand.roll || cand.studentId, cand.phone, cand.category || "General");
      }
    });
  }

  const btnWelDash = document.getElementById("btn-welcome-goto-dashboard");
  if (btnWelDash) {
    btnWelDash.addEventListener("click", () => {
      if (state.currentStudent) {
        showScreen("studentDashboard");
        renderStudentDashboard(state.currentStudent);
      }
    });
  }

  const btnWelLogout = document.getElementById("btn-welcome-logout") || document.getElementById("btn-welcome-switch-account");
  if (btnWelLogout) {
    btnWelLogout.addEventListener("click", () => {
      if (window.StudentAccountService) StudentAccountService.logoutStudent();
      state.currentStudent = null;
      updateWelcomeActiveSession(null);
    });
  }

  // 7. Result Screen Go To Dashboard Button
  const btnResDash = document.getElementById("btn-result-goto-dashboard");
  if (btnResDash) {
    btnResDash.addEventListener("click", () => {
      const student = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
      if (student) {
        showScreen("studentDashboard");
        renderStudentDashboard(student);
      } else {
        showScreen("welcome");
      }
    });
  }

  // 8. Student Dashboard Controls
  const btnDashHome = document.getElementById("btn-dash-goto-home");
  if (btnDashHome) {
    btnDashHome.addEventListener("click", () => showScreen("welcome"));
  }

  const btnDashLogout = document.getElementById("btn-dash-logout");
  if (btnDashLogout) {
    btnDashLogout.addEventListener("click", () => {
      if (window.StudentAccountService) StudentAccountService.logoutStudent();
      state.currentStudent = null;
      updateWelcomeActiveSession(null);
      showScreen("welcome");
    });
  }

  const btnDashStart = document.getElementById("btn-dash-start-exam");
  if (btnDashStart) {
    btnDashStart.addEventListener("click", () => launchActiveMockFromDashboard());
  }

  // Dashboard Tab Switching
  const stuTabs = [
    { btn: document.getElementById("stu-tab-recent"), pane: document.getElementById("tab-recent-content") || document.getElementById("stu-pane-recent") },
    { btn: document.getElementById("stu-tab-history"), pane: document.getElementById("tab-history-content") || document.getElementById("stu-pane-history") },
    { btn: document.getElementById("stu-tab-profile"), pane: document.getElementById("tab-profile-content") || document.getElementById("stu-pane-profile") }
  ];

  stuTabs.forEach(({ btn, pane }) => {
    if (btn && pane) {
      btn.addEventListener("click", () => {
        stuTabs.forEach(t => {
          if (t.btn) t.btn.classList.remove("active");
          if (t.pane) t.pane.style.display = "none";
        });
        btn.classList.add("active");
        pane.style.display = "block";

        const curStu = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
        if (curStu) {
          if (btn.id === "stu-tab-recent" && typeof renderStudentRecentMocks === "function") {
            renderStudentRecentMocks(curStu.studentId);
          } else if (btn.id === "stu-tab-history" && typeof renderStudentHistoryTable === "function") {
            renderStudentHistoryTable(curStu.studentId, 1);
          }
        }
      });
    }
  });

  // Manual Refresh Button for Mock History
  const btnRefreshHist = document.getElementById("btn-refresh-history");
  if (btnRefreshHist) {
    btnRefreshHist.addEventListener("click", () => {
      const student = state.currentStudent || (window.StudentAccountService ? StudentAccountService.getActiveSession() : null);
      if (student && typeof renderStudentDashboard === "function") {
        const span = btnRefreshHist.querySelector("span");
        if (span) span.textContent = "⏳ Refreshing...";
        renderStudentDashboard(student).then(() => {
          setTimeout(() => {
            if (span) span.textContent = "🔄 Refresh History / रिफ्रेश करें";
          }, 350);
        });
      }
    });
  }

  const btnViewAllMocks = document.getElementById("btn-dash-view-all-mocks");
  if (btnViewAllMocks) {
    btnViewAllMocks.addEventListener("click", () => {
      const histTab = document.getElementById("stu-tab-history");
      if (histTab) histTab.click();
    });
  }

  // Dashboard History Search & Filter
  const histSearch = document.getElementById("stu-history-search") || document.getElementById("dash-history-search");
  if (histSearch) {
    histSearch.addEventListener("input", () => {
      if (state.currentStudent) renderStudentHistoryTable(state.currentStudent.studentId, 1);
    });
  }
  const histFilter = document.getElementById("stu-history-filter-exam") || document.getElementById("dash-history-filter-exam");
  if (histFilter) {
    histFilter.addEventListener("change", () => {
      if (state.currentStudent) renderStudentHistoryTable(state.currentStudent.studentId, 1);
    });
  }

  const prevHistBtn = document.getElementById("dash-hist-prev");
  if (prevHistBtn) {
    prevHistBtn.addEventListener("click", () => {
      if (state.currentStudent && window._stuHistoryCurrentPage > 1) {
        renderStudentHistoryTable(state.currentStudent.studentId, window._stuHistoryCurrentPage - 1);
      }
    });
  }
  const nextHistBtn = document.getElementById("dash-hist-next");
  if (nextHistBtn) {
    nextHistBtn.addEventListener("click", () => {
      if (state.currentStudent) {
        renderStudentHistoryTable(state.currentStudent.studentId, window._stuHistoryCurrentPage + 1);
      }
    });
  }

  // Inline Profile Edit in Dashboard (Tab 3)
  const formInlineEdit = document.getElementById("form-inline-edit-profile");
  if (formInlineEdit) {
    formInlineEdit.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!state.currentStudent) return;
      const name = document.getElementById("profile-edit-name").value.trim();
      const phone = document.getElementById("profile-edit-phone").value.trim();
      const batch = document.getElementById("profile-edit-batch") ? document.getElementById("profile-edit-batch").value : "";
      const dob = document.getElementById("profile-edit-dob") ? document.getElementById("profile-edit-dob").value : "";
      const father = document.getElementById("profile-edit-father") ? document.getElementById("profile-edit-father").value.trim() : "";

      const res = await StudentAccountService.updateStudentProfile(state.currentStudent.studentId, {
        name,
        phone,
        category: batch,
        dob,
        fatherName: father
      });
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }
      state.currentStudent = res.student;
      alert("✅ प्रोफाइल सफलतापूर्वक अपडेट कर दी गई है।");
      renderStudentDashboard(res.student);
      updateWelcomeActiveSession(res.student);
    });
  }

  // Change Photo Modal
  const btnOpenChangePhoto = document.getElementById("btn-open-change-photo") || document.getElementById("btn-trigger-change-photo");
  const btnMiniChangePhoto = document.getElementById("btn-trigger-change-photo");
  const modalChangePhoto = document.getElementById("modal-change-student-photo");
  const inputChangePhoto = document.getElementById("modal-file-change-photo") || document.getElementById("input-change-photo");
  const btnBrowseNewPhoto = document.getElementById("btn-browse-change-photo") || document.getElementById("btn-browse-new-photo");
  const newPhotoPreviewImg = document.getElementById("modal-photo-preview-img") || document.getElementById("new-photo-preview-img");
  const photoSizeText = document.getElementById("modal-photo-size-text");
  const btnSaveNewPhoto = document.getElementById("btn-save-new-photo");
  const btnCloseChangePhoto = document.getElementById("btn-close-change-photo") || document.getElementById("btn-close-change-photo-modal");
  const btnCancelChangePhoto = document.getElementById("btn-cancel-change-photo");

  const openPhotoModal = () => {
    if (modalChangePhoto) {
      if (state.currentStudent && state.currentStudent.photoUrl && newPhotoPreviewImg) {
        newPhotoPreviewImg.src = state.currentStudent.photoUrl;
      }
      modalChangePhoto.classList.add("active");
    }
  };
  if (btnOpenChangePhoto) btnOpenChangePhoto.addEventListener("click", openPhotoModal);
  if (btnMiniChangePhoto) btnMiniChangePhoto.addEventListener("click", openPhotoModal);
  if (btnCloseChangePhoto && modalChangePhoto) btnCloseChangePhoto.addEventListener("click", () => modalChangePhoto.classList.remove("active"));
  if (btnCancelChangePhoto && modalChangePhoto) btnCancelChangePhoto.addEventListener("click", () => modalChangePhoto.classList.remove("active"));

  if (btnBrowseNewPhoto && inputChangePhoto) {
    btnBrowseNewPhoto.addEventListener("click", () => inputChangePhoto.click());
  }
  if (inputChangePhoto) {
    inputChangePhoto.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const check = await validateImageFile(file);
      if (!check.valid) {
        alert("⚠️ " + check.message);
        inputChangePhoto.value = "";
        window._currentChangePhotoBase64 = null;
        return;
      }

      window._currentChangePhotoBase64 = check.base64;
      if (newPhotoPreviewImg) newPhotoPreviewImg.src = check.base64;
      if (photoSizeText) photoSizeText.textContent = `Selected: ${(file.size / (1024 * 1024)).toFixed(2)} MB (${file.name}) (Auto-optimized for passport size)`;
    });
  }
  if (btnSaveNewPhoto) {
    btnSaveNewPhoto.addEventListener("click", async () => {
      if (!window._currentChangePhotoBase64) {
        alert("⚠️ Please select a new photo first.");
        return;
      }
      if (!state.currentStudent) return;
      const res = await StudentAccountService.updateStudentPhoto(state.currentStudent.studentId, window._currentChangePhotoBase64);
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }
      state.currentStudent = res.student;
      alert("✅ प्रोफाइल फोटो सफलतापूर्वक बदल दी गई है।");
      modalChangePhoto.classList.remove("active");
      renderStudentDashboard(res.student);
      updateWelcomeActiveSession(res.student);
    });
  }

  // Change Password Modal
  const btnOpenChangePass = document.getElementById("btn-open-change-pass");
  const modalChangePass = document.getElementById("modal-change-student-pass");
  const formChangePass = document.getElementById("form-change-student-pass");
  const btnCloseChangePass = document.getElementById("btn-close-change-pass") || document.getElementById("btn-close-change-pass-modal");
  const btnCancelChangePass = document.getElementById("btn-cancel-change-pass");

  if (btnOpenChangePass && modalChangePass) {
    btnOpenChangePass.addEventListener("click", () => modalChangePass.classList.add("active"));
  }
  if (btnCloseChangePass && modalChangePass) btnCloseChangePass.addEventListener("click", () => modalChangePass.classList.remove("active"));
  if (btnCancelChangePass && modalChangePass) btnCancelChangePass.addEventListener("click", () => modalChangePass.classList.remove("active"));

  if (formChangePass) {
    formChangePass.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!state.currentStudent) return;
      const curPass = (document.getElementById("change-old-pass") || document.getElementById("input-current-pass")).value;
      const newPass = (document.getElementById("change-new-pass") || document.getElementById("input-new-pass")).value;
      const confPass = (document.getElementById("change-conf-pass") || document.getElementById("input-new-pass-confirm")).value;

      if (!curPass || !newPass || newPass.length < 4) {
        alert("⚠️ नया पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।");
        return;
      }
      if (newPass !== confPass) {
        alert("⚠️ नया पासवर्ड और कन्फर्म पासवर्ड एक समान होने चाहिए।");
        return;
      }

      const res = await StudentAccountService.changePassword(state.currentStudent.studentId, curPass, newPass);
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }

      alert("✅ पासवर्ड सफलतापूर्वक बदल दिया गया है!");
      modalChangePass.classList.remove("active");
      formChangePass.reset();
    });
  }

  // Admin Reset Password Modal
  const modalAdminReset = document.getElementById("modal-admin-student-reset-pass");
  const formAdminReset = document.getElementById("form-admin-student-reset-pass");
  const btnCloseAdminReset = document.getElementById("btn-close-admin-reset-pass");
  const btnCancelAdminReset = document.getElementById("btn-cancel-admin-reset-pass");

  if (btnCloseAdminReset && modalAdminReset) btnCloseAdminReset.addEventListener("click", () => modalAdminReset.classList.remove("active"));
  if (btnCancelAdminReset && modalAdminReset) btnCancelAdminReset.addEventListener("click", () => modalAdminReset.classList.remove("active"));

  if (formAdminReset) {
    formAdminReset.addEventListener("submit", async (e) => {
      e.preventDefault();
      const idInput = document.getElementById("admin-reset-student-id") || document.getElementById("admin-reset-stu-id");
      const passInput = document.getElementById("admin-reset-new-pass");
      const stuId = idInput ? idInput.value : "";
      const newPass = passInput ? passInput.value : "";

      if (!stuId || !newPass || newPass.length < 4) {
        alert("⚠️ Please enter a new password of at least 4 characters.");
        return;
      }

      const res = await StudentAccountService.adminResetPassword(stuId, newPass);
      if (res.status === "error") {
        alert("⚠️ " + res.message);
        return;
      }
      alert(`✅ Password successfully reset for ${stuId}!`);
      modalAdminReset.classList.remove("active");
      formAdminReset.reset();
      renderAdminStudentsPanel();
    });
  }

  // Admin Students Panel search & filter
  const adminStuSearch = document.getElementById("admin-student-search-input") || document.getElementById("admin-student-search");
  if (adminStuSearch) adminStuSearch.addEventListener("input", renderAdminStudentsPanel);
  const adminStuFilter = document.getElementById("admin-student-filter-status");
  if (adminStuFilter) adminStuFilter.addEventListener("change", renderAdminStudentsPanel);
  const adminStuRefresh = document.getElementById("btn-admin-refresh-students");
  if (adminStuRefresh) adminStuRefresh.addEventListener("click", renderAdminStudentsPanel);
}
window.initStudentAccountIntegration = initStudentAccountIntegration;

