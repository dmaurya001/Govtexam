/**
 * GovtExamHub — State Government Examination (Patwari / Lekhpal / Forest Guard Mock)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real State Exam Marking: +1.00 for Correct Answer, -0.25 for Incorrect Answer (1/4th Negative Marking)
 */

const STATE_EXAM_CONFIG = {
  id: "state",
  title: "State Government Examination (Patwari / Lekhpal / Forest Guard Mock)",
  shortName: "State Exams",
  icon: "🗺️",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.25, // Real 1/4th Negative Marking
  sections: [
    { id: "state_hindi", name: "1. General Hindi / सामान्य हिंदी", start: 1, end: 25, total: 25 },
    { id: "state_rural", name: "2. Rural Development & Society (ग्राम्य विकास)", start: 26, end: 50, total: 25 },
    { id: "state_gs", name: "3. General Studies & State Administration", start: 51, end: 75, total: 25 },
    { id: "state_math", name: "4. Mathematics & Land Arithmetic", start: 76, end: 100, total: 25 }
  ]
};

const STATE_QUESTIONS_DATA = [
  // =========================================================================
  // SECTION 1: GENERAL HINDI / सामान्य हिंदी (Q1 - Q25)
  // =========================================================================
  {
    id: 1,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the synonym of 'पृथ्वी' (Earth)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'पृथ्वी' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "वसुंधरा / अवनी / मही", textHi: "वसुंधरा / अवनी / मही" },
      { id: "B", textEn: "अंबर", textHi: "अंबर" },
      { id: "C", textEn: "पयोद", textHi: "पयोद" },
      { id: "D", textEn: "तटिनी", textHi: "तटिनी" }
    ],
    correctAnswer: "A",
    explanation: "पृथ्वी के पर्यायवाची: वसुंधरा, अवनी, मही, अचला, धरा, भूमि, वसुधा हैं।"
  },
  {
    id: 2,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is संधि विच्छेद of 'सदैव'?",
    questionHi: "'सदैव' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "सदा + एव (वृद्धि स्वर संधि)", textHi: "सदा + एव (वृद्धि संधि)" },
      { id: "B", textEn: "सद + ऐव", textHi: "सद + ऐव" },
      { id: "C", textEn: "सदा + ऐव", textHi: "सदा + ऐव" },
      { id: "D", textEn: "सदे + व", textHi: "सदे + व" }
    ],
    correctAnswer: "A",
    explanation: "आ + ए = ऐ (वृद्धि स्वर संधि), अतः सदा + एव = सदैव।"
  },
  {
    id: 3,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is समास in 'तिरंगा'?",
    questionHi: "'तिरंगा' (तीन रंगों का समाहार / भारत का राष्ट्रीय ध्वज) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "द्विगु समास / बहुव्रीहि समास", textHi: "द्विगु समास (या विशेष अर्थ में बहुव्रीहि)" },
      { id: "B", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "C", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" },
      { id: "D", textEn: "अव्ययीभाव समास", textHi: "अव्ययीभाव समास" }
    ],
    correctAnswer: "A",
    explanation: "संख्यावाचक पद होने से द्विगु तथा राष्ट्रीय ध्वज का विशेष अर्थ देने पर बहुव्रीहि समास माना जाता है।"
  },
  {
    id: 4,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the विलोम of 'संकीर्ण' (Narrow)?",
    questionHi: "'संकीर्ण' शब्द का सही विलोम क्या होगा?",
    options: [
      { id: "A", textEn: "विस्तीर्ण (Vistirna)", textHi: "विस्तीर्ण" },
      { id: "B", textEn: "संकुचित", textHi: "संकुचित" },
      { id: "C", textEn: "विस्तार", textHi: "विस्तार" },
      { id: "D", textEn: "उदार", textHi: "उदार" }
    ],
    correctAnswer: "A",
    explanation: "'संकीर्ण' (तंग/छोटा) का विलोम शब्द 'विस्तीर्ण' (फैला हुआ/व्यापक) होता है।"
  },
  {
    id: 5,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "One-word substitution for: 'पर्वत के नीचे तलहटी की भूमि'?",
    questionHi: "'पर्वत के नीचे तलहटी की समतल भूमि' के लिए एक शब्द क्या है?",
    options: [
      { id: "A", textEn: "उपत्यका (Upatyaka)", textHi: "उपत्यका" },
      { id: "B", textEn: "अधित्यका (ऊपर की समतल भूमि)", textHi: "अधित्यका" },
      { id: "C", textEn: "घाटी", textHi: "घाटी" },
      { id: "D", textEn: "मैदान", textHi: "मैदान" }
    ],
    correctAnswer: "A",
    explanation: "पर्वत की तलहटी की भूमि को 'उपत्यका' तथा पर्वत के ऊपर की समतल भूमि को 'अधित्यका' कहते हैं।"
  },
  {
    id: 6,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the idiom: 'कान भरना'?",
    questionHi: "मुहावरे 'कान भरना' का सही अर्थ क्या है?",
    options: [
      { id: "A", textEn: "चुगली करना / किसी के विरुद्ध बहकाना", textHi: "चुगली करना / किसी के विरुद्ध बहकाना" },
      { id: "B", textEn: "कान साफ करना", textHi: "कान साफ करना" },
      { id: "C", textEn: "कम सुनना", textHi: "कम सुनना" },
      { id: "D", textEn: "ध्यान से सुनना", textHi: "ध्यान से सुनना" }
    ],
    correctAnswer: "A",
    explanation: "'कान भरना' का अर्थ पीठ पीछे किसी के विरुद्ध चुगली करना या भड़काना होता है।"
  },
  {
    id: 7,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the तत्सम form of 'खेत' (Field)?",
    questionHi: "'खेत' (तद्भव) का सही तत्सम रूप क्या है?",
    options: [
      { id: "A", textEn: "क्षेत्र (Kshetra)", textHi: "क्षेत्र" },
      { id: "B", textEn: "भूमि", textHi: "भूमि" },
      { id: "C", textEn: "क्षेत्रीय", textHi: "क्षेत्रीय" },
      { id: "D", textEn: "खनन", textHi: "खनन" }
    ],
    correctAnswer: "A",
    explanation: "'खेत' तद्भव शब्द है जिसका संस्कृत मूल तत्सम रूप 'क्षेत्र' होता है।"
  },
  {
    id: 8,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "Which of the following is शुद्ध वाक्य?",
    questionHi: "निम्नलिखित में से शुद्ध वाक्य का चयन कीजिए:",
    options: [
      { id: "A", textEn: "साहित्य और जीवन का अभिन्न संबंध है।", textHi: "साहित्य और जीवन का अभिन्न संबंध है।" },
      { id: "B", textEn: "साहित्य और जीवन का घोर संबंध है।", textHi: "साहित्य और जीवन का घोर संबंध है।" },
      { id: "C", textEn: "वहाँ भारी भरकम भीड़ जमा थी।", textHi: "वहाँ भारी भरकम भीड़ जमा थी।" },
      { id: "D", textEn: "उसने एक मोतियों का हार खरीदा।", textHi: "उसने एक मोतियों का हार खरीदा।" }
    ],
    correctAnswer: "A",
    explanation: "संबंध के लिए 'अभिन्न' या 'घनिष्ठ' प्रयुक्त होता है, 'घोर' शब्द का प्रयोग अनुचित है।"
  },
  {
    id: 9,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is संधि विच्छेद of 'दिगम्बर'?",
    questionHi: "'दिगम्बर' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "दिक् + अम्बर (व्यंजन संधि)", textHi: "दिक् + अम्बर (व्यंजन संधि)" },
      { id: "B", textEn: "दिग + अम्बर", textHi: "दिग + अम्बर" },
      { id: "C", textEn: "दिका + अम्बर", textHi: "दिका + अम्बर" },
      { id: "D", textEn: "दिग् + म्बर", textHi: "दिग् + म्बर" }
    ],
    correctAnswer: "A",
    explanation: "वर्ग के प्रथम वर्ण (क्) के बाद स्वर आने पर वह अपने वर्ग के तृतीय वर्ण (ग्) में बदल जाता है (दिक् + अम्बर = दिगम्बर)।"
  },
  {
    id: 10,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is समास in 'दशानन'?",
    questionHi: "'दशानन' (दस हैं आनन जिसके अर्थात् रावण) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "बहुव्रीहि समास", textHi: "बहुव्रीहि समास" },
      { id: "B", textEn: "द्विगु समास", textHi: "द्विगु समास" },
      { id: "C", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "D", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" }
    ],
    correctAnswer: "A",
    explanation: "यद्यपि पहला पद संख्यावाची है, परंतु यह रावण के विशेष अर्थ में रूढ़ हो चुका है, अतः बहुव्रीहि समास है।"
  },
  {
    id: 11,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the विलोम of 'मूक' (Mute)?",
    questionHi: "'मूक' शब्द का सही विलोम क्या होगा?",
    options: [
      { id: "A", textEn: "वाचाल (Vachal)", textHi: "वाचाल" },
      { id: "B", textEn: "गूंगा", textHi: "गूंगा" },
      { id: "C", textEn: "शांत", textHi: "शांत" },
      { id: "D", textEn: "मुखर", textHi: "मुखर" }
    ],
    correctAnswer: "A",
    explanation: "'मूक' (जो बोल न सके) का विलोम 'वाचाल' (जो बहुत अधिक बोलता हो) होता है।"
  },
  {
    id: 12,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is synonym of 'जंगल' (Forest)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'जंगल' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "कानन / अरण्य / विपिन", textHi: "कानन / अरण्य / विपिन" },
      { id: "B", textEn: "उपवन", textHi: "उपवन (बगीचा)" },
      { id: "C", textEn: "पादप", textHi: "पादप" },
      { id: "D", textEn: "विटप", textHi: "विटप" }
    ],
    correctAnswer: "A",
    explanation: "जंगल के पर्यायवाची: कानन, अरण्य, विपिन, वन, कांतार हैं।"
  },
  {
    id: 13,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the कारक in: 'हे राम! तुम कहाँ हो?'",
    questionHi: "'हे राम! तुम कहाँ हो?' में कौन सा कारक है?",
    options: [
      { id: "A", textEn: "संबोधन कारक", textHi: "संबोधन कारक (हे! अरे! अजी!)" },
      { id: "B", textEn: "कर्ता कारक", textHi: "कर्ता कारक" },
      { id: "C", textEn: "अपादान कारक", textHi: "अपादान कारक" },
      { id: "D", textEn: "संबंध कारक", textHi: "संबंध कारक" }
    ],
    correctAnswer: "A",
    explanation: "संज्ञा के जिस रूप से किसी को पुकारने, बुलाने या सचेत करने का बोध हो, उसे संबोधन कारक कहते हैं।"
  },
  {
    id: 14,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is one-word substitution for: 'जो सब में व्याप्त हो'?",
    questionHi: "'जो सब में व्याप्त हो' वाक्यांश के लिए एक शब्द क्या होगा?",
    options: [
      { id: "A", textEn: "सर्वव्यापी (Omnipresent)", textHi: "सर्वव्यापी" },
      { id: "B", textEn: "सर्वज्ञ", textHi: "सर्वज्ञ" },
      { id: "C", textEn: "सर्वशक्तिमान", textHi: "सर्वशक्तिमान" },
      { id: "D", textEn: "सर्वदर्शी", textHi: "सर्वदर्शी" }
    ],
    correctAnswer: "A",
    explanation: "सब जगह विद्यमान या व्याप्त होने वाले को 'सर्वव्यापी' कहते हैं।"
  },
  {
    id: 15,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the proverb: 'काला अक्षर भैंस बराबर'?",
    questionHi: "कहावत 'काला अक्षर भैंस बराबर' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "बिल्कुल अनपढ़ होना", textHi: "बिल्कुल अनपढ़ / निरक्षर होना" },
      { id: "B", textEn: "काली स्याही से लिखना", textHi: "काली स्याही से लिखना" },
      { id: "C", textEn: "भैंस चराना", textHi: "भैंस चराना" },
      { id: "D", textEn: "अक्षर काले होना", textHi: "अक्षर काले होना" }
    ],
    correctAnswer: "A",
    explanation: "'काला अक्षर भैंस बराबर' लोकोक्ति का अर्थ पूर्णतः निरक्षर होना है।"
  },
  {
    id: 16,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the तत्सम form of 'घोड़ा' (Horse)?",
    questionHi: "'घोड़ा' का सही तत्सम रूप क्या है?",
    options: [
      { id: "A", textEn: "घोटक (Ghotak)", textHi: "घोटक" },
      { id: "B", textEn: "अश्व", textHi: "अश्व" },
      { id: "C", textEn: "हय", textHi: "हय" },
      { id: "D", textEn: "तुरंग", textHi: "तुरंग" }
    ],
    correctAnswer: "A",
    explanation: "'घोड़ा' तद्भव शब्द का तत्सम रूप 'घोटक' है।"
  },
  {
    id: 17,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is संधि विच्छेद of 'निराशा'?",
    questionHi: "'निराशा' का सही विसर्ग संधि विच्छेद क्या है?",
    options: [
      { id: "A", textEn: "निः + आशा (विसर्ग संधि)", textHi: "निः + आशा (विसर्ग संधि)" },
      { id: "B", textEn: "निर + आशा", textHi: "निर + आशा" },
      { id: "C", textEn: "निरा + आशा", textHi: "निरा + आशा" },
      { id: "D", textEn: "नि + आशा", textHi: "नि + आशा" }
    ],
    correctAnswer: "A",
    explanation: "विसर्ग संधि के नियमानुसार विसर्ग के स्थान पर 'र्' हो जाता है (निः + आशा = निराशा)।"
  },
  {
    id: 18,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is शुद्ध वर्तनी of the word?",
    questionHi: "निम्न में से शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "कवयित्री", textHi: "कवयित्री" },
      { id: "B", textEn: "कवियित्री", textHi: "कवियित्री" },
      { id: "C", textEn: "कवयत्री", textHi: "कवयत्री" },
      { id: "D", textEn: "कविइत्री", textHi: "कविइत्री" }
    ],
    correctAnswer: "A",
    explanation: "'कवि' का शुद्ध स्त्रीलिंग और शुद्ध वर्तनी 'कवयित्री' होती है।"
  },
  {
    id: 19,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is समास in 'यथाक्रम'?",
    questionHi: "'यथाक्रम' (क्रम के अनुसार) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "अव्ययीभाव समास", textHi: "अव्ययीभाव समास" },
      { id: "B", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "C", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" },
      { id: "D", textEn: "द्विगु समास", textHi: "द्विगु समास" }
    ],
    correctAnswer: "A",
    explanation: "पूर्व पद 'यथा' अव्यय है, अतः अव्ययीभाव समास है।"
  },
  {
    id: 20,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the विलोम of 'तिमिर' (Darkness)?",
    questionHi: "'तिमिर' (अंधकार) का सही विलोम क्या होगा?",
    options: [
      { id: "A", textEn: "आलोक / प्रकाश (Alok)", textHi: "आलोक (प्रकाश)" },
      { id: "B", textEn: "किरण", textHi: "किरण" },
      { id: "C", textEn: "रात", textHi: "रात" },
      { id: "D", textEn: "अंधेरा", textHi: "अंधेरा" }
    ],
    correctAnswer: "A",
    explanation: "'तिमिर' (अंधेरा) का विलोम 'आलोक' (उजाला) होता है।"
  },
  {
    id: 21,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is synonym of 'नदी' (River)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'नदी' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "सरिता / तरंगिणी / तटिनी", textHi: "सरिता / तरंगिणी / तटिनी" },
      { id: "B", textEn: "वारिधि (समुद्र)", textHi: "वारिधि" },
      { id: "C", textEn: "सरोवर", textHi: "सरोवर" },
      { id: "D", textEn: "तड़ाग", textHi: "तड़ाग" }
    ],
    correctAnswer: "A",
    explanation: "नदी के पर्यायवाची: सरिता, तटिनी, तरंगिणी, आपगा, निर्झरिणी हैं।"
  },
  {
    id: 22,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is one-word substitution for: 'जिसका कोई शत्रु न जन्मा हो'?",
    questionHi: "'जिसका कोई शत्रु न जन्मा हो' वाक्यांश के लिए एक शब्द है:",
    options: [
      { id: "A", textEn: "अजातशत्रु (Ajatashatru)", textHi: "अजातशत्रु" },
      { id: "B", textEn: "शत्रुघ्न", textHi: "शत्रुघ्न" },
      { id: "C", textEn: "अजेय", textHi: "अजेय" },
      { id: "D", textEn: "अपराजेय", textHi: "अपराजेय" }
    ],
    correctAnswer: "A",
    explanation: "जिसका कोई शत्रु न उत्पन्न हुआ हो उसे 'अजातशत्रु' कहते हैं।"
  },
  {
    id: 23,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the meaning of the idiom: 'नौ दो ग्यारह होना'?",
    questionHi: "मुहावरे 'नौ दो ग्यारह होना' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "भाग जाना / रफूचक्कर होना", textHi: "भाग जाना / रफूचक्कर होना" },
      { id: "B", textEn: "मिलकर कार्य करना", textHi: "मिलकर कार्य करना" },
      { id: "C", textEn: "गणना करना", textHi: "गणना करना" },
      { id: "D", textEn: "बहुत अधिक लाभ होना", textHi: "लाभ होना" }
    ],
    correctAnswer: "A",
    explanation: "'नौ दो ग्यारह होना' का अर्थ पुलिस या संकट को देखकर तुरंत भाग जाना होता है।"
  },
  {
    id: 24,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is संधि विच्छेद of 'प्रत्येक'?",
    questionHi: "'प्रत्येक' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "प्रति + एक (यण स्वर संधि)", textHi: "प्रति + एक (यण स्वर संधि)" },
      { id: "B", textEn: "प्रत्य + एक", textHi: "प्रत्य + एक" },
      { id: "C", textEn: "प्र + त्येक", textHi: "प्र + त्येक" },
      { id: "D", textEn: "प्रती + एक", textHi: "प्रती + एक" }
    ],
    correctAnswer: "A",
    explanation: "इ + ए = ये (यण संधि), अतः प्रति + एक = प्रत्येक।"
  },
  {
    id: 25,
    section: "state_hindi",
    sectionName: "1. General Hindi / सामान्य हिंदी",
    questionEn: "What is the पुल्लिंग (Masculine) of 'विदुषी'?",
    questionHi: "'विदुषी' (विद्वान महिला) का पुल्लिंग शब्द क्या है?",
    options: [
      { id: "A", textEn: "विद्वान (Vidwan)", textHi: "विद्वान" },
      { id: "B", textEn: "ज्ञानी", textHi: "ज्ञानी" },
      { id: "C", textEn: "पंडित", textHi: "पंडित" },
      { id: "D", textEn: "विदुषक", textHi: "विदुषक" }
    ],
    correctAnswer: "A",
    explanation: "विद्वान का स्त्रीलिंग 'विदुषी' और विदुषी का पुल्लिंग 'विद्वान' होता है।"
  },

  // =========================================================================
  // SECTION 2: RURAL DEVELOPMENT & SOCIETY / ग्राम्य विकास (Q26 - Q50)
  // =========================================================================
  {
    id: 26,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is a 'Khasra' (खसरा) in land revenue administration?",
    questionHi: "भू-राजस्व प्रशासन में 'खसरा' (Khasra) क्या होता है?",
    options: [
      { id: "A", textEn: "Land parcel survey register detailing crop and soil data", textHi: "खेतों का सर्वेक्षण रजिस्टर जिसमें फसल, क्षेत्रफल और मिट्टी का ब्यौरा दर्ज होता है" },
      { id: "B", textEn: "Record of ownership rights (Khatauni)", textHi: "भूमि स्वामित्व का अधिकार अभिलेख (खतौनी)" },
      { id: "C", textEn: "Receipt of revenue tax", textHi: "लगान रसीद" },
      { id: "D", textEn: "Village boundary map", textHi: "सीमा नक्शा" }
    ],
    correctAnswer: "A",
    explanation: "Khasra is a legal agricultural document containing survey numbers of fields, plots, areas, cultivators, and seasonal crops."
  },
  {
    id: 27,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is a 'Khatauni' (खतौनी)?",
    questionHi: "'खतौनी' (Khatauni) किस प्रकार का भू-अभिलेख है?",
    options: [
      { id: "A", textEn: "Record of Rights (RoR) showing land ownership and tenure of cultivators", textHi: "अधिकार अभिलेख (Record of Rights) जिसमें जोतदार का नाम व स्वामित्व दर्ज होता है" },
      { id: "B", textEn: "Daily diary of Patwari", textHi: "लेखपाल की दैनिक डायरी" },
      { id: "C", textEn: "Irrigation water schedule", textHi: "सिंचाई रोस्टर" },
      { id: "D", textEn: "Cattle census document", textHi: "पशु गणना रजिस्टर" }
    ],
    correctAnswer: "A",
    explanation: "Khatauni is prepared based on the Khasra and serves as the primary Record of Rights (RoR) listing landholders and their shares."
  },
  {
    id: 28,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "How many Bighas make 1 Acre in standard metric land measurements?",
    questionHi: "मानक माप के अनुसार 1 एकड़ (Acre) में लगभग कितने बीघा होते हैं?",
    options: [
      { id: "A", textEn: "1.6 Pucca Bigha (approx. 4.8 Kuccha Bigha)", textHi: "1.6 पक्का बीघा (लगभग 4,047 वर्ग मीटर)" },
      { id: "B", textEn: "2.5 Pucca Bigha", textHi: "2.5 पक्का बीघा" },
      { id: "C", textEn: "3 Pucca Bigha", textHi: "3 पक्का बीघा" },
      { id: "D", textEn: "1 Pucca Bigha", textHi: "1 पक्का बीघा" }
    ],
    correctAnswer: "A",
    explanation: "1 Acre = 4,046.86 m² = 43,560 sq ft. 1 Pucca Bigha = 2,529.3 m² (3,025 sq yd), meaning 1 Acre = 1.6 Pucca Bigha."
  },
  {
    id: 29,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is the traditional chain measuring 66 feet (22 yards) used by Patwaris/Lekhpals for surveying called?",
    questionHi: "पटवारी द्वारा भूमि पैमाइश हेतु प्रयुक्त 66 फीट (22 गज / 100 कड़ियां) लंबी पारंपरिक जरीब को क्या कहते हैं?",
    options: [
      { id: "A", textEn: "Gunter's Chain (गुंटर्स जरीब)", textHi: "गुंटर्स जरीब (Gunter's Chain)" },
      { id: "B", textEn: "Shahjahani Chain (165 feet)", textHi: "शाहजहानी जरीब" },
      { id: "C", textEn: "Metric Chain (20m / 30m)", textHi: "मीट्रिक जरीब" },
      { id: "D", textEn: "Engineer's Chain", textHi: "इंजीनियर्स जरीब" }
    ],
    correctAnswer: "A",
    explanation: "Gunter's chain is 66 feet long with 100 links (1 link = 7.92 inches); 10 square chains equal exactly 1 acre."
  },
  {
    id: 30,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Under the MGNREGA Act 2005, how many days of guaranteed wage employment are provided per rural household per year?",
    questionHi: "मनरेगा (MGNREGA) अधिनियम के तहत प्रत्येक ग्रामीण परिवार को प्रतिवर्ष कितने दिनों के अकुशल रोजगार की गारंटी दी जाती है?",
    options: [
      { id: "A", textEn: "100 days", textHi: "100 दिन (100 Days guaranteed work)" },
      { id: "B", textEn: "150 days", textHi: "150 दिन" },
      { id: "C", textEn: "200 days", textHi: "200 दिन" },
      { id: "D", textEn: "90 days", textHi: "90 दिन" }
    ],
    correctAnswer: "A",
    explanation: "MGNREGA legally guarantees 100 days of wage employment in a financial year to every rural household whose adult members volunteer for unskilled manual work."
  },
  {
    id: 31,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Who is the custodian of village land records at the grassroots level in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में ग्राम स्तर पर भू-अभिलेखों के संधारण और कृषि पड़ताल के लिए जिम्मेदार प्राथमिक राजस्व अधिकारी कौन होता है?",
    options: [
      { id: "A", textEn: "Lekhpal (Patwari)", textHi: "राजस्व लेखपाल / पटवारी" },
      { id: "B", textEn: "Kanoongo (Revenue Inspector)", textHi: "कानूनगो (राजस्व निरीक्षक)" },
      { id: "C", textEn: "Tehsildar", textHi: "तहसीलदार" },
      { id: "D", textEn: "Gram Pradhan", textHi: "ग्राम प्रधान" }
    ],
    correctAnswer: "A",
    explanation: "The Lekhpal (formerly Patwari) maintains village maps (Shajra), registers (Khasra, Khatauni), and conducts field inspections (Partal)."
  },
  {
    id: 32,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "In land measurement, 1 Bigha contains how many Biswa in northern states?",
    questionHi: "उत्तर भारत के राजस्व मापन में 1 पक्के बीघे में कितने बिस्वा होते हैं?",
    options: [
      { id: "A", textEn: "20 Biswa", textHi: "20 बिस्वा (20 Biswa)" },
      { id: "B", textEn: "10 Biswa", textHi: "10 बिस्वा" },
      { id: "C", textEn: "15 Biswa", textHi: "15 बिस्वा" },
      { id: "D", textEn: "25 Biswa", textHi: "25 बिस्वा" }
    ],
    correctAnswer: "A",
    explanation: "1 Bigha = 20 Biswa. 1 Biswa = 20 Biswansi."
  },
  {
    id: 33,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Pradhan Mantri Gram Sadak Yojana (PMGSY) was launched in which year to connect unconnected habitations?",
    questionHi: "ग्रामीण बस्तियों को बारहमासी पक्की सड़कों से जोड़ने के लिए 'प्रधानमंत्री ग्राम सड़क योजना' (PMGSY) किस वर्ष प्रारंभ की गई थी?",
    options: [
      { id: "A", textEn: "25 December 2000 (Atal Bihari Vajpayee)", textHi: "25 दिसंबर 2000" },
      { id: "B", textEn: "15 August 2004", textHi: "15 अगस्त 2004" },
      { id: "C", textEn: "2 October 2005", textHi: "2 अक्टूबर 2005" },
      { id: "D", textEn: "1 January 1999", textHi: "1 जनवरी 1999" }
    ],
    correctAnswer: "A",
    explanation: "PMGSY was launched on 25 December 2000 under Prime Minister Atal Bihari Vajpayee as a 100% centrally sponsored scheme."
  },
  {
    id: 34,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is 'Shajra' (शजरा) in village land records?",
    questionHi: "गांव के भू-अभिलेखों में 'शजरा' (Shajra) किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Village Map showing boundaries and plot survey numbers", textHi: "गांव का भू-नक्शा जिसमें सभी खेतों की सीमाएं व खसरा संख्या दर्ज होती हैं" },
      { id: "B", textEn: "Crop rate list", textHi: "फसल दर सूची" },
      { id: "C", textEn: "List of wells and ponds", textHi: "कुओं और तालाबों की सूची" },
      { id: "D", textEn: "Gram Sabha resolution book", textHi: "ग्राम सभा प्रस्ताव पुस्तिका" }
    ],
    correctAnswer: "A",
    explanation: "Shajra is the official map of the village village-lands showing every individual plot number drawn to scale."
  },
  {
    id: 35,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "How many agricultural field inspections (पड़ताल - Partal) does a Lekhpal conduct in a year?",
    questionHi: "एक राजस्व वर्ष में लेखपाल द्वारा सामान्यतः कितनी बार कृषि पड़ताल (Partal) की जाती है?",
    options: [
      { id: "A", textEn: "3 times (Kharif, Rabi, and Zaid)", textHi: "3 बार (खरीफ, रबी और जायद पड़ताल)" },
      { id: "B", textEn: "1 time", textHi: "1 बार" },
      { id: "C", textEn: "2 times", textHi: "2 बार" },
      { id: "D", textEn: "4 times", textHi: "4 बार" }
    ],
    correctAnswer: "A",
    explanation: "A Lekhpal conducts three seasonal crop surveys each agricultural year: Kharif Partal (August), Rabi Partal (January), and Zaid Partal (April)."
  },
  {
    id: 36,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is 1 Hectare equal to in square meters?",
    questionHi: "1 हेक्टेयर (Hectare) में कितने वर्ग मीटर होते हैं?",
    options: [
      { id: "A", textEn: "10,000 sq meters", textHi: "10,000 वर्ग मीटर (10,000 m²)" },
      { id: "B", textEn: "1,000 sq meters", textHi: "1,000 वर्ग मीटर" },
      { id: "C", textEn: "4,047 sq meters", textHi: "4,047 वर्ग मीटर (1 एकड़)" },
      { id: "D", textEn: "2,500 sq meters", textHi: "2,500 वर्ग मीटर" }
    ],
    correctAnswer: "A",
    explanation: "1 Hectare is a square with 100m sides, equal to 100 × 100 = 10,000 square meters (approx. 2.47 acres)."
  },
  {
    id: 37,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Which constitutional amendment established a 3-tier Panchayati Raj system in rural India?",
    questionHi: "किस संविधान संशोधन द्वारा ग्रामीण भारत में त्रि-स्तरीय पंचायती राज व्यवस्था स्थापित की गई?",
    options: [
      { id: "A", textEn: "73rd Constitutional Amendment Act, 1992", textHi: "73वां संविधान संशोधन अधिनियम, 1992" },
      { id: "B", textEn: "74th Amendment Act (Urban bodies)", textHi: "74वां संविधान संशोधन" },
      { id: "C", textEn: "42nd Amendment Act", textHi: "42वां संविधान संशोधन" },
      { id: "D", textEn: "44th Amendment Act", textHi: "44वां संविधान संशोधन" }
    ],
    correctAnswer: "A",
    explanation: "The 73rd Amendment created Gram Panchayat (village), Panchayat Samiti (block), and Zila Parishad (district)."
  },
  {
    id: 38,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Under the SVAMITVA scheme, drone technology is utilized for which objective in rural areas?",
    questionHi: "ग्रामीण क्षेत्रों में ड्रोन तकनीक का उपयोग करके भूमि का सर्वेक्षण करने वाली योजना 'स्वामित्व' (SVAMITVA) का मुख्य उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "Mapping rural inhabited lands (Abadi) and issuing legal Property Cards", textHi: "ग्रामीण आबादी क्षेत्र की भूमि का सीमांकन और कानूनी 'संपत्ति कार्ड' (Gharauni) प्रदान करना" },
      { id: "B", textEn: "Crop insurance compensation only", textHi: "फसल बीमा देना मात्र" },
      { id: "C", textEn: "Rainfall prediction", textHi: "वर्षा की भविष्यवाणी" },
      { id: "D", textEn: "Road construction surveillance", textHi: "सड़क निर्माण की निगरानी" }
    ],
    correctAnswer: "A",
    explanation: "SVAMITVA (Survey of Villages and Mapping with Improvised Technology in Village Areas) provides rural property owners with documented titles."
  },
  {
    id: 39,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "When does the Agricultural / Fasli Year (कृषि वर्ष / फसली वर्ष) begin and end in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में 'कृषि वर्ष' (फसली वर्ष) की अवधि क्या होती है?",
    options: [
      { id: "A", textEn: "1 July to 30 June", textHi: "1 जुलाई से 30 जून" },
      { id: "B", textEn: "1 April to 31 March (Financial Year)", textHi: "1 अप्रैल से 31 मार्च" },
      { id: "C", textEn: "1 January to 31 December", textHi: "1 जनवरी से 31 दिसंबर" },
      { id: "D", textEn: "1 October to 30 September", textHi: "1 अक्टूबर से 30 सितंबर" }
    ],
    correctAnswer: "A",
    explanation: "The Fasli or agricultural year runs from 1 July to 30 June of the following calendar year."
  },
  {
    id: 40,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is 'Dakhil-Kharij' (दाखिल-खारिज / Mutation) in land revenue?",
    questionHi: "भूमि के क्रय-विक्रय या उत्तराधिकार के पश्चात राजस्व अभिलेखों में नाम बदलने की प्रक्रिया को क्या कहते हैं?",
    options: [
      { id: "A", textEn: "Mutation (दाखिल-खारिज)", textHi: "दाखिल-खारिज (Mutation / नामान्तरण)" },
      { id: "B", textEn: "Registry (बैनामा)", textHi: "बैनामा" },
      { id: "C", textEn: "Khasra entry", textHi: "खसरा प्रविष्टि" },
      { id: "D", textEn: "Chakbandi", textHi: "चकबंदी" }
    ],
    correctAnswer: "A",
    explanation: "Mutation (दाखिल-खारिज) is the substitution of the name of the new owner in place of the previous owner in the revenue records (Khatauni)."
  },
  {
    id: 41,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is the primary objective of Consolidation of Land Holdings (चकबंदी - Chakbandi)?",
    questionHi: "कृषि भूमि की 'चकबंदी' (Chakbandi) का मुख्य उद्देश्य क्या होता है?",
    options: [
      { id: "A", textEn: "Consolidating scattered and fragmented land parcels of a farmer into one compact block", textHi: "किसान के दूर-दूर बिखरे हुए छोटे-छोटे खेतों को एक स्थान पर एकत्रित (चक) करना" },
      { id: "B", textEn: "Collecting land tax forcibly", textHi: "जबरन लगान वसूलना" },
      { id: "C", textEn: "Taking over farmer's land by the state", textHi: "भूमि छीनना" },
      { id: "D", textEn: "Converting agricultural land into factories", textHi: "औद्योगिक भूमि बनाना" }
    ],
    correctAnswer: "A",
    explanation: "Consolidation of Holdings prevents agricultural fragmentation, improves irrigation access, and increases crop productivity."
  },
  {
    id: 42,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is the minimum age required to contest election for the post of Gram Pradhan (Village Sarpanch)?",
    questionHi: "ग्राम प्रधान (सरपंच) का चुनाव लड़ने के लिए भारत में न्यूनतम निर्धारित आयु कितनी है?",
    options: [
      { id: "A", textEn: "21 years", textHi: "21 वर्ष" },
      { id: "B", textEn: "18 years (मतदान की आयु)", textHi: "18 वर्ष" },
      { id: "C", textEn: "25 years (विधायक / सांसद)", textHi: "25 वर्ष" },
      { id: "D", textEn: "30 years", textHi: "30 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "Under Article 243F, the minimum age required to contest Panchayat elections is 21 years."
  },
  {
    id: 43,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Under the UP Revenue Code 2006, every Khatauni is usually revised every how many years?",
    questionHi: "उत्तर प्रदेश राजस्व संहिता के अंतर्गत खतौनी का पुनरीक्षण (नवीनीकरण) सामान्यतः कितने वर्षों में किया जाता है?",
    options: [
      { id: "A", textEn: "Every 6 years", textHi: "प्रत्येक 6 वर्ष में" },
      { id: "B", textEn: "Every year", textHi: "प्रतिवर्ष" },
      { id: "C", textEn: "Every 5 years", textHi: "प्रत्येक 5 वर्ष में" },
      { id: "D", textEn: "Every 10 years", textHi: "प्रत्येक 10 वर्ष में" }
    ],
    correctAnswer: "A",
    explanation: "In Uttar Pradesh, a new Khatauni is prepared every six years incorporate all updated mutation entries."
  },
  {
    id: 44,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is 'Gaon Sabha' / 'Gram Sabha'?",
    questionHi: "'ग्राम सभा' (Gram Sabha) में कौन-कौन से व्यक्ति सदस्य होते हैं?",
    options: [
      { id: "A", textEn: "All adult citizens of the village registered in the electoral roll", textHi: "गांव के वे सभी वयस्क नागरिक जिनका नाम मतदाता सूची में दर्ज है" },
      { id: "B", textEn: "Only elected ward members", textHi: "केवल निर्वाचित सदस्य" },
      { id: "C", textEn: "Only landlords owning more than 5 acres", textHi: "केवल बड़े जमींदार" },
      { id: "D", textEn: "Only government village staff", textHi: "केवल सरकारी कर्मचारी" }
    ],
    correctAnswer: "A",
    explanation: "Gram Sabha is a permanent body comprising all registered voters within a village or group of villages."
  },
  {
    id: 45,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What financial benefit is provided annually to small and marginal farmers under 'PM-KISAN'?",
    questionHi: "'प्रधानमंत्री किसान सम्मान निधि' (PM-KISAN) के तहत पात्र किसान परिवारों को प्रतिवर्ष कितनी वित्तीय सहायता दी जाती है?",
    options: [
      { id: "A", textEn: "₹6,000 per year in three equal installments of ₹2,000", textHi: "₹6,000 प्रतिवर्ष (₹2,000 की 3 समान किस्तों में)" },
      { id: "B", textEn: "₹10,000 per year", textHi: "₹10,000 प्रतिवर्ष" },
      { id: "C", textEn: "₹5,000 per year", textHi: "₹5,000 प्रतिवर्ष" },
      { id: "D", textEn: "₹12,000 per year", textHi: "₹12,000 प्रतिवर्ष" }
    ],
    correctAnswer: "A",
    explanation: "PM-KISAN transfers ₹6,000 annually directly into farmers' Aadhaar-linked bank accounts in three four-monthly installments."
  },
  {
    id: 46,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "In land surveying, 1 Shahjahani Jarib is equal to how many yards (Gaj)?",
    questionHi: "पारंपरिक शाहजहानी जरीब की कुल लंबाई कितनी होती है?",
    options: [
      { id: "A", textEn: "55 yards / 165 feet (44 Gatthas)", textHi: "55 गज (165 फीट / 44 गट्ठे)" },
      { id: "B", textEn: "22 yards (Gunter's Chain)", textHi: "22 गज" },
      { id: "C", textEn: "100 yards", textHi: "100 गज" },
      { id: "D", textEn: "33 yards", textHi: "33 गज" }
    ],
    correctAnswer: "A",
    explanation: "One Shahjahani Jarib equals 55 yards (165 feet). A square of 1 Jarib by 1 Jarib equals 1 Pucca Bigha (3,025 sq yards)."
  },
  {
    id: 47,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "Which agency conducts decennial agricultural census in India?",
    questionHi: "भारत में प्रत्येक 5 वर्ष में कृषि संगणना (Agricultural Census) का संचालन कौन सा मंत्रालय करता है?",
    options: [
      { id: "A", textEn: "Ministry of Agriculture and Farmers Welfare", textHi: "कृषि एवं किसान कल्याण मंत्रालय" },
      { id: "B", textEn: "Ministry of Home Affairs (Census Commissioner)", textHi: "गृह मंत्रालय" },
      { id: "C", textEn: "NITI Aayog", textHi: "नीति आयोग" },
      { id: "D", textEn: "NABARD", textHi: "नाबार्ड" }
    ],
    correctAnswer: "A",
    explanation: "The Department of Agriculture & Farmers Welfare conducts the Agricultural Census every five years to collect operational holding statistics."
  },
  {
    id: 48,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is 'Gharauni' (घरौनी) in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में 'घरौनी' (Gharauni) क्या है?",
    options: [
      { id: "A", textEn: "Rural Abadi Property Ownership Certificate issued under Svamitva", textHi: "ग्रामीण आबादी क्षेत्र में आवासीय भवन का स्वामित्व प्रमाण-पत्र" },
      { id: "B", textEn: "House tax receipt", textHi: "गृह कर रसीद" },
      { id: "C", textEn: "Cattle shed document", textHi: "पशुशाला का प्रपत्र" },
      { id: "D", textEn: "Agricultural loan card", textHi: "ऋण कार्ड" }
    ],
    correctAnswer: "A",
    explanation: "Gharauni is the rural property certificate issued to villagers under the SVAMITVA scheme conferring clear title on their village homes."
  },
  {
    id: 49,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "What is the primary role of a 'Gram Panchayat Secretary' (VDO - Village Development Officer)?",
    questionHi: "ग्राम पंचायत सचिव / ग्राम विकास अधिकारी (VDO) का मुख्य दायित्व क्या होता है?",
    options: [
      { id: "A", textEn: "Maintaining panchayat financial records and implementing government rural schemes", textHi: "पंचायत के अभिलेख, आय-व्यय का संधारण और विकास योजनाओं का क्रियान्वयन" },
      { id: "B", textEn: "Surveying farm fields with chain", textHi: "खेत नापना" },
      { id: "C", textEn: "Policing and maintaining law and order", textHi: "कानून व्यवस्था बनाए रखना" },
      { id: "D", textEn: "Conducting court cases", textHi: "मुकदमा लड़ना" }
    ],
    correctAnswer: "A",
    explanation: "The VDO/Panchayat Secretary is the executive officer coordinating developmental grants, muster rolls, Gram Sabha resolutions, and audits."
  },
  {
    id: 50,
    section: "state_rural",
    sectionName: "2. Rural Development & Society (ग्राम्य विकास)",
    questionEn: "1 Biswa is equal to how many Biswansi in traditional land measurement?",
    questionHi: "पारंपरिक राजस्व मापन में 1 बिस्वा में कितने बिस्वांसी होते हैं?",
    options: [
      { id: "A", textEn: "20 Biswansi", textHi: "20 बिस्वांसी" },
      { id: "B", textEn: "10 Biswansi", textHi: "10 बिस्वांसी" },
      { id: "C", textEn: "15 Biswansi", textHi: "15 बिस्वांसी" },
      { id: "D", textEn: "25 Biswansi", textHi: "25 बिस्वांसी" }
    ],
    correctAnswer: "A",
    explanation: "1 Bigha = 20 Biswa; 1 Biswa = 20 Biswansi; 1 Biswansi = 20 Kachwansi."
  },

  // =========================================================================
  // SECTION 3: GENERAL STUDIES & STATE ADMINISTRATION (Q51 - Q75)
  // =========================================================================
  {
    id: 51,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Who is the head of the district administrative machinery and revenue collector?",
    questionHi: "जिले का मुख्य प्रशासनिक प्रमुख और राजस्व संग्रहकर्ता कौन होता है?",
    options: [
      { id: "A", textEn: "District Magistrate / Collector (DM)", textHi: "जिलाधिकारी / कलेक्टर (DM)" },
      { id: "B", textEn: "Superintendent of Police (SP)", textHi: "पुलिस अधीक्षक (SP)" },
      { id: "C", textEn: "Chief Medical Officer (CMO)", textHi: "मुख्य चिकित्सा अधिकारी" },
      { id: "D", textEn: "District Judge", textHi: "जिला न्यायाधीश" }
    ],
    correctAnswer: "A",
    explanation: "The District Collector/DM heads the district administration, revenue recovery, disaster management, and overall law and order."
  },
  {
    id: 52,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "In which year did the Green Revolution begin in India under Dr. M.S. Swaminathan?",
    questionHi: "भारत में डॉ. एम.एस. स्वामीनाथन के नेतृत्व में हरित क्रांति का प्रारंभ किस दशक में हुआ था?",
    options: [
      { id: "A", textEn: "1966 - 1967", textHi: "1966 - 1967" },
      { id: "B", textEn: "1950 - 1951", textHi: "1950 - 1951" },
      { id: "C", textEn: "1980 - 1981", textHi: "1980 - 1981" },
      { id: "D", textEn: "1975 - 1976", textHi: "1975 - 1976" }
    ],
    correctAnswer: "A",
    explanation: "The Green Revolution introduced High Yielding Variety (HYV) seeds of Mexican dwarf wheat and rice in 1966-67."
  },
  {
    id: 53,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the apex bank for rural and agricultural credit financing in India?",
    questionHi: "भारत में कृषि एवं ग्रामीण विकास हेतु वित्त पोषण करने वाला शीर्ष बैंक कौन सा है?",
    options: [
      { id: "A", textEn: "NABARD (National Bank for Agriculture and Rural Development)", textHi: "नाबार्ड (NABARD)" },
      { id: "B", textEn: "State Bank of India (SBI)", textHi: "भारतीय स्टेट बैंक" },
      { id: "C", textEn: "Reserve Bank of India (RBI)", textHi: "आरबीआई" },
      { id: "D", textEn: "SIDBI", textHi: "सिडबी" }
    ],
    correctAnswer: "A",
    explanation: "NABARD was established on 12 July 1982 on the recommendation of the B. Sivaraman Committee."
  },
  {
    id: 54,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Which crop is harvested during the 'Rabi' season in North India?",
    questionHi: "उत्तरी भारत में 'रबी' मौसम (सर्दियों में बोई जाने वाली) की प्रमुख फसल कौन सी है?",
    options: [
      { id: "A", textEn: "Wheat, Mustard, Gram, Barley", textHi: "गेहूं, सरसों, चना, जौ" },
      { id: "B", textEn: "Paddy (Rice) and Maize (Kharif)", textHi: "धान और मक्का" },
      { id: "C", textEn: "Watermelon and Cucumber (Zaid)", textHi: "तरबूज और खीरा" },
      { id: "D", textEn: "Cotton and Jute", textHi: "कपास और जूट" }
    ],
    correctAnswer: "A",
    explanation: "Rabi crops are sown in October-November and harvested in March-April, primarily including wheat, barley, gram, and mustard."
  },
  {
    id: 55,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the rank of revenue court presided over by the Tehsildar in a Tehsil?",
    questionHi: "तहसील स्तर पर तहसीलदार का न्यायालय किस प्रकार का न्यायालय माना जाता है?",
    options: [
      { id: "A", textEn: "Subordinate Revenue Court (अधीनस्थ राजस्व न्यायालय)", textHi: "अधीनस्थ राजस्व न्यायालय (दाखिल-खारिज हेतु)" },
      { id: "B", textEn: "Civil Court", textHi: "दीवानी न्यायालय" },
      { id: "C", textEn: "Sessions Court", textHi: "सत्र न्यायालय" },
      { id: "D", textEn: "High Court", textHi: "उच्च न्यायालय" }
    ],
    correctAnswer: "A",
    explanation: "The court of Tehsildar handles undisputed mutations, land demarcation (under section 24), and land revenue recovery."
  },
  {
    id: 56,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Which Article of the Constitution directs the State to organize Village Panchayats?",
    questionHi: "संविधान का कौन सा अनुच्छेद राज्य को ग्राम पंचायतों के गठन का निर्देश देता है?",
    options: [
      { id: "A", textEn: "Article 40 (DPSP)", textHi: "अनुच्छेद 40 (नीति निर्देशक तत्व)" },
      { id: "B", textEn: "Article 44", textHi: "अनुच्छेद 44" },
      { id: "C", textEn: "Article 50", textHi: "अनुच्छेद 50" },
      { id: "D", textEn: "Article 48", textHi: "अनुच्छेद 48" }
    ],
    correctAnswer: "A",
    explanation: "Article 40 in Part IV of the Constitution enshrines Gandhian principles directing the state to organize village panchayats."
  },
  {
    id: 57,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the tenure of a newly elected Gram Panchayat?",
    questionHi: "एक नवनिर्वाचित ग्राम पंचायत का कार्यकाल कितने वर्ष का होता है?",
    options: [
      { id: "A", textEn: "5 years from the date of its first meeting", textHi: "प्रथम बैठक की तिथि से 5 वर्ष" },
      { id: "B", textEn: "6 years", textHi: "6 वर्ष" },
      { id: "C", textEn: "4 years", textHi: "4 वर्ष" },
      { id: "D", textEn: "3 years", textHi: "3 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "Article 243E specifies that every Panchayat shall continue for five years from the date appointed for its first meeting."
  },
  {
    id: 58,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the minimum percentage of seats reserved for women in Panchayati Raj Institutions under Article 243D?",
    questionHi: "पंचायती राज संस्थाओं में महिलाओं के लिए न्यूनतम कितने प्रतिशत सीटें आरक्षित हैं?",
    options: [
      { id: "A", textEn: "Not less than one-third (33%)", textHi: "कम से कम एक-तिहाई (33%)" },
      { id: "B", textEn: "50%", textHi: "50% (कुछ राज्यों में)" },
      { id: "C", textEn: "25%", textHi: "25%" },
      { id: "D", textEn: "20%", textHi: "20%" }
    ],
    correctAnswer: "A",
    explanation: "Article 243D(3) mandates that not less than one-third (including SC/ST women) of total seats in Panchayats shall be reserved for women."
  },
  {
    id: 59,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Operation Flood (White Revolution) in India is associated with the production of what?",
    questionHi: "भारत में 'श्वेत क्रांति' (Operation Flood) का संबंध किस उत्पाद के उत्पादन में वृद्धि से है?",
    options: [
      { id: "A", textEn: "Milk and Dairy products (Dr. Verghese Kurien)", textHi: "दूध और दुग्ध उत्पाद (डॉ. वर्गीज कुरियन)" },
      { id: "B", textEn: "Fish (Blue Revolution)", textHi: "मत्स्य उत्पादन" },
      { id: "C", textEn: "Eggs (Silver Revolution)", textHi: "अंडा उत्पादन" },
      { id: "D", textEn: "Oilseeds (Yellow Revolution)", textHi: "तिलहन" }
    ],
    correctAnswer: "A",
    explanation: "Operation Flood, launched in 1970 by the National Dairy Development Board (NDDB), made India the world's largest milk producer."
  },
  {
    id: 60,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the boundary dispute settlement demarcation section under UP Revenue Code 2006?",
    questionHi: "उत्तर प्रदेश राजस्व संहिता 2006 की किस धारा के अंतर्गत खेतों की मेड़ों/सीमाओं का सीमांकन (Demarcation/पत्थरगड़ी) कराया जाता है?",
    options: [
      { id: "A", textEn: "Section 24 (धारा 24)", textHi: "धारा 24" },
      { id: "B", textEn: "Section 34 (दाखिल-खारिज)", textHi: "धारा 34" },
      { id: "C", textEn: "Section 67 (अवैध कब्जा)", textHi: "धारा 67" },
      { id: "D", textEn: "Section 116 (बंटवारा)", textHi: "धारा 116" }
    ],
    correctAnswer: "A",
    explanation: "Under Section 24 of the UP Revenue Code 2006, the Sub-Divisional Officer (SDO) orders boundary demarcation."
  },
  {
    id: 61,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Which committee recommended a 3-tier Panchayati Raj system in 1957?",
    questionHi: "1957 में त्रि-स्तरीय पंचायती राज व्यवस्था की सिफारिश किस समिति ने की थी?",
    options: [
      { id: "A", textEn: "Balwant Rai Mehta Committee", textHi: "बलवंत राय मेहता समिति" },
      { id: "B", textEn: "Ashok Mehta Committee (1977 - 2-tier)", textHi: "अशोक मेहता समिति" },
      { id: "C", textEn: "L.M. Singhvi Committee", textHi: "एल.एम. सिंघवी समिति" },
      { id: "D", textEn: "G.V.K. Rao Committee", textHi: "जी.वी.के. राव समिति" }
    ],
    correctAnswer: "A",
    explanation: "The Balwant Rai Mehta Committee recommended democratic decentralization through Gram, Block, and District level bodies."
  },
  {
    id: 62,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "In which district was the Panchayati Raj system first inaugurated in India on 2 October 1959?",
    questionHi: "2 अक्टूबर 1959 को भारत में पंचायती राज व्यवस्था का उद्घाटन सबसे पहले किस जिले में हुआ था?",
    options: [
      { id: "A", textEn: "Nagaur district (Rajasthan)", textHi: "नागौर जिला (राजस्थान)" },
      { id: "B", textEn: "Shadnagar (Andhra Pradesh)", textHi: "शादनगर (आंध्र प्रदेश)" },
      { id: "C", textEn: "Varanasi (UP)", textHi: "वाराणसी" },
      { id: "D", textEn: "Gaya (Bihar)", textHi: "गया" }
    ],
    correctAnswer: "A",
    explanation: "Prime Minister Jawaharlal Nehru inaugurated the first Panchayati Raj institution in Nagaur, Rajasthan on 2 October 1959."
  },
  {
    id: 63,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is 'Minimum Support Price' (MSP) announced by the Central Government before sowing seasons?",
    questionHi: "फसलों के लिए घोषित किया जाने वाला 'न्यूनतम समर्थन मूल्य' (MSP) क्या होता है?",
    options: [
      { id: "A", textEn: "Guaranteed minimum floor price at which government procures crops from farmers", textHi: "न्यूनतम गारंटीकृत मूल्य जिस पर सरकार किसानों से फसल खरीदती है" },
      { id: "B", textEn: "Maximum retail price in mandis", textHi: "मंडियों का अधिकतम मूल्य" },
      { id: "C", textEn: "Export tariff", textHi: "निर्यात शुल्क" },
      { id: "D", textEn: "Fertilizer subsidy rate", textHi: "खाद की दर" }
    ],
    correctAnswer: "A",
    explanation: "MSP recommended by CACP guarantees farmers an assured price protecting them from price volatility."
  },
  {
    id: 64,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is an agricultural land partition lawsuit filed under in Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश में सह-खातेदारों के बीच भूमि के कानूनी बंटवारे का मुकदमा किस धारा में दायर होता है?",
    options: [
      { id: "A", textEn: "Section 116 (धारा 116 - जोतों का विभाजन)", textHi: "धारा 116 (जोतों का विभाजन)" },
      { id: "B", textEn: "Section 24", textHi: "धारा 24" },
      { id: "C", textEn: "Section 34", textHi: "धारा 34" },
      { id: "D", textEn: "Section 67", textHi: "धारा 67" }
    ],
    correctAnswer: "A",
    explanation: "Section 116 of UP Revenue Code 2006 deals with suits for division of holding (बंटवारा) in SDM court."
  },
  {
    id: 65,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Where is the headquarters of the Board of Revenue of Uttar Pradesh situated?",
    questionHi: "उत्तर प्रदेश राजस्व परिषद (Board of Revenue) का प्रशासनिक मुख्यालय कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Lucknow (Administrative) and Prayagraj (Judicial)", textHi: "लखनऊ (प्रशासनिक) तथा प्रयागराज (न्यायिक शाखा)" },
      { id: "B", textEn: "Kanpur", textHi: "कानपुर" },
      { id: "C", textEn: "Agra", textHi: "आगरा" },
      { id: "D", textEn: "Varanasi", textHi: "वाराणसी" }
    ],
    correctAnswer: "A",
    explanation: "The Board of Revenue was established in 1831 in Allahabad (Prayagraj). In 1947-48, administrative branch was shifted to Lucknow while judicial branch remains in Prayagraj."
  },
  {
    id: 66,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Soil Health Card scheme was launched by the Government of India in which year?",
    questionHi: "'मृदा स्वास्थ्य कार्ड' (Soil Health Card) योजना 'स्वस्थ धरा, खेत हरा' के नारे के साथ किस वर्ष शुरू हुई थी?",
    options: [
      { id: "A", textEn: "February 2015 (Suratgarh, Rajasthan)", textHi: "फरवरी 2015" },
      { id: "B", textEn: "2018", textHi: "2018" },
      { id: "C", textEn: "2012", textHi: "2012" },
      { id: "D", textEn: "2016", textHi: "2016" }
    ],
    correctAnswer: "A",
    explanation: "Launched on 19 February 2015, Soil Health Cards report the nutrient status (NPK, micronutrients) of soil samples."
  },
  {
    id: 67,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is an e-Farming portal through which UP farmers view digitized land records (Khatauni)?",
    questionHi: "उत्तर प्रदेश में किसान अपनी डिजिटल खतौनी और भू-अभिलेख ऑनलाइन देखने के लिए किस पोर्टल का उपयोग करते हैं?",
    options: [
      { id: "A", textEn: "Bhulekh UP (upbhulekh.gov.in)", textHi: "यूपी भूलेख (upbhulekh.gov.in)" },
      { id: "B", textEn: "E-District", textHi: "ई-डिस्ट्रिक्ट" },
      { id: "C", textEn: "Jansunwai", textHi: "जनसुनवाई" },
      { id: "D", textEn: "Kisan Suvidha", textHi: "किसान सुविधा" }
    ],
    correctAnswer: "A",
    explanation: "Bhulekh UP portal computerizes and serves real-time digital certified Khatauni land records across all 75 districts."
  },
  {
    id: 68,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Under the Pradhan Mantri Fasal Bima Yojana (PMFBY), what premium is paid by farmers for foodgrain and oilseed Kharif crops?",
    questionHi: "प्रधानमंत्री फसल बीमा योजना (PMFBY) के अंतर्गत किसानों द्वारा खरीफ फसलों के लिए कितने प्रतिशत प्रीमियम का भुगतान किया जाता है?",
    options: [
      { id: "A", textEn: "2.0% of sum insured (1.5% for Rabi, 5% for commercial)", textHi: "2.0% (रबी के लिए 1.5% और वाणिज्यिक हेतु 5%)" },
      { id: "B", textEn: "5.0%", textHi: "5.0%" },
      { id: "C", textEn: "1.0%", textHi: "1.0%" },
      { id: "D", textEn: "10.0%", textHi: "10.0%" }
    ],
    correctAnswer: "A",
    explanation: "Farmers pay 2% premium for Kharif food and oilseed crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops."
  },
  {
    id: 69,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is an encroached village community land eviction proceedings governed under in UP?",
    questionHi: "उत्तर प्रदेश में ग्राम समाज की भूमि (चारागाह, तालाब, चकरोड) पर अवैध कब्जे को हटाने की कार्यवाही किस धारा में होती है?",
    options: [
      { id: "A", textEn: "Section 67 (धारा 67 - बेदखली व क्षतिपूर्ति)", textHi: "धारा 67" },
      { id: "B", textEn: "Section 116", textHi: "धारा 116" },
      { id: "C", textEn: "Section 24", textHi: "धारा 24" },
      { id: "D", textEn: "Section 34", textHi: "धारा 34" }
    ],
    correctAnswer: "A",
    explanation: "Section 67 of UP Revenue Code 2006 empowers Tehsildars to evict unauthorized occupants of Gram Sabha property and impose damages."
  },
  {
    id: 70,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Who is the executive head of a Gram Panchayat responsible for village administrative affairs?",
    questionHi: "ग्राम पंचायत का संवैधानिक व प्रशासनिक प्रमुख कौन होता है?",
    options: [
      { id: "A", textEn: "Gram Pradhan (Village Head)", textHi: "ग्राम प्रधान (सरपंच)" },
      { id: "B", textEn: "Lekhpal", textHi: "लेखपाल" },
      { id: "C", textEn: "Block Development Officer (BDO)", textHi: "खंड विकास अधिकारी" },
      { id: "D", textEn: "Tehsildar", textHi: "तहसीलदार" }
    ],
    correctAnswer: "A",
    explanation: "The Gram Pradhan is the directly elected chairperson and executive political head of the Gram Panchayat."
  },
  {
    id: 71,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the primary role of a 'Kanoongo' (Revenue Inspector - RI)?",
    questionHi: "राजस्व प्रशासन में 'कानूनगो' (राजस्व निरीक्षक / RI) का मुख्य कार्य क्या है?",
    options: [
      { id: "A", textEn: "Supervising the field surveys and land records of multiple Lekhpals", textHi: "अपने क्षेत्र के कई लेखपालों के कार्यों व अभिलेखों का पर्यवेक्षण करना" },
      { id: "B", textEn: "Conducting crime investigations", textHi: "अपराधों की जांच" },
      { id: "C", textEn: "Collecting electricity bills", textHi: "बिजली बिल वसूलना" },
      { id: "D", textEn: "Constructing highways", textHi: "सड़क बनाना" }
    ],
    correctAnswer: "A",
    explanation: "Revenue Inspectors inspect village survey maps, check Khasra-Khatauni postings, and verify mutations."
  },
  {
    id: 72,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is an acre divided into gunthas in Maharashtra, or cents in southern states?",
    questionHi: "दक्षिण भारतीय राज्यों में 1 एकड़ में कितने 'सेंट' (Cents) होते हैं?",
    options: [
      { id: "A", textEn: "100 Cents", textHi: "100 सेंट (Cents)" },
      { id: "B", textEn: "40 Cents", textHi: "40 सेंट" },
      { id: "C", textEn: "50 Cents", textHi: "50 सेंट" },
      { id: "D", textEn: "200 Cents", textHi: "200 सेंट" }
    ],
    correctAnswer: "A",
    explanation: "In southern states, 1 Acre = 100 Cents (1 Cent = 435.6 sq feet = 40.46 m²)."
  },
  {
    id: 73,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is the official state anthem of Uttar Pradesh?",
    questionHi: "उत्तर प्रदेश का राजकीय गान कौन सा है?",
    options: [
      { id: "A", textEn: "Uttar Pradesh Samagra Geet ('भारत के नवनिर्माण में...')", textHi: "उत्तर प्रदेश समग्र गीत" },
      { id: "B", textEn: "Vande Mataram", textHi: "वंदे मातरम्" },
      { id: "C", textEn: "Jana Gana Mana", textHi: "जन गण मन" },
      { id: "D", textEn: "Sare Jahan Se Achha", textHi: "सारे जहाँ से अच्छा" }
    ],
    correctAnswer: "A",
    explanation: "The official anthem of UP is 'Uttar Pradesh Samagra Geet', composed by Anoop Jalota and Neeraj."
  },
  {
    id: 74,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "Which body audits the financial accounts of a Gram Panchayat annually?",
    questionHi: "ग्राम पंचायत के वार्षिक वित्तीय लेखों और विकास व्यय का सामाजिक अंकेक्षण (Social Audit) किसके द्वारा किया जाता है?",
    options: [
      { id: "A", textEn: "Gram Sabha (ग्राम सभा द्वारा सामाजिक अंकेक्षण)", textHi: "ग्राम सभा द्वारा (Social Audit)" },
      { id: "B", textEn: "Private chartered accountants", textHi: "निजी सीए" },
      { id: "C", textEn: "Local police station", textHi: "थाना" },
      { id: "D", textEn: "School teachers", textHi: "शिक्षक" }
    ],
    correctAnswer: "A",
    explanation: "Social audit is conducted open-air by the Gram Sabha to ensure transparency and accountability of village funds."
  },
  {
    id: 75,
    section: "state_gs",
    sectionName: "3. General Studies & State Administration",
    questionEn: "What is 'Jansunwai-Samadhan' portal in Uttar Pradesh used for?",
    questionHi: "उत्तर प्रदेश सरकार का 'जनसुनवाई-समाधान' (IGRS) पोर्टल किस उद्देश्य हेतु कार्य करता है?",
    options: [
      { id: "A", textEn: "Online registration and time-bound redressal of citizen grievances", textHi: "नागरिक शिकायतों के ऑनलाइन पंजीकरण व समयबद्ध निस्तारण हेतु" },
      { id: "B", textEn: "Electricity bill payment only", textHi: "बिजली बिल भुगतान" },
      { id: "C", textEn: "Bus ticket booking", textHi: "बस टिकट बुकिंग" },
      { id: "D", textEn: "Exam results display", textHi: "परीक्षा परिणाम" }
    ],
    correctAnswer: "A",
    explanation: "Integrated Grievance Redressal System (IGRS Jansunwai) enables citizens to register grievances against government services with tracking."
  },

  // =========================================================================
  // SECTION 4: MATHEMATICS & LAND ARITHMETIC (Q76 - Q100)
  // =========================================================================
  {
    id: 76,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A rectangular farm field is 40 meters long and 30 meters wide. What is the length of its diagonal fence?",
    questionHi: "एक आयताकार खेत की लंबाई 40 मीटर और चौड़ाई 30 मीटर है। इसके विकर्ण की लंबाई क्या होगी?",
    options: [
      { id: "A", textEn: "50 m", textHi: "50 मीटर (पाइथागोरस प्रमेय)" },
      { id: "B", textEn: "70 m", textHi: "70 मीटर" },
      { id: "C", textEn: "60 m", textHi: "60 मीटर" },
      { id: "D", textEn: "45 m", textHi: "45 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Diagonal = √(40² + 30²) = √(1600 + 900) = √2500 = 50 meters."
  },
  {
    id: 77,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "If 1 Pucca Bigha equals 20 Biswa, how many Biswa are there in 3.5 Bigha?",
    questionHi: "यदि 1 पक्के बीघे में 20 बिस्वा होते हैं, तो 3.5 बीघे में कितने बिस्वा होंगे?",
    options: [
      { id: "A", textEn: "70 Biswa", textHi: "70 बिस्वा" },
      { id: "B", textEn: "60 Biswa", textHi: "60 बिस्वा" },
      { id: "C", textEn: "75 Biswa", textHi: "75 बिस्वा" },
      { id: "D", textEn: "80 Biswa", textHi: "80 बिस्वा" }
    ],
    correctAnswer: "A",
    explanation: "3.5 × 20 = 70 Biswa."
  },
  {
    id: 78,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A farmer sells wheat worth ₹12,000 at a profit of 15%. What was his cost of production?",
    questionHi: "एक किसान ₹12,000 में गेहूं बेचकर 15% लाभ कमाता है। लागत मूल्य क्या था?",
    options: [
      { id: "A", textEn: "₹10,434.78", textHi: "₹10,434.78 (लगभग)" },
      { id: "B", textEn: "₹10,200", textHi: "₹10,200" },
      { id: "C", textEn: "₹10,000", textHi: "₹10,000" },
      { id: "D", textEn: "₹10,800", textHi: "₹10,800" }
    ],
    correctAnswer: "A",
    explanation: "CP = SP / 1.15 = 12000 / 1.15 ≈ ₹10,434.78."
  },
  {
    id: 79,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the area of a square field having perimeter 160 meters?",
    questionHi: "एक वर्गाकार खेत का परिमाप 160 मीटर है। इसका क्षेत्रफल क्या होगा?",
    options: [
      { id: "A", textEn: "1,600 m²", textHi: "1,600 वर्ग मीटर" },
      { id: "B", textEn: "1,200 m²", textHi: "1,200 वर्ग मीटर" },
      { id: "C", textEn: "2,000 m²", textHi: "2,000 वर्ग मीटर" },
      { id: "D", textEn: "2,400 m²", textHi: "2,400 वर्ग मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Side = 160 / 4 = 40m. Area = 40 × 40 = 1,600 m²."
  },
  {
    id: 80,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A tube-well pump irrigates 2 acres of land in 6 hours. How many hours will it take to irrigate 7 acres?",
    questionHi: "एक नलकूप 6 घंटे में 2 एकड़ भूमि की सिंचाई करता है। 7 एकड़ भूमि सींचने में उसे कितने घंटे लगेंगे?",
    options: [
      { id: "A", textEn: "21 hours", textHi: "21 घंटे" },
      { id: "B", textEn: "18 hours", textHi: "18 घंटे" },
      { id: "C", textEn: "20 hours", textHi: "20 घंटे" },
      { id: "D", textEn: "24 hours", textHi: "24 घंटे" }
    ],
    correctAnswer: "A",
    explanation: "Time per acre = 6 / 2 = 3 hours. For 7 acres = 7 × 3 = 21 hours."
  },
  {
    id: 81,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the simple interest on a Kisan Credit Card loan of ₹50,000 at 7% per annum for 2 years?",
    questionHi: "₹50,000 के किसान क्रेडिट कार्ड ऋण पर 7% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा?",
    options: [
      { id: "A", textEn: "₹7,000", textHi: "₹7,000" },
      { id: "B", textEn: "₹6,000", textHi: "₹6,000" },
      { id: "C", textEn: "₹7,500", textHi: "₹7,500" },
      { id: "D", textEn: "₹8,000", textHi: "₹8,000" }
    ],
    correctAnswer: "A",
    explanation: "SI = (50000 × 7 × 2) / 100 = 500 × 14 = ₹7,000."
  },
  {
    id: 82,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "The ratio of agricultural land between two brothers is 3:5. If the younger brother has 15 bighas, how much does the elder have?",
    questionHi: "दो भाइयों के बीच कृषि भूमि का अनुपात 3:5 है। यदि छोटे भाई के पास 15 बीघा है, तो बड़े भाई के पास कितनी भूमि है?",
    options: [
      { id: "A", textEn: "25 bighas", textHi: "25 बीघा" },
      { id: "B", textEn: "20 bighas", textHi: "20 बीघा" },
      { id: "C", textEn: "30 bighas", textHi: "30 बीघा" },
      { id: "D", textEn: "22 bighas", textHi: "22 बीघा" }
    ],
    correctAnswer: "A",
    explanation: "3 parts = 15 => 1 part = 5. Elder brother has 5 × 5 = 25 bighas."
  },
  {
    id: 83,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the cost of leveling a circular threshing floor of radius 7m at ₹20 per square meter? (π = 22/7)",
    questionHi: "7 मीटर त्रिज्या वाले एक वृत्ताकार खलिहान को ₹20 प्रति वर्ग मीटर की दर से समतल कराने का व्यय क्या होगा?",
    options: [
      { id: "A", textEn: "₹3,080", textHi: "₹3,080" },
      { id: "B", textEn: "₹3,000", textHi: "₹3,000" },
      { id: "C", textEn: "₹3,200", textHi: "₹3,200" },
      { id: "D", textEn: "₹2,880", textHi: "₹2,880" }
    ],
    correctAnswer: "A",
    explanation: "Area = (22/7) × 7 × 7 = 154 m². Cost = 154 × 20 = ₹3,080."
  },
  {
    id: 84,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "If 15 laborers dig a canal in 10 days, in how many days can 25 laborers dig the same canal?",
    questionHi: "यदि 15 मजदूर एक नहर 10 दिन में खोदते हैं, तो 25 मजदूर उसी नहर को कितने दिन में खोदेंगे?",
    options: [
      { id: "A", textEn: "6 days", textHi: "6 दिन" },
      { id: "B", textEn: "8 days", textHi: "8 दिन" },
      { id: "C", textEn: "5 days", textHi: "5 दिन" },
      { id: "D", textEn: "7 days", textHi: "7 दिन" }
    ],
    correctAnswer: "A",
    explanation: "D = (15 × 10) / 25 = 150 / 25 = 6 days."
  },
  {
    id: 85,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "Find the average yield of 5 wheat fields: 35, 42, 38, 45, and 40 quintals.",
    questionHi: "5 खेतों से प्राप्त गेहूं की उपज का औसत क्या होगा: 35, 42, 38, 45 और 40 क्विंटल?",
    options: [
      { id: "A", textEn: "40 quintals", textHi: "40 क्विंटल" },
      { id: "B", textEn: "38 quintals", textHi: "38 क्विंटल" },
      { id: "C", textEn: "42 quintals", textHi: "42 क्विंटल" },
      { id: "D", textEn: "39 quintals", textHi: "39 क्विंटल" }
    ],
    correctAnswer: "A",
    explanation: "Sum = 35 + 42 + 38 + 45 + 40 = 200. Average = 200 / 5 = 40 quintals."
  },
  {
    id: 86,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "The speed of a tractor is 24 km/h. How many meters does it travel in 1 minute?",
    questionHi: "एक ट्रैक्टर की गति 24 किमी/घंटा है। वह 1 मिनट में कितने मीटर की दूरी तय करेगा?",
    options: [
      { id: "A", textEn: "400 meters", textHi: "400 मीटर" },
      { id: "B", textEn: "350 meters", textHi: "350 मीटर" },
      { id: "C", textEn: "450 meters", textHi: "450 मीटर" },
      { id: "D", textEn: "300 meters", textHi: "300 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Speed in m/min = (24 × 1000) / 60 = 24000 / 60 = 400 meters/min."
  },
  {
    id: 87,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A shopkeeper gives a discount of 10% on an agricultural spray pump marked at ₹2,500. What is the selling price?",
    questionHi: "₹2,500 अंकित मूल्य वाले कीटनाशक स्प्रे पंप पर 10% की छूट दी जाती है। विक्रय मूल्य क्या होगा?",
    options: [
      { id: "A", textEn: "₹2,250", textHi: "₹2,250" },
      { id: "B", textEn: "₹2,200", textHi: "₹2,200" },
      { id: "C", textEn: "₹2,300", textHi: "₹2,300" },
      { id: "D", textEn: "₹2,350", textHi: "₹2,350" }
    ],
    correctAnswer: "A",
    explanation: "SP = 2500 × 0.90 = ₹2,250."
  },
  {
    id: 88,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the LCM of 15, 20, and 30?",
    questionHi: "15, 20 और 30 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    options: [
      { id: "A", textEn: "60", textHi: "60" },
      { id: "B", textEn: "120", textHi: "120" },
      { id: "C", textEn: "30", textHi: "30" },
      { id: "D", textEn: "90", textHi: "90" }
    ],
    correctAnswer: "A",
    explanation: "The smallest multiple divisible by 15, 20, and 30 is 60."
  },
  {
    id: 89,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A triangular farm plot has base 60m and perpendicular height 40m. What is its area?",
    questionHi: "एक त्रिभुजाकार खेत का आधार 60 मीटर और लंबवत ऊंचाई 40 मीटर है। इसका क्षेत्रफल क्या होगा?",
    options: [
      { id: "A", textEn: "1,200 m²", textHi: "1,200 वर्ग मीटर" },
      { id: "B", textEn: "2,400 m²", textHi: "2,400 वर्ग मीटर" },
      { id: "C", textEn: "600 m²", textHi: "600 वर्ग मीटर" },
      { id: "D", textEn: "1,800 m²", textHi: "1,800 वर्ग मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Area = (1/2) × base × height = (1/2) × 60 × 40 = 1,200 m²."
  },
  {
    id: 90,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A grain silo holds 500 quintals of wheat. If 35% is sold, how much wheat remains?",
    questionHi: "एक गोदाम में 500 क्विंटल गेहूं रखा है। यदि 35% गेहूं बेच दिया जाए, तो गोदाम में कितना शेष बचेगा?",
    options: [
      { id: "A", textEn: "325 quintals", textHi: "325 क्विंटल" },
      { id: "B", textEn: "350 quintals", textHi: "350 क्विंटल" },
      { id: "C", textEn: "175 quintals (बिका हुआ)", textHi: "175 क्विंटल" },
      { id: "D", textEn: "300 quintals", textHi: "300 क्विंटल" }
    ],
    correctAnswer: "A",
    explanation: "Remaining percentage = 100% - 35% = 65%. 65% of 500 = 0.65 × 500 = 325 quintals."
  },
  {
    id: 91,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "If 1 Hectare = 2.47 Acres, how many Acres are there in 10 Hectares?",
    questionHi: "यदि 1 हेक्टेयर = 2.47 एकड़ है, तो 10 हेक्टेयर में कितने एकड़ होंगे?",
    options: [
      { id: "A", textEn: "24.7 Acres", textHi: "24.7 एकड़" },
      { id: "B", textEn: "247 Acres", textHi: "247 एकड़" },
      { id: "C", textEn: "2.47 Acres", textHi: "2.47 एकड़" },
      { id: "D", textEn: "25 Acres", textHi: "25 एकड़" }
    ],
    correctAnswer: "A",
    explanation: "10 × 2.47 = 24.7 Acres."
  },
  {
    id: 92,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the cost of fencing a square field of side 50m with wire at ₹15 per meter?",
    questionHi: "50 मीटर भुजा वाले वर्गाकार खेत के चारों ओर तार की बाड़ लगाने का ₹15 प्रति मीटर की दर से कुल खर्च क्या होगा?",
    options: [
      { id: "A", textEn: "₹3,000", textHi: "₹3,000" },
      { id: "B", textEn: "₹2,500", textHi: "₹2,500" },
      { id: "C", textEn: "₹3,500", textHi: "₹3,500" },
      { id: "D", textEn: "₹2,800", textHi: "₹2,800" }
    ],
    correctAnswer: "A",
    explanation: "Perimeter = 4 × 50 = 200 meters. Total cost = 200 × 15 = ₹3,000."
  },
  {
    id: 93,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A cylinder water tank has diameter 14m and height 5m. What is its capacity in m³? (π = 22/7)",
    questionHi: "एक बेलनाकार पानी की टंकी का व्यास 14 मीटर और गहराई 5 मीटर है। उसकी धारिता क्या होगी?",
    options: [
      { id: "A", textEn: "770 m³", textHi: "770 घन मीटर" },
      { id: "B", textEn: "1,540 m³", textHi: "1,540 घन मीटर" },
      { id: "C", textEn: "700 m³", textHi: "700 घन मीटर" },
      { id: "D", textEn: "880 m³", textHi: "880 घन मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Radius r = 7m. Volume = πr²h = (22/7) × 7 × 7 × 5 = 22 × 35 = 770 m³."
  },
  {
    id: 94,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "If x : 12 = 3 : 4, what is the value of x?",
    questionHi: "यदि x : 12 = 3 : 4 है, तो x का मान क्या होगा?",
    options: [
      { id: "A", textEn: "9", textHi: "9" },
      { id: "B", textEn: "8", textHi: "8" },
      { id: "C", textEn: "10", textHi: "10" },
      { id: "D", textEn: "6", textHi: "6" }
    ],
    correctAnswer: "A",
    explanation: "x / 12 = 3 / 4 => 4x = 36 => x = 9."
  },
  {
    id: 95,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "Find the compound interest on ₹8,000 at 5% per annum for 2 years compounded annually.",
    questionHi: "₹8,000 पर 5% वार्षिक दर से 2 वर्ष का वार्षिक चक्रवृद्धि ब्याज क्या होगा?",
    options: [
      { id: "A", textEn: "₹820", textHi: "₹820" },
      { id: "B", textEn: "₹800", textHi: "₹800" },
      { id: "C", textEn: "₹850", textHi: "₹850" },
      { id: "D", textEn: "₹900", textHi: "₹900" }
    ],
    correctAnswer: "A",
    explanation: "Amount = 8000 × (1.05)² = 8000 × 1.1025 = ₹8,820. CI = 8820 - 8000 = ₹820."
  },
  {
    id: 96,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is 45% of 600 kg of fertilizer?",
    questionHi: "600 किलोग्राम उर्वरक का 45% कितना होगा?",
    options: [
      { id: "A", textEn: "270 kg", textHi: "270 किग्रा" },
      { id: "B", textEn: "250 kg", textHi: "250 किग्रा" },
      { id: "C", textEn: "300 kg", textHi: "300 किग्रा" },
      { id: "D", textEn: "280 kg", textHi: "280 किग्रा" }
    ],
    correctAnswer: "A",
    explanation: "0.45 × 600 = 270 kg."
  },
  {
    id: 97,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "The ratio of two numbers is 4 : 5 and their sum is 180. What is the smaller number?",
    questionHi: "दो संख्याओं का अनुपात 4 : 5 है और उनका योग 180 है। छोटी संख्या क्या है?",
    options: [
      { id: "A", textEn: "80", textHi: "80" },
      { id: "B", textEn: "100", textHi: "100" },
      { id: "C", textEn: "75", textHi: "75" },
      { id: "D", textEn: "90", textHi: "90" }
    ],
    correctAnswer: "A",
    explanation: "9 parts = 180 => 1 part = 20. Smaller number = 4 × 20 = 80."
  },
  {
    id: 98,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "A car covers a distance of 180 km in 3 hours. What is its speed in m/s?",
    questionHi: "एक कार 3 घंटे में 180 किमी की दूरी तय करती है। इसकी चाल मीटर/सेकंड में क्या होगी?",
    options: [
      { id: "A", textEn: "16.67 m/s (50/3)", textHi: "16.67 मी/से" },
      { id: "B", textEn: "20 m/s", textHi: "20 मी/से" },
      { id: "C", textEn: "15 m/s", textHi: "15 मी/से" },
      { id: "D", textEn: "25 m/s", textHi: "25 मी/से" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 180 / 3 = 60 km/h = 60 × (5/18) = 50 / 3 ≈ 16.67 m/s."
  },
  {
    id: 99,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "Find the square of 65 using Vedic shortcut (units digit 5):",
    questionHi: "65 का वर्ग क्या होगा?",
    options: [
      { id: "A", textEn: "4,225 (6 × 7 = 42, followed by 25)", textHi: "4,225" },
      { id: "B", textEn: "4,125", textHi: "4,125" },
      { id: "C", textEn: "4,325", textHi: "4,325" },
      { id: "D", textEn: "4,025", textHi: "4,025" }
    ],
    correctAnswer: "A",
    explanation: "6 × (6 + 1) = 42, and 5² = 25 => 4225."
  },
  {
    id: 100,
    section: "state_math",
    sectionName: "4. Mathematics & Land Arithmetic",
    questionEn: "What is the perimeter of an equilateral triangle with side 12 cm?",
    questionHi: "12 सेमी भुजा वाले समबाहु त्रिभुज का परिमाप क्या होगा?",
    options: [
      { id: "A", textEn: "36 cm", textHi: "36 सेमी" },
      { id: "B", textEn: "24 cm", textHi: "24 सेमी" },
      { id: "C", textEn: "48 cm", textHi: "48 सेमी" },
      { id: "D", textEn: "30 cm", textHi: "30 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "Perimeter = 3 × side = 3 × 12 = 36 cm."
  }
];
