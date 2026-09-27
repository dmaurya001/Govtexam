/**
 * GovtExamHub — Defence Services Examination (NDA / CDS / AFCAT / Agniveer Mock)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real Defence Marking: +1.00 for Correct Answer, -0.33 for Incorrect Answer (1/3rd Negative Marking)
 */

const DEFENCE_EXAM_CONFIG = {
  id: "defence",
  title: "Defence Services Examination (NDA / CDS / Agniveer Mock)",
  shortName: "Defence",
  icon: "🎖️",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.33, // Official NDA/CDS 1/3rd Negative Marking
  sections: [
    { id: "def_eng", name: "1. English Language & Vocabulary", start: 1, end: 25, total: 25 },
    { id: "def_sci", name: "2. General Science (Physics, Chem, Bio)", start: 26, end: 50, total: 25 },
    { id: "def_math", name: "3. Mathematics & Calculus", start: 51, end: 75, total: 25 },
    { id: "def_gk", name: "4. General Knowledge & Defence Awareness", start: 76, end: 100, total: 25 }
  ]
};

const DEFENCE_QUESTIONS_DATA = [
  // =======================================================
  // SECTION 1: ENGLISH LANGUAGE & VOCABULARY (Q1 - Q25)
  // =======================================================
  {
    id: 1,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the synonym of the word: 'VALIANT'",
    questionHi: "शब्द 'VALIANT' (बहादुर / पराक्रमी) का समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Brave / Courageous", textHi: "साहसी / वीर" },
      { id: "B", textEn: "Cowardly", textHi: "कायर" },
      { id: "C", textEn: "Timid", textHi: "डरपोक" },
      { id: "D", textEn: "Hesitant", textHi: "संकोची" }
    ],
    correctAnswer: "A",
    explanation: "'Valiant' means possessing or showing courage or determination."
  },
  {
    id: 2,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the antonym of the word: 'BELLIGERENT'",
    questionHi: "शब्द 'BELLIGERENT' (युद्धरत / आक्रामक) का विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "Peaceful", textHi: "शांतिप्रिय (Peaceful)" },
      { id: "B", textEn: "Hostile", textHi: "शत्रुतापूर्ण" },
      { id: "C", textEn: "Aggressive", textHi: "आक्रामक" },
      { id: "D", textEn: "Combative", textHi: "लड़ाकू" }
    ],
    correctAnswer: "A",
    explanation: "'Belligerent' means hostile and aggressive; its opposite is 'Peaceful' or 'Amicable'."
  },
  {
    id: 3,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Spot the error: 'The army personnel (A) / was deployed (B) / along the western border (C) / No error (D)'",
    questionHi: "त्रुटि पहचानें: 'The army personnel (A) / was deployed (B) / along the western border (C) / No error (D)'",
    options: [
      { id: "A", textEn: "Part A", textHi: "भाग A" },
      { id: "B", textEn: "Part B (was deployed)", textHi: "भाग B (was deployed)" },
      { id: "C", textEn: "Part C", textHi: "भाग C" },
      { id: "D", textEn: "Part D", textHi: "भाग D" }
    ],
    correctAnswer: "B",
    explanation: "'Personnel' is a plural noun referring to staff or soldiers, requiring the plural verb 'were deployed'."
  },
  {
    id: 4,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "What is the meaning of the idiom: 'To bury the hatchet'?",
    questionHi: "मुहावरे 'To bury the hatchet' का अर्थ क्या है?",
    options: [
      { id: "A", textEn: "To make peace and end a conflict", textHi: "पुरानी शत्रुता भुलाकर शांति स्थापित करना" },
      { id: "B", textEn: "To hide weapons", textHi: "हथियार छुपाना" },
      { id: "C", textEn: "To start a battle", textHi: "युद्ध प्रारंभ करना" },
      { id: "D", textEn: "To dig a trench", textHi: "खाई खोदना" }
    ],
    correctAnswer: "A",
    explanation: "'To bury the hatchet' means to settle disagreements and become friendly again."
  },
  {
    id: 5,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "One-word substitute: 'The act of killing one's brother.'",
    questionHi: "एक शब्द प्रतिस्थापन: 'अपने भाई की हत्या करने का कृत्य'",
    options: [
      { id: "A", textEn: "Fratricide", textHi: "Fratricide (भ्रातृघात)" },
      { id: "B", textEn: "Patricide", textHi: "Patricide (पितृघात)" },
      { id: "C", textEn: "Matricide", textHi: "Matricide (मातृघात)" },
      { id: "D", textEn: "Regicide", textHi: "Regicide (राजहत्या)" }
    ],
    correctAnswer: "A",
    explanation: "'Fratricide' is the killing of one's brother. 'Patricide' is killing of father; 'Regicide' is killing of a king."
  },
  {
    id: 6,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Fill in the blank: The commando team succeeded _______ neutralizing the terrorists.",
    questionHi: "रिक्त स्थान भरें: The commando team succeeded _______ neutralizing the terrorists.",
    options: [
      { id: "A", textEn: "in", textHi: "in" },
      { id: "B", textEn: "at", textHi: "at" },
      { id: "C", textEn: "with", textHi: "with" },
      { id: "D", textEn: "for", textHi: "for" }
    ],
    correctAnswer: "A",
    explanation: "The verb 'succeed' takes the preposition 'in' followed by a gerund ('succeeded in doing something')."
  },
  {
    id: 7,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the correctly spelt word:",
    questionHi: "सही वर्तनी वाले शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "Lieutenant", textHi: "Lieutenant (लेफ्टिनेंट)" },
      { id: "B", textEn: "Lieutennant", textHi: "Lieutennant" },
      { id: "C", textEn: "Leutenant", textHi: "Leutenant" },
      { id: "D", textEn: "Liutenant", textHi: "Liutenant" }
    ],
    correctAnswer: "A",
    explanation: "The standard spelling of the commissioned military rank is 'Lieutenant'."
  },
  {
    id: 8,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Change into Passive Voice: 'The Navy launched a new stealth frigate.'",
    questionHi: "Passive Voice में बदलिए: 'The Navy launched a new stealth frigate.'",
    options: [
      { id: "A", textEn: "A new stealth frigate was launched by the Navy.", textHi: "A new stealth frigate was launched by the Navy." },
      { id: "B", textEn: "A new stealth frigate is launched by the Navy.", textHi: "A new stealth frigate is launched by the Navy." },
      { id: "C", textEn: "A new stealth frigate has been launched by the Navy.", textHi: "A new stealth frigate has been launched by the Navy." },
      { id: "D", textEn: "A new stealth frigate had launched by the Navy.", textHi: "A new stealth frigate had launched by the Navy." }
    ],
    correctAnswer: "A",
    explanation: "Simple past active ('launched') is converted into 'was + launched' in the passive voice."
  },
  {
    id: 9,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the antonym for: 'RETREAT'",
    questionHi: "शब्द 'RETREAT' (पीछे हटना) का विलोम शब्द है:",
    options: [
      { id: "A", textEn: "Advance", textHi: "आगे बढ़ना (Advance)" },
      { id: "B", textEn: "Withdraw", textHi: "वापस लेना" },
      { id: "C", textEn: "Surrender", textHi: "आत्मसमर्पण" },
      { id: "D", textEn: "Defend", textHi: "बचाव करना" }
    ],
    correctAnswer: "A",
    explanation: "'Retreat' means withdrawing from enemy forces; its direct opposite is 'Advance'."
  },
  {
    id: 10,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Meaning of the idiom: 'To hold the fort'",
    questionHi: "मुहावरे 'To hold the fort' का अर्थ क्या है?",
    options: [
      { id: "A", textEn: "To take responsibility in the absence of others", textHi: "दूसरों की अनुपस्थिति में मोर्चा संभालना / जिम्मेदारी निभाना" },
      { id: "B", textEn: "To capture an enemy fortress", textHi: "किला जीतना" },
      { id: "C", textEn: "To construct a bunker", textHi: "बंकर बनाना" },
      { id: "D", textEn: "To lose a battle", textHi: "लड़ाई हारना" }
    ],
    correctAnswer: "A",
    explanation: "'Hold the fort' means to maintain a position or handle affairs while someone else is temporarily away."
  },
  {
    id: 11,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Synonym of: 'CAMOUFLAGE'",
    questionHi: "शब्द 'CAMOUFLAGE' (छलावरण) का पर्यायवाची शब्द क्या है?",
    options: [
      { id: "A", textEn: "Disguise / Concealment", textHi: "छद्मवेष / छिपाव" },
      { id: "B", textEn: "Expose", textHi: "प्रकट करना" },
      { id: "C", textEn: "Reveal", textHi: "उजागर करना" },
      { id: "D", textEn: "Display", textHi: "प्रदर्शन" }
    ],
    correctAnswer: "A",
    explanation: "'Camouflage' means the disguising of military personnel or equipment by painting them to blend in with surroundings."
  },
  {
    id: 12,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Identify the correct preposition: The soldiers marched _______ the victory parade.",
    questionHi: "उचित Preposition चुनें: The soldiers marched _______ the victory parade.",
    options: [
      { id: "A", textEn: "in", textHi: "in" },
      { id: "B", textEn: "on", textHi: "on" },
      { id: "C", textEn: "at", textHi: "at" },
      { id: "D", textEn: "into", textHi: "into" }
    ],
    correctAnswer: "A",
    explanation: "Soldiers march 'in' a parade."
  },
  {
    id: 13,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the correctly spelt word:",
    questionHi: "सही वर्तनी वाले शब्द की पहचान कीजिए:",
    options: [
      { id: "A", textEn: "Manoeuvre (Maneuver)", textHi: "Manoeuvre" },
      { id: "B", textEn: "Maneuvre", textHi: "Maneuvre" },
      { id: "C", textEn: "Manoeuvor", textHi: "Manoeuvor" },
      { id: "D", textEn: "Manuever", textHi: "Manuever" }
    ],
    correctAnswer: "A",
    explanation: "The British English standard spelling is 'Manoeuvre', referring to strategic military movement."
  },
  {
    id: 14,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "One-word substitution: 'A place where ammunition and weapons are stored.'",
    questionHi: "एक शब्द प्रतिस्थापन: 'वह स्थान जहाँ हथियार और गोला-बारूद रखे जाते हैं'",
    options: [
      { id: "A", textEn: "Arsenal", textHi: "Arsenal (शस्त्रागार)" },
      { id: "B", textEn: "Armory", textHi: "Armory" },
      { id: "C", textEn: "Barracks", textHi: "बैरेक" },
      { id: "D", textEn: "Hangar", textHi: "हैंगर" }
    ],
    correctAnswer: "A",
    explanation: "An 'Arsenal' is a collection or repository of weapons and military equipment."
  },
  {
    id: 15,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Fill in the blank: The Captain commanded his platoon to _______ fire.",
    questionHi: "रिक्त स्थान भरें: The Captain commanded his platoon to _______ fire.",
    options: [
      { id: "A", textEn: "cease", textHi: "cease (रोकना)" },
      { id: "B", textEn: "seize", textHi: "seize" },
      { id: "C", textEn: "seas", textHi: "seas" },
      { id: "D", textEn: "cess", textHi: "cess" }
    ],
    correctAnswer: "A",
    explanation: "'Cease fire' means to stop shooting or fighting."
  },
  {
    id: 16,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Find the error: 'No sooner did the siren sound (A) / when all soldiers (B) / rushed to their posts (C) / No error (D)'",
    questionHi: "त्रुटि पहचानें: 'No sooner did the siren sound (A) / when all soldiers (B) / rushed to their posts (C) / No error (D)'",
    options: [
      { id: "A", textEn: "Part A", textHi: "भाग A" },
      { id: "B", textEn: "Part B (when should be than)", textHi: "भाग B (when के स्थान पर than)" },
      { id: "C", textEn: "Part C", textHi: "भाग C" },
      { id: "D", textEn: "Part D", textHi: "भाग D" }
    ],
    correctAnswer: "B",
    explanation: "'No sooner' is always paired with 'than', never 'when'."
  },
  {
    id: 17,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Antonym of: 'TREACHEROUS'",
    questionHi: "शब्द 'TREACHEROUS' (विश्वासघाती / कपटी) का विलोम शब्द है:",
    options: [
      { id: "A", textEn: "Loyal / Faithful", textHi: "वफादार / निष्ठावान" },
      { id: "B", textEn: "Dangerous", textHi: "खतरनाक" },
      { id: "C", textEn: "Perfidious", textHi: "धोखेबाज" },
      { id: "D", textEn: "Unreliable", textHi: "अविश्वसनीय" }
    ],
    correctAnswer: "A",
    explanation: "'Treacherous' means guilty of or involving betrayal. The opposite is 'Loyal'."
  },
  {
    id: 18,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "What is the meaning of: 'Status quo'?",
    questionHi: "विदेशी वाक्यांश 'Status quo' का अर्थ क्या है?",
    options: [
      { id: "A", textEn: "Existing state of affairs", textHi: "यथास्थिति (वर्तमान स्थिति)" },
      { id: "B", textEn: "High social standing", textHi: "उच्च सामाजिक प्रतिष्ठा" },
      { id: "C", textEn: "A sudden revolution", textHi: "आकस्मिक क्रांति" },
      { id: "D", textEn: "A legal inquiry", textHi: "कानूनी जांच" }
    ],
    correctAnswer: "A",
    explanation: "'Status quo' refers to the existing state of affairs, especially regarding social or political issues."
  },
  {
    id: 19,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Synonym of: 'VALOR'",
    questionHi: "शब्द 'VALOR' (वीरता / शौर्य) का समानार्थी शब्द क्या है?",
    options: [
      { id: "A", textEn: "Courage / Bravery", textHi: "साहस / वीरता" },
      { id: "B", textEn: "Fear", textHi: "डर" },
      { id: "C", textEn: "Weakness", textHi: "कमजोरी" },
      { id: "D", textEn: "Cowardice", textHi: "कायरता" }
    ],
    correctAnswer: "A",
    explanation: "'Valor' is great courage in the face of danger, especially in battle."
  },
  {
    id: 20,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Select the sentence with correct punctuation and grammar:",
    questionHi: "व्याकरण और विराम-चिह्नों की दृष्टि से शुद्ध वाक्य चुनिए:",
    options: [
      { id: "A", textEn: "The officer said, \"March forward without hesitation.\"", textHi: "The officer said, \"March forward without hesitation.\"" },
      { id: "B", textEn: "The officer said \"March forward without hesitation.\"", textHi: "The officer said \"March forward without hesitation.\"" },
      { id: "C", textEn: "The officer said, \"march forward without hesitation.\"", textHi: "The officer said, \"march forward without hesitation.\"" },
      { id: "D", textEn: "The officer said, March forward without hesitation.", textHi: "The officer said, March forward without hesitation." }
    ],
    correctAnswer: "A",
    explanation: "Direct speech requires a comma after reporting verb and quotation marks with capital initial letter."
  },
  {
    id: 21,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "One-word substitute: 'A post with high salary but no work.'",
    questionHi: "एक शब्द प्रतिस्थापन: 'ऐसा पद जिसमें काम कम या नगण्य हो परंतु वेतन बहुत अच्छा हो'",
    options: [
      { id: "A", textEn: "Sinecure", textHi: "Sinecure (आराम की नौकरी)" },
      { id: "B", textEn: "Honorary", textHi: "Honorary" },
      { id: "C", textEn: "Autocracy", textHi: "Autocracy" },
      { id: "D", textEn: "Bureaucracy", textHi: "Bureaucracy" }
    ],
    correctAnswer: "A",
    explanation: "A 'Sinecure' is a position requiring little or no work but yielding financial benefits."
  },
  {
    id: 22,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Antonym of: 'COVERT'",
    questionHi: "शब्द 'COVERT' (गुप्त / प्रच्छन्न) का विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "Overt / Open", textHi: "प्रत्यक्ष / खुला (Overt)" },
      { id: "B", textEn: "Secret", textHi: "गुप्त" },
      { id: "C", textEn: "Stealthy", textHi: "छिपा हुआ" },
      { id: "D", textEn: "Hidden", textHi: "अदृश्य" }
    ],
    correctAnswer: "A",
    explanation: "'Covert' means not openly acknowledged or displayed. The antonym is 'Overt'."
  },
  {
    id: 23,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Meaning of the idiom: 'Bite the bullet'",
    questionHi: "मुहावरे 'Bite the bullet' का अर्थ क्या है?",
    options: [
      { id: "A", textEn: "To endure a painful situation with courage", textHi: "साहसपूर्वक किसी अप्रिय या कठिन परिस्थिति का सामना करना" },
      { id: "B", textEn: "To chew metal", textHi: "धातु चबाना" },
      { id: "C", textEn: "To make a deadly mistake", textHi: "घातक गलती करना" },
      { id: "D", textEn: "To get wounded in combat", textHi: "युद्ध में घायल होना" }
    ],
    correctAnswer: "A",
    explanation: "'To bite the bullet' means to face a difficult or painful situation with fortitude."
  },
  {
    id: 24,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Fill in the blank: The General was accompanied _______ his senior aides.",
    questionHi: "रिक्त स्थान भरें: The General was accompanied _______ his senior aides.",
    options: [
      { id: "A", textEn: "by", textHi: "by" },
      { id: "B", textEn: "with", textHi: "with" },
      { id: "C", textEn: "of", textHi: "of" },
      { id: "D", textEn: "at", textHi: "at" }
    ],
    correctAnswer: "A",
    explanation: "A person is accompanied 'by' another person."
  },
  {
    id: 25,
    section: "def_eng",
    sectionName: "1. English Language & Vocabulary",
    questionEn: "Synonym of: 'TACTICAL'",
    questionHi: "शब्द 'TACTICAL' (रणनीतिक) का पर्यायवाची शब्द क्या है?",
    options: [
      { id: "A", textEn: "Strategic / Planned", textHi: "रणनीतिक / सुनियोजित" },
      { id: "B", textEn: "Careless", textHi: "लापरवाह" },
      { id: "C", textEn: "Impulsive", textHi: "आवेगपूर्ण" },
      { id: "D", textEn: "Random", textHi: "यादृच्छिक" }
    ],
    correctAnswer: "A",
    explanation: "'Tactical' relates to actions carefully planned to gain a specific military or competitive end."
  },

  // =======================================================
  // SECTION 2: GENERAL SCIENCE (Q26 - Q50)
  // =======================================================
  {
    id: 26,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the escape velocity from the surface of the Earth?",
    questionHi: "पृथ्वी की सतह से पलायन वेग (Escape Velocity) का मान कितना है?",
    options: [
      { id: "A", textEn: "11.2 km/s", textHi: "11.2 किमी/सेकंड" },
      { id: "B", textEn: "9.8 km/s", textHi: "9.8 किमी/सेकंड" },
      { id: "C", textEn: "2.4 km/s (Moon)", textHi: "2.4 किमी/सेकंड" },
      { id: "D", textEn: "42 km/s", textHi: "42 किमी/सेकंड" }
    ],
    correctAnswer: "A",
    explanation: "Escape velocity ve = √(2gR) ≈ 11.2 km/s on Earth's surface."
  },
  {
    id: 27,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "RADAR stands for:",
    questionHi: "RADAR (रडार) का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Radio Detection and Ranging", textHi: "Radio Detection and Ranging" },
      { id: "B", textEn: "Radio Distance and Ranging", textHi: "Radio Distance and Ranging" },
      { id: "C", textEn: "Radiation Detection and Ranging", textHi: "Radiation Detection and Ranging" },
      { id: "D", textEn: "Radio Direction and Reflection", textHi: "Radio Direction and Reflection" }
    ],
    correctAnswer: "A",
    explanation: "RADAR stands for Radio Detection and Ranging, using electromagnetic radio waves to determine range and velocity."
  },
  {
    id: 28,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "SONAR, used by submarines for underwater navigation, utilizes which type of waves?",
    questionHi: "पनडुब्बियों द्वारा जलमग्न नेविगेशन हेतु प्रयुक्त सोनार (SONAR) में किन तरंगों का उपयोग होता है?",
    options: [
      { id: "A", textEn: "Ultrasonic sound waves", textHi: "पराश्रव्य ध्वनि तरंगें (Ultrasonic Waves)" },
      { id: "B", textEn: "Infrasonic waves", textHi: "अपश्रव्य तरंगें" },
      { id: "C", textEn: "Radio waves", textHi: "रेडियो तरंगें" },
      { id: "D", textEn: "X-rays", textHi: "एक्स-रे" }
    ],
    correctAnswer: "A",
    explanation: "SONAR (Sound Navigation and Ranging) emits high-frequency ultrasonic waves (>20 kHz) to detect underwater obstacles."
  },
  {
    id: 29,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the working principle of a rocket or missile propulsion?",
    questionHi: "रॉकेट या मिसाइल प्रणोदन किस भौतिक सिद्धांत पर कार्य करता है?",
    options: [
      { id: "A", textEn: "Conservation of Linear Momentum (Newton's 3rd Law)", textHi: "रेखीय संवेग संरक्षण (न्यूटन का तीसरा नियम)" },
      { id: "B", textEn: "Bernoulli's Principle", textHi: "बरनौली का सिद्धांत" },
      { id: "C", textEn: "Archimedes' Principle", textHi: "आर्कमिडीज का सिद्धांत" },
      { id: "D", textEn: "Conservation of Mass", textHi: "द्रव्यमान संरक्षण" }
    ],
    correctAnswer: "A",
    explanation: "Rocket engines expel high-speed exhaust backward; by conservation of linear momentum, the rocket accelerates forward."
  },
  {
    id: 30,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which radioactive isotope is commonly used as fuel in nuclear reactors and submarines?",
    questionHi: "परमाणु रिएक्टरों और परमाणु पनडुब्बियों में ईंधन के रूप में किस समस्थानिक का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Uranium-235", textHi: "यूरेनियम-235 (U-235)" },
      { id: "B", textEn: "Uranium-238", textHi: "यूरेनियम-238" },
      { id: "C", textEn: "Carbon-14", textHi: "कार्बन-14" },
      { id: "D", textEn: "Cobalt-60", textHi: "कोबाल्ट-60" }
    ],
    correctAnswer: "A",
    explanation: "Uranium-235 is fissile by thermal neutrons and sustains nuclear chain reactions."
  },
  {
    id: 31,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the main chemical component of TNT (Trinitrotoluene), a military explosive?",
    questionHi: "सैन्य विस्फोटक टीएनटी (Trinitrotoluene) का रासायनिक आधार क्या है?",
    options: [
      { id: "A", textEn: "Nitrated Toluene (C7H5N3O6)", textHi: "नाइट्रेटेड टोल्यूनि (C7H5N3O6)" },
      { id: "B", textEn: "Ammonium Nitrate", textHi: "अमोनियम नाइट्रेट" },
      { id: "C", textEn: "Nitroglycerin", textHi: "नाइट्रोग्लिसरीन" },
      { id: "D", textEn: "Potassium Chlorate", textHi: "पोटेशियम क्लोरेट" }
    ],
    correctAnswer: "A",
    explanation: "TNT is 2,4,6-trinitrotoluene, a stable high explosive used as a standard measure for explosions."
  },
  {
    id: 32,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Night vision goggles and sensors operate by detecting which electromagnetic radiation?",
    questionHi: "नाइट विज़न गॉगल्स किस विद्युत-चुंबकीय विकिरण को पहचानकर कार्य करते हैं?",
    options: [
      { id: "A", textEn: "Infrared radiation (IR)", textHi: "अवरक्त विकिरण (Infrared Rays)" },
      { id: "B", textEn: "Ultraviolet rays", textHi: "पराबैंगनी किरणें" },
      { id: "C", textEn: "X-rays", textHi: "एक्स-रे" },
      { id: "D", textEn: "Microwaves", textHi: "माइक्रोवेव" }
    ],
    correctAnswer: "A",
    explanation: "Thermal imaging night-vision devices detect infrared light emitted by heat-producing objects like human bodies and vehicle engines."
  },
  {
    id: 33,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What enables fighter jets and supersonic aircraft to generate a 'Sonic Boom'?",
    questionHi: "लड़ाकू विमान किस गति को पार करने पर 'सोनिक बूम' (Sonic Boom) उत्पन्न करते हैं?",
    options: [
      { id: "A", textEn: "Exceeding the speed of sound (Mach > 1)", textHi: "ध्वनि की गति (मैक 1) से अधिक गति प्राप्त करने पर" },
      { id: "B", textEn: "Exceeding the speed of light", textHi: "प्रकाश की गति से अधिक" },
      { id: "C", textEn: "Flying at high altitude", textHi: "अधिक ऊंचाई पर उड़ने से" },
      { id: "D", textEn: "Using afterburners", textHi: "आफ्टरबर्नर जलाने से" }
    ],
    correctAnswer: "A",
    explanation: "When an aircraft travels faster than sound (Mach > 1), shock waves coalesce into a loud thunderclap called a sonic boom."
  },
  {
    id: 34,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which bulletproof material is widely used in making combat helmets and body armor vests?",
    questionHi: "बुलेटप्रूफ जैकेट और लड़ाकू हेलमेट बनाने के लिए किस सिंथेटिक फाइबर का व्यापक उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Kevlar (Aramid fiber)", textHi: "केवलर (Kevlar)" },
      { id: "B", textEn: "Nylon 6,6", textHi: "नायलॉन 6,6" },
      { id: "C", textEn: "Rayon", textHi: "रेयान" },
      { id: "D", textEn: "Teflon", textHi: "टेफ्लॉन" }
    ],
    correctAnswer: "A",
    explanation: "Kevlar is a heat-resistant, high-tensile aramid synthetic fiber five times stronger than steel on an equal weight basis."
  },
  {
    id: 35,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the unit used to measure weapon caliber or supersonic speed?",
    questionHi: "सुपरसोनिक विमानों की गति किस अनुपात में मापी जाती है?",
    options: [
      { id: "A", textEn: "Mach Number", textHi: "मैक संख्या (Mach Number)" },
      { id: "B", textEn: "Knot", textHi: "नॉट" },
      { id: "C", textEn: "Joule", textHi: "जूल" },
      { id: "D", textEn: "Newton", textHi: "न्यूटन" }
    ],
    correctAnswer: "A",
    explanation: "Mach number is the dimensionless ratio of the speed of an object to the local speed of sound."
  },
  {
    id: 36,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Bernoulli's principle explains the aerodynamic lift generation on which part of an aircraft?",
    questionHi: "बरनौली का प्रमेय विमान के किस भाग पर वायुगतिकीय लिफ्ट (Lift) उत्पन्न करने की व्याख्या करता है?",
    options: [
      { id: "A", textEn: "Wings (Airfoil shape)", textHi: "विमान के डैने / पंख (Airfoil)" },
      { id: "B", textEn: "Propeller", textHi: "प्रोपेलर" },
      { id: "C", textEn: "Landing gear", textHi: "लैंडिंग गियर" },
      { id: "D", textEn: "Fuselage", textHi: "फ्यूजलेज" },
    ],
    correctAnswer: "A",
    explanation: "Higher airspeed over the curved upper surface of an airfoil creates lower pressure than underneath, generating lift."
  },
  {
    id: 37,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which organelle is called the suicidal bag of the cell?",
    questionHi: "कोशिका की आत्मघाती थैली (Suicide Bag) किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Lysosome", textHi: "लाइसोसोम (Lysosome)" },
      { id: "B", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "C", textEn: "Centrosome", textHi: "सेंट्रोसोम" },
      { id: "D", textEn: "Plastid", textHi: "प्लास्टिड" }
    ],
    correctAnswer: "A",
    explanation: "Lysosomes contain digestive enzymes that break down waste; upon membrane rupture, they autolyze the cell."
  },
  {
    id: 38,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the primary gas found in natural gas and biogas?",
    questionHi: "बायोगैस और सीएनजी का मुख्य घटक कौन सी गैस है?",
    options: [
      { id: "A", textEn: "Methane (CH4)", textHi: "मीथेन (CH4)" },
      { id: "B", textEn: "Propane", textHi: "प्रोपेन" },
      { id: "C", textEn: "Butane", textHi: "ब्यूटेन" },
      { id: "D", textEn: "Ethane", textHi: "ईथेन" }
    ],
    correctAnswer: "A",
    explanation: "Methane makes up 75-90% of natural gas and CNG."
  },
  {
    id: 39,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Heavy water (D2O) is used in nuclear reactors primarily as:",
    questionHi: "परमाणु रिएक्टरों में भारी जल (D2O) का मुख्य उपयोग किस रूप में होता है?",
    options: [
      { id: "A", textEn: "Moderator and Coolant", textHi: "मंदक और शीतलक (Moderator & Coolant)" },
      { id: "B", textEn: "Nuclear Fuel", textHi: "परमाणु ईंधन" },
      { id: "C", textEn: "Control rod", textHi: "नियंत्रक छड़" },
      { id: "D", textEn: "Radiation shield", textHi: "विकिरण ढाल" }
    ],
    correctAnswer: "A",
    explanation: "Deuterium oxide slows fast neutrons (moderator) and extracts heat from the reactor core (coolant)."
  },
  {
    id: 40,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the SI unit of Magnetic Flux Density?",
    questionHi: "चुंबकीय फ्लक्स घनत्व (Magnetic Flux Density) का SI मात्रक क्या है?",
    options: [
      { id: "A", textEn: "Tesla (T)", textHi: "टेस्ला (Tesla)" },
      { id: "B", textEn: "Weber (Wb)", textHi: "वेबर" },
      { id: "C", textEn: "Henry (H)", textHi: "हेनरी" },
      { id: "D", textEn: "Gauss", textHi: "गॉस" }
    ],
    correctAnswer: "A",
    explanation: "Magnetic flux density is measured in Tesla (1 T = 1 Wb/m²). Weber is magnetic flux."
  },
  {
    id: 41,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the chemical name of tear gas used for riot control?",
    questionHi: "भीड़ नियंत्रण में प्रयुक्त अश्रु गैस (Tear Gas) का रासायनिक नाम क्या है?",
    options: [
      { id: "A", textEn: "CS Gas (2-Chlorobenzalmalononitrile)", textHi: "CS गैस (Chlorobenzalmalononitrile)" },
      { id: "B", textEn: "Nitrous oxide", textHi: "नाइट्रस ऑक्साइड" },
      { id: "C", textEn: "Mustard gas", textHi: "मस्टर्ड गैस" },
      { id: "D", textEn: "Phosgene", textHi: "फॉस्जीन" }
    ],
    correctAnswer: "A",
    explanation: "CS gas and chloropicrin cause burning tears, temporary blindness, and coughing, commonly used in non-lethal riot control."
  },
  {
    id: 42,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which organ produces insulin in the human body?",
    questionHi: "मानव शरीर में इंसुलिन हार्मोन का उत्पादन किस अंग द्वारा होता है?",
    options: [
      { id: "A", textEn: "Pancreas (Islets of Langerhans)", textHi: "अग्न्याशय (Pancreas)" },
      { id: "B", textEn: "Liver", textHi: "यकृत" },
      { id: "C", textEn: "Thyroid", textHi: "थायरॉयड" },
      { id: "D", textEn: "Kidney", textHi: "वृक्क" }
    ],
    correctAnswer: "A",
    explanation: "Beta cells in the Islets of Langerhans within the pancreas secrete insulin to regulate blood glucose."
  },
  {
    id: 43,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What causes the sky to appear blue during the day?",
    questionHi: "दिन के समय आकाश का रंग नीला किस कारण दिखाई देता है?",
    options: [
      { id: "A", textEn: "Rayleigh scattering of shorter blue wavelengths", textHi: "नीले प्रकाश का रेले प्रकीर्णन (Rayleigh Scattering)" },
      { id: "B", textEn: "Refraction of sunlight", textHi: "अपवर्तन" },
      { id: "C", textEn: "Diffraction", textHi: "विवर्तन" },
      { id: "D", textEn: "Total internal reflection", textHi: "पूर्ण आंतरिक परावर्तन" }
    ],
    correctAnswer: "A",
    explanation: "Air molecules scatter shorter blue wavelengths far more intensely than longer red wavelengths."
  },
  {
    id: 44,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is an alloy of Copper and Tin called?",
    questionHi: "तांबा (Copper) और टिन (Tin) की मिश्र धातु को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Bronze (कांस्य)", textHi: "कांसा / ब्रॉन्ज (Bronze)" },
      { id: "B", textEn: "Brass (पीतल - Cu + Zn)", textHi: "पीतल" },
      { id: "C", textEn: "Solder (Pb + Sn)", textHi: "टांका" },
      { id: "D", textEn: "Duralumin", textHi: "ड्यूरालुमिन" }
    ],
    correctAnswer: "A",
    explanation: "Bronze is composed primarily of copper with around 12% tin."
  },
  {
    id: 45,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which law states that induced electromotive force is proportional to the rate of change of magnetic flux?",
    questionHi: "किस नियम के अनुसार प्रेरित विद्युत वाहक बल चुंबकीय फ्लक्स के परिवर्तन की दर के समानुपाती होता है?",
    options: [
      { id: "A", textEn: "Faraday's Law of Electromagnetic Induction", textHi: "फैराडे का विद्युत-चुंबकीय प्रेरण का नियम" },
      { id: "B", textEn: "Ohm's Law", textHi: "ओम का नियम" },
      { id: "C", textEn: "Coulomb's Law", textHi: "कूलॉम का नियम" },
      { id: "D", textEn: "Ampere's Law", textHi: "एम्पीयर का नियम" }
    ],
    correctAnswer: "A",
    explanation: "Faraday's Law states emf = -dΦ/dt."
  },
  {
    id: 46,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Optical fibers transmit communication signals over long distances based on which principle?",
    questionHi: "ऑप्टिकल फाइबर किस प्रकाशीय सिद्धांत के आधार पर डेटा संचारित करते हैं?",
    options: [
      { id: "A", textEn: "Total Internal Reflection (TIR)", textHi: "पूर्ण आंतरिक परावर्तन (TIR)" },
      { id: "B", textEn: "Diffraction", textHi: "विवर्तन" },
      { id: "C", textEn: "Scattering", textHi: "प्रकीर्णन" },
      { id: "D", textEn: "Polarization", textHi: "ध्रुवण" }
    ],
    correctAnswer: "A",
    explanation: "Light enters the high-index glass core at angles exceeding the critical angle, undergoing total internal reflection."
  },
  {
    id: 47,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which element is added to vulcanize rubber to enhance its mechanical strength for military vehicle tires?",
    questionHi: "सैन्य वाहनों के टायरों के लिए रबर को वल्कनीकृत (Vulcanize) करने हेतु किस तत्व को मिलाया जाता है?",
    options: [
      { id: "A", textEn: "Sulphur", textHi: "सल्फर / गंधक (Sulphur)" },
      { id: "B", textEn: "Carbon", textHi: "कार्बन" },
      { id: "C", textEn: "Phosphorus", textHi: "फास्फोरस" },
      { id: "D", textEn: "Silicon", textHi: "सिलिकॉन" }
    ],
    correctAnswer: "A",
    explanation: "Charles Goodyear discovered that heating natural rubber with sulfur creates cross-links, greatly increasing elasticity and toughness."
  },
  {
    id: 48,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "Which vitamin deficiency causes night blindness (Nyctalopia)?",
    questionHi: "किस विटामिन की कमी से रतौंधी (Night Blindness) रोग होता है?",
    options: [
      { id: "A", textEn: "Vitamin A (Retinol)", textHi: "विटामिन A (रेटिनॉल)" },
      { id: "B", textEn: "Vitamin B1", textHi: "विटामिन B1" },
      { id: "C", textEn: "Vitamin C", textHi: "विटामिन C" },
      { id: "D", textEn: "Vitamin D", textHi: "विटामिन D" }
    ],
    correctAnswer: "A",
    explanation: "Vitamin A is essential for synthesizing rhodopsin, the light-sensitive pigment in rod cells of the retina."
  },
  {
    id: 49,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the primary function of a gyroscope in guided missiles and aircraft?",
    questionHi: "निर्देशित मिसाइलों और लड़ाकू विमानों में जाइरोस्कोप (Gyroscope) का प्राथमिक कार्य क्या होता है?",
    options: [
      { id: "A", textEn: "To measure and maintain orientation and angular velocity", textHi: "कोणीय वेग और दिशा (Orientation) का सटीक मापन" },
      { id: "B", textEn: "To generate electrical power", textHi: "विद्युत उत्पादन" },
      { id: "C", textEn: "To cool engines", textHi: "इंजन ठंडा करना" },
      { id: "D", textEn: "To communicate with satellites", textHi: "उपग्रह संचार" }
    ],
    correctAnswer: "A",
    explanation: "Gyroscopes preserve angular momentum to provide reference orientation in inertial navigation systems."
  },
  {
    id: 50,
    section: "def_sci",
    sectionName: "2. General Science (Physics, Chem, Bio)",
    questionEn: "What is the acceleration of a freely falling body in vacuum?",
    questionHi: "निर्वात में स्वतंत्र रूप से गिरते हुए पिंड का त्वरण क्या होता है?",
    options: [
      { id: "A", textEn: "Constant (g = 9.8 m/s²), independent of mass", textHi: "स्थिर (g = 9.8 मी/से²), द्रव्यमान से स्वतंत्र" },
      { id: "B", textEn: "Proportional to mass", textHi: "द्रव्यमान के समानुपाती" },
      { id: "C", textEn: "Zero", textHi: "शून्य" },
      { id: "D", textEn: "Infinite", textHi: "अनंत" }
    ],
    correctAnswer: "A",
    explanation: "In vacuum without air resistance, all objects accelerate at g = 9.8 m/s² irrespective of their mass."
  },

  // =======================================================
  // SECTION 3: MATHEMATICS & CALCULUS (Q51 - Q75)
  // =======================================================
  {
    id: 51,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the derivative of sin(2x) with respect to x?",
    questionHi: "x के सापेक्ष sin(2x) का अवकलज (Derivative) क्या है?",
    options: [
      { id: "A", textEn: "2 cos(2x)", textHi: "2 cos(2x)" },
      { id: "B", textEn: "cos(2x)", textHi: "cos(2x)" },
      { id: "C", textEn: "-2 cos(2x)", textHi: "-2 cos(2x)" },
      { id: "D", textEn: "2 sin(2x)", textHi: "2 sin(2x)" }
    ],
    correctAnswer: "A",
    explanation: "By chain rule: d/dx[sin(2x)] = cos(2x) × 2 = 2 cos(2x)."
  },
  {
    id: 52,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "Evaluate the integral: ∫ e^(3x) dx",
    questionHi: "समाकलन ज्ञात कीजिए: ∫ e^(3x) dx",
    options: [
      { id: "A", textEn: "(1/3) e^(3x) + C", textHi: "(1/3) e^(3x) + C" },
      { id: "B", textEn: "3 e^(3x) + C", textHi: "3 e^(3x) + C" },
      { id: "C", textEn: "e^(3x) + C", textHi: "e^(3x) + C" },
      { id: "D", textEn: "(1/3) e^x + C", textHi: "(1/3) e^x + C" }
    ],
    correctAnswer: "A",
    explanation: "∫ e^(ax) dx = (1/a) e^(ax) + C. Here a = 3."
  },
  {
    id: 53,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If vector A = 2i + 3j + 4k and vector B = 3i - 2j + k, what is their dot product (A · B)?",
    questionHi: "यदि सदिश A = 2i + 3j + 4k और B = 3i - 2j + k है, तो उनका अदिश गुणनफल (A · B) क्या होगा?",
    options: [
      { id: "A", textEn: "4", textHi: "4" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "8", textHi: "8" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "A · B = (2×3) + (3×-2) + (4×1) = 6 - 6 + 4 = 4."
  },
  {
    id: 54,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the value of limit: lim (x→0) [sin(x) / x]?",
    questionHi: "सीमा (Limit) का मान ज्ञात कीजिए: lim (x→0) [sin(x) / x]?",
    options: [
      { id: "A", textEn: "1", textHi: "1" },
      { id: "B", textEn: "0", textHi: "0" },
      { id: "C", textEn: "Undefined", textHi: "अपरिभाषित" },
      { id: "D", textEn: "∞", textHi: "∞" }
    ],
    correctAnswer: "A",
    explanation: "Standard trigonometric limit: lim (x→0) sin(x)/x = 1."
  },
  {
    id: 55,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the modulus of the complex number z = 3 + 4i?",
    questionHi: "सम्मिश्र संख्या z = 3 + 4i का मापांक (Modulus) क्या है?",
    options: [
      { id: "A", textEn: "5", textHi: "5" },
      { id: "B", textEn: "7", textHi: "7" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5."
  },
  {
    id: 56,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If sin θ = 3/5, what is the value of cos θ (where θ is in first quadrant)?",
    questionHi: "यदि sin θ = 3/5 है, तो cos θ का मान क्या होगा?",
    options: [
      { id: "A", textEn: "4/5", textHi: "4/5" },
      { id: "B", textEn: "3/4", textHi: "3/4" },
      { id: "C", textEn: "5/4", textHi: "5/4" },
      { id: "D", textEn: "1/5", textHi: "1/5" }
    ],
    correctAnswer: "A",
    explanation: "cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5."
  },
  {
    id: 57,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "Find the determinant of the 2x2 matrix: [[5, 3], [2, 4]]",
    questionHi: "सारणिक का मान ज्ञात कीजिए: [[5, 3], [2, 4]]",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "26", textHi: "26" },
      { id: "C", textEn: "20", textHi: "20" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "det = (5 × 4) - (3 × 2) = 20 - 6 = 14."
  },
  {
    id: 58,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "How many ways can 5 officers be selected out of 8 officers?",
    questionHi: "8 अधिकारियों में से 5 अधिकारियों का चयन कितने प्रकार से किया जा सकता है?",
    options: [
      { id: "A", textEn: "56", textHi: "56" },
      { id: "B", textEn: "40", textHi: "40" },
      { id: "C", textEn: "120", textHi: "120" },
      { id: "D", textEn: "336", textHi: "336" }
    ],
    correctAnswer: "A",
    explanation: "8C5 = 8C3 = (8 × 7 × 6) / (3 × 2 × 1) = 56."
  },
  {
    id: 59,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the slope of a line perpendicular to 2x + 3y = 6?",
    questionHi: "रेखा 2x + 3y = 6 के लंबवत रेखा की प्रवणता (Slope) क्या होगी?",
    options: [
      { id: "A", textEn: "3/2", textHi: "3/2" },
      { id: "B", textEn: "-2/3", textHi: "-2/3" },
      { id: "C", textEn: "2/3", textHi: "2/3" },
      { id: "D", textEn: "-3/2", textHi: "-3/2" }
    ],
    correctAnswer: "A",
    explanation: "Slope m1 = -2/3. For perpendicular line, m2 = -1/m1 = 3/2."
  },
  {
    id: 60,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If the roots of x² - bx + c = 0 are 2 and 5, what are values of b and c?",
    questionHi: "यदि x² - bx + c = 0 के मूल 2 और 5 हैं, तो b और c के मान क्या हैं?",
    options: [
      { id: "A", textEn: "b = 7, c = 10", textHi: "b = 7, c = 10" },
      { id: "B", textEn: "b = -7, c = 10", textHi: "b = -7, c = 10" },
      { id: "C", textEn: "b = 10, c = 7", textHi: "b = 10, c = 7" },
      { id: "D", textEn: "b = 3, c = 10", textHi: "b = 3, c = 10" }
    ],
    correctAnswer: "A",
    explanation: "Sum of roots = 2 + 5 = 7 = b. Product of roots = 2 × 5 = 10 = c."
  },
  {
    id: 61,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the 10th term of the AP: 2, 7, 12, 17...?",
    questionHi: "समांतर श्रेणी 2, 7, 12, 17... का 10वां पद क्या होगा?",
    options: [
      { id: "A", textEn: "47", textHi: "47" },
      { id: "B", textEn: "52", textHi: "52" },
      { id: "C", textEn: "45", textHi: "45" },
      { id: "D", textEn: "50", textHi: "50" }
    ],
    correctAnswer: "A",
    explanation: "Tn = a + (n - 1)d = 2 + (10 - 1)×5 = 2 + 45 = 47."
  },
  {
    id: 62,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "Two dice are rolled together. What is the probability of getting a sum of 7?",
    questionHi: "दो पासे एक साथ फेंके जाते हैं। योग 7 आने की प्रायिकता क्या है?",
    options: [
      { id: "A", textEn: "1/6", textHi: "1/6" },
      { id: "B", textEn: "1/12", textHi: "1/12" },
      { id: "C", textEn: "5/36", textHi: "5/36" },
      { id: "D", textEn: "7/36", textHi: "7/36" }
    ],
    correctAnswer: "A",
    explanation: "Pairs yielding 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes out of 36. P = 6/36 = 1/6."
  },
  {
    id: 63,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the value of tan(45°) + cot(45°)?",
    questionHi: "tan(45°) + cot(45°) का मान क्या है?",
    options: [
      { id: "A", textEn: "2", textHi: "2" },
      { id: "B", textEn: "1", textHi: "1" },
      { id: "C", textEn: "0", textHi: "0" },
      { id: "D", textEn: "√2", textHi: "√2" }
    ],
    correctAnswer: "A",
    explanation: "tan(45°) = 1, cot(45°) = 1. Sum = 1 + 1 = 2."
  },
  {
    id: 64,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the distance between the points (1, 2) and (4, 6)?",
    questionHi: "बिंदुओं (1, 2) और (4, 6) के बीच की दूरी क्या है?",
    options: [
      { id: "A", textEn: "5 units", textHi: "5 मात्रक" },
      { id: "B", textEn: "7 units", textHi: "7 मात्रक" },
      { id: "C", textEn: "4 units", textHi: "4 मात्रक" },
      { id: "D", textEn: "6 units", textHi: "6 मात्रक" }
    ],
    correctAnswer: "A",
    explanation: "Distance = √[(4-1)² + (6-2)²] = √(3² + 4²) = √25 = 5."
  },
  {
    id: 65,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the range of the projectile fired at velocity v and angle 45°?",
    questionHi: "45° के कोण पर वेग v से दागे गए प्रक्षेप्य का परास (Range) क्या होता है?",
    options: [
      { id: "A", textEn: "v² / g (Maximum Range)", textHi: "v² / g (अधिकतम परास)" },
      { id: "B", textEn: "v² / 2g", textHi: "v² / 2g" },
      { id: "C", textEn: "2v / g", textHi: "2v / g" },
      { id: "D", textEn: "v² sin(45°) / g", textHi: "v² sin(45°) / g" }
    ],
    correctAnswer: "A",
    explanation: "R = (v² sin 2θ) / g. For θ = 45°, sin(90°) = 1, so Rmax = v² / g."
  },
  {
    id: 66,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If log10(x) = 3, what is the value of x?",
    questionHi: "यदि log10(x) = 3 है, तो x का मान क्या होगा?",
    options: [
      { id: "A", textEn: "1000", textHi: "1000" },
      { id: "B", textEn: "30", textHi: "30" },
      { id: "C", textEn: "100", textHi: "100" },
      { id: "D", textEn: "300", textHi: "300" }
    ],
    correctAnswer: "A",
    explanation: "log10(x) = 3 => x = 10³ = 1000."
  },
  {
    id: 67,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "Find the radius of the circle: x² + y² - 4x - 6y - 12 = 0",
    questionHi: "वृत्त x² + y² - 4x - 6y - 12 = 0 की त्रिज्या ज्ञात कीजिए:",
    options: [
      { id: "A", textEn: "5 units", textHi: "5 मात्रक" },
      { id: "B", textEn: "4 units", textHi: "4 मात्रक" },
      { id: "C", textEn: "6 units", textHi: "6 मात्रक" },
      { id: "D", textEn: "3 units", textHi: "3 मात्रक" }
    ],
    correctAnswer: "A",
    explanation: "Center = (2, 3), c = -12. Radius r = √(g² + f² - c) = √(4 + 9 - (-12)) = √25 = 5."
  },
  {
    id: 68,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the value of: i⁴ + i⁸ + i¹² + i¹⁶ (where i = √-1)?",
    questionHi: "i⁴ + i⁸ + i¹² + i¹⁶ का मान क्या है (जहाँ i = √-1)?",
    options: [
      { id: "A", textEn: "4", textHi: "4" },
      { id: "B", textEn: "0", textHi: "0" },
      { id: "C", textEn: "-4", textHi: "-4" },
      { id: "D", textEn: "4i", textHi: "4i" }
    ],
    correctAnswer: "A",
    explanation: "Since i⁴ = 1, each term equals 1: 1 + 1 + 1 + 1 = 4."
  },
  {
    id: 69,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the solution of the differential equation dy/dx = y?",
    questionHi: "अवकल समीकरण dy/dx = y का हल क्या है?",
    options: [
      { id: "A", textEn: "y = C e^x", textHi: "y = C e^x" },
      { id: "B", textEn: "y = x + C", textHi: "y = x + C" },
      { id: "C", textEn: "y = C e^(-x)", textHi: "y = C e^(-x)" },
      { id: "D", textEn: "y = ln(x) + C", textHi: "y = ln(x) + C" }
    ],
    correctAnswer: "A",
    explanation: "dy/y = dx => ln(y) = x + c => y = C e^x."
  },
  {
    id: 70,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the sum of angles of a regular hexagon?",
    questionHi: "एक सम-षट्भुज (Hexagon) के सभी अंतःकोणों का योग कितना होता है?",
    options: [
      { id: "A", textEn: "720°", textHi: "720°" },
      { id: "B", textEn: "540°", textHi: "540°" },
      { id: "C", textEn: "360°", textHi: "360°" },
      { id: "D", textEn: "1080°", textHi: "1080°" }
    ],
    correctAnswer: "A",
    explanation: "Sum = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°."
  },
  {
    id: 71,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "Find the mean of the numbers: 10, 15, 20, 25, 30.",
    questionHi: "संख्याओं 10, 15, 20, 25, 30 का माध्य क्या है?",
    options: [
      { id: "A", textEn: "20", textHi: "20" },
      { id: "B", textEn: "22", textHi: "22" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "25", textHi: "25" }
    ],
    correctAnswer: "A",
    explanation: "Sum = 100 / 5 = 20."
  },
  {
    id: 72,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the value of cos(60°) × cos(30°) - sin(60°) × sin(30°)?",
    questionHi: "cos(60°) cos(30°) - sin(60°) sin(30°) का मान क्या है?",
    options: [
      { id: "A", textEn: "0", textHi: "0 [cos(60°+30°) = cos(90°)]" },
      { id: "B", textEn: "1", textHi: "1" },
      { id: "C", textEn: "1/2", textHi: "1/2" },
      { id: "D", textEn: "√3/2", textHi: "√3/2" }
    ],
    correctAnswer: "A",
    explanation: "Formula: cos(A + B) = cos A cos B - sin A sin B => cos(60° + 30°) = cos(90°) = 0."
  },
  {
    id: 73,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If the probability of hitting a target is 0.8, what is the probability of missing it?",
    questionHi: "यदि किसी निशाने पर गोली लगने की प्रायिकता 0.8 है, तो चूकने की प्रायिकता क्या होगी?",
    options: [
      { id: "A", textEn: "0.2", textHi: "0.2" },
      { id: "B", textEn: "0.1", textHi: "0.1" },
      { id: "C", textEn: "0.02", textHi: "0.02" },
      { id: "D", textEn: "0.4", textHi: "0.4" }
    ],
    correctAnswer: "A",
    explanation: "P(miss) = 1 - P(hit) = 1 - 0.8 = 0.2."
  },
  {
    id: 74,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "What is the area bounded by y = x², the x-axis, and lines x = 0 to x = 3?",
    questionHi: "वक्र y = x², x-अक्ष तथा रेखाओं x = 0 से x = 3 के बीच का क्षेत्रफल क्या है?",
    options: [
      { id: "A", textEn: "9 sq units", textHi: "9 वर्ग मात्रक" },
      { id: "B", textEn: "27 sq units", textHi: "27 वर्ग मात्रक" },
      { id: "C", textEn: "3 sq units", textHi: "3 वर्ग मात्रक" },
      { id: "D", textEn: "18 sq units", textHi: "18 वर्ग मात्रक" }
    ],
    correctAnswer: "A",
    explanation: "∫(0 to 3) x² dx = [x³ / 3](0 to 3) = 27 / 3 = 9."
  },
  {
    id: 75,
    section: "def_math",
    sectionName: "3. Mathematics & Calculus",
    questionEn: "If matrix A is symmetric, then A^T equals:",
    questionHi: "यदि आव्यूह A एक सममित (Symmetric) आव्यूह है, तो A^T किसके बराबर होगा?",
    options: [
      { id: "A", textEn: "A", textHi: "A" },
      { id: "B", textEn: "-A", textHi: "-A (विषम सममित)" },
      { id: "C", textEn: "I", textHi: "I" },
      { id: "D", textEn: "0", textHi: "0" }
    ],
    correctAnswer: "A",
    explanation: "By definition, a matrix is symmetric if its transpose equals itself (A^T = A)."
  },

  // =======================================================
  // SECTION 4: GK & DEFENCE AWARENESS (Q76 - Q100)
  // =======================================================
  {
    id: 76,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Who is the Supreme Commander of the Indian Armed Forces?",
    questionHi: "भारतीय सशस्त्र बलों के सर्वोच्च कमांडर कौन होते हैं?",
    options: [
      { id: "A", textEn: "President of India", textHi: "भारत के राष्ट्रपति (President of India)" },
      { id: "B", textEn: "Prime Minister", textHi: "प्रधानमंत्री" },
      { id: "C", textEn: "Chief of Defence Staff (CDS)", textHi: "सीडीएस" },
      { id: "D", textEn: "Defence Minister", textHi: "रक्षामंत्री" }
    ],
    correctAnswer: "A",
    explanation: "Under Article 53(2) of the Constitution of India, the Supreme Command of the Defence Forces of the Union is vested in the President."
  },
  {
    id: 77,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "When is Indian Army Day celebrated annually?",
    questionHi: "भारतीय सेना दिवस (Army Day) प्रतिवर्ष किस तिथि को मनाया जाता है?",
    options: [
      { id: "A", textEn: "15 January", textHi: "15 जनवरी" },
      { id: "B", textEn: "8 October", textHi: "8 अक्टूबर (वायुसेना दिवस)" },
      { id: "C", textEn: "4 December", textHi: "4 दिसंबर (नौसेना दिवस)" },
      { id: "D", textEn: "26 July", textHi: "26 जुलाई (कारगिल विजय दिवस)" }
    ],
    correctAnswer: "A",
    explanation: "Army Day marks Field Marshal K.M. Cariappa taking over as the first Indian Commander-in-Chief on 15 January 1949."
  },
  {
    id: 78,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Where is the National Defence Academy (NDA) located?",
    questionHi: "राष्ट्रीय रक्षा अकादमी (NDA) कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Khadakwasla (Pune, Maharashtra)", textHi: "खड़कवासला (पुणे, महाराष्ट्र)" },
      { id: "B", textEn: "Dehradun (Uttarakhand)", textHi: "देहरादून (IMA)" },
      { id: "C", textEn: "Dundigal (Hyderabad)", textHi: "डुंडीगल (AFA)" },
      { id: "D", textEn: "Ezhimala (Kerala)", textHi: "एझिमाला (INA)" }
    ],
    correctAnswer: "A",
    explanation: "The NDA is situated at Khadakwasla, Pune. The Indian Military Academy (IMA) is in Dehradun."
  },
  {
    id: 79,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is India's highest wartime gallantry decoration award?",
    questionHi: "भारत का सर्वोच्च युद्धकालीन वीरता पुरस्कार कौन सा है?",
    options: [
      { id: "A", textEn: "Param Vir Chakra (PVC)", textHi: "परमवीर चक्र (Param Vir Chakra)" },
      { id: "B", textEn: "Maha Vir Chakra", textHi: "महावीर चक्र" },
      { id: "C", textEn: "Ashoka Chakra", textHi: "अशोक चक्र (शांतिकाल का सर्वोच्च)" },
      { id: "D", textEn: "Kirti Chakra", textHi: "कीर्ति चक्र" }
    ],
    correctAnswer: "A",
    explanation: "Param Vir Chakra (PVC) is India's highest military decoration awarded for highest degree of valor in the presence of the enemy."
  },
  {
    id: 80,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Who was the first Chief of Defence Staff (CDS) of India?",
    questionHi: "भारत के प्रथम चीफ ऑफ डिफेंस स्टाफ (CDS) कौन थे?",
    options: [
      { id: "A", textEn: "General Bipin Rawat", textHi: "जनरल बिपिन रावत" },
      { id: "B", textEn: "General Anil Chauhan", textHi: "जनरल अनिल चौहान" },
      { id: "C", textEn: "General Manoj Mukund Naravane", textHi: "जनरल एम.एम. नरवणे" },
      { id: "D", textEn: "General Sam Manekshaw", textHi: "जनरल सैम मानेकशॉ" }
    ],
    correctAnswer: "A",
    explanation: "General Bipin Rawat took office as India's first Chief of Defence Staff on 1 January 2020."
  },
  {
    id: 81,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the range of India's intercontinental ballistic missile 'Agni-V'?",
    questionHi: "भारत की अंतरमहाद्वीपीय बैलिस्टिक मिसाइल 'अग्नि-V' की मारक क्षमता कितनी है?",
    options: [
      { id: "A", textEn: "5,000+ km", textHi: "5,000+ किमी" },
      { id: "B", textEn: "1,000 km", textHi: "1,000 किमी" },
      { id: "C", textEn: "2,500 km", textHi: "2,500 किमी" },
      { id: "D", textEn: "700 km", textHi: "700 किमी" }
    ],
    correctAnswer: "A",
    explanation: "Agni-V is an ICBM developed by DRDO with a strike range exceeding 5,000 km."
  },
  {
    id: 82,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the motto of the Indian Army?",
    questionHi: "भारतीय सेना का आदर्श वाक्य क्या है?",
    options: [
      { id: "A", textEn: "Service Before Self (सेवा परमो धर्मः)", textHi: "सेवा परमो धर्मः (Service Before Self)" },
      { id: "B", textEn: "Touch the Sky with Glory (नभः स्पृशं दीप्तम्)", textHi: "नभः स्पृशं दीप्तम् (वायुसेना)" },
      { id: "C", textEn: "May the Lord of Water be auspicious unto us (शं नो वरुणः)", textHi: "शं नो वरुणः (नौसेना)" },
      { id: "D", textEn: "Valour and Faith", textHi: "शौर्य और निष्ठा" }
    ],
    correctAnswer: "A",
    explanation: "'Service Before Self' (सेवा परमो धर्मः) is the official motto of the Indian Army."
  },
  {
    id: 83,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is 'INS Vikrant'?",
    questionHi: "'आईएनएस विक्रांत' क्या है?",
    options: [
      { id: "A", textEn: "India's first indigenously built Aircraft Carrier (IAC-1)", textHi: "भारत का पहला स्वदेशी विमानवाहक पोत (IAC-1)" },
      { id: "B", textEn: "Nuclear Submarine", textHi: "परमाणु पनडुब्बी" },
      { id: "C", textEn: "Guided Missile Destroyer", textHi: "गाइडेड मिसाइल डिस्ट्रॉयर" },
      { id: "D", textEn: "Stealth Frigate", textHi: "स्टील्थ फ्रिगेट" }
    ],
    correctAnswer: "A",
    explanation: "INS Vikrant, commissioned in September 2022, is India's first indigenously designed and built aircraft carrier."
  },
  {
    id: 84,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What was the operational codename of the 1999 Kargil War military operation by the Indian Army?",
    questionHi: "1999 के कारगिल युद्ध के दौरान भारतीय सेना द्वारा चलाए गए सैन्य अभियान का कोडनेम क्या था?",
    options: [
      { id: "A", textEn: "Operation Vijay", textHi: "ऑपरेशन विजय (Operation Vijay)" },
      { id: "B", textEn: "Operation Meghdoot (Siachen 1984)", textHi: "ऑपरेशन मेघदूत" },
      { id: "C", textEn: "Operation Safed Sagar (Air Force)", textHi: "ऑपरेशन सफेद सागर" },
      { id: "D", textEn: "Operation Parakram", textHi: "ऑपरेशन पराक्रम" }
    ],
    correctAnswer: "A",
    explanation: "Operation Vijay was launched in May 1999 to clear Pakistani intruders from Kargil heights. Kargil Vijay Diwas is 26 July."
  },
  {
    id: 85,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is 'BrahMos'?",
    questionHi: "'ब्रह्मोस' (BrahMos) क्या है?",
    options: [
      { id: "A", textEn: "Supersonic Cruise Missile (Indo-Russian joint venture)", textHi: "सुपरसोनिक क्रूज मिसाइल (भारत-रूस संयुक्त उपक्रम)" },
      { id: "B", textEn: "Submarine", textHi: "पनडुब्बी" },
      { id: "C", textEn: "Main Battle Tank", textHi: "मुख्य युद्धक टैंक" },
      { id: "D", textEn: "Fighter Aircraft", textHi: "लड़ाकू विमान" }
    ],
    correctAnswer: "A",
    explanation: "BrahMos (named after Brahmaputra and Moskva rivers) is the world's fastest supersonic cruise missile (Mach 2.8 - 3.0)."
  },
  {
    id: 86,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Which is the highest military combat battlefield in the world?",
    questionHi: "विश्व का सबसे ऊंचा सैन्य युद्धक्षेत्र कौन सा है?",
    options: [
      { id: "A", textEn: "Siachen Glacier (Karakoram Range)", textHi: "सियाचिन ग्लेशियर (Siachen Glacier)" },
      { id: "B", textEn: "Galwan Valley", textHi: "गलवान घाटी" },
      { id: "C", textEn: "Doklam Plateau", textHi: "डोकलाम" },
      { id: "D", textEn: "Tiger Hill", textHi: "टाइगर हिल" }
    ],
    correctAnswer: "A",
    explanation: "Siachen Glacier in northern Ladakh stands at an altitude of approximately 20,000 feet (6,000 meters)."
  },
  {
    id: 87,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the equivalent rank in the Indian Navy to an Army Colonel?",
    questionHi: "भारतीय थलसेना के कर्नल (Colonel) के समकक्ष भारतीय नौसेना में कौन सा पद होता है?",
    options: [
      { id: "A", textEn: "Captain", textHi: "कैप्टन (Captain)" },
      { id: "B", textEn: "Commander", textHi: "कमांडर" },
      { id: "C", textEn: "Commodore", textHi: "कमोडोर" },
      { id: "D", textEn: "Lieutenant Commander", textHi: "लेफ्टिनेंट कमांडर" }
    ],
    correctAnswer: "A",
    explanation: "Army Colonel = Navy Captain = Air Force Group Captain."
  },
  {
    id: 88,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is 'Tejas'?",
    questionHi: "'तेजस' (Tejas) क्या है?",
    options: [
      { id: "A", textEn: "Indigenous Light Combat Aircraft (LCA)", textHi: "स्वदेशी हल्का लड़ाकू विमान (LCA)" },
      { id: "B", textEn: "Combat Helicopter", textHi: "लड़ाकू हेलीकॉप्टर" },
      { id: "C", textEn: "Anti-tank Missile", textHi: "एंटी-टैंक मिसाइल" },
      { id: "D", textEn: "Surface-to-air Missile", textHi: "सतह से हवा में मार करने वाली मिसाइल" }
    ],
    correctAnswer: "A",
    explanation: "HAL Tejas is an indigenous single-engine, delta wing light combat aircraft designed by ADA and produced by HAL."
  },
  {
    id: 89,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the name of the special elite forces of the Indian Air Force?",
    questionHi: "भारतीय वायुसेना के विशेष कमांडो बल का नाम क्या है?",
    options: [
      { id: "A", textEn: "Garud Commando Force", textHi: "गरुड़ कमांडो फोर्स (Garud)" },
      { id: "B", textEn: "MARCOS (Navy)", textHi: "मार्कोस (MARCOS)" },
      { id: "C", textEn: "Para SF (Army)", textHi: "पैरा एसएफ (Para SF)" },
      { id: "D", textEn: "COBRA", textHi: "कोबरा" }
    ],
    correctAnswer: "A",
    explanation: "Garud Commando Force is the special forces unit of the Indian Air Force raised in 2004."
  },
  {
    id: 90,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is 'Nag'?",
    questionHi: "'नाग' (Nag) क्या है?",
    options: [
      { id: "A", textEn: "Third-generation 'Fire-and-Forget' Anti-Tank Guided Missile (ATGM)", textHi: "दागो और भूल जाओ (Fire-and-forget) एंटी-टैंक गाइडेड मिसाइल" },
      { id: "B", textEn: "Surface-to-air Missile", textHi: "सतह से हवा में मार करने वाली मिसाइल" },
      { id: "C", textEn: "Cruise Missile", textHi: "क्रूज मिसाइल" },
      { id: "D", textEn: "Torpedo", textHi: "टारपीडो" }
    ],
    correctAnswer: "A",
    explanation: "Nag is a 3rd-generation fire-and-forget anti-tank guided missile developed by DRDO under the IGMDP."
  },
  {
    id: 91,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is India's nuclear submarine that completed the nuclear triad in 2018?",
    questionHi: "भारत की पहली स्वदेशी परमाणु पनडुब्बी (SSBN) कौन सी है जिसने भारत के परमाणु त्रिकोण (Nuclear Triad) को पूर्ण किया?",
    options: [
      { id: "A", textEn: "INS Arihant", textHi: "आईएनएस अरिहंत (INS Arihant)" },
      { id: "B", textEn: "INS Chakra", textHi: "आईएनएस चक्र" },
      { id: "C", textEn: "INS Kalvari", textHi: "आईएनएस कलवरी" },
      { id: "D", textEn: "INS Khanderi", textHi: "आईएनएस खंडेरी" }
    ],
    correctAnswer: "A",
    explanation: "INS Arihant is India's first indigenously designed ballistic missile submarine capable of firing submarine-launched ballistic missiles (SLBMs)."
  },
  {
    id: 92,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Which country manufactures the Rafale fighter aircraft operated by the Indian Air Force?",
    questionHi: "भारतीय वायुसेना में शामिल 'राफेल' लड़ाकू विमान किस देश की डसॉल्ट एविएशन कंपनी द्वारा निर्मित है?",
    options: [
      { id: "A", textEn: "France", textHi: "फ्रांस (France)" },
      { id: "B", textEn: "Russia", textHi: "रूस" },
      { id: "C", textEn: "United States", textHi: "अमेरिका" },
      { id: "D", textEn: "United Kingdom", textHi: "ब्रिटेन" }
    ],
    correctAnswer: "A",
    explanation: "Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed by Dassault Aviation."
  },
  {
    id: 93,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "The Tri-Services training institute for mid-career officers 'Defence Services Staff College' (DSSC) is situated at:",
    questionHi: "मध्यम स्तर के सैन्य अधिकारियों के लिए 'डिफेंस सर्विसेज स्टाफ कॉलेज' (DSSC) कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Wellington (Nilgiris, Tamil Nadu)", textHi: "वेलिंगटन (नीलगिरि, तमिलनाडु)" },
      { id: "B", textEn: "Mhow (Madhya Pradesh)", textHi: "महू (मध्य प्रदेश)" },
      { id: "C", textEn: "Secunderabad", textHi: "सिकंदराबाद" },
      { id: "D", textEn: "Gwalior", textHi: "ग्वालियर" }
    ],
    correctAnswer: "A",
    explanation: "DSSC Wellington in the Nilgiris district of Tamil Nadu trains officers of all three wings of the Indian Armed Forces."
  },
  {
    id: 94,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the primary Main Battle Tank (MBT) developed by DRDO and operated by the Indian Army?",
    questionHi: "DRDO द्वारा विकसित भारतीय सेना का मुख्य युद्धक टैंक (MBT) कौन सा है?",
    options: [
      { id: "A", textEn: "Arjun MBT", textHi: "अर्जुन टैंक (Arjun MBT)" },
      { id: "B", textEn: "T-90 Bhishma", textHi: "टी-90 भीष्म" },
      { id: "C", textEn: "T-72 Ajeya", textHi: "टी-72 अजेय" },
      { id: "D", textEn: "Vijayanta", textHi: "विज्यंता" }
    ],
    correctAnswer: "A",
    explanation: "Arjun is a third-generation main battle tank developed by DRDO's Combat Vehicles Research and Development Establishment (CVRDE)."
  },
  {
    id: 95,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What was the joint operation executed in 1984 to secure the Siachen Glacier called?",
    questionHi: "1984 में सियाचिन ग्लेशियर पर भारतीय नियंत्रण स्थापित करने हेतु चलाए गए सैन्य अभियान का नाम क्या था?",
    options: [
      { id: "A", textEn: "Operation Meghdoot", textHi: "ऑपरेशन मेघदूत (Operation Meghdoot)" },
      { id: "B", textEn: "Operation Vijay", textHi: "ऑपरेशन विजय" },
      { id: "C", textEn: "Operation Cactus", textHi: "ऑपरेशन कैक्टस" },
      { id: "D", textEn: "Operation Blue Star", textHi: "ऑपरेशन ब्लू स्टार" }
    ],
    correctAnswer: "A",
    explanation: "Launched on 13 April 1984, Operation Meghdoot established Indian control over the entire Siachen Glacier."
  },
  {
    id: 96,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is 'Prithvi'?",
    questionHi: "'पृथ्वी' (Prithvi) किस प्रकार की मिसाइल है?",
    options: [
      { id: "A", textEn: "Short-range surface-to-surface ballistic missile (SRBM)", textHi: "सतह से सतह पर मार करने वाली बैलिस्टिक मिसाइल (SRBM)" },
      { id: "B", textEn: "Air-to-air missile", textHi: "हवा से हवा में मार करने वाली मिसाइल" },
      { id: "C", textEn: "Anti-aircraft gun", textHi: "एंटी-एयरक्राफ्ट तोप" },
      { id: "D", textEn: "Radar system", textHi: "रडार प्रणाली" }
    ],
    correctAnswer: "A",
    explanation: "Prithvi was the first ballistic missile developed under India's Integrated Guided Missile Development Programme (IGMDP)."
  },
  {
    id: 97,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the equivalent rank in the Indian Air Force to an Army Major?",
    questionHi: "भारतीय थलसेना के मेजर (Major) के समकक्ष भारतीय वायुसेना में कौन सा पद होता है?",
    options: [
      { id: "A", textEn: "Squadron Leader", textHi: "स्क्वाड्रन लीडर (Squadron Leader)" },
      { id: "B", textEn: "Flight Lieutenant", textHi: "फ्लाइट लेफ्टिनेंट" },
      { id: "C", textEn: "Wing Commander", textHi: "विंग कमांडर" },
      { id: "D", textEn: "Group Captain", textHi: "ग्रुप कैप्टन" }
    ],
    correctAnswer: "A",
    explanation: "Army Major = Air Force Squadron Leader = Navy Lieutenant Commander."
  },
  {
    id: 98,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the highest peacetime gallantry award in India?",
    questionHi: "भारत का शांतिकालीन सर्वोच्च वीरता पुरस्कार कौन सा है?",
    options: [
      { id: "A", textEn: "Ashoka Chakra", textHi: "अशोक चक्र (Ashoka Chakra)" },
      { id: "B", textEn: "Kirti Chakra", textHi: "कीर्ति चक्र" },
      { id: "C", textEn: "Shaurya Chakra", textHi: "शौर्य चक्र" },
      { id: "D", textEn: "Sena Medal", textHi: "सेना मेडल" }
    ],
    correctAnswer: "A",
    explanation: "Ashoka Chakra is the peacetime equivalent of the Param Vir Chakra, awarded for most conspicuous bravery otherwise than in the face of the enemy."
  },
  {
    id: 99,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "Which missile defence shield system was inducted into the Indian Air Force from Russia?",
    questionHi: "रूस से भारतीय वायुसेना में शामिल की गई अत्याधुनिक वायु रक्षा मिसाइल प्रणाली कौन सी है?",
    options: [
      { id: "A", textEn: "S-400 Triumf", textHi: "एस-400 ट्रायम्फ (S-400 Triumf)" },
      { id: "B", textEn: "Patriot Missile", textHi: "पैट्रियट" },
      { id: "C", textEn: "Iron Dome", textHi: "आयरन डोम" },
      { id: "D", textEn: "THAAD", textHi: "थाड (THAAD)" }
    ],
    correctAnswer: "A",
    explanation: "S-400 Triumf is an advanced long-range mobile surface-to-air missile system capable of intercepting aircraft, UAVs, and ballistic missiles up to 400 km."
  },
  {
    id: 100,
    section: "def_gk",
    sectionName: "4. General Knowledge & Defence Awareness",
    questionEn: "What is the motto of the Indian Navy?",
    questionHi: "भारतीय नौसेना का आदर्श वाक्य क्या है?",
    options: [
      { id: "A", textEn: "Sham No Varunah (शं नो वरुणः - May the Lord of Waters be auspicious unto us)", textHi: "शं नो वरुणः (Sham No Varunah)" },
      { id: "B", textEn: "Nabha Sparsham Deeptam (नभः स्पृशं दीप्तम्)", textHi: "नभः स्पृशं दीप्तम्" },
      { id: "C", textEn: "Satyameva Jayate", textHi: "सत्यमेव जयते" },
      { id: "D", textEn: "Sarvatra Vijaya", textHi: "सर्वत्र विजय" }
    ],
    correctAnswer: "A",
    explanation: "'शं नो वरुणः' (May the God of Ocean, Varuna, be auspicious unto us) is the invocation and motto of the Indian Navy."
  }
];
