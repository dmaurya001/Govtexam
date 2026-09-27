/**
 * src/utils/slotEngine.js
 * IST-based daily slot engine — mirrors daily_slot_service.js (frontend)
 * The BACKEND is the source of truth for all slot/cycleDate calculations.
 */

"use strict";

const SLOT_DEFINITIONS = [
  { slot: 1, startHour: 4,  endHour: 6,  label: "04:00 AM" },
  { slot: 2, startHour: 6,  endHour: 8,  label: "06:00 AM" },
  { slot: 3, startHour: 8,  endHour: 10, label: "08:00 AM" },
  { slot: 4, startHour: 10, endHour: 12, label: "10:00 AM" },
  { slot: 5, startHour: 12, endHour: 14, label: "12:00 PM" },
  { slot: 6, startHour: 14, endHour: 16, label: "02:00 PM" },
  { slot: 7, startHour: 16, endHour: 18, label: "04:00 PM" },
  { slot: 8, startHour: 18, endHour: 20, label: "06:00 PM" },
  { slot: 9, startHour: 20, endHour: 4,  label: "08:00 PM" } // crosses midnight
];

/** Get current IST components via Intl. Always Asia/Kolkata, never server locale. */
function getISTComponents(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map(p => [p.type, p.value]));
  return {
    year:   parseInt(parts.year),
    month:  parseInt(parts.month),
    day:    parseInt(parts.day),
    hour:   parseInt(parts.hour) % 24,
    minute: parseInt(parts.minute),
    second: parseInt(parts.second)
  };
}

/**
 * cycleDate = YYYY-MM-DD of the 04:00 AM IST that started the current cycle.
 * If IST hour < 4 => cycle belongs to PREVIOUS calendar day.
 */
function getCycleDate(date = new Date()) {
  const c = getISTComponents(date);
  const d = new Date(Date.UTC(c.year, c.month - 1, c.day));
  if (c.hour < 4) d.setUTCDate(d.getUTCDate() - 1);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Returns 1–9 for the current slot. Slot 9 = 20:00–03:59 IST */
function getCurrentSlot(date = new Date()) {
  const { hour } = getISTComponents(date);
  if (hour >= 20 || hour < 4) return 9;
  for (const def of SLOT_DEFINITIONS) {
    if (def.slot === 9) continue;
    if (hour >= def.startHour && hour < def.endHour) return def.slot;
  }
  return 9;
}

/** Full slot context */
function getCurrentSlotContext(date = new Date()) {
  const cycleDate  = getCycleDate(date);
  const slotNumber = getCurrentSlot(date);
  const slotDef    = SLOT_DEFINITIONS.find(d => d.slot === slotNumber);
  return { cycleDate, slotNumber, slotDef };
}

/** Unique idempotency key for a paper */
function makePaperKey(cycleDate, slotNumber, examId, stageId = "") {
  return `${cycleDate}::slot${slotNumber}::${examId}::${stageId}`;
}

/** All 9 slot definitions */
function getAllSlotDefs() { return SLOT_DEFINITIONS; }

/** Returns the slot# for a given IST hour (test helper) */
function slotForHour(h) {
  if (h >= 20 || h < 4) return 9;
  for (const def of SLOT_DEFINITIONS) {
    if (def.slot === 9) continue;
    if (h >= def.startHour && h < def.endHour) return def.slot;
  }
  return 9;
}

/** Run boundary tests, returns array of {h, expected, got, pass} */
function runBoundaryTests() {
  const cases = [
    [3,9],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3],
    [10,4],[11,4],[12,5],[13,5],[14,6],[15,6],
    [16,7],[17,7],[18,8],[19,8],[20,9],[23,9],
    [0,9],[1,9],[2,9],[3,9]
  ];
  return cases.map(([h, expected]) => ({ h, expected, got: slotForHour(h), pass: slotForHour(h) === expected }));
}

module.exports = {
  SLOT_DEFINITIONS, getISTComponents, getCycleDate,
  getCurrentSlot, getCurrentSlotContext, makePaperKey,
  getAllSlotDefs, slotForHour, runBoundaryTests
};
