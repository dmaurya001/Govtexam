/**
 * GovtExamHub — Police (UP Police Constable & SI / State Police Exam)
 * Official 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 */

const POLICE_EXAM_CONFIG = {
  id: "police",
  title: "Police (UP / State Police Constable & SI Mock Test)",
  shortName: "Police",
  icon: "👮",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Police Exam Duration
  marksPerCorrect: 1,
  negativeMarking: 0.25,
  sections: [
    { id: "pol_hindi", name: "1. सामान्य हिंदी (General Hindi)", start: 1, end: 25, total: 25 },
    { id: "pol_gk", name: "2. सामान्य ज्ञान (General Knowledge)", start: 26, end: 50, total: 25 },
    { id: "pol_maths", name: "3. संख्यात्मक योग्यता (Maths)", start: 51, end: 75, total: 25 },
    { id: "pol_reasoning", name: "4. मानसिक अभिरुचि व रीजनिंग", start: 76, end: 100, total: 25 }
  ]
};

const POLICE_QUESTIONS_DATA = [
  // --- SECTION 1: सामान्य हिंदी (Q1 - Q25) ---
  {
    id: 1,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which of the following is the correct Sandhi-Vichchhed of the word 'Pawan' (पवन)?",
    questionHi: "'पवन' शब्द का सही संधि-विच्छेद निम्नलिखित में से कौन-सा है?",
    options: [
      { id: "A", textEn: "Po + An", textHi: "पो + अन" },
      { id: "B", textEn: "Pau + An", textHi: "पौ + अन" },
      { id: "C", textEn: "P + Wan", textHi: "प + वन" },
      { id: "D", textEn: "Pa + Wan", textHi: "पा + वन" }
    ],
    correctAnswer: "A",
    explanation: "अयादि स्वर संधि के नियमानुसार: ओ + अ = अव्, अतः 'पो + अन = पवन'। (पौ + अन = पावन होता है)।"
  },
  {
    id: 2,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the synonym of the word 'Surya' (सूर्य - Sun)?",
    questionHi: "'सूर्य' का पर्यायवाची शब्द निम्नलिखित में से कौन-सा है?",
    options: [
      { id: "A", textEn: "Dinkar", textHi: "दिनकर" },
      { id: "B", textEn: "Nishachar", textHi: "निशाचर" },
      { id: "C", textEn: "Shashank", textHi: "शशांक" },
      { id: "D", textEn: "Sudhakar", textHi: "सुधाकर" }
    ],
    correctAnswer: "A",
    explanation: "'दिनकर', दिवाकर, भानु, भास्कर सूर्य के पर्यायवाची हैं। शशांक और सुधाकर चंद्रमा के पर्यायवाची हैं।"
  },
  {
    id: 3,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the antonym of the word 'Anurag' (अनुराग)?",
    questionHi: "'अनुराग' शब्द का विलोम शब्द क्या होगा?",
    options: [
      { id: "A", textEn: "Vairag", textHi: "वैराग" },
      { id: "B", textEn: "Virag", textHi: "विराग" },
      { id: "C", textEn: "Prem", textHi: "प्रेम" },
      { id: "D", textEn: "Krodh", textHi: "क्रोध" }
    ],
    correctAnswer: "B",
    explanation: "'अनुराग' (प्रेम/आसक्ति) का विपरीतार्थक शब्द 'विराग' (उदासीनता/वैराग्य भाव) होता है।"
  },
  {
    id: 4,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which Samas (compound) is present in the word 'Yathashakti' (यथाशक्ति)?",
    questionHi: "'यथाशक्ति' शब्द में कौन-सा समास है?",
    options: [
      { id: "A", textEn: "Avyayibhav Samas", textHi: "अव्ययीभाव समास" },
      { id: "B", textEn: "Tatpurush Samas", textHi: "तत्पुरुष समास" },
      { id: "C", textEn: "Dvandva Samas", textHi: "द्वंद्व समास" },
      { id: "D", textEn: "Bahuvrihi Samas", textHi: "बहुव्रीहि समास" }
    ],
    correctAnswer: "A",
    explanation: "'यथा' एक अव्यय (उपसर्ग) है और विग्रह 'शक्ति के अनुसार' होता है, अतः यह अव्ययीभाव समास है।"
  },
  {
    id: 5,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the meaning of the Hindi idiom 'Aankhon ka tara hona' (आँखों का तारा होना)?",
    questionHi: "'आँखों का तारा होना' मुहावरे का सही अर्थ क्या है?",
    options: [
      { id: "A", textEn: "Very dear / Highly beloved", textHi: "अत्यधिक प्रिय होना" },
      { id: "B", textEn: "To see clearly at night", textHi: "रात में साफ़ दिखना" },
      { id: "C", textEn: "To deceive someone", textHi: "धोखा देना" },
      { id: "D", textEn: "To get angry", textHi: "नाराज़ होना" }
    ],
    correctAnswer: "A",
    explanation: "'आँखों का तारा होना' का अर्थ बहुत प्यारा या अत्यधिक प्रिय होना है।"
  },
  {
    id: 6,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the Sthayi Bhava (permanent emotion) of 'Raudra Rasa' (रौद्र रस)?",
    questionHi: "'रौद्र रस' का स्थायी भाव क्या होता है?",
    options: [
      { id: "A", textEn: "Krodh (Anger)", textHi: "क्रोध" },
      { id: "B", textEn: "Bhaya (Fear)", textHi: "भय" },
      { id: "C", textEn: "Shoka (Sorrow)", textHi: "शोक" },
      { id: "D", textEn: "Utsaha (Zeal)", textHi: "उत्साह" }
    ],
    correctAnswer: "A",
    explanation: "रौद्र रस का स्थायी भाव 'क्रोध' है। भयानक का 'भय', करुण का 'शोक', तथा वीर रस का 'उत्साह' होता है।"
  },
  {
    id: 7,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which of the following words is correctly spelled (Shuddh Vartani)?",
    questionHi: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
    options: [
      { id: "A", textEn: "Ujjwal (उज्ज्वल)", textHi: "उज्ज्वल" },
      { id: "B", textEn: "Ujwal (उज्वल)", textHi: "उज्वल" },
      { id: "C", textEn: "Ujjawal (उज्जवल)", textHi: "उज्जवल" },
      { id: "D", textEn: "Ujjval (उजज्वल)", textHi: "उजज्वल" }
    ],
    correctAnswer: "A",
    explanation: "शुद्ध वर्तनी 'उज्ज्वल' (उत् + ज्वल = उज्ज्वल, जिसमें दोनों 'ज' आधे होते हैं) है।"
  },
  {
    id: 8,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Who is the celebrated author of the Hindi epic novel 'Godan' (गोदान)?",
    questionHi: "प्रसिद्ध उपन्यास 'गोदान' के लेखक कौन हैं?",
    options: [
      { id: "A", textEn: "Munshi Premchand", textHi: "मुंशी प्रेमचंद" },
      { id: "B", textEn: "Jaishankar Prasad", textHi: "जयशंकर प्रसाद" },
      { id: "C", textEn: "Ramdhari Singh Dinkar", textHi: "रामधारी सिंह दिनकर" },
      { id: "D", textEn: "Suryakant Tripathi Nirala", textHi: "सूर्यकांत त्रिपाठी निराला" }
    ],
    correctAnswer: "A",
    explanation: "उपन्यास सम्राट मुंशी प्रेमचंद ने 1936 में ग्रामीण भारतीय किसान जीवन पर आधारित अमर कृति 'गोदान' लिखी थी।"
  },
  {
    id: 9,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the feminine gender form (Striling) of the word 'Kavi' (कवि)?",
    questionHi: "'कवि' शब्द का सही स्त्रीलिंग रूप क्या होगा?",
    options: [
      { id: "A", textEn: "Kavayitri", textHi: "कवयित्री" },
      { id: "B", textEn: "Kaviyatri", textHi: "कवियत्री" },
      { id: "C", textEn: "Kavita", textHi: "कविता" },
      { id: "D", textEn: "Kavini", textHi: "कविनी" }
    ],
    correctAnswer: "A",
    explanation: "'कवि' का शुद्ध व्याकरणिक स्त्रीलिंग 'कवयित्री' होता है।"
  },
  {
    id: 10,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the Karaka (case) represented by the Vibhakti 'Se' (से) for separation (Algaav)?",
    questionHi: "'पेड़ से पत्ता गिरा' — इस वाक्य में 'से' किस कारक का चिह्न है?",
    options: [
      { id: "A", textEn: "Karan Karak", textHi: "करण कारक" },
      { id: "B", textEn: "Apadan Karak", textHi: "अपादान कारक" },
      { id: "C", textEn: "Karta Karak", textHi: "कर्ता कारक" },
      { id: "D", textEn: "Karm Karak", textHi: "कर्म कारक" }
    ],
    correctAnswer: "B",
    explanation: "जब किसी वस्तु का किसी स्थान से अलग होने का बोध हो, तो वहाँ 'अपादान कारक' (अपादान से अलग) होता है।"
  },
  {
    id: 11,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the one-word substitution for 'Jo sab kuchh jaanta ho' (जो सब कुछ जानता हो)?",
    questionHi: "'जो सब कुछ जानता हो' — वाक्यांश के लिए एक शब्द क्या होगा?",
    options: [
      { id: "A", textEn: "Sarvajna", textHi: "सर्वज्ञ" },
      { id: "B", textEn: "Alpajna", textHi: "अल्पज्ञ" },
      { id: "C", textEn: "Sarvavyapi", textHi: "सर्वव्यापी" },
      { id: "D", textEn: "Vidwan", textHi: "विद्वान" }
    ],
    correctAnswer: "A",
    explanation: "जो सब कुछ जानता हो = 'सर्वज्ञ'। जो कम जानता हो = 'अल्पज्ञ'। जो हर जगह उपस्थित हो = 'सर्वव्यापी'। "
  },
  {
    id: 12,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the Tatsama form of the Tadbhava word 'Aag' (आग)?",
    questionHi: "'आग' का तत्सम रूप क्या होगा?",
    options: [
      { id: "A", textEn: "Agni", textHi: "अग्नि" },
      { id: "B", textEn: "Anal", textHi: "अनल" },
      { id: "C", textEn: "Pawak", textHi: "पावक" },
      { id: "D", textEn: "Jwala", textHi: "ज्वाला" }
    ],
    correctAnswer: "A",
    explanation: "संस्कृत के मूल शब्द 'अग्नि' का तद्भव रूप 'आग' है।"
  },
  {
    id: 13,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which figure of speech (Alankar) is used when a word is repeated multiple times with different meanings?",
    questionHi: "'कनक कनक ते सौ गुनी, मादकता अधिकाय' — इस पंक्ति में कौन-सा अलंकार है?",
    options: [
      { id: "A", textEn: "Yamak Alankar", textHi: "यमक अलंकार" },
      { id: "B", textEn: "Shlesh Alankar", textHi: "श्लेष अलंकार" },
      { id: "C", textEn: "Anupras Alankar", textHi: "अनुप्रास अलंकार" },
      { id: "D", textEn: "Upama Alankar", textHi: "उपमा अलंकार" }
    ],
    correctAnswer: "A",
    explanation: "जहाँ एक ही शब्द एक से अधिक बार आए और हर बार उसका अर्थ अलग हो (यहाँ एक कनक = सोना, दूसरा कनक = धतूरा), वहाँ 'यमक अलंकार' होता है।"
  },
  {
    id: 14,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the prefix (Upasarg) in the word 'Apmaan' (अपमान)?",
    questionHi: "'अपमान' शब्द में कौन-सा उपसर्ग लगा है?",
    options: [
      { id: "A", textEn: "Ap", textHi: "अप" },
      { id: "B", textEn: "A", textHi: "अ" },
      { id: "C", textEn: "Apa", textHi: "अपमान" },
      { id: "D", textEn: "Maan", textHi: "मान" }
    ],
    correctAnswer: "A",
    explanation: "'मान' मूल शब्द में 'अप' उपसर्ग जुड़ने से 'अपमान' बनता है।"
  },
  {
    id: 15,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "In which script is Hindi written officially as per the Constitution?",
    questionHi: "भारतीय संविधान के अनुसार संघ की राजभाषा हिंदी किस लिपि में लिखी जाती है?",
    options: [
      { id: "A", textEn: "Devanagari", textHi: "देवनागरी लिपि" },
      { id: "B", textEn: "Brahmi", textHi: "ब्राह्मी लिपि" },
      { id: "C", textEn: "Gurumukhi", textHi: "गुरुमुखी लिपि" },
      { id: "D", textEn: "Roman", textHi: "रोमन लिपि" }
    ],
    correctAnswer: "A",
    explanation: "अनुच्छेद 343(1) के अनुसार, संघ की राजभाषा हिंदी और लिपि 'देवनागरी' होगी।"
  },
  {
    id: 16,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "How many letters are in the Hindi Varna-Mala (Devanagari Alphabet)?",
    questionHi: "हिंदी वर्णमाला में कुल वर्णों (Letters) की मानक संख्या कितनी मानी जाती है?",
    options: [
      { id: "A", textEn: "52", textHi: "52" },
      { id: "B", textEn: "48", textHi: "48" },
      { id: "C", textEn: "44", textHi: "44" },
      { id: "D", textEn: "50", textHi: "50" }
    ],
    correctAnswer: "A",
    explanation: "देवनागरी हिंदी वर्णमाला में कुल 52 वर्ण (11 स्वर + 2 अयोगवाह + 33 व्यंजन + 4 संयुक्त व्यंजन + 2 द्विगुण व्यंजन) होते हैं।"
  },
  {
    id: 17,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which of the following is a transitive verb (Sakarmak Kriya)?",
    questionHi: "निम्नलिखित में से सकर्मक क्रिया वाला वाक्य कौन-सा है?",
    options: [
      { id: "A", textEn: "Rohan eats a mango (रोहन आम खाता है)", textHi: "रोहन आम खाता है।" },
      { id: "B", textEn: "Mohan sleeps (मोहन सोता है)", textHi: "मोहन सोता है।" },
      { id: "C", textEn: "Child laughs (बच्चा हँसता है)", textHi: "बच्चा हँसता है।" },
      { id: "D", textEn: "Bird flies (पक्षी उड़ता है)", textHi: "पक्षी उड़ता है।" }
    ],
    correctAnswer: "A",
    explanation: "'रोहन आम खाता है' में 'आम' कर्म (Object) है, अतः यह सकर्मक क्रिया है। सोना, हँसना, उड़ना अकर्मक क्रियाएँ हैं।"
  },
  {
    id: 18,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the meaning of the proverb 'Ghar ka bhedi lanka dhaave' (घर का भेदी लंका ढावे)?",
    questionHi: "'घर का भेदी लंका ढावे' कहावत का सही अर्थ क्या है?",
    options: [
      { id: "A", textEn: "Internal betrayal causes massive destruction", textHi: "आपसी फूट या भेद खोलने से भारी विनाश होता है" },
      { id: "B", textEn: "To burn a city", textHi: "नगर में आग लगाना" },
      { id: "C", textEn: "To win a war easily", textHi: "युद्ध जीतना" },
      { id: "D", textEn: "To build a strong house", textHi: "मजबूत घर बनाना" }
    ],
    correctAnswer: "A",
    explanation: "घर के व्यक्ति द्वारा गुप्त भेद प्रकट करने से पूरा परिवार या संस्थान नष्ट हो जाता है (जैसे विभीषण का संदर्भ)।"
  },
  {
    id: 19,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the suffix (Pratyay) in the word 'Bhalai' (भलाई)?",
    questionHi: "'भलाई' शब्द में कौन-सा प्रत्यय जुड़ा हुआ है?",
    options: [
      { id: "A", textEn: "Aai", textHi: "आई" },
      { id: "B", textEn: "Laai", textHi: "लाई" },
      { id: "C", textEn: "I", textHi: "ई" },
      { id: "D", textEn: "Bhala", textHi: "भला" }
    ],
    correctAnswer: "A",
    explanation: "'भला' (विशेषण) में 'आई' भाववाचक प्रत्यय जोड़ने से 'भलाई' बनता है।"
  },
  {
    id: 20,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the plural form (Bahuvachan) of 'Chidiya' (चिड़िया)?",
    questionHi: "'चिड़िया' शब्द का सही बहुवचन रूप क्या है?",
    options: [
      { id: "A", textEn: "Chidiyan (चिड़ियाँ)", textHi: "चिड़ियाँ" },
      { id: "B", textEn: "Chidiyayein", textHi: "चिड़ियाएँ" },
      { id: "C", textEn: "Chidiyo", textHi: "चिड़ियों" },
      { id: "D", textEn: "Chidiya", textHi: "चिड़िया" }
    ],
    correctAnswer: "A",
    explanation: "या-अंत वाले स्त्रीलिंग शब्दों के अंत में अनुनासिक (याँ) लगाने से बहुवचन बनता है, जैसे: चिड़िया -> चिड़ियाँ।"
  },
  {
    id: 21,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the meaning of 'Kinkartavyavimoodh' (किंकर्तव्यविमूढ़)?",
    questionHi: "'किंकर्तव्यविमूढ़' शब्द का सही अर्थ क्या है?",
    options: [
      { id: "A", textEn: "One who does not know what to do next", textHi: "जिसे अपने कर्तव्य का बोध न हो (क्या करें क्या न करें की स्थिति)" },
      { id: "B", textEn: "One who is fearless", textHi: "जो निडर हो" },
      { id: "C", textEn: "One who works hard", textHi: "जो कठिन कार्य करे" },
      { id: "D", textEn: "A lazy person", textHi: "आलसी व्यक्ति" }
    ],
    correctAnswer: "A",
    explanation: "दुविधा में फंसा व्यक्ति जो यह तय न कर सके कि उसे इस समय क्या करना चाहिए, उसे किंकर्तव्यविमूढ़ कहते हैं।"
  },
  {
    id: 22,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which of the following is a demonstrative pronoun (Nishchayavachak Sarvanam)?",
    questionHi: "निम्नलिखित में से निश्चयवाचक सर्वनाम कौन-सा है?",
    options: [
      { id: "A", textEn: "Yah / Vah (यह / वह)", textHi: "यह / वह" },
      { id: "B", textEn: "Koi (कोई)", textHi: "कोई" },
      { id: "C", textEn: "Kuchh (कुछ)", textHi: "कुछ" },
      { id: "D", textEn: "Kaun (कौन)", textHi: "कौन" }
    ],
    correctAnswer: "A",
    explanation: "'यह' और 'वह' निश्चित वस्तु या व्यक्ति का संकेत करते हैं, अतः निश्चयवाचक सर्वनाम हैं।"
  },
  {
    id: 23,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "What is the antonym of the word 'Utkarsh' (उत्कर्ष)?",
    questionHi: "'उत्कर्ष' का विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "Apkarsh", textHi: "अपकर्ष" },
      { id: "B", textEn: "Akarsh", textHi: "आकर्ष" },
      { id: "C", textEn: "Vikarsh", textHi: "विकर्ष" },
      { id: "D", textEn: "Patan", textHi: "पतन" }
    ],
    correctAnswer: "A",
    explanation: "'उत्कर्ष' (उन्नति/ऊंचाई) का सटीक विलोम शब्द 'अपकर्ष' (अवनति/गिरावट) होता है।"
  },
  {
    id: 24,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "On which date is National Hindi Diwas celebrated every year in India?",
    questionHi: "भारत में प्रतिवर्ष 'राष्ट्रीय हिंदी दिवस' किस तिथि को मनाया जाता है?",
    options: [
      { id: "A", textEn: "14 September", textHi: "14 सितंबर" },
      { id: "B", textEn: "10 January", textHi: "10 जनवरी" },
      { id: "C", textEn: "15 August", textHi: "15 अगस्त" },
      { id: "D", textEn: "26 January", textHi: "26 जनवरी" }
    ],
    correctAnswer: "A",
    explanation: "14 सितंबर 1949 को संविधान सभा ने हिंदी को संघ की राजभाषा के रूप में स्वीकार किया था, इसलिए 14 सितंबर को हिंदी दिवस मनाया जाता है।"
  },
  {
    id: 25,
    section: "pol_hindi",
    sectionName: "1. सामान्य हिंदी (General Hindi)",
    questionEn: "Which of the following is a pure Deshaj (native colloquial) word?",
    questionHi: "निम्नलिखित में से कौन-सा शब्द 'देशज' शब्द है?",
    options: [
      { id: "A", textEn: "Lota (लोटा)", textHi: "लोटा" },
      { id: "B", textEn: "Agni", textHi: "अग्नि" },
      { id: "C", textEn: "School", textHi: "स्कूल" },
      { id: "D", textEn: "Aamla", textHi: "आंवला" }
    ],
    correctAnswer: "A",
    explanation: "'लोटा', 'पगड़ी', 'खिड़की' आदि देशज शब्द हैं जिनकी उत्पत्ति का स्रोत अज्ञात अथवा क्षेत्रीय बोलियों से है।"
  },

  // --- SECTION 2: सामान्य ज्ञान (Q26 - Q50) ---
  {
    id: 26,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "In which year was the Police Act enacted in India during British rule?",
    questionHi: "भारत में पुलिस व्यवस्था को नियंत्रित करने वाला 'पुलिस अधिनियम' (Police Act) किस वर्ष लागू किया गया था?",
    options: [
      { id: "A", textEn: "1861", textHi: "1861" },
      { id: "B", textEn: "1857", textHi: "1857" },
      { id: "C", textEn: "1905", textHi: "1905" },
      { id: "D", textEn: "1947", textHi: "1947" }
    ],
    correctAnswer: "A",
    explanation: "1857 के प्रथम स्वतंत्रता संग्राम के बाद अंग्रेजों ने 1861 में पुलिस अधिनियम (Police Act, 1861) पारित किया था।"
  },
  {
    id: 27,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Where is the headquarters of Uttar Pradesh Police located?",
    questionHi: "उत्तर प्रदेश पुलिस (UP Police) का मुख्यालय वर्तमान में कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Signature Building, Lucknow", textHi: "सिग्नेचर बिल्डिंग, लखनऊ" },
      { id: "B", textEn: "Prayagraj", textHi: "प्रयागराज" },
      { id: "C", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "D", textEn: "Varanasi", textHi: "वाराणसी" }
    ],
    correctAnswer: "A",
    explanation: "यूपी पुलिस का नया अत्याधुनिक डीजीपी मुख्यालय 'सिग्नेचर बिल्डिंग', गोमती नगर एक्सटेंशन, लखनऊ में स्थित है।"
  },
  {
    id: 28,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the emergency helpline number for Police Response Vehicle (PRV) in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में आपातकालीन पुलिस सेवा (PRV) के लिए डायल नंबर कौन-सा है?",
    options: [
      { id: "A", textEn: "112", textHi: "112 (डायल 112)" },
      { id: "B", textEn: "100", textHi: "100" },
      { id: "C", textEn: "108", textHi: "108" },
      { id: "D", textEn: "1090", textHi: "1090" }
    ],
    correctAnswer: "A",
    explanation: "यूपी डायल 112 एकीकृत आपातकालीन प्रतिक्रिया प्रणाली है (1090 विमेन पावर लाइन है, 108 एम्बुलेंस सेवा है)।"
  },
  {
    id: 29,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which district in Uttar Pradesh is famous for Brass handicrafts (Peetal Nagari)?",
    questionHi: "उत्तर प्रदेश का कौन-सा जिला 'पीतल नगरी' (Brass City) के रूप में विश्व प्रसिद्ध है?",
    options: [
      { id: "A", textEn: "Moradabad", textHi: "मुरादाबाद" },
      { id: "B", textEn: "Firozabad", textHi: "फ़िरोज़ाबाद" },
      { id: "C", textEn: "Aligarh", textHi: "अलीगढ़" },
      { id: "D", textEn: "Kannauj", textHi: "कन्नौज" }
    ],
    correctAnswer: "A",
    explanation: "मुरादाबाद पीतल के बर्तनों और हस्तशिल्प के लिए 'पीतल नगरी' कहलाता है। फ़िरोज़ाबाद कांच की चूड़ियों और अलीगढ़ तालों के लिए प्रसिद्ध है।"
  },
  {
    id: 30,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Under which Article of the Indian Constitution can a Financial Emergency be proclaimed?",
    questionHi: "भारतीय संविधान के किस अनुच्छेद के तहत वित्तीय आपातकाल (Financial Emergency) घोषित किया जा सकता है?",
    options: [
      { id: "A", textEn: "Article 360", textHi: "अनुच्छेद 360" },
      { id: "B", textEn: "Article 352", textHi: "अनुच्छेद 352" },
      { id: "C", textEn: "Article 356", textHi: "अनुच्छेद 356" },
      { id: "D", textEn: "Article 370", textHi: "अनुच्छेद 370" }
    ],
    correctAnswer: "A",
    explanation: "अनुच्छेद 360 वित्तीय आपातकाल से संबंधित है (अनुच्छेद 352 राष्ट्रीय आपातकाल, 356 राष्ट्रपति शासन)।"
  },
  {
    id: 31,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which festival in Uttar Pradesh sees the grand world-famous Lathmar Holi celebration?",
    questionHi: "उत्तर प्रदेश में प्रसिद्ध 'लठमार होली' कहाँ खेली जाती है?",
    options: [
      { id: "A", textEn: "Barsana & Nandgaon", textHi: "बरसाना और नंदगांव" },
      { id: "B", textEn: "Varanasi", textHi: "वाराणसी" },
      { id: "C", textEn: "Ayodhya", textHi: "अयोध्या" },
      { id: "D", textEn: "Gorakhpur", textHi: "गोरखपुर" }
    ],
    correctAnswer: "A",
    explanation: "मथुरा जनपद के बरसाना और नंदगांव में पारंपरिक 'लठमार होली' धूमधाम से खेली जाती है।"
  },
  {
    id: 32,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the official state animal of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश का राजकीय पशु (State Animal) कौन-सा है?",
    options: [
      { id: "A", textEn: "Swamp Deer (Barasingha)", textHi: "बारहसिंगा (Swamp Deer)" },
      { id: "B", textEn: "Tiger", textHi: "बाघ" },
      { id: "C", textEn: "Elephant", textHi: "हाथी" },
      { id: "D", textEn: "Cow", textHi: "गाय" }
    ],
    correctAnswer: "A",
    explanation: "उत्तर प्रदेश का राजकीय पशु बारहसिंगा (दलदल का हिरण) है, और राजकीय पक्षी सारस (क्रौंच) है।"
  },
  {
    id: 33,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Who was the first woman Director General of Police (DGP) in India?",
    questionHi: "भारत में किसी राज्य की पहली महिला पुलिस महानिदेशक (DGP) कौन थीं?",
    options: [
      { id: "A", textEn: "Kanchan Chaudhary Bhattacharya", textHi: "कंचन चौधरी भट्टाचार्य" },
      { id: "B", textEn: "Kiran Bedi", textHi: "किरण बेदी" },
      { id: "C", textEn: "Archana Ramasundaram", textHi: "अर्चना रामासुंदरम" },
      { id: "D", textEn: "Neera Yadav", textHi: "नीरा यादव" }
    ],
    correctAnswer: "A",
    explanation: "कंचन चौधरी भट्टाचार्य 2004 में उत्तराखंड की DGP बनकर भारत की पहली महिला पुलिस महानिदेशक बनीं।"
  },
  {
    id: 34,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the full form of FIR in police terminology?",
    questionHi: "पुलिस प्रक्रिया में FIR का पूर्ण रूप क्या होता है?",
    options: [
      { id: "A", textEn: "First Information Report", textHi: "फर्स्ट इंफॉर्मेशन रिपोर्ट (First Information Report)" },
      { id: "B", textEn: "Formal Incident Record", textHi: "फॉर्मल इंसिडेंट रिकॉर्ड" },
      { id: "C", textEn: "Fast Investigation Request", textHi: "फ़ास्ट इन्वेस्टिगेशन रिक्वेस्ट" },
      { id: "D", textEn: "Federal Inquiry Report", textHi: "फेडरल इन्क्वायरी रिपोर्ट" }
    ],
    correctAnswer: "A",
    explanation: "FIR (First Information Report) दंड प्रक्रिया संहिता (CrPC) की धारा 154 के तहत दर्ज की जाने वाली प्रथम सूचना रिपोर्ट है।"
  },
  {
    id: 35,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which city is known as the 'Perfume Capital' (Itra Nagari) of India?",
    questionHi: "उत्तर प्रदेश का कौन-सा नगर 'इत्र नगरी' (Perfume Capital) के नाम से विख्यात है?",
    options: [
      { id: "A", textEn: "Kannauj", textHi: "कन्नौज" },
      { id: "B", textEn: "Agra", textHi: "आगरा" },
      { id: "C", textEn: "Bareilly", textHi: "बरेली" },
      { id: "D", textEn: "Rampur", textHi: "रामपुर" }
    ],
    correctAnswer: "A",
    explanation: "कन्नौज में सदियों से प्राकृतिक फूलों से इत्र व गुलाब जल बनाने का उद्योग है।"
  },
  {
    id: 36,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which National Park is situated in Lakhimpur Kheri district of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश के लखीमपुर खीरी जनपद में कौन-सा एकमात्र राष्ट्रीय उद्यान स्थित है?",
    options: [
      { id: "A", textEn: "Dudhwa National Park", textHi: "दुधवा राष्ट्रीय उद्यान" },
      { id: "B", textEn: "Jim Corbett National Park", textHi: "जिम कॉर्बेट राष्ट्रीय उद्यान" },
      { id: "C", textEn: "Katerniaghat Wildlife Sanctuary", textHi: "कतरनियाघाट वन्यजीव अभयारण्य" },
      { id: "D", textEn: "Pilibhit Tiger Reserve", textHi: "पीलीभीत टाइगर रिजर्व" }
    ],
    correctAnswer: "A",
    explanation: "दुधवा राष्ट्रीय उद्यान उत्तर प्रदेश का प्रमुख राष्ट्रीय उद्यान एवं टाइगर रिज़र्व है।"
  },
  {
    id: 37,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which fundamental right is described as the 'Heart and Soul of the Constitution' by Dr. B.R. Ambedkar?",
    questionHi: "डॉ. बी.आर. अम्बेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' कहा था?",
    options: [
      { id: "A", textEn: "Right to Constitutional Remedies (Article 32)", textHi: "संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)" },
      { id: "B", textEn: "Right to Freedom of Speech", textHi: "भाषण और अभिव्यक्ति की स्वतंत्रता" },
      { id: "C", textEn: "Right to Equality", textHi: "समानता का अधिकार" },
      { id: "D", textEn: "Right against Exploitation", textHi: "शोषण के विरुद्ध अधिकार" }
    ],
    correctAnswer: "A",
    explanation: "अनुच्छेद 32 के तहत सुप्रीम कोर्ट को मौलिक अधिकारों के संरक्षण हेतु 5 रिट जारी करने का अधिकार है।"
  },
  {
    id: 38,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the minimum age to be eligible for voting in General Elections in India?",
    questionHi: "भारत में आम चुनावों में मतदान करने की न्यूनतम आयु कितनी है?",
    options: [
      { id: "A", textEn: "18 years", textHi: "18 वर्ष" },
      { id: "B", textEn: "21 years", textHi: "21 वर्ष" },
      { id: "C", textEn: "25 years", textHi: "25 वर्ष" },
      { id: "D", textEn: "16 years", textHi: "16 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "61वें संविधान संशोधन अधिनियम (1988) द्वारा मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई थी।"
  },
  {
    id: 39,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which river joins the Ganga at Triveni Sangam in Prayagraj?",
    questionHi: "प्रयागराज के त्रिवेणी संगम पर गंगा नदी से कौन-सी प्रमुख नदियाँ मिलती हैं?",
    options: [
      { id: "A", textEn: "Yamuna and invisible Saraswati", textHi: "यमुना और अदृश्य सरस्वती" },
      { id: "B", textEn: "Gomti and Ghaghara", textHi: "गोमती और घाघरा" },
      { id: "C", textEn: "Son and Gandak", textHi: "सोन और गंडक" },
      { id: "D", textEn: "Chambal and Betwa", textHi: "चंबल और बेतवा" }
    ],
    correctAnswer: "A",
    explanation: "प्रयागराज में गंगा, यमुना और पौराणिक सरस्वती के संगम को 'त्रिवेणी संगम' कहा जाता है।"
  },
  {
    id: 40,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the full form of GST implemented across India in 2017?",
    questionHi: "2017 में लागू किए गए कर सुधार GST का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Goods and Services Tax", textHi: "गुड्स एंड सर्विसेज टैक्स (Goods and Services Tax)" },
      { id: "B", textEn: "General State Tax", textHi: "जनरल स्टेट टैक्स" },
      { id: "C", textEn: "Government Sales Tariff", textHi: "गवर्नमेंट सेल्स टैरिफ" },
      { id: "D", textEn: "Grand Service Tax", textHi: "ग्रैंड सर्विस टैक्स" }
    ],
    correctAnswer: "A",
    explanation: "1 जुलाई 2017 से वस्तु एवं सेवा कर (Goods and Services Tax - GST) देश में लागू हुआ था।"
  },
  {
    id: 41,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "In which district of Uttar Pradesh was the historic Kakori Train Action of 1925 carried out?",
    questionHi: "1925 की ऐतिहासिक 'काकोरी ट्रेन एक्शन' घटना उत्तर प्रदेश के किस जिले के निकट हुई थी?",
    options: [
      { id: "A", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "B", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "C", textEn: "Meerut", textHi: "मेरठ" },
      { id: "D", textEn: "Shahjahanpur", textHi: "शाहजहाँपुर" }
    ],
    correctAnswer: "A",
    explanation: "9 अगस्त 1925 को राम प्रसाद बिस्मिल, अशफाक उल्ला खान, राजेंद्र लाहिड़ी व साथियों द्वारा लखनऊ के पास काकोरी में सरकारी खजाना रोका गया था।"
  },
  {
    id: 42,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the primary role of a Police Station House Officer (SHO)?",
    questionHi: "एक पुलिस थाने के प्रभारी अधिकारी (SHO) की प्राथमिक भूमिका क्या होती है?",
    options: [
      { id: "A", textEn: "Overall administrative control, crime prevention & law enforcement within the police station jurisdiction", textHi: "थाने के अधिकार क्षेत्र में समग्र प्रशासनिक नियंत्रण, अपराध निवारण और कानून व्यवस्था बनाए रखना" },
      { id: "B", textEn: "Only traffic management", textHi: "केवल ट्रैफिक देखना" },
      { id: "C", textEn: "Writing passport documents only", textHi: "केवल पासपोर्ट जारी करना" },
      { id: "D", textEn: "Judging judicial court trials", textHi: "अदालती मुकदमों का फैसला करना" }
    ],
    correctAnswer: "A",
    explanation: "थाना प्रभारी (SHO / Station Officer) थाने के संपूर्ण विधि एवं व्यवस्था तथा अपराध नियंत्रण के लिए उत्तरदायी होता है।"
  },
  {
    id: 43,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the rank badge insignia of a Director General of Police (DGP)?",
    questionHi: "पुलिस महानिदेशक (DGP) के कंधे पर कौन-सा पद चिह्न (Insignia) होता है?",
    options: [
      { id: "A", textEn: "Crossed sword and baton with State Emblem (Ashoka Pillar)", textHi: "क्रॉस तलवार और बैटन के साथ राष्ट्रीय प्रतीक (अशोक स्तम्भ)" },
      { id: "B", textEn: "Three Stars only", textHi: "केवल तीन सितारे" },
      { id: "C", textEn: "One Ashoka Pillar and One Star", textHi: "एक अशोक स्तम्भ और एक सितारा" },
      { id: "D", textEn: "Two Stars", textHi: "दो सितारे" }
    ],
    correctAnswer: "A",
    explanation: "राज्य पुलिस के सर्वोच्च अधिकारी (DGP) के कंधे पर अशोक की लाट और पार की गई तलवार-डंडा का बैज होता है।"
  },
  {
    id: 44,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Who was the founder of the Maurya Empire in ancient India?",
    questionHi: "प्राचीन भारत में मौर्य साम्राज्य की स्थापना किसने की थी?",
    options: [
      { id: "A", textEn: "Chandragupta Maurya", textHi: "चन्द्रगुप्त मौर्य" },
      { id: "B", textEn: "Ashoka the Great", textHi: "सम्राट अशोक" },
      { id: "C", textEn: "Bindusara", textHi: "बिन्दुसार" },
      { id: "D", textEn: "Harshavardhana", textHi: "हर्षवर्धन" }
    ],
    correctAnswer: "A",
    explanation: "आचार्य चाणक्य (कौटिल्य) की सहायता से चन्द्रगुप्त मौर्य ने 322 ईसा पूर्व में नंद वंश को समाप्त कर मौर्य साम्राज्य की स्थापना की।"
  },
  {
    id: 45,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which Vitamin deficiency leads to Night Blindness (Rataundhi)?",
    questionHi: "किस विटामिन की कमी से रतौंधी (Night Blindness) रोग होता है?",
    options: [
      { id: "A", textEn: "Vitamin A", textHi: "विटामिन A" },
      { id: "B", textEn: "Vitamin B", textHi: "विटामिन B" },
      { id: "C", textEn: "Vitamin C", textHi: "विटामिन C" },
      { id: "D", textEn: "Vitamin D", textHi: "विटामिन D" }
    ],
    correctAnswer: "A",
    explanation: "विटामिन A (रेटिनॉल) की कमी से आंखों की रोशनी कम होती है और रतौंधी की समस्या होती है।"
  },
  {
    id: 46,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the capital of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश की प्रशासनिक राजधानी कौन-सी है?",
    options: [
      { id: "A", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "B", textEn: "Prayagraj", textHi: "प्रयागराज (न्यायिक राजधानी)" },
      { id: "C", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "D", textEn: "Varanasi", textHi: "वाराणसी" }
    ],
    correctAnswer: "A",
    explanation: "लखनऊ उत्तर प्रदेश की राजधानी है।"
  },
  {
    id: 47,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Where is the Indian Veterinary Research Institute (IVRI) located in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Izzatnagar, Bareilly", textHi: "इज्जतनगर, बरेली" },
      { id: "B", textEn: "Mathura", textHi: "मथुरा" },
      { id: "C", textEn: "Meerut", textHi: "मेरठ" },
      { id: "D", textEn: "Faizabad", textHi: "फैजाबाद" }
    ],
    correctAnswer: "A",
    explanation: "IVRI बरेली के इज्जतनगर में स्थित भारत का प्रमुख पशु चिकित्सा अनुसंधान केंद्र है।"
  },
  {
    id: 48,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which instrument measures atmospheric pressure?",
    questionHi: "वायुमंडलीय दाब (Atmospheric Pressure) मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Barometer", textHi: "बैरोमीटर (Barometer)" },
      { id: "B", textEn: "Hygrometer", textHi: "हाइग्रोमीटर" },
      { id: "C", textEn: "Thermometer", textHi: "थर्मामीटर" },
      { id: "D", textEn: "Lactometer", textHi: "लैक्टोमीटर" }
    ],
    correctAnswer: "A",
    explanation: "बैरोमीटर से वायुमंडलीय दबाव मापा जाता है। हाइग्रोमीटर से आर्द्रता, लैक्टोमीटर से दूध की शुद्धता मापी जाती है।"
  },
  {
    id: 49,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "What is the tenure of the Comptroller and Auditor General (CAG) of India?",
    questionHi: "भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) का कार्यकाल कितना होता है?",
    options: [
      { id: "A", textEn: "6 years or up to 65 years of age", textHi: "6 वर्ष या 65 वर्ष की आयु (जो भी पहले हो)" },
      { id: "B", textEn: "5 years", textHi: "5 वर्ष" },
      { id: "C", textEn: "4 years", textHi: "4 वर्ष" },
      { id: "D", textEn: "Up to 62 years of age", textHi: "62 वर्ष की आयु तक" }
    ],
    correctAnswer: "A",
    explanation: "संविधान के अनुच्छेद 148 के अनुसार CAG का कार्यकाल 6 वर्ष अथवा 65 वर्ष की आयु तक होता है।"
  },
  {
    id: 50,
    section: "pol_gk",
    sectionName: "2. सामान्य ज्ञान (General Knowledge)",
    questionEn: "Which Mughal monument was declared a UNESCO World Heritage site and is located in Agra?",
    questionHi: "आगरा में स्थित कौन-सा विश्व प्रसिद्ध स्मारक यूनेस्को की विश्व धरोहर स्थल सूची में शामिल है?",
    options: [
      { id: "A", textEn: "Taj Mahal", textHi: "ताजमहल" },
      { id: "B", textEn: "Qutub Minar", textHi: "कुतुब मीनार" },
      { id: "C", textEn: "Hawa Mahal", textHi: "हवा महल" },
      { id: "D", textEn: "Charminar", textHi: "चारमीनार" }
    ],
    correctAnswer: "A",
    explanation: "ताजमहल को 1983 में यूनेस्को विश्व धरोहर स्थल घोषित किया गया था।"
  },

  // --- SECTION 3: संख्यात्मक योग्यता (MATHS) (Q51 - Q75) ---
  {
    id: 51,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "The sum of two numbers is 60 and their difference is 14. What is the larger number?",
    questionHi: "दो संख्याओं का योग 60 है और उनका अंतर 14 है। बड़ी संख्या क्या होगी?",
    options: [
      { id: "A", textEn: "37", textHi: "37" },
      { id: "B", textEn: "23", textHi: "23" },
      { id: "C", textEn: "35", textHi: "35" },
      { id: "D", textEn: "40", textHi: "40" }
    ],
    correctAnswer: "A",
    explanation: "बड़ी संख्या = (योग + अंतर) / 2 = (60 + 14) / 2 = 74 / 2 = 37."
  },
  {
    id: 52,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is 25% of 480?",
    questionHi: "480 का 25% कितना होगा?",
    options: [
      { id: "A", textEn: "120", textHi: "120" },
      { id: "B", textEn: "100", textHi: "100" },
      { id: "C", textEn: "140", textHi: "140" },
      { id: "D", textEn: "160", textHi: "160" }
    ],
    correctAnswer: "A",
    explanation: "480 * (25 / 100) = 480 / 4 = 120."
  },
  {
    id: 53,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "The ratio of ages of father and son is 5 : 2. If the sum of their ages is 56 years, what is the age of the son?",
    questionHi: "पिता और पुत्र की आयु का अनुपात 5 : 2 है। यदि उनकी आयु का योग 56 वर्ष है, तो पुत्र की आयु क्या है?",
    options: [
      { id: "A", textEn: "16 years", textHi: "16 वर्ष" },
      { id: "B", textEn: "40 years", textHi: "40 वर्ष" },
      { id: "C", textEn: "14 years", textHi: "14 वर्ष" },
      { id: "D", textEn: "18 years", textHi: "18 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "अनुपाती योग = 5 + 2 = 7 इकाई। 7 इकाई = 56 => 1 इकाई = 8 वर्ष। पुत्र की आयु = 2 * 8 = 16 वर्ष।"
  },
  {
    id: 54,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the simple interest on ₹6000 at 8% per annum for 2 years?",
    questionHi: "₹6000 की राशि पर 8% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा?",
    options: [
      { id: "A", textEn: "₹960", textHi: "₹960" },
      { id: "B", textEn: "₹800", textHi: "₹800" },
      { id: "C", textEn: "₹1020", textHi: "₹1020" },
      { id: "D", textEn: "₹900", textHi: "₹900" }
    ],
    correctAnswer: "A",
    explanation: "ब्याज = (मूलधन * दर * समय) / 100 = (6000 * 8 * 2) / 100 = ₹960."
  },
  {
    id: 55,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A car covers 240 km in 4 hours. What is its speed?",
    questionHi: "एक कार 4 घंटे में 240 किमी की दूरी तय करती है। उसकी चाल (Speed) क्या है?",
    options: [
      { id: "A", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "B", textEn: "50 km/h", textHi: "50 किमी/घंटा" },
      { id: "C", textEn: "70 km/h", textHi: "70 किमी/घंटा" },
      { id: "D", textEn: "80 km/h", textHi: "80 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "चाल = दूरी / समय = 240 / 4 = 60 किमी/घंटा।"
  },
  {
    id: 56,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "Find the HCF of 36 and 84?",
    questionHi: "36 और 84 का महत्तम समापवर्तक (HCF) क्या होगा?",
    options: [
      { id: "A", textEn: "12", textHi: "12" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "24", textHi: "24" }
    ],
    correctAnswer: "A",
    explanation: "36 = 12 * 3, 84 = 12 * 7. सबसे बड़ा उभयनिष्ठ गुणनखंड 12 है।"
  },
  {
    id: 57,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "The average of four numbers is 25. If one number is 40, what is the average of the remaining three numbers?",
    questionHi: "चार संख्याओं का औसत 25 है। यदि एक संख्या 40 है, तो शेष तीन संख्याओं का औसत क्या होगा?",
    options: [
      { id: "A", textEn: "20", textHi: "20" },
      { id: "B", textEn: "22", textHi: "22" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "24", textHi: "24" }
    ],
    correctAnswer: "A",
    explanation: "चारों का कुल योग = 4 * 25 = 100. शेष तीन का योग = 100 - 40 = 60. शेष का औसत = 60 / 3 = 20."
  },
  {
    id: 58,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A person buys a cycle for ₹1200 and sells it for ₹1500. Find the profit percentage?",
    questionHi: "एक व्यक्ति ₹1200 में साइकिल खरीदता है और ₹1500 में बेचता है। लाभ प्रतिशत ज्ञात कीजिए?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "30%", textHi: "30%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "लाभ = 1500 - 1200 = 300. लाभ % = (300 / 1200) * 100 = 25%."
  },
  {
    id: 59,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "If 12 pens cost ₹180, what is the cost of 5 pens?",
    questionHi: "यदि 12 पेन का मूल्य ₹180 है, तो 5 पेन का मूल्य क्या होगा?",
    options: [
      { id: "A", textEn: "₹75", textHi: "₹75" },
      { id: "B", textEn: "₹60", textHi: "₹60" },
      { id: "C", textEn: "₹90", textHi: "₹90" },
      { id: "D", textEn: "₹85", textHi: "₹85" }
    ],
    correctAnswer: "A",
    explanation: "1 पेन का मूल्य = 180 / 12 = ₹15. 5 पेन का मूल्य = 5 * 15 = ₹75."
  },
  {
    id: 60,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the square root of 1024?",
    questionHi: "1024 का वर्गमूल क्या होगा?",
    options: [
      { id: "A", textEn: "32", textHi: "32" },
      { id: "B", textEn: "28", textHi: "28" },
      { id: "C", textEn: "34", textHi: "34" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "32 * 32 = 1024."
  },
  {
    id: 61,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "The perimeter of a rectangle is 60 cm and its length is 20 cm. What is its area?",
    questionHi: "एक आयत का परिमाप 60 सेमी और लंबाई 20 सेमी है। इसका क्षेत्रफल क्या होगा?",
    options: [
      { id: "A", textEn: "200 cm²", textHi: "200 सेमी²" },
      { id: "B", textEn: "150 cm²", textHi: "150 सेमी²" },
      { id: "C", textEn: "300 cm²", textHi: "300 सेमी²" },
      { id: "D", textEn: "180 cm²", textHi: "180 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "2*(लंबाई + चौड़ाई) = 60 => लंबाई + चौड़ाई = 30. चौड़ाई = 30 - 20 = 10 सेमी. क्षेत्रफल = 20 * 10 = 200 सेमी²."
  },
  {
    id: 62,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A can do a work in 10 days and B in 15 days. Working together, in how many days can they complete the work?",
    questionHi: "A किसी कार्य को 10 दिन में और B उसे 15 दिन में कर सकता है। दोनों मिलकर उस कार्य को कितने दिन में पूरा करेंगे?",
    options: [
      { id: "A", textEn: "6 days", textHi: "6 दिन" },
      { id: "B", textEn: "8 days", textHi: "8 दिन" },
      { id: "C", textEn: "5 days", textHi: "5 दिन" },
      { id: "D", textEn: "12 days", textHi: "12 दिन" }
    ],
    correctAnswer: "A",
    explanation: "1 दिन का कार्य = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6. अतः पूरा कार्य 6 दिन में समाप्त होगा।"
  },
  {
    id: 63,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "Solve: 25 - [16 + {12 - (8 - 4)}] = ?",
    questionHi: "सरल करें: 25 - [16 + {12 - (8 - 4)}] = ?",
    options: [
      { id: "A", textEn: "1", textHi: "1" },
      { id: "B", textEn: "5", textHi: "5" },
      { id: "C", textEn: "9", textHi: "9" },
      { id: "D", textEn: "0", textHi: "0" }
    ],
    correctAnswer: "A",
    explanation: "(8 - 4) = 4. 12 - 4 = 8. 16 + 8 = 24. 25 - 24 = 1."
  },
  {
    id: 64,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is 15% of 15% of 10,000?",
    questionHi: "10,000 के 15% का 15% कितना होगा?",
    options: [
      { id: "A", textEn: "225", textHi: "225" },
      { id: "B", textEn: "150", textHi: "150" },
      { id: "C", textEn: "300", textHi: "300" },
      { id: "D", textEn: "250", textHi: "250" }
    ],
    correctAnswer: "A",
    explanation: "10000 * 0.15 = 1500. 1500 * 0.15 = 225."
  },
  {
    id: 65,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "Find the value of x: 4x + 7 = 31?",
    questionHi: "x का मान ज्ञात करें: 4x + 7 = 31?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "7", textHi: "7" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "8", textHi: "8" }
    ],
    correctAnswer: "A",
    explanation: "4x = 31 - 7 = 24 => x = 24 / 4 = 6."
  },
  {
    id: 66,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
    questionHi: "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
    options: [
      { id: "A", textEn: "154 cm²", textHi: "154 सेमी²" },
      { id: "B", textEn: "44 cm²", textHi: "44 सेमी²" },
      { id: "C", textEn: "176 cm²", textHi: "176 सेमी²" },
      { id: "D", textEn: "308 cm²", textHi: "308 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "क्षेत्रफल = πr² = (22/7) * 7 * 7 = 154 सेमी²."
  },
  {
    id: 67,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A 200 meter train crosses a 300 meter platform in 25 seconds. What is the speed of the train in km/h?",
    questionHi: "200 मीटर लंबी रेलगाड़ी 300 मीटर लंबे प्लेटफॉर्म को 25 सेकंड में पार करती है। गाड़ी की चाल किमी/घंटे में क्या होगी?",
    options: [
      { id: "A", textEn: "72 km/h", textHi: "72 किमी/घंटा" },
      { id: "B", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "C", textEn: "80 km/h", textHi: "80 किमी/घंटा" },
      { id: "D", textEn: "54 km/h", textHi: "54 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "कुल दूरी = 200 + 300 = 500 मीटर। चाल (m/s) = 500 / 25 = 20 m/s. किमी/घंटा में: 20 * (18/5) = 72 किमी/घंटा।"
  },
  {
    id: 68,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "If the cost price of 10 articles is equal to the selling price of 8 articles, what is the profit percentage?",
    questionHi: "यदि 10 वस्तुओं का क्रय मूल्य 8 वस्तुओं के विक्रय मूल्य के बराबर है, तो लाभ प्रतिशत क्या होगा?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "15%", textHi: "15%" },
      { id: "D", textEn: "30%", textHi: "30%" }
    ],
    correctAnswer: "A",
    explanation: "लाभ % = ((10 - 8) / 8) * 100 = (2 / 8) * 100 = 25%."
  },
  {
    id: 69,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the LCM of 12, 18, and 24?",
    questionHi: "12, 18 और 24 का ल.स. (LCM) क्या होगा?",
    options: [
      { id: "A", textEn: "72", textHi: "72" },
      { id: "B", textEn: "48", textHi: "48" },
      { id: "C", textEn: "96", textHi: "96" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "72 वह न्यूनतम संख्या है जो 12, 18 और 24 तीनों से पूर्णतः विभाजित होती है।"
  },
  {
    id: 70,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "Convert 0.375 into a simple fraction in lowest terms:",
    questionHi: "दशमलव 0.375 को सरल भिन्न में बदलें:",
    options: [
      { id: "A", textEn: "3/8", textHi: "3/8" },
      { id: "B", textEn: "3/4", textHi: "3/4" },
      { id: "C", textEn: "7/16", textHi: "7/16" },
      { id: "D", textEn: "5/8", textHi: "5/8" }
    ],
    correctAnswer: "A",
    explanation: "375 / 1000 = (375 ÷ 125) / (1000 ÷ 125) = 3/8."
  },
  {
    id: 71,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the third proportional to 9 and 12?",
    questionHi: "9 और 12 का तृतीयानुपाती (Third Proportional) क्या होगा?",
    options: [
      { id: "A", textEn: "16", textHi: "16" },
      { id: "B", textEn: "15", textHi: "15" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "14", textHi: "14" }
    ],
    correctAnswer: "A",
    explanation: "तृतीयानुपाती x = b² / a = 12² / 9 = 144 / 9 = 16."
  },
  {
    id: 72,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "What is the average of even numbers from 2 to 20?",
    questionHi: "2 से 20 तक की सम संख्याओं का औसत क्या होगा?",
    options: [
      { id: "A", textEn: "11", textHi: "11" },
      { id: "B", textEn: "10", textHi: "10" },
      { id: "C", textEn: "12", textHi: "12" },
      { id: "D", textEn: "9", textHi: "9" }
    ],
    correctAnswer: "A",
    explanation: "समांतर श्रेणी में पहली और अंतिम संख्या का औसत = (2 + 20) / 2 = 11."
  },
  {
    id: 73,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A sum at compound interest doubles in 4 years. In how many years will it become 8 times?",
    questionHi: "कोई धनराशि चक्रवृद्धि ब्याज पर 4 वर्ष में दोगुनी हो जाती है। वह कितने वर्षों में 8 गुनी हो जाएगी?",
    options: [
      { id: "A", textEn: "12 years", textHi: "12 वर्ष" },
      { id: "B", textEn: "8 years", textHi: "8 वर्ष" },
      { id: "C", textEn: "16 years", textHi: "16 वर्ष" },
      { id: "D", textEn: "10 years", textHi: "10 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "2^1 गुनी = 4 वर्ष। 8 गुनी = 2^3 गुनी। समय = 3 * 4 = 12 वर्ष।"
  },
  {
    id: 74,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "A man buys an item for ₹800 and wants a 15% profit. What should be his selling price?",
    questionHi: "एक व्यापारी ₹800 की वस्तु पर 15% लाभ कमाना चाहता है। विक्रय मूल्य क्या होना चाहिए?",
    options: [
      { id: "A", textEn: "₹920", textHi: "₹920" },
      { id: "B", textEn: "₹900", textHi: "₹900" },
      { id: "C", textEn: "₹950", textHi: "₹950" },
      { id: "D", textEn: "₹880", textHi: "₹880" }
    ],
    correctAnswer: "A",
    explanation: "विक्रय मूल्य = 800 * 1.15 = ₹920."
  },
  {
    id: 75,
    section: "pol_maths",
    sectionName: "3. संख्यात्मक योग्यता (Maths)",
    questionEn: "Evaluate: (15 x 15 - 5 x 5) / 10 = ?",
    questionHi: "मान ज्ञात करें: (15 x 15 - 5 x 5) / 10 = ?",
    options: [
      { id: "A", textEn: "20", textHi: "20" },
      { id: "B", textEn: "15", textHi: "15" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "(225 - 25) / 10 = 200 / 10 = 20."
  },

  // --- SECTION 4: मानसिक अभिरुचि व रीजनिंग (Q76 - Q100) ---
  {
    id: 76,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "As a police officer, if you witness a traffic accident while off-duty, what should be your primary immediate duty?",
    questionHi: "एक पुलिसकर्मी के रूप में, यदि आप ड्यूटी पर न होते हुए भी किसी गंभीर सड़क दुर्घटना को देखते हैं, तो आपका प्राथमिक कर्तव्य क्या होना चाहिए?",
    options: [
      { id: "A", textEn: "Immediately provide first aid and arrange ambulance/hospitalization for victims while informing nearest police", textHi: "घायलों को तत्काल प्राथमिक उपचार व अस्पताल पहुँचाने की व्यवस्था करना तथा स्थानीय पुलिस को सूचित करना" },
      { id: "B", textEn: "Walk away because you are off-duty", textHi: "चुपचाप निकल जाना क्योंकि आप ड्यूटी पर नहीं हैं" },
      { id: "C", textEn: "Take photos and post on social media", textHi: "फोटो खींचकर सोशल मीडिया पर डालना" },
      { id: "D", textEn: "Wait for someone else to report", textHi: "किसी अन्य के आगे आने की प्रतीक्षा करना" }
    ],
    correctAnswer: "A",
    explanation: "मानव जीवन की रक्षा किसी भी नागरिक और विशेष रूप से पुलिस अधिकारी का सर्वोच्च नैतिक और विधिक दायित्व है।"
  },
  {
    id: 77,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Select the related pair: Police : Crime :: Doctor : ?",
    questionHi: "संबंधित शब्द चुनिए: पुलिस : अपराध :: डॉक्टर : ?",
    options: [
      { id: "A", textEn: "Disease / Illness", textHi: "रोग / बीमारी (Disease)" },
      { id: "B", textEn: "Medicine", textHi: "दवा" },
      { id: "C", textEn: "Hospital", textHi: "अस्पताल" },
      { id: "D", textEn: "Patient", textHi: "मरीज" }
    ],
    correctAnswer: "A",
    explanation: "जिस प्रकार पुलिस का कार्य अपराध की रोकथाम और नियंत्रण है, उसी प्रकार डॉक्टर का कार्य बीमारी का निदान और उपचार है।"
  },
  {
    id: 78,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Find the odd one out: Law, Justice, Constitution, Anarchy",
    questionHi: "दिए गए शब्दों में से विषम चुनिए: कानून, न्याय, संविधान, अराजकता",
    options: [
      { id: "A", textEn: "Anarchy", textHi: "अराजकता (Anarchy)" },
      { id: "B", textEn: "Law", textHi: "कानून" },
      { id: "C", textEn: "Justice", textHi: "न्याय" },
      { id: "D", textEn: "Constitution", textHi: "संविधान" }
    ],
    correctAnswer: "A",
    explanation: "कानून, न्याय, और संविधान व्यवस्था और शांति के प्रतीक हैं, जबकि 'अराजकता' कानूनविहीनता की स्थिति है।"
  },
  {
    id: 79,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Complete the number series: 2, 6, 12, 20, 30, ?",
    questionHi: "श्रृंखला पूरी कीजिए: 2, 6, 12, 20, 30, ?",
    options: [
      { id: "A", textEn: "42", textHi: "42" },
      { id: "B", textEn: "40", textHi: "40" },
      { id: "C", textEn: "44", textHi: "44" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "अंतर बढ़ रहा है: +4, +6, +8, +10, अगला +12 होगा। 30 + 12 = 42 (या 1*2, 2*3, 3*4, 4*5, 5*6, 6*7=42)."
  },
  {
    id: 80,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "If POLICE is coded as QPMJDF, how will LAW be coded?",
    questionHi: "यदि POLICE को QPMJDF लिखा जाता है, तो LAW को क्या लिखा जाएगा?",
    options: [
      { id: "A", textEn: "MBX", textHi: "MBX" },
      { id: "B", textEn: "KZW", textHi: "KZW" },
      { id: "C", textEn: "MAX", textHi: "MAX" },
      { id: "D", textEn: "NCY", textHi: "NCY" }
    ],
    correctAnswer: "A",
    explanation: "प्रत्येक अक्षर में +1 की वृद्धि: L(+1)=M, A(+1)=B, W(+1)=X => MBX."
  },
  {
    id: 81,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "When dealing with a mob or agitated crowd, what should be the initial police approach?",
    questionHi: "उत्तेजित भीड़ को नियंत्रित करते समय पुलिस का प्रारंभिक दृष्टिकोण क्या होना चाहिए?",
    options: [
      { id: "A", textEn: "Patience, dialogue, and effective de-escalation communication", textHi: "धैर्य, संवाद और स्थिति को शांत करने का प्रयास" },
      { id: "B", textEn: "Immediate baton charge without warning", textHi: "बिना चेतावनी के लाठीचार्ज" },
      { id: "C", textEn: "Fleeing the spot", textHi: "मौके से भाग जाना" },
      { id: "D", textEn: "Abusive language", textHi: "अभद्र भाषा का प्रयोग" }
    ],
    correctAnswer: "A",
    explanation: "भीड़ नियंत्रण में सर्वप्रथम धैर्यपूर्वक संवाद और तनाव कम करने (De-escalation) का प्रयास किया जाता है।"
  },
  {
    id: 82,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Pointing to a photograph, Ramesh said, 'She is the mother of my father's only son.' Who is she to Ramesh?",
    questionHi: "एक तस्वीर की ओर इशारा करते हुए रमेश ने कहा, 'वह मेरे पिता के इकलौते पुत्र की माँ है।' वह महिला रमेश की क्या है?",
    options: [
      { id: "A", textEn: "Mother", textHi: "माँ (Mother)" },
      { id: "B", textEn: "Aunt", textHi: "चाची" },
      { id: "C", textEn: "Sister", textHi: "बहन" },
      { id: "D", textEn: "Wife", textHi: "पत्नी" }
    ],
    correctAnswer: "A",
    explanation: "रमेश के पिता का इकलौता पुत्र स्वयं रमेश है। रमेश की माँ = रमेश की माताजी।"
  },
  {
    id: 83,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "A policeman walks 4 km West, turns left and walks 3 km. How far is he from his police post in a straight line?",
    questionHi: "एक पुलिसकर्मी पश्चिम की ओर 4 किमी चलता है, फिर बाएं मुड़कर 3 किमी चलता है। वह अपनी चौकी से सीधी दूरी पर कितनी दूर है?",
    options: [
      { id: "A", textEn: "5 km", textHi: "5 किमी" },
      { id: "B", textEn: "7 km", textHi: "7 किमी" },
      { id: "C", textEn: "1 km", textHi: "1 किमी" },
      { id: "D", textEn: "6 km", textHi: "6 किमी" }
    ],
    correctAnswer: "A",
    explanation: "पाइथागोरस प्रमेय: दूरी = √(4² + 3²) = √(16 + 9) = √25 = 5 किमी।"
  },
  {
    id: 84,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "What is the primary objective of community policing (सामुदायिक पुलिसिंग)?",
    questionHi: "सामुदायिक पुलिसिंग (Community Policing) का मुख्य उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "Building mutual trust, partnership, and cooperation between police and citizens for crime prevention", textHi: "अपराध नियंत्रण हेतु पुलिस और जनता के बीच आपसी विश्वास और सहयोग स्थापित करना" },
      { id: "B", textEn: "Collecting heavy fines from citizens", textHi: "जनता से अधिक चालान वसूलना" },
      { id: "C", textEn: "Closing police stations", textHi: "थाने बंद करना" },
      { id: "D", textEn: "Privatizing the police force", textHi: "पुलिस बल का निजीकरण" }
    ],
    correctAnswer: "A",
    explanation: "सामुदायिक पुलिसिंग का ध्येय पुलिस व समाज के बीच मित्रवत सहयोग स्थापित कर शांति व सुरक्षा बनाए रखना है।"
  },
  {
    id: 85,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "If 1st January of a normal non-leap year is Sunday, what day of the week will 31st December of the same year be?",
    questionHi: "यदि किसी सामान्य (नॉन-लीप) वर्ष का 1 जनवरी रविवार है, तो उसी वर्ष का 31 दिसंबर कौन-सा दिन होगा?",
    options: [
      { id: "A", textEn: "Sunday", textHi: "रविवार (Sunday)" },
      { id: "B", textEn: "Monday", textHi: "सोमवार" },
      { id: "C", textEn: "Saturday", textHi: "शनिवार" },
      { id: "D", textEn: "Tuesday", textHi: "मंगलवार" }
    ],
    correctAnswer: "A",
    explanation: "सामान्य वर्ष (365 दिन = 52 सप्ताह + 1 दिन) जिस दिन से शुरू होता है, उसी दिन समाप्त होता है।"
  },
  {
    id: 86,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Which of the following is essential for maintaining communal harmony in society?",
    questionHi: "समाज में सांप्रदायिक सद्भाव बनाए रखने के लिए क्या अनिवार्य है?",
    options: [
      { id: "A", textEn: "Mutual respect, tolerance, and unbiased rule of law for all religions", textHi: "सभी धर्मों के प्रति परस्पर सम्मान, सहिष्णुता और निष्पक्ष कानून का पालन" },
      { id: "B", textEn: "Promoting rumors on social media", textHi: "सोशल मीडिया पर अफवाहें फैलाना" },
      { id: "C", textEn: "Favoring one community over others", textHi: "किसी एक वर्ग का पक्षपात करना" },
      { id: "D", textEn: "Ignoring hate speech", textHi: "नफरत भरे भाषणों की अनदेखी करना" }
    ],
    correctAnswer: "A",
    explanation: "सद्भाव और शांति निष्पक्ष कानून व्यवस्था, पंथनिरपेक्षता और आपसी आदर पर आधारित होती है।"
  },
  {
    id: 87,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Find the missing number in the matrix: 2, 4, 8 | 3, 9, 27 | 4, 16, ?",
    questionHi: "मैट्रिक्स में लुप्त संख्या ज्ञात कीजिए: 2, 4, 8 | 3, 9, 27 | 4, 16, ?",
    options: [
      { id: "A", textEn: "64", textHi: "64" },
      { id: "B", textEn: "32", textHi: "32" },
      { id: "C", textEn: "48", textHi: "48" },
      { id: "D", textEn: "20", textHi: "20" }
    ],
    correctAnswer: "A",
    explanation: "पैटर्न: x, x², x³. अतः 4, 4²=16, 4³=64."
  },
  {
    id: 88,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "How many squares are there in a standard 3x3 chessboard grid?",
    questionHi: "एक 3x3 ग्रिड में कुल कितने वर्ग (Squares) होते हैं?",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "9", textHi: "9" },
      { id: "C", textEn: "16", textHi: "16" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "कुल वर्ग = 1² + 2² + 3² = 1 + 4 + 9 = 14."
  },
  {
    id: 89,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "If an elderly citizen approaches you at the police station with difficulty in writing, what should you do?",
    questionHi: "यदि कोई वरिष्ठ नागरिक थाने में शिकायत लिखाने आता है और लिखने में असमर्थ है, तो आपका आचरण कैसा होना चाहिए?",
    options: [
      { id: "A", textEn: "Politely listen, write their statement on their behalf, read it out to them, and register the complaint", textHi: "सहानुभूतिपूर्वक सुनकर स्वयं उनकी शिकायत लिखना, पढ़कर सुनाना और आवश्यक विधिक कार्यवाही करना" },
      { id: "B", textEn: "Send them back asking to bring written application from outside", textHi: "बाहर से लिखवा कर लाने को कहकर वापस भेजना" },
      { id: "C", textEn: "Ignore their issue", textHi: "उनकी समस्या की अनदेखी करना" },
      { id: "D", textEn: "Tell them to contact court directly", textHi: "सीधे कोर्ट जाने को कहना" }
    ],
    correctAnswer: "A",
    explanation: "कानूनन और नैतिक रूप से पुलिस का दायित्व है कि असमर्थ नागरिकों की शिकायत स्वयं लिपिबद्ध कर कार्यवाही करे।"
  },
  {
    id: 90,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Select the option that completes the analogy: Court : Justice :: School : ?",
    questionHi: "सादृश्यता पूर्ण करें: न्यायालय : न्याय :: विद्यालय : ?",
    options: [
      { id: "A", textEn: "Education", textHi: "शिक्षा (Education)" },
      { id: "B", textEn: "Student", textHi: "विद्यार्थी" },
      { id: "C", textEn: "Teacher", textHi: "शिक्षक" },
      { id: "D", textEn: "Building", textHi: "भवन" }
    ],
    correctAnswer: "A",
    explanation: "न्यायालय का उद्देश्य न्याय प्रदान करना है, उसी प्रकार विद्यालय का मुख्य उद्देश्य शिक्षा प्रदान करना है।"
  },
  {
    id: 91,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Statements: All brave persons are leaders. Some police officers are brave. Conclusion: I. Some police officers are leaders. II. All leaders are police officers.",
    questionHi: "कथन: सभी साहसी व्यक्ति नेता होते हैं। कुछ पुलिस अधिकारी साहसी होते हैं। निष्कर्ष: I. कुछ पुलिस अधिकारी नेता होते हैं। II. सभी नेता पुलिस अधिकारी होते हैं।",
    options: [
      { id: "A", textEn: "Only Conclusion I follows", textHi: "केवल निष्कर्ष I निकलता है" },
      { id: "B", textEn: "Only Conclusion II follows", textHi: "केवल निष्कर्ष II निकलता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों निकलते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई नहीं निकलता" }
    ],
    correctAnswer: "A",
    explanation: "चूंकि कुछ पुलिस अधिकारी साहसी हैं और सभी साहसी नेता हैं, अतः वे पुलिस अधिकारी नेता भी होंगे (निष्कर्ष I सही है)।"
  },
  {
    id: 92,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "In a code language, if 123 means 'Hot Filtered Coffee', 356 means 'Very Hot Day', and 589 means 'Day And Night', what is the code for 'Very'?",
    questionHi: "एक कोड भाषा में 123 का अर्थ 'Hot Filtered Coffee', 356 का अर्थ 'Very Hot Day', और 589 का अर्थ 'Day And Night' है। 'Very' का कोड क्या होगा?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "3", textHi: "3" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "2", textHi: "2" }
    ],
    correctAnswer: "A",
    explanation: "पहले व दूसरे में 'Hot' उभयनिष्ठ है, कोड 3 है। दूसरे व तीसरे में 'Day' उभयनिष्ठ है, कोड 5 है। अतः दूसरे में बचा 'Very' = 6."
  },
  {
    id: 93,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "What is the mirror image of a clock showing 8:20?",
    questionHi: "यदि किसी घड़ी में वास्तविक समय 8:20 हो रहा है, तो दर्पण प्रतिबिंब (Mirror Image) में क्या समय दिखाई देगा?",
    options: [
      { id: "A", textEn: "3:40", textHi: "3:40" },
      { id: "B", textEn: "4:40", textHi: "4:40" },
      { id: "C", textEn: "3:20", textHi: "3:20" },
      { id: "D", textEn: "4:20", textHi: "4:20" }
    ],
    correctAnswer: "A",
    explanation: "दर्पण समय = 11:60 - वास्तविक समय = 11:60 - 8:20 = 3:40."
  },
  {
    id: 94,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Which quality is most crucial for a law enforcement officer facing intense stressful crisis?",
    questionHi: "गंभीर तनावपूर्ण संकट के समय एक पुलिस अधिकारी के लिए कौन-सा गुण सबसे अधिक आवश्यक है?",
    options: [
      { id: "A", textEn: "Emotional stability, mental calmness and quick decisive lawful action", textHi: "मानसिक धैर्य, संवेगात्मक स्थिरता और त्वरित विधिक निर्णय क्षमता" },
      { id: "B", textEn: "Aggression and panic", textHi: "अत्यधिक गुस्सा और घबराहट" },
      { id: "C", textEn: "Indifference", textHi: "उदासीनता" },
      { id: "D", textEn: "Rigidity without flexibility", textHi: "बिना सोचे-समझे बल प्रयोग" }
    ],
    correctAnswer: "A",
    explanation: "तनाव प्रबंधन और शांत दिमाग से सही कानूनी निर्णय लेना पुलिस सेवा का सबसे महत्वपूर्ण गुण है।"
  },
  {
    id: 95,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Find the odd number pair: 14 - 49, 16 - 64, 18 - 81, 20 - 90",
    questionHi: "विषम संख्या युग्म चुनिए: 14 - 49, 16 - 64, 18 - 81, 20 - 90",
    options: [
      { id: "A", textEn: "20 - 90", textHi: "20 - 90" },
      { id: "B", textEn: "14 - 49", textHi: "14 - 49" },
      { id: "C", textEn: "16 - 64", textHi: "16 - 64" },
      { id: "D", textEn: "18 - 81", textHi: "18 - 81" }
    ],
    correctAnswer: "A",
    explanation: "(14/2)² = 7² = 49; (16/2)² = 8² = 64; (18/2)² = 9² = 81. लेकिन (20/2)² = 10² = 100 होना चाहिए, 90 नहीं।"
  },
  {
    id: 96,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "If Suresh ranks 7th from the top and 28th from the bottom in a class, how many students are there in the class?",
    questionHi: "यदि किसी कक्षा में सुरेश का स्थान ऊपर से 7वाँ और नीचे से 28वाँ है, तो कक्षा में कुल कितने छात्र हैं?",
    options: [
      { id: "A", textEn: "34", textHi: "34" },
      { id: "B", textEn: "35", textHi: "35" },
      { id: "C", textEn: "33", textHi: "33" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "कुल छात्र = ऊपर से स्थान + नीचे से स्थान - 1 = 7 + 28 - 1 = 34."
  },
  {
    id: 97,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "Which of the following numbers will replace question mark: 8 : 64 :: 11 : ?",
    questionHi: "प्रश्नवाचक चिह्न के स्थान पर कौन-सी संख्या आएगी: 8 : 64 :: 11 : ?",
    options: [
      { id: "A", textEn: "121", textHi: "121" },
      { id: "B", textEn: "110", textHi: "110" },
      { id: "C", textEn: "132", textHi: "132" },
      { id: "D", textEn: "144", textHi: "144" }
    ],
    correctAnswer: "A",
    explanation: "8² = 64, अतः 11² = 121."
  },
  {
    id: 98,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "What is the primary significance of the Rule of Law (विधि का शासन) in a democratic society?",
    questionHi: "लोकतांत्रिक समाज में 'विधि के शासन' (Rule of Law) का मूल अर्थ क्या है?",
    options: [
      { id: "A", textEn: "All persons, regardless of rank, power or wealth, are equally subject to the law", textHi: "कानून के समक्ष सभी नागरिक समान हैं, कोई भी व्यक्ति कानून से ऊपर नहीं है" },
      { id: "B", textEn: "Rulers can make arbitrary arrests", textHi: "शासक मनमाने फैसले ले सकते हैं" },
      { id: "C", textEn: "Only police obeys laws", textHi: "केवल पुलिस पर नियम लागू होते हैं" },
      { id: "D", textEn: "Courts have no authority", textHi: "अदालतों की कोई मान्यता नहीं" }
    ],
    correctAnswer: "A",
    explanation: "विधि के शासन का अर्थ है कि कानून सर्वोच्च है और सभी नागरिक कानून के समक्ष समान हैं।"
  },
  {
    id: 99,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "If South becomes North-East, what direction will East become?",
    questionHi: "यदि दक्षिण दिशा उत्तर-पूर्व बन जाती है, तो पूर्व दिशा क्या बन जाएगी?",
    options: [
      { id: "A", textEn: "North-West", textHi: "उत्तर-पश्चिम (North-West)" },
      { id: "B", textEn: "South-West", textHi: "दक्षिण-पश्चिम" },
      { id: "C", textEn: "North", textHi: "उत्तर" },
      { id: "D", textEn: "South", textHi: "दक्षिण" }
    ],
    correctAnswer: "A",
    explanation: "दक्षिण से उत्तर-पूर्व 135° वामावर्त (counter-clockwise) है। पूर्व को 135° वामावर्त घुमाने पर उत्तर-पश्चिम दिशा मिलती है।"
  },
  {
    id: 100,
    section: "pol_reasoning",
    sectionName: "4. मानसिक अभिरुचि व रीजनिंग",
    questionEn: "As a responsible citizen and law officer, what action should be taken against hate messages or viral rumors causing panic?",
    questionHi: "सोशल मीडिया पर कानून-व्यवस्था बिगाड़ने वाली अफवाहों अथवा भड़काऊ संदेशों पर क्या कदम उठाया जाना चाहिए?",
    options: [
      { id: "A", textEn: "Do not forward; verify facts and immediately report to Cyber Cell / Police", textHi: "आगे फॉरवर्ड न करें; तथ्य जांचें और तुरंत साइबर सेल या पुलिस को रिपोर्ट करें" },
      { id: "B", textEn: "Forward to all WhatsApp groups", textHi: "सभी व्हाट्सएप ग्रुप में शेयर करें" },
      { id: "C", textEn: "Add more rumors to it", textHi: "उसमें और बातें जोड़कर फैलाएं" },
      { id: "D", textEn: "Encourage protests without facts", textHi: "बिना सोचे समझे विरोध प्रदर्शन करें" }
    ],
    correctAnswer: "A",
    explanation: "अफवाहों को न फैलाना और साइबर सेल को रिपोर्ट करना कानून व शांति व्यवस्था बनाए रखने में सबसे आवश्यक कदम है।"
  }
];
