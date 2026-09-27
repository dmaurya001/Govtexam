/**
 * GovtExamHub — Daily Mock Paper Generation System
 * ===================================================
 * All-in-one client-side daily slot engine, paper scheduler,
 * and idempotent paper store using localStorage.
 *
 * Architecture:
 *   slotService         — IST time + cycle date + slot resolution
 *   paperGenerationService — deterministic paper building (seed-based)
 *   paperStore          — localStorage read/write with idempotency
 *   dailyMockUI         — Welcome screen live widget
 *   adminSlotPanel      — Admin dashboard slot status panel
 *
 * Daily cycle (Asia/Kolkata IST):
 *   Slot 1:  04:00-05:59
 *   Slot 2:  06:00-07:59
 *   Slot 3:  08:00-09:59
 *   Slot 4:  10:00-11:59
 *   Slot 5:  12:00-13:59
 *   Slot 6:  14:00-15:59
 *   Slot 7:  16:00-17:59
 *   Slot 8:  18:00-19:59
 *   Slot 9:  20:00-03:59 (crosses midnight — NEVER closes)
 *
 * At 04:00 AM IST a new cycleDate begins.
 * The system NEVER shows "Mock Closed".
 */

/* ============================================================
   1. IST / SLOT ENGINE
   ============================================================ */

function getISTComponents() {
  var now = new Date();
  var fmt = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });
  var parts = {};
  fmt.formatToParts(now).forEach(function(p) { parts[p.type] = p.value; });
  return {
    year:   parseInt(parts.year,   10),
    month:  parseInt(parts.month,  10),
    day:    parseInt(parts.day,    10),
    hour:   parseInt(parts.hour,   10) % 24,
    minute: parseInt(parts.minute, 10),
    second: parseInt(parts.second, 10)
  };
}

/**
 * cycleDate: YYYY-MM-DD of the 04:00 AM that began the current mock cycle.
 * Rule: if IST hour < 4 => cycle belongs to PREVIOUS calendar day.
 */
function getCycleDate() {
  var c = getISTComponents();
  var d = new Date(Date.UTC(c.year, c.month - 1, c.day));
  if (c.hour < 4) { d.setUTCDate(d.getUTCDate() - 1); }
  var y = d.getUTCFullYear();
  var m = String(d.getUTCMonth() + 1).padStart(2, '0');
  var day = String(d.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

var SLOT_DEFINITIONS = [
  { slot: 1, startHour: 4,  endHour: 6,  label: '04:00 AM' },
  { slot: 2, startHour: 6,  endHour: 8,  label: '06:00 AM' },
  { slot: 3, startHour: 8,  endHour: 10, label: '08:00 AM' },
  { slot: 4, startHour: 10, endHour: 12, label: '10:00 AM' },
  { slot: 5, startHour: 12, endHour: 14, label: '12:00 PM' },
  { slot: 6, startHour: 14, endHour: 16, label: '02:00 PM' },
  { slot: 7, startHour: 16, endHour: 18, label: '04:00 PM' },
  { slot: 8, startHour: 18, endHour: 20, label: '06:00 PM' },
  { slot: 9, startHour: 20, endHour: 4,  label: '08:00 PM' }  // crosses midnight
];

function getCurrentSlot() {
  var h = getISTComponents().hour;
  if (h >= 20 || h < 4) return 9;
  for (var i = 0; i < SLOT_DEFINITIONS.length - 1; i++) {
    var def = SLOT_DEFINITIONS[i];
    if (h >= def.startHour && h < def.endHour) return def.slot;
  }
  return 9;
}

function getCurrentSlotContext() {
  var cycleDate  = getCycleDate();
  var slotNumber = getCurrentSlot();
  var slotDef    = SLOT_DEFINITIONS.find(function(d) { return d.slot === slotNumber; });
  return { cycleDate: cycleDate, slotNumber: slotNumber, slotDef: slotDef };
}

function getSecondsUntilNextSlot() {
  var c = getISTComponents();
  var totalSec = c.hour * 3600 + c.minute * 60 + c.second;
  var slot = getCurrentSlot();
  var nextSlotNum = (slot % 9) + 1;
  var nextDef = SLOT_DEFINITIONS.find(function(d) { return d.slot === nextSlotNum; });
  var nextStartSec = nextDef.startHour * 3600;

  if (slot === 9) {
    // Next slot 1 at 04:00 AM
    var s4 = 4 * 3600;
    var dayS = 24 * 3600;
    var rem = (s4 - totalSec + dayS) % dayS;
    return rem <= 0 ? rem + dayS : rem;
  }
  var remain = nextStartSec - totalSec;
  return remain <= 0 ? remain + 86400 : remain;
}

function formatCountdown(totalSeconds) {
  var s = Math.max(0, Math.floor(totalSeconds));
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  return [h, m, sec].map(function(v) { return String(v).padStart(2, '0'); }).join(':');
}

/* ============================================================
   2. DETERMINISTIC SEED ENGINE
   ============================================================ */

function generatePaperSeed(cycleDate, slotNumber, examId) {
  var raw = cycleDate + '|slot' + slotNumber + '|' + examId;
  var hash = 0;
  for (var i = 0; i < raw.length; i++) {
    hash = (hash << 5) - hash + raw.charCodeAt(i);
    hash = hash | 0;
  }
  return Math.abs(hash) + slotNumber * 37 + examId.length * 13;
}

function seededShuffle(array, seed) {
  var arr = array.slice();
  var s = seed;
  var lcg = function() {
    s = (s * 1664525 + 1013904223) | 0;
    return (s >>> 0) / 4294967295;
  };
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(lcg() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

/* ============================================================
   3. PAPER GENERATION SERVICE
   ============================================================ */

var PAPER_STORE_KEY_PREFIX = 'dms_paper_';

function buildPaperKey(cycleDate, slotNumber, examId) {
  return PAPER_STORE_KEY_PREFIX + cycleDate + '_s' + slotNumber + '_' + examId;
}

function generateOrGetPaper(examId, cycleDate, slotNumber) {
  var key = buildPaperKey(cycleDate, slotNumber, examId);

  // IDEMPOTENCY: return existing published paper
  try {
    var existing = localStorage.getItem(key);
    if (existing) {
      var paper = JSON.parse(existing);
      if (paper && (paper.status === 'published' || paper.status === 'ready')) {
        if ((paper.questions && paper.questions.length > 0) || (paper.questionIds && paper.questionIds.length > 0)) {
          return paper;
        }
      }
    }
  } catch(e) {}

  var slotDef = SLOT_DEFINITIONS.find(function(d) { return d.slot === slotNumber; }) || SLOT_DEFINITIONS[8];
  var seed = generatePaperSeed(cycleDate, slotNumber, examId);

  var baseQuestions = [];
  if (typeof getExamQuestions === 'function') {
    baseQuestions = getExamQuestions(examId, false);
  }
  if (!baseQuestions || baseQuestions.length === 0) {
    return { paperId: cycleDate+'_s'+slotNumber+'_'+examId, cycleDate: cycleDate, slotNumber: slotNumber,
             slotLabel: slotDef.label, examId: examId, status: 'failed',
             errorMessage: 'No questions available for: ' + examId,
             questionIds: [], generatedAt: new Date().toISOString() };
  }

  var cfg = {};
  if (typeof getExamConfig === 'function') { cfg = getExamConfig(examId) || {}; }

  var shuffled = seededShuffle(baseQuestions, seed);
  var requiredCount = cfg.totalQuestions || shuffled.length;
  var finalQuestions = shuffled.slice(0, requiredCount);

  // Pad if bank smaller than required (shows admin warning via status)
  if (finalQuestions.length < requiredCount && shuffled.length > 0) {
    var idx = 0;
    while (finalQuestions.length < requiredCount) {
      var clone = Object.assign({}, shuffled[idx % shuffled.length]);
      clone.id = finalQuestions.length + 1;
      finalQuestions.push(clone);
      idx++;
    }
  }

  var newPaper = {
    paperId:          cycleDate + '_s' + slotNumber + '_' + examId,
    cycleDate:        cycleDate,
    slotNumber:       slotNumber,
    slotLabel:        slotDef.label,
    slotStartHour:    slotDef.startHour,
    slotEndHour:      slotDef.endHour,
    examId:           examId,
    examName:         cfg.title || cfg.name || examId,
    examShortName:    cfg.shortName || examId,
    totalQuestions:   finalQuestions.length,
    totalMarks:       cfg.totalMarks || finalQuestions.length,
    durationMinutes:  cfg.durationMinutes || 120,
    marksPerCorrect:  cfg.marksPerCorrect !== undefined ? cfg.marksPerCorrect : 1,
    negativeMarks:    cfg.negativeMarking !== undefined ? cfg.negativeMarking : (cfg.negativeMarks || 0),
    sections:         cfg.sections || [],
    seed:             seed,
    questionIds:      finalQuestions.map(function(q) { return q.id; }),
    status:           'published',
    generatedAt:      new Date().toISOString(),
    publishedAt:      new Date().toISOString(),
    generationVersion: 'dms-v1.0'
  };

  try {
    localStorage.setItem(key, JSON.stringify(newPaper));
  } catch(e) {
    console.warn('[DMS] localStorage write failed:', e);
  }
  return newPaper;
}

/* ============================================================
   4. ACTIVE PAPER RESOLUTION & BACKEND SYNC
   ============================================================ */

var BACKEND_API_BASE = (window.GOVTEXAMHUB_API_URL || 'http://localhost:3001/api');

function syncActivePaperWithBackend(examId) {
  if (typeof fetch === 'undefined' || !examId) return;
  var ctx = getCurrentSlotContext();
  var key = buildPaperKey(ctx.cycleDate, ctx.slotNumber, examId);
  
  // If we already have a paper with AI questions, skip re-fetch
  try {
    var cached = localStorage.getItem(key);
    if (cached) {
      var p = JSON.parse(cached);
      if (p && p.questions && p.questions.length > 0) return;
    }
  } catch(e) {}

  fetch(BACKEND_API_BASE + '/papers/active?examId=' + encodeURIComponent(examId), {
    headers: { 'Accept': 'application/json' }
  })
  .then(function(res) {
    if (!res.ok) return null;
    return res.json();
  })
  .then(function(data) {
    if (data && data.questions && data.questions.length > 0) {
      console.log('[DMS] Synced AI paper from backend for ' + examId + ' (Slot ' + ctx.slotNumber + ')');
      data.status = 'published';
      localStorage.setItem(key, JSON.stringify(data));
      if (typeof renderDailyMockWidget === 'function') {
        renderDailyMockWidget(examId);
      }
    }
  })
  .catch(function() {
    // Offline or server not running - local fallback continues seamlessly
  });
}

function getActiveDailyPaper(examId) {
  var ctx = getCurrentSlotContext();
  // Trigger background sync with backend if online
  syncActivePaperWithBackend(examId);
  return generateOrGetPaper(examId, ctx.cycleDate, ctx.slotNumber);
}

function getQuestionsForPaper(paper) {
  if (!paper || (paper.status !== 'published' && paper.status !== 'ready')) return [];
  // Return pre-generated full question objects if present (from AI generation or upload)
  if (Array.isArray(paper.questions) && paper.questions.length > 0) {
    return paper.questions;
  }
  var allQuestions = [];
  if (typeof getExamQuestions === 'function') {
    allQuestions = getExamQuestions(paper.examId, false);
  }
  if (allQuestions.length === 0) return [];
  var shuffled = seededShuffle(allQuestions, paper.seed);
  var count = paper.totalQuestions || (paper.questionIds ? paper.questionIds.length : allQuestions.length);
  var result = shuffled.slice(0, count);
  if (result.length < count && shuffled.length > 0) {
    var i = 0;
    while (result.length < count) {
      var clone = Object.assign({}, shuffled[i % shuffled.length]);
      clone.id = result.length + 1;
      result.push(clone);
      i++;
    }
  }
  return result;
}

/* ============================================================
   5. PAPER HISTORY (ADMIN)
   ============================================================ */

function getPapersForCycleDate(cycleDate) {
  var papers = [];
  for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    if (k && k.startsWith(PAPER_STORE_KEY_PREFIX + cycleDate)) {
      try { var p = JSON.parse(localStorage.getItem(k)); if (p) papers.push(p); } catch(e) {}
    }
  }
  return papers.sort(function(a,b) { return a.slotNumber - b.slotNumber; });
}

function getTodaysSlotSchedule(examId) {
  var ctx = getCurrentSlotContext();
  var cycleDate = ctx.cycleDate;
  var currentSlot = ctx.slotNumber;
  return SLOT_DEFINITIONS.map(function(def) {
    var key = buildPaperKey(cycleDate, def.slot, examId);
    var status = 'pending', paper = null;
    try {
      var raw = localStorage.getItem(key);
      if (raw) { paper = JSON.parse(raw); status = paper.status || 'pending'; }
    } catch(e) {}
    var isPast    = def.slot < currentSlot;
    var isCurrent = def.slot === currentSlot;
    if (!paper) { status = isPast ? 'missed' : (isCurrent ? 'pending' : 'pending'); }
    return { slot: def.slot, label: def.label, startHour: def.startHour, endHour: def.endHour,
             cycleDate: cycleDate, examId: examId, status: status, paper: paper,
             isPast: isPast, isCurrent: isCurrent, isFuture: def.slot > currentSlot };
  });
}

/* ============================================================
   6. WELCOME SCREEN — DAILY MOCK WIDGET
   ============================================================ */

function renderDailyMockWidget(examId) {
  var widget = document.getElementById('daily-mock-info-widget');
  if (!widget) return;

  var ctx = getCurrentSlotContext();
  var paper = generateOrGetPaper(examId, ctx.cycleDate, ctx.slotNumber);
  var cfg = (typeof getExamConfig === 'function') ? (getExamConfig(examId) || {}) : {};
  var nextSec = getSecondsUntilNextSlot();
  var nextSlotNum = (ctx.slotNumber % 9) + 1;
  var nextSlotDef = SLOT_DEFINITIONS.find(function(d) { return d.slot === nextSlotNum; }) || SLOT_DEFINITIONS[0];
  var slotColors = ['#1557B0','#0B2D5C','#1E7B34','#8B4513','#7B1FA2','#C62828','#F57F17','#00695C','#37474F'];
  var badgeColor = slotColors[(ctx.slotNumber - 1) % slotColors.length];

  var qCount = paper.totalQuestions || cfg.totalQuestions || '—';
  var mCount = paper.totalMarks    || cfg.totalMarks    || '—';
  var dur    = paper.durationMinutes || cfg.durationMinutes || '—';
  var posM   = (paper.marksPerCorrect !== undefined ? paper.marksPerCorrect : cfg.marksPerCorrect) || 1;
  var negM   = (paper.negativeMarks !== undefined ? paper.negativeMarks : (cfg.negativeMarking || 0));
  var examName = paper.examName || cfg.title || cfg.name || examId;

  widget.innerHTML =
    '<div class="dms-widget">' +
      '<div class="dms-widget-header">' +
        '<span class="dms-widget-live-dot"></span>' +
        '<span class="dms-widget-title">TODAY\'S ACTIVE MOCK PAPER</span>' +
        '<span class="dms-widget-slot-badge" style="background:' + badgeColor + '">Slot ' + ctx.slotNumber + ' · ' + (ctx.slotDef ? ctx.slotDef.label : '') + ' IST</span>' +
      '</div>' +
      '<div class="dms-widget-body">' +
        '<div class="dms-widget-exam-name">' + examName + '</div>' +
        '<div class="dms-widget-chips">' +
          '<span class="dms-chip">📋 ' + qCount + ' Questions</span>' +
          '<span class="dms-chip">🏆 ' + mCount + ' Marks</span>' +
          '<span class="dms-chip">⏱ ' + dur + ' Mins</span>' +
          '<span class="dms-chip ' + (negM > 0 ? 'dms-chip-neg' : 'dms-chip-pos') + '">+' + Number(posM).toFixed(2) + ' / ' + (negM > 0 ? '-' + Number(negM).toFixed(2) : 'No Neg') + '</span>' +
        '</div>' +
        '<div class="dms-widget-cycle-info">' +
          'Daily Cycle: <strong>' + ctx.cycleDate + '</strong> &nbsp;|&nbsp; Paper: <code style="font-size:0.78rem">' + paper.paperId + '</code>' +
        '</div>' +
      '</div>' +
      '<div class="dms-widget-footer">' +
        '<span>⏭ Next paper: Slot ' + nextSlotNum + ' (' + nextSlotDef.label + ' IST)</span>' +
        '<span class="dms-countdown" id="dms-countdown-timer">' + formatCountdown(nextSec) + '</span>' +
      '</div>' +
    '</div>';

  startDailyMockCountdown();
}

var _dmsCountdownInterval = null;
function startDailyMockCountdown() {
  if (_dmsCountdownInterval) clearInterval(_dmsCountdownInterval);
  _dmsCountdownInterval = setInterval(function() {
    var el = document.getElementById('dms-countdown-timer');
    if (!el) { clearInterval(_dmsCountdownInterval); return; }
    el.textContent = formatCountdown(getSecondsUntilNextSlot());
  }, 1000);
}

/* ============================================================
   7. ADMIN SLOT STATUS PANEL
   ============================================================ */

function renderAdminDailyMockPanel(examId) {
  var container = document.getElementById('admin-daily-mock-panel');
  if (!container) return;

  var ctx = getCurrentSlotContext();
  var schedule = getTodaysSlotSchedule(examId || 'olevel');
  var nextSec = getSecondsUntilNextSlot();

  var statusIcon  = { published: '✅', pending: '⏳', generating: '🔄', missed: '⚠️', failed: '❌', ready: '🟡' };
  var statusColor = { published: '#1E7B34', pending: '#64748b', generating: '#1557B0', missed: '#C62828', failed: '#C62828', ready: '#F57F17' };

  var rowsHtml = schedule.map(function(s) {
    var icon  = statusIcon[s.status]  || '⏳';
    var color = statusColor[s.status] || '#64748b';
    var rowClass = s.isCurrent ? ' style="background:#eff6ff;font-weight:700;"' : '';
    var activeBadge = s.isCurrent ? '<span style="background:#1557B0;color:#fff;padding:2px 8px;border-radius:12px;font-size:0.72rem;margin-left:4px;">▶ ACTIVE</span>' : '';
    var actionHtml = s.status === 'published'
      ? '<button onclick="adminRegeneratePaper(\'' + examId + '\',\'' + s.cycleDate + '\',' + s.slot + ')" style="padding:3px 10px;border:1px solid #e2e8f0;border-radius:5px;background:#fff;cursor:pointer;font-size:0.78rem;">♻ Regen</button>'
      : '<button onclick="adminGeneratePaperNow(\'' + examId + '\',\'' + s.cycleDate + '\',' + s.slot + ')" style="padding:3px 10px;background:#1557B0;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:0.78rem;">⚡ Generate</button>';
    return '<tr' + rowClass + '>' +
      '<td><strong>Slot ' + s.slot + '</strong>' + activeBadge + '</td>' +
      '<td>' + s.label + ' IST</td>' +
      '<td style="color:' + color + ';font-weight:600;">' + icon + ' ' + s.status.charAt(0).toUpperCase() + s.status.slice(1) + '</td>' +
      '<td>' + (s.paper ? '<code style="font-size:0.72rem">' + s.paper.paperId + '</code>' : '—') + '</td>' +
      '<td>' + (s.paper ? s.paper.totalQuestions : '—') + '</td>' +
      '<td>' + actionHtml + '</td>' +
    '</tr>';
  }).join('');

  var examOptions = '';
  if (typeof EXAMS_REGISTRY !== 'undefined') {
    Object.keys(EXAMS_REGISTRY).forEach(function(id) {
      var e = EXAMS_REGISTRY[id];
      if (!e || !e.isAvailable) return;
      examOptions += '<option value="' + id + '"' + (id === examId ? ' selected' : '') + '>' + (e.icon || '') + ' ' + (e.name || id) + '</option>';
    });
  } else {
    examOptions = '<option value="' + examId + '">' + examId + '</option>';
  }

  container.innerHTML =
    '<div style="background:#fff;border-radius:12px;border:1px solid #e2e8f0;padding:20px;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px;">' +
        '<div>' +
          '<h3 style="font-size:1.15rem;color:#0B2D5C;font-weight:800;margin:0 0 4px;">🗓 Automated Daily Mock System</h3>' +
          '<span style="background:#1E7B34;color:#fff;padding:2px 10px;border-radius:12px;font-size:0.78rem;font-weight:700;">● ACTIVE — Never Closes</span>' +
        '</div>' +
        '<div style="font-size:0.85rem;color:#475569;text-align:right;">' +
          '<div>Cycle Date: <strong>' + ctx.cycleDate + '</strong></div>' +
          '<div>Current Slot: <strong>Slot ' + ctx.slotNumber + '</strong></div>' +
          '<div>Next paper in: <strong id="dms-admin-countdown">' + formatCountdown(nextSec) + '</strong></div>' +
        '</div>' +
      '</div>' +

      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;">' +
        '<label style="font-weight:700;color:#1e3a8a;white-space:nowrap;">Show slots for:</label>' +
        '<select id="dms-admin-exam-sel" onchange="renderAdminDailyMockPanel(this.value)" style="padding:6px 10px;border:1px solid #cbd5e1;border-radius:6px;font-weight:600;">' + examOptions + '</select>' +
        '<button onclick="adminGenerateAllSlotsNow(\'' + examId + '\')" style="padding:6px 14px;background:#1557B0;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">⚡ Generate All Pending</button>' +
      '</div>' +

      '<div style="overflow-x:auto;">' +
        '<table style="width:100%;border-collapse:collapse;font-size:0.87rem;">' +
          '<thead style="background:#f8fafc;">' +
            '<tr>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Slot</th>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Time (IST)</th>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Status</th>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Paper ID</th>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Questions</th>' +
              '<th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0;">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' + rowsHtml + '</tbody>' +
        '</table>' +
      '</div>' +

      '<div style="margin-top:16px;padding:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:0.8rem;color:#166534;">' +
        '✅ Daily 9-slot system active. Papers cycle every 2 hours from 04:00 AM IST. Slot 9 (08:00 PM) stays active until 03:59 AM. New cycle starts at 04:00 AM next day.' +
      '</div>' +

      '<div style="margin-top:10px;padding:10px;background:#fef9c3;border:1px solid #fde047;border-radius:6px;font-size:0.75rem;color:#713f12;">' +
        '⚠️ GovtExamHub is an independent practice platform and is not affiliated with or endorsed by any examination authority. Exam patterns may change — students should verify the latest official notification.' +
      '</div>' +
    '</div>';

  // Admin countdown
  if (window._dmsAdminCountdown) clearInterval(window._dmsAdminCountdown);
  window._dmsAdminCountdown = setInterval(function() {
    var el = document.getElementById('dms-admin-countdown');
    if (!el) { clearInterval(window._dmsAdminCountdown); return; }
    el.textContent = formatCountdown(getSecondsUntilNextSlot());
  }, 1000);
}

/* ============================================================
   8. ADMIN ACTIONS
   ============================================================ */

function adminGeneratePaperNow(examId, cycleDate, slotNumber) {
  var key = buildPaperKey(cycleDate, slotNumber, examId);
  localStorage.removeItem(key);
  var paper = generateOrGetPaper(examId, cycleDate, slotNumber);
  var msg = paper.status === 'published'
    ? '✅ Slot ' + slotNumber + ' paper generated!\nPaper ID: ' + paper.paperId + '\nQuestions: ' + paper.totalQuestions
    : '❌ Generation failed:\n' + paper.errorMessage;
  alert(msg);
  renderAdminDailyMockPanel(examId);
}

function adminRegeneratePaper(examId, cycleDate, slotNumber) {
  if (!confirm('⚠️ Slot ' + slotNumber + ' ka paper regenerate karna chahte hain? Existing paper replace ho jaayega.')) return;
  adminGeneratePaperNow(examId, cycleDate, slotNumber);
}

function adminGenerateAllSlotsNow(examId) {
  var ctx = getCurrentSlotContext();
  var generated = 0, failed = 0;
  SLOT_DEFINITIONS.forEach(function(def) {
    var key = buildPaperKey(ctx.cycleDate, def.slot, examId);
    var needsGen = true;
    try {
      var ex = JSON.parse(localStorage.getItem(key) || 'null');
      if (ex && ex.status === 'published' && ex.questionIds && ex.questionIds.length > 0) needsGen = false;
    } catch(e) {}
    if (needsGen) {
      localStorage.removeItem(key);
      var paper = generateOrGetPaper(examId, ctx.cycleDate, def.slot);
      if (paper.status === 'published') generated++; else failed++;
    }
  });
  alert('✅ Generation complete!\nGenerated: ' + generated + ' papers\nFailed: ' + failed + ' papers');
  renderAdminDailyMockPanel(examId);
}

/* ============================================================
   9. INTEGRATION HOOKS (called by app.js)
   ============================================================ */

function getDailyMockQuestionsForExam(examId) {
  var ctx = getCurrentSlotContext();
  var paper = generateOrGetPaper(examId, ctx.cycleDate, ctx.slotNumber);
  if (!paper || paper.status !== 'published' || paper.questionIds.length === 0) {
    return (typeof getExamQuestions === 'function') ? getExamQuestions(examId, true) : [];
  }
  return getQuestionsForPaper(paper);
}

function getActiveDailyPaperMeta(examId) {
  var ctx = getCurrentSlotContext();
  var paper = generateOrGetPaper(examId, ctx.cycleDate, ctx.slotNumber);
  return { cycleDate: ctx.cycleDate, slotNumber: ctx.slotNumber,
           slotLabel: ctx.slotDef ? ctx.slotDef.label : 'Active',
           paper: paper, nextSlotSec: getSecondsUntilNextSlot() };
}

/* ============================================================
   10. SLOT BOUNDARY TESTS (browser console: runSlotBoundaryTests())
   ============================================================ */

function testSlotForHour(istHour) {
  if (istHour >= 20 || istHour < 4) return 9;
  for (var i = 0; i < SLOT_DEFINITIONS.length - 1; i++) {
    var def = SLOT_DEFINITIONS[i];
    if (istHour >= def.startHour && istHour < def.endHour) return def.slot;
  }
  return 9;
}

function runSlotBoundaryTests() {
  var cases = [
    [3,9],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3],
    [10,4],[11,4],[12,5],[13,5],[14,6],[15,6],
    [16,7],[17,7],[18,8],[19,8],[20,9],[23,9],
    [0,9],[1,9],[2,9],[3,9]
  ];
  var allPass = true;
  console.group('[DMS] Slot Boundary Tests');
  cases.forEach(function(c) {
    var got = testSlotForHour(c[0]);
    var pass = got === c[1];
    if (!pass) allPass = false;
    console[pass ? 'log' : 'error']((pass ? '✅' : '❌') + ' Hour ' + c[0] + ':00 → Slot ' + got + ' (expected ' + c[1] + ')');
  });
  console.log(allPass ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
  console.groupEnd();
  return allPass;
}

/* ============================================================
   11. AUTO-INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    try {
      var ctx = getCurrentSlotContext();
      var defaultExam = (window.state && window.state.selectedExamId) ? window.state.selectedExamId : 'olevel';
      generateOrGetPaper(defaultExam, ctx.cycleDate, ctx.slotNumber);
      console.log('[DMS] ✅ Active paper ready: ' + ctx.cycleDate + ' / Slot ' + ctx.slotNumber + ' / ' + defaultExam);
      console.log('[DMS] 🕐 Next slot in: ' + formatCountdown(getSecondsUntilNextSlot()));
    } catch(e) {
      console.warn('[DMS] Background init failed:', e);
    }
  }, 600);
});

/* ============================================================
   12. EXPOSE GLOBALS
   ============================================================ */

window.getISTComponents             = getISTComponents;
window.getCycleDate                 = getCycleDate;
window.getCurrentSlot               = getCurrentSlot;
window.getCurrentSlotContext        = getCurrentSlotContext;
window.getSecondsUntilNextSlot      = getSecondsUntilNextSlot;
window.formatCountdown              = formatCountdown;
window.SLOT_DEFINITIONS             = SLOT_DEFINITIONS;

window.generatePaperSeed            = generatePaperSeed;
window.seededShuffle                = seededShuffle;

window.generateOrGetPaper           = generateOrGetPaper;
window.getActiveDailyPaper          = getActiveDailyPaper;
window.getQuestionsForPaper         = getQuestionsForPaper;

window.getPapersForCycleDate        = getPapersForCycleDate;
window.getTodaysSlotSchedule        = getTodaysSlotSchedule;

window.renderDailyMockWidget        = renderDailyMockWidget;
window.renderAdminDailyMockPanel    = renderAdminDailyMockPanel;
window.startDailyMockCountdown      = startDailyMockCountdown;

window.adminGeneratePaperNow        = adminGeneratePaperNow;
window.adminRegeneratePaper         = adminRegeneratePaper;
window.adminGenerateAllSlotsNow     = adminGenerateAllSlotsNow;

window.getDailyMockQuestionsForExam = getDailyMockQuestionsForExam;
window.getActiveDailyPaperMeta      = getActiveDailyPaperMeta;
window.syncActivePaperWithBackend   = syncActivePaperWithBackend;

window.testSlotForHour              = testSlotForHour;
window.runSlotBoundaryTests         = runSlotBoundaryTests;

