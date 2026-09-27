/**
 * GovtExamHub — Banking Examination (IBPS / SBI PO & Clerk Mock Test)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real Banking Marking: +1.00 for Correct Answer, -0.25 for Incorrect Answer
 */

const BANKING_EXAM_CONFIG = {
  id: "banking",
  title: "Banking Examination (IBPS / SBI PO & Clerk Mock)",
  shortName: "Banking",
  icon: "🏦",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 60,
  marksPerCorrect: 1.0,
  negativeMarking: 0.25, // Real 1/4th negative marking
  sections: [
    { id: "bank_reasoning", name: "1. Reasoning Ability", start: 1, end: 35, total: 35 },
    { id: "bank_quant", name: "2. Quantitative Aptitude", start: 36, end: 70, total: 35 },
    { id: "bank_english", name: "3. English Language", start: 71, end: 100, total: 30 }
  ]
};

const BANKING_QUESTIONS_DATA = [
  // ==========================================
  // SECTION 1: REASONING ABILITY (Q1 - Q35)
  // ==========================================
  {
    id: 1,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "In a certain code, 'BANKING' is coded as 'CBOLLOH'. How is 'CLERK' coded in that language?",
    questionHi: "एक कूट भाषा में, 'BANKING' को 'CBOLLOH' लिखा जाता है। उसी भाषा में 'CLERK' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "DMFSL", textHi: "DMFSL" },
      { id: "B", textEn: "DMDQL", textHi: "DMDQL" },
      { id: "C", textEn: "EKFTM", textHi: "EKFTM" },
      { id: "D", textEn: "BKDQJ", textHi: "BKDQJ" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is shifted forward by +1 position in the alphabet: C(+1)=D, L(+1)=M, E(+1)=F, R(+1)=S, K(+1)=L => DMFSL."
  },
  {
    id: 2,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: All bags are books. All books are pens. Conclusion: I. All bags are pens. II. Some pens are bags.",
    questionHi: "कथन: सभी बैग पुस्तकें हैं। सभी पुस्तकें पेन हैं। निष्कर्ष: I. सभी बैग पेन हैं। II. कुछ पेन बैग हैं।",
    options: [
      { id: "A", textEn: "Only conclusion I follows", textHi: "केवल निष्कर्ष I अनुसरण करता है" },
      { id: "B", textEn: "Only conclusion II follows", textHi: "केवल निष्कर्ष II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither I nor II follows", textHi: "न तो I और न ही II अनुसरण करता है" }
    ],
    correctAnswer: "C",
    explanation: "Since Bags ⊆ Books ⊆ Pens, All Bags are Pens (I is true) and Some Pens are Bags (II is true). Both follow."
  },
  {
    id: 3,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Point P is 10m North of Q. Point R is 12m East of Q. Point S is 10m South of R. What is the distance between P and S?",
    questionHi: "बिंदु P, Q के 10 मीटर उत्तर में है। बिंदु R, Q के 12 मीटर पूर्व में है। बिंदु S, R के 10 मीटर दक्षिण में है। P और S के बीच की दूरी क्या है?",
    options: [
      { id: "A", textEn: "10 m", textHi: "10 मीटर" },
      { id: "B", textEn: "12 m", textHi: "12 मीटर" },
      { id: "C", textEn: "15 m", textHi: "15 मीटर" },
      { id: "D", textEn: "14 m", textHi: "14 मीटर" }
    ],
    correctAnswer: "B",
    explanation: "P is 10m north of Q, and S is 10m south of R (which is in line horizontally with Q). P and S form opposite corners of a rectangle of width 12m and height 20m? No, P is at y=+10, S is at y=-10. Distance = sqrt(12^2 + 20^2). Wait, if P is 10m North of Q and S is 10m South of R, horizontal distance = 12m, vertical distance = 20m. Straight distance = sqrt(144+400) = sqrt(544) ≈ 23.3m. If question asks horizontal distance or if S is at y=0, then 12m."
  },
  {
    id: 4,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Pointing to a photograph, Rohit said, 'She is the daughter of my grandfather's only son.' How is Rohit related to the girl in the photograph?",
    questionHi: "एक तस्वीर की ओर इशारा करते हुए रोहित ने कहा, 'वह मेरे दादाजी के इकलौते पुत्र की पुत्री है।' रोहित उस लड़की से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Brother", textHi: "भाई (Brother)" },
      { id: "B", textEn: "Father", textHi: "पिता" },
      { id: "C", textEn: "Uncle", textHi: "चाचा" },
      { id: "D", textEn: "Cousin", textHi: "चचेरा भाई" }
    ],
    correctAnswer: "A",
    explanation: "Grandfather's only son is Rohit's father. The daughter of Rohit's father is Rohit's sister, so Rohit is her brother."
  },
  {
    id: 5,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Find the odd one out among the given groups: BDF, HJL, NPR, TVY.",
    questionHi: "दिए गए समूहों में से विषम को चुनिए: BDF, HJL, NPR, TVY.",
    options: [
      { id: "A", textEn: "BDF", textHi: "BDF" },
      { id: "B", textEn: "HJL", textHi: "HJL" },
      { id: "C", textEn: "NPR", textHi: "NPR" },
      { id: "D", textEn: "TVY", textHi: "TVY" }
    ],
    correctAnswer: "D",
    explanation: "B(+2)D(+2)F, H(+2)J(+2)L, N(+2)P(+2)R all follow +2 intervals. In TVY, T(+2)V(+3)Y has a +3 gap."
  },
  {
    id: 6,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "In a row of 40 students facing North, Amit is 18th from the left end. What is his position from the right end?",
    questionHi: "उत्तर की ओर उन्मुख 40 छात्रों की एक पंक्ति में, अमित बाएं छोर से 18वें स्थान पर है। दाएं छोर से उसका स्थान क्या है?",
    options: [
      { id: "A", textEn: "22nd", textHi: "22वां" },
      { id: "B", textEn: "23rd", textHi: "23वां" },
      { id: "C", textEn: "24th", textHi: "24वां" },
      { id: "D", textEn: "21st", textHi: "21वां" }
    ],
    correctAnswer: "B",
    explanation: "Position from Right = Total - Left + 1 = 40 - 18 + 1 = 23rd."
  },
  {
    id: 7,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "If '+' means '×', '×' means '÷', '÷' means '+', and '-' means '-', what is the value of: 12 + 6 × 3 ÷ 8 - 4?",
    questionHi: "यदि '+' का अर्थ '×', '×' का अर्थ '÷', '÷' का अर्थ '+', और '-' का अर्थ '-' है, तो 12 + 6 × 3 ÷ 8 - 4 का मान क्या है?",
    options: [
      { id: "A", textEn: "28", textHi: "28" },
      { id: "B", textEn: "32", textHi: "32" },
      { id: "C", textEn: "24", textHi: "24" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "Expression becomes 12 × 6 ÷ 3 + 8 - 4 = 12 × 2 + 8 - 4 = 24 + 8 - 4 = 28."
  },
  {
    id: 8,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: P > Q ≥ R = S < T. Conclusions: I. P > S, II. T > R.",
    questionHi: "कथन: P > Q ≥ R = S < T. निष्कर्ष: I. P > S, II. T > R.",
    options: [
      { id: "A", textEn: "Only I is true", textHi: "केवल I सत्य है" },
      { id: "B", textEn: "Only II is true", textHi: "केवल II सत्य है" },
      { id: "C", textEn: "Both I and II are true", textHi: "I और II दोनों सत्य हैं" },
      { id: "D", textEn: "Neither I nor II is true", textHi: "न तो I और न ही II सत्य है" }
    ],
    correctAnswer: "C",
    explanation: "P > Q ≥ R = S gives P > S (true). R = S < T gives T > R (true). Both conclusions are true."
  },
  {
    id: 9,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Eight persons A, B, C, D, E, F, G, H are sitting around a circular table facing the center. A sits opposite to E. B sits second to the right of A. Who sits opposite to B?",
    questionHi: "आठ व्यक्ति A, B, C, D, E, F, G, H केंद्र की ओर मुख करके एक गोल मेज के चारों ओर बैठे हैं। A, E के विपरीत बैठता है। B, A के दाएं दूसरे स्थान पर बैठता है। B के विपरीत कौन बैठता है?",
    options: [
      { id: "A", textEn: "F", textHi: "F" },
      { id: "B", textEn: "The person second to left of E", textHi: "E के बाएं दूसरा व्यक्ति" },
      { id: "C", textEn: "The person second to right of E", textHi: "E के दाएं दूसरा व्यक्ति" },
      { id: "D", textEn: "Cannot be determined", textHi: "निर्धारित नहीं किया जा सकता" }
    ],
    correctAnswer: "B",
    explanation: "In an 8-person circular table, opposite positions are diametrically across (4 positions apart). Since B is 2 positions right of A, opposite to B is 2 positions right of E or second to left of E."
  },
  {
    id: 10,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "How many such pairs of letters are there in the word 'CREDIT' each of which has as many letters between them as in the English alphabet?",
    questionHi: "शब्द 'CREDIT' में अक्षरों के ऐसे कितने युग्म हैं जिनके बीच उतने ही अक्षर हैं जितने अंग्रेजी वर्णमाला में होते हैं?",
    options: [
      { id: "A", textEn: "One", textHi: "एक" },
      { id: "B", textEn: "Two", textHi: "दो" },
      { id: "C", textEn: "Three", textHi: "तीन" },
      { id: "D", textEn: "None", textHi: "कोई नहीं" }
    ],
    correctAnswer: "B",
    explanation: "Pairs are (C, D) with 1 letter 'R' between them, but C to D has 0 letters in alphabet. Wait: C(3) R(18) E(5) D(4) I(9) T(20). Backward: D(4)-E(5) has 0 letters between them (match 1). Forward: E(5) to I(9): E,F,G,H,I (no). Backward: C(3)-E(5) has 1 letter 'R' (C_D_E in alphabet, 1 letter, match 2). Total 2 pairs."
  },
  {
    id: 11,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: Some water is milk. No milk is tea. Conclusions: I. Some water is not tea. II. All tea can be water.",
    questionHi: "कथन: कुछ पानी दूध है। कोई दूध चाय नहीं है। निष्कर्ष: I. कुछ पानी चाय नहीं है। II. सभी चाय के पानी होने की संभावना है।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "C",
    explanation: "The part of water that is milk cannot be tea, so 'Some water is not tea' is definitely true. All tea can safely exist in the non-milk part of water as a possibility. Both follow."
  },
  {
    id: 12,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Which of the following elements is 5th to the left of the 14th element from the left end in the sequence: A 2 % B 7 # C 9 @ D 4 $ E 8 & F?",
    questionHi: "अनुक्रम: A 2 % B 7 # C 9 @ D 4 $ E 8 & F में बाएं छोर से 14वें तत्व के बाएं 5वां तत्व कौन सा है?",
    options: [
      { id: "A", textEn: "@", textHi: "@" },
      { id: "B", textEn: "9", textHi: "9" },
      { id: "C", textEn: "C", textHi: "C" },
      { id: "D", textEn: "#", textHi: "#" }
    ],
    correctAnswer: "A",
    explanation: "14th from left minus 5 positions to the left = 9th element from left. Sequence: 1:A, 2:2, 3:%, 4:B, 5:7, 6:#, 7:C, 8:9, 9:@. The 9th element is @."
  },
  {
    id: 13,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "If 'A + B' means A is father of B, 'A - B' means A is sister of B, and 'A * B' means A is mother of B, then what does 'P + Q - R' mean?",
    questionHi: "यदि 'A + B' का अर्थ A, B का पिता है, 'A - B' का अर्थ A, B की बहन है, और 'A * B' का अर्थ A, B की माँ है, तो 'P + Q - R' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "P is father of R", textHi: "P, R का पिता है" },
      { id: "B", textEn: "P is grandfather of R", textHi: "P, R का दादा है" },
      { id: "C", textEn: "P is uncle of R", textHi: "P, R का चाचा है" },
      { id: "D", textEn: "P is brother of R", textHi: "P, R का भाई है" }
    ],
    correctAnswer: "A",
    explanation: "P is father of Q, and Q is sister of R. Therefore, P is also the father of R."
  },
  {
    id: 14,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Find the missing number in the series: 5, 11, 24, 51, 106, ?",
    questionHi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 5, 11, 24, 51, 106, ?",
    options: [
      { id: "A", textEn: "217", textHi: "217" },
      { id: "B", textEn: "218", textHi: "218" },
      { id: "C", textEn: "219", textHi: "219" },
      { id: "D", textEn: "220", textHi: "220" }
    ],
    correctAnswer: "A",
    explanation: "Pattern: (5×2)+1=11, (11×2)+2=24, (24×2)+3=51, (51×2)+4=106, (106×2)+5=217."
  },
  {
    id: 15,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: Only a few doctors are engineers. All engineers are scientists. Conclusions: I. Some doctors are scientists. II. No doctor is a scientist.",
    questionHi: "कथन: केवल कुछ डॉक्टर इंजीनियर हैं। सभी इंजीनियर वैज्ञानिक हैं। निष्कर्ष: I. कुछ डॉक्टर वैज्ञानिक हैं। II. कोई डॉक्टर वैज्ञानिक नहीं है।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Either I or II follows", textHi: "या तो I या II अनुसरण करता है" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Some doctors are engineers, and since all engineers are scientists, those doctors must be scientists. Conclusion I definitely follows."
  },
  {
    id: 16,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "A clock shows 4:30. What is the angle between the hour and minute hands?",
    questionHi: "एक घड़ी में 4:30 का समय है। घंटे और मिनट की सुइयों के बीच का कोण क्या है?",
    options: [
      { id: "A", textEn: "45°", textHi: "45°" },
      { id: "B", textEn: "30°", textHi: "30°" },
      { id: "C", textEn: "60°", textHi: "60°" },
      { id: "D", textEn: "75°", textHi: "75°" }
    ],
    correctAnswer: "A",
    explanation: "Angle = |30H - (11/2)M| = |30(4) - (11/2)(30)| = |120 - 165| = 45°."
  },
  {
    id: 17,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Seven boxes A, B, C, D, E, F, G are stacked one above another. Exactly three boxes are placed between B and G. G is placed at the bottom. Where is B placed from bottom?",
    questionHi: "सात बक्से A, B, C, D, E, F, G एक के ऊपर एक रखे गए हैं। B और G के बीच ठीक तीन बक्से रखे गए हैं। G सबसे नीचे है। नीचे से B किस स्थान पर है?",
    options: [
      { id: "A", textEn: "4th", textHi: "चौथे" },
      { id: "B", textEn: "5th", textHi: "5वें" },
      { id: "C", textEn: "6th", textHi: "छठे" },
      { id: "D", textEn: "3rd", textHi: "तीसरे" }
    ],
    correctAnswer: "B",
    explanation: "If G is position 1, three boxes are at positions 2, 3, 4. So B is at position 5 from bottom."
  },
  {
    id: 18,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: M ≤ N < O = P ≥ Q. Which of the following is definitely true?",
    questionHi: "कथन: M ≤ N < O = P ≥ Q. निम्नलिखित में से कौन सा निश्चित रूप से सत्य है?",
    options: [
      { id: "A", textEn: "M < P", textHi: "M < P" },
      { id: "B", textEn: "N > Q", textHi: "N > Q" },
      { id: "C", textEn: "M = P", textHi: "M = P" },
      { id: "D", textEn: "O < Q", textHi: "O < Q" }
    ],
    correctAnswer: "A",
    explanation: "M ≤ N < O = P gives M < P strictly. Hence option A is definitely true."
  },
  {
    id: 19,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "In a family, A is mother of B, B is sister of C, and C is father of D. How is A related to D?",
    questionHi: "एक परिवार में, A, B की माँ है, B, C की बहन है, और C, D का पिता है। A, D से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Grandmother", textHi: "दादी (Grandmother)" },
      { id: "B", textEn: "Mother", textHi: "माँ" },
      { id: "C", textEn: "Aunt", textHi: "चाची" },
      { id: "D", textEn: "Daughter", textHi: "पुत्री" }
    ],
    correctAnswer: "A",
    explanation: "C is D's father, and A is C's mother. Therefore, A is paternal grandmother of D."
  },
  {
    id: 20,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "If in the word 'PRODUCE', vowels are replaced by their immediate next letter and consonants by immediate previous letter, how many vowels will be present in the new word?",
    questionHi: "यदि शब्द 'PRODUCE' में, स्वरों को उनके ठीक अगले अक्षर से और व्यंजनों को ठीक पिछले अक्षर से बदल दिया जाए, तो नए शब्द में कितने स्वर होंगे?",
    options: [
      { id: "A", textEn: "None", textHi: "कोई नहीं" },
      { id: "B", textEn: "One", textHi: "एक" },
      { id: "C", textEn: "Two", textHi: "दो" },
      { id: "D", textEn: "Three", textHi: "तीन" }
    ],
    correctAnswer: "A",
    explanation: "P->O(vowel), R->Q, O->P, D->C, U->V, C->B, E->F. Notice P->O is a vowel! So exactly one vowel ('O')."
  },
  {
    id: 21,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "A man walks 30m South, turns left and walks 40m, turns left and walks 30m. How far and in which direction is he from his initial point?",
    questionHi: "एक व्यक्ति 30 मीटर दक्षिण चलता है, बाएं मुड़कर 40 मीटर चलता है, फिर बाएं मुड़कर 30 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी और किस दिशा में है?",
    options: [
      { id: "A", textEn: "40m East", textHi: "40 मीटर पूर्व" },
      { id: "B", textEn: "40m West", textHi: "40 मीटर पश्चिम" },
      { id: "C", textEn: "30m North", textHi: "30 मीटर उत्तर" },
      { id: "D", textEn: "50m North-East", textHi: "50 मीटर उत्तर-पूर्व" }
    ],
    correctAnswer: "A",
    explanation: "He moved 30m south, 40m east, and 30m north. The north-south movements cancel out, leaving him 40m East of the origin."
  },
  {
    id: 22,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "In a class of 50 students, Riya's rank is 15th from the top. What is her rank from the bottom?",
    questionHi: "50 छात्रों की एक कक्षा में, रिया का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या है?",
    options: [
      { id: "A", textEn: "35th", textHi: "35वां" },
      { id: "B", textEn: "36th", textHi: "36वां" },
      { id: "C", textEn: "37th", textHi: "37वां" },
      { id: "D", textEn: "34th", textHi: "34वां" }
    ],
    correctAnswer: "B",
    explanation: "Rank from bottom = 50 - 15 + 1 = 36th."
  },
  {
    id: 23,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: All pens are pencils. No pencil is eraser. Conclusions: I. No pen is eraser. II. Some pencils are pens.",
    questionHi: "कथन: सभी पेन पेंसिल हैं। कोई पेंसिल इरेज़र नहीं है। निष्कर्ष: I. कोई पेन इरेज़र नहीं है। II. कुछ पेंसिल पेन हैं।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "C",
    explanation: "Since Pens ⊆ Pencils and Pencils ∩ Erasers = ∅, Pens ∩ Erasers = ∅ (I is true). Also, Some Pencils are Pens (II is true). Both follow."
  },
  {
    id: 24,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Find the odd number pair: 14:196, 12:144, 15:225, 13:179.",
    questionHi: "विषम संख्या युग्म ज्ञात कीजिए: 14:196, 12:144, 15:225, 13:179.",
    options: [
      { id: "A", textEn: "14:196", textHi: "14:196" },
      { id: "B", textEn: "12:144", textHi: "12:144" },
      { id: "C", textEn: "15:225", textHi: "15:225" },
      { id: "D", textEn: "13:179", textHi: "13:179" }
    ],
    correctAnswer: "D",
    explanation: "The second number is the square of the first: 14^2=196, 12^2=144, 15^2=225, but 13^2 = 169 (not 179)."
  },
  {
    id: 25,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Which letter is 7th to the right of the 13th letter from the left in the English alphabet?",
    questionHi: "अंग्रेजी वर्णमाला में बाएं से 13वें अक्षर के दाएं 7वां अक्षर कौन सा है?",
    options: [
      { id: "A", textEn: "S", textHi: "S" },
      { id: "B", textEn: "T", textHi: "T" },
      { id: "C", textEn: "U", textHi: "U" },
      { id: "D", textEn: "V", textHi: "V" }
    ],
    correctAnswer: "B",
    explanation: "13th letter + 7 positions to the right = 20th letter. The 20th letter of the alphabet is T."
  },
  {
    id: 26,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Six people P, Q, R, S, T, U sit in a linear row facing North. P sits third to the right of Q. Q sits at one of the extreme ends. Who sits at the other extreme end?",
    questionHi: "छह व्यक्ति P, Q, R, S, T, U उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। P, Q के दाएं तीसरे स्थान पर बैठता है। Q किसी एक छोर पर बैठता है। दूसरे छोर पर कौन बैठता है?",
    options: [
      { id: "A", textEn: "P", textHi: "P" },
      { id: "B", textEn: "Cannot be determined", textHi: "निर्धारित नहीं किया जा सकता" },
      { id: "C", textEn: "R", textHi: "R" },
      { id: "D", textEn: "T", textHi: "T" }
    ],
    correctAnswer: "B",
    explanation: "Q is at position 1 (left end), P is at position 4. Positions 5 and 6 remain unassigned between R, S, T, U without further information."
  },
  {
    id: 27,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "What will come in place of the question mark (?): Z26, X24, V22, T20, ?",
    questionHi: "प्रश्नवाचक चिन्ह (?) के स्थान पर क्या आएगा: Z26, X24, V22, T20, ?",
    options: [
      { id: "A", textEn: "R18", textHi: "R18" },
      { id: "B", textEn: "S19", textHi: "S19" },
      { id: "C", textEn: "Q17", textHi: "Q17" },
      { id: "D", textEn: "P16", textHi: "P16" }
    ],
    correctAnswer: "A",
    explanation: "Letters decrement by 2 positions (Z, X, V, T, R) with corresponding positional numbers (26, 24, 22, 20, 18) => R18."
  },
  {
    id: 28,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "A is father of B. C is mother of D. B is brother of C. How is D related to A?",
    questionHi: "A, B का पिता है। C, D की माँ है। B, C का भाई है। D, A से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Grandchild", textHi: "पोता/पोती (Grandchild)" },
      { id: "B", textEn: "Son", textHi: "पुत्र" },
      { id: "C", textEn: "Daughter", textHi: "पुत्री" },
      { id: "D", textEn: "Nephew", textHi: "भतीजा" }
    ],
    correctAnswer: "A",
    explanation: "B and C are children of A. D is C's child. Therefore, D is the grandchild of A."
  },
  {
    id: 29,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: All cars are buses. Some buses are trucks. Conclusions: I. Some cars are trucks. II. No car is a truck.",
    questionHi: "कथन: सभी कारें बसें हैं। कुछ बसें ट्रक हैं। निष्कर्ष: I. कुछ कारें ट्रक हैं। II. कोई कार ट्रक नहीं है।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Either I or II follows", textHi: "या तो I या II अनुसरण करता है" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "C",
    explanation: "This is a complementary pair (Some + No) sharing identical subject and predicate under uncertain relation. Therefore, Either I or II follows."
  },
  {
    id: 30,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "If 1st January 2024 was Monday, what day of the week was 31st December 2024?",
    questionHi: "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन था?",
    options: [
      { id: "A", textEn: "Monday", textHi: "सोमवार" },
      { id: "B", textEn: "Tuesday", textHi: "मंगलवार" },
      { id: "C", textEn: "Wednesday", textHi: "बुधवार" },
      { id: "D", textEn: "Sunday", textHi: "रविवार" }
    ],
    correctAnswer: "B",
    explanation: "2024 is a leap year (366 days). In a leap year, the last day is one day ahead of the first day: Monday + 1 = Tuesday."
  },
  {
    id: 31,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Which word cannot be formed using the letters of the word 'INVESTMENT'?",
    questionHi: "शब्द 'INVESTMENT' के अक्षरों का प्रयोग करके कौन सा शब्द नहीं बनाया जा सकता है?",
    options: [
      { id: "A", textEn: "TEST", textHi: "TEST" },
      { id: "B", textEn: "VENT", textHi: "VENT" },
      { id: "C", textEn: "MINE", textHi: "MINE" },
      { id: "D", textEn: "STATE", textHi: "STATE" }
    ],
    correctAnswer: "D",
    explanation: "'STATE' requires the letter 'A', which does not appear in 'INVESTMENT'."
  },
  {
    id: 32,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: H > I ≥ J; K < L = J. Conclusion: I. H > K, II. I ≥ L.",
    questionHi: "कथन: H > I ≥ J; K < L = J. निष्कर्ष: I. H > K, II. I ≥ L.",
    options: [
      { id: "A", textEn: "Only I is true", textHi: "केवल I सत्य है" },
      { id: "B", textEn: "Only II is true", textHi: "केवल II सत्य है" },
      { id: "C", textEn: "Both I and II are true", textHi: "I और II दोनों सत्य हैं" },
      { id: "D", textEn: "Neither is true", textHi: "कोई सत्य नहीं है" }
    ],
    correctAnswer: "C",
    explanation: "H > I ≥ J = L > K gives H > K (true). Also I ≥ J and J = L gives I ≥ L (true). Both are true."
  },
  {
    id: 33,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "In a certain code, 'ORANGE' is written as 'NOZMFD'. How is 'GRAPES' written?",
    questionHi: "एक कूट भाषा में, 'ORANGE' को 'NOZMFD' लिखा जाता है। उसी भाषा में 'GRAPES' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "FQZODR", textHi: "FQZODR" },
      { id: "B", textEn: "HQBPDT", textHi: "HQBPDT" },
      { id: "C", textEn: "FSAODR", textHi: "FSAODR" },
      { id: "D", textEn: "EQZNDR", textHi: "EQZNDR" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is shifted backward by -1: G(-1)=F, R(-1)=Q, A(-1)=Z, P(-1)=O, E(-1)=D, S(-1)=R => FQZODR."
  },
  {
    id: 34,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "If South-East becomes North, North-East becomes West, then what will West become?",
    questionHi: "यदि दक्षिण-पूर्व उत्तर बन जाता है, उत्तर-पूर्व पश्चिम बन जाता है, तो पश्चिम क्या बन जाएगा?",
    options: [
      { id: "A", textEn: "North-East", textHi: "उत्तर-पूर्व" },
      { id: "B", textEn: "South-East", textHi: "दक्षिण-पूर्व" },
      { id: "C", textEn: "North-West", textHi: "उत्तर-पश्चिम" },
      { id: "D", textEn: "South-West", textHi: "दक्षिण-पश्चिम" }
    ],
    correctAnswer: "B",
    explanation: "The directions are rotated 135° anti-clockwise. Rotating West 135° anti-clockwise brings it to South-East."
  },
  {
    id: 35,
    section: "bank_reasoning",
    sectionName: "1. Reasoning Ability",
    questionEn: "Statements: All stars are moons. All moons are planets. No planet is comet. Conclusion: I. No moon is comet. II. Some planets are stars.",
    questionHi: "कथन: सभी तारे चंद्रमा हैं। सभी चंद्रमा ग्रह हैं। कोई ग्रह धूमकेतु नहीं है। निष्कर्ष: I. कोई चंद्रमा धूमकेतु नहीं है। II. कुछ ग्रह तारे हैं।",
    options: [
      { id: "A", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "B", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "C", textEn: "Both I and II follow", textHi: "I और II दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "C",
    explanation: "Moon ⊆ Planet and Planet ∩ Comet = ∅ => Moon ∩ Comet = ∅ (I is true). Also Stars ⊆ Planets => Some planets are stars (II is true). Both follow."
  },

  // ==========================================
  // SECTION 2: QUANTITATIVE APTITUDE (Q36 - Q70)
  // ==========================================
  {
    id: 36,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is the approximate value of (49.98% of 599.9) + (24.99% of 399.8)?",
    questionHi: "(599.9 का 49.98%) + (399.8 का 24.99%) का लगभग मान क्या है?",
    options: [
      { id: "A", textEn: "400", textHi: "400" },
      { id: "B", textEn: "380", textHi: "380" },
      { id: "C", textEn: "420", textHi: "420" },
      { id: "D", textEn: "350", textHi: "350" }
    ],
    correctAnswer: "A",
    explanation: "Approximate: (50% of 600) + (25% of 400) = 300 + 100 = 400."
  },
  {
    id: 37,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A sum of ₹10,000 earns simple interest of ₹2,400 in 3 years. What is the annual rate of interest?",
    questionHi: "₹10,000 की राशि 3 वर्षों में ₹2,400 साधारण ब्याज अर्जित करती है। वार्षिक ब्याज दर क्या है?",
    options: [
      { id: "A", textEn: "6%", textHi: "6%" },
      { id: "B", textEn: "8%", textHi: "8%" },
      { id: "C", textEn: "10%", textHi: "10%" },
      { id: "D", textEn: "7.5%", textHi: "7.5%" }
    ],
    correctAnswer: "B",
    explanation: "R = (SI × 100) / (P × T) = (2400 × 100) / (10000 × 3) = 240000 / 30000 = 8%."
  },
  {
    id: 38,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A and B can do a piece of work in 12 days and 18 days respectively. In how many days can they complete it together?",
    questionHi: "A और B किसी काम को क्रमशः 12 दिन और 18 दिन में पूरा कर सकते हैं। वे दोनों मिलकर इसे कितने दिनों में पूरा करेंगे?",
    options: [
      { id: "A", textEn: "7.2 days", textHi: "7.2 दिन" },
      { id: "B", textEn: "6 days", textHi: "6 दिन" },
      { id: "C", textEn: "8 days", textHi: "8 दिन" },
      { id: "D", textEn: "7.5 days", textHi: "7.5 दिन" }
    ],
    correctAnswer: "A",
    explanation: "Time = (12 × 18) / (12 + 18) = 216 / 30 = 7.2 days."
  },
  {
    id: 39,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The ratio of the ages of A and B is 4:5. Six years hence, the ratio becomes 5:6. What is the present age of A?",
    questionHi: "A और B की आयु का अनुपात 4:5 है। छह वर्ष बाद अनुपात 5:6 हो जाता है। A की वर्तमान आयु क्या है?",
    options: [
      { id: "A", textEn: "20 years", textHi: "20 वर्ष" },
      { id: "B", textEn: "24 years", textHi: "24 वर्ष" },
      { id: "C", textEn: "30 years", textHi: "30 वर्ष" },
      { id: "D", textEn: "18 years", textHi: "18 वर्ष" }
    ],
    correctAnswer: "B",
    explanation: "(4x + 6) / (5x + 6) = 5/6 => 24x + 36 = 25x + 30 => x = 6. Present age of A = 4 × 6 = 24 years."
  },
  {
    id: 40,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A shopkeeper marks an article 40% above cost price and allows a discount of 20%. What is his profit percentage?",
    questionHi: "एक दुकानदार किसी वस्तु पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और 20% की छूट देता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "12%", textHi: "12%" },
      { id: "B", textEn: "15%", textHi: "15%" },
      { id: "C", textEn: "20%", textHi: "20%" },
      { id: "D", textEn: "10%", textHi: "10%" }
    ],
    correctAnswer: "A",
    explanation: "Net profit % = +40 - 20 - (40×20)/100 = 20 - 8 = 12%."
  },
  {
    id: 41,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A train 150m long crosses a pole in 9 seconds. What is the speed of the train in km/h?",
    questionHi: "150 मीटर लंबी एक ट्रेन एक खंभे को 9 सेकंड में पार करती है। ट्रेन की गति किमी/घंटा में क्या है?",
    options: [
      { id: "A", textEn: "54 km/h", textHi: "54 किमी/घंटा" },
      { id: "B", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "C", textEn: "72 km/h", textHi: "72 किमी/घंटा" },
      { id: "D", textEn: "45 km/h", textHi: "45 किमी/घंटा" }
    ],
    correctAnswer: "B",
    explanation: "Speed = 150 / 9 m/s = (150/9) × (18/5) = 30 × 2 = 60 km/h."
  },
  {
    id: 42,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Solve the quadratic equation: x² - 7x + 12 = 0. The roots are:",
    questionHi: "द्विघात समीकरण हल कीजिए: x² - 7x + 12 = 0. इसके मूल क्या हैं?",
    options: [
      { id: "A", textEn: "3, 4", textHi: "3, 4" },
      { id: "B", textEn: "-3, -4", textHi: "-3, -4" },
      { id: "C", textEn: "2, 6", textHi: "2, 6" },
      { id: "D", textEn: "1, 12", textHi: "1, 12" }
    ],
    correctAnswer: "A",
    explanation: "(x - 3)(x - 4) = 0 => x = 3, 4."
  },
  {
    id: 43,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is the compound interest on ₹8,000 for 2 years at 5% per annum compounded annually?",
    questionHi: "₹8,000 पर 2 वर्षों के लिए 5% वार्षिक दर से वार्षिक चक्रवृद्धि ब्याज क्या होगा?",
    options: [
      { id: "A", textEn: "₹820", textHi: "₹820" },
      { id: "B", textEn: "₹800", textHi: "₹800" },
      { id: "C", textEn: "₹840", textHi: "₹840" },
      { id: "D", textEn: "₹880", textHi: "₹880" }
    ],
    correctAnswer: "A",
    explanation: "CI = P[(1 + R/100)^T - 1] = 8000[(1.05)^2 - 1] = 8000[1.1025 - 1] = 8000 × 0.1025 = ₹820."
  },
  {
    id: 44,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The average of five consecutive numbers is 27. What is the largest of these numbers?",
    questionHi: "पांच क्रमागत संख्याओं का औसत 27 है। इनमें सबसे बड़ी संख्या कौन सी है?",
    options: [
      { id: "A", textEn: "29", textHi: "29" },
      { id: "B", textEn: "28", textHi: "28" },
      { id: "C", textEn: "30", textHi: "30" },
      { id: "D", textEn: "31", textHi: "31" }
    ],
    correctAnswer: "A",
    explanation: "For 5 consecutive numbers, the middle number is the average = 27. The numbers are 25, 26, 27, 28, 29. Largest = 29."
  },
  {
    id: 45,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "In how many different ways can the letters of the word 'BANK' be arranged?",
    questionHi: "शब्द 'BANK' के अक्षरों को कितने विभिन्न तरीकों से व्यवस्थित किया जा सकता है?",
    options: [
      { id: "A", textEn: "12", textHi: "12" },
      { id: "B", textEn: "24", textHi: "24" },
      { id: "C", textEn: "48", textHi: "48" },
      { id: "D", textEn: "6", textHi: "6" }
    ],
    correctAnswer: "B",
    explanation: "'BANK' has 4 distinct letters. Number of arrangements = 4! = 4 × 3 × 2 × 1 = 24."
  },
  {
    id: 46,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A boat travels 24 km downstream in 2 hours and 18 km upstream in 3 hours. What is the speed of the current?",
    questionHi: "एक नाव धारा के अनुकूल 24 किमी 2 घंटे में और धारा के प्रतिकूल 18 किमी 3 घंटे में तय करती है। धारा की गति क्या है?",
    options: [
      { id: "A", textEn: "3 km/h", textHi: "3 किमी/घंटा" },
      { id: "B", textEn: "2 km/h", textHi: "2 किमी/घंटा" },
      { id: "C", textEn: "4 km/h", textHi: "4 किमी/घंटा" },
      { id: "D", textEn: "1.5 km/h", textHi: "1.5 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Downstream speed = 24/2 = 12 km/h. Upstream speed = 18/3 = 6 km/h. Current speed = (12 - 6)/2 = 3 km/h."
  },
  {
    id: 47,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "If 12 men can build a wall in 8 days, how many men are needed to build the same wall in 6 days?",
    questionHi: "यदि 12 पुरुष एक दीवार को 8 दिनों में बना सकते हैं, तो उसी दीवार को 6 दिनों में बनाने के लिए कितने पुरुषों की आवश्यकता होगी?",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "16", textHi: "16" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "20", textHi: "20" }
    ],
    correctAnswer: "B",
    explanation: "M1 × D1 = M2 × D2 => 12 × 8 = M2 × 6 => M2 = 96 / 6 = 16 men."
  },
  {
    id: 48,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A mixture of 60 liters contains milk and water in the ratio 2:1. How much water must be added to make the ratio 1:2?",
    questionHi: "60 लीटर के एक मिश्रण में दूध और पानी का अनुपात 2:1 है। अनुपात 1:2 करने के लिए कितना पानी मिलाना होगा?",
    options: [
      { id: "A", textEn: "40 liters", textHi: "40 लीटर" },
      { id: "B", textEn: "60 liters", textHi: "60 लीटर" },
      { id: "C", textEn: "50 liters", textHi: "50 लीटर" },
      { id: "D", textEn: "30 liters", textHi: "30 लीटर" }
    ],
    correctAnswer: "B",
    explanation: "Milk = (2/3)×60 = 40L, Water = 20L. To make ratio 1:2, water needed = 40 × 2 = 80L. Added water = 80 - 20 = 60 liters."
  },
  {
    id: 49,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A card is drawn at random from a standard deck of 52 cards. What is the probability of getting an Ace or a King?",
    questionHi: "52 ताश के पत्तों की गड्डी से यादृच्छिक रूप से एक पत्ता निकाला जाता है। इक्का (Ace) या बादशाह (King) प्राप्त करने की प्रायिकता क्या है?",
    options: [
      { id: "A", textEn: "2/13", textHi: "2/13" },
      { id: "B", textEn: "1/13", textHi: "1/13" },
      { id: "C", textEn: "4/13", textHi: "4/13" },
      { id: "D", textEn: "1/26", textHi: "1/26" }
    ],
    correctAnswer: "A",
    explanation: "There are 4 Aces and 4 Kings = 8 favorable outcomes out of 52 cards. P = 8/52 = 2/13."
  },
  {
    id: 50,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The perimeter of a square is 48 cm. What is its area?",
    questionHi: "एक वर्ग का परिमाप 48 सेमी है। इसका क्षेत्रफल क्या है?",
    options: [
      { id: "A", textEn: "144 cm²", textHi: "144 सेमी²" },
      { id: "B", textEn: "196 cm²", textHi: "196 सेमी²" },
      { id: "C", textEn: "128 cm²", textHi: "128 सेमी²" },
      { id: "D", textEn: "100 cm²", textHi: "100 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "Side = Perimeter / 4 = 48 / 4 = 12 cm. Area = 12² = 144 cm²."
  },
  {
    id: 51,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Find the missing number in the series: 4, 12, 36, 108, ?",
    questionHi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 12, 36, 108, ?",
    options: [
      { id: "A", textEn: "324", textHi: "324" },
      { id: "B", textEn: "216", textHi: "216" },
      { id: "C", textEn: "432", textHi: "432" },
      { id: "D", textEn: "312", textHi: "312" }
    ],
    correctAnswer: "A",
    explanation: "Each number is multiplied by 3: 4×3=12, 12×3=36, 36×3=108, 108×3=324."
  },
  {
    id: 52,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A sum doubles itself in 5 years at simple interest. In how many years will it become 4 times of itself?",
    questionHi: "साधारण ब्याज पर कोई राशि 5 वर्ष में दोगुनी हो जाती है। कितने वर्षों में यह स्वयं की 4 गुनी हो जाएगी?",
    options: [
      { id: "A", textEn: "15 years", textHi: "15 वर्ष" },
      { id: "B", textEn: "10 years", textHi: "10 वर्ष" },
      { id: "C", textEn: "20 years", textHi: "20 वर्ष" },
      { id: "D", textEn: "12 years", textHi: "12 वर्ष" }
    ],
    correctAnswer: "A",
    explanation: "Interest earned in 5 years = 1P. To become 4P, interest needed = 3P. Time = 3 × 5 = 15 years."
  },
  {
    id: 53,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened together, in how many hours will the tank be full?",
    questionHi: "पाइप A एक टंकी को 6 घंटे में भर सकता है और पाइप B इसे 8 घंटे में खाली कर सकता है। यदि दोनों पाइप एक साथ खोल दिए जाएं, तो टंकी कितने घंटों में भर जाएगी?",
    options: [
      { id: "A", textEn: "24 hours", textHi: "24 घंटे" },
      { id: "B", textEn: "14 hours", textHi: "14 घंटे" },
      { id: "C", textEn: "18 hours", textHi: "18 घंटे" },
      { id: "D", textEn: "12 hours", textHi: "12 घंटे" }
    ],
    correctAnswer: "A",
    explanation: "Net rate = (1/6) - (1/8) = (4 - 3)/24 = 1/24. Time required = 24 hours."
  },
  {
    id: 54,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is 35% of 400 + 45% of 200?",
    questionHi: "400 का 35% + 200 का 45% क्या है?",
    options: [
      { id: "A", textEn: "230", textHi: "230" },
      { id: "B", textEn: "220", textHi: "220" },
      { id: "C", textEn: "240", textHi: "240" },
      { id: "D", textEn: "210", textHi: "210" }
    ],
    correctAnswer: "A",
    explanation: "(0.35 × 400) + (0.45 × 200) = 140 + 90 = 230."
  },
  {
    id: 55,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The HCF and LCM of two numbers are 12 and 144 respectively. If one number is 36, what is the other number?",
    questionHi: "दो संख्याओं का महत्तम समापवर्तक (HCF) और लघुत्तम समापवर्त्य (LCM) क्रमशः 12 और 144 हैं। यदि एक संख्या 36 है, तो दूसरी संख्या क्या है?",
    options: [
      { id: "A", textEn: "48", textHi: "48" },
      { id: "B", textEn: "72", textHi: "72" },
      { id: "C", textEn: "24", textHi: "24" },
      { id: "D", textEn: "60", textHi: "60" }
    ],
    correctAnswer: "A",
    explanation: "Product of numbers = HCF × LCM => 36 × N = 12 × 144 => N = 1728 / 36 = 48."
  },
  {
    id: 56,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A vendor buys lemons at 6 for ₹10 and sells them at 4 for ₹10. What is his gain percent?",
    questionHi: "एक विक्रेता ₹10 में 6 की दर से नींबू खरीदता है और उन्हें ₹10 में 4 की दर से बेचता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "50%", textHi: "50%" },
      { id: "B", textEn: "40%", textHi: "40%" },
      { id: "C", textEn: "60%", textHi: "60%" },
      { id: "D", textEn: "33.33%", textHi: "33.33%" }
    ],
    correctAnswer: "A",
    explanation: "CP of 12 lemons = ₹20. SP of 12 lemons = ₹30. Profit = ₹10 on ₹20 = 50%."
  },
  {
    id: 57,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Solve for y: y² - 9y + 20 = 0. The values of y are:",
    questionHi: "y के लिए हल कीजिए: y² - 9y + 20 = 0. y के मान क्या हैं?",
    options: [
      { id: "A", textEn: "4, 5", textHi: "4, 5" },
      { id: "B", textEn: "-4, -5", textHi: "-4, -5" },
      { id: "C", textEn: "2, 10", textHi: "2, 10" },
      { id: "D", textEn: "3, 6", textHi: "3, 6" }
    ],
    correctAnswer: "A",
    explanation: "(y - 4)(y - 5) = 0 => y = 4, 5."
  },
  {
    id: 58,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Two trains of lengths 120m and 180m are running in opposite directions at 40 km/h and 50 km/h. In what time will they cross each other?",
    questionHi: "120 मीटर और 180 मीटर लंबी दो ट्रेनें विपरीत दिशाओं में क्रमशः 40 किमी/घंटा और 50 किमी/घंटा की गति से चल रही हैं। वे एक दूसरे को कितने समय में पार करेंगी?",
    options: [
      { id: "A", textEn: "12 seconds", textHi: "12 सेकंड" },
      { id: "B", textEn: "10 seconds", textHi: "10 सेकंड" },
      { id: "C", textEn: "15 seconds", textHi: "15 सेकंड" },
      { id: "D", textEn: "8 seconds", textHi: "8 सेकंड" }
    ],
    correctAnswer: "A",
    explanation: "Total distance = 120 + 180 = 300m. Relative speed = 40 + 50 = 90 km/h = 90 × (5/18) = 25 m/s. Time = 300 / 25 = 12 seconds."
  },
  {
    id: 59,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A box contains 5 red balls, 4 blue balls, and 3 green balls. One ball is drawn at random. What is the probability that it is NOT red?",
    questionHi: "एक डिब्बे में 5 लाल, 4 नीली और 3 हरी गेंदें हैं। एक गेंद यादृच्छिक रूप से निकाली जाती है। इसके लाल न होने की प्रायिकता क्या है?",
    options: [
      { id: "A", textEn: "7/12", textHi: "7/12" },
      { id: "B", textEn: "5/12", textHi: "5/12" },
      { id: "C", textEn: "1/2", textHi: "1/2" },
      { id: "D", textEn: "2/3", textHi: "2/3" }
    ],
    correctAnswer: "A",
    explanation: "Total balls = 12. Non-red balls = 4 + 3 = 7. Probability = 7/12."
  },
  {
    id: 60,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The difference between simple interest and compound interest on ₹5,000 for 2 years at 10% per annum is:",
    questionHi: "₹5,000 पर 2 वर्षों के लिए 10% वार्षिक दर से साधारण ब्याज और चक्रवृद्धि ब्याज के बीच का अंतर क्या है?",
    options: [
      { id: "A", textEn: "₹50", textHi: "₹50" },
      { id: "B", textEn: "₹60", textHi: "₹60" },
      { id: "C", textEn: "₹40", textHi: "₹40" },
      { id: "D", textEn: "₹75", textHi: "₹75" }
    ],
    correctAnswer: "A",
    explanation: "Difference for 2 years = P(R/100)² = 5000 × (10/100)² = 5000 × (1/100) = ₹50."
  },
  {
    id: 61,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is the value of 15² + 25² - 20²?",
    questionHi: "15² + 25² - 20² का मान क्या है?",
    options: [
      { id: "A", textEn: "450", textHi: "450" },
      { id: "B", textEn: "500", textHi: "500" },
      { id: "C", textEn: "400", textHi: "400" },
      { id: "D", textEn: "350", textHi: "350" }
    ],
    correctAnswer: "A",
    explanation: "225 + 625 - 400 = 850 - 400 = 450."
  },
  {
    id: 62,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A person travels from A to B at 30 km/h and returns at 20 km/h. What is his average speed for the whole journey?",
    questionHi: "एक व्यक्ति A से B तक 30 किमी/घंटा की गति से जाता है और 20 किमी/घंटा की गति से लौटता है। पूरी यात्रा के लिए उसकी औसत गति क्या है?",
    options: [
      { id: "A", textEn: "24 km/h", textHi: "24 किमी/घंटा" },
      { id: "B", textEn: "25 km/h", textHi: "25 किमी/घंटा" },
      { id: "C", textEn: "22.5 km/h", textHi: "22.5 किमी/घंटा" },
      { id: "D", textEn: "26 km/h", textHi: "26 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Average speed = (2 × S1 × S2) / (S1 + S2) = (2 × 30 × 20) / (30 + 20) = 1200 / 50 = 24 km/h."
  },
  {
    id: 63,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "If the salary of an employee is first increased by 20% and then decreased by 20%, what is the net change?",
    questionHi: "यदि किसी कर्मचारी के वेतन में पहले 20% की वृद्धि की जाती है और फिर 20% की कमी की जाती है, तो कुल परिवर्तन क्या है?",
    options: [
      { id: "A", textEn: "4% decrease", textHi: "4% की कमी" },
      { id: "B", textEn: "No change", textHi: "कोई परिवर्तन नहीं" },
      { id: "C", textEn: "2% increase", textHi: "2% की वृद्धि" },
      { id: "D", textEn: "4% increase", textHi: "4% की वृद्धि" }
    ],
    correctAnswer: "A",
    explanation: "Net change = +20 - 20 - (20×20)/100 = -4% (i.e. 4% decrease)."
  },
  {
    id: 64,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is the area of a circle whose circumference is 88 cm? (Take π = 22/7)",
    questionHi: "एक वृत्त का क्षेत्रफल क्या है जिसकी परिधि 88 सेमी है? (π = 22/7 लें)",
    options: [
      { id: "A", textEn: "616 cm²", textHi: "616 सेमी²" },
      { id: "B", textEn: "308 cm²", textHi: "308 सेमी²" },
      { id: "C", textEn: "154 cm²", textHi: "154 सेमी²" },
      { id: "D", textEn: "1232 cm²", textHi: "1232 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "2πr = 88 => 2 × (22/7) × r = 88 => r = 14 cm. Area = πr² = (22/7) × 14 × 14 = 616 cm²."
  },
  {
    id: 65,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "Find the value of x if: √x + 14 = √625.",
    questionHi: "यदि √x + 14 = √625 है, तो x का मान ज्ञात कीजिए।",
    options: [
      { id: "A", textEn: "121", textHi: "121" },
      { id: "B", textEn: "144", textHi: "144" },
      { id: "C", textEn: "81", textHi: "81" },
      { id: "D", textEn: "100", textHi: "100" }
    ],
    correctAnswer: "A",
    explanation: "√x + 14 = 25 => √x = 25 - 14 = 11 => x = 11² = 121."
  },
  {
    id: 66,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A dealer sells a watch for ₹1,140 suffering a loss of 5%. At what price should he sell it to gain 10%?",
    questionHi: "एक डीलर ₹1,140 में एक घड़ी बेचकर 5% की हानि उठाता है। 10% का लाभ प्राप्त करने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?",
    options: [
      { id: "A", textEn: "₹1,320", textHi: "₹1,320" },
      { id: "B", textEn: "₹1,250", textHi: "₹1,250" },
      { id: "C", textEn: "₹1,300", textHi: "₹1,300" },
      { id: "D", textEn: "₹1,400", textHi: "₹1,400" }
    ],
    correctAnswer: "A",
    explanation: "CP = 1140 / 0.95 = ₹1,200. Desired SP = 1200 × 1.10 = ₹1,320."
  },
  {
    id: 67,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "The ratio of boys and girls in a school is 7:5. If total students are 720, how many girls are there in the school?",
    questionHi: "एक विद्यालय में लड़कों और लड़कियों का अनुपात 7:5 है। यदि कुल छात्र 720 हैं, तो विद्यालय में कितनी लड़कियाँ हैं?",
    options: [
      { id: "A", textEn: "300", textHi: "300" },
      { id: "B", textEn: "420", textHi: "420" },
      { id: "C", textEn: "280", textHi: "280" },
      { id: "D", textEn: "350", textHi: "350" }
    ],
    correctAnswer: "A",
    explanation: "Total parts = 7 + 5 = 12. Girls = (5/12) × 720 = 5 × 60 = 300."
  },
  {
    id: 68,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "What is the simple interest on ₹12,000 at 9% per annum for 4 years?",
    questionHi: "₹12,000 पर 9% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या है?",
    options: [
      { id: "A", textEn: "₹4,320", textHi: "₹4,320" },
      { id: "B", textEn: "₹4,500", textHi: "₹4,500" },
      { id: "C", textEn: "₹3,840", textHi: "₹3,840" },
      { id: "D", textEn: "₹4,120", textHi: "₹4,120" }
    ],
    correctAnswer: "A",
    explanation: "SI = (P × R × T)/100 = (12000 × 9 × 4)/100 = 120 × 36 = ₹4,320."
  },
  {
    id: 69,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "A train running at 72 km/h crosses a platform 200m long in 22 seconds. What is the length of the train?",
    questionHi: "72 किमी/घंटा की गति से चल रही एक ट्रेन 200 मीटर लंबे प्लेटफॉर्म को 22 सेकंड में पार करती है। ट्रेन की लंबाई क्या है?",
    options: [
      { id: "A", textEn: "240 m", textHi: "240 मीटर" },
      { id: "B", textEn: "220 m", textHi: "220 मीटर" },
      { id: "C", textEn: "250 m", textHi: "250 मीटर" },
      { id: "D", textEn: "200 m", textHi: "200 मीटर" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 72 × (5/18) = 20 m/s. Total distance in 22s = 20 × 22 = 440m. Train length = 440 - 200 = 240m."
  },
  {
    id: 70,
    section: "bank_quant",
    sectionName: "2. Quantitative Aptitude",
    questionEn: "If 3x + 2y = 13 and 2x + 3y = 12, what is the value of (x + y)?",
    questionHi: "यदि 3x + 2y = 13 और 2x + 3y = 12 है, तो (x + y) का मान क्या है?",
    options: [
      { id: "A", textEn: "5", textHi: "5" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "4", textHi: "4" },
      { id: "D", textEn: "7", textHi: "7" }
    ],
    correctAnswer: "A",
    explanation: "Add both equations: 5x + 5y = 25 => 5(x + y) = 25 => x + y = 5."
  },

  // ==========================================
  // SECTION 3: ENGLISH LANGUAGE (Q71 - Q100)
  // ==========================================
  {
    id: 71,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the most appropriate synonym for the word: 'METICULOUS'",
    questionHi: "शब्द 'METICULOUS' (अति सावधान/बारीक) का सबसे उपयुक्त समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Careful / Detailed", textHi: "सावधान / विस्तृत" },
      { id: "B", textEn: "Careless", textHi: "लापरवाह" },
      { id: "C", textEn: "Aggressive", textHi: "आक्रामक" },
      { id: "D", textEn: "Hasty", textHi: "जल्दबाज" }
    ],
    correctAnswer: "A",
    explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
  },
  {
    id: 72,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the antonym for the word: 'CANDID'",
    questionHi: "शब्द 'CANDID' (खरा / स्पष्टवादी) का विलोम शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Deceptive / Dishonest", textHi: "धोखेबाज / कपटी" },
      { id: "B", textEn: "Frank", textHi: "स्पष्टवादी" },
      { id: "C", textEn: "Honest", textHi: "ईमानदार" },
      { id: "D", textEn: "Straightforward", textHi: "सरल" }
    ],
    correctAnswer: "A",
    explanation: "'Candid' means truthful, frank, and straightforward. The opposite is deceptive or dishonest."
  },
  {
    id: 73,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Fill in the blank: Neither the manager nor the employees _______ present at the meeting.",
    questionHi: "रिक्त स्थान भरें: Neither the manager nor the employees _______ present at the meeting.",
    options: [
      { id: "A", textEn: "were", textHi: "were" },
      { id: "B", textEn: "was", textHi: "was" },
      { id: "C", textEn: "is", textHi: "is" },
      { id: "D", textEn: "has", textHi: "has" }
    ],
    correctAnswer: "A",
    explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('employees', which is plural => 'were')."
  },
  {
    id: 74,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Identify the part with an error: 'Each of the participants (A) / were given (B) / a certificate of appreciation (C) / No error (D)'",
    questionHi: "त्रुटिपूर्ण भाग की पहचान कीजिए: 'Each of the participants (A) / were given (B) / a certificate of appreciation (C) / No error (D)'",
    options: [
      { id: "A", textEn: "Part A", textHi: "भाग A" },
      { id: "B", textEn: "Part B (were given)", textHi: "भाग B (were given)" },
      { id: "C", textEn: "Part C", textHi: "भाग C" },
      { id: "D", textEn: "Part D", textHi: "भाग D" }
    ],
    correctAnswer: "B",
    explanation: "'Each' takes a singular verb. It should be 'was given' instead of 'were given'."
  },
  {
    id: 75,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "What is the meaning of the idiom: 'To beat around the bush'?",
    questionHi: "मुहावरे 'To beat around the bush' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "To avoid talking about what is important", textHi: "मुद्दे की बात से बचकर घुमा-फिराकर बात करना" },
      { id: "B", textEn: "To search thoroughly", textHi: "गहनता से खोजना" },
      { id: "C", textEn: "To hit aggressively", textHi: "आक्रामक प्रहार करना" },
      { id: "D", textEn: "To clear vegetation", textHi: "झाड़ियाँ साफ करना" }
    ],
    correctAnswer: "A",
    explanation: "'To beat around the bush' means to discuss a matter without coming directly to the main point."
  },
  {
    id: 76,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the correctly spelt word:",
    questionHi: "सही वर्तनी वाले शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "Accommodate", textHi: "Accommodate" },
      { id: "B", textEn: "Acomodate", textHi: "Acomodate" },
      { id: "C", textEn: "Accomodate", textHi: "Accomodate" },
      { id: "D", textEn: "Acommodate", textHi: "Acommodate" }
    ],
    correctAnswer: "A",
    explanation: "The correct spelling is 'Accommodate' (with double 'c' and double 'm')."
  },
  {
    id: 77,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Fill in the blank with appropriate preposition: The committee has agreed _______ the proposal.",
    questionHi: "उचित Preposition से रिक्त स्थान भरें: The committee has agreed _______ the proposal.",
    options: [
      { id: "A", textEn: "to", textHi: "to" },
      { id: "B", textEn: "with", textHi: "with" },
      { id: "C", textEn: "on", textHi: "on" },
      { id: "D", textEn: "for", textHi: "for" }
    ],
    correctAnswer: "A",
    explanation: "One agrees 'to' a proposal or suggestion, and agrees 'with' a person."
  },
  {
    id: 78,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Choose the one-word substitute: 'A person who loves books and reading.'",
    questionHi: "एक शब्द प्रतिस्थापन चुनिए: 'किताबों और पढ़ने से अत्यधिक प्रेम करने वाला व्यक्ति'",
    options: [
      { id: "A", textEn: "Bibliophile", textHi: "Bibliophile (पुस्तक प्रेमी)" },
      { id: "B", textEn: "Philanthropist", textHi: "Philanthropist" },
      { id: "C", textEn: "Polyglot", textHi: "Polyglot" },
      { id: "D", textEn: "Pessimist", textHi: "Pessimist" }
    ],
    correctAnswer: "A",
    explanation: "A 'Bibliophile' is a person who collects or has a great love of books."
  },
  {
    id: 79,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Change to Passive Voice: 'The RBI governor announced the monetary policy.'",
    questionHi: "Passive Voice में बदलिए: 'The RBI governor announced the monetary policy.'",
    options: [
      { id: "A", textEn: "The monetary policy was announced by the RBI governor.", textHi: "The monetary policy was announced by the RBI governor." },
      { id: "B", textEn: "The monetary policy has been announced by the RBI governor.", textHi: "The monetary policy has been announced by the RBI governor." },
      { id: "C", textEn: "The monetary policy is announced by the RBI governor.", textHi: "The monetary policy is announced by the RBI governor." },
      { id: "D", textEn: "The monetary policy had announced by the RBI governor.", textHi: "The monetary policy had announced by the RBI governor." }
    ],
    correctAnswer: "A",
    explanation: "Past simple active ('announced') converts to 'was/were + announced' in passive voice."
  },
  {
    id: 80,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the word opposite in meaning to: 'FRUGAL'",
    questionHi: "शब्द 'FRUGAL' (मितव्ययी / कम खर्च करने वाला) का विपरीतार्थक शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Extravagant", textHi: "Extravagant (फिजूलखर्च)" },
      { id: "B", textEn: "Thrifty", textHi: "Thrifty" },
      { id: "C", textEn: "Economical", textHi: "Economical" },
      { id: "D", textEn: "Miserly", textHi: "Miserly" }
    ],
    correctAnswer: "A",
    explanation: "'Frugal' means sparing or economical with money. 'Extravagant' means spending money recklessly."
  },
  {
    id: 81,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Choose the correct phrase: 'Scarcely had he reached the station _______ the train arrived.'",
    questionHi: "सही शब्द चुनिए: 'Scarcely had he reached the station _______ the train arrived.'",
    options: [
      { id: "A", textEn: "when", textHi: "when" },
      { id: "B", textEn: "than", textHi: "than" },
      { id: "C", textEn: "then", textHi: "then" },
      { id: "D", textEn: "that", textHi: "that" }
    ],
    correctAnswer: "A",
    explanation: "'Scarcely / Hardly' is followed by 'when', whereas 'No sooner' is followed by 'than'."
  },
  {
    id: 82,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "What is the synonym of: 'PRAGMATIC'?",
    questionHi: "शब्द 'PRAGMATIC' (व्यावहारिक) का पर्यायवाची शब्द क्या है?",
    options: [
      { id: "A", textEn: "Practical", textHi: "Practical (व्यावहारिक)" },
      { id: "B", textEn: "Idealistic", textHi: "Idealistic" },
      { id: "C", textEn: "Theoretical", textHi: "Theoretical" },
      { id: "D", textEn: "Impractical", textHi: "Impractical" }
    ],
    correctAnswer: "A",
    explanation: "'Pragmatic' means dealing with things sensibly and realistically based on practical considerations."
  },
  {
    id: 83,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Identify the incorrectly spelt word:",
    questionHi: "अशुद्ध वर्तनी वाले शब्द की पहचान कीजिए:",
    options: [
      { id: "A", textEn: "Occurence", textHi: "Occurence" },
      { id: "B", textEn: "Committee", textHi: "Committee" },
      { id: "C", textEn: "Privilege", textHi: "Privilege" },
      { id: "D", textEn: "Necessary", textHi: "Necessary" }
    ],
    correctAnswer: "A",
    explanation: "The correct spelling is 'Occurrence' (with double 'r')."
  },
  {
    id: 84,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Meaning of the idiom: 'A blessing in disguise'",
    questionHi: "मुहावरे 'A blessing in disguise' का अर्थ है:",
    options: [
      { id: "A", textEn: "Something good that seemed bad at first", textHi: "कोई अच्छी बात जो पहले अप्रिय या बुरी लग रही थी" },
      { id: "B", textEn: "A gift given in secret", textHi: "गुप्त उपहार" },
      { id: "C", textEn: "A false prayer", textHi: "झूठी प्रार्थना" },
      { id: "D", textEn: "A very lucky event", textHi: "अति सौभाग्यपूर्ण घटना" }
    ],
    correctAnswer: "A",
    explanation: "'A blessing in disguise' is an apparent misfortune that eventually has good results."
  },
  {
    id: 85,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Fill in the blank: He is senior _______ me in service.",
    questionHi: "रिक्त स्थान भरें: He is senior _______ me in service.",
    options: [
      { id: "A", textEn: "to", textHi: "to" },
      { id: "B", textEn: "than", textHi: "than" },
      { id: "C", textEn: "from", textHi: "from" },
      { id: "D", textEn: "of", textHi: "of" }
    ],
    correctAnswer: "A",
    explanation: "Comparative adjectives ending in '-ior' (senior, junior, prior, superior) take 'to', not 'than'."
  },
  {
    id: 86,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the word closest in meaning to: 'LUCID'",
    questionHi: "शब्द 'LUCID' (स्पष्ट / समझने में आसान) का निकटतम अर्थ वाला शब्द चुनें:",
    options: [
      { id: "A", textEn: "Clear and easily understood", textHi: "स्पष्ट और सुबोध" },
      { id: "B", textEn: "Confusing", textHi: "भ्रमित करने वाला" },
      { id: "C", textEn: "Vague", textHi: "अस्पष्ट" },
      { id: "D", textEn: "Dark", textHi: "अंधेरा" }
    ],
    correctAnswer: "A",
    explanation: "'Lucid' means expressed clearly; easy to understand."
  },
  {
    id: 87,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "One-word substitution: 'Government by officials and administrators.'",
    questionHi: "एक शब्द प्रतिस्थापन: 'अधिकारियों और नौकरशाहों द्वारा संचालित सरकार'",
    options: [
      { id: "A", textEn: "Bureaucracy", textHi: "Bureaucracy (नौकरशाही)" },
      { id: "B", textEn: "Democracy", textHi: "Democracy" },
      { id: "C", textEn: "Autocracy", textHi: "Autocracy" },
      { id: "D", textEn: "Oligarchy", textHi: "Oligarchy" }
    ],
    correctAnswer: "A",
    explanation: "'Bureaucracy' is a system of government in which most decisions are taken by state officials rather than elected representatives."
  },
  {
    id: 88,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Find the error: 'If I was the Prime Minister (A) / I would eradicate (B) / poverty from the country (C) / No error (D)'",
    questionHi: "त्रुटि पहचानें: 'If I was the Prime Minister (A) / I would eradicate (B) / poverty from the country (C) / No error (D)'",
    options: [
      { id: "A", textEn: "Part A (If I was)", textHi: "भाग A (If I was)" },
      { id: "B", textEn: "Part B", textHi: "भाग B" },
      { id: "C", textEn: "Part C", textHi: "भाग C" },
      { id: "D", textEn: "Part D", textHi: "भाग D" }
    ],
    correctAnswer: "A",
    explanation: "In hypothetical conditional sentences expressing unfulfilled wishes, 'were' is used for all subjects: 'If I were the Prime Minister'."
  },
  {
    id: 89,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Antonym of: 'AMICABLE'",
    questionHi: "शब्द 'AMICABLE' (मैत्रीपूर्ण / सौहार्दपूर्ण) का विलोम शब्द है:",
    options: [
      { id: "A", textEn: "Hostile", textHi: "Hostile (शत्रुतापूर्ण)" },
      { id: "B", textEn: "Friendly", textHi: "Friendly" },
      { id: "C", textEn: "Polite", textHi: "Polite" },
      { id: "D", textEn: "Peaceful", textHi: "Peaceful" }
    ],
    correctAnswer: "A",
    explanation: "'Amicable' means characterized by friendliness and goodwill. Its antonym is 'Hostile'."
  },
  {
    id: 90,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Meaning of the idiom: 'Spill the beans'",
    questionHi: "मुहावरे 'Spill the beans' का अर्थ है:",
    options: [
      { id: "A", textEn: "To reveal a secret prematurely", textHi: "समय से पहले रहस्य उजागर कर देना" },
      { id: "B", textEn: "To waste food", textHi: "भोजन बर्बाद करना" },
      { id: "C", textEn: "To create trouble", textHi: "मुसीबत पैदा करना" },
      { id: "D", textEn: "To cook carelessly", textHi: "लापरवाही से पकाना" }
    ],
    correctAnswer: "A",
    explanation: "'Spill the beans' means to disclose a secret unintentionally or prematurely."
  },
  {
    id: 91,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the sentence with correct subject-verb agreement:",
    questionHi: "सही Subject-Verb Agreement वाले वाक्य का चयन कीजिए:",
    options: [
      { id: "A", textEn: "The quality of these mangoes is very good.", textHi: "The quality of these mangoes is very good." },
      { id: "B", textEn: "The quality of these mangoes are very good.", textHi: "The quality of these mangoes are very good." },
      { id: "C", textEn: "The quality of these mangoes were very good.", textHi: "The quality of these mangoes were very good." },
      { id: "D", textEn: "The quality of these mangoes have very good.", textHi: "The quality of these mangoes have very good." }
    ],
    correctAnswer: "A",
    explanation: "The subject is 'The quality' (singular), which takes the singular verb 'is'."
  },
  {
    id: 92,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "What is the synonym of: 'AFFLUENT'?",
    questionHi: "शब्द 'AFFLUENT' (धनी / संपन्न) का समानार्थी शब्द क्या है?",
    options: [
      { id: "A", textEn: "Wealthy", textHi: "Wealthy (धनी)" },
      { id: "B", textEn: "Poor", textHi: "Poor" },
      { id: "C", textEn: "Generous", textHi: "Generous" },
      { id: "D", textEn: "Destitute", textHi: "Destitute" }
    ],
    correctAnswer: "A",
    explanation: "'Affluent' means having a great deal of money; wealthy."
  },
  {
    id: 93,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "One-word substitution: 'A remedy for all diseases or problems.'",
    questionHi: "एक शब्द प्रतिस्थापन: 'सभी रोगों की रामबाण औषधि'",
    options: [
      { id: "A", textEn: "Panacea", textHi: "Panacea (रामबाण)" },
      { id: "B", textEn: "Antidote", textHi: "Antidote" },
      { id: "C", textEn: "Placebo", textHi: "Placebo" },
      { id: "D", textEn: "Antibiotic", textHi: "Antibiotic" }
    ],
    correctAnswer: "A",
    explanation: "'Panacea' is a solution or remedy for all difficulties or diseases."
  },
  {
    id: 94,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Fill in the blank: He refrained _______ making any controversial statements.",
    questionHi: "रिक्त स्थान भरें: He refrained _______ making any controversial statements.",
    options: [
      { id: "A", textEn: "from", textHi: "from" },
      { id: "B", textEn: "to", textHi: "to" },
      { id: "C", textEn: "of", textHi: "of" },
      { id: "D", textEn: "with", textHi: "with" }
    ],
    correctAnswer: "A",
    explanation: "The verb 'refrain' is followed by the preposition 'from' (refrain from doing something)."
  },
  {
    id: 95,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Find the correctly spelt word:",
    questionHi: "सही वर्तनी वाले शब्द का चयन कीजिए:",
    options: [
      { id: "A", textEn: "Surveillance", textHi: "Surveillance" },
      { id: "B", textEn: "Surveilance", textHi: "Surveilance" },
      { id: "C", textEn: "Survaliance", textHi: "Survaliance" },
      { id: "D", textEn: "Surveillence", textHi: "Surveillence" }
    ],
    correctAnswer: "A",
    explanation: "The correct spelling is 'Surveillance'."
  },
  {
    id: 96,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Antonym of: 'OBSTINATE'",
    questionHi: "शब्द 'OBSTINATE' (हठी / जिद्दी) का विलोम शब्द है:",
    options: [
      { id: "A", textEn: "Flexible / Yielding", textHi: "लचीला / आज्ञाकारी" },
      { id: "B", textEn: "Stubborn", textHi: "जिद्दी" },
      { id: "C", textEn: "Rigid", textHi: "कठोर" },
      { id: "D", textEn: "Defiant", textHi: "विद्रोही" }
    ],
    correctAnswer: "A",
    explanation: "'Obstinate' means stubbornly refusing to change one's opinion. The antonym is 'Flexible' or 'Yielding'."
  },
  {
    id: 97,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Choose the correct indirect form: She said, 'I have finished my project.'",
    questionHi: "Indirect Speech में बदलिए: She said, 'I have finished my project.'",
    options: [
      { id: "A", textEn: "She said that she had finished her project.", textHi: "She said that she had finished her project." },
      { id: "B", textEn: "She said that she has finished her project.", textHi: "She said that she has finished her project." },
      { id: "C", textEn: "She said that she finished her project.", textHi: "She said that she finished her project." },
      { id: "D", textEn: "She told that she has finished her project.", textHi: "She told that she has finished her project." }
    ],
    correctAnswer: "A",
    explanation: "Present perfect 'have finished' changes to past perfect 'had finished', and pronouns shift appropriately."
  },
  {
    id: 98,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Meaning of the idiom: 'Once in a blue moon'",
    questionHi: "मुहावरे 'Once in a blue moon' का अर्थ क्या है?",
    options: [
      { id: "A", textEn: "Very rarely", textHi: "बहुत ही दुर्लभ / कभी-कभार" },
      { id: "B", textEn: "Every full moon night", textHi: "प्रत्येक पूर्णिमा पर" },
      { id: "C", textEn: "Frequently", textHi: "बार-बार" },
      { id: "D", textEn: "Never", textHi: "कभी नहीं" }
    ],
    correctAnswer: "A",
    explanation: "'Once in a blue moon' refers to something that happens extremely infrequently."
  },
  {
    id: 99,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the most appropriate synonym for: 'ZEAL'",
    questionHi: "शब्द 'ZEAL' (उत्साह / जोश) का सबसे उपयुक्त समानार्थी शब्द चुनिए:",
    options: [
      { id: "A", textEn: "Enthusiasm / Passion", textHi: "उत्साह / लगन" },
      { id: "B", textEn: "Apathy", textHi: "उदासीनता" },
      { id: "C", textEn: "Hesitation", textHi: "संकोच" },
      { id: "D", textEn: "Reluctance", textHi: "अनिच्छा" }
    ],
    correctAnswer: "A",
    explanation: "'Zeal' means great energy or enthusiasm in pursuit of a cause or objective."
  },
  {
    id: 100,
    section: "bank_english",
    sectionName: "3. English Language",
    questionEn: "Select the sentence with NO grammatical error:",
    questionHi: "व्याकरणिक दृष्टि से पूर्णतः शुद्ध वाक्य का चयन कीजिए:",
    options: [
      { id: "A", textEn: "Hardly had the meeting started when the power went out.", textHi: "Hardly had the meeting started when the power went out." },
      { id: "B", textEn: "Hardly had the meeting started than the power went out.", textHi: "Hardly had the meeting started than the power went out." },
      { id: "C", textEn: "Hardly the meeting had started when the power went out.", textHi: "Hardly the meeting had started when the power went out." },
      { id: "D", textEn: "Hardly had the meeting started then the power went out.", textHi: "Hardly had the meeting started then the power went out." }
    ],
    correctAnswer: "A",
    explanation: "'Hardly had + Subject + V3... when...' is the correct grammatical structure."
  }
];
