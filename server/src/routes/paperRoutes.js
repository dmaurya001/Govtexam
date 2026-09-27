/**
 * src/routes/paperRoutes.js
 * Public API routes for students to fetch active daily mock papers and exam configurations.
 */

"use strict";

const express = require("express");
const router = express.Router();
const { getCycleDate, getCurrentSlot, getCurrentSlotContext, getSecondsUntilNextSlot, makePaperKey } = require("../utils/slotEngine");
const { EXAM_REGISTRY, getAllExams, getExamById } = require("../config/examRegistry");
const paperStore = require("../services/paperStore");
const { generatePaper, publishPaper } = require("../services/paperGenerationService");

/**
 * GET /api/slots/current
 * Returns current slot info and countdown to next slot
 */
router.get("/slots/current", (req, res) => {
  const ctx = getCurrentSlotContext();
  const secondsLeft = getSecondsUntilNextSlot();
  res.json({
    cycleDate: ctx.cycleDate,
    currentSlot: ctx.slotNumber,
    slotDef: ctx.slotDef,
    secondsUntilNextSlot: secondsLeft,
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /api/exams
 * Returns all active registered exams with verified official patterns
 */
router.get("/exams", (req, res) => {
  const exams = getAllExams();
  res.json({ exams });
});

/**
 * GET /api/exams/:examId
 * Returns single exam pattern configuration
 */
router.get("/exams/:examId", (req, res) => {
  const exam = getExamById(req.params.examId);
  if (!exam) {
    return res.status(404).json({ error: "Exam not found" });
  }
  res.json({ exam });
});

/**
 * GET /api/papers/active?examId=neet
 * Returns the currently active published paper for this slot & cycle
 */
router.get("/papers/active", async (req, res) => {
  const examId = req.query.examId;
  if (!examId) {
    return res.status(400).json({ error: "Missing required query parameter: examId" });
  }

  const examConfig = getExamById(examId);
  if (!examConfig) {
    return res.status(404).json({ error: `Exam pattern not found for: ${examId}` });
  }

  const cycleDate = getCycleDate();
  const slotNumber = getCurrentSlot();
  const paperKey = makePaperKey(cycleDate, slotNumber, examConfig.examId, examConfig.stageId || "");

  let paper = paperStore.getPaper(paperKey);

  // If paper is ready but not published yet, publish it
  if (paper && paper.status === "ready") {
    paper = publishPaper(paperKey);
  }

  // If paper doesn't exist yet on-demand, generate it
  if (!paper || paper.status === "failed") {
    try {
      console.log(`[API] On-demand generating active paper for ${paperKey}...`);
      const genRes = await generatePaper({ examConfig, cycleDate, slotNumber });
      if (genRes.success) {
        paper = publishPaper(paperKey);
      }
    } catch (e) {
      console.error(`[API] Error on-demand generating ${paperKey}:`, e.message);
    }
  }

  if (!paper || (paper.status !== "published" && paper.status !== "ready")) {
    return res.status(404).json({
      error: "Active mock paper is being prepared. Please try again in a moment.",
      cycleDate,
      slotNumber,
      examId
    });
  }

  res.json({
    paperId: paper.paperId,
    cycleDate: paper.cycleDate,
    slotNumber: paper.slotNumber,
    examId: paper.examId,
    examName: paper.examName,
    totalQuestions: paper.totalQuestions,
    totalMarks: paper.totalMarks,
    durationMinutes: paper.durationMinutes,
    marksPerCorrect: paper.marksPerCorrect,
    negativeMarks: paper.negativeMarks,
    questions: paper.questions,
    publishedAt: paper.publishedAt,
    status: paper.status
  });
});

/**
 * GET /api/papers/slot/:slotNumber/:examId
 * Returns paper for a specific slot number
 */
router.get("/papers/slot/:slotNumber/:examId", (req, res) => {
  const slotNumber = parseInt(req.params.slotNumber, 10);
  const examId = req.params.examId;
  const cycleDate = req.query.cycleDate || getCycleDate();

  if (isNaN(slotNumber) || slotNumber < 1 || slotNumber > 9) {
    return res.status(400).json({ error: "Invalid slot number (must be 1 to 9)" });
  }

  const paperKey = makePaperKey(cycleDate, slotNumber, examId);
  const paper = paperStore.getPaper(paperKey);

  if (!paper) {
    return res.status(404).json({ error: "Paper not found for requested slot and date" });
  }

  res.json({ paper });
});

module.exports = router;
