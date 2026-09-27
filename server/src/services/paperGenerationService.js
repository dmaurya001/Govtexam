/**
 * src/services/paperGenerationService.js
 * Core paper generation pipeline:
 *   Gemini batch generation → Validate → Deduplicate → OpenAI regenerate if needed → Final paper
 *
 * COST CONTROL: Generates once, stores result. Students get stored paper.
 */

"use strict";

const { geminiGenerateQuestions, openaiGenerateQuestions } = require("./aiProviders");
const { validateAndFilterBatch } = require("./questionValidator");
const { getDifficultyDistribution } = require("../config/examRegistry");
const { makePaperKey } = require("../utils/slotEngine");
const paperStore = require("./paperStore");

const MAX_BATCH_SIZE = parseInt(process.env.MAX_BATCH_SIZE || "35");
const MAX_RETRIES    = 3;
const GENERATION_TIMEOUT_MS = parseInt(process.env.GENERATION_TIMEOUT_MS || "60000");

// ─────────────────────────────────────────────
// Topic rotation map (per subject)
// ─────────────────────────────────────────────
const TOPIC_POOLS = {
  reasoning: ["Analogy","Classification","Coding-Decoding","Number Series","Syllogism",
               "Blood Relation","Direction & Distance","Seating Arrangement","Puzzle","Inequality",
               "Matrix","Statement Conclusions","Verbal Reasoning","Alpha-Numeric Series"],
  quant:     ["Percentage","Profit & Loss","Ratio & Proportion","Average","Time & Work",
               "Time Speed Distance","Simple Interest","Compound Interest","Number System",
               "Data Interpretation","Geometry","Trigonometry","Algebra","Mensuration"],
  english:   ["Reading Comprehension","Vocabulary","Grammar","Error Spotting","Fill in Blanks",
               "Sentence Rearrangement","Synonyms","Antonyms","One Word Substitution","Idioms"],
  ga:        ["Indian History","Indian Geography","Indian Polity","Indian Economy",
               "General Science","Current Affairs","Sports","Awards","Books & Authors",
               "Important Dates","International Affairs","Government Schemes"],
  physics:   ["Mechanics","Thermodynamics","Electromagnetism","Optics","Modern Physics",
               "Waves & Sound","Gravitation","Fluid Mechanics","Work & Energy"],
  chemistry: ["Organic Chemistry","Inorganic Chemistry","Physical Chemistry","Periodic Table",
               "Chemical Bonding","Solutions","Electrochemistry","Polymers","Biomolecules"],
  biology:   ["Cell Biology","Genetics","Plant Physiology","Animal Physiology","Ecology",
               "Evolution","Human Health & Disease","Biotechnology","Reproduction"],
  maths:     ["Algebra","Geometry","Trigonometry","Calculus","Statistics","Number Theory",
               "Probability","Arithmetic","Mensuration"],
  hindi:     ["Sandhi","Samas","Muhavare","Vakya Shuddhi","Ras","Chhand","Alankar",
               "Kaal","Vachya","Paryayvachi"],
  it_tools:  ["MS Office","LibreOffice","Internet Basics","Email","Windows OS","Hardware Basics"],
  web:       ["HTML","CSS","JavaScript","Networking","Web Security","Protocols"],
  python:    ["Data Types","Control Flow","Functions","OOP","Modules","File I/O","Error Handling"],
  iot:       ["IoT Architecture","Sensors","AI Basics","Machine Learning Intro","Data Science"],
  fundamentals: ["Computer Basics","Input Output Devices","Memory","OS Concepts","Networks"],
  libreoffice:  ["Writer","Calc","Impress","Base","Draw"],
  internet:     ["WWW","Email","Social Media","Cloud Services","Cybersecurity"],
  digital_fin:  ["UPI","Online Banking","e-Wallet","NEFT/RTGS","Digital India"],
  default:   ["General Knowledge","Current Affairs","Mixed Topics"]
};

function getTopicsForSubject(subjectId, slotNumber) {
  const pool = TOPIC_POOLS[subjectId] || TOPIC_POOLS.default;
  // Rotate topics based on slot so different slots get different topics
  const offset = (slotNumber - 1) % pool.length;
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
  return rotated;
}

// ─────────────────────────────────────────────
// Generate questions for ONE subject-difficulty bucket
// ─────────────────────────────────────────────
async function generateBucket({ examConfig, subject, difficulty, count, slotNumber, seenFingerprints }) {
  const topics = getTopicsForSubject(subject.id, slotNumber);
  const topic  = topics[slotNumber % topics.length]; // slot-based topic rotation

  let collected = [];
  let retries = 0;
  const seen = new Set(seenFingerprints);

  while (collected.length < count && retries < MAX_RETRIES) {
    const needed = count - collected.length + Math.ceil(count * 0.3); // 30% safety buffer
    const batchSize = Math.min(needed, MAX_BATCH_SIZE);

    let raw = [];
    try {
      raw = await geminiGenerateQuestions({
        examName: examConfig.examName,
        subject:  subject.name,
        topic,
        difficulty,
        count: batchSize,
        marksPerQuestion: examConfig.marksPerCorrect,
        negativeMarks:    examConfig.negativeMarks,
        language: "bilingual",
        existingQuestionHashes: [...seen]
      });
    } catch (geminiErr) {
      console.warn(`[PaperGen] Gemini failed (attempt ${retries+1}): ${geminiErr.message}`);

      // Fallback to OpenAI
      try {
        raw = await openaiGenerateQuestions({
          examName: examConfig.examName,
          subject:  subject.name,
          topic,
          difficulty,
          count: batchSize,
          marksPerQuestion: examConfig.marksPerCorrect,
          negativeMarks:    examConfig.negativeMarks,
          language: "bilingual",
          existingQuestionHashes: [...seen]
        });
        console.log(`[PaperGen] OpenAI fallback succeeded for ${subject.id}/${difficulty}`);
      } catch (openAiErr) {
        console.error(`[PaperGen] Both AI providers failed: ${openAiErr.message}`);
        retries++;
        continue;
      }
    }

    const { valid, invalid, duplicates, updatedSeen } = validateAndFilterBatch(raw, seen);
    seen.clear();
    for (const fp of updatedSeen) seen.add(fp);

    console.log(`[PaperGen] Bucket ${subject.id}/${difficulty}: raw=${raw.length} valid=${valid.length} invalid=${invalid.length} dupes=${duplicates}`);

    // If Gemini returned invalid questions, try OpenAI for just those
    if (invalid.length > 0 && process.env.ENABLE_OPENAI_CROSSVALIDATION === "true") {
      try {
        const regenCount = Math.min(invalid.length, MAX_BATCH_SIZE);
        const regenned = await openaiGenerateQuestions({
          examName: examConfig.examName,
          subject: subject.name, topic, difficulty,
          count: regenCount,
          marksPerQuestion: examConfig.marksPerCorrect,
          negativeMarks: examConfig.negativeMarks,
          language: "bilingual",
          existingQuestionHashes: [...seen]
        });
        const regenResult = validateAndFilterBatch(regenned, seen);
        valid.push(...regenResult.valid);
        for (const fp of regenResult.updatedSeen) seen.add(fp);
        console.log(`[PaperGen] OpenAI regen added ${regenResult.valid.length} questions`);
      } catch (e) {
        console.warn(`[PaperGen] OpenAI cross-validation skipped: ${e.message}`);
      }
    }

    collected.push(...valid);
    retries++;
  }

  // Trim to exactly required
  return collected.slice(0, count).map((q, i) => ({
    ...q,
    id: `${subject.id}_${difficulty}_${i + 1}`,
    examId:  examConfig.examId,
    subject: subject.id,
    subjectName: subject.name,
    difficulty: difficulty.toLowerCase(),
    marksPerCorrect: examConfig.marksPerCorrect,
    negativeMarks:   examConfig.negativeMarks,
    createdAt: new Date().toISOString(),
    generationVersion: "ai-v1.0",
    sourceType: "ai_generated"
  }));
}

// ─────────────────────────────────────────────
// MAIN: Generate a complete paper for one exam+slot
// ─────────────────────────────────────────────
async function generatePaper({ examConfig, cycleDate, slotNumber }) {
  const paperKey = makePaperKey(cycleDate, slotNumber, examConfig.examId, examConfig.stageId || "");
  const logData  = {
    generationId:        `gen_${Date.now()}`,
    paperKey,
    cycleDate,
    slotNumber,
    examId:              examConfig.examId,
    startedAt:           new Date().toISOString(),
    status:              "generating",
    questionsRequested:  examConfig.totalQuestions,
    questionsGenerated:  0,
    duplicatesRemoved:   0,
    validationFailures:  0,
    finalQuestionCount:  0,
    errorMessage:        null
  };

  console.log(`[PaperGen] Starting: ${paperKey}`);
  paperStore.setGenerationLog(paperKey, logData);

  // Update paper status to "generating"
  paperStore.updatePaper(paperKey, { status: "generating", cycleDate, slotNumber, examId: examConfig.examId });

  try {
    const diff = getDifficultyDistribution(examConfig);
    const seenFingerprints = new Set(paperStore.getUsedFingerprints());
    let allQuestions = [];

    // Generate per subject × per difficulty
    for (const subject of examConfig.subjects) {
      const subjectTotal  = subject.questions;
      const subjectEasy   = Math.floor(subjectTotal * diff.easy   / examConfig.totalQuestions);
      const subjectHard   = Math.floor(subjectTotal * diff.hard   / examConfig.totalQuestions);
      const subjectMedium = subjectTotal - subjectEasy - subjectHard;

      const buckets = [
        { difficulty: "easy",   count: subjectEasy   },
        { difficulty: "medium", count: subjectMedium },
        { difficulty: "hard",   count: subjectHard   }
      ].filter(b => b.count > 0);

      for (const bucket of buckets) {
        const qs = await generateBucket({
          examConfig, subject, difficulty: bucket.difficulty,
          count: bucket.count, slotNumber, seenFingerprints
        });
        allQuestions.push(...qs);
        // Update seen fingerprints
        qs.forEach(q => { if (q._fingerprint) seenFingerprints.add(q._fingerprint); });
      }
    }

    logData.questionsGenerated = allQuestions.length;

    // Final count validation
    if (allQuestions.length < examConfig.totalQuestions) {
      throw new Error(`Insufficient questions: got ${allQuestions.length}, need ${examConfig.totalQuestions}`);
    }

    // Trim to exact required count
    const finalQuestions = allQuestions.slice(0, examConfig.totalQuestions);

    // Number questions sequentially
    finalQuestions.forEach((q, i) => { q.id = i + 1; });

    logData.finalQuestionCount = finalQuestions.length;
    logData.status = "ready";
    logData.completedAt = new Date().toISOString();

    const paper = {
      paperId:         paperKey,
      cycleDate,
      slotNumber,
      examId:          examConfig.examId,
      examName:        examConfig.examName,
      totalQuestions:  examConfig.totalQuestions,
      totalMarks:      examConfig.totalMarks,
      durationMinutes: examConfig.durationMinutes,
      marksPerCorrect: examConfig.marksPerCorrect,
      negativeMarks:   examConfig.negativeMarks,
      subjects:        examConfig.subjects,
      difficultyDistribution: getDifficultyDistribution(examConfig),
      questions:       finalQuestions,
      questionCount:   finalQuestions.length,
      status:          "ready",
      generatedAt:     new Date().toISOString(),
      generationVersion: "ai-v1.0"
    };

    paperStore.savePaper(paperKey, paper);
    paperStore.setGenerationLog(paperKey, logData);

    // Update used fingerprints
    finalQuestions.forEach(q => { if (q._fingerprint) paperStore.addUsedFingerprint(q._fingerprint); });

    console.log(`[PaperGen] ✅ Done: ${paperKey} — ${finalQuestions.length} questions`);
    return { success: true, paper, log: logData };

  } catch (err) {
    logData.status = "failed";
    logData.errorMessage = err.message;
    logData.completedAt = new Date().toISOString();
    paperStore.updatePaper(paperKey, { status: "failed", errorMessage: err.message });
    paperStore.setGenerationLog(paperKey, logData);
    console.error(`[PaperGen] ❌ Failed: ${paperKey} — ${err.message}`);
    return { success: false, error: err.message, log: logData };
  }
}

/** Publish a ready paper (status: ready → published) */
function publishPaper(paperKey) {
  const paper = paperStore.getPaper(paperKey);
  if (!paper) throw new Error(`Paper not found: ${paperKey}`);
  if (paper.status !== "ready") throw new Error(`Cannot publish paper in status: ${paper.status}`);
  paperStore.updatePaper(paperKey, { status: "published", publishedAt: new Date().toISOString() });
  return paperStore.getPaper(paperKey);
}

module.exports = { generatePaper, publishPaper };
