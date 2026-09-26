/**
 * src/services/aiProviders.js
 * AI Provider abstraction: GeminiProvider (primary) + OpenAIProvider (fallback).
 * API keys loaded from environment only — never from frontend.
 */

"use strict";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const OpenAI = require("openai");

// ─────────────────────────────────────────────
// Lazy singleton initializers
// ─────────────────────────────────────────────
let _geminiClient = null;
let _openaiClient = null;

function getGeminiClient() {
  if (!_geminiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("GEMINI_API_KEY not set in environment");
    _geminiClient = new GoogleGenerativeAI(key);
  }
  return _geminiClient;
}

function getOpenAIClient() {
  if (!_openaiClient) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error("OPENAI_API_KEY not set in environment");
    _openaiClient = new OpenAI({ apiKey: key });
  }
  return _openaiClient;
}

// ─────────────────────────────────────────────
// Prompt builder
// ─────────────────────────────────────────────
function buildGenerationPrompt({ examName, subject, topic, difficulty, count, marksPerQuestion, negativeMarks, language, existingQuestionHashes }) {
  const hashContext = existingQuestionHashes && existingQuestionHashes.length > 0
    ? `\nAvoid questions similar to these already-used fingerprints (just for context, not shown): ${existingQuestionHashes.length} questions already used.`
    : "";

  return `You are a professional government exam question paper setter for India.

Generate exactly ${count} MCQ questions for:
- Exam: ${examName}
- Subject: ${subject}
- Topic: ${topic || "Mixed " + subject}
- Difficulty: ${difficulty} (Easy = straightforward recall; Medium = application; Hard = analytical/complex)
- Marks per correct: ${marksPerQuestion}
- Negative marking: ${negativeMarks}
- Language: Bilingual (English + Hindi)
${hashContext}

STRICT RULES:
1. Generate EXACTLY ${count} questions. No more, no less.
2. Every question must have EXACTLY 4 options (A, B, C, D).
3. EXACTLY one correct answer per question.
4. Provide English question and Hindi question (same meaning, same numbers, same answer).
5. Options must all be unique — no duplicate option text.
6. Answer must be unambiguous and factually verified.
7. For mathematical questions, double-check your calculation.
8. Explanation must be clear and educational.
9. Do NOT reveal the answer in the question text.
10. Questions must be relevant to Indian government exam syllabus.
11. Return ONLY valid JSON — no markdown, no code blocks, no extra text.

Return a JSON array with exactly this structure:
[
  {
    "questionEn": "Question text in English?",
    "questionHi": "प्रश्न हिंदी में?",
    "options": [
      {"id":"A","textEn":"Option A in English","textHi":"विकल्प A हिंदी में"},
      {"id":"B","textEn":"Option B in English","textHi":"विकल्प B हिंदी में"},
      {"id":"C","textEn":"Option C in English","textHi":"विकल्प C हिंदी में"},
      {"id":"D","textEn":"Option D in English","textHi":"विकल्प D हिंदी में"}
    ],
    "correctAnswer": "A",
    "explanationEn": "Explanation in English.",
    "explanationHi": "स्पष्टीकरण हिंदी में।",
    "subject": "${subject}",
    "topic": "${topic || subject}",
    "difficulty": "${difficulty}"
  }
]`;
}

// ─────────────────────────────────────────────
// GeminiProvider
// ─────────────────────────────────────────────
async function geminiGenerateQuestions(params) {
  const candidateModels = [
    "gemini-2.5-flash",
    process.env.GEMINI_MODEL,
    "gemini-2.0-flash",
    "gemini-1.5-flash"
  ].filter(Boolean);

  const modelsToTry = [...new Set(candidateModels)];
  const client = getGeminiClient();
  const prompt = buildGenerationPrompt(params);

  let lastError = null;
  for (const modelName of modelsToTry) {
    try {
      const model = client.getGenerativeModel({
        model: modelName,
        generationConfig: {
          temperature: 0.7,
          topP: 0.9,
          maxOutputTokens: 8192,
          responseMimeType: "application/json"
        }
      });

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      return parseAIJsonResponse(text, `Gemini (${modelName})`);
    } catch (err) {
      lastError = err;
      if (err.message && (err.message.includes("404") || err.message.includes("not found"))) {
        console.warn(`[Gemini] Model ${modelName} not found, trying next model...`);
        continue;
      }
      throw err;
    }
  }
  throw lastError || new Error("All Gemini candidate models failed");
}

// ─────────────────────────────────────────────
// OpenAIProvider (fallback / cross-validator)
// ─────────────────────────────────────────────
async function openaiGenerateQuestions(params) {
  const client = getOpenAIClient();
  const modelName = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const prompt = buildGenerationPrompt(params);

  const completion = await client.chat.completions.create({
    model: modelName,
    messages: [
      { role: "system", content: "You are a professional Indian government exam question setter. Return ONLY valid JSON arrays." },
      { role: "user",   content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 8192
  });

  const text = completion.choices[0].message.content;
  return parseAIJsonResponse(text, "OpenAI");
}

// ─────────────────────────────────────────────
// JSON parser — strips markdown fences if AI adds them
// ─────────────────────────────────────────────
function parseAIJsonResponse(text, source) {
  let cleaned = text.trim();
  // Remove markdown code fences
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  // Find first [ and last ] (JSON array)
  const start = cleaned.indexOf("[");
  const end   = cleaned.lastIndexOf("]");
  if (start === -1 || end === -1) throw new Error(`${source}: Response is not a JSON array`);
  cleaned = cleaned.slice(start, end + 1);
  try {
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed)) throw new Error(`${source}: Parsed value is not an array`);
    return parsed;
  } catch (e) {
    throw new Error(`${source} JSON parse failed: ${e.message}`);
  }
}

module.exports = {
  geminiGenerateQuestions,
  openaiGenerateQuestions,
  buildGenerationPrompt,
  parseAIJsonResponse
};
