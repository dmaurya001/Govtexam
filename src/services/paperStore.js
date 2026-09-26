/**
 * src/services/paperStore.js
 * Persistent storage for generated mock papers, logs, and question fingerprints.
 * Uses local file system (server/data) with in-memory caching.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.resolve(__dirname, "../../data");
const PAPERS_DIR = path.join(DATA_DIR, "papers");
const LOGS_FILE = path.join(DATA_DIR, "generation_logs.json");
const FINGERPRINTS_FILE = path.join(DATA_DIR, "used_fingerprints.json");

// Ensure data directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(PAPERS_DIR)) {
  fs.mkdirSync(PAPERS_DIR, { recursive: true });
}

// In-memory cache
const memoryPapers = new Map();
let memoryLogs = [];
let memoryFingerprints = new Set();

// Load initial data from disk
try {
  if (fs.existsSync(FINGERPRINTS_FILE)) {
    const raw = fs.readFileSync(FINGERPRINTS_FILE, "utf-8");
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      memoryFingerprints = new Set(arr);
    }
  }
} catch (err) {
  console.warn("[PaperStore] Warning: Could not load fingerprints:", err.message);
}

try {
  if (fs.existsSync(LOGS_FILE)) {
    const raw = fs.readFileSync(LOGS_FILE, "utf-8");
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      memoryLogs = arr;
    }
  }
} catch (err) {
  console.warn("[PaperStore] Warning: Could not load generation logs:", err.message);
}

// Helper to sanitize paper key for filenames
function getPaperFilePath(paperKey) {
  const safeKey = paperKey.replace(/[^a-zA-Z0-9_-]/g, "_");
  return path.join(PAPERS_DIR, `${safeKey}.json`);
}

function persistFingerprints() {
  try {
    fs.writeFileSync(FINGERPRINTS_FILE, JSON.stringify([...memoryFingerprints], null, 2), "utf-8");
  } catch (err) {
    console.error("[PaperStore] Error persisting fingerprints:", err.message);
  }
}

function persistLogs() {
  try {
    fs.writeFileSync(LOGS_FILE, JSON.stringify(memoryLogs.slice(0, 500), null, 2), "utf-8");
  } catch (err) {
    console.error("[PaperStore] Error persisting logs:", err.message);
  }
}

// API methods

function savePaper(paperKey, paper) {
  memoryPapers.set(paperKey, paper);
  try {
    fs.writeFileSync(getPaperFilePath(paperKey), JSON.stringify(paper, null, 2), "utf-8");
  } catch (err) {
    console.error(`[PaperStore] Failed to write paper file for ${paperKey}:`, err.message);
  }
}

function getPaper(paperKey) {
  if (memoryPapers.has(paperKey)) {
    return memoryPapers.get(paperKey);
  }
  const filePath = getPaperFilePath(paperKey);
  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      memoryPapers.set(paperKey, data);
      return data;
    } catch (err) {
      console.error(`[PaperStore] Failed to read paper file for ${paperKey}:`, err.message);
    }
  }
  return null;
}

function updatePaper(paperKey, updates) {
  let existing = getPaper(paperKey) || {};
  const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
  savePaper(paperKey, updated);
  return updated;
}

function getUsedFingerprints() {
  return [...memoryFingerprints];
}

function addUsedFingerprint(fp) {
  if (!fp) return;
  memoryFingerprints.add(fp);
  persistFingerprints();
}

function addUsedFingerprints(fps) {
  if (!Array.isArray(fps)) return;
  fps.forEach(fp => { if (fp) memoryFingerprints.add(fp); });
  persistFingerprints();
}

function setGenerationLog(paperKey, logData) {
  const existingIdx = memoryLogs.findIndex(l => l.paperKey === paperKey && l.generationId === logData.generationId);
  if (existingIdx >= 0) {
    memoryLogs[existingIdx] = { ...memoryLogs[existingIdx], ...logData, updatedAt: new Date().toISOString() };
  } else {
    memoryLogs.unshift({ ...logData, updatedAt: new Date().toISOString() });
  }
  persistLogs();
}

function getGenerationLogs(limit = 50) {
  return memoryLogs.slice(0, limit);
}

/** Get paper for active slot and cycle date */
function getActivePaper(cycleDate, slotNumber, examId) {
  const paperKey = `${cycleDate}_s${slotNumber}_${examId}`;
  const paper = getPaper(paperKey);
  if (paper && (paper.status === "published" || paper.status === "ready")) {
    return paper;
  }
  return null;
}

/** Get summary of all 9 slots for a given cycle date and exam */
function getSlotsSummary(cycleDate, examId) {
  const summaries = [];
  for (let slot = 1; slot <= 9; slot++) {
    const paperKey = `${cycleDate}_s${slot}_${examId}`;
    const p = getPaper(paperKey);
    summaries.push({
      slotNumber: slot,
      paperKey,
      status: p ? p.status : "pending",
      questionCount: p && p.questions ? p.questions.length : 0,
      totalMarks: p ? p.totalMarks : 0,
      durationMinutes: p ? p.durationMinutes : 0,
      generatedAt: p ? p.generatedAt : null,
      publishedAt: p ? p.publishedAt : null,
      errorMessage: p ? p.errorMessage : null
    });
  }
  return summaries;
}

module.exports = {
  savePaper,
  getPaper,
  updatePaper,
  getUsedFingerprints,
  addUsedFingerprint,
  addUsedFingerprints,
  setGenerationLog,
  getGenerationLogs,
  getActivePaper,
  getSlotsSummary
};
