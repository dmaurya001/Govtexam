/**
 * GovtExamHub — Teaching Eligibility Examination (CTET / UPTET / REET Mock)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real CTET/UPTET Marking: +1.00 for Correct Answer, 0.00 Negative Marking (NO NEGATIVE MARKING)
 */

const TEACHING_EXAM_CONFIG = {
  id: "teaching",
  title: "Teaching Eligibility Test (CTET / UPTET Mock)",
  shortName: "Teaching",
  icon: "👨‍🏫",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.0, // Official CTET & UPTET Rule: NO Negative Marking
  sections: [
    { id: "teach_cdp", name: "1. Child Development & Pedagogy (बाल विकास)", start: 1, end: 30, total: 30 },
    { id: "teach_hindi", name: "2. Hindi Language & Pedagogy (भाषा हिंदी)", start: 31, end: 60, total: 30 },
    { id: "teach_evs", name: "3. Environmental Studies (पर्यावरण अध्ययन)", start: 61, end: 80, total: 20 },
    { id: "teach_math", name: "4. Mathematics & Pedagogy (गणित)", start: 81, end: 100, total: 20 }
  ]
};

const TEACHING_QUESTIONS_DATA = [
  // =========================================================================
  // SECTION 1: CHILD DEVELOPMENT & PEDAGOGY / बाल विकास (Q1 - Q30)
  // =========================================================================
  {
    id: 1,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "According to Jean Piaget's theory of cognitive development, in which stage does a child achieve 'Object Permanence'?",
    questionHi: "जीन पियाजे के संज्ञानात्मक विकास के सिद्धांत के अनुसार, बच्चा किस अवस्था में 'वस्तु स्थायित्व' (Object Permanence) प्राप्त करता है?",
    options: [
      { id: "A", textEn: "Sensory-Motor Stage (0 - 2 years)", textHi: "संवेदी-गामक अवस्था (0 से 2 वर्ष)" },
      { id: "B", textEn: "Pre-Operational Stage (2 - 7 years)", textHi: "पूर्व-संक्रियात्मक अवस्था" },
      { id: "C", textEn: "Concrete Operational Stage (7 - 11 years)", textHi: "मूर्त-संक्रियात्मक अवस्था" },
      { id: "D", textEn: "Formal Operational Stage (11+ years)", textHi: "औपचारिक संक्रियात्मक अवस्था" }
    ],
    correctAnswer: "A",
    explanation: "Object permanence is the realization that objects continue to exist even when hidden from sight, acquired during the sensorimotor stage (around 8-12 months)."
  },
  {
    id: 2,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "The concept of 'Zone of Proximal Development' (ZPD) and 'Scaffolding' was propounded by:",
    questionHi: "'समीपस्थ विकास का क्षेत्र' (ZPD) और 'मचान / सहारा' (Scaffolding) की संकल्पना किसने प्रतिपादित की थी?",
    options: [
      { id: "A", textEn: "Lev Vygotsky", textHi: "लेव वाइगोत्स्की (Lev Vygotsky)" },
      { id: "B", textEn: "Jean Piaget", textHi: "जीन पियाजे" },
      { id: "C", textEn: "B.F. Skinner", textHi: "बी.एफ. स्किनर" },
      { id: "D", textEn: "Lawrence Kohlberg", textHi: "लॉरेंस कोहलबर्ग" }
    ],
    correctAnswer: "A",
    explanation: "Vygotsky's socio-cultural theory emphasizes the ZPD—the difference between what a learner can do independently and with guidance."
  },
  {
    id: 3,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "In Kohlberg's theory of moral development, the 'Good Boy - Nice Girl' orientation belongs to which level?",
    questionHi: "कोहलबर्ग के नैतिक विकास के सिद्धांत में 'अच्छा लड़का - अच्छी लड़की' अनुकूलन किस स्तर में आता है?",
    options: [
      { id: "A", textEn: "Conventional Level (Level 2, Stage 3)", textHi: "पारंपरिक स्तर (Conventional Level)" },
      { id: "B", textEn: "Pre-Conventional Level", textHi: "पूर्व-पारंपरिक स्तर" },
      { id: "C", textEn: "Post-Conventional Level", textHi: "उत्तर-पारंपरिक स्तर" },
      { id: "D", textEn: "Sensorimotor Level", textHi: "संवेदी स्तर" }
    ],
    correctAnswer: "A",
    explanation: "At the conventional level (stage 3), moral decisions are driven by the desire for social approval and interpersonal harmony."
  },
  {
    id: 4,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Howard Gardner proposed the theory of:",
    questionHi: "हावर्ड गार्डनर ने किस सिद्धांत का प्रतिपादन किया था?",
    options: [
      { id: "A", textEn: "Multiple Intelligences (बहुबुद्धि सिद्धांत)", textHi: "बहुबुद्धि का सिद्धांत (Multiple Intelligences)" },
      { id: "B", textEn: "Two-Factor Theory (Spearman)", textHi: "द्वि-कारक सिद्धांत" },
      { id: "C", textEn: "Operant Conditioning", textHi: "सक्रिय अनुकूलन सिद्धांत" },
      { id: "D", textEn: "Trial and Error (Thorndike)", textHi: "प्रयास एवं त्रुटि का सिद्धांत" }
    ],
    correctAnswer: "A",
    explanation: "Gardner proposed that human intelligence is pluralistic, comprising at least 8 distinct modalities (linguistic, musical, logical-mathematical, spatial, bodily-kinesthetic, etc.)."
  },
  {
    id: 5,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What is Dyslexia primarily associated with?",
    questionHi: "'डिस्लेक्सिया' (Dyslexia) मुख्य रूप से किस अधिगम अक्षमता (Learning Disability) से संबंधित है?",
    options: [
      { id: "A", textEn: "Reading and decoding difficulties (पठन विकार)", textHi: "पठन विकार (Reading difficulty)" },
      { id: "B", textEn: "Writing difficulty (Dysgraphia)", textHi: "लेखन विकार (डिस्ग्राफिया)" },
      { id: "C", textEn: "Mathematical calculation (Dyscalculia)", textHi: "गणितीय गणना विकार (डिस्कैल्कुलिया)" },
      { id: "D", textEn: "Motor coordination (Dyspraxia)", textHi: "शारीरिक समन्वय विकार" }
    ],
    correctAnswer: "A",
    explanation: "Dyslexia is a specific learning disorder characterized by difficulties with accurate and fluent word recognition, decoding, and spelling."
  },
  {
    id: 6,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "The National Curriculum Framework 2005 (NCF-2005) strongly advocates:",
    questionHi: "राष्ट्रीय पाठ्यचर्या रूपरेखा 2005 (NCF-2005) किस पर सर्वाधिक बल देती है?",
    options: [
      { id: "A", textEn: "Constructivist learning and connecting knowledge to outside life", textHi: "रचनावादी अधिगम और ज्ञान को बाहरी जीवन से जोड़ना" },
      { id: "B", textEn: "Rote memorization and textbook drills", textHi: "रटंत प्रणाली और याद करना" },
      { id: "C", textEn: "Teacher-centric classroom discipline", textHi: "शिक्षक-केंद्रित अनुशासन" },
      { id: "D", textEn: "Strict punitive examinations", textHi: "कठोर दंडात्मक परीक्षाएं" }
    ],
    correctAnswer: "A",
    explanation: "NCF-2005 shifts the pedagogy from rote memorization towards constructivism, encouraging active learning connecting school to everyday experiences."
  },
  {
    id: 7,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Which of the following is the primary agency of socialization for a young child?",
    questionHi: "एक छोटे बच्चे के लिए समाजीकरण की प्राथमिक संस्था (Primary Agency) कौन सी है?",
    options: [
      { id: "A", textEn: "Family (परिवार)", textHi: "परिवार (Family)" },
      { id: "B", textEn: "School", textHi: "विद्यालय" },
      { id: "C", textEn: "Mass Media", textHi: "संचार माध्यम" },
      { id: "D", textEn: "Religious institutions", textHi: "धार्मिक स्थल" }
    ],
    correctAnswer: "A",
    explanation: "Family is the first and most fundamental agent of socialization where infants learn initial language, cultural norms, and interpersonal behaviors."
  },
  {
    id: 8,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Who conducted the famous 'Trial and Error' learning experiment on cats?",
    questionHi: "बिल्लियों पर 'प्रयास एवं त्रुटि' (Trial and Error) द्वारा अधिगम का प्रसिद्ध प्रयोग किसने किया था?",
    options: [
      { id: "A", textEn: "Edward Lee Thorndike", textHi: "ई.एल. थार्नडाइक (E.L. Thorndike)" },
      { id: "B", textEn: "Ivan Pavlov (Classical Conditioning on Dogs)", textHi: "इवान पावलव" },
      { id: "C", textEn: "B.F. Skinner (Rats and Pigeons)", textHi: "बी.एफ. स्किनर" },
      { id: "D", textEn: "Wolfgang Köhler (Sultan Chimpanzee - Insight)", textHi: "वुल्फगैंग कोहलर" }
    ],
    correctAnswer: "A",
    explanation: "Thorndike placed hungry cats in puzzle boxes and formulated the Law of Effect, Law of Exercise, and Law of Readiness."
  },
  {
    id: 9,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Inclusive Education (समावेशी शिक्षा) means:",
    questionHi: "'समावेशी शिक्षा' (Inclusive Education) का वास्तविक अर्थ क्या है?",
    options: [
      { id: "A", textEn: "Educating all children including those with special needs in common classrooms", textHi: "सभी बच्चों (विशेष आवश्यकता वाले बच्चों सहित) को एक ही कक्षा में समान अवसर देना" },
      { id: "B", textEn: "Segregating disabled children into separate institutions", textHi: "दिव्यांग बच्चों को अलग विद्यालय में पढ़ाना" },
      { id: "C", textEn: "Only focusing on gifted and talented students", textHi: "केवल प्रतिभाशाली छात्रों पर ध्यान देना" },
      { id: "D", textEn: "Special fee concession for elite students", textHi: "अमीरों के लिए विशेष छूट" }
    ],
    correctAnswer: "A",
    explanation: "Inclusive education welcomes and supports all learners, celebrating diverse abilities without segregation."
  },
  {
    id: 10,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Under the Right to Education (RTE) Act 2009, education is a fundamental right for children of what age group?",
    questionHi: "शिक्षा का अधिकार अधिनियम 2009 (RTE Act) के तहत किस आयु वर्ग के बच्चों के लिए निःशुल्क एवं अनिवार्य शिक्षा का अधिकार है?",
    options: [
      { id: "A", textEn: "6 to 14 years (up to 18 years for CWSN)", textHi: "6 से 14 वर्ष (विशेष आवश्यकता वाले बच्चों हेतु 18 वर्ष)" },
      { id: "B", textEn: "3 to 6 years", textHi: "3 से 6 वर्ष" },
      { id: "C", textEn: "5 to 10 years", textHi: "5 से 10 वर्ष" },
      { id: "D", textEn: "7 to 16 years", textHi: "7 से 16 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "Article 21A and RTE Act 2009 mandate free and compulsory elementary education for every child aged 6 to 14."
  },
  {
    id: 11,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What is the formula for calculating Intelligence Quotient (IQ) introduced by William Stern?",
    questionHi: "विलियम स्टर्न द्वारा प्रतिपादित बुद्धि लब्धि (IQ) ज्ञात करने का सही सूत्र क्या है?",
    options: [
      { id: "A", textEn: "IQ = (Mental Age / Chronological Age) × 100", textHi: "IQ = (मानसिक आयु / वास्तविक आयु) × 100" },
      { id: "B", textEn: "IQ = (Chronological Age / Mental Age) × 100", textHi: "IQ = (वास्तविक आयु / मानसिक आयु) × 100" },
      { id: "C", textEn: "IQ = (Mental Age × Chronological Age) / 100", textHi: "IQ = (MA × CA) / 100" },
      { id: "D", textEn: "IQ = Mental Age + Chronological Age", textHi: "IQ = MA + CA" }
    ],
    correctAnswer: "A",
    explanation: "IQ = (MA / CA) × 100, where MA is Mental Age and CA is Chronological Age."
  },
  {
    id: 12,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Formative Assessment (FA) in school classrooms is primarily intended to:",
    questionHi: "विद्यालयी कक्षाओं में 'रचनात्मक / निर्माणात्मक आकलन' (Formative Assessment) का मुख्य उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "Provide continuous feedback to improve teaching-learning process", textHi: "शिक्षण-अधिगम प्रक्रिया में सुधार हेतु निरंतर प्रतिपुष्टि (Feedback) प्रदान करना" },
      { id: "B", textEn: "Assign final ranks and pass/fail grades", textHi: "अंतिम ग्रेड और उत्तीर्ण/अनुत्तीर्ण घोषित करना" },
      { id: "C", textEn: "Compare students publicly to induce competition", textHi: "छात्रों की परस्पर तुलना करना" },
      { id: "D", textEn: "Conduct annual board examinations", textHi: "वार्षिक परीक्षा आयोजित करना" }
    ],
    correctAnswer: "A",
    explanation: "Formative assessment is assessment 'for' learning, providing ongoing diagnostic feedback during instruction."
  },
  {
    id: 13,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "According to Lev Vygotsky, what plays the most central role in cognitive development?",
    questionHi: "लेव वाइगोत्स्की के अनुसार बच्चों के संज्ञानात्मक विकास में सबसे महत्वपूर्ण भूमिका किसकी होती है?",
    options: [
      { id: "A", textEn: "Social interaction and Language", textHi: "सामाजिक अंतःक्रिया और भाषा (Social & Cultural tools)" },
      { id: "B", textEn: "Biological maturation alone", textHi: "केवल जैविक परिपक्वता" },
      { id: "C", textEn: "Rote conditioning and rewards", textHi: "अनुकूलन और पुरस्कार" },
      { id: "D", textEn: "Genetic inheritance", textHi: "आनुवंशिकता" }
    ],
    correctAnswer: "A",
    explanation: "Vygotsky argued that social interaction, language, and cultural mediation drive cognitive development."
  },
  {
    id: 14,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What is 'Centration' according to Piaget?",
    questionHi: "पियाजे के अनुसार 'केंद्रीकरण' (Centration) का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "Focusing on only one salient aspect of a situation while neglecting others", textHi: "किसी परिस्थिति के केवल एक ही पहलू पर ध्यान केंद्रित करना और अन्य पहलुओं की उपेक्षा करना" },
      { id: "B", textEn: "Ability to reverse mental actions", textHi: "मानसिक क्रियाओं को पलटने की क्षमता" },
      { id: "C", textEn: "Logical abstract thought", textHi: "तार्किक अमूर्त चिंतन" },
      { id: "D", textEn: "Understanding conservation of mass", textHi: "द्रव्यमान के संरक्षण को समझना" }
    ],
    correctAnswer: "A",
    explanation: "In the preoperational stage, centration prevents children from understanding conservation because they fixate on a single visual feature."
  },
  {
    id: 15,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Cephalo-caudal principle of motor development states that development proceeds from:",
    questionHi: "विकास का 'मस्तकाधोमुखी' (Cephalo-caudal) नियम बताता है कि शारीरिक विकास किस दिशा में होता है?",
    options: [
      { id: "A", textEn: "Head to toe (सिर से पैर की ओर)", textHi: "सिर से पैर की ओर (Head to Toe)" },
      { id: "B", textEn: "Center to extremities (केंद्र से परिधि)", textHi: "केंद्र से परिधि की ओर (समीप-दूराभिमुख)" },
      { id: "C", textEn: "Specific to general", textHi: "विशिष्ट से सामान्य" },
      { id: "D", textEn: "Feet to head", textHi: "पैर से सिर की ओर" }
    ],
    correctAnswer: "A",
    explanation: "Cephalo-caudal development means control matures from the head downwards to the neck, arms, trunk, and lastly legs."
  },
  {
    id: 16,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Who is known as the father of modern child-centric Kindergarten education?",
    questionHi: "किंडरगार्टन (Kindergarten / बालवाड़ी) शिक्षण पद्धति के जनक कौन हैं?",
    options: [
      { id: "A", textEn: "Friedrich Fröbel", textHi: "फ्रेडरिक फ्रोबेल (Friedrich Fröbel)" },
      { id: "B", textEn: "Maria Montessori", textHi: "मारिया मांटेसरी" },
      { id: "C", textEn: "John Dewey", textHi: "जॉन डीवी" },
      { id: "D", textEn: "Jean-Jacques Rousseau", textHi: "रूसो" }
    ],
    correctAnswer: "A",
    explanation: "Fröbel created the kindergarten ('children's garden') concept in Germany in 1837, emphasizing play and gifts."
  },
  {
    id: 17,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Which of the following is an intrinsic motivation (आंतरिक अभिप्रेरणा) example?",
    questionHi: "निम्नलिखित में से कौन सा आंतरिक अभिप्रेरणा (Intrinsic Motivation) का उदाहरण है?",
    options: [
      { id: "A", textEn: "Reading science books out of personal curiosity and enjoyment", textHi: "व्यक्तिगत जिज्ञासा और आनंद के लिए विज्ञान की पुस्तकें पढ़ना" },
      { id: "B", textEn: "Studying only to get good grades and cash rewards", textHi: "पुरस्कार और अंक पाने के लिए पढ़ना" },
      { id: "C", textEn: "Doing homework to avoid teacher's punishment", textHi: "सजा से बचने के लिए गृहकार्य करना" },
      { id: "D", textEn: "Practicing running to impress peers", textHi: "सहपाठियों को प्रभावित करने के लिए दौड़ना" }
    ],
    correctAnswer: "A",
    explanation: "Intrinsic motivation arises from internal interest, curiosity, and personal satisfaction rather than external rewards."
  },
  {
    id: 18,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Albert Bandura's Social Learning Theory emphasizes learning through:",
    questionHi: "अल्बर्ट बंडूरा का सामाजिक अधिगम सिद्धांत किस माध्यम से सीखने पर बल देता है?",
    options: [
      { id: "A", textEn: "Observation and Modeling (अवलोकन एवं प्रतिरूपण)", textHi: "अवलोकन और अनुकरण / मॉडलिंग (Observation & Modeling)" },
      { id: "B", textEn: "Trial and error in isolation", textHi: "एकांत में प्रयास और त्रुटि" },
      { id: "C", textEn: "Chemical conditioning", textHi: "रासायनिक अनुकूलन" },
      { id: "D", textEn: "Rote memorization", textHi: "कंठस्थीकरण" }
    ],
    correctAnswer: "A",
    explanation: "Bandura's Bobo doll experiments proved that children learn social behaviors and attitudes by observing and imitating adult models."
  },
  {
    id: 19,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What does the term 'Individual Differences' (वैयक्तिक विभिन्नताएं) imply in a classroom?",
    questionHi: "कक्षा कक्ष में 'वैयक्तिक विभिन्नता' (Individual Differences) का क्या तात्पर्य है?",
    options: [
      { id: "A", textEn: "Every learner has unique abilities, learning styles, and background", textHi: "प्रत्येक शिक्षार्थी की योग्यता, गति, सीखने की शैली और पृष्ठभूमि अद्वितीय होती है" },
      { id: "B", textEn: "All students must be treated with one uniform rigid method", textHi: "सभी को एक ही कठोर विधि से पढ़ाना चाहिए" },
      { id: "C", textEn: "Differences should be eliminated through punishment", textHi: "विभिन्नताओं को समाप्त कर देना चाहिए" },
      { id: "D", textEn: "Slower students should be expelled", textHi: "धीमे बच्चों को निकाल देना चाहिए" }
    ],
    correctAnswer: "A",
    explanation: "Individual differences encompass variations in cognitive, physical, affective, and linguistic traits requiring differentiated instruction."
  },
  {
    id: 20,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Which teaching-learning approach was advocated by American pragmatist John Dewey?",
    questionHi: "अमेरिकी शिक्षाविद जॉन डीवी ने किस शिक्षण दृष्टिकोण का समर्थन किया था?",
    options: [
      { id: "A", textEn: "Progressive Education and 'Learning by Doing'", textHi: "प्रगतिशील शिक्षा और 'करके सीखना' (Learning by Doing)" },
      { id: "B", textEn: "Authoritarian lecture method", textHi: "अधिनायकवादी व्याख्यान विधि" },
      { id: "C", textEn: "Passive textbook memorization", textHi: "निष्क्रिय पाठ्यपुस्तक रटन" },
      { id: "D", textEn: "Strict religious dogma", textHi: "धार्मिक रूढ़िवादिता" }
    ],
    correctAnswer: "A",
    explanation: "John Dewey founded Progressive Education, viewing schools as democratic communities where students learn by doing and solving real problems."
  },
  {
    id: 21,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Erik Erikson's psychosocial crisis for school-age children (6 to 12 years) is:",
    questionHi: "एरिक एरिक्सन के अनुसार उत्तर बाल्यावस्था (6 से 12 वर्ष) का मनोसामाजिक संकट कौन सा है?",
    options: [
      { id: "A", textEn: "Industry vs. Inferiority (परिश्रम बनाम हीनता)", textHi: "परिश्रम बनाम हीनता (Industry vs. Inferiority)" },
      { id: "B", textEn: "Trust vs. Mistrust (0 - 1.5 yrs)", textHi: "विश्वास बनाम अविश्वास" },
      { id: "C", textEn: "Autonomy vs. Shame (1.5 - 3 yrs)", textHi: "स्वायत्तता बनाम शर्म" },
      { id: "D", textEn: "Identity vs. Role Confusion (Adolescence)", textHi: "पहचान बनाम पहचान भ्रांति" }
    ],
    correctAnswer: "A",
    explanation: "Children aged 6-12 strive to master academic and social skills; encouragement builds competence (industry), whereas failure brings inferiority."
  },
  {
    id: 22,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What is the primary role of a teacher in a modern constructivist classroom?",
    questionHi: "रचनावादी कक्षा में शिक्षक की प्राथमिक भूमिका क्या होती है?",
    options: [
      { id: "A", textEn: "Facilitator of learning and discovery", textHi: "अधिगम का सुगमकर्ता / सुविधादाता (Facilitator)" },
      { id: "B", textEn: "Dictator of knowledge and commands", textHi: "आदेश देने वाला तानाशाह" },
      { id: "C", textEn: "Passive spectator who does nothing", textHi: "मूक दर्शक" },
      { id: "D", textEn: "Strict grader giving punishment", textHi: "केवल दंड देने वाला" }
    ],
    correctAnswer: "A",
    explanation: "In constructivism, teachers do not transmit information directly; rather, they facilitate collaborative inquiry, problem-solving, and critical thinking."
  },
  {
    id: 23,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Dyscalculia refers to difficulty in:",
    questionHi: "'डिस्कैल्कुलिया' (Dyscalculia) किस प्रकार की अधिगम कठिनाई है?",
    options: [
      { id: "A", textEn: "Mathematical calculations and arithmetic concepts", textHi: "गणितीय गणनाओं और अंकों को समझने में कठिनाई" },
      { id: "B", textEn: "Language reading", textHi: "भाषा पठन" },
      { id: "C", textEn: "Fine motor handwriting", textHi: "हस्तलेखन" },
      { id: "D", textEn: "Hearing spoken words", textHi: "ध्वनि सुनने में" }
    ],
    correctAnswer: "A",
    explanation: "Dyscalculia affects an individual's ability to learn number concepts, perform arithmetic calculations, and grasp mathematical reasoning."
  },
  {
    id: 24,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "At what age do children typically enter the stage of 'Adolescence' marked by identity crisis?",
    questionHi: "बालक किस आयु में किशोरावस्था (Adolescence) में प्रवेश करते हैं, जिसे स्टेनली हॉल ने 'तनाव एवं तूफान की अवस्था' कहा है?",
    options: [
      { id: "A", textEn: "12 to 18 years", textHi: "12 से 18 वर्ष (तनाव एवं तूफान का काल)" },
      { id: "B", textEn: "6 to 10 years", textHi: "6 से 10 वर्ष" },
      { id: "C", textEn: "2 to 5 years", textHi: "2 से 5 वर्ष" },
      { id: "D", textEn: "20 to 25 years", textHi: "20 से 25 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "G. Stanley Hall famously termed adolescence (approx. 12-18 years) a period of 'Storm and Stress' (तनाव एवं तूफान)."
  },
  {
    id: 25,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "A child who can perform complex concrete operations (conservation, seriation, reversibility) is in which Piagetian stage?",
    questionHi: "एक बच्चा जो संरक्षण (Conservation), क्रमबद्धता और प्रतिवर्तीयता की तार्किक संक्रियाएं कर सकता है, पियाजे के किस चरण में है?",
    options: [
      { id: "A", textEn: "Concrete Operational Stage (7 to 11 years)", textHi: "मूर्त-संक्रियात्मक अवस्था (7 से 11 वर्ष)" },
      { id: "B", textEn: "Pre-Operational Stage", textHi: "पूर्व-संक्रियात्मक अवस्था" },
      { id: "C", textEn: "Sensory-Motor Stage", textHi: "संवेदी-गामक अवस्था" },
      { id: "D", textEn: "Formal Operational Stage", textHi: "औपचारिक संक्रियात्मक अवस्था" }
    ],
    correctAnswer: "A",
    explanation: "During the concrete operational stage (7-11 yrs), children acquire logical thinking about tangible events and grasp conservation."
  },
  {
    id: 26,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Continuous and Comprehensive Evaluation (CCE) aims to evaluate:",
    questionHi: "'सतत एवं व्यापक मूल्यांकन' (CCE) का उद्देश्य क्या मापना है?",
    options: [
      { id: "A", textEn: "Both scholastic and co-scholastic holistic development of the child", textHi: "बच्चे के संज्ञानात्मक, भावात्मक और क्रियात्मक सभी पक्षों (शैक्षिक व सह-शैक्षिक) का समग्र विकास" },
      { id: "B", textEn: "Only memorized facts in final exams", textHi: "केवल वार्षिक परीक्षा के अंक" },
      { id: "C", textEn: "Handwriting neatness only", textHi: "केवल लिखावट" },
      { id: "D", textEn: "Discipline and obedience only", textHi: "केवल अनुशासन" }
    ],
    correctAnswer: "A",
    explanation: "CCE emphasizes non-threatening continuous assessment of all aspects of a child's growth (scholastic and co-scholastic)."
  },
  {
    id: 27,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What is 'Egocentrism' according to Jean Piaget?",
    questionHi: "पियाजे के अनुसार 'अहंकेंद्रितता' (Egocentrism) क्या है?",
    options: [
      { id: "A", textEn: "Inability to see a perspective from someone else's point of view", textHi: "दूसरों के दृष्टिकोण को न समझ पाना और यह मानना कि दुनिया वैसी ही है जैसी वह देखता है" },
      { id: "B", textEn: "Selfishness regarding toys", textHi: "खिलौनों के प्रति स्वार्थ" },
      { id: "C", textEn: "Social leadership skill", textHi: "नेतृत्व क्षमता" },
      { id: "D", textEn: "Abstract logical deduction", textHi: "अमूर्त चिंतन" }
    ],
    correctAnswer: "A",
    explanation: "In the preoperational stage, young children demonstrate egocentrism—they assume others see, hear, and feel exactly as they do."
  },
  {
    id: 28,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "Who developed the 'Hierarchy of Needs' theory of human motivation?",
    questionHi: "'आवश्यकता पदानुक्रम' (Hierarchy of Needs) का सिद्धांत किसने प्रस्तुत किया था?",
    options: [
      { id: "A", textEn: "Abraham Maslow", textHi: "अब्राहम मैस्लो (Abraham Maslow)" },
      { id: "B", textEn: "Carl Rogers", textHi: "कार्ल रोजर्स" },
      { id: "C", textEn: "Sigmund Freud", textHi: "सिगमंड फ्रायड" },
      { id: "D", textEn: "Gordon Allport", textHi: "गॉर्डन ऑलपोर्ट" }
    ],
    correctAnswer: "A",
    explanation: "Maslow's pyramid consists of physiological, safety, belonging/love, esteem, and self-actualization needs."
  },
  {
    id: 29,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "What type of reinforcement schedule in operant conditioning produces the highest and most resistant rate of response?",
    questionHi: "क्रिया प्रसूत अनुकूलन में कौन सी पुनर्बलन अनुसूची सबसे स्थायी और उच्च अनुक्रिया दर उत्पन्न करती है?",
    options: [
      { id: "A", textEn: "Variable Ratio schedule (परिवर्तनीय अनुपात अनुसूची)", textHi: "परिवर्तनीय अनुपात अनुसूची (Variable Ratio Schedule)" },
      { id: "B", textEn: "Continuous reinforcement", textHi: "सतत पुनर्बलन" },
      { id: "C", textEn: "Fixed Interval schedule", textHi: "निश्चित अंतराल अनुसूची" },
      { id: "D", textEn: "Fixed Ratio schedule", textHi: "निश्चित अनुपात अनुसूची" }
    ],
    correctAnswer: "A",
    explanation: "Variable ratio reinforcement (like slot machines or lottery) creates the highest response frequency and greatest resistance to extinction."
  },
  {
    id: 30,
    section: "teach_cdp",
    sectionName: "1. Child Development & Pedagogy (बाल विकास)",
    questionEn: "In Gardner's Multiple Intelligences, a poet or novelist has high proficiency in which intelligence?",
    questionHi: "हावर्ड गार्डनर के अनुसार एक लेखक या कवि में किस प्रकार की बुद्धि की प्रधानता होती है?",
    options: [
      { id: "A", textEn: "Linguistic Intelligence (भाषाई बुद्धि)", textHi: "भाषाई बुद्धि (Linguistic Intelligence)" },
      { id: "B", textEn: "Logical-Mathematical Intelligence", textHi: "तार्किक-गणितीय बुद्धि" },
      { id: "C", textEn: "Spatial Intelligence", textHi: "स्थानिक बुद्धि" },
      { id: "D", textEn: "Bodily-Kinesthetic Intelligence", textHi: "शारीरिक-गतिक बुद्धि" }
    ],
    correctAnswer: "A",
    explanation: "Linguistic intelligence involves sensitivity to spoken and written language, vocabulary, rhythm, and expression."
  },

  // =========================================================================
  // SECTION 2: HINDI LANGUAGE & PEDAGOGY / भाषा हिंदी (Q31 - Q60)
  // =========================================================================
  {
    id: 31,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "भाषा शिक्षण में 'पठन कौशल' (Reading Skill) का मुख्य उद्देश्य क्या है?",
    questionHi: "प्राथमिक स्तर पर भाषा शिक्षण में 'पठन कौशल' का सबसे महत्वपूर्ण उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "अर्थ ग्रहण करते हुए पढ़ना", textHi: "अर्थ ग्रहण करते हुए पढ़ना (Comprehension)" },
      { id: "B", textEn: "केवल तीव्र गति से पढ़ना", textHi: "केवल तीव्र गति से पढ़ना" },
      { id: "C", textEn: "कठिन शब्दों का उच्चारण रटना", textHi: "कठिन शब्दों का उच्चारण रटना" },
      { id: "D", textEn: "अक्षरों की पहचान करना मात्र", textHi: "अक्षरों की पहचान करना मात्र" }
    ],
    correctAnswer: "A",
    explanation: "पठन का अर्थ केवल लिपि प्रतीकों का उच्चारण नहीं, अपितु पढ़कर उसका अर्थ एवं भाव ग्रहण करना होता है।"
  },
  {
    id: 32,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "नोआम चॉम्स्की (Noam Chomsky) के अनुसार बच्चों में भाषा अर्जन की क्षमता कैसी होती है?",
    questionHi: "नोआम चॉम्स्की के अनुसार बच्चों में भाषा सीखने की क्षमता कैसी होती है?",
    options: [
      { id: "A", textEn: "जन्मजात (Innate Language Acquisition Device - LAD)", textHi: "जन्मजात (Innate Language Faculty)" },
      { id: "B", textEn: "केवल अभ्यास पर आधारित", textHi: "केवल अभ्यास पर आधारित" },
      { id: "C", textEn: "वातावरण से पूरी तरह सीखी गई", textHi: "वातावरण से पूरी तरह सीखी गई" },
      { id: "D", textEn: "अनुकरण मात्र", textHi: "अनुकरण मात्र" }
    ],
    correctAnswer: "A",
    explanation: "चॉम्स्की का मानना है कि मानव शिशुओं में जन्मजात भाषा अर्जन यंत्र (LAD) और सार्वभौमिक व्याकरण (Universal Grammar) विद्यमान रहता है।"
  },
  {
    id: 33,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "भाषा के चार आधारभूत कौशलों (LSRW) का सही मनोवैज्ञानिक क्रम क्या है?",
    questionHi: "भाषा के चार मुख्य कौशलों का स्वाभाविक एवं मनोवैज्ञानिक क्रम क्या है?",
    options: [
      { id: "A", textEn: "सुनना, बोलना, पढ़ना, लिखना (सु-बो-प-लि)", textHi: "सुनना, बोलना, पढ़ना, लिखना (LSRW)" },
      { id: "B", textEn: "लिखना, पढ़ना, बोलना, सुनना", textHi: "लिखना, पढ़ना, बोलना, सुनना" },
      { id: "C", textEn: "बोलना, सुनना, लिखना, पढ़ना", textHi: "बोलना, सुनना, लिखना, पढ़ना" },
      { id: "D", textEn: "पढ़ना, लिखना, सुनना, बोलना", textHi: "पढ़ना, लिखना, सुनना, बोलना" }
    ],
    correctAnswer: "A",
    explanation: "बच्चा सर्वप्रथम सुनता है (Listening), फिर बोलना सीखता है (Speaking), फिर पढ़ता है (Reading) और अंत में लिखता है (Writing)।"
  },
  {
    id: 34,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is संधि विच्छेद of 'महोत्सव'?",
    questionHi: "'महोत्सव' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "महा + उत्सव (गुण संधि)", textHi: "महा + उत्सव (गुण संधि)" },
      { id: "B", textEn: "मही + उत्सव", textHi: "मही + उत्सव" },
      { id: "C", textEn: "महो + त्सव", textHi: "महो + त्सव" },
      { id: "D", textEn: "महा + त्सव", textHi: "महा + त्सव" }
    ],
    correctAnswer: "A",
    explanation: "आ + उ = ओ (गुण स्वर संधि), अतः महा + उत्सव = महोत्सव।"
  },
  {
    id: 35,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is समास in 'चौराहा'?",
    questionHi: "'चौराहा' (चार राहों का समाहार) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "द्विगु समास (पहला पद संख्यावाचक)", textHi: "द्विगु समास (संख्यावाचक विशेषण)" },
      { id: "B", textEn: "द्वन्द्व समास", textHi: "द्वन्द्व समास" },
      { id: "C", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "D", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" }
    ],
    correctAnswer: "A",
    explanation: "जिस समास का पूर्व पद संख्याबोधक विशेषण हो तथा समस्त पद समूह का बोध कराए, वहाँ द्विगु समास होता है।"
  },
  {
    id: 36,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "बहुभाषिकता (Multilingualism) को कक्षा में किस रूप में देखा जाना चाहिए?",
    questionHi: "कक्षा में विद्यार्थियों की भाषाई विविधता (बहुभाषिकता) को किस रूप में देखा जाना चाहिए?",
    options: [
      { id: "A", textEn: "एक महत्वपूर्ण संसाधन (Resource)", textHi: "एक महत्वपूर्ण शैक्षिक संसाधन के रूप में" },
      { id: "B", textEn: "शिक्षण में बहुत बड़ी बाधा", textHi: "शिक्षण में बहुत बड़ी बाधा" },
      { id: "C", textEn: "कक्षा की अनुशासनहीनता", textHi: "कक्षा की अनुशासनहीनता" },
      { id: "D", textEn: "एक समस्या जिसे समाप्त करना है", textHi: "एक समस्या जिसे समाप्त करना है" }
    ],
    correctAnswer: "A",
    explanation: "NCF-2005 के अनुसार बहुभाषिकता कक्षा का समृद्ध संसाधन है जो बच्चों के संज्ञानात्मक और सांस्कृतिक विकास को पुष्ट करती है।"
  },
  {
    id: 37,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is the विलोम of 'अनुराग'?",
    questionHi: "'अनुराग' शब्द का सही विलोम क्या होगा?",
    options: [
      { id: "A", textEn: "विराग (Virag)", textHi: "विराग" },
      { id: "B", textEn: "द्वेष", textHi: "द्वेष" },
      { id: "C", textEn: "घृणा", textHi: "घृणा" },
      { id: "D", textEn: "क्रोध", textHi: "क्रोध" }
    ],
    correctAnswer: "A",
    explanation: "'अनुराग' (प्रेम/आसक्ति) का विलोम शब्द 'विराग' (उदासीनता/अनासक्ति) होता है।"
  },
  {
    id: 38,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "प्राथमिक स्तर पर बच्चों की भाषाई प्रगति का आकलन करने का सर्वाधिक उपयुक्त साधन कौन सा है?",
    questionHi: "प्राथमिक स्तर पर बच्चों की भाषा विकास का क्रमिक रिकॉर्ड रखने के लिए सबसे प्रभावी उपकरण कौन सा है?",
    options: [
      { id: "A", textEn: "पोर्टफोलियो (Portfolio)", textHi: "पोर्टफोलियो (Portfolio)" },
      { id: "B", textEn: "सत्रान्त लिखित परीक्षा", textHi: "सत्रान्त लिखित परीक्षा" },
      { id: "C", textEn: "मौखिक प्रश्नोत्तरी मात्र", textHi: "मौखिक प्रश्नोत्तरी मात्र" },
      { id: "D", textEn: "गृहकार्य की जांच", textHi: "गृहकार्य की जांच" }
    ],
    correctAnswer: "A",
    explanation: "पोर्टफोलियो में बच्चे के समय के साथ किए गए वास्तविक कार्यों का संकलन होता है जिससे उसके क्रमिक विकास का प्रमाणिक आकलन होता है।"
  },
  {
    id: 39,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is synonym of 'कमल' (Lotus)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'कमल' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "जलज / पंकज / नीरज", textHi: "जलज / पंकज / राजीव" },
      { id: "B", textEn: "जलद (बादल)", textHi: "जलद" },
      { id: "C", textEn: "जलधि (समुद्र)", textHi: "जलधि" },
      { id: "D", textEn: "पयोधर", textHi: "पयोधर" }
    ],
    correctAnswer: "A",
    explanation: "कमल के पर्यायवाची: जलज, पंकज, नीरज, सरोज, अरविंद, राजीव हैं।"
  },
  {
    id: 40,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "'आगमन विधि' (Inductive Method) में शिक्षण किस दिशा में अग्रसर होता है?",
    questionHi: "भाषा शिक्षण की 'आगमन विधि' (Inductive Method) में सूत्र किस ओर बढ़ता है?",
    options: [
      { id: "A", textEn: "उदाहरण से नियम की ओर (Example to Rule)", textHi: "उदाहरण से नियम की ओर" },
      { id: "B", textEn: "नियम से उदाहरण की ओर (निगमन विधि)", textHi: "नियम से उदाहरण की ओर" },
      { id: "C", textEn: "कठिन से सरल की ओर", textHi: "कठिन से सरल की ओर" },
      { id: "D", textEn: "अमूर्त से मूर्त की ओर", textHi: "अमूर्त से मूर्त की ओर" }
    ],
    correctAnswer: "A",
    explanation: "आगमन विधि में पहले अनेक मूर्त उदाहरण प्रस्तुत किए जाते हैं, फिर छात्र स्वयं निष्कर्ष निकालकर सामान्य नियम बनाते हैं।"
  },
  {
    id: 41,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is शुद्ध वर्तनी of the word?",
    questionHi: "निम्न में से शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "आशीर्वाद", textHi: "आशीर्वाद" },
      { id: "B", textEn: "आशिर्वाद", textHi: "आशिर्वाद" },
      { id: "C", textEn: "आशीर्बाद", textHi: "आशीर्बाद" },
      { id: "D", textEn: "आशिरवाद", textHi: "आशिरवाद" }
    ],
    correctAnswer: "A",
    explanation: "शुद्ध वर्तनी 'आशीर्वाद' है (रेफ 'व' के ऊपर लगता है)।"
  },
  {
    id: 42,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "भाषा अर्जन (Language Acquisition) और भाषा अधिगम (Language Learning) में मुख्य अंतर क्या है?",
    questionHi: "'भाषा अर्जन' और 'भाषा अधिगम' में मुख्य अंतर क्या होता है?",
    options: [
      { id: "A", textEn: "सहजता एवं स्वाभाविक परिवेश का (अर्जन सहज होता है, अधिगम प्रयासपूर्ण)", textHi: "सहजता एवं स्वाभाविक परिवेश का" },
      { id: "B", textEn: "केवल पाठ्यपुस्तक का", textHi: "केवल पाठ्यपुस्तक का" },
      { id: "C", textEn: "व्याकरण के नियमों का मात्र", textHi: "व्याकरण के नियमों का" },
      { id: "D", textEn: "शिक्षक के वेतन का", textHi: "शिक्षक के वेतन का" }
    ],
    correctAnswer: "A",
    explanation: "मातृभाषा का अर्जन अनौपचारिक परिवेश में स्वतः और सहज होता है, जबकि द्वितीय भाषा का अधिगम औपचारिक रूप से प्रयासपूर्ण होता है।"
  },
  {
    id: 43,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is संधि विच्छेद of 'इत्यादि'?",
    questionHi: "'इत्यादि' का सही संधि-विच्छेद क्या है?",
    options: [
      { id: "A", textEn: "इति + आदि (यण स्वर संधि)", textHi: "इति + आदि (यण स्वर संधि)" },
      { id: "B", textEn: "इत्या + दि", textHi: "इत्या + दि" },
      { id: "C", textEn: "इत् + आदि", textHi: "इत् + आदि" },
      { id: "D", textEn: "इती + आदि", textHi: "इती + आदि" }
    ],
    correctAnswer: "A",
    explanation: "इ/ई के बाद कोई भिन्न स्वर आने पर इ का 'य्' हो जाता है (यण संधि), अतः इति + आदि = इत्यादि।"
  },
  {
    id: 44,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is समास in 'माता-पिता'?",
    questionHi: "'माता-पिता' में कौन सा समास है?",
    options: [
      { id: "A", textEn: "द्वन्द्व समास (दोनों पद प्रधान)", textHi: "द्वन्द्व समास (माता और पिता)" },
      { id: "B", textEn: "द्विगु समास", textHi: "द्विगु समास" },
      { id: "C", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "D", textEn: "अव्ययीभाव समास", textHi: "अव्ययीभाव समास" }
    ],
    correctAnswer: "A",
    explanation: "जिस समास के दोनों पद प्रधान हों और विग्रह करने पर 'और' या 'या' लगे, उसे द्वन्द्व समास कहते हैं।"
  },
  {
    id: 45,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "उपचारात्मक शिक्षण (Remedial Teaching) का मुख्य उद्देश्य क्या है?",
    questionHi: "'उपचारात्मक शिक्षण' (Remedial Teaching) किसके बाद और किसलिए किया जाता है?",
    options: [
      { id: "A", textEn: "निदानात्मक परीक्षण के बाद अधिगम की कमियों को दूर करने हेतु", textHi: "अधिगम की कठिनाइयों और कमियों का निवारण करने हेतु" },
      { id: "B", textEn: "तेज बच्चों को और तेज करने हेतु", textHi: "केवल तेज बच्चों के लिए" },
      { id: "C", textEn: "कक्षा में सजा देने हेतु", textHi: "सजा देने हेतु" },
      { id: "D", textEn: "परीक्षा रद्द करने हेतु", textHi: "परीक्षा रद्द करने हेतु" }
    ],
    correctAnswer: "A",
    explanation: "निदान (Diagnosis) द्वारा पहचानी गई अधिगम की कमियों को विशेष उपचारात्मक विधियों द्वारा दूर किया जाता है।"
  },
  {
    id: 46,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is synonym of 'सूर्य' (Sun)?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'सूर्य' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "दिनकर / भानु / भास्कर", textHi: "दिनकर / भानु / भास्कर" },
      { id: "B", textEn: "शशि", textHi: "शशि (चंद्रमा)" },
      { id: "C", textEn: "निशाकर", textHi: "निशाकर" },
      { id: "D", textEn: "राकेश", textHi: "राकेश" }
    ],
    correctAnswer: "A",
    explanation: "सूर्य के पर्यायवाची: दिनकर, दिवाकर, भानु, भास्कर, रवि, सविता हैं।"
  },
  {
    id: 47,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "बच्चों के भाषा प्रयोग में त्रुटियां (Errors) किस बात का संकेत हैं?",
    questionHi: "बच्चों द्वारा भाषा प्रयोग में की जाने वाली त्रुटियां किस बात की परिचायक हैं?",
    options: [
      { id: "A", textEn: "सीखने की प्रक्रिया का स्वाभाविक पड़ाव (Windows to learning)", textHi: "वे सीखने की स्वाभाविक प्रक्रिया का एक अभिन्न अंग हैं" },
      { id: "B", textEn: "बच्चे की बुद्धि कम होने का संकेत", textHi: "बच्चे की बुद्धि कम है" },
      { id: "C", textEn: "शिक्षक की पूरी विफलता", textHi: "शिक्षक की विफलता" },
      { id: "D", textEn: "कठोर दंड देने की आवश्यकता", textHi: "कठोर दंड की आवश्यकता" }
    ],
    correctAnswer: "A",
    explanation: "त्रुटियां अधिगम का स्वाभाविक हिस्सा हैं जो यह दर्शाती हैं कि बच्चा सक्रिय रूप से नियमों का निर्माण और प्रयोग कर रहा है।"
  },
  {
    id: 48,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is the विलोम of 'सुलभ' (Easily available)?",
    questionHi: "'सुलभ' शब्द का सही विलोम क्या है?",
    options: [
      { id: "A", textEn: "दुर्लभ (Durlabh)", textHi: "दुर्लभ" },
      { id: "B", textEn: "अप्राप्य", textHi: "अप्राप्य" },
      { id: "C", textEn: "कठिन", textHi: "कठिन" },
      { id: "D", textEn: "दुष्कर", textHi: "दुष्कर" }
    ],
    correctAnswer: "A",
    explanation: "'सुलभ' (आसानी से मिलने वाला) का विलोम 'दुर्लभ' (कठिनाई से मिलने वाला) होता है।"
  },
  {
    id: 49,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "कविता शिक्षण का मुख्य उद्देश्य क्या होता है?",
    questionHi: "प्राथमिक और उच्च प्राथमिक स्तर पर 'कविता शिक्षण' का मुख्य उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "रसानुभूति, सौंदर्यबोध और आनंद की अनुभूति कराना", textHi: "रसानुभूति, भाव-सौंदर्य और कल्पना शक्ति का विकास" },
      { id: "B", textEn: "कठिन व्याकरण नियमों को रटना", textHi: "व्याकरण के नियम रटना" },
      { id: "C", textEn: "केवल शब्दार्थ याद कराना", textHi: "केवल शब्दार्थ याद कराना" },
      { id: "D", textEn: "परीक्षा में शत-प्रतिशत अंक दिलाना मात्र", textHi: "परीक्षा में अंक दिलाना" }
    ],
    correctAnswer: "A",
    explanation: "कविता भाव-प्रधान होती है, अतः कविता शिक्षण का मुख्य उद्देश्य रसानुभूति, संगीतात्मकता और सौंदर्यबोध जगाना है।"
  },
  {
    id: 50,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is संधि विच्छेद of 'सज्जन'?",
    questionHi: "'सज्जन' का सही संधि-विच्छेद क्या होगा?",
    options: [
      { id: "A", textEn: "सत् + जन (व्यंजन संधि)", textHi: "सत् + जन (व्यंजन संधि)" },
      { id: "B", textEn: "सज + जन", textHi: "सज + जन" },
      { id: "C", textEn: "सद + जन", textHi: "सद + जन" },
      { id: "D", textEn: "सत् + न", textHi: "सत् + न" }
    ],
    correctAnswer: "A",
    explanation: "त् के बाद 'ज' आने पर त् का 'ज्' हो जाता है (त् + ज = ज्ज), अतः सत् + जन = सज्जन।"
  },
  {
    id: 51,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is समास in 'राजपुत्र'?",
    questionHi: "'राजपुत्र' (राजा का पुत्र) में कौन सा समास है?",
    options: [
      { id: "A", textEn: "संबंध तत्पुरुष समास", textHi: "संबंध तत्पुरुष समास" },
      { id: "B", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" },
      { id: "C", textEn: "बहुव्रीहि समास", textHi: "बहुव्रीहि समास" },
      { id: "D", textEn: "अव्ययीभाव समास", textHi: "अव्ययीभाव समास" }
    ],
    correctAnswer: "A",
    explanation: "विग्रह 'राजा का पुत्र' होने पर संबंध कारक की विभक्ति 'का' का लोप होता है, अतः संबंध तत्पुरुष समास है।"
  },
  {
    id: 52,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "सतत आकलन (Continuous Assessment) का क्या उद्देश्य है?",
    questionHi: "कक्षा में सतत आकलन का मूल प्रयोजन क्या है?",
    options: [
      { id: "A", textEn: "यह जानना कि बच्चे कैसे सीखते हैं और उन्हें कहाँ मदद चाहिए", textHi: "यह जानना कि बच्चे कैसे सीखते हैं और उन्हें कहाँ सहायता चाहिए" },
      { id: "B", textEn: "बच्चों को पास या फेल में वर्गीकृत करना", textHi: "बच्चों को पास/फेल में बांटना" },
      { id: "C", textEn: "अभिभावकों पर दबाव बनाना", textHi: "अभिभावकों पर दबाव बनाना" },
      { id: "D", textEn: "प्रतिदिन अंक तालिका तैयार करना", textHi: "प्रतिदिन अंक तालिका बनाना" }
    ],
    correctAnswer: "A",
    explanation: "सतत आकलन शिक्षण-अधिगम प्रक्रिया का हिस्सा है जिसका उद्देश्य बच्चे के सीखने के स्तर और आवश्यकताओं को समझना है।"
  },
  {
    id: 53,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is synonym of 'अमृत'?",
    questionHi: "निम्नलिखित में से कौन सा शब्द 'अमृत' का पर्यायवाची है?",
    options: [
      { id: "A", textEn: "सुधा / पीयूष / सोम", textHi: "सुधा / पीयूष / सोम" },
      { id: "B", textEn: "गरल (विष)", textHi: "गरल" },
      { id: "C", textEn: "हलाहल", textHi: "हलाहल" },
      { id: "D", textEn: "कालकूट", textHi: "कालकूट" }
    ],
    correctAnswer: "A",
    explanation: "अमृत के पर्यायवाची: सुधा, पीयूष, सोम, अमिय हैं। गरल, हलाहल विष के पर्यायवाची हैं।"
  },
  {
    id: 54,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is one-word substitution for: 'जो कभी बूढ़ा न हो'?",
    questionHi: "'जो कभी बूढ़ा न हो' वाक्यांश के लिए एक शब्द है:",
    options: [
      { id: "A", textEn: "अजर (Ajar)", textHi: "अजर" },
      { id: "B", textEn: "अमर (जो कभी न मरे)", textHi: "अमर" },
      { id: "C", textEn: "अविनाशी", textHi: "अविनाशी" },
      { id: "D", textEn: "अक्षय", textHi: "अक्षय" }
    ],
    correctAnswer: "A",
    explanation: "जो कभी बूढ़ा न हो उसे 'अजर' कहते हैं, और जो कभी मरे नहीं उसे 'अमर' कहते हैं।"
  },
  {
    id: 55,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is the विलोम of 'प्रत्यक्ष' (Direct/Visible)?",
    questionHi: "'प्रत्यक्ष' शब्द का सही विलोम क्या है?",
    options: [
      { id: "A", textEn: "परोक्ष / अप्रत्यक्ष", textHi: "परोक्ष (अप्रत्यक्ष)" },
      { id: "B", textEn: "सामने", textHi: "सामने" },
      { id: "C", textEn: "दिखने वाला", textHi: "दिखने वाला" },
      { id: "D", textEn: "स्पष्ट", textHi: "स्पष्ट" }
    ],
    correctAnswer: "A",
    explanation: "'प्रत्यक्ष' (आंखों के सामने) का विलोम 'परोक्ष' (आंखों से ओझल) होता है।"
  },
  {
    id: 56,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "मुहावरे 'आस्तीन का सांप' का क्या अर्थ है?",
    questionHi: "मुहावरे 'आस्तीन का सांप' का सही अर्थ क्या है?",
    options: [
      { id: "A", textEn: "कपटपूर्ण मित्र / धोखेबाज साथी", textHi: "कपटपूर्ण मित्र / विश्वासघाती साथी" },
      { id: "B", textEn: "सांप पालना", textHi: "सांप पालना" },
      { id: "C", textEn: "जहरीला व्यक्ति", textHi: "जहरीला व्यक्ति" },
      { id: "D", textEn: "बहादुर व्यक्ति", textHi: "बहादुर व्यक्ति" }
    ],
    correctAnswer: "A",
    explanation: "'आस्तीन का सांप' का अर्थ साथ रहकर गुप्त रूप से हानि पहुँचाने वाला कपटी मित्र होता है।"
  },
  {
    id: 57,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is शुद्ध वर्तनी of the word?",
    questionHi: "निम्न में से शुद्ध वर्तनी वाले शब्द की पहचान कीजिए:",
    options: [
      { id: "A", textEn: "श्रृंगार (शुद्ध रूप: शृंगार)", textHi: "शृंगार" },
      { id: "B", textEn: "शिरंगार", textHi: "शिरंगार" },
      { id: "C", textEn: "स्रंगार", textHi: "स्रंगार" },
      { id: "D", textEn: "शृंगार्य", textHi: "शृंगार्य" }
    ],
    correctAnswer: "A",
    explanation: "शुद्ध वर्तनी 'शृंगार' (श में ऋ की मात्रा) होती है।"
  },
  {
    id: 58,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "उच्च प्राथमिक स्तर पर व्याकरण शिक्षण की सबसे उपयुक्त विधि कौन सी है?",
    questionHi: "व्याकरण शिक्षण की सर्वोत्तम विधि कौन सी मानी जाती है?",
    options: [
      { id: "A", textEn: "आगमन-निगमन विधि (Inductive-Deductive Method)", textHi: "आगमन-निगमन विधि (Inductive-Deductive)" },
      { id: "B", textEn: "केवल कंठस्थीकरण विधि", textHi: "केवल रटाना" },
      { id: "C", textEn: "पाठ्यपुस्तक विधि मात्र", textHi: "पाठ्यपुस्तक विधि" },
      { id: "D", textEn: "सूत्र विधि मात्र", textHi: "सूत्र विधि" }
    ],
    correctAnswer: "A",
    explanation: "आगमन द्वारा उदाहरणों से नियम निकलवाना और फिर निगमन द्वारा उनका अभ्यास कराना सबसे वैज्ञानिक दृष्टिकोण है।"
  },
  {
    id: 59,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "What is समास in 'नीलकंठ' (नीला है कंठ जिसका अर्थात् शिव)?",
    questionHi: "'नीलकंठ' में कौन सा समास है?",
    options: [
      { id: "A", textEn: "बहुव्रीहि समास", textHi: "बहुव्रीहि समास" },
      { id: "B", textEn: "कर्मधारय समास", textHi: "कर्मधारय समास" },
      { id: "C", textEn: "तत्पुरुष समास", textHi: "तत्पुरुष समास" },
      { id: "D", textEn: "द्विगु समास", textHi: "द्विगु समास" }
    ],
    correctAnswer: "A",
    explanation: "जब दोनों पद मिलकर भगवान शिव (अन्य पद) की ओर संकेत करते हैं, तो बहुव्रीहि समास होता है।"
  },
  {
    id: 60,
    section: "teach_hindi",
    sectionName: "2. Hindi Language & Pedagogy (भाषा हिंदी)",
    questionEn: "बच्चे भाषा सीखने की क्षमता के साथ पैदा होते हैं - यह विचार किसका है?",
    questionHi: "'बच्चे भाषा सीखने की जन्मजात क्षमता के साथ जन्म लेते हैं' - यह कथन किसका है?",
    options: [
      { id: "A", textEn: "नोआम चॉम्स्की (Noam Chomsky)", textHi: "नोआम चॉम्स्की" },
      { id: "B", textEn: "जीन पियाजे", textHi: "जीन पियाजे" },
      { id: "C", textEn: "बी.एफ. स्किनर", textHi: "बी.एफ. स्किनर" },
      { id: "D", textEn: "इवान पावलव", textHi: "इवान पावलव" }
    ],
    correctAnswer: "A",
    explanation: "नोआम चॉम्स्की का भाषा विकास का जन्मजातवादी सिद्धांत (Innatist Theory) यह प्रतिपादित करता है।"
  },

  // =========================================================================
  // SECTION 3: ENVIRONMENTAL STUDIES / EVS (Q61 - Q80)
  // =========================================================================
  {
    id: 61,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which of the following birds weaves a hanging nest with intricate loops and knots?",
    questionHi: "निम्नलिखित में से कौन सा पक्षी लटकता हुआ सुंदर घोंसला बुनता है?",
    options: [
      { id: "A", textEn: "Weaver Bird (बया / बीवर पक्षी)", textHi: "बया (Weaver Bird)" },
      { id: "B", textEn: "Sparrow", textHi: "गौरैया" },
      { id: "C", textEn: "Crow", textHi: "कौवा" },
      { id: "D", textEn: "Dove", textHi: "फाख्ता" }
    ],
    correctAnswer: "A",
    explanation: "Male weaver birds (Baya) weave hanging retort-shaped nests out of grass strips to attract females."
  },
  {
    id: 62,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "In which state of India is the festival of 'Bihu' celebrated to mark harvest?",
    questionHi: "फसल कटाई पर मनाया जाने वाला प्रसिद्ध 'बिहू' (Bihu) त्योहार किस राज्य से संबंधित है?",
    options: [
      { id: "A", textEn: "Assam", textHi: "असम (Assam)" },
      { id: "B", textEn: "Kerala (Onam)", textHi: "केरल" },
      { id: "C", textEn: "Tamil Nadu (Pongal)", textHi: "तमिलनाडु" },
      { id: "D", textEn: "Punjab (Baisakhi)", textHi: "पंजाब" }
    ],
    correctAnswer: "A",
    explanation: "Rongali, Kongali, and Bhogali Bihu are the prime agrarian festivals of Assam."
  },
  {
    id: 63,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Who was the leader of the famous 'Chipko Movement' started in Chamoli (Uttarakhand) in 1973?",
    questionHi: "1973 में चमोली (उत्तराखंड) में पेड़ों की कटाई रोकने हेतु शुरू हुए 'चिपको आंदोलन' के प्रणेता कौन थे?",
    options: [
      { id: "A", textEn: "Sunderlal Bahuguna & Chandi Prasad Bhatt", textHi: "सुंदरलाल बहुगुणा और चंडी प्रसाद भट्ट" },
      { id: "B", textEn: "Medha Patkar (Narmada Bachao)", textHi: "मेधा पाटकर" },
      { id: "C", textEn: "Baba Amte", textHi: "बाबा आमटे" },
      { id: "D", textEn: "Salim Ali", textHi: "सलीम अली" }
    ],
    correctAnswer: "A",
    explanation: "Villagers led by Gaura Devi, Chandi Prasad Bhatt, and Sunderlal Bahuguna hugged trees to prevent commercial logging."
  },
  {
    id: 64,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which insectivorous pitcher plant traps and eats frogs, mice, and insects?",
    questionHi: "कौन सा कीटभक्षी पौधा (Pitcher Plant) कीड़े-मकोड़ों, मेंढकों और चूहों को फंसाकर खा जाता है?",
    options: [
      { id: "A", textEn: "Nepenthes (नेपेंथीस / घटपर्णी)", textHi: "नेपेंथीस / घटपर्णी (Nepenthes khasiana)" },
      { id: "B", textEn: "Cactus", textHi: "कैक्टस" },
      { id: "C", textEn: "Cuscuta (अमरबेल)", textHi: "अमरबेल" },
      { id: "D", textEn: "Algae", textHi: "शैवाल" }
    ],
    correctAnswer: "A",
    explanation: "Nepenthes khasiana, found in Meghalaya, grows in nitrogen-deficient soil and traps insects to absorb nitrogen."
  },
  {
    id: 65,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which disease is transmitted by the bite of a female Anopheles mosquito?",
    questionHi: "मादा एनाफिलीज़ मच्छर के काटने से कौन सा संक्रामक रोग फैलता है?",
    options: [
      { id: "A", textEn: "Malaria (Plasmodium parasite)", textHi: "मलेरिया (Malaria)" },
      { id: "B", textEn: "Dengue (Aedes mosquito)", textHi: "डेंगू" },
      { id: "C", textEn: "Chikungunya", textHi: "चिकनगुनिया" },
      { id: "D", textEn: "Cholera", textHi: "हैजा" }
    ],
    correctAnswer: "A",
    explanation: "Sir Ronald Ross discovered in Secunderabad that female Anopheles mosquitoes transmit the Plasmodium parasite causing malaria."
  },
  {
    id: 66,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "In which region of India are houses made with thick mud walls and thorny bush roofs to cope with extreme heat?",
    questionHi: "अत्यधिक गर्मी से बचने के लिए मिट्टी की मोटी दीवारें और कटीली झाड़ियों की छतें किस राज्य के पारंपरिक घरों में बनाई जाती हैं?",
    options: [
      { id: "A", textEn: "Rajasthan (Desert villages)", textHi: "राजस्थान के ग्रामीण क्षेत्रों में" },
      { id: "B", textEn: "Assam (बांस के खंभों पर)", textHi: "असम" },
      { id: "C", textEn: "Ladakh (पत्थर के दो मंजिला)", textHi: "लद्दाख" },
      { id: "D", textEn: "Goa", textHi: "गोवा" }
    ],
    correctAnswer: "A",
    explanation: "Thick mud walls insulate against desert heat during summer days in Rajasthan."
  },
  {
    id: 67,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "What is 'Torang' in the Kuduk language spoken by tribal communities in Jharkhand?",
    questionHi: "झारखंड की कुडुख भाषा में 'तोरंग' (Torang) का क्या अर्थ होता है?",
    options: [
      { id: "A", textEn: "Forest (जंगल)", textHi: "जंगल (Forest)" },
      { id: "B", textEn: "River", textHi: "नदी" },
      { id: "C", textEn: "Dance", textHi: "नृत्य" },
      { id: "D", textEn: "House", textHi: "घर" }
    ],
    correctAnswer: "A",
    explanation: "In Kuduk language (Suryamani's Torang center in Jharkhand), 'Torang' means the sacred forest."
  },
  {
    id: 68,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which animal spends almost 17 hours a day sleeping while hanging upside down on tree branches?",
    questionHi: "कौन सा स्तनपायी जानवर दिन के लगभग 17 घंटे पेड़ की शाखा पर उल्टा लटककर सोता है और भालू जैसा दिखता है?",
    options: [
      { id: "A", textEn: "Sloth (स्लॉथ)", textHi: "स्लॉथ (Sloth)" },
      { id: "B", textEn: "Chimpanzee", textHi: "चिम्पैंजी" },
      { id: "C", textEn: "Panda", textHi: "पांडा" },
      { id: "D", textEn: "Koala", textHi: "कोआला" }
    ],
    correctAnswer: "A",
    explanation: "Sloths live around 40 years, move to only about 8 trees in their lifetime, and sleep 17 hours upside down daily."
  },
  {
    id: 69,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "What is the primary objective of teaching Environmental Studies (EVS) at the primary stage?",
    questionHi: "प्राथमिक स्तर पर पर्यावरण अध्ययन (EVS) पढ़ाने का मुख्य उद्देश्य क्या है?",
    options: [
      { id: "A", textEn: "Connecting the classroom learning with child's immediate natural and social environment", textHi: "कक्षा के अधिगम को बच्चे के वास्तविक प्राकृतिक व सामाजिक परिवेश से जोड़ना" },
      { id: "B", textEn: "Memorizing scientific jargon and formulas", textHi: "वैज्ञानिक शब्दावली और परिभाषाएं रटाना" },
      { id: "C", textEn: "Preparing students exclusively for higher competitive exams", textHi: "केवल प्रतियोगी परीक्षाओं की तैयारी कराना" },
      { id: "D", textEn: "Drawing accurate world maps from memory", textHi: "नक्शे बनाना सिखाना मात्र" }
    ],
    correctAnswer: "A",
    explanation: "EVS fosters environmental sensitivity, observational skills, and contextual understanding by linking classroom concepts with everyday surroundings."
  },
  {
    id: 70,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which is the highest peak of the Nilgiri Mountains?",
    questionHi: "नीलगिरि पर्वत श्रृंखला की सबसे ऊंची चोटी कौन सी है?",
    options: [
      { id: "A", textEn: "Doddabetta (2,637 m)", textHi: "दोद्दाबेट्टा (2,637 मीटर)" },
      { id: "B", textEn: "Anamudi (2,695 m - Anamalai)", textHi: "अनामुडी" },
      { id: "C", textEn: "Guru Shikhar (Aravalli)", textHi: "गुरु शिखर" },
      { id: "D", textEn: "Kalsubai", textHi: "कलसुबाई" }
    ],
    correctAnswer: "A",
    explanation: "Doddabetta is the highest peak in the Nilgiris (Tamil Nadu). Anamudi is the highest in the entire Western Ghats."
  },
  {
    id: 71,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "World Environment Day is observed every year on which date?",
    questionHi: "विश्व पर्यावरण दिवस प्रतिवर्ष किस तिथि को मनाया जाता है?",
    options: [
      { id: "A", textEn: "5 June", textHi: "5 जून (World Environment Day)" },
      { id: "B", textEn: "22 April (Earth Day)", textHi: "22 अप्रैल" },
      { id: "C", textEn: "16 September (Ozone Day)", textHi: "16 सितंबर" },
      { id: "D", textEn: "22 March (Water Day)", textHi: "22 मार्च" }
    ],
    correctAnswer: "A",
    explanation: "5 June was established as World Environment Day by the UN at the Stockholm Conference on Human Environment in 1972."
  },
  {
    id: 72,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which gas in the atmosphere is the main supporter of combustion?",
    questionHi: "वायुमंडल में कौन सी गैस दहन (जलने) के लिए अनिवार्य रूप से आवश्यक है?",
    options: [
      { id: "A", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन (O2)" },
      { id: "B", textEn: "Nitrogen (N2)", textHi: "नाइट्रोजन" },
      { id: "C", textEn: "Carbon Dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड" },
      { id: "D", textEn: "Argon", textHi: "आर्गन" }
    ],
    correctAnswer: "A",
    explanation: "Oxygen supports combustion and is required for cellular respiration."
  },
  {
    id: 73,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which vitamin deficiency causes Scurvy, characterized by bleeding gums?",
    questionHi: "मसूड़ों से खून आना और घाव न भरना किस विटामिन की कमी के लक्षण हैं?",
    options: [
      { id: "A", textEn: "Vitamin C (Ascorbic acid)", textHi: "विटामिन C (स्कर्वी)" },
      { id: "B", textEn: "Vitamin D (Rickets)", textHi: "विटामिन D" },
      { id: "C", textEn: "Vitamin K", textHi: "विटामिन K" },
      { id: "D", textEn: "Vitamin B", textHi: "विटामिन B" }
    ],
    correctAnswer: "A",
    explanation: "Vitamin C (found in citrus fruits, amla) is necessary for collagen synthesis; deficiency causes scurvy."
  },
  {
    id: 74,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which of the following is an abiotic component (अजैव घटक) of an ecosystem?",
    questionHi: "पारिस्थितिक तंत्र का 'अजैव घटक' (Abiotic Component) कौन सा है?",
    options: [
      { id: "A", textEn: "Soil, Water, Sunlight, Temperature", textHi: "मृदा, जल, प्रकाश एवं तापमान" },
      { id: "B", textEn: "Plants (Autotrophs)", textHi: "पौधे" },
      { id: "C", textEn: "Animals (Consumers)", textHi: "पशु" },
      { id: "D", textEn: "Fungi and Bacteria (Decomposers)", textHi: "कवक और जीवाणु" }
    ],
    correctAnswer: "A",
    explanation: "Abiotic factors are non-living physical and chemical components like sunlight, soil, water, air, and minerals."
  },
  {
    id: 75,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Which Indian state has the highest population of Asiatic Lions in Gir National Park?",
    questionHi: "गिर राष्ट्रीय उद्यान में पाए जाने वाले 'एशियाई शेरों' (Asiatic Lions) का एकमात्र प्राकृतिक आवास किस राज्य में है?",
    options: [
      { id: "A", textEn: "Gujarat (Gir Forest)", textHi: "गुजरात (Gir National Park)" },
      { id: "B", textEn: "Madhya Pradesh", textHi: "मध्य प्रदेश" },
      { id: "C", textEn: "Rajasthan", textHi: "राजस्थान" },
      { id: "D", textEn: "Maharashtra", textHi: "महाराष्ट्र" }
    ],
    correctAnswer: "A",
    explanation: "Gir National Park in Gujarat is the world's only natural sanctuary for Asiatic Lions (Panthera leo leo)."
  },
  {
    id: 76,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "Deficiency of which mineral in human diet causes Goitre (घेंघा रोग)?",
    questionHi: "मानव आहार में किस खनिज की कमी से थायरॉयड ग्रंथि का आकार बढ़कर घेंघा (Goitre) रोग हो जाता है?",
    options: [
      { id: "A", textEn: "Iodine", textHi: "आयोडीन (Iodine)" },
      { id: "B", textEn: "Iron (Anaemia)", textHi: "आयरन / लोहा" },
      { id: "C", textEn: "Calcium", textHi: "कैल्शियम" },
      { id: "D", textEn: "Phosphorus", textHi: "फास्फोरस" }
    ],
    correctAnswer: "A",
    explanation: "Iodine is vital for synthesizing thyroxine hormone in the thyroid gland; deficiency causes simple goitre."
  },
  {
    id: 77,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "What is 'Jhum Cultivation' (झूम खेती)?",
    questionHi: "'झूम खेती' (Jhum Cultivation / Shifting Agriculture) का क्या स्वरूप है?",
    options: [
      { id: "A", textEn: "Slash and burn shifting agriculture practiced in North-East India", textHi: "कतरन और दहन (Slash and burn) स्थानांतरित कृषि" },
      { id: "B", textEn: "Terrace step farming on mountains", textHi: "सीढ़ीदार खेती" },
      { id: "C", textEn: "Chemical intensive farming", textHi: "रासायनिक सघन खेती" },
      { id: "D", textEn: "Hydroponics in water", textHi: "जल कृषि" }
    ],
    correctAnswer: "A",
    explanation: "Jhum is traditional shifting cultivation where plots of forest are slashed and burned to enrich soil with ash before planting crops."
  },
  {
    id: 78,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "In the food chain: Grass -> Grasshopper -> Frog -> Snake -> Eagle, what is the primary consumer?",
    questionHi: "खाद्य श्रृंखला: घास -> टिड्डा -> मेंढक -> सांप -> चील में 'प्राथमिक उपभोक्ता' कौन है?",
    options: [
      { id: "A", textEn: "Grasshopper (टिड्डा)", textHi: "टिड्डा (Grasshopper)" },
      { id: "B", textEn: "Grass (Producer)", textHi: "घास (उत्पादक)" },
      { id: "C", textEn: "Frog (Secondary consumer)", textHi: "मेंढक" },
      { id: "D", textEn: "Snake", textHi: "सांप" }
    ],
    correctAnswer: "A",
    explanation: "Grass is the primary producer; the herbivorous grasshopper feeding directly on grass is the primary consumer."
  },
  {
    id: 79,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "What is the main atmospheric cause of Acid Rain?",
    questionHi: "'अम्लीय वर्षा' (Acid Rain) के लिए वायुमंडल में मुख्य रूप से कौन सी गैसें उत्तरदायी हैं?",
    options: [
      { id: "A", textEn: "Sulphur Dioxide (SO2) and Nitrogen Oxides (NOx)", textHi: "सल्फर डाइऑक्साइड (SO2) और नाइट्रोजन ऑक्साइड (NOx)" },
      { id: "B", textEn: "Carbon Monoxide and Ozone", textHi: "कार्बन मोनोऑक्साइड" },
      { id: "C", textEn: "Oxygen and Nitrogen", textHi: "ऑक्सीजन और नाइट्रोजन" },
      { id: "D", textEn: "Methane and Hydrogen", textHi: "मीथेन और हाइड्रोजन" }
    ],
    correctAnswer: "A",
    explanation: "SO2 and NOx react with water vapor to form sulfuric acid (H2SO4) and nitric acid (HNO3), precipitating as acid rain."
  },
  {
    id: 80,
    section: "teach_evs",
    sectionName: "3. Environmental Studies (पर्यावरण अध्ययन)",
    questionEn: "What is an important thematic syllabus feature of EVS in NCERT Class 3 to 5?",
    questionHi: "NCERT की कक्षा 3 से 5 की पर्यावरण अध्ययन पाठ्यपुस्तक में पाठ्यक्रम को किन 6 मुख्य थीमों में विभाजित किया गया है?",
    options: [
      { id: "A", textEn: "Family & Friends, Food, Shelter, Water, Travel, Things We Make & Do", textHi: "परिवार और मित्र, भोजन, आश्रय, जल, यात्रा, चीजें जो हम बनाते और करते हैं" },
      { id: "B", textEn: "Physics, Chemistry, Biology, Zoology, Botany, Astronomy", textHi: "भौतिकी, रसायन, जीवविज्ञान" },
      { id: "C", textEn: "History, Civics, Geography, Economics, Politics, Law", textHi: "इतिहास, भूगोल, नागरिक शास्त्र" },
      { id: "D", textEn: "Only Plants and Animals", textHi: "केवल पेड़ और पौधे" }
    ],
    correctAnswer: "A",
    explanation: "NCF-2005 integrates EVS around six broad child-centered themes: Family and Friends, Food, Shelter, Water, Travel, and Things We Make and Do."
  },

  // =========================================================================
  // SECTION 4: MATHEMATICS & PEDAGOGY / गणित (Q81 - Q100)
  // =========================================================================
  {
    id: 81,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the primary value of 5 in the number 25,486?",
    questionHi: "संख्या 25,486 में अंक 5 का 'स्थानीय मान' (Place Value) क्या है?",
    options: [
      { id: "A", textEn: "5,000", textHi: "5,000" },
      { id: "B", textEn: "500", textHi: "500" },
      { id: "C", textEn: "50", textHi: "50" },
      { id: "D", textEn: "5 (अंकित मान)", textHi: "5" }
    ],
    correctAnswer: "A",
    explanation: "5 is in the thousands place: 5 × 1,000 = 5,000."
  },
  {
    id: 82,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "According to Van Hiele's theory of geometric thought, at which level can a child recognize shapes by their holistic appearance?",
    questionHi: "वैन हीले के ज्यामितीय चिंतन सिद्धांत के अनुसार किस स्तर पर बच्चा आकृतियों को उनके समग्र दिखावट के आधार पर पहचानता है?",
    options: [
      { id: "A", textEn: "Level 0: Visualization (चाक्षुषीकरण / प्रत्यक्षीकरण)", textHi: "स्तर 0: चाक्षुषीकरण (Visualization)" },
      { id: "B", textEn: "Level 1: Analysis (विश्लेषण)", textHi: "स्तर 1: विश्लेषण (Analysis)" },
      { id: "C", textEn: "Level 2: Informal Deduction", textHi: "स्तर 2: अनौपचारिक निगमन" },
      { id: "D", textEn: "Level 3: Formal Deduction", textHi: "स्तर 3: औपचारिक निगमन" }
    ],
    correctAnswer: "A",
    explanation: "At Level 0 (Visualization), children judge shapes visually (e.g. 'it looks like a door, so it's a rectangle') without analyzing properties."
  },
  {
    id: 83,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the sum of all angles in a quadrilateral?",
    questionHi: "एक चतुर्भुज के चारों अंतःकोणों का योग कितना होता है?",
    options: [
      { id: "A", textEn: "360°", textHi: "360°" },
      { id: "B", textEn: "180°", textHi: "180° (त्रिभुज)" },
      { id: "C", textEn: "540°", textHi: "540°" },
      { id: "D", textEn: "720°", textHi: "720°" }
    ],
    correctAnswer: "A",
    explanation: "Sum of interior angles of an n-sided polygon = (n - 2) × 180°. For a quadrilateral (n=4): (4-2) × 180° = 360°."
  },
  {
    id: 84,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "Which manipulatives (teaching-learning materials) are best used to teach place value and decimal operations?",
    questionHi: "प्राथमिक स्तर पर स्थानीय मान और दशमलव संकल्पना सिखाने हेतु कौन सा शिक्षण सहायक साधन सर्वाधिक उपयुक्त है?",
    options: [
      { id: "A", textEn: "Dienes Blocks / Base Ten Blocks and Abacus", textHi: "डायन्स ब्लॉक्स (Dienes Blocks) और गिनतारा (Abacus)" },
      { id: "B", textEn: "Protractor (चांदा)", textHi: "चांदा" },
      { id: "C", textEn: "Compass (परकार)", textHi: "परकार" },
      { id: "D", textEn: "Geo-board only for geometry", textHi: "जियो-बोर्ड" }
    ],
    correctAnswer: "A",
    explanation: "Dienes blocks (units, rods, flats, cubes) provide hands-on concrete representation of Base-10 place value."
  },
  {
    id: 85,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "How many prime numbers exist between 1 and 20?",
    questionHi: "1 से 20 के बीच कुल कितनी अभाज्य संख्याएं (Prime Numbers) हैं?",
    options: [
      { id: "A", textEn: "8 (2, 3, 5, 7, 11, 13, 17, 19)", textHi: "8 (2, 3, 5, 7, 11, 13, 17, 19)" },
      { id: "B", textEn: "7", textHi: "7" },
      { id: "C", textEn: "9", textHi: "9" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "The primes under 20 are 2, 3, 5, 7, 11, 13, 17, 19, totaling 8."
  },
  {
    id: 86,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the perimeter of a rectangle having length 15 cm and breadth 10 cm?",
    questionHi: "एक आयत की लंबाई 15 सेमी और चौड़ाई 10 सेमी है। इसका परिमाप क्या होगा?",
    options: [
      { id: "A", textEn: "50 cm", textHi: "50 सेमी" },
      { id: "B", textEn: "150 cm²", textHi: "150 सेमी² (क्षेत्रफल)" },
      { id: "C", textEn: "25 cm", textHi: "25 सेमी" },
      { id: "D", textEn: "100 cm", textHi: "100 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "Perimeter = 2(L + B) = 2(15 + 10) = 2 × 25 = 50 cm."
  },
  {
    id: 87,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "NCF-2005 states that the 'Narrow Aim' of school mathematics education is to:",
    questionHi: "NCF-2005 के अनुसार विद्यालयी गणित का 'संकीर्ण उद्देश्य' (Narrow Aim) क्या है?",
    options: [
      { id: "A", textEn: "Develop numeracy related skills (computation, measurement, fractions)", textHi: "संख्यात्मक कौशलों और गणना का विकास करना" },
      { id: "B", textEn: "Mathematize child's thought processes (Higher Aim)", textHi: "बच्चे के चिंतन का गणितीकरण करना" },
      { id: "C", textEn: "Make every child an engineer", textHi: "इंजीनियर बनाना" },
      { id: "D", textEn: "Rote memorizing formulas", textHi: "सूत्र रटाना" }
    ],
    correctAnswer: "A",
    explanation: "NCF-2005 distinguishes the narrow aim (useful computational/numeracy skills) from the higher aim (mathematization of child's thinking)."
  },
  {
    id: 88,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the HCF of 18 and 24?",
    questionHi: "18 और 24 का महत्तम समापवर्तक (HCF) क्या होगा?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "12", textHi: "12" },
      { id: "C", textEn: "3", textHi: "3" },
      { id: "D", textEn: "72", textHi: "72" }
    ],
    correctAnswer: "A",
    explanation: "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Greatest common factor is 6."
  },
  {
    id: 89,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "Solve: (3/4) + (2/5) = ?",
    questionHi: "भिन्न को हल कीजिए: (3/4) + (2/5) = ?",
    options: [
      { id: "A", textEn: "23 / 20 (1 and 3/20)", textHi: "23 / 20" },
      { id: "B", textEn: "5 / 9", textHi: "5 / 9" },
      { id: "C", textEn: "6 / 20", textHi: "6 / 20" },
      { id: "D", textEn: "11 / 20", textHi: "11 / 20" }
    ],
    correctAnswer: "A",
    explanation: "LCM(4, 5) = 20. (15 + 8) / 20 = 23 / 20."
  },
  {
    id: 90,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "A Geo-board (जियो-बोर्ड) is used as a teaching aid to teach which mathematical concepts?",
    questionHi: "गणित शिक्षण में 'जियो-बोर्ड' (Geo-board) का उपयोग मुख्यतः किस संकल्पना को सिखाने में होता है?",
    options: [
      { id: "A", textEn: "Geometric shapes, perimeter, and area", textHi: "ज्यामितीय आकृतियां, परिमाप और क्षेत्रफल" },
      { id: "B", textEn: "Long division", textHi: "भाग करना" },
      { id: "C", textEn: "Algebraic equations", textHi: "बीजगणित" },
      { id: "D", textEn: "Decimal numbers", textHi: "दशमलव संख्याएं" }
    ],
    correctAnswer: "A",
    explanation: "A geoboard features a grid of pegs with rubber bands used to explore geometric properties, polygons, perimeter, and area."
  },
  {
    id: 91,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the complementary angle of 65°?",
    questionHi: "65° का 'पूरक कोण' (Complementary Angle) क्या होगा?",
    options: [
      { id: "A", textEn: "25°", textHi: "25°" },
      { id: "B", textEn: "115°", textHi: "115° (संपूरक कोण)" },
      { id: "C", textEn: "35°", textHi: "35°" },
      { id: "D", textEn: "45°", textHi: "45°" }
    ],
    correctAnswer: "A",
    explanation: "Two angles are complementary if their sum is 90°: 90° - 65° = 25°."
  },
  {
    id: 92,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "Find the mean of the first five prime numbers:",
    questionHi: "प्रथम पांच अभाज्य संख्याओं (2, 3, 5, 7, 11) का औसत क्या होगा?",
    options: [
      { id: "A", textEn: "5.6", textHi: "5.6" },
      { id: "B", textEn: "5.0", textHi: "5.0" },
      { id: "C", textEn: "6.2", textHi: "6.2" },
      { id: "D", textEn: "4.8", textHi: "4.8" }
    ],
    correctAnswer: "A",
    explanation: "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 / 5 = 5.6."
  },
  {
    id: 93,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the supplementary angle of 110°?",
    questionHi: "110° का 'संपूरक कोण' (Supplementary Angle) क्या होगा?",
    options: [
      { id: "A", textEn: "70°", textHi: "70°" },
      { id: "B", textEn: "80°", textHi: "80°" },
      { id: "C", textEn: "90°", textHi: "90°" },
      { id: "D", textEn: "20°", textHi: "20°" }
    ],
    correctAnswer: "A",
    explanation: "Supplementary angles sum to 180°: 180° - 110° = 70°."
  },
  {
    id: 94,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "How many vertices, edges, and faces does a cube have?",
    questionHi: "एक घन (Cube) में कितने शीर्ष (Vertices), किनारे (Edges) और फलक (Faces) होते हैं?",
    options: [
      { id: "A", textEn: "8 vertices, 12 edges, 6 faces", textHi: "8 शीर्ष, 12 किनारे, 6 फलक" },
      { id: "B", textEn: "6 vertices, 12 edges, 8 faces", textHi: "6 शीर्ष, 12 किनारे, 8 फलक" },
      { id: "C", textEn: "8 vertices, 6 edges, 12 faces", textHi: "8 शीर्ष, 6 किनारे, 12 फलक" },
      { id: "D", textEn: "4 vertices, 6 edges, 4 faces", textHi: "4 शीर्ष, 6 किनारे, 4 फलक" }
    ],
    correctAnswer: "A",
    explanation: "A cube has V = 8, E = 12, F = 6, satisfying Euler's formula V - E + F = 2."
  },
  {
    id: 95,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "If 1 meter = 100 cm, how many cubic centimeters (cm³) are in 1 cubic meter (m³)?",
    questionHi: "1 घन मीटर (m³) में कितने घन सेंटीमीटर (cm³) होते हैं?",
    options: [
      { id: "A", textEn: "1,000,000 cm³ (10 लाख)", textHi: "10,00,000 cm³ (10^6)" },
      { id: "B", textEn: "10,000 cm³", textHi: "10,000 cm³" },
      { id: "C", textEn: "1,000 cm³", textHi: "1,000 cm³" },
      { id: "D", textEn: "100,000 cm³", textHi: "100,000 cm³" }
    ],
    correctAnswer: "A",
    explanation: "1 m³ = (100 cm)³ = 100 × 100 × 100 = 1,000,000 cm³."
  },
  {
    id: 96,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "Which property is represented by: a × (b + c) = (a × b) + (a × c)?",
    questionHi: "गुणधर्म a × (b + c) = (a × b) + (a × c) को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Distributive Property (वितरण नियम)", textHi: "वितरण / बंटन नियम (Distributive Property)" },
      { id: "B", textEn: "Associative Property (साहचर्य नियम)", textHi: "साहचर्य नियम" },
      { id: "C", textEn: "Commutative Property (क्रमविनिमेय)", textHi: "क्रमविनिमेय नियम" },
      { id: "D", textEn: "Identity Property", textHi: "तत्समक नियम" }
    ],
    correctAnswer: "A",
    explanation: "Multiplication distributes over addition: Distributive law."
  },
  {
    id: 97,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the roman numeral representation for 90?",
    questionHi: "संख्या 90 को रोमन संख्यांक में कैसे लिखा जाता है?",
    options: [
      { id: "A", textEn: "XC", textHi: "XC" },
      { id: "B", textEn: "LXXXX", textHi: "LXXXX" },
      { id: "C", textEn: "CX", textHi: "CX" },
      { id: "D", textEn: "LX", textHi: "LX" }
    ],
    correctAnswer: "A",
    explanation: "In Roman numerals, 100 is C and 10 is X; 10 subtracted from 100 is XC = 90."
  },
  {
    id: 98,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "An angle measuring greater than 90° and less than 180° is known as:",
    questionHi: "90° से अधिक और 180° से कम माप वाले कोण को क्या कहते हैं?",
    options: [
      { id: "A", textEn: "Obtuse Angle (अधिक कोण)", textHi: "अधिक कोण (Obtuse Angle)" },
      { id: "B", textEn: "Acute Angle (न्यून कोण)", textHi: "न्यून कोण" },
      { id: "C", textEn: "Right Angle (समकोण)", textHi: "समकोण" },
      { id: "D", textEn: "Reflex Angle (प्रतिवर्ती कोण)", textHi: "प्रतिवर्ती कोण" }
    ],
    correctAnswer: "A",
    explanation: "Angles strictly between 90° and 180° are obtuse angles."
  },
  {
    id: 99,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "A train leaves New Delhi at 21:15 on Friday and reaches Lucknow at 05:45 on Saturday. What was the duration of the journey?",
    questionHi: "एक ट्रेन शुक्रवार को 21:15 बजे नई दिल्ली से चलती है और शनिवार 05:45 बजे लखनऊ पहुँचती है। यात्रा की कुल अवधि क्या थी?",
    options: [
      { id: "A", textEn: "8 hours 30 minutes", textHi: "8 घंटे 30 मिनट" },
      { id: "B", textEn: "8 hours 15 minutes", textHi: "8 घंटे 15 मिनट" },
      { id: "C", textEn: "7 hours 45 minutes", textHi: "7 घंटे 45 मिनट" },
      { id: "D", textEn: "9 hours", textHi: "9 घंटे" }
    ],
    correctAnswer: "A",
    explanation: "From 21:15 to 24:00 (midnight) is 2 hours 45 mins. From 00:00 to 05:45 is 5 hours 45 mins. Total = 2h 45m + 5h 45m = 8h 30m."
  },
  {
    id: 100,
    section: "teach_math",
    sectionName: "4. Mathematics & Pedagogy (गणित)",
    questionEn: "What is the only even prime number?",
    questionHi: "एकमात्र सम अभाज्य संख्या (Even Prime Number) कौन सी है?",
    options: [
      { id: "A", textEn: "2", textHi: "2 (एकमात्र सम अभाज्य संख्या)" },
      { id: "B", textEn: "4", textHi: "4" },
      { id: "C", textEn: "0", textHi: "0" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "2 is the smallest prime and the only even prime number in mathematics."
  }
];
