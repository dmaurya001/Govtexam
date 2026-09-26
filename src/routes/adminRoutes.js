/**
 * src/routes/adminRoutes.js
 * Admin API routes for managing daily mock slots, manual generation, logs, and controls.
 */

"use strict";

const express = require("express");
const router = express.Router();
const { getCycleDate, getCurrentSlot, makePaperKey } = require("../utils/slotEngine");
const { getExamById, getAllExams } = require("../config/examRegistry");
const { getSchedulerStatus, triggerSlotGeneration } = require("../services/scheduler");
const { generatePaper, publishPaper } = require("../services/paperGenerationService");
const paperStore = require("../services/paperStore");

// Simple authentication middleware using ADMIN_SECRET
function adminAuth(req, res, next) {
  const secret = process.env.ADMIN_SECRET;
  // If not configured, allow local dev
  if (!secret) return next();

  const authHeader = req.headers["authorization"] || "";
  const headerSecret = req.headers["x-admin-secret"];
  const querySecret = req.query.admin_secret;

  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const provided = token || headerSecret || querySecret;

  if (provided === secret) {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized: Invalid admin secret" });
}

router.use(adminAuth);

/**
 * GET /api/admin/status
 * General server and scheduler status
 */
router.get("/status", (req, res) => {
  const schedStatus = getSchedulerStatus();
  res.json({
    status: "ok",
    scheduler: schedStatus,
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /api/admin/slots?cycleDate=2026-09-26&examId=neet
 * Returns summary of all 9 slots for an exam
 */
router.get("/slots", (req, res) => {
  const cycleDate = req.query.cycleDate || getCycleDate();
  const examId = req.query.examId || "neet";
  const slots = paperStore.getSlotsSummary(cycleDate, examId);
  res.json({
    cycleDate,
    examId,
    slots
  });
});

/**
 * GET /api/admin/logs
 * Returns latest generation logs
 */
router.get("/logs", (req, res) => {
  const limit = parseInt(req.query.limit || "50", 10);
  const logs = paperStore.getGenerationLogs(limit);
  res.json({ logs });
});

/**
 * POST /api/admin/generate
 * Trigger generation for a specific exam and slot
 */
router.post("/generate", async (req, res) => {
  const { examId, slotNumber, cycleDate } = req.body;
  if (!examId || !slotNumber) {
    return res.status(400).json({ error: "Missing examId or slotNumber" });
  }

  const targetDate = cycleDate || getCycleDate();
  const examConfig = getExamById(examId);
  if (!examConfig) {
    return res.status(404).json({ error: `Exam pattern not found: ${examId}` });
  }

  try {
    const result = await generatePaper({ examConfig, cycleDate: targetDate, slotNumber: parseInt(slotNumber, 10) });
    if (result.success) {
      const paperKey = makePaperKey(targetDate, slotNumber, examId);
      publishPaper(paperKey);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/publish
 * Publish a ready paper
 */
router.post("/publish", (req, res) => {
  const { paperKey } = req.body;
  if (!paperKey) return res.status(400).json({ error: "Missing paperKey" });
  try {
    const published = publishPaper(paperKey);
    res.json({ success: true, paper: published });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * POST /api/admin/unpublish
 * Unpublish a paper (sets status to ready or draft)
 */
router.post("/unpublish", (req, res) => {
  const { paperKey } = req.body;
  if (!paperKey) return res.status(400).json({ error: "Missing paperKey" });
  try {
    const updated = paperStore.updatePaper(paperKey, { status: "ready" });
    res.json({ success: true, paper: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
