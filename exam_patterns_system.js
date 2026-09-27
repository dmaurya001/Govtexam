/**
 * GovtExamHub — Official & Verified Exam Patterns Database
 * Rule: ONE EXAM = ONE VERIFIED EXAM CONFIGURATION
 * Based on the latest official notifications and information bulletins.
 */

const VERIFIED_EXAM_PATTERNS = {
  // =========================================================================
  // 1. NEET (UG) 2026 — NATIONAL TESTING AGENCY (NTA)
  // =========================================================================
  "neet": {
    examId: "neet",
    examName: "NEET UG 2026 Pattern-Based Mock Test",
    shortName: "NEET (UG)",
    category: "neet",
    authority: "National Testing Agency (NTA)",
    year: 2026,
    stage: "UG Medical Entrance",
    paper: "National Eligibility cum Entrance Test",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 180,
    totalMarks: 720,
    durationMinutes: 180, // 3 Hours
    marksPerCorrect: 4.0,
    negativeMarks: 1.0,
    negativeMarkType: "fixed",
    negativeFraction: "1.0",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://exams.nta.ac.in/NEET/",
    officialNotificationName: "NEET (UG) - 2026 Information Bulletin (NTA)",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "physics", name: "Physics / भौतिक विज्ञान", questions: 45, marks: 180, start: 1, end: 45, total: 45 },
      { id: "chemistry", name: "Chemistry / रसायन विज्ञान", questions: 45, marks: 180, start: 46, end: 90, total: 45 },
      { id: "botany", name: "Botany / वनस्पति विज्ञान", questions: 45, marks: 180, start: 91, end: 135, total: 45 },
      { id: "zoology", name: "Zoology / जन्तु विज्ञान", questions: 45, marks: 180, start: 136, end: 180, total: 45 }
    ]
  },

  // =========================================================================
  // 2. SSC (STAFF SELECTION COMMISSION)
  // =========================================================================
  "ssc-cgl-tier1": {
    examId: "ssc-cgl-tier1",
    examName: "SSC CGL Tier-I Examination",
    shortName: "SSC CGL",
    category: "ssc",
    authority: "Staff Selection Commission (SSC)",
    year: 2026,
    stage: "Tier-I",
    paper: "Computer-Based Examination (CBE)",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 60,
    marksPerCorrect: 2.0,
    negativeMarks: 0.50,
    negativeMarkType: "fixed",
    negativeFraction: "1/4 (0.50 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://ssc.gov.in",
    officialNotificationName: "SSC Combined Graduate Level Examination (CGL) Notice 2025-2026",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "reasoning", name: "General Intelligence & Reasoning", questions: 25, marks: 50, start: 1, end: 25, total: 25 },
      { id: "ga", name: "General Awareness", questions: 25, marks: 50, start: 26, end: 50, total: 25 },
      { id: "quant", name: "Quantitative Aptitude", questions: 25, marks: 50, start: 51, end: 75, total: 25 },
      { id: "english", name: "English Comprehension", questions: 25, marks: 50, start: 76, end: 100, total: 25 }
    ]
  },
  "ssc-chsl-tier1": {
    examId: "ssc-chsl-tier1",
    examName: "SSC CHSL (10+2) Tier-I Examination",
    shortName: "SSC CHSL",
    category: "ssc",
    authority: "Staff Selection Commission (SSC)",
    year: 2026,
    stage: "Tier-I",
    paper: "Computer-Based Examination",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 60,
    marksPerCorrect: 2.0,
    negativeMarks: 0.50,
    negativeMarkType: "fixed",
    negativeFraction: "1/4 (0.50 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://ssc.gov.in",
    officialNotificationName: "SSC CHSL (10+2) Examination Notice 2025-2026",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "English Language (Basic Knowledge)", questions: 25, marks: 50, start: 1, end: 25, total: 25 },
      { id: "reasoning", name: "General Intelligence", questions: 25, marks: 50, start: 26, end: 50, total: 25 },
      { id: "quant", name: "Quantitative Aptitude (Basic Arithmetic Skill)", questions: 25, marks: 50, start: 51, end: 75, total: 25 },
      { id: "ga", name: "General Awareness", questions: 25, marks: 50, start: 76, end: 100, total: 25 }
    ]
  },
  "ssc-gd": {
    examId: "ssc-gd",
    examName: "SSC GD Constable Examination",
    shortName: "SSC GD",
    category: "ssc",
    authority: "Staff Selection Commission (SSC)",
    year: 2026,
    stage: "CBE",
    paper: "Computer-Based Examination",
    mode: "Online CBT",
    totalQuestions: 80,
    totalMarks: 160,
    durationMinutes: 60,
    marksPerCorrect: 2.0,
    negativeMarks: 0.50,
    negativeMarkType: "fixed",
    negativeFraction: "0.50 per wrong",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://ssc.gov.in",
    officialNotificationName: "Constable (GD) in CAPFs, SSF and Rifleman (GD) Notice 2025-2026",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "reasoning", name: "General Intelligence & Reasoning", questions: 20, marks: 40, start: 1, end: 20, total: 20 },
      { id: "ga", name: "General Knowledge & General Awareness", questions: 20, marks: 40, start: 21, end: 40, total: 20 },
      { id: "quant", name: "Elementary Mathematics", questions: 20, marks: 40, start: 41, end: 60, total: 20 },
      { id: "language", name: "English / Hindi", questions: 20, marks: 40, start: 61, end: 80, total: 20 }
    ]
  },
  "ssc-mts": {
    examId: "ssc-mts",
    examName: "SSC Multi-Tasking (Non-Technical) Staff (MTS)",
    shortName: "SSC MTS",
    category: "ssc",
    authority: "Staff Selection Commission (SSC)",
    year: 2026,
    stage: "Session-I & II",
    paper: "Computer-Based Examination",
    mode: "Online CBT",
    totalQuestions: 90,
    totalMarks: 270,
    durationMinutes: 90,
    marksPerCorrect: 3.0,
    negativeMarks: 1.0,
    negativeMarkType: "fixed",
    negativeFraction: "1.0 in Session-II (0 in Session-I)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://ssc.gov.in",
    officialNotificationName: "SSC Multi Tasking (Non-Technical) Staff Notice 2025-2026",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "maths", name: "Session-I: Numerical & Mathematical Ability", questions: 20, marks: 60, start: 1, end: 20, total: 20 },
      { id: "reasoning", name: "Session-I: Reasoning Ability & Problem Solving", questions: 20, marks: 60, start: 21, end: 40, total: 20 },
      { id: "ga", name: "Session-II: General Awareness", questions: 25, marks: 75, start: 41, end: 65, total: 25 },
      { id: "english", name: "Session-II: English Language & Comprehension", questions: 25, marks: 75, start: 66, end: 90, total: 25 }
    ]
  },

  // =========================================================================
  // 3. BANKING (IBPS / SBI — WITH OFFICIAL SECTIONAL TIMING)
  // =========================================================================
  "ibps-clerk-pre": {
    examId: "ibps-clerk-pre",
    examName: "IBPS Clerk (CSA) Preliminary Examination",
    shortName: "IBPS Clerk",
    category: "banking",
    authority: "Institute of Banking Personnel Selection (IBPS)",
    year: 2026,
    stage: "Preliminary",
    paper: "Online Preliminary Exam",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 60,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.ibps.in",
    officialNotificationName: "IBPS Common Recruitment Process (CRP CSA / Clerks XIV) Notification",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "English Language", questions: 30, marks: 30, durationMinutes: 20, start: 1, end: 30, total: 30 },
      { id: "quant", name: "Numerical Ability", questions: 35, marks: 35, durationMinutes: 20, start: 31, end: 65, total: 35 },
      { id: "reasoning", name: "Reasoning Ability", questions: 35, marks: 35, durationMinutes: 20, start: 66, end: 100, total: 35 }
    ]
  },
  "sbi-clerk-pre": {
    examId: "sbi-clerk-pre",
    examName: "SBI Clerk (Junior Associate) Preliminary Examination",
    shortName: "SBI Clerk",
    category: "banking",
    authority: "State Bank of India (SBI)",
    year: 2026,
    stage: "Preliminary",
    paper: "Online Preliminary Exam",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 60,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://sbi.co.in/careers",
    officialNotificationName: "SBI Recruitment of Junior Associates (Customer Support & Sales) Bulletin",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "English Language", questions: 30, marks: 30, durationMinutes: 20, start: 1, end: 30, total: 30 },
      { id: "quant", name: "Numerical Ability", questions: 35, marks: 35, durationMinutes: 20, start: 31, end: 65, total: 35 },
      { id: "reasoning", name: "Reasoning Ability", questions: 35, marks: 35, durationMinutes: 20, start: 66, end: 100, total: 35 }
    ]
  },
  "ibps-po-pre": {
    examId: "ibps-po-pre",
    examName: "IBPS Probationary Officer (PO) Preliminary Examination",
    shortName: "IBPS PO",
    category: "banking",
    authority: "Institute of Banking Personnel Selection (IBPS)",
    year: 2026,
    stage: "Preliminary",
    paper: "Online Preliminary Exam",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 60,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.ibps.in",
    officialNotificationName: "IBPS Common Recruitment Process (CRP PO/MT XIV) Official Notice",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "English Language", questions: 30, marks: 30, durationMinutes: 20, start: 1, end: 30, total: 30 },
      { id: "quant", name: "Quantitative Aptitude", questions: 35, marks: 35, durationMinutes: 20, start: 31, end: 65, total: 35 },
      { id: "reasoning", name: "Reasoning Ability", questions: 35, marks: 35, durationMinutes: 20, start: 66, end: 100, total: 35 }
    ]
  },
  "sbi-po-pre": {
    examId: "sbi-po-pre",
    examName: "SBI Probationary Officer (PO) Preliminary Examination",
    shortName: "SBI PO",
    category: "banking",
    authority: "State Bank of India (SBI)",
    year: 2026,
    stage: "Preliminary",
    paper: "Online Preliminary Exam",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 60,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://sbi.co.in/careers",
    officialNotificationName: "Recruitment of Probationary Officers in SBI Advertisement Notice",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "English Language", questions: 30, marks: 30, durationMinutes: 20, start: 1, end: 30, total: 30 },
      { id: "quant", name: "Quantitative Aptitude", questions: 35, marks: 35, durationMinutes: 20, start: 31, end: 65, total: 35 },
      { id: "reasoning", name: "Reasoning Ability", questions: 35, marks: 35, durationMinutes: 20, start: 66, end: 100, total: 35 }
    ]
  },

  // =========================================================================
  // 4. RAILWAY RECRUITMENT BOARDS (RRB)
  // =========================================================================
  "rrb-ntpc-cbt1": {
    examId: "rrb-ntpc-cbt1",
    examName: "RRB NTPC (CEN Graduate & Under-Graduate) CBT-1",
    shortName: "RRB NTPC",
    category: "railway",
    authority: "Railway Recruitment Boards (RRB)",
    year: 2026,
    stage: "1st Stage Computer-Based Test (CBT-1)",
    paper: "Common for all posts",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marksPerCorrect: 1.0,
    negativeMarks: 0.333,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (0.33 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.rrbcdg.gov.in",
    officialNotificationName: "Government of India Ministry of Railways CEN 05/2024 & CEN 06/2024",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "ga", name: "General Awareness", questions: 40, marks: 40, start: 1, end: 40, total: 40 },
      { id: "maths", name: "Mathematics", questions: 30, marks: 30, start: 41, end: 70, total: 30 },
      { id: "reasoning", name: "General Intelligence and Reasoning", questions: 30, marks: 30, start: 71, end: 100, total: 30 }
    ]
  },
  "rrb-group-d": {
    examId: "rrb-group-d",
    examName: "RRB Group D (RRC CEN Level-1) Computer-Based Test",
    shortName: "RRB Group D",
    category: "railway",
    authority: "Railway Recruitment Cell / RRB",
    year: 2026,
    stage: "Computer-Based Test",
    paper: "Single Stage CBT",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marksPerCorrect: 1.0,
    negativeMarks: 0.333,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (0.33 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.rrbcdg.gov.in",
    officialNotificationName: "Centrally Employment Notice RRC Level-1 Posts",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "science", name: "General Science", questions: 25, marks: 25, start: 1, end: 25, total: 25 },
      { id: "maths", name: "Mathematics", questions: 25, marks: 25, start: 26, end: 50, total: 25 },
      { id: "reasoning", name: "General Intelligence & Reasoning", questions: 30, marks: 30, start: 51, end: 80, total: 30 },
      { id: "ga", name: "General Awareness & Current Affairs", questions: 20, marks: 20, start: 81, end: 100, total: 20 }
    ]
  },
  "rrb-alp-cbt1": {
    examId: "rrb-alp-cbt1",
    examName: "RRB Assistant Loco Pilot (ALP) CBT-1",
    shortName: "RRB ALP",
    category: "railway",
    authority: "Railway Recruitment Boards (RRB)",
    year: 2026,
    stage: "First Stage CBT",
    paper: "Common for all applicants",
    mode: "Online CBT",
    totalQuestions: 75,
    totalMarks: 75,
    durationMinutes: 60,
    marksPerCorrect: 1.0,
    negativeMarks: 0.333,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (0.33 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.rrbcdg.gov.in",
    officialNotificationName: "CEN 01/2024 Recruitment of Assistant Loco Pilot (ALP)",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "maths", name: "Mathematics", questions: 20, marks: 20, start: 1, end: 20, total: 20 },
      { id: "reasoning", name: "Mental Ability", questions: 25, marks: 25, start: 21, end: 45, total: 25 },
      { id: "science", name: "General Science", questions: 20, marks: 20, start: 46, end: 65, total: 20 },
      { id: "ga", name: "General Awareness on Current Affairs", questions: 10, marks: 10, start: 66, end: 75, total: 10 }
    ]
  },



  // =========================================================================
  // 6. UPSSSC (UTTAR PRADESH SUBORDINATE SERVICES SELECTION COMMISSION)
  // =========================================================================
  "upsssc-pet": {
    examId: "upsssc-pet",
    examName: "UPSSSC Preliminary Eligibility Test (PET)",
    shortName: "UPSSSC PET",
    category: "upsssc",
    authority: "Uttar Pradesh Subordinate Services Selection Commission",
    year: 2026,
    stage: "PET Eligibility",
    paper: "Single Paper",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["hi", "en"],
    questionType: "Objective MCQ",
    officialSourceUrl: "http://upsssc.gov.in",
    officialNotificationName: "UPSSSC Preliminary Eligibility Test (PET) Official Scheme & Syllabus",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "history_movement", name: "Indian History & National Movement", questions: 10, marks: 10, start: 1, end: 10, total: 10 },
      { id: "geography_eco", name: "Geography & Indian Economy", questions: 10, marks: 10, start: 11, end: 20, total: 10 },
      { id: "polity_science", name: "Indian Constitution & General Science", questions: 10, marks: 10, start: 21, end: 30, total: 10 },
      { id: "maths_reasoning", name: "Elementary Arithmetic & Reasoning", questions: 10, marks: 10, start: 31, end: 40, total: 10 },
      { id: "general_hindi", name: "General Hindi & English", questions: 10, marks: 10, start: 41, end: 50, total: 10 },
      { id: "current_ga", name: "Current Affairs & General Awareness", questions: 20, marks: 20, start: 51, end: 70, total: 20 },
      { id: "graph_table", name: "Hindi Comprehension, Graphs & Tables", questions: 30, marks: 30, start: 71, end: 100, total: 30 }
    ]
  },
  "upsssc-lekhpal": {
    examId: "upsssc-lekhpal",
    examName: "UPSSSC Rajasva Lekhpal Main Examination",
    shortName: "UP Lekhpal",
    category: "upsssc",
    authority: "Uttar Pradesh Subordinate Services Selection Commission",
    year: 2026,
    stage: "Main Exam",
    paper: "Single Paper",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["hi", "en"],
    questionType: "Objective MCQ",
    officialSourceUrl: "http://upsssc.gov.in",
    officialNotificationName: "UPSSSC Rajasva Lekhpal Recruitment Examination Scheme",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "hindi", name: "General Hindi / सामान्य हिन्दी", questions: 25, marks: 25, start: 1, end: 25, total: 25 },
      { id: "maths", name: "Mathematics / गणित", questions: 25, marks: 25, start: 26, end: 50, total: 25 },
      { id: "gk", name: "General Knowledge / सामान्य ज्ञान", questions: 25, marks: 25, start: 51, end: 75, total: 25 },
      { id: "rural", name: "Rural Society & Development / ग्राम्य समाज एवं विकास", questions: 25, marks: 25, start: 76, end: 100, total: 25 }
    ]
  },

  // =========================================================================
  // 7. POLICE (UPPRPB)
  // =========================================================================
  "police-constable": {
    examId: "police-constable",
    examName: "UP Police Constable (Civil Police) Direct Recruitment",
    shortName: "UP Police Constable",
    category: "police",
    authority: "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)",
    year: 2026,
    stage: "Written Exam",
    paper: "OMR Based Written Test",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 150,
    totalMarks: 300,
    durationMinutes: 120,
    marksPerCorrect: 2.0,
    negativeMarks: 0.50,
    negativeMarkType: "fixed",
    negativeFraction: "0.50 per wrong answer",
    timingMode: "composite",
    languages: ["hi", "en"],
    questionType: "Objective MCQ",
    officialSourceUrl: "http://uppbpb.gov.in",
    officialNotificationName: "UPPRPB Direct Recruitment for Constable Civil Police Examination Notice",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "gk", name: "General Knowledge / सामान्य ज्ञान", questions: 38, marks: 76, start: 1, end: 38, total: 38 },
      { id: "hindi", name: "General Hindi / सामान्य हिन्दी", questions: 37, marks: 74, start: 39, end: 75, total: 37 },
      { id: "numerical", name: "Numerical & Mental Ability / संख्यात्मक एवं मानसिक योग्यता", questions: 38, marks: 76, start: 76, end: 113, total: 38 },
      { id: "reasoning", name: "Mental Aptitude, IQ & Reasoning / मानसिक अभिरुचि व तर्कशक्ति", questions: 37, marks: 74, start: 114, end: 150, total: 37 }
    ]
  },
  "police-si": {
    examId: "police-si",
    examName: "UP Police Sub-Inspector (SI) / Platoon Commander Examination",
    shortName: "UP Police SI",
    category: "police",
    authority: "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)",
    year: 2026,
    stage: "Written Exam",
    paper: "Online Written Exam",
    mode: "Online CBT",
    totalQuestions: 160,
    totalMarks: 400,
    durationMinutes: 120,
    marksPerCorrect: 2.5,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking (35% Sectional Cutoff required)",
    timingMode: "composite",
    languages: ["hi", "en"],
    questionType: "Objective MCQ",
    officialSourceUrl: "http://uppbpb.gov.in",
    officialNotificationName: "UPPRPB Sub-Inspector (Civil Police) Recruitment Notification",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "hindi", name: "General Hindi / सामान्य हिन्दी", questions: 40, marks: 100, start: 1, end: 40, total: 40 },
      { id: "law_gk", name: "Basic Law, Constitution & GK / मूलविधि, संविधान एवं सामान्य ज्ञान", questions: 40, marks: 100, start: 41, end: 80, total: 40 },
      { id: "maths", name: "Numerical & Mental Ability / संख्यात्मक एवं मानसिक योग्यता", questions: 40, marks: 100, start: 81, end: 120, total: 40 },
      { id: "reasoning", name: "Mental Aptitude, IQ & Reasoning / मानसिक अभिरुचि व तर्कशक्ति", questions: 40, marks: 100, start: 121, end: 160, total: 40 }
    ]
  },

  // =========================================================================
  // 8. DEFENCE (NDA / CDS / AGNIVEER)
  // =========================================================================
  "nda-maths": {
    examId: "nda-maths",
    examName: "National Defence Academy (NDA) — Paper-I (Mathematics)",
    shortName: "NDA Mathematics",
    category: "defence",
    authority: "National Defence Academy / Services Selection Authority",
    year: 2026,
    stage: "Written Exam",
    paper: "Paper-I (Code 01)",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 120,
    totalMarks: 300,
    durationMinutes: 150, // 2.5 Hours
    marksPerCorrect: 2.5,
    negativeMarks: 0.833,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (0.83 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://joinindianarmy.nic.in",
    officialNotificationName: "National Defence Academy and Naval Academy Examination Notice",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "algebra_calc", name: "Algebra, Matrices, Determinants & Calculus", questions: 60, marks: 150, start: 1, end: 60, total: 60 },
      { id: "trig_geom", name: "Trigonometry, 2D/3D Geometry, Vectors & Statistics", questions: 60, marks: 150, start: 61, end: 120, total: 60 }
    ]
  },
  "nda-gat": {
    examId: "nda-gat",
    examName: "National Defence Academy (NDA) — Paper-II (General Ability Test)",
    shortName: "NDA GAT",
    category: "defence",
    authority: "National Defence Academy / Services Selection Authority",
    year: 2026,
    stage: "Written Exam",
    paper: "Paper-II (Code 02)",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 150,
    totalMarks: 600,
    durationMinutes: 150, // 2.5 Hours
    marksPerCorrect: 4.0,
    negativeMarks: 1.333,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (1.33 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://joinindianarmy.nic.in",
    officialNotificationName: "NDA & NA Examination Rules & Syllabus",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "english", name: "Part A: English", questions: 50, marks: 200, start: 1, end: 50, total: 50 },
      { id: "gk", name: "Part B: General Knowledge (Science, History, Geography, Current)", questions: 100, marks: 400, start: 51, end: 150, total: 100 }
    ]
  },

  // =========================================================================
  // 9. TEACHING (CTET / UPTET)
  // =========================================================================
  "ctet-paper1": {
    examId: "ctet-paper1",
    examName: "Central Teacher Eligibility Test (CTET) — Paper-I (Classes I to V)",
    shortName: "CTET Paper-I",
    category: "teaching",
    authority: "Central Board of Secondary Education (CBSE)",
    year: 2026,
    stage: "Eligibility Test",
    paper: "Paper-I (Primary Stage)",
    mode: "Offline OMR Pattern Simulation",
    totalQuestions: 150,
    totalMarks: 150,
    durationMinutes: 150, // 2.5 Hours
    marksPerCorrect: 1.0,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://ctet.nic.in",
    officialNotificationName: "Central Teacher Eligibility Test (CTET) Official Information Bulletin",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "cdp", name: "Child Development and Pedagogy", questions: 30, marks: 30, start: 1, end: 30, total: 30 },
      { id: "maths", name: "Mathematics", questions: 30, marks: 30, start: 31, end: 60, total: 30 },
      { id: "evs", name: "Environmental Studies (EVS)", questions: 30, marks: 30, start: 61, end: 90, total: 30 },
      { id: "lang1", name: "Language I (Hindi/English)", questions: 30, marks: 30, start: 91, end: 120, total: 30 },
      { id: "lang2", name: "Language II (English/Sanskrit)", questions: 30, marks: 30, start: 121, end: 150, total: 30 }
    ]
  },

  // =========================================================================
  // 10. NIELIT CCC (COURSE ON COMPUTER CONCEPTS)
  // =========================================================================
  "ccc": {
    examId: "ccc",
    examName: "NIELIT CCC (Course on Computer Concepts) Online Examination",
    shortName: "NIELIT CCC",
    category: "ccc",
    authority: "National Institute of Electronics and Information Technology (NIELIT)",
    year: 2026,
    stage: "Online Certification",
    paper: "Theory Examination",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marksPerCorrect: 1.0,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://student.nielit.gov.in",
    officialNotificationName: "NIELIT CCC Examination Scheme & Syllabus",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "ccc_theory", name: "CCC Comprehensive Practice (Fundamentals, LibreOffice, Internet, Cyber Security)", questions: 100, marks: 100, start: 1, end: 100, total: 100 }
    ]
  },

  // =========================================================================
  // 11. NIELIT O LEVEL (M1-R5 to M4-R5 INDIVIDUAL MODULE EXAMS)
  // =========================================================================
  "olevel-m1": {
    examId: "olevel-m1",
    examName: "NIELIT O Level — Module M1-R5: Information Technology Tools and Network Basics",
    shortName: "O Level (M1-R5)",
    category: "olevel",
    authority: "National Institute of Electronics and Information Technology (NIELIT)",
    year: 2026,
    stage: "Module M1-R5",
    paper: "Theory Online Examination",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marksPerCorrect: 1.0,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.nielit.gov.in",
    officialNotificationName: "NIELIT Revised O Level Syllabus (Revision 5.1)",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "m1_tools", name: "IT Tools & Network Basics (LibreOffice, Networks, Cyber Security, Digital Governance)", questions: 100, marks: 100, start: 1, end: 100, total: 100 }
    ]
  },
  "olevel": { // Backward compatibility default for olevel category
    examId: "olevel",
    examName: "NIELIT O Level Examination (Comprehensive Theory Mock M1-M4)",
    shortName: "O level",
    category: "olevel",
    authority: "National Institute of Electronics and Information Technology (NIELIT)",
    year: 2026,
    stage: "Theory Examination",
    paper: "M1-R5 to M4-R5 Combined Practice",
    mode: "Online CBT",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marksPerCorrect: 1.0,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://www.nielit.gov.in",
    officialNotificationName: "NIELIT O Level Syllabus Revision 5.1",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "m1", name: "M1-R5: IT Tools & Network Basics", questions: 25, marks: 25, start: 1, end: 25, total: 25 },
      { id: "m2", name: "M2-R5: Web Designing & Publishing", questions: 25, marks: 25, start: 26, end: 50, total: 25 },
      { id: "m3", name: "M3-R5: Python Programming", questions: 25, marks: 25, start: 51, end: 75, total: 25 },
      { id: "m4", name: "M4-R5: Internet of Things (IoT)", questions: 25, marks: 25, start: 76, end: 100, total: 25 }
    ]
  },

  // =========================================================================
  // 12. B.Sc. NURSING (ENTRANCE PRACTICE)
  // =========================================================================
  "nursing": {
    examId: "nursing",
    examName: "B.Sc. Nursing Common Entrance Test Practice (ABVMU / AIIMS Pattern)",
    shortName: "B.Sc. Nursing",
    category: "nursing",
    authority: "State Medical Universities / AIIMS",
    year: 2026,
    stage: "Entrance Test",
    paper: "Common Nursing Entrance Test (CNET)",
    mode: "Online CBT Simulation",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0,
    negativeMarkType: "fixed",
    negativeFraction: "No Negative Marking (State CET Pattern)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://abvmuup.edu.in",
    officialNotificationName: "ABVMU UP Common Nursing Entrance Test (CNET) Bulletin",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "physics", name: "Physics / भौतिक विज्ञान", questions: 25, marks: 25, start: 1, end: 25, total: 25 },
      { id: "chemistry", name: "Chemistry / रसायन विज्ञान", questions: 25, marks: 25, start: 26, end: 50, total: 25 },
      { id: "biology", name: "Biology / जीव विज्ञान", questions: 40, marks: 40, start: 51, end: 90, total: 40 },
      { id: "english", name: "English / अंग्रेजी", questions: 10, marks: 10, start: 91, end: 100, total: 10 }
    ]
  },

  // =========================================================================
  // 13. STATE EXAMS (STATE PSC & GENERAL COMPETITIVE)
  // =========================================================================
  "state": {
    examId: "state",
    examName: "State Government Recruitment Practice Examination",
    shortName: "State Exams",
    category: "state",
    authority: "State Recruitment Commissions",
    year: 2026,
    stage: "General Competitive Stage",
    paper: "General Studies & Aptitude",
    mode: "Online CBT Simulation",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0.333,
    negativeMarkType: "fractional",
    negativeFraction: "1/3 (0.33 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://upssc.up.nic.in",
    officialNotificationName: "State General Recruitment Syllabus Standard",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "general_studies", name: "State & National General Studies", questions: 40, marks: 40, start: 1, end: 40, total: 40 },
      { id: "language", name: "General Hindi & Language Skills", questions: 30, marks: 30, start: 41, end: 70, total: 30 },
      { id: "aptitude", name: "Reasoning & Numerical Aptitude", questions: 30, marks: 30, start: 71, end: 100, total: 30 }
    ]
  },

  // =========================================================================
  // 14. OTHER GOVERNMENT EXAMS
  // =========================================================================
  "other": {
    examId: "other",
    examName: "Central & State Autonomous Bodies Practice Examination",
    shortName: "Other Govt Exams",
    category: "other",
    authority: "Various Central / State Autonomous Bodies",
    year: 2026,
    stage: "Tier-I / Preliminary",
    paper: "General Recruitment Paper",
    mode: "Online CBT Simulation",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    negativeFraction: "1/4 (0.25 per wrong)",
    timingMode: "composite",
    languages: ["en", "hi"],
    questionType: "Objective MCQ",
    officialSourceUrl: "https://india.gov.in",
    officialNotificationName: "General Recruitment Pattern Standard",
    notificationYear: 2026,
    lastVerifiedDate: "2026-09-26",
    isVerified: true,
    sections: [
      { id: "quant", name: "Quantitative Aptitude", questions: 25, marks: 25, start: 1, end: 25, total: 25 },
      { id: "reasoning", name: "General Intelligence & Reasoning", questions: 25, marks: 25, start: 26, end: 50, total: 25 },
      { id: "ga", name: "General Awareness & Current Affairs", questions: 25, marks: 25, start: 51, end: 75, total: 25 },
      { id: "english", name: "English Language & Comprehension", questions: 25, marks: 25, start: 76, end: 100, total: 25 }
    ]
  }
};

/**
 * Access a verified exam config with local admin overrides support
 */
function getVerifiedExamConfig(examId) {
  // Check local admin custom configurations first
  try {
    const customConfigs = JSON.parse(localStorage.getItem("govtexamhub_custom_patterns") || "{}");
    if (customConfigs[examId]) {
      return Object.assign({}, VERIFIED_EXAM_PATTERNS[examId] || {}, customConfigs[examId]);
    }
  } catch (e) {
    console.warn("Could not read custom patterns from localStorage", e);
  }

  if (VERIFIED_EXAM_PATTERNS[examId]) {
    return Object.assign({}, VERIFIED_EXAM_PATTERNS[examId]);
  }

  // Fallback if category key was passed (e.g. "ssc" -> "ssc-cgl-tier1")
  if (examId === "ssc") return Object.assign({}, VERIFIED_EXAM_PATTERNS["ssc-cgl-tier1"]);
  if (examId === "banking") return Object.assign({}, VERIFIED_EXAM_PATTERNS["ibps-clerk-pre"]);
  if (examId === "railway") return Object.assign({}, VERIFIED_EXAM_PATTERNS["rrb-ntpc-cbt1"]);
  if (examId === "upsssc") return Object.assign({}, VERIFIED_EXAM_PATTERNS["upsssc-pet"]);
  if (examId === "police") return Object.assign({}, VERIFIED_EXAM_PATTERNS["police-constable"]);
  if (examId === "defence") return Object.assign({}, VERIFIED_EXAM_PATTERNS["nda-maths"]);
  if (examId === "teaching") return Object.assign({}, VERIFIED_EXAM_PATTERNS["ctet-paper1"]);

  // Generic fallback
  return {
    examId: examId || "general",
    examName: "Government Exam Practice",
    shortName: "Mock Test",
    authority: "General Recruitment Authority",
    year: 2026,
    stage: "Tier-I",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1.0,
    negativeMarks: 0.25,
    negativeMarkType: "fractional",
    timingMode: "composite",
    sections: []
  };
}

/**
 * Get all available verified exam configurations as an array
 */
function getAllVerifiedExamConfigs() {
  return Object.keys(VERIFIED_EXAM_PATTERNS).map(id => getVerifiedExamConfig(id));
}

/**
 * Get list of sub-exams under a main category
 */
function getVerifiedExamsByCategory(categoryId) {
  return Object.values(VERIFIED_EXAM_PATTERNS).filter(ex => ex.category === categoryId);
}

/**
 * Save / Update an exam configuration (Admin capability)
 */
function saveCustomExamConfig(examId, updatedConfig) {
  try {
    const customConfigs = JSON.parse(localStorage.getItem("govtexamhub_custom_patterns") || "{}");
    customConfigs[examId] = Object.assign({}, VERIFIED_EXAM_PATTERNS[examId] || {}, updatedConfig);
    localStorage.setItem("govtexamhub_custom_patterns", JSON.stringify(customConfigs));
    return true;
  } catch (e) {
    console.error("Failed to save custom exam pattern", e);
    return false;
  }
}

/**
 * Reset custom pattern back to official standard
 */
function resetExamConfigToDefault(examId) {
  try {
    const customConfigs = JSON.parse(localStorage.getItem("govtexamhub_custom_patterns") || "{}");
    delete customConfigs[examId];
    localStorage.setItem("govtexamhub_custom_patterns", JSON.stringify(customConfigs));
    return true;
  } catch (e) {
    console.error("Failed to reset pattern", e);
    return false;
  }
}

// Export for browser global context
window.VERIFIED_EXAM_PATTERNS = VERIFIED_EXAM_PATTERNS;
window.getVerifiedExamConfig = getVerifiedExamConfig;
window.getAllVerifiedExamConfigs = getAllVerifiedExamConfigs;
window.getVerifiedExamsByCategory = getVerifiedExamsByCategory;
window.saveCustomExamConfig = saveCustomExamConfig;
window.resetExamConfigToDefault = resetExamConfigToDefault;
