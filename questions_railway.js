/**
 * GovtExamHub — Railway Recruitment Board (RRB NTPC / Group D / ALP)
 * Official 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real Railway CBT Marking: +1.00 for Correct Answer, -0.33 for Incorrect Answer (1/3rd Negative Marking)
 */

const RAILWAY_EXAM_CONFIG = {
  id: "railway",
  title: "Railway Recruitment Board (RRB NTPC / Group D Mock)",
  shortName: "Railway",
  icon: "🚆",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 90, // Real 90 Minutes RRB CBT-1 Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.33, // Real 1/3rd Negative Marking
  sections: [
    { id: "rail_ga", name: "1. General Awareness & Science", start: 1, end: 40, total: 40 },
    { id: "rail_math", name: "2. Mathematics", start: 41, end: 70, total: 30 },
    { id: "rail_reasoning", name: "3. General Intelligence & Reasoning", start: 71, end: 100, total: 30 }
  ]
};

const RAILWAY_QUESTIONS_DATA = [
  // ===================================================
  // SECTION 1: GENERAL AWARENESS & SCIENCE (Q1 - Q40)
  // ===================================================
  {
    id: 1,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "When was the first passenger train run in India?",
    questionHi: "भारत में पहली यात्री ट्रेन कब चलाई गई थी?",
    options: [
      { id: "A", textEn: "16 April 1853", textHi: "16 अप्रैल 1853" },
      { id: "B", textEn: "15 August 1854", textHi: "15 अगस्त 1854" },
      { id: "C", textEn: "26 January 1850", textHi: "26 जनवरी 1850" },
      { id: "D", textEn: "1 May 1857", textHi: "1 मई 1857" }
    ],
    correctAnswer: "A",
    explanation: "India's first passenger train ran on 16 April 1853 between Bori Bunder (Bombay) and Thane, covering 34 km with 14 carriages."
  },
  {
    id: 2,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Where is the headquarters of Northern Railway located?",
    questionHi: "उत्तर रेलवे (Northern Railway) का मुख्यालय कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "New Delhi", textHi: "नई दिल्ली (New Delhi)" },
      { id: "B", textEn: "Gorakhpur", textHi: "गोरखपुर" },
      { id: "C", textEn: "Prayagraj", textHi: "प्रयागराज" },
      { id: "D", textEn: "Kolkata", textHi: "कोलकाता" }
    ],
    correctAnswer: "A",
    explanation: "The headquarters of the Northern Railway zone is situated at Baroda House, New Delhi."
  },
  {
    id: 3,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the SI unit of electric current?",
    questionHi: "विद्युत धारा (Electric Current) का SI मात्रक क्या है?",
    options: [
      { id: "A", textEn: "Ampere", textHi: "एम्पीयर (Ampere)" },
      { id: "B", textEn: "Volt", textHi: "वोल्ट" },
      { id: "C", textEn: "Ohm", textHi: "ओम" },
      { id: "D", textEn: "Watt", textHi: "वाट" }
    ],
    correctAnswer: "A",
    explanation: "Electric current is measured in Ampere (A). Volt is potential difference, Ohm is resistance, and Watt is electric power."
  },
  {
    id: 4,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which organ in the human body secretes bile juice?",
    questionHi: "मानव शरीर में पित्त रस (Bile Juice) का स्राव कौन सा अंग करता है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत (Liver)" },
      { id: "B", textEn: "Pancreas", textHi: "अग्न्याशय" },
      { id: "C", textEn: "Gallbladder", textHi: "पित्ताशय" },
      { id: "D", textEn: "Stomach", textHi: "आमाशय" }
    ],
    correctAnswer: "A",
    explanation: "Bile is produced and secreted by the liver and stored in the gallbladder."
  },
  {
    id: 5,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which gas is responsible for the greenhouse effect and global warming the most?",
    questionHi: "ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग के लिए मुख्य रूप से कौन सी गैस उत्तरदायी है?",
    options: [
      { id: "A", textEn: "Carbon Dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड (CO2)" },
      { id: "B", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Nitrogen (N2)", textHi: "नाइट्रोजन" },
      { id: "D", textEn: "Hydrogen (H2)", textHi: "हाइड्रोजन" }
    ],
    correctAnswer: "A",
    explanation: "Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities."
  },
  {
    id: 6,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Who was the first Governor-General of independent India?",
    questionHi: "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
    options: [
      { id: "A", textEn: "Lord Mountbatten", textHi: "लॉर्ड माउंटबेटन" },
      { id: "B", textEn: "C. Rajagopalachari", textHi: "सी. राजगोपालाचारी" },
      { id: "C", textEn: "Dr. Rajendra Prasad", textHi: "डॉ. राजेंद्र प्रसाद" },
      { id: "D", textEn: "Lord Wavell", textHi: "लॉर्ड वेवेल" }
    ],
    correctAnswer: "A",
    explanation: "Lord Mountbatten was the first Governor-General of independent India. C. Rajagopalachari was the first and last Indian Governor-General."
  },
  {
    id: 7,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Sound waves cannot travel through which of the following?",
    questionHi: "ध्वनि तरंगें निम्नलिखित में से किसमें से गमन नहीं कर सकती हैं?",
    options: [
      { id: "A", textEn: "Vacuum", textHi: "निर्वात (Vacuum)" },
      { id: "B", textEn: "Water", textHi: "जल" },
      { id: "C", textEn: "Steel", textHi: "इस्पात" },
      { id: "D", textEn: "Air", textHi: "वायु" }
    ],
    correctAnswer: "A",
    explanation: "Sound is a mechanical longitudinal wave and requires a material medium to propagate; it cannot travel through vacuum."
  },
  {
    id: 8,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the chemical formula of baking soda?",
    questionHi: "बेकिंग सोडा (खाने का सोडा) का रासायनिक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "NaHCO3", textHi: "NaHCO3 (सोडियम बाइकार्बोनेट)" },
      { id: "B", textEn: "Na2CO3", textHi: "Na2CO3" },
      { id: "C", textEn: "NaCl", textHi: "NaCl" },
      { id: "D", textEn: "NaOH", textHi: "NaOH" }
    ],
    correctAnswer: "A",
    explanation: "Baking soda is Sodium Bicarbonate, NaHCO3. Washing soda is Na2CO3·10H2O."
  },
  {
    id: 9,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which planet is known as the 'Red Planet'?",
    questionHi: "किस ग्रह को 'लाल ग्रह' (Red Planet) के नाम से जाना जाता है?",
    options: [
      { id: "A", textEn: "Mars", textHi: "मंगल (Mars)" },
      { id: "B", textEn: "Venus", textHi: "शुक्र" },
      { id: "C", textEn: "Jupiter", textHi: "बृहस्पति" },
      { id: "D", textEn: "Mercury", textHi: "बुध" }
    ],
    correctAnswer: "A",
    explanation: "Mars appears red because of the high presence of iron oxide (rust) on its surface."
  },
  {
    id: 10,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which Article of the Indian Constitution deals with the 'Fundamental Rights'?",
    questionHi: "भारतीय संविधान का कौन सा भाग/अनुच्छेद 'मौलिक अधिकारों' से संबंधित है?",
    options: [
      { id: "A", textEn: "Articles 12 to 35 (Part III)", textHi: "अनुच्छेद 12 से 35 (भाग III)" },
      { id: "B", textEn: "Articles 36 to 51 (Part IV)", textHi: "अनुच्छेद 36 से 51 (भाग IV)" },
      { id: "C", textEn: "Articles 51A (Part IVA)", textHi: "अनुच्छेद 51A (भाग IVA)" },
      { id: "D", textEn: "Articles 1 to 4 (Part I)", textHi: "अनुच्छेद 1 से 4 (भाग I)" }
    ],
    correctAnswer: "A",
    explanation: "Part III (Articles 12-35) of the Indian Constitution guarantees Fundamental Rights to all citizens."
  },
  {
    id: 11,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the speed of light in vacuum?",
    questionHi: "निर्वात में प्रकाश की चाल कितनी होती है?",
    options: [
      { id: "A", textEn: "3 × 10^8 m/s", textHi: "3 × 10^8 मी/से" },
      { id: "B", textEn: "3 × 10^6 m/s", textHi: "3 × 10^6 मी/से" },
      { id: "C", textEn: "332 m/s", textHi: "332 मी/से" },
      { id: "D", textEn: "3 × 10^10 m/s", textHi: "3 × 10^10 मी/से" }
    ],
    correctAnswer: "A",
    explanation: "The speed of light in vacuum is approximately 3 × 10^8 meters per second (300,000 km/s)."
  },
  {
    id: 12,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which metal is liquid at room temperature?",
    questionHi: "कमरे के तापमान पर कौन सी धातु द्रव अवस्था में होती है?",
    options: [
      { id: "A", textEn: "Mercury (Hg)", textHi: "पारा / मरकरी (Hg)" },
      { id: "B", textEn: "Bromine", textHi: "ब्रोमीन" },
      { id: "C", textEn: "Sodium", textHi: "सोडियम" },
      { id: "D", textEn: "Gallium", textHi: "गैलियम" }
    ],
    correctAnswer: "A",
    explanation: "Mercury (Hg) is the only metal that is liquid at standard room temperature. Bromine is a liquid non-metal."
  },
  {
    id: 13,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Who discovered the Law of Universal Gravitation?",
    questionHi: "सार्वभौमिक गुरुत्वाकर्षण के नियम की खोज किसने की थी?",
    options: [
      { id: "A", textEn: "Sir Isaac Newton", textHi: "सर आइजैक न्यूटन" },
      { id: "B", textEn: "Albert Einstein", textHi: "अल्बर्ट आइंस्टीन" },
      { id: "C", textEn: "Galileo Galilei", textHi: "गैलीलियो गैलीली" },
      { id: "D", textEn: "Johannes Kepler", textHi: "जोहान्स केप्लर" }
    ],
    correctAnswer: "A",
    explanation: "Sir Isaac Newton formulated the Law of Universal Gravitation, stating F = G(m1·m2)/r²."
  },
  {
    id: 14,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the normal blood pressure of a healthy adult human?",
    questionHi: "एक स्वस्थ वयस्क मनुष्य का सामान्य रक्तचाप (Blood Pressure) कितना होता है?",
    options: [
      { id: "A", textEn: "120/80 mmHg", textHi: "120/80 mmHg" },
      { id: "B", textEn: "140/90 mmHg", textHi: "140/90 mmHg" },
      { id: "C", textEn: "100/60 mmHg", textHi: "100/60 mmHg" },
      { id: "D", textEn: "80/120 mmHg", textHi: "80/120 mmHg" }
    ],
    correctAnswer: "A",
    explanation: "Normal blood pressure is 120 mmHg systolic and 80 mmHg diastolic."
  },
  {
    id: 15,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which railway station has the longest railway platform in the world?",
    questionHi: "विश्व का सबसे लंबा रेलवे प्लेटफॉर्म किस रेलवे स्टेशन पर है?",
    options: [
      { id: "A", textEn: "Hubballi Junction (Karnataka)", textHi: "हुबली जंक्शन (कर्नाटक)" },
      { id: "B", textEn: "Gorakhpur Junction (UP)", textHi: "गोरखपुर जंक्शन (उत्तर प्रदेश)" },
      { id: "C", textEn: "Kollam Junction (Kerala)", textHi: "कोल्लम जंक्शन (केरल)" },
      { id: "D", textEn: "Kharagpur (West Bengal)", textHi: "खड़गपुर (पश्चिम बंगाल)" }
    ],
    correctAnswer: "A",
    explanation: "Shree Siddharoodha Swamiji Hubballi railway station platform (Karnataka) is 1,507 meters long, making it the longest in the world."
  },
  {
    id: 16,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the pH value of pure water at 25°C?",
    questionHi: "25°C पर शुद्ध जल का pH मान क्या होता है?",
    options: [
      { id: "A", textEn: "7", textHi: "7 (उदासीन)" },
      { id: "B", textEn: "0", textHi: "0" },
      { id: "C", textEn: "14", textHi: "14" },
      { id: "D", textEn: "5.5", textHi: "5.5" }
    ],
    correctAnswer: "A",
    explanation: "Pure water is neutral and has a pH of 7 at 25°C."
  },
  {
    id: 17,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which is the highest civilian award in India?",
    questionHi: "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?",
    options: [
      { id: "A", textEn: "Bharat Ratna", textHi: "भारत रत्न (Bharat Ratna)" },
      { id: "B", textEn: "Padma Vibhushan", textHi: "पद्म विभूषण" },
      { id: "C", textEn: "Param Vir Chakra", textHi: "परमवीर चक्र" },
      { id: "D", textEn: "Padma Bhushan", textHi: "पद्म भूषण" }
    ],
    correctAnswer: "A",
    explanation: "Bharat Ratna is India's highest civilian honor, instituted in 1954."
  },
  {
    id: 18,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Photosynthesis occurs in which organelle of plant cells?",
    questionHi: "पादप कोशिकाओं के किस कोशिकांग में प्रकाश संश्लेषण होता है?",
    options: [
      { id: "A", textEn: "Chloroplast", textHi: "क्लोरोप्लास्ट (हरितलवक)" },
      { id: "B", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया" },
      { id: "C", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "D", textEn: "Golgi apparatus", textHi: "गॉल्जीकाय" }
    ],
    correctAnswer: "A",
    explanation: "Chloroplasts contain chlorophyll pigments where light energy is converted into chemical energy via photosynthesis."
  },
  {
    id: 19,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "In which year was the Reserve Bank of India (RBI) established?",
    questionHi: "भारतीय रिज़र्व बैंक (RBI) की स्थापना किस वर्ष हुई थी?",
    options: [
      { id: "A", textEn: "1 April 1935", textHi: "1 अप्रैल 1935" },
      { id: "B", textEn: "15 August 1947", textHi: "15 अगस्त 1947" },
      { id: "C", textEn: "26 January 1950", textHi: "26 जनवरी 1950" },
      { id: "D", textEn: "1 January 1949", textHi: "1 जनवरी 1949" }
    ],
    correctAnswer: "A",
    explanation: "The RBI was established on 1 April 1935 under the Reserve Bank of India Act, 1934."
  },
  {
    id: 20,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What type of mirror is used by dentists to view teeth?",
    questionHi: "दंत चिकित्सकों द्वारा दांतों की जांच के लिए किस प्रकार के दर्पण का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Concave mirror", textHi: "अवतल दर्पण (Concave Mirror)" },
      { id: "B", textEn: "Convex mirror", textHi: "उत्तल दर्पण" },
      { id: "C", textEn: "Plane mirror", textHi: "समतल दर्पण" },
      { id: "D", textEn: "Cylindrical mirror", textHi: "बेलनाकार दर्पण" }
    ],
    correctAnswer: "A",
    explanation: "A concave mirror produces an erect, magnified virtual image when the object is held close to it."
  },
  {
    id: 21,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which river is known as the 'Sorrow of Bengal'?",
    questionHi: "किस नदी को 'बंगाल का शोक' कहा जाता है?",
    options: [
      { id: "A", textEn: "Damodar River", textHi: "दामोदर नदी (Damodar River)" },
      { id: "B", textEn: "Kosi River", textHi: "कोसी नदी" },
      { id: "C", textEn: "Hooghly River", textHi: "हुगली नदी" },
      { id: "D", textEn: "Brahmaputra", textHi: "ब्रह्मपुत्र" }
    ],
    correctAnswer: "A",
    explanation: "Damodar river was historically known as the 'Sorrow of Bengal' due to devastating floods. Kosi is the Sorrow of Bihar."
  },
  {
    id: 22,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is dry ice?",
    questionHi: "शुष्क बर्फ (Dry Ice) क्या है?",
    options: [
      { id: "A", textEn: "Solid Carbon Dioxide", textHi: "ठोस कार्बन डाइऑक्साइड (Solid CO2)" },
      { id: "B", textEn: "Solid Nitrogen", textHi: "ठोस नाइट्रोजन" },
      { id: "C", textEn: "Solid Methane", textHi: "ठोस मीथेन" },
      { id: "D", textEn: "Heavy Water Ice", textHi: "भारी जल की बर्फ" }
    ],
    correctAnswer: "A",
    explanation: "Dry ice is solid carbon dioxide (CO2) which sublimes directly into gas at -78.5°C."
  },
  {
    id: 23,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which vitamin is synthesized in human skin by sunlight?",
    questionHi: "सूर्य के प्रकाश द्वारा मानव त्वचा में कौन सा विटामिन संश्लेषित होता है?",
    options: [
      { id: "A", textEn: "Vitamin D", textHi: "विटामिन D" },
      { id: "B", textEn: "Vitamin C", textHi: "विटामिन C" },
      { id: "C", textEn: "Vitamin A", textHi: "विटामिन A" },
      { id: "D", textEn: "Vitamin B12", textHi: "विटामिन B12" }
    ],
    correctAnswer: "A",
    explanation: "Ultraviolet B (UVB) rays from sunlight convert 7-dehydrocholesterol in the skin into Vitamin D3."
  },
  {
    id: 24,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Who was the founder of the Maurya Empire?",
    questionHi: "मौर्य साम्राज्य के संस्थापक कौन थे?",
    options: [
      { id: "A", textEn: "Chandragupta Maurya", textHi: "चन्द्रगुप्त मौर्य" },
      { id: "B", textEn: "Ashoka the Great", textHi: "सम्राट अशोक" },
      { id: "C", textEn: "Bindusara", textHi: "बिन्दुसार" },
      { id: "D", textEn: "Brihadratha", textHi: "बृहद्रथ" }
    ],
    correctAnswer: "A",
    explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE with the help of his mentor Chanakya."
  },
  {
    id: 25,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the unit of frequency?",
    questionHi: "आवृत्ति (Frequency) का मात्रक क्या है?",
    options: [
      { id: "A", textEn: "Hertz (Hz)", textHi: "हर्ट्ज़ (Hz)" },
      { id: "B", textEn: "Decibel (dB)", textHi: "डेसिबल" },
      { id: "C", textEn: "Joule (J)", textHi: "जूल" },
      { id: "D", textEn: "Newton (N)", textHi: "न्यूटन" }
    ],
    correctAnswer: "A",
    explanation: "Frequency is the number of occurrences of a repeating event per unit time, measured in Hertz (1 Hz = 1 cycle/second)."
  },
  {
    id: 26,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which gas is filled in electric incandescent bulbs?",
    questionHi: "बिजली के बल्बों में कौन सी अक्रिय गैस भरी जाती है?",
    options: [
      { id: "A", textEn: "Argon / Nitrogen", textHi: "आर्गन / नाइट्रोजन" },
      { id: "B", textEn: "Oxygen", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Hydrogen", textHi: "हाइड्रोजन" },
      { id: "D", textEn: "Carbon monoxide", textHi: "कार्बन मोनोऑक्साइड" }
    ],
    correctAnswer: "A",
    explanation: "Argon and Nitrogen are chemically inert and prevent the tungsten filament from oxidizing and burning out."
  },
  {
    id: 27,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the primary function of white blood cells (WBCs)?",
    questionHi: "श्वेत रक्त कोशिकाओं (WBCs) का मुख्य कार्य क्या है?",
    options: [
      { id: "A", textEn: "To fight infections and provide immunity", textHi: "संक्रमण से लड़ना और प्रतिरक्षा प्रदान करना" },
      { id: "B", textEn: "To transport oxygen", textHi: "ऑक्सीजन का परिवहन करना" },
      { id: "C", textEn: "To clot blood", textHi: "रक्त का थक्का जमाना" },
      { id: "D", textEn: "To regulate body heat", textHi: "शरीर के तापमान को नियंत्रित करना" }
    ],
    correctAnswer: "A",
    explanation: "White blood cells defend the body against pathogens, bacterial/viral infections, and foreign antigens."
  },
  {
    id: 28,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which country hosted the first Modern Olympic Games in 1896?",
    questionHi: "1896 में पहले आधुनिक ओलंपिक खेलों की मेजबानी किस देश ने की थी?",
    options: [
      { id: "A", textEn: "Greece (Athens)", textHi: "ग्रीस (एथेंस)" },
      { id: "B", textEn: "France (Paris)", textHi: "फ्रांस" },
      { id: "C", textEn: "United Kingdom (London)", textHi: "यूनाइटेड किंगडम" },
      { id: "D", textEn: "USA (St. Louis)", textHi: "अमेरिका" }
    ],
    correctAnswer: "A",
    explanation: "The first modern Olympic Games were held in Athens, Greece, in 1896."
  },
  {
    id: 29,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which instrument is used to measure atmospheric pressure?",
    questionHi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Barometer", textHi: "बैरोमीटर (Barometer)" },
      { id: "B", textEn: "Thermometer", textHi: "थर्मामीटर" },
      { id: "C", textEn: "Hygrometer", textHi: "हाइग्रोमीटर" },
      { id: "D", textEn: "Anemometer", textHi: "एनीमोमीटर" }
    ],
    correctAnswer: "A",
    explanation: "A barometer, invented by Torricelli, measures atmospheric pressure."
  },
  {
    id: 30,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the chemical name of common salt?",
    questionHi: "साधारण नमक का रासायनिक नाम क्या है?",
    options: [
      { id: "A", textEn: "Sodium Chloride (NaCl)", textHi: "सोडियम क्लोराइड (NaCl)" },
      { id: "B", textEn: "Potassium Chloride", textHi: "पोटेशियम क्लोराइड" },
      { id: "C", textEn: "Calcium Carbonate", textHi: "कैल्शियम कार्बोनेट" },
      { id: "D", textEn: "Sodium Hydroxide", textHi: "सोडियम हाइड्रॉक्साइड" }
    ],
    correctAnswer: "A",
    explanation: "Common edible salt is Sodium Chloride (NaCl)."
  },
  {
    id: 31,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Who is known as the 'Missile Man of India'?",
    questionHi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    options: [
      { id: "A", textEn: "Dr. A.P.J. Abdul Kalam", textHi: "डॉ. ए.पी.जे. अब्दुल कलाम" },
      { id: "B", textEn: "Dr. Homi Bhabha", textHi: "डॉ. होमी भाभा" },
      { id: "C", textEn: "Vikram Sarabhai", textHi: "विक्रम साराभाई" },
      { id: "D", textEn: "Satish Dhawan", textHi: "सतीश धवन" }
    ],
    correctAnswer: "A",
    explanation: "Dr. A.P.J. Abdul Kalam is affectionately called the 'Missile Man of India' for leading the Integrated Guided Missile Development Programme (IGMDP)."
  },
  {
    id: 32,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which layer of the atmosphere contains the protective Ozone layer?",
    questionHi: "वायुमंडल की किस परत में सुरक्षात्मक ओजोन परत पाई जाती है?",
    options: [
      { id: "A", textEn: "Stratosphere", textHi: "समताप मंडल (Stratosphere)" },
      { id: "B", textEn: "Troposphere", textHi: "क्षोभमंडल" },
      { id: "C", textEn: "Mesosphere", textHi: "मध्यमंडल" },
      { id: "D", textEn: "Thermosphere", textHi: "तापमंडल" }
    ],
    correctAnswer: "A",
    explanation: "The stratosphere contains the ozone layer which absorbs harmful ultraviolet (UV) radiation from the Sun."
  },
  {
    id: 33,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the powerhouse of the cell?",
    questionHi: "कोशिका का पावरहाउस (ऊर्जा गृह) किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया (Mitochondria)" },
      { id: "B", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "C", textEn: "Nucleus", textHi: "केंद्रक" },
      { id: "D", textEn: "Endoplasmic Reticulum", textHi: "अंतःप्रद्रव्यी जालिका" }
    ],
    correctAnswer: "A",
    explanation: "Mitochondria generate ATP (adenosine triphosphate) through cellular respiration."
  },
  {
    id: 34,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which Indian state has the longest coastline?",
    questionHi: "भारत के किस राज्य की तटरेखा सबसे लंबी है?",
    options: [
      { id: "A", textEn: "Gujarat", textHi: "गुजरात (Gujarat)" },
      { id: "B", textEn: "Andhra Pradesh", textHi: "आंध्र प्रदेश" },
      { id: "C", textEn: "Tamil Nadu", textHi: "तमिलनाडु" },
      { id: "D", textEn: "Maharashtra", textHi: "महाराष्ट्र" }
    ],
    correctAnswer: "A",
    explanation: "Gujarat has the longest coastline among all Indian states, spanning approximately 1,600 km."
  },
  {
    id: 35,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which railway train is the fastest train currently operating in India?",
    questionHi: "वर्तमान में भारत में चलने वाली सबसे तेज़ ट्रेन कौन सी है?",
    options: [
      { id: "A", textEn: "Vande Bharat Express (Train 18)", textHi: "वंदे भारत एक्सप्रेस (ट्रेन 18)" },
      { id: "B", textEn: "Gatimaan Express", textHi: "गतिमान एक्सप्रेस" },
      { id: "C", textEn: "Rajdhani Express", textHi: "राजधानी एक्सप्रेस" },
      { id: "D", textEn: "Shatabdi Express", textHi: "शताब्दी एक्सप्रेस" }
    ],
    correctAnswer: "A",
    explanation: "Vande Bharat Express is an indigenously developed semi-high speed train capable of operating at up to 160-180 km/h."
  },
  {
    id: 36,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is Newton's First Law of Motion also known as?",
    questionHi: "न्यूटन के गति के प्रथम नियम को किस अन्य नाम से भी जाना जाता है?",
    options: [
      { id: "A", textEn: "Law of Inertia", textHi: "जड़त्व का नियम (Law of Inertia)" },
      { id: "B", textEn: "Law of Momentum", textHi: "संवेग का नियम" },
      { id: "C", textEn: "Law of Action-Reaction", textHi: "क्रिया-प्रतिक्रिया का नियम" },
      { id: "D", textEn: "Law of Energy", textHi: "ऊर्जा संरक्षण का नियम" }
    ],
    correctAnswer: "A",
    explanation: "Newton's First Law states that a body remains at rest or uniform motion unless acted upon by an external net force (Law of Inertia)."
  },
  {
    id: 37,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which blood group is known as the 'Universal Donor'?",
    questionHi: "किस रक्त समूह को 'सर्वदाता' (Universal Donor) कहा जाता है?",
    options: [
      { id: "A", textEn: "O negative (O-)", textHi: "O नेगेटिव (O-)" },
      { id: "B", textEn: "AB positive (AB+)", textHi: "AB पॉजिटिव" },
      { id: "C", textEn: "A positive", textHi: "A पॉजिटिव" },
      { id: "D", textEn: "B negative", textHi: "B नेगेटिव" }
    ],
    correctAnswer: "A",
    explanation: "O negative red blood cells lack A, B, and Rh antigens, making them safe for transfusion to any patient."
  },
  {
    id: 38,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Who was the author of the national song 'Vande Mataram'?",
    questionHi: "राष्ट्रगीत 'वंदे मातरम्' के रचयिता कौन थे?",
    options: [
      { id: "A", textEn: "Bankim Chandra Chattopadhyay", textHi: "बंकिम चंद्र चट्टोपाध्याय" },
      { id: "B", textEn: "Rabindranath Tagore", textHi: "रवींद्रनाथ टैगोर" },
      { id: "C", textEn: "Sarojini Naidu", textHi: "सरोजिनी नायडू" },
      { id: "D", textEn: "Subhash Chandra Bose", textHi: "सुभाष चंद्र बोस" }
    ],
    correctAnswer: "A",
    explanation: "'Vande Mataram' was written by Bankim Chandra Chattopadhyay in his 1882 novel Anandamath."
  },
  {
    id: 39,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "Which gas is used in fire extinguishers?",
    questionHi: "अग्निशामक यंत्रों (Fire Extinguishers) में किस गैस का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Carbon Dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड (CO2)" },
      { id: "B", textEn: "Oxygen", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Nitrogen Dioxide", textHi: "नाइट्रोजन डाइऑक्साइड" },
      { id: "D", textEn: "Carbon Monoxide", textHi: "कार्बन मोनोऑक्साइड" }
    ],
    correctAnswer: "A",
    explanation: "Carbon dioxide smothers fires by displacing oxygen and cooling the fuel."
  },
  {
    id: 40,
    section: "rail_ga",
    sectionName: "1. General Awareness & Science",
    questionEn: "What is the acceleration due to gravity (g) on the surface of the Earth?",
    questionHi: "पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मान क्या है?",
    options: [
      { id: "A", textEn: "9.8 m/s²", textHi: "9.8 मी/से²" },
      { id: "B", textEn: "8.9 m/s²", textHi: "8.9 मी/से²" },
      { id: "C", textEn: "9.8 km/s²", textHi: "9.8 किमी/से²" },
      { id: "D", textEn: "10.8 m/s²", textHi: "10.8 मी/से²" }
    ],
    correctAnswer: "A",
    explanation: "The standard acceleration due to Earth's gravity is 9.80665 m/s² (commonly taken as 9.8 m/s²)."
  },

  // ===================================================
  // SECTION 2: MATHEMATICS (Q41 - Q70)
  // ===================================================
  {
    id: 41,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A train 200m long travels at 72 km/h. How much time does it take to cross an electric pole?",
    questionHi: "200 मीटर लंबी एक ट्रेन 72 किमी/घंटा की गति से चल रही है। इसे एक बिजली के खंभे को पार करने में कितना समय लगेगा?",
    options: [
      { id: "A", textEn: "10 seconds", textHi: "10 सेकंड" },
      { id: "B", textEn: "12 seconds", textHi: "12 सेकंड" },
      { id: "C", textEn: "15 seconds", textHi: "15 सेकंड" },
      { id: "D", textEn: "8 seconds", textHi: "8 सेकंड" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 72 × (5/18) = 20 m/s. Time = Distance / Speed = 200 / 20 = 10 seconds."
  },
  {
    id: 42,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "What is the LCM of 24, 36, and 40?",
    questionHi: "24, 36 और 40 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    options: [
      { id: "A", textEn: "360", textHi: "360" },
      { id: "B", textEn: "720", textHi: "720" },
      { id: "C", textEn: "180", textHi: "180" },
      { id: "D", textEn: "240", textHi: "240" }
    ],
    correctAnswer: "A",
    explanation: "24 = 2³ × 3, 36 = 2² × 3², 40 = 2³ × 5. LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360."
  },
  {
    id: 43,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "If the selling price of 10 articles equals the cost price of 12 articles, what is the profit percentage?",
    questionHi: "यदि 10 वस्तुओं का विक्रय मूल्य 12 वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "20%", textHi: "20%" },
      { id: "B", textEn: "25%", textHi: "25%" },
      { id: "C", textEn: "16.66%", textHi: "16.66%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "Profit % = ((12 - 10) / 10) × 100 = (2/10) × 100 = 20%."
  },
  {
    id: 44,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A man covers 60 km at 20 km/h and another 60 km at 30 km/h. What is his average speed?",
    questionHi: "एक व्यक्ति 60 किमी की दूरी 20 किमी/घंटा से और अगली 60 किमी की दूरी 30 किमी/घंटा से तय करता है। उसकी औसत गति क्या है?",
    options: [
      { id: "A", textEn: "24 km/h", textHi: "24 किमी/घंटा" },
      { id: "B", textEn: "25 km/h", textHi: "25 किमी/घंटा" },
      { id: "C", textEn: "22 km/h", textHi: "22 किमी/घंटा" },
      { id: "D", textEn: "26 km/h", textHi: "26 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Total distance = 120 km. Total time = (60/20) + (60/30) = 3 + 2 = 5 hours. Average speed = 120 / 5 = 24 km/h."
  },
  {
    id: 45,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "Find the simple interest on ₹6,000 at 5% per annum for 3 years.",
    questionHi: "₹6,000 पर 5% वार्षिक दर से 3 वर्ष का साधारण ब्याज ज्ञात कीजिए।",
    options: [
      { id: "A", textEn: "₹900", textHi: "₹900" },
      { id: "B", textEn: "₹800", textHi: "₹800" },
      { id: "C", textEn: "₹950", textHi: "₹950" },
      { id: "D", textEn: "₹1,000", textHi: "₹1,000" }
    ],
    correctAnswer: "A",
    explanation: "SI = (6000 × 5 × 3) / 100 = 60 × 15 = ₹900."
  },
  {
    id: 46,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "Simplify: 45 - [38 - {60 ÷ 3 - (6 - 9 ÷ 3)}]",
    questionHi: "सरल कीजिए: 45 - [38 - {60 ÷ 3 - (6 - 9 ÷ 3)}]",
    options: [
      { id: "A", textEn: "24", textHi: "24" },
      { id: "B", textEn: "22", textHi: "22" },
      { id: "C", textEn: "26", textHi: "26" },
      { id: "D", textEn: "20", textHi: "20" }
    ],
    correctAnswer: "A",
    explanation: "Inside: (6 - 3) = 3. {20 - 3} = 17. [38 - 17] = 21. 45 - 21 = 24."
  },
  {
    id: 47,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The ratio of two numbers is 3:4 and their HCF is 4. What is their LCM?",
    questionHi: "दो संख्याओं का अनुपात 3:4 है और उनका HCF 4 है। उनका LCM क्या होगा?",
    options: [
      { id: "A", textEn: "48", textHi: "48" },
      { id: "B", textEn: "36", textHi: "36" },
      { id: "C", textEn: "24", textHi: "24" },
      { id: "D", textEn: "60", textHi: "60" }
    ],
    correctAnswer: "A",
    explanation: "Numbers are 3×4=12 and 4×4=16. LCM(12, 16) = 48."
  },
  {
    id: 48,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A worker is paid ₹210 for 6 days. How much will he be paid for 20 days?",
    questionHi: "एक मजदूर को 6 दिन के लिए ₹210 दिए जाते हैं। उसे 20 दिन के लिए कितने रुपये मिलेंगे?",
    options: [
      { id: "A", textEn: "₹700", textHi: "₹700" },
      { id: "B", textEn: "₹650", textHi: "₹650" },
      { id: "C", textEn: "₹750", textHi: "₹750" },
      { id: "D", textEn: "₹800", textHi: "₹800" }
    ],
    correctAnswer: "A",
    explanation: "Per day wage = 210 / 6 = ₹35. For 20 days = 35 × 20 = ₹700."
  },
  {
    id: 49,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The perimeter of a rectangular field is 120m and its length is 40m. What is its area?",
    questionHi: "एक आयताकार मैदान का परिमाप 120 मीटर है और इसकी लंबाई 40 मीटर है। इसका क्षेत्रफल क्या है?",
    options: [
      { id: "A", textEn: "800 m²", textHi: "800 मी²" },
      { id: "B", textEn: "600 m²", textHi: "600 मी²" },
      { id: "C", textEn: "1000 m²", textHi: "1000 मी²" },
      { id: "D", textEn: "750 m²", textHi: "750 मी²" }
    ],
    correctAnswer: "A",
    explanation: "2(L + B) = 120 => 40 + B = 60 => B = 20m. Area = 40 × 20 = 800 m²."
  },
  {
    id: 50,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "If 15% of a number is 45, what is 40% of that number?",
    questionHi: "यदि किसी संख्या का 15% 45 है, तो उस संख्या का 40% क्या होगा?",
    options: [
      { id: "A", textEn: "120", textHi: "120" },
      { id: "B", textEn: "100", textHi: "100" },
      { id: "C", textEn: "150", textHi: "150" },
      { id: "D", textEn: "80", textHi: "80" }
    ],
    correctAnswer: "A",
    explanation: "Number = (45 / 15) × 100 = 300. 40% of 300 = 120."
  },
  {
    id: 51,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A pipe can fill a cistern in 10 hours and another pipe can empty it in 15 hours. If both are open, how long will it take to fill?",
    questionHi: "एक पाइप टंकी को 10 घंटे में भर सकता है और दूसरा इसे 15 घंटे में खाली कर सकता है। दोनों खुले होने पर टंकी कितने समय में भरेगी?",
    options: [
      { id: "A", textEn: "30 hours", textHi: "30 घंटे" },
      { id: "B", textEn: "25 hours", textHi: "25 घंटे" },
      { id: "C", textEn: "20 hours", textHi: "20 घंटे" },
      { id: "D", textEn: "12 hours", textHi: "12 घंटे" }
    ],
    correctAnswer: "A",
    explanation: "Net rate = (1/10) - (1/15) = (3 - 2)/30 = 1/30. Time required = 30 hours."
  },
  {
    id: 52,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The mean of 10 observations is 25. If each observation is multiplied by 2, what is the new mean?",
    questionHi: "10 प्रेक्षणों का माध्य 25 है। यदि प्रत्येक प्रेक्षण को 2 से गुणा किया जाए, तो नया माध्य क्या होगा?",
    options: [
      { id: "A", textEn: "50", textHi: "50" },
      { id: "B", textEn: "27", textHi: "27" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "30", textHi: "30" }
    ],
    correctAnswer: "A",
    explanation: "When each data point is multiplied by a constant k, the mean is also multiplied by k: 25 × 2 = 50."
  },
  {
    id: 53,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "What is the square root of 5184?",
    questionHi: "5184 का वर्गमूल क्या है?",
    options: [
      { id: "A", textEn: "72", textHi: "72" },
      { id: "B", textEn: "68", textHi: "68" },
      { id: "C", textEn: "74", textHi: "74" },
      { id: "D", textEn: "78", textHi: "78" }
    ],
    correctAnswer: "A",
    explanation: "72² = (70 + 2)² = 4900 + 280 + 4 = 5184."
  },
  {
    id: 54,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A shopkeeper sells a book for ₹270 at a loss of 10%. What was its cost price?",
    questionHi: "एक दुकानदार 10% की हानि पर ₹270 में एक पुस्तक बेचता है। इसका क्रय मूल्य क्या था?",
    options: [
      { id: "A", textEn: "₹300", textHi: "₹300" },
      { id: "B", textEn: "₹290", textHi: "₹290" },
      { id: "C", textEn: "₹310", textHi: "₹310" },
      { id: "D", textEn: "₹320", textHi: "₹320" }
    ],
    correctAnswer: "A",
    explanation: "CP = SP / (1 - Loss%) = 270 / 0.90 = ₹300."
  },
  {
    id: 55,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The diagonal of a square is 10 cm. What is its area?",
    questionHi: "एक वर्ग का विकर्ण 10 सेमी है। इसका क्षेत्रफल क्या है?",
    options: [
      { id: "A", textEn: "50 cm²", textHi: "50 सेमी²" },
      { id: "B", textEn: "100 cm²", textHi: "100 सेमी²" },
      { id: "C", textEn: "25 cm²", textHi: "25 सेमी²" },
      { id: "D", textEn: "75 cm²", textHi: "75 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "Area of square = (d²) / 2 = (10²) / 2 = 100 / 2 = 50 cm²."
  },
  {
    id: 56,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "Solve: (3/5) of (4/7) of 1050 = ?",
    questionHi: "हल कीजिए: 1050 का (4/7) का (3/5) = ?",
    options: [
      { id: "A", textEn: "360", textHi: "360" },
      { id: "B", textEn: "320", textHi: "320" },
      { id: "C", textEn: "420", textHi: "420" },
      { id: "D", textEn: "380", textHi: "380" }
    ],
    correctAnswer: "A",
    explanation: "(3/5) × (4/7) × 1050 = (12/35) × 1050 = 12 × 30 = 360."
  },
  {
    id: 57,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A sum of ₹4,000 amounts to ₹4,800 in 2 years at simple interest. What is the annual interest rate?",
    questionHi: "₹4,000 की राशि साधारण ब्याज पर 2 वर्षों में ₹4,800 हो जाती है। वार्षिक ब्याज दर क्या है?",
    options: [
      { id: "A", textEn: "10%", textHi: "10%" },
      { id: "B", textEn: "8%", textHi: "8%" },
      { id: "C", textEn: "12%", textHi: "12%" },
      { id: "D", textEn: "9%", textHi: "9%" }
    ],
    correctAnswer: "A",
    explanation: "Interest = 4800 - 4000 = ₹800. R = (800 × 100) / (4000 × 2) = 80000 / 8000 = 10%."
  },
  {
    id: 58,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The ratio of milk and water in 45 liters mixture is 4:1. How much water should be added to make ratio 3:2?",
    questionHi: "45 लीटर मिश्रण में दूध और पानी का अनुपात 4:1 है। अनुपात 3:2 बनाने के लिए कितना पानी मिलाना होगा?",
    options: [
      { id: "A", textEn: "15 liters", textHi: "15 लीटर" },
      { id: "B", textEn: "12 liters", textHi: "12 लीटर" },
      { id: "C", textEn: "10 liters", textHi: "10 लीटर" },
      { id: "D", textEn: "8 liters", textHi: "8 लीटर" }
    ],
    correctAnswer: "A",
    explanation: "Milk = 36L, Water = 9L. In ratio 3:2, 3 parts = 36L => 1 part = 12L. Water needed = 12 × 2 = 24L. Added water = 24 - 9 = 15L."
  },
  {
    id: 59,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A 250m long train crosses a 350m long bridge in 30 seconds. What is the speed of the train in km/h?",
    questionHi: "250 मीटर लंबी ट्रेन 350 मीटर लंबे पुल को 30 सेकंड में पार करती है। ट्रेन की गति किमी/घंटा में क्या है?",
    options: [
      { id: "A", textEn: "72 km/h", textHi: "72 किमी/घंटा" },
      { id: "B", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "C", textEn: "80 km/h", textHi: "80 किमी/घंटा" },
      { id: "D", textEn: "54 km/h", textHi: "54 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Total distance = 250 + 350 = 600m. Speed = 600 / 30 = 20 m/s = 20 × (18/5) = 72 km/h."
  },
  {
    id: 60,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "Find the value of (a + b)² - (a - b)²:",
    questionHi: "(a + b)² - (a - b)² का मान क्या है?",
    options: [
      { id: "A", textEn: "4ab", textHi: "4ab" },
      { id: "B", textEn: "2(a² + b²)", textHi: "2(a² + b²)" },
      { id: "C", textEn: "2ab", textHi: "2ab" },
      { id: "D", textEn: "a² - b²", textHi: "a² - b²" }
    ],
    correctAnswer: "A",
    explanation: "(a² + 2ab + b²) - (a² - 2ab + b²) = 4ab."
  },
  {
    id: 61,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The average weight of 8 men increases by 1.5 kg when a new man replaces one weighing 65 kg. What is the weight of the new man?",
    questionHi: "8 व्यक्तियों का औसत वजन 1.5 किलोग्राम बढ़ जाता है जब 65 किलोग्राम वजन वाले व्यक्ति के स्थान पर एक नया व्यक्ति आता है। नए व्यक्ति का वजन क्या है?",
    options: [
      { id: "A", textEn: "77 kg", textHi: "77 किग्रा" },
      { id: "B", textEn: "75 kg", textHi: "75 किग्रा" },
      { id: "C", textEn: "76 kg", textHi: "76 किग्रा" },
      { id: "D", textEn: "80 kg", textHi: "80 किग्रा" }
    ],
    correctAnswer: "A",
    explanation: "Weight of new man = Replaced weight + (Total count × Increase) = 65 + (8 × 1.5) = 65 + 12 = 77 kg."
  },
  {
    id: 62,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "Find the value of: √1764",
    questionHi: "मान ज्ञात कीजिए: √1764",
    options: [
      { id: "A", textEn: "42", textHi: "42" },
      { id: "B", textEn: "44", textHi: "44" },
      { id: "C", textEn: "38", textHi: "38" },
      { id: "D", textEn: "46", textHi: "46" }
    ],
    correctAnswer: "A",
    explanation: "42² = (40 + 2)² = 1600 + 160 + 4 = 1764."
  },
  {
    id: 63,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "What single discount is equivalent to two successive discounts of 20% and 10%?",
    questionHi: "20% और 10% की दो क्रमिक छूट के समतुल्य एकल छूट क्या है?",
    options: [
      { id: "A", textEn: "28%", textHi: "28%" },
      { id: "B", textEn: "30%", textHi: "30%" },
      { id: "C", textEn: "25%", textHi: "25%" },
      { id: "D", textEn: "26%", textHi: "26%" }
    ],
    correctAnswer: "A",
    explanation: "Equivalent discount = 20 + 10 - (20 × 10)/100 = 30 - 2 = 28%."
  },
  {
    id: 64,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A cylinder has a radius of 7 cm and a height of 10 cm. What is its volume? (π = 22/7)",
    questionHi: "एक बेलन की त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है। इसका आयतन क्या है? (π = 22/7)",
    options: [
      { id: "A", textEn: "1540 cm³", textHi: "1540 सेमी³" },
      { id: "B", textEn: "1440 cm³", textHi: "1440 सेमी³" },
      { id: "C", textEn: "1650 cm³", textHi: "1650 सेमी³" },
      { id: "D", textEn: "1320 cm³", textHi: "1320 सेमी³" }
    ],
    correctAnswer: "A",
    explanation: "Volume = πr²h = (22/7) × 7 × 7 × 10 = 22 × 70 = 1540 cm³."
  },
  {
    id: 65,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "If x : y = 4 : 5, find the value of (3x + y) : (5x - 2y).",
    questionHi: "यदि x : y = 4 : 5 है, तो (3x + y) : (5x - 2y) का मान ज्ञात कीजिए।",
    options: [
      { id: "A", textEn: "17 : 10", textHi: "17 : 10" },
      { id: "B", textEn: "15 : 8", textHi: "15 : 8" },
      { id: "C", textEn: "16 : 9", textHi: "16 : 9" },
      { id: "D", textEn: "12 : 7", textHi: "12 : 7" }
    ],
    correctAnswer: "A",
    explanation: "Put x = 4, y = 5: Numerator = 3(4) + 5 = 17. Denominator = 5(4) - 2(5) = 20 - 10 = 10. Ratio = 17 : 10."
  },
  {
    id: 66,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A sum of ₹1,600 gives a simple interest of ₹252 in 2 years and 3 months. What is the annual interest rate?",
    questionHi: "₹1,600 की राशि 2 वर्ष और 3 महीने में ₹252 का साधारण ब्याज देती है। वार्षिक ब्याज दर क्या है?",
    options: [
      { id: "A", textEn: "7%", textHi: "7%" },
      { id: "B", textEn: "8%", textHi: "8%" },
      { id: "C", textEn: "6%", textHi: "6%" },
      { id: "D", textEn: "7.5%", textHi: "7.5%" }
    ],
    correctAnswer: "A",
    explanation: "Time = 2 + 3/12 = 2.25 years = 9/4 years. R = (252 × 100) / (1600 × 2.25) = 25200 / 3600 = 7%."
  },
  {
    id: 67,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "In an examination, 65% students passed in English and 70% in Math. If 50% passed in both, what percent failed in both?",
    questionHi: "एक परीक्षा में 65% छात्र अंग्रेजी में और 70% गणित में उत्तीर्ण हुए। यदि 50% दोनों में उत्तीर्ण हुए, तो दोनों में कितने प्रतिशत अनुत्तीर्ण हुए?",
    options: [
      { id: "A", textEn: "15%", textHi: "15%" },
      { id: "B", textEn: "10%", textHi: "10%" },
      { id: "C", textEn: "20%", textHi: "20%" },
      { id: "D", textEn: "25%", textHi: "25%" }
    ],
    correctAnswer: "A",
    explanation: "P(E ∪ M) = 65 + 70 - 50 = 85% passed in at least one subject. Failed in both = 100 - 85 = 15%."
  },
  {
    id: 68,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "The product of two consecutive positive even integers is 168. What is the greater integer?",
    questionHi: "दो क्रमागत धनात्मक सम पूर्णांकों का गुणनफल 168 है। बड़ा पूर्णांक कौन सा है?",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "12", textHi: "12" },
      { id: "C", textEn: "16", textHi: "16" },
      { id: "D", textEn: "18", textHi: "18" }
    ],
    correctAnswer: "A",
    explanation: "12 × 14 = 168. The larger integer is 14."
  },
  {
    id: 69,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "What is the value of: (1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/10)?",
    questionHi: "(1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/10) का मान क्या है?",
    options: [
      { id: "A", textEn: "1/10", textHi: "1/10" },
      { id: "B", textEn: "1/2", textHi: "1/2" },
      { id: "C", textEn: "9/10", textHi: "9/10" },
      { id: "D", textEn: "1/20", textHi: "1/20" }
    ],
    correctAnswer: "A",
    explanation: "(1/2) × (2/3) × (3/4) × ... × (9/10). All intermediate terms cancel, leaving 1/10."
  },
  {
    id: 70,
    section: "rail_math",
    sectionName: "2. Mathematics",
    questionEn: "A car covers a distance of 450 km in 5 hours. What is its speed in m/s?",
    questionHi: "एक कार 5 घंटे में 450 किमी की दूरी तय करती है। इसकी गति मीटर/सेकंड में क्या है?",
    options: [
      { id: "A", textEn: "25 m/s", textHi: "25 मी/से" },
      { id: "B", textEn: "20 m/s", textHi: "20 मी/से" },
      { id: "C", textEn: "30 m/s", textHi: "30 मी/से" },
      { id: "D", textEn: "90 m/s", textHi: "90 मी/से" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 450 / 5 = 90 km/h = 90 × (5/18) = 25 m/s."
  },

  // ===================================================
  // SECTION 3: REASONING & INTELLIGENCE (Q71 - Q100)
  // ===================================================
  {
    id: 71,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Select the related word: Train : Track :: Bus : ?",
    questionHi: "संबंधित शब्द चुनिए: ट्रेन : पटरी :: बस : ?",
    options: [
      { id: "A", textEn: "Road", textHi: "सड़क (Road)" },
      { id: "B", textEn: "Driver", textHi: "चालक" },
      { id: "C", textEn: "Wheels", textHi: "पहिए" },
      { id: "D", textEn: "Fuel", textHi: "ईंधन" }
    ],
    correctAnswer: "A",
    explanation: "A train moves on a track, while a bus moves on a road."
  },
  {
    id: 72,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Complete the series: 3, 7, 15, 31, 63, ?",
    questionHi: "श्रृंखला पूर्ण कीजिए: 3, 7, 15, 31, 63, ?",
    options: [
      { id: "A", textEn: "127", textHi: "127" },
      { id: "B", textEn: "126", textHi: "126" },
      { id: "C", textEn: "125", textHi: "125" },
      { id: "D", textEn: "128", textHi: "128" }
    ],
    correctAnswer: "A",
    explanation: "Pattern is (n × 2) + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63, 63×2+1=127."
  },
  {
    id: 73,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    questionHi: "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'उसकी माँ मेरी माँ की इकलौती बेटी है।' वह महिला उस पुरुष से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Mother", textHi: "माँ (Mother)" },
      { id: "B", textEn: "Sister", textHi: "बहन" },
      { id: "C", textEn: "Aunt", textHi: "मौसी" },
      { id: "D", textEn: "Grandmother", textHi: "नानी" }
    ],
    correctAnswer: "A",
    explanation: "The only daughter of the woman's mother is the woman herself. So the woman is his mother."
  },
  {
    id: 74,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If 'DELHI' is coded as '73541' and 'CALCUTTA' is coded as '82589662', how is 'CALICUT' coded?",
    questionHi: "यदि 'DELHI' को '73541' और 'CALCUTTA' को '82589662' लिखा जाता है, तो 'CALICUT' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "8251896", textHi: "8251896" },
      { id: "B", textEn: "8251897", textHi: "8251897" },
      { id: "C", textEn: "8251968", textHi: "8251968" },
      { id: "D", textEn: "8251869", textHi: "8251869" }
    ],
    correctAnswer: "A",
    explanation: "Direct letter-to-digit matching: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => 8251896."
  },
  {
    id: 75,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the odd one out: Copper, Iron, Silver, Brass.",
    questionHi: "विषम चुनिए: तांबा, लोहा, चांदी, पीतल।",
    options: [
      { id: "A", textEn: "Brass", textHi: "पीतल (Brass - मिश्र धातु)" },
      { id: "B", textEn: "Copper", textHi: "तांबा" },
      { id: "C", textEn: "Iron", textHi: "लोहा" },
      { id: "D", textEn: "Silver", textHi: "चांदी" }
    ],
    correctAnswer: "A",
    explanation: "Brass is an alloy (Copper + Zinc), while Copper, Iron, and Silver are pure elemental metals."
  },
  {
    id: 76,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "A person walks 10m towards North, turns right and walks 15m, turns right and walks 10m. How far is he from the starting point?",
    questionHi: "एक व्यक्ति उत्तर की ओर 10 मीटर चलता है, दाएं मुड़कर 15 मीटर चलता है, फिर दाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
    options: [
      { id: "A", textEn: "15 m", textHi: "15 मीटर" },
      { id: "B", textEn: "10 m", textHi: "10 मीटर" },
      { id: "C", textEn: "20 m", textHi: "20 मीटर" },
      { id: "D", textEn: "25 m", textHi: "25 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "The two 10m movements along the North-South axis cancel out, leaving a horizontal displacement of 15m."
  },
  {
    id: 77,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Statements: All crows are birds. All birds are animals. Conclusion: I. All crows are animals. II. Some animals are crows.",
    questionHi: "कथन: सभी कौवे पक्षी हैं। सभी पक्षी जानवर हैं। निष्कर्ष: I. सभी कौवे जानवर हैं। II. कुछ जानवर कौवे हैं।",
    options: [
      { id: "A", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "B", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "C", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Crows ⊆ Birds ⊆ Animals. Therefore, All Crows are Animals and Some Animals are Crows. Both follow."
  },
  {
    id: 78,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "What is the angle between the hands of a clock at 3:00?",
    questionHi: "3:00 बजे घड़ी की सुइयों के बीच का कोण क्या होता है?",
    options: [
      { id: "A", textEn: "90°", textHi: "90°" },
      { id: "B", textEn: "60°", textHi: "60°" },
      { id: "C", textEn: "45°", textHi: "45°" },
      { id: "D", textEn: "120°", textHi: "120°" }
    ],
    correctAnswer: "A",
    explanation: "At 3:00, the minute hand points to 12 and hour hand points to 3. Angle = 3 × 30° = 90°."
  },
  {
    id: 79,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Which number replaces the question mark (?): 8 : 64 :: 11 : ?",
    questionHi: "प्रश्नवाचक चिन्ह (?) के स्थान पर कौन सी संख्या आएगी: 8 : 64 :: 11 : ?",
    options: [
      { id: "A", textEn: "121", textHi: "121" },
      { id: "B", textEn: "131", textHi: "131" },
      { id: "C", textEn: "110", textHi: "110" },
      { id: "D", textEn: "144", textHi: "144" }
    ],
    correctAnswer: "A",
    explanation: "8² = 64, therefore 11² = 121."
  },
  {
    id: 80,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "In a row of boys, Suresh is 7th from the left and Rohit is 12th from the right. If they interchange their positions, Suresh becomes 22nd from the left. How many boys are there in the row?",
    questionHi: "लड़कों की एक पंक्ति में सुरेश बाएं से 7वें और रोहित दाएं से 12वें स्थान पर है। स्थान बदलने पर सुरेश बाएं से 22वां हो जाता है। पंक्ति में कुल कितने लड़के हैं?",
    options: [
      { id: "A", textEn: "33", textHi: "33" },
      { id: "B", textEn: "31", textHi: "31" },
      { id: "C", textEn: "34", textHi: "34" },
      { id: "D", textEn: "32", textHi: "32" }
    ],
    correctAnswer: "A",
    explanation: "Suresh's new position from left = 22. That position from right was Rohit's original = 12. Total = 22 + 12 - 1 = 33."
  },
  {
    id: 81,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the missing term in the sequence: B, E, H, K, ?",
    questionHi: "अनुक्रम में लुप्त पद ज्ञात कीजिए: B, E, H, K, ?",
    options: [
      { id: "A", textEn: "N", textHi: "N" },
      { id: "B", textEn: "M", textHi: "M" },
      { id: "C", textEn: "O", textHi: "O" },
      { id: "D", textEn: "P", textHi: "P" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is shifted forward by +3: B(2)+3=E(5), E+3=H(8), H+3=K(11), K+3=N(14)."
  },
  {
    id: 82,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If 'WATER' is coded as 'XBUFS', how is 'FIRE' coded?",
    questionHi: "यदि 'WATER' को 'XBUFS' लिखा जाता है, तो 'FIRE' को क्या लिखा जाएगा?",
    options: [
      { id: "A", textEn: "GJSF", textHi: "GJSF" },
      { id: "B", textEn: "EHSD", textHi: "EHSD" },
      { id: "C", textEn: "GJTF", textHi: "GJTF" },
      { id: "D", textEn: "GKSE", textHi: "GKSE" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is +1: F(+1)=G, I(+1)=J, R(+1)=S, E(+1)=F => GJSF."
  },
  {
    id: 83,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Statements: Some apples are mangoes. All mangoes are bananas. Conclusion: I. Some apples are bananas. II. Some bananas are mangoes.",
    questionHi: "कथन: कुछ सेब आम हैं। सभी आम केले हैं। निष्कर्ष: I. कुछ सेब केले हैं। II. कुछ केले आम हैं।",
    options: [
      { id: "A", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "B", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "C", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "The overlapping portion of Apples and Mangoes is entirely within Bananas, so Some apples are bananas. Also Some bananas are mangoes. Both follow."
  },
  {
    id: 84,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the odd number: 27, 64, 125, 144, 216.",
    questionHi: "विषम संख्या चुनिए: 27, 64, 125, 144, 216.",
    options: [
      { id: "A", textEn: "144", textHi: "144 (केवल वर्ग है, घन नहीं)" },
      { id: "B", textEn: "27", textHi: "27" },
      { id: "C", textEn: "64", textHi: "64" },
      { id: "D", textEn: "125", textHi: "125" }
    ],
    correctAnswer: "A",
    explanation: "27=3³, 64=4³, 125=5³, 216=6³ are cubes. 144 is 12² (not a perfect cube)."
  },
  {
    id: 85,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "A is brother of B. B is daughter of C. D is father of A. How is C related to D?",
    questionHi: "A, B का भाई है। B, C की पुत्री है। D, A का पिता है। C, D से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Wife", textHi: "पत्नी (Wife)" },
      { id: "B", textEn: "Sister", textHi: "बहन" },
      { id: "C", textEn: "Mother", textHi: "माँ" },
      { id: "D", textEn: "Daughter", textHi: "पुत्री" }
    ],
    correctAnswer: "A",
    explanation: "A and B are siblings. D is their father and C is their mother. Therefore, C is the wife of D."
  },
  {
    id: 86,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If '+' means '÷', '-' means '×', '×' means '+', and '÷' means '-', then what is: 20 + 5 - 4 × 6 ÷ 2?",
    questionHi: "यदि '+' का अर्थ '÷', '-' का अर्थ '×', '×' का अर्थ '+', और '÷' का अर्थ '-' है, तो 20 + 5 - 4 × 6 ÷ 2 का मान क्या है?",
    options: [
      { id: "A", textEn: "20", textHi: "20" },
      { id: "B", textEn: "22", textHi: "22" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "16", textHi: "16" }
    ],
    correctAnswer: "A",
    explanation: "20 ÷ 5 × 4 + 6 - 2 = 4 × 4 + 6 - 2 = 16 + 6 - 2 = 20."
  },
  {
    id: 87,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If yesterday was Tuesday, what day will it be after tomorrow?",
    questionHi: "यदि कल मंगलवार था, तो परसों कौन सा दिन होगा?",
    options: [
      { id: "A", textEn: "Friday", textHi: "शुक्रवार (Friday)" },
      { id: "B", textEn: "Saturday", textHi: "शनिवार" },
      { id: "C", textEn: "Thursday", textHi: "गुरुवार" },
      { id: "D", textEn: "Sunday", textHi: "रविवार" }
    ],
    correctAnswer: "A",
    explanation: "Yesterday was Tuesday => Today is Wednesday. Tomorrow is Thursday, day after tomorrow is Friday."
  },
  {
    id: 88,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Which of the following diagrams best represents the relationship between: Animals, Dogs, Cats?",
    questionHi: "निम्नलिखित में से कौन सा वेन आरेख जानवर, कुत्ते और बिल्लियाँ के बीच संबंध को दर्शाता है?",
    options: [
      { id: "A", textEn: "Two separate circles inside one big circle", textHi: "एक बड़े वृत्त के अंदर दो अलग-अलग वृत्त" },
      { id: "B", textEn: "Three intersecting circles", textHi: "तीन परस्पर प्रतिच्छेदी वृत्त" },
      { id: "C", textEn: "Three separate circles", textHi: "तीन अलग-अलग वृत्त" },
      { id: "D", textEn: "Concentric circles", textHi: "सकेंद्री वृत्त" }
    ],
    correctAnswer: "A",
    explanation: "Both dogs and cats are mutually exclusive subclasses of animals."
  },
  {
    id: 89,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Complete the analogy: Doctor : Hospital :: Teacher : ?",
    questionHi: "सादृश्यता पूर्ण कीजिए: डॉक्टर : अस्पताल :: शिक्षक : ?",
    options: [
      { id: "A", textEn: "School", textHi: "विद्यालय / स्कूल (School)" },
      { id: "B", textEn: "Students", textHi: "विद्यार्थी" },
      { id: "C", textEn: "Books", textHi: "किताबें" },
      { id: "D", textEn: "Classroom", textHi: "कक्षा" }
    ],
    correctAnswer: "A",
    explanation: "A doctor works in a hospital, while a teacher works in a school."
  },
  {
    id: 90,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "What is the mirror image of the word 'RAIL' when placed in front of a vertical mirror?",
    questionHi: "एक ऊर्ध्वाधर दर्पण के सामने रखे जाने पर शब्द 'RAIL' का दर्पण प्रतिबिंब कैसा दिखेगा?",
    options: [
      { id: "A", textEn: "Reversed characters from right to left (⅃IAЯ)", textHi: "दाएं से बाएं उल्टे अक्षर (⅃IAЯ)" },
      { id: "B", textEn: "RAIL unchanged", textHi: "अपरिवर्तित" },
      { id: "C", textEn: "LIAR", textHi: "LIAR" },
      { id: "D", textEn: "Upside down", textHi: "उल्टा" }
    ],
    correctAnswer: "A",
    explanation: "In a vertical mirror, lateral inversion reverses the horizontal order (starting with flipped L, then I, then A, then flipped R)."
  },
  {
    id: 91,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the missing number in the matrix: [2, 3, 5], [7, 11, 13], [17, 19, ?]",
    questionHi: "मैट्रिक्स में लुप्त संख्या ज्ञात कीजिए: [2, 3, 5], [7, 11, 13], [17, 19, ?]",
    options: [
      { id: "A", textEn: "23", textHi: "23 (अभाज्य संख्या)" },
      { id: "B", textEn: "21", textHi: "21" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "27", textHi: "27" }
    ],
    correctAnswer: "A",
    explanation: "The numbers are consecutive prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23."
  },
  {
    id: 92,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "A man is facing West. He turns 45° clockwise and then 180° in the same direction. Which direction is he facing now?",
    questionHi: "एक व्यक्ति पश्चिम की ओर उन्मुख है। वह 45° दक्षिणावर्त और फिर उसी दिशा में 180° घूमता है। अब उसका मुख किस दिशा में है?",
    options: [
      { id: "A", textEn: "South-East", textHi: "दक्षिण-पूर्व (South-East)" },
      { id: "B", textEn: "North-East", textHi: "उत्तर-पूर्व" },
      { id: "C", textEn: "North-West", textHi: "उत्तर-पश्चिम" },
      { id: "D", textEn: "South-West", textHi: "दक्षिण-पश्चिम" }
    ],
    correctAnswer: "A",
    explanation: "West (270°) + 45° = North-West (315°). Rotating 180° from North-West points directly to South-East."
  },
  {
    id: 93,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "How many triangles are there in a square with both diagonals drawn?",
    questionHi: "दोनों विकर्ण खींचे गए एक वर्ग में कुल कितने त्रिभुज होते हैं?",
    options: [
      { id: "A", textEn: "8", textHi: "8" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "4", textHi: "4" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "There are 4 small single triangles and 4 larger composite triangles formed by halves of the square, giving 4 × 2 = 8 triangles."
  },
  {
    id: 94,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If P means 'greater than' and Q means 'less than', which statement represents: 5 is greater than 3 and less than 7?",
    questionHi: "यदि P का अर्थ 'से बड़ा' और Q का अर्थ 'से छोटा' है, तो कौन सा कथन दर्शाता है: 5, 3 से बड़ा और 7 से छोटा है?",
    options: [
      { id: "A", textEn: "5 P 3 and 5 Q 7", textHi: "5 P 3 और 5 Q 7" },
      { id: "B", textEn: "5 Q 3 and 5 P 7", textHi: "5 Q 3 और 5 P 7" },
      { id: "C", textEn: "3 P 5 and 7 Q 5", textHi: "3 P 5 और 7 Q 5" },
      { id: "D", textEn: "5 P 7 and 3 Q 5", textHi: "5 P 7 और 3 Q 5" }
    ],
    correctAnswer: "A",
    explanation: "5 > 3 is '5 P 3', and 5 < 7 is '5 Q 7'."
  },
  {
    id: 95,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Which word comes first when arranged in dictionary order: Praise, Prayer, Prank, Practice?",
    questionHi: "शब्दकोश क्रम में व्यवस्थित करने पर कौन सा शब्द पहले आता है: Praise, Prayer, Prank, Practice?",
    options: [
      { id: "A", textEn: "Practice", textHi: "Practice" },
      { id: "B", textEn: "Praise", textHi: "Praise" },
      { id: "C", textEn: "Prank", textHi: "Prank" },
      { id: "D", textEn: "Prayer", textHi: "Prayer" }
    ],
    correctAnswer: "A",
    explanation: "Comparing fourth letters: 'Practice' has 'c', 'Praise' has 'i', 'Prank' has 'n', 'Prayer' has 'y'. 'Practice' is first."
  },
  {
    id: 96,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the odd letter group: ACE, GIK, MOQ, UWZ.",
    questionHi: "विषम अक्षर समूह ज्ञात कीजिए: ACE, GIK, MOQ, UWZ.",
    options: [
      { id: "A", textEn: "UWZ", textHi: "UWZ" },
      { id: "B", textEn: "ACE", textHi: "ACE" },
      { id: "C", textEn: "GIK", textHi: "GIK" },
      { id: "D", textEn: "MOQ", textHi: "MOQ" }
    ],
    correctAnswer: "A",
    explanation: "A(+2)C(+2)E, G(+2)I(+2)K, M(+2)O(+2)Q follow +2 steps. U(21)+2=W(23)+3=Z(26) has +3 step at the end."
  },
  {
    id: 97,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "If 1st March was Wednesday, what day was 31st March in the same year?",
    questionHi: "यदि 1 मार्च को बुधवार था, तो उसी वर्ष 31 मार्च को कौन सा दिन था?",
    options: [
      { id: "A", textEn: "Friday", textHi: "शुक्रवार (Friday)" },
      { id: "B", textEn: "Thursday", textHi: "गुरुवार" },
      { id: "C", textEn: "Saturday", textHi: "शनिवार" },
      { id: "D", textEn: "Wednesday", textHi: "बुधवार" }
    ],
    correctAnswer: "A",
    explanation: "Difference = 30 days. 30 mod 7 = 2 odd days. Wednesday + 2 days = Friday."
  },
  {
    id: 98,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Statements: No train is car. All cars are buses. Conclusion: I. Some buses are cars. II. No train is bus.",
    questionHi: "कथन: कोई ट्रेन कार नहीं है। सभी कारें बसें हैं। निष्कर्ष: I. कुछ बसें कारें हैं। II. कोई ट्रेन बस नहीं है।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Since Cars ⊆ Buses, Some buses are cars is definitely true. However, Train and Bus can intersect outside Cars, so II is not necessarily true."
  },
  {
    id: 99,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Find the missing number in the sequence: 2, 6, 12, 20, 30, ?",
    questionHi: "अनुक्रम में लुप्त संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, ?",
    options: [
      { id: "A", textEn: "42", textHi: "42" },
      { id: "B", textEn: "40", textHi: "40" },
      { id: "C", textEn: "44", textHi: "44" },
      { id: "D", textEn: "48", textHi: "48" }
    ],
    correctAnswer: "A",
    explanation: "Pattern: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42 (or difference increases by +2: +4, +6, +8, +10, +12 => 42)."
  },
  {
    id: 100,
    section: "rail_reasoning",
    sectionName: "3. General Intelligence & Reasoning",
    questionEn: "Choose the alternative which closely resembles the water image of the letter group 'KID':",
    questionHi: "अक्षर समूह 'KID' के जल प्रतिबिंब (Water Image) का चयन कीजिए:",
    options: [
      { id: "A", textEn: "KID remains vertically symmetric (K, I, D horizontally invariant)", textHi: "KID क्षैतिज रूप से अपरिवर्तित रहता है" },
      { id: "B", textEn: "DIK", textHi: "DIK" },
      { id: "C", textEn: "Reversed left-to-right", textHi: "दाएं से बाएं उल्टा" },
      { id: "D", textEn: "None of these", textHi: "इनमें से कोई नहीं" }
    ],
    correctAnswer: "A",
    explanation: "Letters K, I, and D have horizontal lines of symmetry, so their water reflection leaves them visually identical."
  }
];
