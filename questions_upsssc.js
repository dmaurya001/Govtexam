/**
 * GovtExamHub — UPSSSC Examination (PET / VDO / Junior Assistant Mock)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real UPSSSC Marking: +1.00 for Correct Answer, -0.25 for Incorrect Answer (1/4th Negative Marking)
 */

const UPSSSC_EXAM_CONFIG = {
  id: "upsssc",
  title: "UPSSSC Examination (PET / VDO / Lekhpal Mock)",
  shortName: "UPSSSC",
  icon: "📑",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.25, // Real 1/4th Negative Marking
  sections: [
    { id: "up_hindi", name: "1. General Hindi / सामान्य हिंदी", start: 1, end: 25, total: 25 },
    { id: "up_gk", name: "2. General Knowledge & UP GK", start: 26, end: 50, total: 25 },
    { id: "up_math", name: "3. Elementary Mathematics & Graphs", start: 51, end: 75, total: 25 },
    { id: "up_reasoning", name: "4. Logical Reasoning", start: 76, end: 100, total: 25 }
  ]
};

const UPSSSC_QUESTIONS_DATA = [
  // =======================================================
  // SECTION 1: GENERAL HINDI / सामान्य हिंदी (Q1 - Q25)
  // =======================================================
  {
    id: 1,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the संधि विच्छेद (Sandhi Viched) of 'पवित्र' (Pavitra)?",
    questionHi: "'पवित्र' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "पो + इत्र (अयादि संधि)", textHi: "पो + इत्र (अयादि संधि)" },
      { id: "B", textEn: "पौ + इत्र", textHi: "पौ + इत्र" },
      { id: "C", textEn: "प + इत्र", textHi: "प + इत्र" },
      { id: "D", textEn: "पा + इत्र", textHi: "पा + इत्र" }
    ],
    correctAnswer: "A",
    explanation: "अयादि स्वर संधि के नियमानुसार 'ओ + इ = अवि' होता है, अतः 'पो + इत्र = पवित्र'।"
  },
  {
    id: 2,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following is a synonym of 'आँख' (Eye)?",
    questionHi: "निम्न में से कौन सा शब्द 'आँख' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "लोचन / चक्षु", textHi: "लोचन / चक्षु" },
      { id: "B", textEn: "वारि", textHi: "वारि" },
      { id: "C", textEn: "अनल", textHi: "अनल" },
      { id: "D", textEn: "पय", textHi: "पय" }
    ],
    correctAnswer: "A",
    explanation: "आँख के पर्यायवाची शब्द: लोचन, चक्षु, नयन, नेत्र, दृष्टि, दृग हैं।"
  },
  {
    id: 3,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the antonym of 'जंगम' (Jangam)?",
    questionHi: "'जंगम' शब्द का सही विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "स्थावर (Sthawar)", textHi: "स्थावर (अचल)" },
      { id: "B", textEn: "पुष्ट", textHi: "पुष्ट" },
      { id: "C", textEn: "स्थिर", textHi: "स्थिर" },
      { id: "D", textEn: "दुर्गम", textHi: "दुर्गम" }
    ],
    correctAnswer: "A",
    explanation: "'जंगम' (जो चल सकता हो) का विलोम 'स्थावर' (जो स्थिर/अचल हो) होता है।"
  },
  {
    id: 4,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the समास (Samas) in 'पीताम्बर'?",
    questionHi: "'पीताम्बर' (पीत है अम्बर जिसका अर्थात् श्रीकृष्ण) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "बहुव्रीहि समास", textHi: "बहुव्रीहि समास" },
      { id: "B", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "C", textEn: "द्विगु समास", textHi: "द्विगु समास" },
      { id: "D", textEn: "द्वन्द्व समास", textHi: "द्वन्द्व समास" }
    ],
    correctAnswer: "A",
    explanation: "जिस समास में दोनों पद मिलकर किसी तीसरे पद की ओर संकेत करते हैं, वहाँ बहुव्रीहि समास होता है।"
  },
  {
    id: 5,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which word represents 'जो सब कुछ जानता हो' (One who knows everything)?",
    questionHi: "'जो सब कुछ जानता हो' वाक्यांश के लिए एक शब्द क्या होगा?",
    options: [
      { id: "A", textEn: "सर्वज्ञ (Sarvajna)", textHi: "सर्वज्ञ" },
      { id: "B", textEn: "अल्पज्ञ", textHi: "अल्पज्ञ" },
      { id: "C", textEn: "विज्ञ", textHi: "विज्ञ" },
      { id: "D", textEn: "बहुज्ञ", textHi: "बहुज्ञ" }
    ],
    correctAnswer: "A",
    explanation: "सब कुछ जानने वाले को 'सर्वज्ञ' कहते हैं। कम जानने वाले को 'अल्पज्ञ' कहते हैं।"
  },
  {
    id: 6,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the शुद्ध वर्तनी (Correct spelling) of the word?",
    questionHi: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन सा है?",
    options: [
      { id: "A", textEn: "उज्ज्वल", textHi: "उज्ज्वल (दो बार आधा 'ज')" },
      { id: "B", textEn: "उज्वल", textHi: "उज्वल" },
      { id: "C", textEn: "उज्जवल", textHi: "उज्जवल" },
      { id: "D", textEn: "उज्वल्ल", textHi: "उज्वल्ल" }
    ],
    correctAnswer: "A",
    explanation: "शुद्ध वर्तनी 'उज्ज्वल' है (उत् + ज्वल = उज्ज्वल, जिसमें दो बार आधा 'ज' आता है)।"
  },
  {
    id: 7,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the idiom: 'गागर में सागर भरना'?",
    questionHi: "मुहावरे 'गागर में सागर भरना' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "थोड़े शब्दों में बहुत कुछ कह देना", textHi: "थोड़े शब्दों में बहुत कुछ कह देना" },
      { id: "B", textEn: "गागर को समुद्र में डुबोना", textHi: "गागर को समुद्र में डुबोना" },
      { id: "C", textEn: "असंभव कार्य करना", textHi: "असंभव कार्य करना" },
      { id: "D", textEn: "बहुत अधिक बोलना", textHi: "बहुत अधिक बोलना" }
    ],
    correctAnswer: "A",
    explanation: "बिहारी कवि के दोहों के संदर्भ में प्रसिद्ध मुहावरा 'गागर में सागर भरना' अर्थात् संक्षिप्त में गूढ़ बात कहना।"
  },
  {
    id: 8,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following is a तद्भव (Tadbhav) word?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'तद्भव' है?",
    options: [
      { id: "A", textEn: "आग (तत्सम: अग्नि)", textHi: "आग (तत्सम: अग्नि)" },
      { id: "B", textEn: "सूर्य", textHi: "सूर्य" },
      { id: "C", textEn: "दुग्ध", textHi: "दुग्ध" },
      { id: "D", textEn: "मयूर", textHi: "मयूर" }
    ],
    correctAnswer: "A",
    explanation: "'आग' तद्भव शब्द है जिसका तत्सम 'अग्नि' होता है।"
  },
  {
    id: 9,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Identify the कारक (Case) in: 'पेड़ से पत्ता गिरा' (A leaf fell from the tree).",
    questionHi: "'पेड़ से पत्ता गिरा' वाक्य में किस कारक का प्रयोग हुआ है?",
    options: [
      { id: "A", textEn: "अपादान कारक (अलग होने का भाव)", textHi: "अपादान कारक (अलग होने के अर्थ में)" },
      { id: "B", textEn: "करण कारक", textHi: "करण कारक" },
      { id: "C", textEn: "कर्म कारक", textHi: "कर्म कारक" },
      { id: "D", textEn: "अधिकरण कारक", textHi: "अधिकरण कारक" }
    ],
    correctAnswer: "A",
    explanation: "संज्ञा के जिस रूप से किसी वस्तु का किसी स्थान या वस्तु से अलग होना पाया जाए, वहाँ अपादान कारक (विभक्ति: 'से') होता है।"
  },
  {
    id: 10,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the विलोम (Antonym) of 'अथ'?",
    questionHi: "'अथ' शब्द का विलोम क्या होगा?",
    options: [
      { id: "A", textEn: "इति (Iti)", textHi: "इति" },
      { id: "B", textEn: "अंत", textHi: "अंत" },
      { id: "C", textEn: "शुरुआत", textHi: "शुरुआत" },
      { id: "D", textEn: "समाप्त", textHi: "समाप्त" }
    ],
    correctAnswer: "A",
    explanation: "'अथ' (प्रारंभ) का विलोम 'इति' (समाप्ति) होता है।"
  },
  {
    id: 11,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following is a तत्सम (Tatsam) word?",
    questionHi: "निम्नलिखित में से 'तत्सम' शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "अक्षि (तद्भव: आँख)", textHi: "अक्षि (तद्भव: आँख)" },
      { id: "B", textEn: "कान", textHi: "कान" },
      { id: "C", textEn: "नाक", textHi: "नाक" },
      { id: "D", textEn: "दांत", textHi: "दांत" }
    ],
    correctAnswer: "A",
    explanation: "'अक्षि' संस्कृत का मूल तत्सम शब्द है, जिसका तद्भव रूप 'आँख' होता है।"
  },
  {
    id: 12,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the संधि रूप of 'उत् + लास'?",
    questionHi: "'उत् + लास' का सही संधि रूप क्या है?",
    options: [
      { id: "A", textEn: "उल्लास (व्यंजन संधि)", textHi: "उल्लास (व्यंजन संधि)" },
      { id: "B", textEn: "उदलास", textHi: "उदलास" },
      { id: "C", textEn: "उतलास", textHi: "उतलास" },
      { id: "D", textEn: "उहलास", textHi: "उहलास" }
    ],
    correctAnswer: "A",
    explanation: "त् के बाद ल आने पर त् का ल् हो जाता है (त् + ल = ल्ल), अतः उत् + लास = उल्लास।"
  },
  {
    id: 13,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the idiom: 'दांत खट्टे करना'?",
    questionHi: "मुहावरे 'दांत खट्टे करना' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "पराजित करना / हरा देना", textHi: "पराजित करना / हरा देना" },
      { id: "B", textEn: "नींबू खाना", textHi: "नींबू खाना" },
      { id: "C", textEn: "दांत खराब होना", textHi: "दांत खराब होना" },
      { id: "D", textEn: "बहुत क्रोधित होना", textHi: "बहुत क्रोधित होना" }
    ],
    correctAnswer: "A",
    explanation: "'दांत खट्टे करना' का अर्थ शत्रु या प्रतिद्वंद्वी को बुरी तरह हराना या पराजित करना होता है।"
  },
  {
    id: 14,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the स्त्रीलिंग (Feminine) form of 'कवि' (Kavi)?",
    questionHi: "'कवि' शब्द का सही स्त्रीलिंग रूप कौन सा है?",
    options: [
      { id: "A", textEn: "कवयित्री", textHi: "कवयित्री" },
      { id: "B", textEn: "कवियत्री", textHi: "कवियत्री" },
      { id: "C", textEn: "कविइत्री", textHi: "कविइत्री" },
      { id: "D", textEn: "कवयितरी", textHi: "कवयितरी" }
    ],
    correctAnswer: "A",
    explanation: "कवि का शुद्ध स्त्रीलिंग रूप 'कवयित्री' होता है।"
  },
  {
    id: 15,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following sentences is grammatically pure (शुद्ध वाक्य)?",
    questionHi: "निम्नलिखित में से शुद्ध वाक्य का चयन कीजिए:",
    options: [
      { id: "A", textEn: "कृपया यहाँ हस्ताक्षर कर दीजिए।", textHi: "कृपया यहाँ हस्ताक्षर कर दीजिए।" },
      { id: "B", textEn: "कृपया करके यहाँ हस्ताक्षर करें।", textHi: "कृपया करके यहाँ हस्ताक्षर करें।" },
      { id: "C", textEn: "यहाँ अनेकों लोग उपस्थित थे।", textHi: "यहाँ अनेकों लोग उपस्थित थे।" },
      { id: "D", textEn: "मेरे को घर जाना है।", textHi: "मेरे को घर जाना है।" }
    ],
    correctAnswer: "A",
    explanation: "'हस्ताक्षर' बहुवचन में प्रयुक्त होता है और 'कृपया' के साथ 'करके' नहीं लगाया जाता। विकल्प A पूर्णतः शुद्ध है।"
  },
  {
    id: 16,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the synonym of 'बिजली' (Lightning)?",
    questionHi: "'बिजली' का पर्यायवाची शब्द कौन सा है?",
    options: [
      { id: "A", textEn: "दामिनी / तड़ित / विद्युत", textHi: "दामिनी / तड़ित" },
      { id: "B", textEn: "शर्वरी", textHi: "शर्वरी" },
      { id: "C", textEn: "विभावरी", textHi: "विभावरी" },
      { id: "D", textEn: "यामिनी", textHi: "यामिनी" }
    ],
    correctAnswer: "A",
    explanation: "बिजली के प्रमुख पर्यायवाची शब्द: दामिनी, तड़ित, सौदामिनी, चंचला, विद्युत हैं।"
  },
  {
    id: 17,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the समास in 'यथाशक्ति'?",
    questionHi: "'यथाशक्ति' (शक्ति के अनुसार) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "अव्ययीभाव समास", textHi: "अव्ययीभाव समास" },
      { id: "B", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "C", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" },
      { id: "D", textEn: "द्वन्द्व समास", textHi: "द्वन्द्व समास" }
    ],
    correctAnswer: "A",
    explanation: "जिस समास में पूर्व पद अव्यय तथा प्रधान हो, उसे अव्ययीभाव समास कहते हैं (यथा + शक्ति)।"
  },
  {
    id: 18,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the one-word substitution for: 'जिसकी उपमा न दी जा सके'?",
    questionHi: "'जिसकी कोई उपमा न दी जा सके' वाक्यांश के लिए एक शब्द है:",
    options: [
      { id: "A", textEn: "अनुपम", textHi: "अनुपम" },
      { id: "B", textEn: "अतुलनीय", textHi: "अतुलनीय" },
      { id: "C", textEn: "अद्वितीय", textHi: "अद्वितीय" },
      { id: "D", textEn: "सर्वोत्कृष्ट", textHi: "सर्वोत्कृष्ट" }
    ],
    correctAnswer: "A",
    explanation: "जिसकी कोई उपमा न हो उसे 'अनुपम' कहा जाता है।"
  },
  {
    id: 19,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the विलोम (Antonym) of 'उत्थान' (Rise)?",
    questionHi: "'उत्थान' शब्द का सही विलोम क्या है?",
    options: [
      { id: "A", textEn: "पतन (Patan)", textHi: "पतन" },
      { id: "B", textEn: "विनाश", textHi: "विनाश" },
      { id: "C", textEn: "अवनति", textHi: "अवनति" },
      { id: "D", textEn: "विघटन", textHi: "विघटन" }
    ],
    correctAnswer: "A",
    explanation: "'उत्थान' का विलोम शब्द 'पतन' होता है।"
  },
  {
    id: 20,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the उपसर्ग (Prefix) in the word 'अपमान'?",
    questionHi: "'अपमान' शब्द में कौन सा उपसर्ग लगा है?",
    options: [
      { id: "A", textEn: "अप (Ap)", textHi: "अप" },
      { id: "B", textEn: "अ", textHi: "अ" },
      { id: "C", textEn: "अपि", textHi: "अपि" },
      { id: "D", textEn: "अव", textHi: "अव" }
    ],
    correctAnswer: "A",
    explanation: "अपमान में 'अप' उपसर्ग है और 'मान' मूल शब्द है।"
  },
  {
    id: 21,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the प्रत्यय (Suffix) in 'मिठास'?",
    questionHi: "'मिठास' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
    options: [
      { id: "A", textEn: "आस (Aas)", textHi: "आस" },
      { id: "B", textEn: "ठास", textHi: "ठास" },
      { id: "C", textEn: "स", textHi: "स" },
      { id: "D", textEn: "ास", textHi: "ास" }
    ],
    correctAnswer: "A",
    explanation: "मीठा (विशेषण) में 'आस' भाववाचक प्रत्यय जोड़ने पर 'मिठास' बनता है।"
  },
  {
    id: 22,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following words is always used in plural (सदा बहुवचन)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'सदा बहुवचन' में प्रयुक्त होता है?",
    options: [
      { id: "A", textEn: "प्राण / दर्शन / हस्ताक्षर", textHi: "प्राण" },
      { id: "B", textEn: "लड़का", textHi: "लड़का" },
      { id: "C", textEn: "पुस्तक", textHi: "पुस्तक" },
      { id: "D", textEn: "पानी", textHi: "पानी" }
    ],
    correctAnswer: "A",
    explanation: "प्राण, दर्शन, हस्ताक्षर, आँसू, लोग आदि शब्द हिंदी में सदैव बहुवचन में प्रयुक्त होते हैं।"
  },
  {
    id: 23,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the संधि विच्छेद of 'सूर्योदय'?",
    questionHi: "'सूर्योदय' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "सूर्य + उदय (गुण स्वर संधि)", textHi: "सूर्य + उदय (गुण स्वर संधि)" },
      { id: "B", textEn: "सूर्यो + दय", textHi: "सूर्यो + दय" },
      { id: "C", textEn: "सूर्य + दय", textHi: "सूर्य + दय" },
      { id: "D", textEn: "सूर्या + उदय", textHi: "सूर्या + उदय" }
    ],
    correctAnswer: "A",
    explanation: "अ/आ + उ/ऊ = ओ (गुण संधि), अतः सूर्य + उदय = सूर्योदय।"
  },
  {
    id: 24,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the idiom: 'अंगूठा दिखाना'?",
    questionHi: "मुहावरे 'अंगूठा दिखाना' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "वक्त पर साफ इनकार कर देना", textHi: "वक्त पर साफ इनकार कर देना" },
      { id: "B", textEn: "सहमति देना", textHi: "सहमति देना" },
      { id: "C", textEn: "अंगूठा चूसना", textHi: "अंगूठा चूसना" },
      { id: "D", textEn: "उपहास उड़ाना", textHi: "उपहास उड़ाना" }
    ],
    correctAnswer: "A",
    explanation: "'अंगूठा दिखाना' का अर्थ ठीक समय पर किसी कार्य के लिए साफ मना या इनकार कर देना होता है।"
  },
  {
    id: 25,
    section: "up_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Who is the author of 'गोदान' (Godan) and 'गबन' (Gaban)?",
    questionHi: "उपन्यास सम्राट 'मुंशी प्रेमचंद' द्वारा रचित प्रसिद्ध उपन्यास कौन सा है?",
    options: [
      { id: "A", textEn: "गोदान (Godan)", textHi: "गोदान (Godan)" },
      { id: "B", textEn: "कामायनी", textHi: "कामायनी (जयशंकर प्रसाद)" },
      { id: "C", textEn: "साकेत", textHi: "साकेत (मैथिलीशरण गुप्त)" },
      { id: "D", textEn: "यामा", textHi: "यामा (महादेवी वर्मा)" }
    ],
    correctAnswer: "A",
    explanation: "'गोदान' मुंशी प्रेमचंद का कालजयी उपन्यास है जिसमें कृषक होरी के जीवन का सजीव चित्रण है।"
  },

  // =======================================================
  // SECTION 2: GENERAL KNOWLEDGE & UP GK (Q26 - Q50)
  // =======================================================
  {
    id: 26,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which is the largest canal network system in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश की सबसे बड़ी नहर प्रणाली कौन सी है?",
    options: [
      { id: "A", textEn: "Sharda Canal", textHi: "शारदा नहर (Sharda Canal)" },
      { id: "B", textEn: "Upper Ganga Canal", textHi: "ऊपरी गंगा नहर" },
      { id: "C", textEn: "Lower Ganga Canal", textHi: "निचली गंगा नहर" },
      { id: "D", textEn: "Agra Canal", textHi: "आगरा नहर" }
    ],
    correctAnswer: "A",
    explanation: "Sharda Canal, originating from the Sharda river at Banbasa, is the longest canal network in UP with thousands of distribution branches."
  },
  {
    id: 27,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "In which year was the state of 'United Provinces' officially renamed as 'Uttar Pradesh'?",
    questionHi: "'संयुक्त प्रांत' (United Provinces) का नाम बदलकर आधिकारिक रूप से 'उत्तर प्रदेश' किस तिथि को किया गया था?",
    options: [
      { id: "A", textEn: "24 January 1950", textHi: "24 जनवरी 1950 (UP Diwas)" },
      { id: "B", textEn: "15 August 1947", textHi: "15 अगस्त 1947" },
      { id: "C", textEn: "26 January 1950", textHi: "26 जनवरी 1950" },
      { id: "D", textEn: "1 November 1956", textHi: "1 नवंबर 1956" }
    ],
    correctAnswer: "A",
    explanation: "On 24 January 1950, United Provinces was renamed Uttar Pradesh, which is now celebrated as UP Foundation Day (UP Diwas)."
  },
  {
    id: 28,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Chauri Chaura incident occurred on 4 February 1922 in which district of Uttar Pradesh?",
    questionHi: "4 फरवरी 1922 को प्रसिद्ध चौरी-चौरा की घटना उत्तर प्रदेश के किस जिले में हुई थी?",
    options: [
      { id: "A", textEn: "Gorakhpur", textHi: "गोरखपुर (Gorakhpur)" },
      { id: "B", textEn: "Deoria", textHi: "देवरिया" },
      { id: "C", textEn: "Varanasi", textHi: "वाराणसी" },
      { id: "D", textEn: "Azamgarh", textHi: "आजमगढ़" }
    ],
    correctAnswer: "A",
    explanation: "The incident at Chauri Chaura in Gorakhpur led Mahatma Gandhi to suspend the Non-Cooperation Movement."
  },
  {
    id: 29,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which district of Uttar Pradesh is globally renowned for its Brassware handicrafts (पीतल नगरी)?",
    questionHi: "उत्तर प्रदेश का कौन सा शहर पीतल के हस्तशिल्प और बर्तनों के लिए 'पीतल नगरी' के रूप में प्रसिद्ध है?",
    options: [
      { id: "A", textEn: "Moradabad", textHi: "मुरादाबाद (Moradabad)" },
      { id: "B", textEn: "Aligarh", textHi: "अलीगढ़" },
      { id: "C", textEn: "Saharanpur", textHi: "सहारनपुर" },
      { id: "D", textEn: "Bareilly", textHi: "बरेली" }
    ],
    correctAnswer: "A",
    explanation: "Moradabad is famous throughout the world as Pital Nagari for its flourishing brass handicraft industry."
  },
  {
    id: 30,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "How many Lok Sabha constituencies are there in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में लोकसभा की कुल कितनी सीटें निर्धारित हैं?",
    options: [
      { id: "A", textEn: "80 seats", textHi: "80 सीटें (सर्वाधिक)" },
      { id: "B", textEn: "85 seats", textHi: "85 सीटें" },
      { id: "C", textEn: "75 seats", textHi: "75 सीटें" },
      { id: "D", textEn: "90 seats", textHi: "90 सीटें" }
    ],
    correctAnswer: "A",
    explanation: "Uttar Pradesh sends the largest number of members to Lok Sabha (80 seats) and Rajya Sabha (31 seats)."
  },
  {
    id: 31,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which festival in Uttar Pradesh marks the world's largest gathering of pilgrims every 12 years?",
    questionHi: "उत्तर प्रदेश में प्रत्येक 12 वर्ष में आयोजित होने वाला विश्व का सबसे बड़ा धार्मिक समागम कौन सा है?",
    options: [
      { id: "A", textEn: "Maha Kumbh Mela (Prayagraj)", textHi: "महाकुंभ मेला (प्रयागराज)" },
      { id: "B", textEn: "Magh Mela", textHi: "माघ मेला" },
      { id: "C", textEn: "Nauchandi Mela", textHi: "नौचंदी मेला" },
      { id: "D", textEn: "Bateshwar Mela", textHi: "बटेश्वर मेला" }
    ],
    correctAnswer: "A",
    explanation: "Maha Kumbh Mela is held at Triveni Sangam in Prayagraj every 12 years and is inscribed on UNESCO's Intangible Cultural Heritage list."
  },
  {
    id: 32,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where is the Indian Veterinary Research Institute (IVRI) located in Uttar Pradesh?",
    questionHi: "भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) उत्तर प्रदेश में कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Izatnagar (Bareilly)", textHi: "इज्जतनगर (बरेली)" },
      { id: "B", textEn: "Mathura", textHi: "मथुरा" },
      { id: "C", textEn: "Meerut", textHi: "मेरठ" },
      { id: "D", textEn: "Aligarh", textHi: "अलीगढ़" }
    ],
    correctAnswer: "A",
    explanation: "IVRI Izatnagar, Bareilly is one of the premier veterinary research institutes in Asia."
  },
  {
    id: 33,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Who was the first Chief Minister of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश के प्रथम मुख्यमंत्री कौन थे?",
    options: [
      { id: "A", textEn: "Govind Ballabh Pant", textHi: "पं. गोविंद बल्लभ पंत" },
      { id: "B", textEn: "Chaudhary Charan Singh", textHi: "चौधरी चरण सिंह" },
      { id: "C", textEn: "Sampurnanand", textHi: "डॉ. संपूर्णानंद" },
      { id: "D", textEn: "Chandra Bhanu Gupta", textHi: "चंद्र भानु गुप्त" }
    ],
    correctAnswer: "A",
    explanation: "Pandit Govind Ballabh Pant was the first Chief Minister of Uttar Pradesh, serving from 1950 to 1954."
  },
  {
    id: 34,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which district of Uttar Pradesh is known for its exquisite Perfume (इत्र उद्योग)?",
    questionHi: "उत्तर प्रदेश का कौन सा शहर अपने इत्र (Perfume) उद्योग के लिए भारत की 'इत्र नगरी' कहलाता है?",
    options: [
      { id: "A", textEn: "Kannauj", textHi: "कन्नौज (Kannauj)" },
      { id: "B", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "C", textEn: "Jaunpur", textHi: "जौनपुर" },
      { id: "D", textEn: "Faizabad", textHi: "फैजाबाद" }
    ],
    correctAnswer: "A",
    explanation: "Kannauj on the banks of Ganga has been the hub of traditional natural attar and perfume distillation since the Mughal era."
  },
  {
    id: 35,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Who was the first woman Governor of Uttar Pradesh and in fact the first woman Governor of any Indian state?",
    questionHi: "उत्तर प्रदेश (और भारत के किसी भी राज्य) की पहली महिला राज्यपाल कौन थीं?",
    options: [
      { id: "A", textEn: "Sarojini Naidu", textHi: "सरोजिनी नायडू (Sarojini Naidu)" },
      { id: "B", textEn: "Sucheta Kripalani", textHi: "सुचेता कृपलानी (पहली महिला CM)" },
      { id: "C", textEn: "Vijayalakshmi Pandit", textHi: "विजयालक्ष्मी पंडित" },
      { id: "D", textEn: "Padmaja Naidu", textHi: "पद्मजा नायडू" }
    ],
    correctAnswer: "A",
    explanation: "Sarojini Naidu served as the Governor of the United Provinces (UP) from 15 August 1947 until her death in 1949."
  },
  {
    id: 36,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which river joins the Yamuna near Etawah in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश के इटावा के निकट यमुना नदी में कौन सी प्रमुख नदी मिलती है?",
    options: [
      { id: "A", textEn: "Chambal River", textHi: "चंबल नदी (Chambal River)" },
      { id: "B", textEn: "Betwa River", textHi: "बेतवा नदी" },
      { id: "C", textEn: "Ken River", textHi: "केन नदी" },
      { id: "D", textEn: "Tons River", textHi: "टोंस नदी" }
    ],
    correctAnswer: "A",
    explanation: "The Chambal River confluences with the Yamuna at Pachnada near Etawah."
  },
  {
    id: 37,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Under the ODOP scheme, what is the featured product of Saharanpur district?",
    questionHi: "एक जिला एक उत्पाद (ODOP) योजना के तहत सहारनपुर किस उत्पाद के लिए चिन्हित है?",
    options: [
      { id: "A", textEn: "Wood Carving Handicrafts", textHi: "काष्ठ नक्काशी (Wood Carving)" },
      { id: "B", textEn: "Chikan Embroidery", textHi: "चिकनकारी (लखनऊ)" },
      { id: "C", textEn: "Carpet (Bhadohi)", textHi: "कालीन (भदोही)" },
      { id: "D", textEn: "Terracotta (Gorakhpur)", textHi: "टेराकोटा (गोरखपुर)" }
    ],
    correctAnswer: "A",
    explanation: "Saharanpur is globally famed for its artistic wooden carving and Sheesham wood handicrafts."
  },
  {
    id: 38,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where is the Rajiv Gandhi National Aviation University (RGNAU) located in UP?",
    questionHi: "उत्तर प्रदेश में राजीव गांधी राष्ट्रीय विमानन विश्वविद्यालय कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Fursatganj (Amethi)", textHi: "फुर्सतगंज (अमेठी)" },
      { id: "B", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "C", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "D", textEn: "Varanasi", textHi: "वाराणसी" }
    ],
    correctAnswer: "A",
    explanation: "RGNAU, India's first aviation university, is situated at Fursatganj Airfield in Amethi district."
  },
  {
    id: 39,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which district of Uttar Pradesh has the highest sex ratio according to Census 2011?",
    questionHi: "2011 की जनगणना के अनुसार उत्तर प्रदेश का सर्वाधिक लिंगानुपात (Sex Ratio) वाला जिला कौन सा है?",
    options: [
      { id: "A", textEn: "Jaunpur (1,024)", textHi: "जौनपुर (1,024)" },
      { id: "B", textEn: "Azamgarh (1,019)", textHi: "आजमगढ़" },
      { id: "C", textEn: "Deoria", textHi: "देवरिया" },
      { id: "D", textEn: "Pratapgarh", textHi: "प्रतापगढ़" }
    ],
    correctAnswer: "A",
    explanation: "Jaunpur district recorded the highest sex ratio in UP with 1,024 females per 1,000 males."
  },
  {
    id: 40,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where was Lord Buddha's Mahaparinirvana (death) attained?",
    questionHi: "भगवान बुद्ध का महापरिनिर्वाण उत्तर प्रदेश के किस स्थान पर हुआ था?",
    options: [
      { id: "A", textEn: "Kushinagar", textHi: "कुशीनगर (Kushinagar)" },
      { id: "B", textEn: "Sarnath", textHi: "सारनाथ (प्रथम उपदेश)" },
      { id: "C", textEn: "Shravasti", textHi: "श्रावस्ती" },
      { id: "D", textEn: "Kaushambi", textHi: "कौशाम्बी" }
    ],
    correctAnswer: "A",
    explanation: "Gautama Buddha attained Mahaparinirvana at the age of 80 in Kushinagar (capital of the Mallas)."
  },
  {
    id: 41,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "What is the official state fish of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश की राजकीय मछली कौन सी है?",
    options: [
      { id: "A", textEn: "Chitala (चीतर / Chital)", textHi: "चीतर / चीतल (Chitala)" },
      { id: "B", textEn: "Rohu", textHi: "रोहू" },
      { id: "C", textEn: "Katla", textHi: "कतला" },
      { id: "D", textEn: "Mahseer", textHi: "महाशीर" }
    ],
    correctAnswer: "A",
    explanation: "Chitala (Chitala chitala) is the official state fish of Uttar Pradesh."
  },
  {
    id: 42,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which Mughal Emperor founded the city of Fatehpur Sikri as his capital in 1571?",
    questionHi: "1571 में अपनी राजधानी के रूप में फतेहपुर सीकरी की स्थापना किस मुगल शासक ने की थी?",
    options: [
      { id: "A", textEn: "Akbar", textHi: "अकबर (Akbar)" },
      { id: "B", textEn: "Babur", textHi: "बाबर" },
      { id: "C", textEn: "Shah Jahan", textHi: "शाहजहाँ" },
      { id: "D", textEn: "Jahangir", textHi: "जहाँगीर" }
    ],
    correctAnswer: "A",
    explanation: "Akbar built Fatehpur Sikri in honor of Sufi saint Sheikh Salim Chishti, featuring Buland Darwaza."
  },
  {
    id: 43,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "What is the total number of districts in the state of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में कुल कितने जिले (Districts) और प्रशासनिक मंडल (Divisions) हैं?",
    options: [
      { id: "A", textEn: "75 districts and 18 divisions", textHi: "75 जिले और 18 मंडल" },
      { id: "B", textEn: "70 districts and 16 divisions", textHi: "70 जिले और 16 मंडल" },
      { id: "C", textEn: "80 districts and 20 divisions", textHi: "80 जिले और 20 मंडल" },
      { id: "D", textEn: "72 districts and 15 divisions", textHi: "72 जिले और 15 मंडल" }
    ],
    correctAnswer: "A",
    explanation: "Uttar Pradesh comprises 75 administrative districts grouped into 18 divisions."
  },
  {
    id: 44,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where is the National Sugar Institute (NSI) located in Uttar Pradesh?",
    questionHi: "राष्ट्रीय शर्करा संस्थान (National Sugar Institute) कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Kanpur", textHi: "कानपुर (Kanpur)" },
      { id: "B", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "C", textEn: "Meerut", textHi: "मेरठ" },
      { id: "D", textEn: "Bareilly", textHi: "बरेली" }
    ],
    correctAnswer: "A",
    explanation: "The National Sugar Institute is situated in Kalyanpur, Kanpur."
  },
  {
    id: 45,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which country shares an international border with Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश की अंतरराष्ट्रीय सीमा किस एकमात्र पड़ोसी देश से लगती है?",
    options: [
      { id: "A", textEn: "Nepal", textHi: "नेपाल (Nepal)" },
      { id: "B", textEn: "Bangladesh", textHi: "बांग्लादेश" },
      { id: "C", textEn: "Bhutan", textHi: "भूटान" },
      { id: "D", textEn: "China", textHi: "चीन" }
    ],
    correctAnswer: "A",
    explanation: "Seven northern districts of UP (Pilibhit, Lakhimpur Kheri, Bahraich, Shravasti, Balrampur, Siddharthnagar, Maharajganj) share a 551 km border with Nepal."
  },
  {
    id: 46,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Bhadohi district is globally acclaimed for the production of which item?",
    questionHi: "भदोही जनपद वैश्विक स्तर पर किस उत्पाद के निर्माण के लिए विख्यात है?",
    options: [
      { id: "A", textEn: "Hand-knotted Carpets (कालीन)", textHi: "कालीन / कारपेट (Carpet City)" },
      { id: "B", textEn: "Zari Zardozi", textHi: "जरी जरदोजी" },
      { id: "C", textEn: "Sports goods (Meerut)", textHi: "खेल का सामान" },
      { id: "D", textEn: "Silk sarees (Varanasi)", textHi: "रेशमी साड़ियाँ" }
    ],
    correctAnswer: "A",
    explanation: "Bhadohi is recognized as the 'Carpet City of South Asia' and holds a Geographical Indication (GI) tag for hand-knotted carpets."
  },
  {
    id: 47,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Which place in Uttar Pradesh is famous for the confluence of three holy rivers (Ganga, Yamuna, Saraswati)?",
    questionHi: "गंगा, यमुना और अदृश्य सरस्वती के पवित्र संगम (त्रिवेणी) के लिए कौन सा नगर विख्यात है?",
    options: [
      { id: "A", textEn: "Prayagraj", textHi: "प्रयागराज (Prayagraj)" },
      { id: "B", textEn: "Varanasi", textHi: "वाराणसी" },
      { id: "C", textEn: "Ayodhya", textHi: "अयोध्या" },
      { id: "D", textEn: "Haridwar", textHi: "हरिद्वार" }
    ],
    correctAnswer: "A",
    explanation: "Prayagraj is home to the sacred Triveni Sangam, the confluence of rivers Ganga, Yamuna, and mythical Saraswati."
  },
  {
    id: 48,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where is the Indian Institute of Handloom Technology (IIHT) situated in UP?",
    questionHi: "उत्तर प्रदेश में भारतीय हथकरघा प्रौद्योगिकी संस्थान (IIHT) कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Varanasi", textHi: "वाराणसी (Varanasi)" },
      { id: "B", textEn: "Gorakhpur", textHi: "गोरखपुर" },
      { id: "C", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "D", textEn: "Lucknow", textHi: "लखनऊ" }
    ],
    correctAnswer: "A",
    explanation: "IIHT Varanasi provides specialized technical education in handloom and textile technology."
  },
  {
    id: 49,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "What is the official state tree of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश का राजकीय वृक्ष कौन सा है?",
    options: [
      { id: "A", textEn: "Ashoka (अशोक)", textHi: "अशोक (Ashoka)" },
      { id: "B", textEn: "Banyan", textHi: "बरगद" },
      { id: "C", textEn: "Neem", textHi: "नीम" },
      { id: "D", textEn: "Peepal", textHi: "पीपल" }
    ],
    correctAnswer: "A",
    explanation: "The Ashoka tree (Saraca asoca) is the official state tree of Uttar Pradesh."
  },
  {
    id: 50,
    section: "up_gk",
    sectionName: "2. General Knowledge & UP GK",
    questionEn: "Where is the High Court of Judicature for Uttar Pradesh situated?",
    questionHi: "उत्तर प्रदेश का उच्च न्यायालय कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Prayagraj (with bench in Lucknow)", textHi: "प्रयागराज (इलाहाबाद) - खंडपीठ: लखनऊ" },
      { id: "B", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "C", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "D", textEn: "Agra", textHi: "आगरा" }
    ],
    correctAnswer: "A",
    explanation: "The Allahabad High Court is situated in Prayagraj, with a permanent circuit bench at Lucknow."
  },

  // =======================================================
  // SECTION 3: ELEMENTARY MATHS & GRAPHS (Q51 - Q75)
  // =======================================================
  {
    id: 51,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Find the square root: √(0.0009)",
    questionHi: "वर्गमूल ज्ञात कीजिए: √(0.0009)",
    options: [
      { id: "A", textEn: "0.03", textHi: "0.03" },
      { id: "B", textEn: "0.3", textHi: "0.3" },
      { id: "C", textEn: "0.003", textHi: "0.003" },
      { id: "D", textEn: "0.0003", textHi: "0.0003" }
    ],
    correctAnswer: "A",
    explanation: "√(9 / 10000) = 3 / 100 = 0.03."
  },
  {
    id: 52,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "If (x / 5) = (y / 8), then (x + 5) : (y + 8) is equal to:",
    questionHi: "यदि (x / 5) = (y / 8) है, तो (x + 5) : (y + 8) का मान क्या होगा?",
    options: [
      { id: "A", textEn: "5 : 8", textHi: "5 : 8" },
      { id: "B", textEn: "8 : 5", textHi: "8 : 5" },
      { id: "C", textEn: "1 : 1", textHi: "1 : 1" },
      { id: "D", textEn: "13 : 8", textHi: "13 : 8" }
    ],
    correctAnswer: "A",
    explanation: "Let x/5 = y/8 = k. Then x = 5k, y = 8k. (5k + 5)/(8k + 8) = 5(k + 1)/[8(k + 1)] = 5/8."
  },
  {
    id: 53,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "What is 20% of 25% of 300?",
    questionHi: "300 का 25% का 20% क्या होगा?",
    options: [
      { id: "A", textEn: "15", textHi: "15" },
      { id: "B", textEn: "20", textHi: "20" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "12", textHi: "12" }
    ],
    correctAnswer: "A",
    explanation: "(20/100) × (25/100) × 300 = (1/5) × (1/4) × 300 = 300 / 20 = 15."
  },
  {
    id: 54,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Find the average of first 50 natural numbers:",
    questionHi: "प्रथम 50 प्राकृतिक संख्याओं का औसत क्या होगा?",
    options: [
      { id: "A", textEn: "25.5", textHi: "25.5" },
      { id: "B", textEn: "25", textHi: "25" },
      { id: "C", textEn: "26", textHi: "26" },
      { id: "D", textEn: "24.5", textHi: "24.5" }
    ],
    correctAnswer: "A",
    explanation: "Average = (n + 1) / 2 = (50 + 1) / 2 = 51 / 2 = 25.5."
  },
  {
    id: 55,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Simplify: (4³ × 2⁴) / 8² = ?",
    questionHi: "सरल कीजिए: (4³ × 2⁴) / 8² = ?",
    options: [
      { id: "A", textEn: "16", textHi: "16" },
      { id: "B", textEn: "32", textHi: "32" },
      { id: "C", textEn: "8", textHi: "8" },
      { id: "D", textEn: "64", textHi: "64" }
    ],
    correctAnswer: "A",
    explanation: "(2^6 × 2^4) / (2^3)^2 = 2^10 / 2^6 = 2^4 = 16."
  },
  {
    id: 56,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "A student scored 35% marks and failed by 20 marks. The passing marks were 40%. What were the maximum marks?",
    questionHi: "एक छात्र 35% अंक प्राप्त करके 20 अंकों से फेल हो गया। उत्तीर्णांक 40% था। परीक्षा का पूर्णांक क्या था?",
    options: [
      { id: "A", textEn: "400", textHi: "400" },
      { id: "B", textEn: "500", textHi: "500" },
      { id: "C", textEn: "300", textHi: "300" },
      { id: "D", textEn: "600", textHi: "600" }
    ],
    correctAnswer: "A",
    explanation: "Difference = 40% - 35% = 5% of maximum marks = 20. Total marks = (20 / 5) × 100 = 400."
  },
  {
    id: 57,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "If 12 men or 18 women can do a work in 14 days, in how many days will 8 men and 16 women do it?",
    questionHi: "यदि 12 पुरुष या 18 महिलाएं एक काम 14 दिन में कर सकते हैं, तो 8 पुरुष और 16 महिलाएं मिलकर इसे कितने दिन में करेंगे?",
    options: [
      { id: "A", textEn: "9 days", textHi: "9 दिन" },
      { id: "B", textEn: "10 days", textHi: "10 दिन" },
      { id: "C", textEn: "12 days", textHi: "12 दिन" },
      { id: "D", textEn: "8 days", textHi: "8 दिन" }
    ],
    correctAnswer: "A",
    explanation: "12M = 18W => 1M = 1.5W. 8M + 16W = 8(1.5) + 16 = 12 + 16 = 28W. D = (18 × 14) / 28 = 9 days."
  },
  {
    id: 58,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "What is the HCF of (2/3), (4/9), and (8/15)?",
    questionHi: "(2/3), (4/9) और (8/15) का महत्तम समापवर्तक (HCF) क्या है?",
    options: [
      { id: "A", textEn: "2 / 45", textHi: "2 / 45" },
      { id: "B", textEn: "8 / 3", textHi: "8 / 3" },
      { id: "C", textEn: "4 / 45", textHi: "4 / 45" },
      { id: "D", textEn: "2 / 15", textHi: "2 / 15" }
    ],
    correctAnswer: "A",
    explanation: "HCF of fractions = HCF(numerators) / LCM(denominators) = HCF(2,4,8) / LCM(3,9,15) = 2 / 45."
  },
  {
    id: 59,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "A train running at 54 km/h passes a platform 150m long in 18 seconds. What is the length of the train?",
    questionHi: "54 किमी/घंटा की गति से जा रही एक रेलगाड़ी 150 मीटर लंबे प्लेटफॉर्म को 18 सेकंड में पार करती है। रेलगाड़ी की लंबाई क्या है?",
    options: [
      { id: "A", textEn: "120 m", textHi: "120 मीटर" },
      { id: "B", textEn: "100 m", textHi: "100 मीटर" },
      { id: "C", textEn: "140 m", textHi: "140 मीटर" },
      { id: "D", textEn: "110 m", textHi: "110 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 54 × (5/18) = 15 m/s. Total distance in 18s = 15 × 18 = 270m. Length of train = 270 - 150 = 120m."
  },
  {
    id: 60,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "In a pie chart, if the central angle for food expenditure is 72°, what percentage of total expenditure is spent on food?",
    questionHi: "एक पाई चार्ट में यदि भोजन पर व्यय का केंद्रीय कोण 72° है, तो कुल व्यय का कितना प्रतिशत भोजन पर खर्च होता है?",
    options: [
      { id: "A", textEn: "20%", textHi: "20%" },
      { id: "B", textEn: "25%", textHi: "25%" },
      { id: "C", textEn: "15%", textHi: "15%" },
      { id: "D", textEn: "18%", textHi: "18%" }
    ],
    correctAnswer: "A",
    explanation: "Percentage = (72° / 360°) × 100 = (1/5) × 100 = 20%."
  },
  {
    id: 61,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Solve: (0.2 × 0.2 + 0.01) / (0.1 × 0.1 + 0.02) = ?",
    questionHi: "हल कीजिए: (0.2 × 0.2 + 0.01) / (0.1 × 0.1 + 0.02) = ?",
    options: [
      { id: "A", textEn: "1.67 (5/3)", textHi: "5 / 3" },
      { id: "B", textEn: "2", textHi: "2" },
      { id: "C", textEn: "1.5", textHi: "1.5" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "Numerator = 0.04 + 0.01 = 0.05. Denominator = 0.01 + 0.02 = 0.03. Ratio = 0.05 / 0.03 = 5/3."
  },
  {
    id: 62,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "The ratio of angles in a triangle is 2 : 3 : 4. What is the measure of the smallest angle?",
    questionHi: "एक त्रिभुज के कोणों का अनुपात 2 : 3 : 4 है। सबसे छोटे कोण का मान क्या होगा?",
    options: [
      { id: "A", textEn: "40°", textHi: "40°" },
      { id: "B", textEn: "60°", textHi: "60°" },
      { id: "C", textEn: "80°", textHi: "80°" },
      { id: "D", textEn: "30°", textHi: "30°" }
    ],
    correctAnswer: "A",
    explanation: "Sum of angles = 180°. Total parts = 2 + 3 + 4 = 9. Smallest angle = (2/9) × 180° = 40°."
  },
  {
    id: 63,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "A sum of ₹5,000 earns ₹1,000 simple interest in 2 years. What is the annual interest rate?",
    questionHi: "₹5,000 की राशि 2 वर्षों में ₹1,000 साधारण ब्याज देती है। वार्षिक ब्याज दर क्या है?",
    options: [
      { id: "A", textEn: "10%", textHi: "10%" },
      { id: "B", textEn: "12%", textHi: "12%" },
      { id: "C", textEn: "8%", textHi: "8%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "Rate = (1000 × 100) / (5000 × 2) = 100000 / 10000 = 10%."
  },
  {
    id: 64,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "If the cost price of 15 pens is equal to the selling price of 20 pens, what is the loss percent?",
    questionHi: "यदि 15 पेन का क्रय मूल्य 20 पेन के विक्रय मूल्य के बराबर है, तो हानि प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "30%", textHi: "30%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "Loss % = ((20 - 15) / 20) × 100 = (5 / 20) × 100 = 25%."
  },
  {
    id: 65,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Find the value of: (32)^(0.2) + (81)^(0.25)",
    questionHi: "मान ज्ञात कीजिए: (32)^(0.2) + (81)^(0.25)",
    options: [
      { id: "A", textEn: "5", textHi: "5" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "4", textHi: "4" },
      { id: "D", textEn: "7", textHi: "7" }
    ],
    correctAnswer: "A",
    explanation: "32^(1/5) = 2. 81^(1/4) = 3. 2 + 3 = 5."
  },
  {
    id: 66,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "In a bar graph, if year 2020 production is 40 tons and 2021 production is 50 tons, what is the percentage growth?",
    questionHi: "एक दंड आरेख में वर्ष 2020 का उत्पादन 40 टन और वर्ष 2021 का 50 टन है, तो उत्पादन में प्रतिशत वृद्धि क्या है?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "10%", textHi: "10%" },
      { id: "D", textEn: "30%", textHi: "30%" }
    ],
    correctAnswer: "A",
    explanation: "Growth % = ((50 - 40) / 40) × 100 = (10/40) × 100 = 25%."
  },
  {
    id: 67,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "The perimeter of a circle is 44 cm. What is its radius? (π = 22/7)",
    questionHi: "एक वृत्त की परिधि 44 सेमी है। इसकी त्रिज्या क्या होगी? (π = 22/7)",
    options: [
      { id: "A", textEn: "7 cm", textHi: "7 सेमी" },
      { id: "B", textEn: "14 cm", textHi: "14 सेमी" },
      { id: "C", textEn: "3.5 cm", textHi: "3.5 सेमी" },
      { id: "D", textEn: "21 cm", textHi: "21 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "2 × (22/7) × r = 44 => r = 7 cm."
  },
  {
    id: 68,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "The average age of 4 members of a family is 25 years. If the grandfather aged 65 is included, what is the new average?",
    questionHi: "एक परिवार के 4 सदस्यों की औसत आयु 25 वर्ष है। यदि 65 वर्ष के दादाजी को शामिल कर लिया जाए, तो नया औसत क्या होगा?",
    options: [
      { id: "A", textEn: "33 years", textHi: "33 वर्ष" },
      { id: "B", textEn: "30 years", textHi: "30 वर्ष" },
      { id: "C", textEn: "35 years", textHi: "35 वर्ष" },
      { id: "D", textEn: "32 years", textHi: "32 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "Sum of 4 members = 4 × 25 = 100. New sum = 100 + 65 = 165. New average = 165 / 5 = 33 years."
  },
  {
    id: 69,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "What is the compound interest on ₹10,000 at 10% per annum for 2 years compounded annually?",
    questionHi: "₹10,000 पर 10% वार्षिक दर से 2 वर्षों का चक्रवृद्धि ब्याज क्या होगा?",
    options: [
      { id: "A", textEn: "₹2,100", textHi: "₹2,100" },
      { id: "B", textEn: "₹2,000", textHi: "₹2,000" },
      { id: "C", textEn: "₹2,200", textHi: "₹2,200" },
      { id: "D", textEn: "₹1,900", textHi: "₹1,900" }
    ],
    correctAnswer: "A",
    explanation: "A = 10000 × (1.10)² = 10000 × 1.21 = ₹12,100. CI = 12100 - 10000 = ₹2,100."
  },
  {
    id: 70,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "A boat goes 15 km/h in still water. If the stream flows at 3 km/h, what is the upstream speed?",
    questionHi: "शांत जल में एक नाव की चाल 15 किमी/घंटा है। यदि धारा की चाल 3 किमी/घंटा है, तो धारा के प्रतिकूल नाव की चाल क्या होगी?",
    options: [
      { id: "A", textEn: "12 km/h", textHi: "12 किमी/घंटा" },
      { id: "B", textEn: "18 km/h", textHi: "18 किमी/घंटा" },
      { id: "C", textEn: "10 km/h", textHi: "10 किमी/घंटा" },
      { id: "D", textEn: "14 km/h", textHi: "14 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Upstream speed = Speed in still water - Stream speed = 15 - 3 = 12 km/h."
  },
  {
    id: 71,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "Find the unit digit of: (2153)^167",
    questionHi: "(2153)^167 का इकाई अंक क्या होगा?",
    options: [
      { id: "A", textEn: "7", textHi: "7" },
      { id: "B", textEn: "3", textHi: "3" },
      { id: "C", textEn: "9", textHi: "9" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "Unit digit is 3. Cyclicity of 3 is 4 (3, 9, 7, 1). 167 mod 4 = 3. 3³ = 27, so unit digit is 7."
  },
  {
    id: 72,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "What is the single discount equivalent to two successive discounts of 15% and 10%?",
    questionHi: "15% और 10% के दो क्रमिक बट्टे के समतुल्य एकल बट्टा क्या होगा?",
    options: [
      { id: "A", textEn: "23.5%", textHi: "23.5%" },
      { id: "B", textEn: "25%", textHi: "25%" },
      { id: "C", textEn: "22%", textHi: "22%" },
      { id: "D", textEn: "24%", textHi: "24%" }
    ],
    correctAnswer: "A",
    explanation: "Equivalent discount = 15 + 10 - (15 × 10)/100 = 25 - 1.5 = 23.5%."
  },
  {
    id: 73,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "The ratio of two numbers is 5 : 7 and their difference is 14. What is the larger number?",
    questionHi: "दो संख्याओं का अनुपात 5 : 7 है और उनका अंतर 14 है। बड़ी संख्या क्या है?",
    options: [
      { id: "A", textEn: "49", textHi: "49" },
      { id: "B", textEn: "35", textHi: "35" },
      { id: "C", textEn: "42", textHi: "42" },
      { id: "D", textEn: "56", textHi: "56" }
    ],
    correctAnswer: "A",
    explanation: "7x - 5x = 2x = 14 => x = 7. Larger number = 7 × 7 = 49."
  },
  {
    id: 74,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "If √15 = 3.88, then what is the approximate value of √(5/3)?",
    questionHi: "यदि √15 = 3.88 है, तो √(5/3) का लगभग मान क्या है?",
    options: [
      { id: "A", textEn: "1.29", textHi: "1.29" },
      { id: "B", textEn: "1.41", textHi: "1.41" },
      { id: "C", textEn: "1.63", textHi: "1.63" },
      { id: "D", textEn: "1.15", textHi: "1.15" }
    ],
    correctAnswer: "A",
    explanation: "√(5/3) = √(15/9) = √15 / 3 = 3.88 / 3 ≈ 1.293."
  },
  {
    id: 75,
    section: "up_math",
    sectionName: "3. Elementary Mathematics & Graphs",
    questionEn: "The length and breadth of a room are 8m and 6m. What is the length of the longest rod that can be placed on its floor?",
    questionHi: "एक कमरे की लंबाई और चौड़ाई क्रमशः 8 मीटर और 6 मीटर हैं। इसके फर्श पर रखी जा सकने वाली सबसे लंबी छड़ की लंबाई क्या होगी?",
    options: [
      { id: "A", textEn: "10 m", textHi: "10 मीटर" },
      { id: "B", textEn: "12 m", textHi: "12 मीटर" },
      { id: "C", textEn: "14 m", textHi: "14 मीटर" },
      { id: "D", textEn: "9 m", textHi: "9 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Diagonal of floor = √(8² + 6²) = √(64 + 36) = √100 = 10m."
  },

  // =======================================================
  // SECTION 4: LOGICAL REASONING (Q76 - Q100)
  // =======================================================
  {
    id: 76,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Select the related pair: Pen : Write :: Knife : ?",
    questionHi: "संबंधित युग्म चुनिए: कलम : लिखना :: चाकू : ?",
    options: [
      { id: "A", textEn: "Cut", textHi: "काटना (Cut)" },
      { id: "B", textEn: "Sharp", textHi: "धारदार" },
      { id: "C", textEn: "Vegetable", textHi: "सब्जी" },
      { id: "D", textEn: "Steel", textHi: "इस्पात" }
    ],
    correctAnswer: "A",
    explanation: "A pen is used to write, and a knife is used to cut."
  },
  {
    id: 77,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "If 'MONKEY' is coded as 'XDJMNL', how is 'TIGER' coded?",
    questionHi: "यदि 'MONKEY' को 'XDJMNL' लिखा जाता है, तो 'TIGER' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "QDFHS", textHi: "QDFHS" },
      { id: "B", textEn: "SDFHS", textHi: "SDFHS" },
      { id: "C", textEn: "SHFDQ", textHi: "SHFDQ" },
      { id: "D", textEn: "UJHFS", textHi: "UJHFS" }
    ],
    correctAnswer: "A",
    explanation: "Reverse letter minus 1: Last letter Y-1=X, E-1=D, K-1=J, N-1=M, O-1=N, M-1=L. For TIGER: R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S => QDFHS."
  },
  {
    id: 78,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "In a code language: 123 means 'hot filtered coffee', 356 means 'very hot day', and 589 means 'day and night'. Which numeral stands for 'very'?",
    questionHi: "एक कूट भाषा में: 123 का अर्थ 'hot filtered coffee', 356 का अर्थ 'very hot day' और 589 का अर्थ 'day and night' है। 'very' के लिए कौन सा अंक है?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "3", textHi: "3" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "8", textHi: "8" }
    ],
    correctAnswer: "A",
    explanation: "In (123) and (356), common word is 'hot' and digit is 3 => hot = 3. In (356) and (589), common word is 'day' and digit is 5 => day = 5. In '356', remaining word is 'very' and remaining digit is 6."
  },
  {
    id: 79,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Pointing to a man, a girl says, 'He is the son of the only brother of my mother.' How is that man related to the girl?",
    questionHi: "एक व्यक्ति की ओर इशारा करते हुए एक लड़की कहती है, 'वह मेरी माँ के इकलौते भाई का बेटा है।' वह व्यक्ति लड़की से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Cousin (Maternal uncle's son)", textHi: "ममेरा भाई (Cousin)" },
      { id: "B", textEn: "Brother", textHi: "सगा भाई" },
      { id: "C", textEn: "Nephew", textHi: "भांजा" },
      { id: "D", textEn: "Uncle", textHi: "मामा" }
    ],
    correctAnswer: "A",
    explanation: "Mother's only brother is the maternal uncle (Mama). The son of Mama is her cousin (maternal brother)."
  },
  {
    id: 80,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Complete the series: 1, 4, 9, 16, 25, 36, ?",
    questionHi: "श्रृंखला पूर्ण कीजिए: 1, 4, 9, 16, 25, 36, ?",
    options: [
      { id: "A", textEn: "49", textHi: "49 (7²)" },
      { id: "B", textEn: "48", textHi: "48" },
      { id: "C", textEn: "50", textHi: "50" },
      { id: "D", textEn: "64", textHi: "64" }
    ],
    correctAnswer: "A",
    explanation: "Squares of consecutive natural numbers: 1², 2², 3², 4², 5², 6², 7² = 49."
  },
  {
    id: 81,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Find the odd word: Lucknow, Bhopal, Patna, Kanpur.",
    questionHi: "विषम शब्द चुनिए: लखनऊ, भोपाल, पटना, कानपुर।",
    options: [
      { id: "A", textEn: "Kanpur (Not a state capital)", textHi: "कानपुर (राजधानी नहीं है)" },
      { id: "B", textEn: "Lucknow", textHi: "लखनऊ" },
      { id: "C", textEn: "Bhopal", textHi: "भोपाल" },
      { id: "D", textEn: "Patna", textHi: "पटना" }
    ],
    correctAnswer: "A",
    explanation: "Lucknow (UP), Bhopal (MP), and Patna (Bihar) are state capitals. Kanpur is an industrial city, not a capital."
  },
  {
    id: 82,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Raman ranks 16th from the top and 49th from the bottom in a class. How many students are there in the class?",
    questionHi: "एक कक्षा में रमन का स्थान ऊपर से 16वां तथा नीचे से 49वां है। कक्षा में कुल कितने छात्र हैं?",
    options: [
      { id: "A", textEn: "64", textHi: "64" },
      { id: "B", textEn: "65", textHi: "65" },
      { id: "C", textEn: "66", textHi: "66" },
      { id: "D", textEn: "63", textHi: "63" }
    ],
    correctAnswer: "A",
    explanation: "Total = Top + Bottom - 1 = 16 + 49 - 1 = 64."
  },
  {
    id: 83,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Statements: All mangoes are golden. No golden things are cheap. Conclusion: I. All mangoes are cheap. II. Golden mangoes are not cheap.",
    questionHi: "कथन: सभी आम सुनहरे हैं। कोई सुनहरी वस्तु सस्ती नहीं है। निष्कर्ष: I. सभी आम सस्ते हैं। II. सुनहरे आम सस्ते नहीं हैं।",
    options: [
      { id: "A", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "B", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "C", textEn: "Both follow", textHi: "दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Since All Mangoes ⊆ Golden and Golden ∩ Cheap = ∅, no mango can be cheap. Hence conclusion II follows."
  },
  {
    id: 84,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Find the missing number: 3, 5, 9, 17, 33, ?",
    questionHi: "लुप्त संख्या ज्ञात कीजिए: 3, 5, 9, 17, 33, ?",
    options: [
      { id: "A", textEn: "65", textHi: "65" },
      { id: "B", textEn: "60", textHi: "60" },
      { id: "C", textEn: "64", textHi: "64" },
      { id: "D", textEn: "66", textHi: "66" }
    ],
    correctAnswer: "A",
    explanation: "Differences double each step: +2, +4, +8, +16, +32 => 33 + 32 = 65 (or n × 2 - 1)."
  },
  {
    id: 85,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "A man travels 4 km towards East, turns left and travels 3 km. What is the shortest distance from his starting point?",
    questionHi: "एक व्यक्ति पूर्व की ओर 4 किमी चलता है, फिर बाएं मुड़कर 3 किमी चलता है। प्रारंभिक बिंदु से उसकी न्यूनतम दूरी क्या है?",
    options: [
      { id: "A", textEn: "5 km", textHi: "5 किमी (पाइथागोरस प्रमेय)" },
      { id: "B", textEn: "7 km", textHi: "7 किमी" },
      { id: "C", textEn: "6 km", textHi: "6 किमी" },
      { id: "D", textEn: "4 km", textHi: "4 किमी" }
    ],
    correctAnswer: "A",
    explanation: "Distance = √(4² + 3²) = √(16 + 9) = √25 = 5 km."
  },
  {
    id: 86,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "What will come in place of (?): A, D, I, P, ?",
    questionHi: "प्रश्नवाचक चिन्ह (?) के स्थान पर क्या आएगा: A, D, I, P, ?",
    options: [
      { id: "A", textEn: "Y", textHi: "Y" },
      { id: "B", textEn: "Z", textHi: "Z" },
      { id: "C", textEn: "X", textHi: "X" },
      { id: "D", textEn: "W", textHi: "W" }
    ],
    correctAnswer: "A",
    explanation: "Positional values are squares: A=1=1², D=4=2², I=9=3², P=16=4², next is 5²=25 which is Y."
  },
  {
    id: 87,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "If 15th August 2023 was Tuesday, what day of the week was 15th August 2024?",
    questionHi: "यदि 15 अगस्त 2023 को मंगलवार था, तो 15 अगस्त 2024 को सप्ताह का कौन सा दिन होगा?",
    options: [
      { id: "A", textEn: "Thursday", textHi: "गुरुवार (Thursday)" },
      { id: "B", textEn: "Wednesday", textHi: "बुधवार" },
      { id: "C", textEn: "Friday", textHi: "शुक्रवार" },
      { id: "D", textEn: "Tuesday", textHi: "मंगलवार" }
    ],
    correctAnswer: "A",
    explanation: "2024 is a leap year and February 2024 (29 days) falls between these dates, adding 2 odd days: Tuesday + 2 days = Thursday."
  },
  {
    id: 88,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Which of the following words cannot be formed from the letters of 'KNOWLEDGE'?",
    questionHi: "शब्द 'KNOWLEDGE' के अक्षरों से कौन सा शब्द नहीं बनाया जा सकता है?",
    options: [
      { id: "A", textEn: "GOLD", textHi: "GOLD" },
      { id: "B", textEn: "LEDGE", textHi: "LEDGE" },
      { id: "C", textEn: "KNOW", textHi: "KNOW" },
      { id: "D", textEn: "LEMON", textHi: "LEMON" }
    ],
    correctAnswer: "D",
    explanation: "'LEMON' contains the letter 'M', which does not exist in 'KNOWLEDGE'."
  },
  {
    id: 89,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "In a certain code, 'ROAD' is written as 'URDG'. How is 'SWAN' written?",
    questionHi: "एक कूट भाषा में 'ROAD' को 'URDG' लिखा जाता है। उसी भाषा में 'SWAN' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "VZDQ", textHi: "VZDQ" },
      { id: "B", textEn: "VXDO", textHi: "VXDO" },
      { id: "C", textEn: "VZDP", textHi: "VZDP" },
      { id: "D", textEn: "UXDQ", textHi: "UXDQ" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is +3: S(+3)=V, W(+3)=Z, A(+3)=D, N(+3)=Q => VZDQ."
  },
  {
    id: 90,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Find the odd number pair: 4:16, 6:36, 8:64, 9:80.",
    questionHi: "विषम संख्या युग्म ज्ञात कीजिए: 4:16, 6:36, 8:64, 9:80.",
    options: [
      { id: "A", textEn: "9:80", textHi: "9:80 (9² = 81 होना चाहिए)" },
      { id: "B", textEn: "4:16", textHi: "4:16" },
      { id: "C", textEn: "6:36", textHi: "6:36" },
      { id: "D", textEn: "8:64", textHi: "8:64" }
    ],
    correctAnswer: "A",
    explanation: "Second number is the square of first: 4²=16, 6²=36, 8²=64, but 9²=81 (not 80)."
  },
  {
    id: 91,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "What is the angle between hour and minute hands of a clock at 6:00?",
    questionHi: "6:00 बजे घड़ी की दोनों सुइयों के मध्य का कोण कितना होता है?",
    options: [
      { id: "A", textEn: "180° (Straight line)", textHi: "180° (सरल रेखा)" },
      { id: "B", textEn: "90°", textHi: "90°" },
      { id: "C", textEn: "120°", textHi: "120°" },
      { id: "D", textEn: "150°", textHi: "150°" }
    ],
    correctAnswer: "A",
    explanation: "At 6:00, the minute hand is at 12 and the hour hand is at 6, forming a straight line of 180°."
  },
  {
    id: 92,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "If 'A' is father of 'B', 'B' is sister of 'C', and 'C' is son of 'D', what is the relation of 'D' to 'A'?",
    questionHi: "यदि 'A', 'B' का पिता है, 'B', 'C' की बहन है और 'C', 'D' का पुत्र है, तो 'D' का 'A' से क्या संबंध है?",
    options: [
      { id: "A", textEn: "Wife", textHi: "पत्नी (Wife)" },
      { id: "B", textEn: "Sister", textHi: "बहन" },
      { id: "C", textEn: "Daughter", textHi: "पुत्री" },
      { id: "D", textEn: "Mother", textHi: "माँ" }
    ],
    correctAnswer: "A",
    explanation: "B and C are children of father A. Since C is also son of D, D must be the mother and wife of A."
  },
  {
    id: 93,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Arrange in logical sequence: 1. Application, 2. Selection, 3. Interview, 4. Advertisement, 5. Appointment.",
    questionHi: "तार्किक क्रम में व्यवस्थित कीजिए: 1. आवेदन, 2. चयन, 3. साक्षात्कार, 4. विज्ञापन, 5. नियुक्ति।",
    options: [
      { id: "A", textEn: "4, 1, 3, 2, 5", textHi: "4, 1, 3, 2, 5" },
      { id: "B", textEn: "1, 4, 3, 2, 5", textHi: "1, 4, 3, 2, 5" },
      { id: "C", textEn: "4, 1, 2, 3, 5", textHi: "4, 1, 2, 3, 5" },
      { id: "D", textEn: "1, 3, 4, 2, 5", textHi: "1, 3, 4, 2, 5" }
    ],
    correctAnswer: "A",
    explanation: "First Advertisement (4), then Application (1), then Interview (3), then Selection (2), and finally Appointment (5)."
  },
  {
    id: 94,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "In a class of 45 students, Amit's rank is 20th from the top. What is his rank from the bottom?",
    questionHi: "45 छात्रों की कक्षा में अमित का स्थान ऊपर से 20वां है। नीचे से उसका स्थान क्या है?",
    options: [
      { id: "A", textEn: "26th", textHi: "26वां" },
      { id: "B", textEn: "25th", textHi: "25वां" },
      { id: "C", textEn: "27th", textHi: "27वां" },
      { id: "D", textEn: "24th", textHi: "24वां" }
    ],
    correctAnswer: "A",
    explanation: "Rank from bottom = 45 - 20 + 1 = 26th."
  },
  {
    id: 95,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Find the missing term: B2D, D4F, F6H, ?",
    questionHi: "लुप्त पद ज्ञात कीजिए: B2D, D4F, F6H, ?",
    options: [
      { id: "A", textEn: "H8J", textHi: "H8J" },
      { id: "B", textEn: "H7J", textHi: "H7J" },
      { id: "C", textEn: "G8I", textHi: "G8I" },
      { id: "D", textEn: "I8K", textHi: "I8K" }
    ],
    correctAnswer: "A",
    explanation: "First letter +2 (B, D, F, H). Number +2 (2, 4, 6, 8). Last letter +2 (D, F, H, J) => H8J."
  },
  {
    id: 96,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Statements: All flowers are trees. Some trees are houses. Conclusion: I. Some flowers are houses. II. Some houses are trees.",
    questionHi: "कथन: सभी फूल पेड़ हैं। कुछ पेड़ मकान हैं। निष्कर्ष: I. कुछ फूल मकान हैं। II. कुछ मकान पेड़ हैं।",
    options: [
      { id: "A", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "B", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "C", textEn: "Both follow", textHi: "दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Since Some Trees are Houses, its converse 'Some Houses are Trees' is definitely true. There is no definite relation between flowers and houses."
  },
  {
    id: 97,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "If 'P' denotes '÷', 'Q' denotes '×', 'R' denotes '+', and 'S' denotes '-', what is the value of: 18 Q 12 P 4 R 5 S 6?",
    questionHi: "यदि 'P' का अर्थ '÷', 'Q' का अर्थ '×', 'R' का अर्थ '+' और 'S' का अर्थ '-' है, तो 18 Q 12 P 4 R 5 S 6 का मान क्या होगा?",
    options: [
      { id: "A", textEn: "53", textHi: "53" },
      { id: "B", textEn: "55", textHi: "55" },
      { id: "C", textEn: "50", textHi: "50" },
      { id: "D", textEn: "48", textHi: "48" }
    ],
    correctAnswer: "A",
    explanation: "18 × (12 ÷ 4) + 5 - 6 = 18 × 3 + 5 - 6 = 54 + 5 - 6 = 53."
  },
  {
    id: 98,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Which of the following represents the relation between: Fruits, Apples, Oranges?",
    questionHi: "फल, सेब और संतरे के मध्य संबंध को कौन सा वेन आरेख सही दर्शाता है?",
    options: [
      { id: "A", textEn: "Two separate circles inside one big circle", textHi: "एक बड़े वृत्त के अंदर दो अलग-अलग वृत्त" },
      { id: "B", textEn: "Three intersecting circles", textHi: "तीन प्रतिच्छेदी वृत्त" },
      { id: "C", textEn: "Three separate circles", textHi: "तीन अलग वृत्त" },
      { id: "D", textEn: "Concentric circles", textHi: "सकेंद्री वृत्त" }
    ],
    correctAnswer: "A",
    explanation: "Apples and Oranges are two disjoint kinds of Fruits."
  },
  {
    id: 99,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "A clock gains 5 minutes every hour. If it is set correctly at 12:00 noon, what time will it show at 6:00 PM on the same day?",
    questionHi: "एक घड़ी प्रति घंटे 5 मिनट तेज हो जाती है। यदि इसे दोपहर 12:00 बजे सही मिलाया गया, तो शाम 6:00 बजे यह क्या समय दिखाएगी?",
    options: [
      { id: "A", textEn: "6:30 PM", textHi: "6:30 PM" },
      { id: "B", textEn: "6:25 PM", textHi: "6:25 PM" },
      { id: "C", textEn: "6:20 PM", textHi: "6:20 PM" },
      { id: "D", textEn: "6:35 PM", textHi: "6:35 PM" }
    ],
    correctAnswer: "A",
    explanation: "In 6 hours, it gains 6 × 5 = 30 minutes. The time shown will be 6:30 PM."
  },
  {
    id: 100,
    section: "up_reasoning",
    sectionName: "4. Logical Reasoning",
    questionEn: "Complete the letter series: _bc_ca_aba_c_ca",
    questionHi: "अक्षर श्रृंखला पूर्ण कीजिए: a b c / a b c / a b c / a b c",
    options: [
      { id: "A", textEn: "a, b, c, b, b", textHi: "a, b, c, b, b" },
      { id: "B", textEn: "a, a, b, c, c", textHi: "a, a, b, c, c" },
      { id: "C", textEn: "b, a, c, a, b", textHi: "b, a, c, a, b" },
      { id: "D", textEn: "c, b, a, b, a", textHi: "c, b, a, b, a" }
    ],
    correctAnswer: "A",
    explanation: "The recurring repeating pattern is 'abc' repeated continuously throughout the sequence."
  }
];
