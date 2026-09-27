/**
 * server/src/services/studentStore.js
 * Persistent Server-Side Student Account & Mock History Storage
 * Uses JSON persistence in server/data/ with in-memory caching.
 */

"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA_DIR = path.resolve(__dirname, "../../data");
const STUDENTS_FILE = path.join(DATA_DIR, "students.json");
const STUDENT_MOCKS_FILE = path.join(DATA_DIR, "student_mocks.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let studentsMap = new Map();
let studentMocksMap = new Map();

// Load initial students from disk
try {
  if (fs.existsSync(STUDENTS_FILE)) {
    const raw = fs.readFileSync(STUDENTS_FILE, "utf-8");
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      arr.forEach(s => { if (s.studentId) studentsMap.set(s.studentId, s); });
    }
  }
} catch (e) {
  console.warn("[StudentStore] Warning reading students.json:", e.message);
}

// Load initial student mocks from disk
try {
  if (fs.existsSync(STUDENT_MOCKS_FILE)) {
    const raw = fs.readFileSync(STUDENT_MOCKS_FILE, "utf-8");
    const obj = JSON.parse(raw);
    if (obj && typeof obj === "object") {
      Object.entries(obj).forEach(([sId, mocks]) => {
        studentMocksMap.set(sId, Array.isArray(mocks) ? mocks : []);
      });
    }
  }
} catch (e) {
  console.warn("[StudentStore] Warning reading student_mocks.json:", e.message);
}

function persistStudents() {
  try {
    const list = [...studentsMap.values()];
    fs.writeFileSync(STUDENTS_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (e) {
    console.error("[StudentStore] Failed to write students file:", e.message);
  }
}

function persistStudentMocks() {
  try {
    const obj = {};
    for (const [k, v] of studentMocksMap.entries()) {
      obj[k] = v;
    }
    fs.writeFileSync(STUDENT_MOCKS_FILE, JSON.stringify(obj, null, 2), "utf-8");
  } catch (e) {
    console.error("[StudentStore] Failed to write student mocks file:", e.message);
  }
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha256").toString("hex");
}

function generateNextStudentId() {
  let maxNum = 0;
  for (const s of studentsMap.values()) {
    if (s.studentId && s.studentId.startsWith("GMH2026")) {
      const numPart = parseInt(s.studentId.replace("GMH2026", ""), 10);
      if (!isNaN(numPart) && numPart > maxNum) maxNum = numPart;
    }
  }
  const next = maxNum + 1;
  return `GMH2026${String(next).padStart(4, "0")}`;
}

function findStudent(identifier) {
  if (!identifier) return null;
  const clean = identifier.trim().toLowerCase();
  for (const s of studentsMap.values()) {
    if ((s.studentId && s.studentId.toLowerCase() === clean) ||
        (s.phone && s.phone === clean) ||
        (s.roll && s.roll.toLowerCase() === clean)) {
      return s;
    }
  }
  return null;
}

function getSafeStudent(s) {
  if (!s) return null;
  const safe = { ...s };
  delete safe.passwordHash;
  delete safe.passwordSalt;
  return safe;
}

function createStudent(data) {
  const cleanPhone = (data.phone || "").trim().replace(/\D/g, "");
  if (findStudent(cleanPhone)) {
    throw new Error(`An account already exists with Mobile Number ${cleanPhone}. Please login instead.`);
  }

  const studentId = generateNextStudentId();
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = hashPassword(data.password, salt);

  const student = {
    studentId,
    name: data.name.trim(),
    phone: cleanPhone,
    roll: data.roll ? data.roll.trim() : studentId,
    batch: data.batch || "General / Unreserved",
    dob: data.dob || "",
    fatherName: data.fatherName || "",
    photoUrl: data.photoUrl || "",
    passwordHash,
    passwordSalt: salt,
    status: "active",
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  studentsMap.set(studentId, student);
  persistStudents();
  return getSafeStudent(student);
}

function authenticateStudent(identifier, password) {
  const student = findStudent(identifier);
  if (!student) {
    throw new Error("Invalid Student ID or password.");
  }
  if (student.status === "suspended") {
    throw new Error("Your account is currently suspended. Please contact the administrator.");
  }

  const hash = hashPassword(password, student.passwordSalt);
  if (hash !== student.passwordHash) {
    throw new Error("Invalid Student ID or password.");
  }

  student.lastLoginAt = new Date().toISOString();
  persistStudents();
  return getSafeStudent(student);
}

function recordMock(studentId, mockRecord) {
  if (!studentsMap.has(studentId)) {
    throw new Error("Student not found.");
  }
  let list = studentMocksMap.get(studentId) || [];
  const existingIdx = list.findIndex(m => m.id === mockRecord.id);
  if (existingIdx >= 0) {
    list[existingIdx] = mockRecord;
  } else {
    list.unshift(mockRecord);
  }
  studentMocksMap.set(studentId, list);
  persistStudentMocks();
  return mockRecord;
}

function getMocks(studentId) {
  return studentMocksMap.get(studentId) || [];
}

function getAllStudentsList() {
  return [...studentsMap.values()].map(s => getSafeStudent(s));
}

function setStudentStatus(studentId, status) {
  const student = studentsMap.get(studentId);
  if (!student) throw new Error("Student not found");
  student.status = status;
  student.updatedAt = new Date().toISOString();
  persistStudents();
  return getSafeStudent(student);
}

function adminResetPassword(studentId, newPassword) {
  const student = studentsMap.get(studentId);
  if (!student) throw new Error("Student not found");
  const salt = crypto.randomBytes(16).toString("hex");
  student.passwordSalt = salt;
  student.passwordHash = hashPassword(newPassword, salt);
  student.updatedAt = new Date().toISOString();
  persistStudents();
  return true;
}

module.exports = {
  createStudent,
  authenticateStudent,
  findStudent,
  getSafeStudent,
  recordMock,
  getMocks,
  getAllStudentsList,
  setStudentStatus,
  adminResetPassword
};
