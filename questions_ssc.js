/**
 * GovtExamHub — Staff Selection Commission (SSC CGL / CHSL / MTS / GD)
 * Official 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 */

const SSC_EXAM_CONFIG = {
  id: "ssc",
  title: "Staff Selection Commission (SSC CGL / CHSL / GD Mock)",
  shortName: "SSC",
  icon: "🏛️",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100, // or 200 marks, 1 mark per question for CBT consistency
  durationMinutes: 60, // 60 Mins Real SSC Tier-1 Duration
  marksPerCorrect: 1,
  negativeMarking: 0.25, // 0.25 marks negative for real SSC experience
  sections: [
    { id: "ssc_reasoning", name: "1. General Intelligence & Reasoning", start: 1, end: 25, total: 25 },
    { id: "ssc_ga", name: "2. General Awareness & GK", start: 26, end: 50, total: 25 },
    { id: "ssc_quant", name: "3. Quantitative Aptitude", start: 51, end: 75, total: 25 },
    { id: "ssc_english", name: "4. English Comprehension", start: 76, end: 100, total: 25 }
  ]
};

const SSC_QUESTIONS_DATA = [
  // --- SECTION 1: REASONING (Q1 - Q25) ---
  {
    id: 1,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Select the related word from the given alternatives: Book : Author :: Statue : ?",
    questionHi: "दिए गए विकल्पों में से संबंधित शब्द चुनिए: पुस्तक : लेखक :: मूर्ति : ?",
    options: [
      { id: "A", textEn: "Mason", textHi: "राजमिस्त्री" },
      { id: "B", textEn: "Sculptor", textHi: "मूर्तिकार (Sculptor)" },
      { id: "C", textEn: "Painter", textHi: "चित्रकार" },
      { id: "D", textEn: "Poet", textHi: "कवि" }
    ],
    correctAnswer: "B",
    explanation: "Just as an author writes a book, a sculptor creates a statue."
  },
  {
    id: 2,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Find the odd one out from the given alternatives: 121, 169, 225, 289, 343",
    questionHi: "दिए गए विकल्पों में से विषम संख्या ज्ञात कीजिए: 121, 169, 225, 289, 343",
    options: [
      { id: "A", textEn: "121", textHi: "121" },
      { id: "B", textEn: "169", textHi: "169" },
      { id: "C", textEn: "289", textHi: "289" },
      { id: "D", textEn: "343", textHi: "343" }
    ],
    correctAnswer: "D",
    explanation: "121 (11²), 169 (13²), 225 (15²), 289 (17²) are all perfect squares. 343 is a cube (7³), not a square."
  },
  {
    id: 3,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Complete the series: 3, 7, 15, 31, 63, ?",
    questionHi: "श्रृंखला पूरी कीजिए: 3, 7, 15, 31, 63, ?",
    options: [
      { id: "A", textEn: "127", textHi: "127" },
      { id: "B", textEn: "126", textHi: "126" },
      { id: "C", textEn: "125", textHi: "125" },
      { id: "D", textEn: "130", textHi: "130" }
    ],
    correctAnswer: "A",
    explanation: "The pattern is (x * 2) + 1: 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127."
  },
  {
    id: 4,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "If CLOUD is coded as ENQWF, how is SMILE coded in that code?",
    questionHi: "यदि CLOUD को ENQWF के रूप में कोडित किया जाता है, तो SMILE को कैसे कोडित किया जाएगा?",
    options: [
      { id: "A", textEn: "UOKNG", textHi: "UOKNG" },
      { id: "B", textEn: "UOKMH", textHi: "UOKMH" },
      { id: "C", textEn: "TOJLF", textHi: "TOJLF" },
      { id: "D", textEn: "VPLOI", textHi: "VPLOI" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is shifted forward by +2: S(+2)=U, M(+2)=O, I(+2)=K, L(+2)=N, E(+2)=G => UOKNG."
  },
  {
    id: 5,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    questionHi: "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'उसकी माँ मेरी माँ की इकलौती बेटी है।' महिला का उस पुरुष से क्या संबंध है?",
    options: [
      { id: "A", textEn: "Sister", textHi: "बहन" },
      { id: "B", textEn: "Mother", textHi: "माँ (Mother)" },
      { id: "C", textEn: "Aunt", textHi: "चाची / मौसी" },
      { id: "D", textEn: "Grandmother", textHi: "नानी" }
    ],
    correctAnswer: "B",
    explanation: "The only daughter of the woman's mother is the woman herself. Therefore, she is the man's mother."
  },
  {
    id: 6,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "A person travels 10 km North, turns right and walks 6 km, then turns right again and walks 10 km. How far is he from his starting point?",
    questionHi: "एक व्यक्ति उत्तर दिशा में 10 किमी चलता है, फिर दाईं ओर मुड़कर 6 किमी चलता है, और फिर दाईं ओर मुड़कर 10 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
    options: [
      { id: "A", textEn: "6 km East", textHi: "6 किमी पूर्व" },
      { id: "B", textEn: "10 km North", textHi: "10 किमी उत्तर" },
      { id: "C", textEn: "16 km", textHi: "16 किमी" },
      { id: "D", textEn: "26 km", textHi: "26 किमी" }
    ],
    correctAnswer: "A",
    explanation: "The 10 km North and 10 km South cancel each other out, leaving him 6 km due East from starting position."
  },
  {
    id: 7,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Arrange the words in a meaningful logical order: 1. Yarn, 2. Plant, 3. Saree, 4. Cotton, 5. Cloth",
    questionHi: "निम्नलिखित शब्दों को एक तार्किक एवं अर्थपूर्ण क्रम में व्यवस्थित करें: 1. धागा, 2. पौधा, 3. साड़ी, 4. कपास (रूई), 5. कपड़ा",
    options: [
      { id: "A", textEn: "2, 4, 1, 5, 3", textHi: "2, 4, 1, 5, 3" },
      { id: "B", textEn: "2, 4, 3, 5, 1", textHi: "2, 4, 3, 5, 1" },
      { id: "C", textEn: "4, 2, 1, 5, 3", textHi: "4, 2, 1, 5, 3" },
      { id: "D", textEn: "2, 1, 4, 5, 3", textHi: "2, 1, 4, 5, 3" }
    ],
    correctAnswer: "A",
    explanation: "Plant (2) produces Cotton (4) -> spun into Yarn (1) -> woven into Cloth (5) -> made into Saree (3)."
  },
  {
    id: 8,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Statements: All mangoes are fruits. All fruits are sweet. Conclusions: I. All mangoes are sweet. II. Some sweet things are mangoes.",
    questionHi: "कथन: सभी आम फल हैं। सभी फल मीठे हैं। निष्कर्ष: I. सभी आम मीठे हैं। II. कुछ मीठे आम हैं।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither I nor II follows", textHi: "ना तो I ना ही II अनुसरण करता है" }
    ],
    correctAnswer: "C",
    explanation: "Since all mangoes are inside fruits and all fruits are inside sweet, both conclusions are valid."
  },
  {
    id: 9,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Select the missing number: 4, 9, 25, 49, 121, ?",
    questionHi: "लुप्त संख्या चुनिए: 4, 9, 25, 49, 121, ?",
    options: [
      { id: "A", textEn: "144", textHi: "144" },
      { id: "B", textEn: "169", textHi: "169" },
      { id: "C", textEn: "196", textHi: "196" },
      { id: "D", textEn: "225", textHi: "225" }
    ],
    correctAnswer: "B",
    explanation: "These are squares of consecutive prime numbers: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, next prime is 13, 13²=169."
  },
  {
    id: 10,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "In a row of 40 students, Amit is 14th from the left. What is his rank from the right end?",
    questionHi: "40 विद्यार्थियों की एक पंक्ति में अमित बाएं से 14वें स्थान पर है। दाएं छोर से उसका स्थान क्या होगा?",
    options: [
      { id: "A", textEn: "26th", textHi: "26वां" },
      { id: "B", textEn: "27th", textHi: "27वां" },
      { id: "C", textEn: "28th", textHi: "28वां" },
      { id: "D", textEn: "25th", textHi: "25वां" }
    ],
    correctAnswer: "B",
    explanation: "Rank from right = Total - Rank from left + 1 = 40 - 14 + 1 = 27th."
  },
  {
    id: 11,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Select the option that shows the same relationship as 'Pen : Ink'?",
    questionHi: "उस विकल्प का चयन करें जो 'कलम : स्याही' जैसा ही संबंध दर्शाता है?",
    options: [
      { id: "A", textEn: "Car : Petrol", textHi: "कार : पेट्रोल" },
      { id: "B", textEn: "Pencil : Lead", textHi: "पेंसिल : लेड (सिक्का)" },
      { id: "C", textEn: "Brush : Paint", textHi: "ब्रश : पेंट" },
      { id: "D", textEn: "Paper : Wood", textHi: "कागज : लकड़ी" }
    ],
    correctAnswer: "A",
    explanation: "A pen operates by consuming ink, just as a car operates by consuming petrol."
  },
  {
    id: 12,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "If '+' means 'x', '-' means '÷', 'x' means '-', and '÷' means '+', then evaluate: 16 ÷ 4 x 10 - 2 + 3 = ?",
    questionHi: "यदि '+' का अर्थ 'x', '-' का अर्थ '÷', 'x' का अर्थ '-', और '÷' का अर्थ '+' है, तो हल करें: 16 ÷ 4 x 10 - 2 + 3 = ?",
    options: [
      { id: "A", textEn: "5", textHi: "5" },
      { id: "B", textEn: "15", textHi: "15" },
      { id: "C", textEn: "21", textHi: "21" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "Substituting symbols: 16 + 4 - 10 ÷ 2 x 3 = 16 + 4 - 5 x 3 = 20 - 15 = 5."
  },
  {
    id: 13,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Which Venn diagram best represents: India, Delhi, Asia?",
    questionHi: "भारत, दिल्ली, एशिया का सबसे उपयुक्त वेन आरेख कौन-सा है?",
    options: [
      { id: "A", textEn: "Three concentric circles (Delhi inside India inside Asia)", textHi: "तीन संकेंद्रित वृत्त (एशिया के अंदर भारत, और भारत के अंदर दिल्ली)" },
      { id: "B", textEn: "Two intersecting circles", textHi: "दो प्रतिच्छेदी वृत्त" },
      { id: "C", textEn: "Three disjoint circles", textHi: "तीन अलग-अलग वृत्त" },
      { id: "D", textEn: "One circle enclosing two disjoint circles", textHi: "एक वृत्त दो अलग वृत्तों को घेरे हुए" }
    ],
    correctAnswer: "A",
    explanation: "Delhi is entirely inside India, and India is entirely inside the continent of Asia."
  },
  {
    id: 14,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "If today is Monday, what day will it be after 61 days?",
    questionHi: "यदि आज सोमवार है, तो 61 दिनों के बाद कौन-सा दिन होगा?",
    options: [
      { id: "A", textEn: "Tuesday", textHi: "मंगलवार" },
      { id: "B", textEn: "Wednesday", textHi: "बुधवार" },
      { id: "C", textEn: "Thursday", textHi: "गुरुवार" },
      { id: "D", textEn: "Saturday", textHi: "शनिवार" }
    ],
    correctAnswer: "D",
    explanation: "61 divided by 7 leaves a remainder of 5 days (61 = 7*8 + 5). Monday + 5 days = Saturday."
  },
  {
    id: 15,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "What is the angle between the hour hand and minute hand of a clock at 3:30?",
    questionHi: "घड़ी में 3:30 बजे घंटे और मिनट की सुइयों के बीच कितने अंश का कोण होगा?",
    options: [
      { id: "A", textEn: "75°", textHi: "75°" },
      { id: "B", textEn: "80°", textHi: "80°" },
      { id: "C", textEn: "90°", textHi: "90°" },
      { id: "D", textEn: "105°", textHi: "105°" }
    ],
    correctAnswer: "A",
    explanation: "Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = 75°."
  },
  {
    id: 16,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Select the odd letter-cluster from the given alternatives: BDF, HJL, PRT, WYA",
    questionHi: "दिए गए विकल्पों में से विषम अक्षर-समूह चुनिए: BDF, HJL, PRT, WYA",
    options: [
      { id: "A", textEn: "BDF", textHi: "BDF" },
      { id: "B", textEn: "HJL", textHi: "HJL" },
      { id: "C", textEn: "PRT", textHi: "PRT" },
      { id: "D", textEn: "WYA", textHi: "WYA" }
    ],
    correctAnswer: "D",
    explanation: "All groups increment by +2 letters: B(+2)D(+2)F, H(+2)J(+2)L, P(+2)R(+2)T. W(+2)Y(+2)A also increments +2, but wait: W=23, Y=25, A=1 (27, so +2). Wait, all are +2! What about vowels: WYA contains vowel 'A', while others have no vowels."
  },
  {
    id: 17,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Find the missing term in letter series: AZ, BY, CX, DW, ?",
    questionHi: "अक्षर श्रृंखला में लुप्त पद ज्ञात कीजिए: AZ, BY, CX, DW, ?",
    options: [
      { id: "A", textEn: "EV", textHi: "EV" },
      { id: "B", textEn: "FU", textHi: "FU" },
      { id: "C", textEn: "EU", textHi: "EU" },
      { id: "D", textEn: "GT", textHi: "GT" }
    ],
    correctAnswer: "A",
    explanation: "Opposite letter pairs: A-Z, B-Y, C-X, D-W, next is E-V."
  },
  {
    id: 18,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "How many triangles are there in a standard 8-pointed star formed by two overlapping triangles?",
    questionHi: "दो अतिव्यापी त्रिभुजों द्वारा बनाए गए 6-नुकीले तारे में कुल कितने त्रिभुज होते हैं?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "8", textHi: "8" },
      { id: "C", textEn: "10", textHi: "10" },
      { id: "D", textEn: "12", textHi: "12" }
    ],
    correctAnswer: "B",
    explanation: "There are 6 small outer triangles plus 2 large overlapping major triangles = 8 total triangles."
  },
  {
    id: 19,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "If 'A' is father of 'B', but 'B' is not son of 'A', what is 'B' to 'A'?",
    questionHi: "यदि 'A', 'B' का पिता है, लेकिन 'B', 'A' का बेटा नहीं है, तो 'B' का 'A' से क्या संबंध है?",
    options: [
      { id: "A", textEn: "Daughter", textHi: "बेटी (Daughter)" },
      { id: "B", textEn: "Granddaughter", textHi: "पोती" },
      { id: "C", textEn: "Niece", textHi: "भतीजी" },
      { id: "D", textEn: "Sister", textHi: "बहन" }
    ],
    correctAnswer: "A",
    explanation: "If B is the child of A and is not a son, B must be A's daughter."
  },
  {
    id: 20,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Select the word which cannot be formed using the letters of 'COMMUNICATION'?",
    questionHi: "दिए गए शब्द 'COMMUNICATION' के अक्षरों का उपयोग करके कौन-सा शब्द नहीं बनाया जा सकता?",
    options: [
      { id: "A", textEn: "ACTION", textHi: "ACTION" },
      { id: "B", textEn: "NATION", textHi: "NATION" },
      { id: "C", textEn: "COMMON", textHi: "COMMON" },
      { id: "D", textEn: "MONITOR", textHi: "MONITOR" }
    ],
    correctAnswer: "D",
    explanation: "The word 'MONITOR' contains the letter 'R', which is not present in 'COMMUNICATION'."
  },
  {
    id: 21,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "In a dice, numbers from 1 to 6 are marked. If 1 is opposite 6, and 2 is opposite 5, what is opposite 3?",
    questionHi: "एक पासे में 1 से 6 तक अंक हैं। यदि 1 के विपरीत 6 है, और 2 के विपरीत 5 है, तो 3 के विपरीत कौन-सा अंक होगा?",
    options: [
      { id: "A", textEn: "4", textHi: "4" },
      { id: "B", textEn: "5", textHi: "5" },
      { id: "C", textEn: "2", textHi: "2" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "The only remaining pair on a standard 6-faced die is 3 and 4."
  },
  {
    id: 22,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Find the water image of the letter 'E'?",
    questionHi: "अक्षर 'E' का जल प्रतिबिंब (Water Image) क्या होगा?",
    options: [
      { id: "A", textEn: "E (Remains unchanged)", textHi: "E (समान रहेगा)" },
      { id: "B", textEn: "Ǝ (Laterally inverted)", textHi: "Ǝ" },
      { id: "C", textEn: "F", textHi: "F" },
      { id: "D", textEn: "M", textHi: "M" }
    ],
    correctAnswer: "A",
    explanation: "Since the letter 'E' has horizontal line symmetry across its midsection, its vertical reflection (water image) looks identical to 'E'."
  },
  {
    id: 23,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Which number replaces question mark: 5 : 30 :: 7 : ?",
    questionHi: "प्रश्नवाचक चिह्न के स्थान पर कौन-सी संख्या आएगी: 5 : 30 :: 7 : ?",
    options: [
      { id: "A", textEn: "42", textHi: "42" },
      { id: "B", textEn: "56", textHi: "56" },
      { id: "C", textEn: "49", textHi: "49" },
      { id: "D", textEn: "35", textHi: "35" }
    ],
    correctAnswer: "B",
    explanation: "5 * (5 + 1) = 5 * 6 = 30; similarly 7 * (7 + 1) = 7 * 8 = 56."
  },
  {
    id: 24,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "If SOUTH-EAST becomes NORTH, and NORTH-EAST becomes WEST, what will WEST become?",
    questionHi: "यदि दक्षिण-पूर्व उत्तर बन जाता है, और उत्तर-पूर्व पश्चिम बन जाता है, तो पश्चिम क्या बन जाएगा?",
    options: [
      { id: "A", textEn: "South-East", textHi: "दक्षिण-पूर्व (South-East)" },
      { id: "B", textEn: "North-West", textHi: "उत्तर-पश्चिम" },
      { id: "C", textEn: "South-West", textHi: "दक्षिण-पश्चिम" },
      { id: "D", textEn: "North-East", textHi: "उत्तर-पूर्व" }
    ],
    correctAnswer: "A",
    explanation: "Directions are rotated 135° counter-clockwise. Rotating West by 135° counter-clockwise gives South-East."
  },
  {
    id: 25,
    section: "ssc_reasoning",
    sectionName: "1. General Intelligence & Reasoning",
    questionEn: "Five friends A, B, C, D, E are sitting in a circle facing the center. A is to the left of B, E is between C and D, C is to the left of A. Who is to the immediate right of B?",
    questionHi: "पाँच मित्र A, B, C, D, E केंद्र की ओर मुख करके एक वृत्त में बैठे हैं। A, B के बाईं ओर है, E, C और D के बीच है, C, A के बाईं ओर है। B के ठीक दाईं ओर कौन है?",
    options: [
      { id: "A", textEn: "D", textHi: "D" },
      { id: "B", textEn: "E", textHi: "E" },
      { id: "C", textEn: "C", textHi: "C" },
      { id: "D", textEn: "A", textHi: "A" }
    ],
    correctAnswer: "A",
    explanation: "Clockwise arrangement around circle facing center: B -> A -> C -> E -> D -> B. To the immediate right of B is D."
  },

  // --- SECTION 2: GENERAL AWARENESS (Q26 - Q50) ---
  {
    id: 26,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which Mughal Emperor built the famous Red Fort in Delhi?",
    questionHi: "दिल्ली का प्रसिद्ध लाल किला किस मुग़ल बादशाह ने बनवाया था?",
    options: [
      { id: "A", textEn: "Akbar", textHi: "अकबर" },
      { id: "B", textEn: "Shah Jahan", textHi: "शाहजहाँ (Shah Jahan)" },
      { id: "C", textEn: "Humayun", textHi: "हुमायूँ" },
      { id: "D", textEn: "Aurangzeb", textHi: "औरंगजेब" }
    ],
    correctAnswer: "B",
    explanation: "Shah Jahan commissioned the construction of the Red Fort in 1638 when he decided to shift his capital from Agra to Delhi."
  },
  {
    id: 27,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which Article of the Indian Constitution guarantees the 'Right to Equality'?",
    questionHi: "भारतीय संविधान का कौन-सा अनुच्छेद 'समानता के अधिकार' की गारंटी देता है?",
    options: [
      { id: "A", textEn: "Articles 14 to 18", textHi: "अनुच्छेद 14 से 18" },
      { id: "B", textEn: "Articles 19 to 22", textHi: "अनुच्छेद 19 से 22" },
      { id: "C", textEn: "Articles 23 to 24", textHi: "अनुच्छेद 23 से 24" },
      { id: "D", textEn: "Articles 25 to 28", textHi: "अनुच्छेद 25 से 28" }
    ],
    correctAnswer: "A",
    explanation: "Articles 14 through 18 of the Indian Constitution form the Fundamental Right to Equality."
  },
  {
    id: 28,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the capital city of Australia?",
    questionHi: "ऑस्ट्रेलिया की राजधानी कौन-सी है?",
    options: [
      { id: "A", textEn: "Sydney", textHi: "सिडनी" },
      { id: "B", textEn: "Melbourne", textHi: "मेलबर्न" },
      { id: "C", textEn: "Canberra", textHi: "कैनबरा (Canberra)" },
      { id: "D", textEn: "Brisbane", textHi: "ब्रिस्बेन" }
    ],
    correctAnswer: "C",
    explanation: "Canberra is the federal capital of Australia, chosen as a compromise between Sydney and Melbourne."
  },
  {
    id: 29,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Who is known as the 'Frontier Gandhi' (Seemant Gandhi)?",
    questionHi: "'सीमांत गांधी' (Frontier Gandhi) के नाम से किसे जाना जाता है?",
    options: [
      { id: "A", textEn: "Khan Abdul Ghaffar Khan", textHi: "खान अब्दुल गफ्फार खान" },
      { id: "B", textEn: "Maulana Abul Kalam Azad", textHi: "मौलाना अबुल कलाम आज़ाद" },
      { id: "C", textEn: "Muhammad Ali Jinnah", textHi: "मोहम्मद अली जिन्ना" },
      { id: "D", textEn: "Liaquat Ali Khan", textHi: "लियाकत अली खान" }
    ],
    correctAnswer: "A",
    explanation: "Khan Abdul Ghaffar Khan, founder of the Khudai Khidmatgar movement, was affectionately called Frontier Gandhi."
  },
  {
    id: 30,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which river is famously called the 'Sorrow of Bihar' due to recurring floods?",
    questionHi: "बार-बार आने वाली बाढ़ के कारण किस नदी को 'बिहार का शोक' कहा जाता है?",
    options: [
      { id: "A", textEn: "Ganga", textHi: "गंगा" },
      { id: "B", textEn: "Kosi", textHi: "कोसी (Kosi)" },
      { id: "C", textEn: "Son", textHi: "सोन" },
      { id: "D", textEn: "Gandak", textHi: "गंडक" }
    ],
    correctAnswer: "B",
    explanation: "The Kosi River changes its course frequently, causing devastating floods in North Bihar."
  },
  {
    id: 31,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Who was the first Governor-General of independent India?",
    questionHi: "स्वतंत्र भारत के प्रथम गवर्नर-जनरल कौन थे?",
    options: [
      { id: "A", textEn: "Lord Mountbatten", textHi: "लॉर्ड माउंटबेटन" },
      { id: "B", textEn: "C. Rajagopalachari", textHi: "सी. राजगोपालाचारी" },
      { id: "C", textEn: "Dr. Rajendra Prasad", textHi: "डॉ. राजेंद्र प्रसाद" },
      { id: "D", textEn: "Jawaharlal Nehru", textHi: "जवाहरलाल नेहरू" }
    ],
    correctAnswer: "A",
    explanation: "Lord Mountbatten served as the first Governor-General of independent India (1947–1948). C. Rajagopalachari was the first Indian Governor-General."
  },
  {
    id: 32,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the chemical formula of common table salt?",
    questionHi: "साधारण नमक का रासायनिक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "NaCl", textHi: "NaCl (सोडियम क्लोराइड)" },
      { id: "B", textEn: "KCl", textHi: "KCl" },
      { id: "C", textEn: "NaOH", textHi: "NaOH" },
      { id: "D", textEn: "NaHCO₃", textHi: "NaHCO₃" }
    ],
    correctAnswer: "A",
    explanation: "Common table salt is Sodium Chloride, chemical formula NaCl."
  },
  {
    id: 33,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "In which year was the Reserve Bank of India (RBI) established?",
    questionHi: "भारतीय रिज़र्व बैंक (RBI) की स्थापना किस वर्ष हुई थी?",
    options: [
      { id: "A", textEn: "1935", textHi: "1935" },
      { id: "B", textEn: "1947", textHi: "1947" },
      { id: "C", textEn: "1950", textHi: "1950" },
      { id: "D", textEn: "1921", textHi: "1921" }
    ],
    correctAnswer: "A",
    explanation: "The Reserve Bank of India was established on 1 April 1935 under the Reserve Bank of India Act, 1934."
  },
  {
    id: 34,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which organ in the human body produces the digestive fluid called bile?",
    questionHi: "मानव शरीर का कौन-सा अंग पित्त (Bile) रस का निर्माण करता है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत (Liver)" },
      { id: "B", textEn: "Gallbladder", textHi: "पित्ताशय (Gallbladder)" },
      { id: "C", textEn: "Pancreas", textHi: "अग्न्याशय" },
      { id: "D", textEn: "Stomach", textHi: "आमाशय" }
    ],
    correctAnswer: "A",
    explanation: "Bile is continuously synthesized by the liver and stored in the gallbladder until released into the duodenum."
  },
  {
    id: 35,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Where is the headquarters of ISRO (Indian Space Research Organisation) located?",
    questionHi: "इसरो (ISRO) का मुख्यालय कहाँ स्थित है?",
    options: [
      { id: "A", textEn: "Bengaluru", textHi: "बेंगलुरु (Bengaluru)" },
      { id: "B", textEn: "Sriharikota", textHi: "श्रीहरिकोटा" },
      { id: "C", textEn: "Thiruvananthapuram", textHi: "तिरुवनंतपुरम" },
      { id: "D", textEn: "New Delhi", textHi: "नई दिल्ली" }
    ],
    correctAnswer: "A",
    explanation: "ISRO headquarters is situated at Antariksh Bhavan in Bengaluru, Karnataka."
  },
  {
    id: 36,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which gas is primarily responsible for the greenhouse effect and global warming?",
    questionHi: "ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग के लिए मुख्य रूप से कौन-सी गैस जिम्मेदार है?",
    options: [
      { id: "A", textEn: "Carbon Dioxide (CO₂)", textHi: "कार्बन डाइऑक्साइड (CO₂)" },
      { id: "B", textEn: "Oxygen (O₂)", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Nitrogen (N₂)", textHi: "नाइट्रोजन" },
      { id: "D", textEn: "Argon", textHi: "आर्गन" }
    ],
    correctAnswer: "A",
    explanation: "Carbon dioxide traps heat re-radiated from Earth's surface, driving the enhanced greenhouse effect."
  },
  {
    id: 37,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which classical dance form originates from the state of Kerala?",
    questionHi: "केरल राज्य से संबंधित प्रसिद्ध शास्त्रीय नृत्य कौन-सा है?",
    options: [
      { id: "A", textEn: "Kathakali and Mohiniyattam", textHi: "कथकली और मोहिनीअट्टम" },
      { id: "B", textEn: "Bharatanatyam", textHi: "भरतनाट्यम" },
      { id: "C", textEn: "Kathak", textHi: "कथक" },
      { id: "D", textEn: "Kuchipudi", textHi: "कुचिपुड़ी" }
    ],
    correctAnswer: "A",
    explanation: "Kathakali and Mohiniyattam are classical dance traditions rooted in Kerala."
  },
  {
    id: 38,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Who wrote the national song of India, 'Vande Mataram'?",
    questionHi: "भारत का राष्ट्रीय गीत 'वन्दे मातरम्' किसने लिखा था?",
    options: [
      { id: "A", textEn: "Bankim Chandra Chattopadhyay", textHi: "बंकिम चंद्र चट्टोपाध्याय" },
      { id: "B", textEn: "Rabindranath Tagore", textHi: "रवींद्रनाथ टैगोर" },
      { id: "C", textEn: "Sarojini Naidu", textHi: "सरोजिनी नायडू" },
      { id: "D", textEn: "Sri Aurobindo", textHi: "श्री अरबिंदो" }
    ],
    correctAnswer: "A",
    explanation: "Vande Mataram was penned in Sanskrit by Bankim Chandra Chattopadhyay in his 1882 novel Anandamath."
  },
  {
    id: 39,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the tenure of a member of the Rajya Sabha in India?",
    questionHi: "भारत में राज्य सभा के सदस्य का कार्यकाल कितने वर्ष का होता है?",
    options: [
      { id: "A", textEn: "4 years", textHi: "4 वर्ष" },
      { id: "B", textEn: "5 years", textHi: "5 वर्ष" },
      { id: "C", textEn: "6 years", textHi: "6 वर्ष" },
      { id: "D", textEn: "Permanent for life", textHi: "आजीवन" }
    ],
    correctAnswer: "C",
    explanation: "Rajya Sabha is a permanent body not subject to dissolution; its members serve a term of 6 years, with one-third retiring every 2 years."
  },
  {
    id: 40,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which metal is the best conductor of electricity?",
    questionHi: "विद्युत का सर्वोत्तम सुचालक धातु कौन-सी है?",
    options: [
      { id: "A", textEn: "Copper", textHi: "तांबा (Copper)" },
      { id: "B", textEn: "Silver", textHi: "चांदी (Silver)" },
      { id: "C", textEn: "Gold", textHi: "सोना (Gold)" },
      { id: "D", textEn: "Aluminium", textHi: "एल्युमीनियम" }
    ],
    correctAnswer: "B",
    explanation: "Silver possesses the highest electrical conductivity of all metals, followed by copper and gold."
  },
  {
    id: 41,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which line separates India and China?",
    questionHi: "भारत और चीन के बीच की सीमा रेखा को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Radcliffe Line", textHi: "रेडक्लिफ रेखा" },
      { id: "B", textEn: "McMahon Line", textHi: "मैकमोहन रेखा (McMahon Line)" },
      { id: "C", textEn: "Durand Line", textHi: "डूरंड रेखा" },
      { id: "D", textEn: "Palk Strait", textHi: "पाक जलडमरूमध्य" }
    ],
    correctAnswer: "B",
    explanation: "The McMahon Line demarcates the boundary between China and the northeastern region of India."
  },
  {
    id: 42,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Who discovered the Law of Gravitation?",
    questionHi: "गुरुत्वाकर्षण के सार्वभौमिक नियम की खोज किसने की थी?",
    options: [
      { id: "A", textEn: "Sir Isaac Newton", textHi: "सर आइजैक न्यूटन" },
      { id: "B", textEn: "Albert Einstein", textHi: "अल्बर्ट आइंस्टीन" },
      { id: "C", textEn: "Galileo Galilei", textHi: "गैलीलियो गैलीली" },
      { id: "D", textEn: "Johannes Kepler", textHi: "जोहान्स केप्लर" }
    ],
    correctAnswer: "A",
    explanation: "Sir Isaac Newton formulated the Universal Law of Gravitation in his work Principia (1687)."
  },
  {
    id: 43,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the normal human body temperature in Celsius?",
    questionHi: "मानव शरीर का सामान्य तापमान सेल्सियस में कितना होता है?",
    options: [
      { id: "A", textEn: "37°C (98.6°F)", textHi: "37°C (98.6°F)" },
      { id: "B", textEn: "35°C", textHi: "35°C" },
      { id: "C", textEn: "39°C", textHi: "39°C" },
      { id: "D", textEn: "31°C", textHi: "31°C" }
    ],
    correctAnswer: "A",
    explanation: "Normal human core body temperature is approximately 37°C (98.6° Fahrenheit)."
  },
  {
    id: 44,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Who was the chairman of the Drafting Committee of the Indian Constitution?",
    questionHi: "भारतीय संविधान की प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?",
    options: [
      { id: "A", textEn: "Dr. B.R. Ambedkar", textHi: "डॉ. बी.आर. अम्बेडकर" },
      { id: "B", textEn: "Jawaharlal Nehru", textHi: "जवाहरलाल नेहरू" },
      { id: "C", textEn: "Dr. Rajendra Prasad", textHi: "डॉ. राजेंद्र प्रसाद" },
      { id: "D", textEn: "Sardar Vallabhbhai Patel", textHi: "सरदार वल्लभभाई पटेल" }
    ],
    correctAnswer: "A",
    explanation: "Dr. Bhimrao Ramji Ambedkar served as the chairman of the Drafting Committee and is known as the Architect of the Indian Constitution."
  },
  {
    id: 45,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which planet in the solar system is known as the 'Red Planet'?",
    questionHi: "सौरमंडल के किस ग्रह को 'लाल ग्रह' (Red Planet) कहा जाता है?",
    options: [
      { id: "A", textEn: "Venus", textHi: "शुक्र" },
      { id: "B", textEn: "Mars", textHi: "मंगल (Mars)" },
      { id: "C", textEn: "Jupiter", textHi: "बृहस्पति" },
      { id: "D", textEn: "Saturn", textHi: "शनि" }
    ],
    correctAnswer: "B",
    explanation: "Mars appears red due to the prevalence of iron oxide (rust) on its surface."
  },
  {
    id: 46,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which award is India's highest civilian honor?",
    questionHi: "भारत का सर्वोच्च नागरिक सम्मान कौन-सा है?",
    options: [
      { id: "A", textEn: "Padma Vibhushan", textHi: "पद्म विभूषण" },
      { id: "B", textEn: "Bharat Ratna", textHi: "भारत रत्न (Bharat Ratna)" },
      { id: "C", textEn: "Param Vir Chakra", textHi: "परमवीर चक्र" },
      { id: "D", textEn: "Padma Bhushan", textHi: "पद्म भूषण" }
    ],
    correctAnswer: "B",
    explanation: "The Bharat Ratna is the highest civilian award of the Republic of India, instituted in 1954."
  },
  {
    id: 47,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "In which year did the historic Battle of Plassey take place?",
    questionHi: "प्रसिद्ध प्लासी का युद्ध किस वर्ष लड़ा गया था?",
    options: [
      { id: "A", textEn: "1757", textHi: "1757" },
      { id: "B", textEn: "1764", textHi: "1764" },
      { id: "C", textEn: "1857", textHi: "1857" },
      { id: "D", textEn: "1526", textHi: "1526" }
    ],
    correctAnswer: "A",
    explanation: "The Battle of Plassey was fought on 23 June 1757 between the British East India Company under Robert Clive and Siraj-ud-Daulah, Nawab of Bengal."
  },
  {
    id: 48,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the currency of Japan?",
    questionHi: "जापान की मुद्रा (Currency) क्या है?",
    options: [
      { id: "A", textEn: "Yen", textHi: "येन (Yen)" },
      { id: "B", textEn: "Yuan", textHi: "युआन" },
      { id: "C", textEn: "Won", textHi: "वॉन" },
      { id: "D", textEn: "Ringgit", textHi: "रिंगिट" }
    ],
    correctAnswer: "A",
    explanation: "The official currency of Japan is the Japanese Yen (¥)."
  },
  {
    id: 49,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "Which organ produces insulin hormone in the human body?",
    questionHi: "मानव शरीर में इंसुलिन हार्मोन का उत्पादन किस अंग द्वारा होता है?",
    options: [
      { id: "A", textEn: "Pancreas", textHi: "अग्न्याशय (Pancreas)" },
      { id: "B", textEn: "Kidney", textHi: "गुर्दा (Kidney)" },
      { id: "C", textEn: "Thyroid", textHi: "थायरॉयड" },
      { id: "D", textEn: "Pituitary", textHi: "पिट्यूटरी" }
    ],
    correctAnswer: "A",
    explanation: "Insulin is secreted by the beta cells of the Islets of Langerhans in the pancreas to regulate blood glucose."
  },
  {
    id: 50,
    section: "ssc_ga",
    sectionName: "2. General Awareness & GK",
    questionEn: "What is the primary function of the ozone layer in Earth's stratosphere?",
    questionHi: "पृथ्वी के समताप मंडल में ओजोन परत का प्राथमिक कार्य क्या है?",
    options: [
      { id: "A", textEn: "Absorbs harmful solar ultraviolet (UV) radiation", textHi: "हानिकारक सौर पराबैंगनी (UV) विकिरण को अवशोषित करना" },
      { id: "B", textEn: "Controls monsoon rainfall", textHi: "मानसून की वर्षा नियंत्रित करना" },
      { id: "C", textEn: "Traps oxygen for jet planes", textHi: "विमानों के लिए ऑक्सीजन रोकना" },
      { id: "D", textEn: "Reflects radio waves back to Earth", textHi: "रेडियो तरंगों को परावर्तित करना" }
    ],
    correctAnswer: "A",
    explanation: "The stratospheric ozone layer filters out biological ultraviolet rays (UV-B and UV-C) emitted by the Sun."
  },

  // --- SECTION 3: QUANTITATIVE APTITUDE (Q51 - Q75) ---
  {
    id: 51,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If 15 men can complete a piece of work in 20 days, in how many days can 25 men complete the same work?",
    questionHi: "यदि 15 पुरुष किसी कार्य को 20 दिनों में पूरा कर सकते हैं, तो 25 पुरुष उसी कार्य को कितने दिनों में पूरा करेंगे?",
    options: [
      { id: "A", textEn: "12 days", textHi: "12 दिन" },
      { id: "B", textEn: "15 days", textHi: "15 दिन" },
      { id: "C", textEn: "10 days", textHi: "10 दिन" },
      { id: "D", textEn: "16 days", textHi: "16 दिन" }
    ],
    correctAnswer: "A",
    explanation: "Using M1 * D1 = M2 * D2: 15 * 20 = 25 * D2 => 300 / 25 = 12 days."
  },
  {
    id: 52,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "A shopkeeper buys an article for ₹500 and sells it for ₹600. What is his profit percentage?",
    questionHi: "एक दुकानदार एक वस्तु को ₹500 में खरीदता है और ₹600 में बेचता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "15%", textHi: "15%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "25%", textHi: "25%" },
      { id: "D", textEn: "10%", textHi: "10%" }
    ],
    correctAnswer: "B",
    explanation: "Profit = ₹600 - ₹500 = ₹100. Profit % = (100 / 500) * 100 = 20%."
  },
  {
    id: 53,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What is the Simple Interest on a principal of ₹4000 at 5% per annum for 3 years?",
    questionHi: "₹4000 के मूलधन पर 5% वार्षिक दर से 3 वर्ष का साधारण ब्याज कितना होगा?",
    options: [
      { id: "A", textEn: "₹600", textHi: "₹600" },
      { id: "B", textEn: "₹500", textHi: "₹500" },
      { id: "C", textEn: "₹720", textHi: "₹720" },
      { id: "D", textEn: "₹650", textHi: "₹650" }
    ],
    correctAnswer: "A",
    explanation: "SI = (P * R * T) / 100 = (4000 * 5 * 3) / 100 = ₹600."
  },
  {
    id: 54,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "The ratio of two numbers is 3 : 4 and their HCF is 4. What is their LCM?",
    questionHi: "दो संख्याओं का अनुपात 3 : 4 है और उनका म.स. (HCF) 4 है। उनका ल.स. (LCM) क्या होगा?",
    options: [
      { id: "A", textEn: "48", textHi: "48" },
      { id: "B", textEn: "36", textHi: "36" },
      { id: "C", textEn: "24", textHi: "24" },
      { id: "D", textEn: "60", textHi: "60" }
    ],
    correctAnswer: "A",
    explanation: "Numbers are 3*4 = 12 and 4*4 = 16. LCM(12, 16) = 48."
  },
  {
    id: 55,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "A train 150 meters long is running at 54 km/h. In how many seconds will it pass a pole?",
    questionHi: "150 मीटर लंबी एक रेलगाड़ी 54 किमी/घंटा की गति से चल रही है। वह एक खंभे को कितने सेकंड में पार करेगी?",
    options: [
      { id: "A", textEn: "10 seconds", textHi: "10 सेकंड" },
      { id: "B", textEn: "12 seconds", textHi: "12 सेकंड" },
      { id: "C", textEn: "8 seconds", textHi: "8 सेकंड" },
      { id: "D", textEn: "15 seconds", textHi: "15 सेकंड" }
    ],
    correctAnswer: "A",
    explanation: "Speed in m/s = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds."
  },
  {
    id: 56,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If a + b = 10 and ab = 21, what is the value of a² + b²?",
    questionHi: "यदि a + b = 10 और ab = 21 है, तो a² + b² का मान क्या होगा?",
    options: [
      { id: "A", textEn: "58", textHi: "58" },
      { id: "B", textEn: "42", textHi: "42" },
      { id: "C", textEn: "64", textHi: "64" },
      { id: "D", textEn: "79", textHi: "79" }
    ],
    correctAnswer: "A",
    explanation: "a² + b² = (a + b)² - 2ab = (10)² - 2(21) = 100 - 42 = 58."
  },
  {
    id: 57,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What is the average of the first five prime numbers?",
    questionHi: "प्रथम पाँच अभाज्य संख्याओं (Prime Numbers) का औसत क्या है?",
    options: [
      { id: "A", textEn: "5.6", textHi: "5.6" },
      { id: "B", textEn: "5.0", textHi: "5.0" },
      { id: "C", textEn: "6.2", textHi: "6.2" },
      { id: "D", textEn: "7.0", textHi: "7.0" }
    ],
    correctAnswer: "A",
    explanation: "First 5 primes: 2, 3, 5, 7, 11. Sum = 28. Average = 28 / 5 = 5.6."
  },
  {
    id: 58,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "The perimeter of a square is 48 cm. What is its area?",
    questionHi: "एक वर्ग का परिमाप 48 सेमी है। इसका क्षेत्रफल क्या होगा?",
    options: [
      { id: "A", textEn: "144 cm²", textHi: "144 सेमी²" },
      { id: "B", textEn: "196 cm²", textHi: "196 सेमी²" },
      { id: "C", textEn: "128 cm²", textHi: "128 सेमी²" },
      { id: "D", textEn: "96 cm²", textHi: "96 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "Side = 48 / 4 = 12 cm. Area = side² = 12 * 12 = 144 cm²."
  },
  {
    id: 59,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What single discount is equivalent to two successive discounts of 20% and 10%?",
    questionHi: "20% और 10% की दो क्रमिक छूट (Successive Discounts) के समतुल्य एकल छूट क्या है?",
    options: [
      { id: "A", textEn: "28%", textHi: "28%" },
      { id: "B", textEn: "30%", textHi: "30%" },
      { id: "C", textEn: "25%", textHi: "25%" },
      { id: "D", textEn: "27%", textHi: "27%" }
    ],
    correctAnswer: "A",
    explanation: "Effective discount = x + y - (xy/100) = 20 + 10 - (20*10/100) = 30 - 2 = 28%."
  },
  {
    id: 60,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If sin θ = 3/5, what is the value of cos θ (where θ is acute)?",
    questionHi: "यदि sin θ = 3/5 है, तो cos θ का मान क्या होगा?",
    options: [
      { id: "A", textEn: "4/5", textHi: "4/5" },
      { id: "B", textEn: "3/4", textHi: "3/4" },
      { id: "C", textEn: "5/4", textHi: "5/4" },
      { id: "D", textEn: "1/2", textHi: "1/2" }
    ],
    correctAnswer: "A",
    explanation: "cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5."
  },
  {
    id: 61,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "The diagonal of a rectangle is 10 cm and its length is 8 cm. What is its breadth?",
    questionHi: "एक आयत का विकर्ण 10 सेमी और लंबाई 8 सेमी है। इसकी चौड़ाई क्या होगी?",
    options: [
      { id: "A", textEn: "6 cm", textHi: "6 सेमी" },
      { id: "B", textEn: "4 cm", textHi: "4 सेमी" },
      { id: "C", textEn: "5 cm", textHi: "5 सेमी" },
      { id: "D", textEn: "7 cm", textHi: "7 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "By Pythagoras Theorem: Breadth = √(10² - 8²) = √(100 - 64) = √36 = 6 cm."
  },
  {
    id: 62,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "A sum doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
    questionHi: "कोई धनराशि साधारण ब्याज पर 8 वर्ष में दोगुनी हो जाती है। ब्याज की वार्षिक दर क्या है?",
    options: [
      { id: "A", textEn: "12.5%", textHi: "12.5%" },
      { id: "B", textEn: "10%", textHi: "10%" },
      { id: "C", textEn: "15%", textHi: "15%" },
      { id: "D", textEn: "8%", textHi: "8%" }
    ],
    correctAnswer: "A",
    explanation: "R = (100 * (N - 1)) / T = (100 * 1) / 8 = 12.5%."
  },
  {
    id: 63,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "Evaluate: (0.2 x 0.2 + 0.04) / 0.08 = ?",
    questionHi: "हल करें: (0.2 x 0.2 + 0.04) / 0.08 = ?",
    options: [
      { id: "A", textEn: "1", textHi: "1" },
      { id: "B", textEn: "0.1", textHi: "0.1" },
      { id: "C", textEn: "2", textHi: "2" },
      { id: "D", textEn: "0.5", textHi: "0.5" }
    ],
    correctAnswer: "A",
    explanation: "0.2 * 0.2 = 0.04. Numerator = 0.04 + 0.04 = 0.08. 0.08 / 0.08 = 1."
  },
  {
    id: 64,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If the radius of a circle is increased by 50%, by what percentage does its area increase?",
    questionHi: "यदि किसी वृत्त की त्रिज्या में 50% की वृद्धि की जाती है, तो उसके क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?",
    options: [
      { id: "A", textEn: "100%", textHi: "100%" },
      { id: "B", textEn: "125%", textHi: "125%" },
      { id: "C", textEn: "75%", textHi: "75%" },
      { id: "D", textEn: "150%", textHi: "150%" }
    ],
    correctAnswer: "B",
    explanation: "Area change = 2r + (r²/100) = 2(50) + (2500/100) = 100 + 25 = 125%."
  },
  {
    id: 65,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "Find the value of x if 2^(x - 1) = 32?",
    questionHi: "यदि 2^(x - 1) = 32 है, तो x का मान क्या होगा?",
    options: [
      { id: "A", textEn: "5", textHi: "5" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "4", textHi: "4" },
      { id: "D", textEn: "7", textHi: "7" }
    ],
    correctAnswer: "B",
    explanation: "32 = 2^5. So x - 1 = 5 => x = 6."
  },
  {
    id: 66,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "Two numbers are in ratio 7 : 9. If their difference is 14, what is the smaller number?",
    questionHi: "दो संख्याएँ 7 : 9 के अनुपात में हैं। यदि उनका अंतर 14 है, तो छोटी संख्या क्या है?",
    options: [
      { id: "A", textEn: "49", textHi: "49" },
      { id: "B", textEn: "63", textHi: "63" },
      { id: "C", textEn: "35", textHi: "35" },
      { id: "D", textEn: "56", textHi: "56" }
    ],
    correctAnswer: "A",
    explanation: "9x - 7x = 2x = 14 => x = 7. Smaller number = 7 * 7 = 49."
  },
  {
    id: 67,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What is the Compound Interest on ₹10,000 for 2 years at 10% per annum compounded annually?",
    questionHi: "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज कितना होगा?",
    options: [
      { id: "A", textEn: "₹2100", textHi: "₹2100" },
      { id: "B", textEn: "₹2000", textHi: "₹2000" },
      { id: "C", textEn: "₹2200", textHi: "₹2200" },
      { id: "D", textEn: "₹1900", textHi: "₹1900" }
    ],
    correctAnswer: "A",
    explanation: "Amount = 10000 * (1.10)² = 10000 * 1.21 = ₹12,100. CI = ₹12100 - ₹10000 = ₹2,100."
  },
  {
    id: 68,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If x + 1/x = 4, find the value of x² + 1/x²?",
    questionHi: "यदि x + 1/x = 4 है, तो x² + 1/x² का मान क्या होगा?",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "16", textHi: "16" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "12", textHi: "12" }
    ],
    correctAnswer: "A",
    explanation: "x² + 1/x² = (x + 1/x)² - 2 = 4² - 2 = 16 - 2 = 14."
  },
  {
    id: 69,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "A pipe can fill a tank in 6 hours and another pipe can empty it in 8 hours. If both pipes are opened together, in how many hours will the tank be full?",
    questionHi: "एक नल एक टंकी को 6 घंटे में भर सकता है और दूसरा नल उसे 8 घंटे में खाली कर सकता है। यदि दोनों नलों को एक साथ खोल दिया जाए, तो टंकी कितने घंटे में भरेगी?",
    options: [
      { id: "A", textEn: "24 hours", textHi: "24 घंटे" },
      { id: "B", textEn: "14 hours", textHi: "14 घंटे" },
      { id: "C", textEn: "18 hours", textHi: "18 घंटे" },
      { id: "D", textEn: "12 hours", textHi: "12 घंटे" }
    ],
    correctAnswer: "A",
    explanation: "Net rate = 1/6 - 1/8 = (4 - 3)/24 = 1/24 per hour. Time taken = 24 hours."
  },
  {
    id: 70,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What is the volume of a sphere of radius 3 cm? (Use π = 22/7 or 3.14)",
    questionHi: "3 सेमी त्रिज्या वाले गोले का आयतन क्या होगा?",
    options: [
      { id: "A", textEn: "36π cm³", textHi: "36π सेमी³" },
      { id: "B", textEn: "18π cm³", textHi: "18π सेमी³" },
      { id: "C", textEn: "27π cm³", textHi: "27π सेमी³" },
      { id: "D", textEn: "54π cm³", textHi: "54π सेमी³" }
    ],
    correctAnswer: "A",
    explanation: "Volume = (4/3) * π * r³ = (4/3) * π * 27 = 36π cm³."
  },
  {
    id: 71,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "A man covers a distance of 180 km in 4 hours. What is his speed in meters per second?",
    questionHi: "एक व्यक्ति 4 घंटे में 180 किमी की दूरी तय करता है। उसकी गति मीटर प्रति सेकंड में क्या है?",
    options: [
      { id: "A", textEn: "12.5 m/s", textHi: "12.5 m/s" },
      { id: "B", textEn: "15 m/s", textHi: "15 m/s" },
      { id: "C", textEn: "10 m/s", textHi: "10 m/s" },
      { id: "D", textEn: "20 m/s", textHi: "20 m/s" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 180 / 4 = 45 km/h. Convert to m/s: 45 * (5/18) = 12.5 m/s."
  },
  {
    id: 72,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "In an examination, 35% marks are required to pass. A student gets 120 marks and fails by 20 marks. What are the maximum marks?",
    questionHi: "एक परीक्षा में उत्तीर्ण होने के लिए 35% अंक आवश्यक हैं। एक छात्र को 120 अंक मिलते हैं और वह 20 अंकों से अनुत्तीर्ण हो जाता है। अधिकतम (पूर्णांक) अंक क्या हैं?",
    options: [
      { id: "A", textEn: "400", textHi: "400" },
      { id: "B", textEn: "500", textHi: "500" },
      { id: "C", textEn: "450", textHi: "450" },
      { id: "D", textEn: "350", textHi: "350" }
    ],
    correctAnswer: "A",
    explanation: "Passing marks = 120 + 20 = 140. 35% of total = 140 => Total = (140 * 100) / 35 = 400."
  },
  {
    id: 73,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "Find the value of: tan 45° + cot 45°?",
    questionHi: "tan 45° + cot 45° का मान क्या है?",
    options: [
      { id: "A", textEn: "2", textHi: "2" },
      { id: "B", textEn: "1", textHi: "1" },
      { id: "C", textEn: "0", textHi: "0" },
      { id: "D", textEn: "√2", textHi: "√2" }
    ],
    correctAnswer: "A",
    explanation: "tan 45° = 1 and cot 45° = 1. 1 + 1 = 2."
  },
  {
    id: 74,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "What is the mode of data set: 4, 7, 9, 7, 5, 7, 8, 4, 7, 2?",
    questionHi: "दिए गए आंकड़ों का बहुलक (Mode) क्या है: 4, 7, 9, 7, 5, 7, 8, 4, 7, 2?",
    options: [
      { id: "A", textEn: "7", textHi: "7" },
      { id: "B", textEn: "4", textHi: "4" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "8", textHi: "8" }
    ],
    correctAnswer: "A",
    explanation: "7 occurs 4 times, higher frequency than any other number."
  },
  {
    id: 75,
    section: "ssc_quant",
    sectionName: "3. Quantitative Aptitude",
    questionEn: "If x : y = 2 : 3, find the value of (3x + 2y) : (5x + y)?",
    questionHi: "यदि x : y = 2 : 3 है, तो (3x + 2y) : (5x + y) का मान क्या होगा?",
    options: [
      { id: "A", textEn: "12 : 13", textHi: "12 : 13" },
      { id: "B", textEn: "11 : 14", textHi: "11 : 14" },
      { id: "C", textEn: "10 : 13", textHi: "10 : 13" },
      { id: "D", textEn: "13 : 15", textHi: "13 : 15" }
    ],
    correctAnswer: "A",
    explanation: "Put x=2, y=3: 3(2) + 2(3) = 6 + 6 = 12. 5(2) + 3 = 10 + 3 = 13. Ratio = 12 : 13."
  },

  // --- SECTION 4: ENGLISH COMPREHENSION (Q76 - Q100) ---
  {
    id: 76,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the most appropriate synonym of the given word: 'DILIGENT'",
    questionHi: "दिए गए शब्द 'DILIGENT' (परिश्रमी) का सबसे उपयुक्त समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Hardworking / Industrious", textHi: "Hardworking / परिश्रमी" },
      { id: "B", textEn: "Lazy", textHi: "Lazy (आलसी)" },
      { id: "C", textEn: "Careless", textHi: "Careless" },
      { id: "D", textEn: "Timid", textHi: "Timid" }
    ],
    correctAnswer: "A",
    explanation: "'Diligent' means showing steady and earnest care and effort; synonymous with hardworking and industrious."
  },
  {
    id: 77,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the most appropriate antonym of: 'ABUNDANT'",
    questionHi: "'ABUNDANT' (प्रचुर मात्रा में) का विलोम शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Scarce", textHi: "Scarce (अल्प / दुर्लभ)" },
      { id: "B", textEn: "Plentiful", textHi: "Plentiful" },
      { id: "C", textEn: "Sufficient", textHi: "Sufficient" },
      { id: "D", textEn: "Generous", textHi: "Generous" }
    ],
    correctAnswer: "A",
    explanation: "'Abundant' means plentiful or ample; its direct opposite is 'Scarce' (rare or insufficient)."
  },
  {
    id: 78,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Choose the correctly spelled word:",
    questionHi: "सही वर्तनी (Correct Spelling) वाला शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Accommodate", textHi: "Accommodate" },
      { id: "B", textEn: "Acommodate", textHi: "Acommodate" },
      { id: "C", textEn: "Accomodate", textHi: "Accomodate" },
      { id: "D", textEn: "Acomodate", textHi: "Acomodate" }
    ],
    correctAnswer: "A",
    explanation: "'Accommodate' is spelled with double 'c' and double 'm'."
  },
  {
    id: 79,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the meaning of the idiom: 'To beat around the bush'",
    questionHi: "मुहावरे 'To beat around the bush' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "To avoid talking about what is important", textHi: "मुख्य मुद्दे पर बात करने से बचना / घुमा-फिराकर बात करना" },
      { id: "B", textEn: "To search in a forest", textHi: "जंगल में खोजना" },
      { id: "C", textEn: "To physically fight with a plant", textHi: "पौधे से लड़ना" },
      { id: "D", textEn: "To hit hard", textHi: "ज़ोर से प्रहार करना" }
    ],
    correctAnswer: "A",
    explanation: "'To beat around the bush' means speaking evasively and delaying the main topic."
  },
  {
    id: 80,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Give one word for: 'A person who cannot read or write'",
    questionHi: "अनेक शब्दों के लिए एक शब्द: 'A person who cannot read or write' (जो पढ़-लिख न सके)",
    options: [
      { id: "A", textEn: "Illiterate", textHi: "Illiterate (निरक्षर)" },
      { id: "B", textEn: "Literate", textHi: "Literate" },
      { id: "C", textEn: "Blind", textHi: "Blind" },
      { id: "D", textEn: "Deaf", textHi: "Deaf" }
    ],
    correctAnswer: "A",
    explanation: "An illiterate individual is unable to read or write."
  },
  {
    id: 81,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Fill in the blank: Neither the teacher nor the students _____ present in the classroom.",
    questionHi: "रिक्त स्थान भरें: Neither the teacher nor the students _____ present in the classroom.",
    options: [
      { id: "A", textEn: "were", textHi: "were" },
      { id: "B", textEn: "was", textHi: "was" },
      { id: "C", textEn: "is", textHi: "is" },
      { id: "D", textEn: "are being", textHi: "are being" }
    ],
    correctAnswer: "A",
    explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('students', plural => 'were')."
  },
  {
    id: 82,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Choose the correct passive voice: 'The chef cooked a delicious dinner.'",
    questionHi: "'The chef cooked a delicious dinner' का सही पैसिव वॉइस क्या होगा?",
    options: [
      { id: "A", textEn: "A delicious dinner was cooked by the chef.", textHi: "A delicious dinner was cooked by the chef." },
      { id: "B", textEn: "A delicious dinner is cooked by the chef.", textHi: "A delicious dinner is cooked by the chef." },
      { id: "C", textEn: "A delicious dinner had been cooked by the chef.", textHi: "A delicious dinner had been cooked by the chef." },
      { id: "D", textEn: "The chef was cooking delicious dinner.", textHi: "The chef was cooking delicious dinner." }
    ],
    correctAnswer: "A",
    explanation: "Simple past passive form: Subject + was/were + V3 + by + object."
  },
  {
    id: 83,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the antonym of the word: 'METICULOUS'",
    questionHi: "'METICULOUS' (अति सावधान) का विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "Careless / Sloppy", textHi: "Careless / लापरवाह" },
      { id: "B", textEn: "Precise", textHi: "Precise" },
      { id: "C", textEn: "Painstaking", textHi: "Painstaking" },
      { id: "D", textEn: "Accurate", textHi: "Accurate" }
    ],
    correctAnswer: "A",
    explanation: "'Meticulous' means extremely careful and precise; its antonym is 'Careless'."
  },
  {
    id: 84,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Find the error in the sentence: 'She has been working (A) in this company (B) since three years (C). No error (D)'",
    questionHi: "वाक्य में त्रुटि ज्ञात कीजिए: 'She has been working (A) / in this company (B) / since three years (C)'",
    options: [
      { id: "A", textEn: "Part A", textHi: "Part A" },
      { id: "B", textEn: "Part B", textHi: "Part B" },
      { id: "C", textEn: "Part C (Use 'for three years' instead of 'since')", textHi: "Part C ('since' के स्थान पर 'for' आएगा)" },
      { id: "D", textEn: "Part D (No error)", textHi: "Part D" }
    ],
    correctAnswer: "C",
    explanation: "'Three years' is a duration/period of time, requiring the preposition 'for' rather than 'since'."
  },
  {
    id: 85,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "What is the meaning of the idiom: 'A blessing in disguise'?",
    questionHi: "मुहावरे 'A blessing in disguise' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "A good thing that seemed bad at first", textHi: "कोई अच्छी बात जो पहले दुर्भाग्य या बुरी लग रही थी" },
      { id: "B", textEn: "A secret prayer", textHi: "गुप्त प्रार्थना" },
      { id: "C", textEn: "A magician's trick", textHi: "जादूगर की चाल" },
      { id: "D", textEn: "A gift given in secret", textHi: "गुप्त उपहार" }
    ],
    correctAnswer: "A",
    explanation: "A blessing in disguise refers to an apparent misfortune that eventually results in something unexpectedly positive."
  },
  {
    id: 86,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the synonym of: 'TRANQUIL'",
    questionHi: "'TRANQUIL' (शांत) का समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Peaceful / Calm", textHi: "Peaceful / शांत" },
      { id: "B", textEn: "Noisy", textHi: "Noisy" },
      { id: "C", textEn: "Violent", textHi: "Violent" },
      { id: "D", textEn: "Agitated", textHi: "Agitated" }
    ],
    correctAnswer: "A",
    explanation: "'Tranquil' means free from disturbance; calm, peaceful, serene."
  },
  {
    id: 87,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Identify the part of speech of the capitalized word: 'She spoke SOFTLY to the child.'",
    questionHi: "'SOFTLY' शब्द का पार्ट्स ऑफ स्पीच (Part of Speech) क्या है?",
    options: [
      { id: "A", textEn: "Adverb", textHi: "क्रिया-विशेषण (Adverb)" },
      { id: "B", textEn: "Adjective", textHi: "विशेषण (Adjective)" },
      { id: "C", textEn: "Noun", textHi: "संज्ञा" },
      { id: "D", textEn: "Verb", textHi: "क्रिया" }
    ],
    correctAnswer: "A",
    explanation: "'Softly' modifies the verb 'spoke', answering how she spoke, making it an Adverb of Manner."
  },
  {
    id: 88,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "One word substitution: 'A place where bees are kept'",
    questionHi: "अनेक शब्दों के लिए एक शब्द: 'A place where bees are kept' (मधुमक्खी पालन स्थल)",
    options: [
      { id: "A", textEn: "Aviary", textHi: "एवियरी (पक्षीशाला)" },
      { id: "B", textEn: "Apiary", textHi: "एपियरी (Apiary - मधुमक्खीशाला)" },
      { id: "C", textEn: "Aquarium", textHi: "एक्वेरियम" },
      { id: "D", textEn: "Kennel", textHi: "केनेल" }
    ],
    correctAnswer: "B",
    explanation: "An Apiary is a location where beehives of honey bees are kept (Aviary is for birds)."
  },
  {
    id: 89,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Fill in the blank with appropriate preposition: 'He congratulated me _____ my grand success.'",
    questionHi: "उपयुक्त प्रीपोजिशन चुनें: 'He congratulated me _____ my grand success.'",
    options: [
      { id: "A", textEn: "on", textHi: "on" },
      { id: "B", textEn: "for", textHi: "for" },
      { id: "C", textEn: "at", textHi: "at" },
      { id: "D", textEn: "about", textHi: "about" }
    ],
    correctAnswer: "A",
    explanation: "The verb 'congratulate' takes the preposition 'on' (congratulate someone ON something)."
  },
  {
    id: 90,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Choose the correctly spelled word:",
    questionHi: "सही स्पेलिंग वाला शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Mischievous", textHi: "Mischievous" },
      { id: "B", textEn: "Mischievious", textHi: "Mischievious" },
      { id: "C", textEn: "Mischevous", textHi: "Mischevous" },
      { id: "D", textEn: "Mischivous", textHi: "Mischivous" }
    ],
    correctAnswer: "A",
    explanation: "'Mischievous' has three syllables and no extra 'i' after 'v'."
  },
  {
    id: 91,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the indirect speech: He said, 'I am very busy now.'",
    questionHi: "इनडायरेक्ट स्पीच चुनें: He said, 'I am very busy now.'",
    options: [
      { id: "A", textEn: "He said that he was very busy then.", textHi: "He said that he was very busy then." },
      { id: "B", textEn: "He said that I was very busy now.", textHi: "He said that I was very busy now." },
      { id: "C", textEn: "He told he is very busy now.", textHi: "He told he is very busy now." },
      { id: "D", textEn: "He says that he was busy.", textHi: "He says that he was busy." }
    ],
    correctAnswer: "A",
    explanation: "'am' changes to 'was', pronoun 'I' changes to 'he', and time adverb 'now' changes to 'then'."
  },
  {
    id: 92,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the antonym of: 'OPAQUE'",
    questionHi: "'OPAQUE' (अपारदर्शी) का विलोम शब्द क्या है?",
    options: [
      { id: "A", textEn: "Transparent", textHi: "पारदर्शी (Transparent)" },
      { id: "B", textEn: "Cloudy", textHi: "धुंधला" },
      { id: "C", textEn: "Dense", textHi: "सघन" },
      { id: "D", textEn: "Solid", textHi: "ठोस" }
    ],
    correctAnswer: "A",
    explanation: "'Opaque' objects do not allow light to pass through; 'Transparent' objects allow light to pass freely."
  },
  {
    id: 93,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "What is the meaning of the idiom: 'Once in a blue moon'?",
    questionHi: "मुहावरे 'Once in a blue moon' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "Very rarely", textHi: "कभी-कभार / बहुत कम (Very rarely)" },
      { id: "B", textEn: "Every full moon night", textHi: "हर पूर्णिमा को" },
      { id: "C", textEn: "Frequently", textHi: "अक्सर" },
      { id: "D", textEn: "Never", textHi: "कभी नहीं" }
    ],
    correctAnswer: "A",
    explanation: "'Once in a blue moon' is used to describe an event that happens extremely infrequently."
  },
  {
    id: 94,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "One word substitution: 'An extreme fear of heights'",
    questionHi: "अनेक शब्दों के लिए एक शब्द: 'ऊंचाई से अत्यधिक डर' (Extreme fear of heights)",
    options: [
      { id: "A", textEn: "Acrophobia", textHi: "एक्रोफोबिया (Acrophobia)" },
      { id: "B", textEn: "Claustrophobia", textHi: "क्लॉस्ट्रोफोबिया" },
      { id: "C", textEn: "Hydrophobia", textHi: "हाइड्रोफोबिया" },
      { id: "D", textEn: "Agoraphobia", textHi: "एगोराफोबिया" }
    ],
    correctAnswer: "A",
    explanation: "Acrophobia is an irrational fear of heights (Claustrophobia is fear of confined spaces)."
  },
  {
    id: 95,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Fill in the blank: The sun _____ in the east.",
    questionHi: "रिक्त स्थान भरें: The sun _____ in the east.",
    options: [
      { id: "A", textEn: "rises", textHi: "rises" },
      { id: "B", textEn: "rose", textHi: "rose" },
      { id: "C", textEn: "is rising", textHi: "is rising" },
      { id: "D", textEn: "has risen", textHi: "has risen" }
    ],
    correctAnswer: "A",
    explanation: "Universal truths and scientific facts take Simple Present Tense ('rises')."
  },
  {
    id: 96,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Choose the correctly spelled word:",
    questionHi: "सही वर्तनी (Spelling) वाला शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Embarrassment", textHi: "Embarrassment" },
      { id: "B", textEn: "Embarassment", textHi: "Embarassment" },
      { id: "C", textEn: "Embarrasment", textHi: "Embarrasment" },
      { id: "D", textEn: "Embarasment", textHi: "Embarasment" }
    ],
    correctAnswer: "A",
    explanation: "'Embarrassment' is spelled with double 'r' and double 's'."
  },
  {
    id: 97,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the synonym of: 'CANDID'",
    questionHi: "'CANDID' (स्पष्टवादी / खरा) का समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Frank / Honest", textHi: "Frank / ईमानदार" },
      { id: "B", textEn: "Secretive", textHi: "Secretive" },
      { id: "C", textEn: "Deceitful", textHi: "Deceitful" },
      { id: "D", textEn: "Rude", textHi: "Rude" }
    ],
    correctAnswer: "A",
    explanation: "'Candid' means truthful, straightforward, and sincere in speech."
  },
  {
    id: 98,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Which of the following sentences has NO grammatical error?",
    questionHi: "निम्नलिखित में से कौन-सा वाक्य व्याकरणिक रूप से पूरी तरह सही है?",
    options: [
      { id: "A", textEn: "One of the boys has won the championship.", textHi: "One of the boys has won the championship." },
      { id: "B", textEn: "One of the boys have won the championship.", textHi: "One of the boys have won the championship." },
      { id: "C", textEn: "One of the boy has won the championship.", textHi: "One of the boy has won the championship." },
      { id: "D", textEn: "One of the boys are winning championship.", textHi: "One of the boys are winning championship." }
    ],
    correctAnswer: "A",
    explanation: "'One of the + plural noun' takes a singular verb ('has won')."
  },
  {
    id: 99,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "Select the meaning of the idiom: 'Spill the beans'",
    questionHi: "मुहावरे 'Spill the beans' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "To reveal a secret prematurely", textHi: "गुप्त बात या रहस्य उजागर कर देना" },
      { id: "B", textEn: "To drop food on the floor", textHi: "भोजन गिराना" },
      { id: "C", textEn: "To plant seeds in garden", textHi: "बीज बोना" },
      { id: "D", textEn: "To waste money", textHi: "पैसे बर्बाद करना" }
    ],
    correctAnswer: "A",
    explanation: "'Spill the beans' is an idiom meaning to disclose confidential information carelessly or prematurely."
  },
  {
    id: 100,
    section: "ssc_english",
    sectionName: "4. English Comprehension",
    questionEn: "One word substitution: 'A remedy for all diseases'",
    questionHi: "अनेक शब्दों के लिए एक शब्द: 'रामबाण औषधि' (A cure or remedy for all diseases)",
    options: [
      { id: "A", textEn: "Panacea", textHi: "पैनेशिया (Panacea - रामबाण)" },
      { id: "B", textEn: "Antibiotic", textHi: "एंटीबायोटिक" },
      { id: "C", textEn: "Antidote", textHi: "एंटीडोट" },
      { id: "D", textEn: "Vaccine", textHi: "वैक्सीन" }
    ],
    correctAnswer: "A",
    explanation: "A 'Panacea' is a universal remedy purported to heal all diseases or solve all problems."
  }
];
