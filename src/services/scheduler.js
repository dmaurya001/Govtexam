/**
 * src/services/scheduler.js
 * Idempotent IST-based Scheduler for daily mock paper generation and publishing.
 * 9 Slots daily starting at 04:00 AM IST. Pre-generates 30m prior and publishes at slot boundary.
 */

"use strict";

const cron = require("node-cron");
const { getISTComponents, getCycleDate, getCurrentSlot, getNextSlotContext, makePaperKey, SLOT_DEFINITIONS } = require("../utils/slotEngine");
const { EXAM_REGISTRY, getAllExams } = require("../config/examRegistry");
const { generatePaper, publishPaper } = require("./paperGenerationService");
const paperStore = require("./paperStore");

let isRunning = false;
let cronTasks = [];
let lastExecution = null;

/**
 * Ensure active papers are ready for all exams in current slot.
 * If paper doesn't exist, generate it now.
 */
async function ensureCurrentSlotPapers() {
  const cycleDate = getCycleDate();
  const currentSlot = getCurrentSlot();
  const exams = Object.values(EXAM_REGISTRY);

  console.log(`[Scheduler] Checking current slot (${currentSlot}) papers for ${cycleDate}...`);

  for (const exam of exams) {
    const paperKey = makePaperKey(cycleDate, currentSlot, exam.examId, exam.stageId || "");
    const existing = paperStore.getPaper(paperKey);

    if (!existing || existing.status === "failed") {
      console.log(`[Scheduler] Paper missing for ${paperKey}. Generating now...`);
      try {
        const res = await generatePaper({ examConfig: exam, cycleDate, slotNumber: currentSlot });
        if (res.success) {
          publishPaper(paperKey);
          console.log(`[Scheduler] Generated & published: ${paperKey}`);
        }
      } catch (err) {
        console.error(`[Scheduler] Error generating ${paperKey}:`, err.message);
      }
    } else if (existing.status === "ready") {
      publishPaper(paperKey);
      console.log(`[Scheduler] Published ready paper: ${paperKey}`);
    } else {
      console.log(`[Scheduler] Paper already active: ${paperKey} (${existing.status})`);
    }
  }
}

/**
 * Pre-generate papers for upcoming slot (30 mins before slot start).
 */
async function pregenerateUpcomingSlotPapers() {
  const nextCtx = getNextSlotContext();
  const cycleDate = nextCtx.cycleDate;
  const nextSlot = nextCtx.nextSlotNumber;
  const exams = Object.values(EXAM_REGISTRY);

  console.log(`[Scheduler] Pre-generating for upcoming slot ${nextSlot} (${cycleDate})...`);

  for (const exam of exams) {
    const paperKey = makePaperKey(cycleDate, nextSlot, exam.examId, exam.stageId || "");
    const existing = paperStore.getPaper(paperKey);

    if (!existing || existing.status === "failed") {
      console.log(`[Scheduler] Pre-generating: ${paperKey}`);
      try {
        await generatePaper({ examConfig: exam, cycleDate, slotNumber: nextSlot });
      } catch (err) {
        console.error(`[Scheduler] Pre-generation failed for ${paperKey}:`, err.message);
      }
    } else {
      console.log(`[Scheduler] Upcoming paper already exists: ${paperKey}`);
    }
  }
}

/**
 * Publish papers for the slot that is starting right now.
 */
async function publishCurrentSlotPapers() {
  const cycleDate = getCycleDate();
  const slotNumber = getCurrentSlot();
  const exams = Object.values(EXAM_REGISTRY);

  console.log(`[Scheduler] Slot ${slotNumber} started. Publishing papers for ${cycleDate}...`);

  for (const exam of exams) {
    const paperKey = makePaperKey(cycleDate, slotNumber, exam.examId, exam.stageId || "");
    let paper = paperStore.getPaper(paperKey);

    if (!paper || paper.status === "failed") {
      console.log(`[Scheduler] Missing paper at publish time for ${paperKey}. Emergency generating...`);
      try {
        const res = await generatePaper({ examConfig: exam, cycleDate, slotNumber });
        if (res.success) {
          publishPaper(paperKey);
        }
      } catch (err) {
        console.error(`[Scheduler] Emergency generation failed for ${paperKey}:`, err.message);
      }
    } else if (paper.status === "ready") {
      publishPaper(paperKey);
      console.log(`[Scheduler] Published: ${paperKey}`);
    }
  }
}

/**
 * Start the node-cron scheduler.
 * Slot boundaries: 04:00, 06:00, 08:00, 10:00, 12:00, 14:00, 16:00, 18:00, 20:00 IST.
 * Pre-gen boundaries: 03:30, 05:30, 07:30, 09:30, 11:30, 13:30, 15:30, 17:30, 19:30 IST.
 */
function startScheduler() {
  if (isRunning) {
    console.log("[Scheduler] Already running.");
    return;
  }
  isRunning = true;
  console.log("[Scheduler] Starting IST mock scheduler...");

  // Initial check on boot
  ensureCurrentSlotPapers().catch(e => console.error("[Scheduler] Initial check error:", e));

  // Check every minute to handle exact IST schedule regardless of host timezone
  const mainTask = cron.schedule("* * * * *", async () => {
    try {
      const ist = getISTComponents();
      lastExecution = new Date().toISOString();

      // Check slot boundary (minute === 0 && even hour between 4 and 20)
      const isSlotBoundaryHour = (ist.hour >= 4 && ist.hour <= 20 && ist.hour % 2 === 0);
      if (ist.minute === 0 && isSlotBoundaryHour) {
        console.log(`[Scheduler] Hit slot boundary at ${ist.hour}:00 IST`);
        await publishCurrentSlotPapers();
      }

      // Check pre-gen boundary (minute === 30 && odd hour between 3 and 19)
      const isPreGenHour = (ist.hour >= 3 && ist.hour <= 19 && ist.hour % 2 !== 0);
      if (ist.minute === 30 && isPreGenHour) {
        console.log(`[Scheduler] Hit pre-gen window at ${ist.hour}:30 IST`);
        await pregenerateUpcomingSlotPapers();
      }
    } catch (err) {
      console.error("[Scheduler] Tick error:", err);
    }
  });

  cronTasks.push(mainTask);
  console.log("[Scheduler] Active and listening for IST slot boundaries.");
}

function stopScheduler() {
  cronTasks.forEach(task => task.stop());
  cronTasks = [];
  isRunning = false;
  console.log("[Scheduler] Stopped.");
}

/**
 * Manual trigger for Admin
 */
async function triggerSlotGeneration(cycleDate, slotNumber, examId, force = false) {
  const exam = EXAM_REGISTRY[examId];
  if (!exam) throw new Error(`Unknown examId: ${examId}`);

  const paperKey = makePaperKey(cycleDate, slotNumber, exam.examId, exam.stageId || "");
  const existing = paperStore.getPaper(paperKey);

  if (existing && existing.status === "published" && !force) {
    return { success: true, message: "Paper already exists and published", paper: existing };
  }

  const result = await generatePaper({ examConfig: exam, cycleDate, slotNumber });
  if (result.success) {
    publishPaper(paperKey);
  }
  return result;
}

function getSchedulerStatus() {
  const ist = getISTComponents();
  const currentSlot = getCurrentSlot();
  const nextCtx = getNextSlotContext();
  return {
    isRunning,
    lastExecution,
    currentIST: `${String(ist.hour).padStart(2, "0")}:${String(ist.minute).padStart(2, "0")}:${String(ist.second).padStart(2, "0")}`,
    currentCycleDate: getCycleDate(),
    currentSlot,
    nextSlot: nextCtx.nextSlotNumber,
    activeExamsCount: Object.keys(EXAM_REGISTRY).length
  };
}

module.exports = {
  startScheduler,
  stopScheduler,
  ensureCurrentSlotPapers,
  pregenerateUpcomingSlotPapers,
  publishCurrentSlotPapers,
  triggerSlotGeneration,
  getSchedulerStatus
};
