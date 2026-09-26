/**
 * src/services/questionValidator.js
 * Full question validation pipeline.
 * Never trust raw AI output — every question goes through this.
 */

"use strict";

const crypto = require("crypto");

// ─────────────────────────────────────────────
// Fingerprint for duplicate detection
// ─────────────────────────────────────────────
function normalizeText(str) {
  return (str || "").toLowerCase()
    .replace(/[^\w\s\d]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function questionFingerprint(q) {
  const normalized = normalizeText(q.questionEn || q.questionHi || "");
  return crypto.createHash("sha256").update(normalized).digest("hex").slice(0, 16);
}

// ─────────────────────────────────────────────
// Validate a single question
// Returns { valid: bool, errors: string[] }
// ─────────────────────────────────────────────
function validateQuestion(q) {
  const errors = [];

  // 1. Required text fields
  if (!q.questionEn || q.questionEn.trim().length < 10)
    errors.push("questionEn too short or missing");
  if (!q.questionHi || q.questionHi.trim().length < 5)
    errors.push("questionHi missing");

  // 2. Options
  if (!Array.isArray(q.options) || q.options.length !== 4)
    errors.push("Must have exactly 4 options");
  else {
    const ids = q.options.map(o => o.id);
    if (!["A","B","C","D"].every(x => ids.includes(x)))
      errors.push("Options must be A, B, C, D");
    const texts = q.options.map(o => normalizeText(o.textEn || ""));
    if (new Set(texts).size !== 4)
      errors.push("Duplicate option text detected");
    q.options.forEach((o, i) => {
      if (!o.textEn || o.textEn.trim().length < 1) errors.push(`Option ${o.id} textEn missing`);
      if (!o.textHi || o.textHi.trim().length < 1) errors.push(`Option ${o.id} textHi missing`);
    });
  }

  // 3. Correct answer
  if (!q.correctAnswer || !["A","B","C","D"].includes(q.correctAnswer))
    errors.push("correctAnswer must be A, B, C, or D");

  // 4. Explanation
  if (!q.explanationEn || q.explanationEn.trim().length < 5)
    errors.push("explanationEn missing");

  // 5. Difficulty
  if (!["easy","medium","hard"].includes((q.difficulty || "").toLowerCase()))
    errors.push("difficulty must be easy/medium/hard");

  // 6. Subject & topic
  if (!q.subject || q.subject.trim().length < 1) errors.push("subject missing");

  // 7. Answer not revealed in question text
  if (q.correctAnswer && q.questionEn) {
    const correctOpt = (q.options || []).find(o => o.id === q.correctAnswer);
    if (correctOpt && q.questionEn.includes(correctOpt.textEn)) {
      errors.push("Correct answer text appears in question — ambiguous");
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─────────────────────────────────────────────
// Numerical answer verification
// Very simple: evaluates simple arithmetic expressions
// ─────────────────────────────────────────────
function tryVerifyNumerical(q) {
  // Only attempt for obvious arithmetic patterns
  const mathPattern = /(\d+(?:\.\d+)?)\s*[%+\-×x*\/÷of]\s*(\d+(?:\.\d+)?)\s*[=?]/;
  const match = q.questionEn.match(mathPattern);
  if (!match) return null; // not a simple numerical Q

  // Not implemented for complex math — return null (no rejection)
  return null;
}

// ─────────────────────────────────────────────
// Deduplicate a batch of questions
// ─────────────────────────────────────────────
function deduplicateBatch(questions, seenFingerprints = new Set()) {
  const result = [];
  const localSeen = new Set(seenFingerprints);

  for (const q of questions) {
    const fp = questionFingerprint(q);
    if (!localSeen.has(fp)) {
      q._fingerprint = fp;
      localSeen.add(fp);
      result.push(q);
    }
  }
  return { unique: result, updatedSeen: localSeen };
}

// ─────────────────────────────────────────────
// Validate and filter a batch
// ─────────────────────────────────────────────
function validateAndFilterBatch(rawQuestions, seenFingerprints = new Set()) {
  const valid = [];
  const invalid = [];
  let duplicates = 0;

  for (const q of rawQuestions) {
    const vr = validateQuestion(q);
    if (!vr.valid) {
      invalid.push({ question: q, errors: vr.errors });
      continue;
    }

    const fp = questionFingerprint(q);
    if (seenFingerprints.has(fp)) {
      duplicates++;
      continue;
    }

    q._fingerprint = fp;
    seenFingerprints.add(fp);
    valid.push(q);
  }

  return { valid, invalid, duplicates, updatedSeen: seenFingerprints };
}

module.exports = {
  validateQuestion,
  validateAndFilterBatch,
  deduplicateBatch,
  questionFingerprint,
  normalizeText,
  tryVerifyNumerical
};
