/**
 * GovtExamHub — Other Government Exams (General Aptitude, Reasoning, GK & Computer Mock)
 * 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 * Real Exam Marking: +1.00 for Correct Answer, -0.25 for Incorrect Answer (1/4th Negative Marking)
 */

const OTHER_EXAM_CONFIG = {
  id: "other",
  title: "Other Government Exams (General Aptitude, GK & Computer Mock)",
  shortName: "Other Govt Exams",
  icon: "🌐",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1.0,
  negativeMarking: 0.25, // Standard 1/4th Negative Marking
  sections: [
    { id: "oth_quant", name: "1. Numerical Aptitude & Quantitative Ability", start: 1, end: 25, total: 25 },
    { id: "oth_reasoning", name: "2. Logical Reasoning & Mental Ability", start: 26, end: 50, total: 25 },
    { id: "oth_gk", name: "3. General Awareness & Everyday Science", start: 51, end: 75, total: 25 },
    { id: "oth_comp", name: "4. Basic Computer & Digital Literacy", start: 76, end: 100, total: 25 }
  ]
};

const OTHER_QUESTIONS_DATA = [
  // =========================================================================
  // SECTION 1: NUMERICAL APTITUDE & QUANTITATIVE ABILITY (Q1 - Q25)
  // =========================================================================
  {
    id: 1,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is 15% of ₹2,400?",
    questionHi: "₹2,400 का 15% क्या होगा?",
    options: [
      { id: "A", textEn: "₹360", textHi: "₹360" },
      { id: "B", textEn: "₹320", textHi: "₹320" },
      { id: "C", textEn: "₹400", textHi: "₹400" },
      { id: "D", textEn: "₹380", textHi: "₹380" }
    ],
    correctAnswer: "A",
    explanation: "(15 / 100) × 2400 = 15 × 24 = ₹360."
  },
  {
    id: 2,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?",
    questionHi: "5 संख्याओं का औसत 20 है। यदि एक संख्या निकाल दी जाए, तो औसत 18 हो जाता है। निकाली गई संख्या क्या है?",
    options: [
      { id: "A", textEn: "28", textHi: "28" },
      { id: "B", textEn: "26", textHi: "26" },
      { id: "C", textEn: "30", textHi: "30" },
      { id: "D", textEn: "25", textHi: "25" }
    ],
    correctAnswer: "A",
    explanation: "Original sum = 5 × 20 = 100. New sum = 4 × 18 = 72. Excluded number = 100 - 72 = 28."
  },
  {
    id: 3,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A shopkeeper buys an article for ₹800 and sells it for ₹1,000. What is his profit percentage?",
    questionHi: "एक दुकानदार ₹800 में एक वस्तु खरीदता है और उसे ₹1,000 में बेचता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "30%", textHi: "30%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "Profit = 1000 - 800 = ₹200. Profit % = (200 / 800) × 100 = 25%."
  },
  {
    id: 4,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A car covers 300 km in 5 hours. What is its speed in km/h?",
    questionHi: "एक कार 5 घंटे में 300 किमी की दूरी तय करती है। उसकी गति किमी/घंटा में क्या है?",
    options: [
      { id: "A", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "B", textEn: "50 km/h", textHi: "50 किमी/घंटा" },
      { id: "C", textEn: "70 km/h", textHi: "70 किमी/घंटा" },
      { id: "D", textEn: "55 km/h", textHi: "55 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Speed = Distance / Time = 300 / 5 = 60 km/h."
  },
  {
    id: 5,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is the simple interest on ₹10,000 at 6% per annum for 3 years?",
    questionHi: "₹10,000 पर 6% वार्षिक दर से 3 वर्ष का साधारण ब्याज क्या होगा?",
    options: [
      { id: "A", textEn: "₹1,800", textHi: "₹1,800" },
      { id: "B", textEn: "₹1,600", textHi: "₹1,600" },
      { id: "C", textEn: "₹2,000", textHi: "₹2,000" },
      { id: "D", textEn: "₹1,500", textHi: "₹1,500" }
    ],
    correctAnswer: "A",
    explanation: "SI = (10000 × 6 × 3) / 100 = 100 × 18 = ₹1,800."
  },
  {
    id: 6,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A and B together can finish a job in 6 days. A alone can do it in 10 days. How many days will B take alone?",
    questionHi: "A और B मिलकर एक काम 6 दिन में कर सकते हैं। A अकेला इसे 10 दिन में कर सकता है। B अकेला इसे कितने दिन में करेगा?",
    options: [
      { id: "A", textEn: "15 days", textHi: "15 दिन" },
      { id: "B", textEn: "12 days", textHi: "12 दिन" },
      { id: "C", textEn: "18 days", textHi: "18 दिन" },
      { id: "D", textEn: "20 days", textHi: "20 दिन" }
    ],
    correctAnswer: "A",
    explanation: "1/B = (1/6) - (1/10) = (5 - 3) / 30 = 2/30 = 1/15 => B = 15 days."
  },
  {
    id: 7,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "The ratio of two numbers is 3:5 and their sum is 96. What is the larger number?",
    questionHi: "दो संख्याओं का अनुपात 3:5 है और उनका योग 96 है। बड़ी संख्या क्या है?",
    options: [
      { id: "A", textEn: "60", textHi: "60" },
      { id: "B", textEn: "36", textHi: "36" },
      { id: "C", textEn: "50", textHi: "50" },
      { id: "D", textEn: "64", textHi: "64" }
    ],
    correctAnswer: "A",
    explanation: "8 parts = 96 => 1 part = 12. Larger number = 5 × 12 = 60."
  },
  {
    id: 8,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "Find the HCF of 36 and 84:",
    questionHi: "36 और 84 का महत्तम समापवर्तक (HCF) क्या है?",
    options: [
      { id: "A", textEn: "12", textHi: "12" },
      { id: "B", textEn: "6", textHi: "6" },
      { id: "C", textEn: "18", textHi: "18" },
      { id: "D", textEn: "24", textHi: "24" }
    ],
    correctAnswer: "A",
    explanation: "36 = 12 × 3, 84 = 12 × 7. Greatest common divisor is 12."
  },
  {
    id: 9,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A train 120m long passes an electric pole in 6 seconds. What is the speed of the train in km/h?",
    questionHi: "120 मीटर लंबी ट्रेन एक खंभे को 6 सेकंड में पार करती है। ट्रेन की गति किमी/घंटा में क्या है?",
    options: [
      { id: "A", textEn: "72 km/h", textHi: "72 किमी/घंटा" },
      { id: "B", textEn: "60 km/h", textHi: "60 किमी/घंटा" },
      { id: "C", textEn: "80 km/h", textHi: "80 किमी/घंटा" },
      { id: "D", textEn: "54 km/h", textHi: "54 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Speed = 120 / 6 = 20 m/s = 20 × (18/5) = 72 km/h."
  },
  {
    id: 10,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "If the radius of a circle is 14 cm, what is its circumference? (Take π = 22/7)",
    questionHi: "यदि एक वृत्त की त्रिज्या 14 सेमी है, तो उसकी परिधि क्या होगी? (π = 22/7 लें)",
    options: [
      { id: "A", textEn: "88 cm", textHi: "88 सेमी" },
      { id: "B", textEn: "616 cm²", textHi: "616 सेमी² (क्षेत्रफल)" },
      { id: "C", textEn: "44 cm", textHi: "44 सेमी" },
      { id: "D", textEn: "176 cm", textHi: "176 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "Circumference = 2πr = 2 × (22/7) × 14 = 88 cm."
  },
  {
    id: 11,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "Simplify: (48 ÷ 12) + (6 × 3) - 8 = ?",
    questionHi: "सरल कीजिए: (48 ÷ 12) + (6 × 3) - 8 = ?",
    options: [
      { id: "A", textEn: "14", textHi: "14" },
      { id: "B", textEn: "16", textHi: "16" },
      { id: "C", textEn: "12", textHi: "12" },
      { id: "D", textEn: "18", textHi: "18" }
    ],
    correctAnswer: "A",
    explanation: "4 + 18 - 8 = 22 - 8 = 14."
  },
  {
    id: 12,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is the square root of 1024?",
    questionHi: "1024 का वर्गमूल क्या है?",
    options: [
      { id: "A", textEn: "32", textHi: "32" },
      { id: "B", textEn: "28", textHi: "28" },
      { id: "C", textEn: "34", textHi: "34" },
      { id: "D", textEn: "36", textHi: "36" }
    ],
    correctAnswer: "A",
    explanation: "32² = 1024."
  },
  {
    id: 13,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "The price of petrol increases by 25%. By what percentage must a driver reduce consumption to keep expenditure unchanged?",
    questionHi: "पेट्रोल के मूल्य में 25% की वृद्धि हो जाती है। खर्च अपरिवर्तित रखने के लिए उपभोग में कितने प्रतिशत की कमी करनी होगी?",
    options: [
      { id: "A", textEn: "20%", textHi: "20%" },
      { id: "B", textEn: "25%", textHi: "25%" },
      { id: "C", textEn: "16.66%", textHi: "16.66%" },
      { id: "D", textEn: "15%", textHi: "15%" }
    ],
    correctAnswer: "A",
    explanation: "Reduction % = [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%."
  },
  {
    id: 14,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "If 8 men can complete a project in 15 days, how many days will 12 men take?",
    questionHi: "यदि 8 पुरुष किसी काम को 15 दिन में पूरा करते हैं, तो 12 पुरुष उसे कितने दिन में पूरा करेंगे?",
    options: [
      { id: "A", textEn: "10 days", textHi: "10 दिन" },
      { id: "B", textEn: "12 days", textHi: "12 दिन" },
      { id: "C", textEn: "9 days", textHi: "9 दिन" },
      { id: "D", textEn: "8 days", textHi: "8 दिन" }
    ],
    correctAnswer: "A",
    explanation: "Days = (8 × 15) / 12 = 120 / 12 = 10 days."
  },
  {
    id: 15,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is the perimeter of a rectangle having length 20 cm and breadth 15 cm?",
    questionHi: "एक आयत की लंबाई 20 सेमी और चौड़ाई 15 सेमी है। उसका परिमाप क्या होगा?",
    options: [
      { id: "A", textEn: "70 cm", textHi: "70 सेमी" },
      { id: "B", textEn: "300 cm² (क्षेत्रफल)", textHi: "300 सेमी²" },
      { id: "C", textEn: "35 cm", textHi: "35 सेमी" },
      { id: "D", textEn: "80 cm", textHi: "80 सेमी" }
    ],
    correctAnswer: "A",
    explanation: "2 × (20 + 15) = 2 × 35 = 70 cm."
  },
  {
    id: 16,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is the compound interest on ₹5,000 for 2 years at 10% per annum compounded annually?",
    questionHi: "₹5,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?",
    options: [
      { id: "A", textEn: "₹1,050", textHi: "₹1,050" },
      { id: "B", textEn: "₹1,000", textHi: "₹1,000" },
      { id: "C", textEn: "₹1,100", textHi: "₹1,100" },
      { id: "D", textEn: "₹950", textHi: "₹950" }
    ],
    correctAnswer: "A",
    explanation: "Amount = 5000 × (1.10)² = 5000 × 1.21 = ₹6,050. CI = 6050 - 5000 = ₹1,050."
  },
  {
    id: 17,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A dealer sells a fan for ₹1,800 suffering a 10% loss. What was the cost price?",
    questionHi: "एक व्यापारी ₹1,800 में एक पंखा बेचकर 10% की हानि उठाता है। क्रय मूल्य क्या था?",
    options: [
      { id: "A", textEn: "₹2,000", textHi: "₹2,000" },
      { id: "B", textEn: "₹1,950", textHi: "₹1,950" },
      { id: "C", textEn: "₹2,100", textHi: "₹2,100" },
      { id: "D", textEn: "₹1,900", textHi: "₹1,900" }
    ],
    correctAnswer: "A",
    explanation: "CP = 1800 / 0.90 = ₹2,000."
  },
  {
    id: 18,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "Find the missing number in the series: 5, 10, 20, 40, ?",
    questionHi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 5, 10, 20, 40, ?",
    options: [
      { id: "A", textEn: "80", textHi: "80" },
      { id: "B", textEn: "60", textHi: "60" },
      { id: "C", textEn: "70", textHi: "70" },
      { id: "D", textEn: "100", textHi: "100" }
    ],
    correctAnswer: "A",
    explanation: "Each number is doubled: 40 × 2 = 80."
  },
  {
    id: 19,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "If 2x + 5 = 19, what is the value of x?",
    questionHi: "यदि 2x + 5 = 19 है, तो x का मान क्या होगा?",
    options: [
      { id: "A", textEn: "7", textHi: "7" },
      { id: "B", textEn: "8", textHi: "8" },
      { id: "C", textEn: "6", textHi: "6" },
      { id: "D", textEn: "9", textHi: "9" }
    ],
    correctAnswer: "A",
    explanation: "2x = 19 - 5 = 14 => x = 7."
  },
  {
    id: 20,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is the area of a right-angled triangle with base 12 cm and height 5 cm?",
    questionHi: "आधार 12 सेमी और ऊंचाई 5 सेमी वाले समकोण त्रिभुज का क्षेत्रफल क्या है?",
    options: [
      { id: "A", textEn: "30 cm²", textHi: "30 सेमी²" },
      { id: "B", textEn: "60 cm²", textHi: "60 सेमी²" },
      { id: "C", textEn: "24 cm²", textHi: "24 सेमी²" },
      { id: "D", textEn: "36 cm²", textHi: "36 सेमी²" }
    ],
    correctAnswer: "A",
    explanation: "(1/2) × 12 × 5 = 30 cm²."
  },
  {
    id: 21,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "What is 3/5 expressed as a percentage?",
    questionHi: "3/5 को प्रतिशत के रूप में कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "60%", textHi: "60%" },
      { id: "B", textEn: "50%", textHi: "50%" },
      { id: "C", textEn: "75%", textHi: "75%" },
      { id: "D", textEn: "40%", textHi: "40%" }
    ],
    correctAnswer: "A",
    explanation: "(3 / 5) × 100 = 60%."
  },
  {
    id: 22,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A sum doubles in 4 years at simple interest. What is the annual rate of interest?",
    questionHi: "कोई राशि साधारण ब्याज पर 4 वर्षों में दोगुनी हो जाती है। वार्षिक ब्याज दर क्या है?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "20%", textHi: "20%" },
      { id: "C", textEn: "15%", textHi: "15%" },
      { id: "D", textEn: "10%", textHi: "10%" }
    ],
    correctAnswer: "A",
    explanation: "R = (100 × (2 - 1)) / 4 = 100 / 4 = 25%."
  },
  {
    id: 23,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "The ratio of boys and girls in a college is 5:3. If there are 300 girls, what is the total number of students?",
    questionHi: "एक कॉलेज में लड़कों और लड़कियों का अनुपात 5:3 है। यदि लड़कियों की संख्या 300 है, तो कुल छात्र कितने हैं?",
    options: [
      { id: "A", textEn: "800", textHi: "800" },
      { id: "B", textEn: "500 (लड़के)", textHi: "500" },
      { id: "C", textEn: "600", textHi: "600" },
      { id: "D", textEn: "900", textHi: "900" }
    ],
    correctAnswer: "A",
    explanation: "3 parts = 300 => 1 part = 100. Total = 8 parts = 8 × 100 = 800."
  },
  {
    id: 24,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "Find the LCM of 12 and 18:",
    questionHi: "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    options: [
      { id: "A", textEn: "36", textHi: "36" },
      { id: "B", textEn: "24", textHi: "24" },
      { id: "C", textEn: "48", textHi: "48" },
      { id: "D", textEn: "72", textHi: "72" }
    ],
    correctAnswer: "A",
    explanation: "12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 36."
  },
  {
    id: 25,
    section: "oth_quant",
    sectionName: "1. Numerical Aptitude & Quantitative Ability",
    questionEn: "A car travels at 45 km/h for 2 hours and 60 km/h for 3 hours. What is its average speed?",
    questionHi: "एक कार 2 घंटे 45 किमी/घंटा से और 3 घंटे 60 किमी/घंटा से चलती है। पूरी यात्रा की औसत चाल क्या है?",
    options: [
      { id: "A", textEn: "54 km/h", textHi: "54 किमी/घंटा" },
      { id: "B", textEn: "52.5 km/h", textHi: "52.5 किमी/घंटा" },
      { id: "C", textEn: "50 km/h", textHi: "50 किमी/घंटा" },
      { id: "D", textEn: "55 km/h", textHi: "55 किमी/घंटा" }
    ],
    correctAnswer: "A",
    explanation: "Total distance = (45 × 2) + (60 × 3) = 90 + 180 = 270 km. Total time = 5 hours. Average speed = 270 / 5 = 54 km/h."
  },

  // =========================================================================
  // SECTION 2: LOGICAL REASONING & MENTAL ABILITY (Q26 - Q50)
  // =========================================================================
  {
    id: 26,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Find the odd one out: Apple, Mango, Carrot, Banana.",
    questionHi: "विषम चुनिए: सेब, आम, गाजर, केला।",
    options: [
      { id: "A", textEn: "Carrot (Root vegetable)", textHi: "गाजर (सब्जी / जड़)" },
      { id: "B", textEn: "Apple", textHi: "सेब" },
      { id: "C", textEn: "Mango", textHi: "आम" },
      { id: "D", textEn: "Banana", textHi: "केला" }
    ],
    correctAnswer: "A",
    explanation: "Carrot is a root vegetable, whereas apple, mango, and banana are fruits."
  },
  {
    id: 27,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "If 'CAT' is coded as '3120', how is 'DOG' coded?",
    questionHi: "यदि 'CAT' को '3120' लिखा जाता है, तो 'DOG' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "4157", textHi: "4157 (D=4, O=15, G=7)" },
      { id: "B", textEn: "4167", textHi: "4167" },
      { id: "C", textEn: "3157", textHi: "3157" },
      { id: "D", textEn: "4158", textHi: "4158" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is represented by its alphabetical rank: D=4, O=15, G=7 => 4157."
  },
  {
    id: 28,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Complete the series: 2, 4, 8, 16, 32, ?",
    questionHi: "श्रृंखला पूर्ण कीजिए: 2, 4, 8, 16, 32, ?",
    options: [
      { id: "A", textEn: "64", textHi: "64" },
      { id: "B", textEn: "48", textHi: "48" },
      { id: "C", textEn: "56", textHi: "56" },
      { id: "D", textEn: "60", textHi: "60" }
    ],
    correctAnswer: "A",
    explanation: "Each term is multiplied by 2: 32 × 2 = 64."
  },
  {
    id: 29,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Pointing to a man, Rahul said, 'His only brother is the father of my daughter's father.' How is the man related to Rahul?",
    questionHi: "एक व्यक्ति की ओर इशारा करते हुए राहुल ने कहा, 'उसका इकलौता भाई मेरी बेटी के पिता का पिता है।' वह व्यक्ति राहुल से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Uncle (चाचा)", textHi: "चाचा (Uncle)" },
      { id: "B", textEn: "Father", textHi: "पिता" },
      { id: "C", textEn: "Grandfather", textHi: "दादा" },
      { id: "D", textEn: "Brother", textHi: "भाई" }
    ],
    correctAnswer: "A",
    explanation: "Daughter's father is Rahul. Father of Rahul is Rahul's father. The man's only brother is Rahul's father, so the man is Rahul's paternal uncle."
  },
  {
    id: 30,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "A person starts from point A and walks 5 km North, turns right and walks 12 km. What is the shortest distance from point A?",
    questionHi: "एक व्यक्ति बिंदु A से 5 किमी उत्तर चलता है, दाएं मुड़कर 12 किमी चलता है। बिंदु A से उसकी सीधी दूरी क्या है?",
    options: [
      { id: "A", textEn: "13 km", textHi: "13 किमी" },
      { id: "B", textEn: "17 km", textHi: "17 किमी" },
      { id: "C", textEn: "15 km", textHi: "15 किमी" },
      { id: "D", textEn: "10 km", textHi: "10 किमी" }
    ],
    correctAnswer: "A",
    explanation: "Distance = √(5² + 12²) = √(25 + 144) = √169 = 13 km."
  },
  {
    id: 31,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Find the odd number: 17, 19, 23, 27, 29.",
    questionHi: "विषम संख्या चुनिए: 17, 19, 23, 27, 29.",
    options: [
      { id: "A", textEn: "27 (Composite number: 3³)", textHi: "27 (भाज्य संख्या)" },
      { id: "B", textEn: "17", textHi: "17" },
      { id: "C", textEn: "19", textHi: "19" },
      { id: "D", textEn: "23", textHi: "23" }
    ],
    correctAnswer: "A",
    explanation: "17, 19, 23, and 29 are prime numbers. 27 is divisible by 3 and 9 (composite)."
  },
  {
    id: 32,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "If '+' means '×' and '-' means '÷', what is the value of: 8 + 4 - 2?",
    questionHi: "यदि '+' का अर्थ '×' और '-' का अर्थ '÷' है, तो 8 + 4 - 2 का मान क्या होगा?",
    options: [
      { id: "A", textEn: "16", textHi: "16" },
      { id: "B", textEn: "12", textHi: "12" },
      { id: "C", textEn: "14", textHi: "14" },
      { id: "D", textEn: "10", textHi: "10" }
    ],
    correctAnswer: "A",
    explanation: "8 × 4 ÷ 2 = 32 ÷ 2 = 16."
  },
  {
    id: 33,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "In a row of 30 students, Neha is 12th from the left. What is her position from the right?",
    questionHi: "30 छात्रों की पंक्ति में नेहा बाएं से 12वें स्थान पर है। दाएं से उसका स्थान क्या होगा?",
    options: [
      { id: "A", textEn: "19th", textHi: "19वां" },
      { id: "B", textEn: "18th", textHi: "18वां" },
      { id: "C", textEn: "20th", textHi: "20वां" },
      { id: "D", textEn: "17th", textHi: "17वां" }
    ],
    correctAnswer: "A",
    explanation: "Position from right = 30 - 12 + 1 = 19th."
  },
  {
    id: 34,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Select the related word: Eye : Sight :: Ear : ?",
    questionHi: "संबंधित शब्द चुनिए: आँख : दृष्टि :: कान : ?",
    options: [
      { id: "A", textEn: "Hearing", textHi: "सुनना / श्रवण (Hearing)" },
      { id: "B", textEn: "Sound", textHi: "ध्वनि" },
      { id: "C", textEn: "Music", textHi: "संगीत" },
      { id: "D", textEn: "Deaf", textHi: "बहरा" }
    ],
    correctAnswer: "A",
    explanation: "The sensory function of the eye is sight, and of the ear is hearing."
  },
  {
    id: 35,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Complete the letter series: A, C, F, J, O, ?",
    questionHi: "अक्षर श्रृंखला पूर्ण कीजिए: A, C, F, J, O, ?",
    options: [
      { id: "A", textEn: "U", textHi: "U" },
      { id: "B", textEn: "T", textHi: "T" },
      { id: "C", textEn: "V", textHi: "V" },
      { id: "D", textEn: "W", textHi: "W" }
    ],
    correctAnswer: "A",
    explanation: "Step increments by 1: A(+2)C, C(+3)F, F(+4)J, J(+5)O, O(+6)=U (15 + 6 = 21st letter U)."
  },
  {
    id: 36,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "If today is Sunday, what day of the week will it be after 22 days?",
    questionHi: "यदि आज रविवार है, तो आज से 22 दिन बाद कौन सा दिन होगा?",
    options: [
      { id: "A", textEn: "Monday", textHi: "सोमवार (Monday)" },
      { id: "B", textEn: "Sunday", textHi: "रविवार" },
      { id: "C", textEn: "Tuesday", textHi: "मंगलवार" },
      { id: "D", textEn: "Saturday", textHi: "शनिवार" }
    ],
    correctAnswer: "A",
    explanation: "22 mod 7 = 1 odd day. Sunday + 1 day = Monday."
  },
  {
    id: 37,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Which word cannot be formed from the letters of 'COMMUNICATION'?",
    questionHi: "शब्द 'COMMUNICATION' के अक्षरों से कौन सा शब्द नहीं बनाया जा सकता है?",
    options: [
      { id: "A", textEn: "MONITOR", textHi: "MONITOR ('R' नहीं है)" },
      { id: "B", textEn: "ACTION", textHi: "ACTION" },
      { id: "C", textEn: "NATION", textHi: "NATION" },
      { id: "D", textEn: "COMMON", textHi: "COMMON" }
    ],
    correctAnswer: "A",
    explanation: "'MONITOR' contains the letter 'R', which does not appear in 'COMMUNICATION'."
  },
  {
    id: 38,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Find the missing term: 1, 8, 27, 64, 125, ?",
    questionHi: "लुप्त संख्या ज्ञात कीजिए: 1, 8, 27, 64, 125, ?",
    options: [
      { id: "A", textEn: "216 (6³)", textHi: "216 (6 का घन)" },
      { id: "B", textEn: "200", textHi: "200" },
      { id: "C", textEn: "243", textHi: "243" },
      { id: "D", textEn: "343", textHi: "343" }
    ],
    correctAnswer: "A",
    explanation: "Cubes of consecutive numbers: 1³, 2³, 3³, 4³, 5³, 6³ = 216."
  },
  {
    id: 39,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Statements: All pens are blue. Some blue things are caps. Conclusion: I. Some pens are caps. II. Some blue things are pens.",
    questionHi: "कथन: सभी पेन नीले हैं। कुछ नीली वस्तुएं टोपी हैं। निष्कर्ष: I. कुछ पेन टोपी हैं। II. कुछ नीली वस्तुएं पेन हैं।",
    options: [
      { id: "A", textEn: "Only II follows", textHi: "केवल II अनुसरण करता है" },
      { id: "B", textEn: "Only I follows", textHi: "केवल I अनुसरण करता है" },
      { id: "C", textEn: "Both follow", textHi: "दोनों अनुसरण करते हैं" },
      { id: "D", textEn: "Neither follows", textHi: "कोई अनुसरण नहीं करता" }
    ],
    correctAnswer: "A",
    explanation: "Since All Pens are Blue, the converse 'Some Blue things are Pens' is always valid. Pen and Cap have no direct link."
  },
  {
    id: 40,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "If 'WATER' is written as 'YCVGT', how is 'BREAD' written?",
    questionHi: "यदि 'WATER' को 'YCVGT' लिखा जाता है, तो 'BREAD' को कैसे लिखा जाएगा?",
    options: [
      { id: "A", textEn: "DTGCF", textHi: "DTGCF" },
      { id: "B", textEn: "DSGCF", textHi: "DSGCF" },
      { id: "C", textEn: "DTGBF", textHi: "DTGBF" },
      { id: "D", textEn: "ETGCF", textHi: "ETGCF" }
    ],
    correctAnswer: "A",
    explanation: "Each letter is shifted forward by +2: B(+2)=D, R(+2)=T, E(+2)=G, A(+2)=C, D(+2)=F => DTGCF."
  },
  {
    id: 41,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "What is the angle between hands of a clock at 9:00?",
    questionHi: "9:00 बजे घड़ी की सुइयों के बीच का कोण क्या होता है?",
    options: [
      { id: "A", textEn: "90°", textHi: "90°" },
      { id: "B", textEn: "120°", textHi: "120°" },
      { id: "C", textEn: "60°", textHi: "60°" },
      { id: "D", textEn: "45°", textHi: "45°" }
    ],
    correctAnswer: "A",
    explanation: "Minute hand at 12 and hour hand at 9 make an angle of 3 × 30° = 90°."
  },
  {
    id: 42,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Find the odd one out: Circle, Square, Triangle, Cube.",
    questionHi: "विषम चुनिए: वृत्त, वर्ग, त्रिभुज, घन।",
    options: [
      { id: "A", textEn: "Cube (3D Solid)", textHi: "घन (Cube - त्रिविमीय/3D)" },
      { id: "B", textEn: "Circle", textHi: "वृत्त" },
      { id: "C", textEn: "Square", textHi: "वर्ग" },
      { id: "D", textEn: "Triangle", textHi: "त्रिभुज" }
    ],
    correctAnswer: "A",
    explanation: "Circle, square, and triangle are 2D planar geometric figures, while a cube is a 3D solid."
  },
  {
    id: 43,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "In a certain code, 5 is coded as 25, 6 as 36, and 7 as 49. What is 9 coded as?",
    questionHi: "यदि 5 को 25, 6 को 36 और 7 को 49 लिखा जाता है, तो 9 को क्या लिखा जाएगा?",
    options: [
      { id: "A", textEn: "81", textHi: "81" },
      { id: "B", textEn: "72", textHi: "72" },
      { id: "C", textEn: "90", textHi: "90" },
      { id: "D", textEn: "64", textHi: "64" }
    ],
    correctAnswer: "A",
    explanation: "The logic is squaring the number: 9² = 81."
  },
  {
    id: 44,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "If A is taller than B, but shorter than C, who is the tallest among them?",
    questionHi: "यदि A, B से लंबा है लेकिन C से छोटा है, तो उनमें सबसे लंबा कौन है?",
    options: [
      { id: "A", textEn: "C", textHi: "C" },
      { id: "B", textEn: "A", textHi: "A" },
      { id: "C", textEn: "B", textHi: "B" },
      { id: "D", textEn: "Cannot be determined", textHi: "निर्धारित नहीं किया जा सकता" }
    ],
    correctAnswer: "A",
    explanation: "Order: C > A > B. The tallest person is C."
  },
  {
    id: 45,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "A person faces South, turns 90° clockwise. Which direction is he facing now?",
    questionHi: "एक व्यक्ति दक्षिण की ओर मुख किए हुए है, वह 90° दक्षिणावर्त घूमता है। अब उसका मुख किस दिशा में है?",
    options: [
      { id: "A", textEn: "West", textHi: "पश्चिम (West)" },
      { id: "B", textEn: "East", textHi: "पूर्व" },
      { id: "C", textEn: "North", textHi: "उत्तर" },
      { id: "D", textEn: "South-West", textHi: "दक्षिण-पश्चिम" }
    ],
    correctAnswer: "A",
    explanation: "From South (180°), a 90° clockwise turn points directly to West (270°)."
  },
  {
    id: 46,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Find the missing term: 10, 14, 19, 25, 32, ?",
    questionHi: "लुप्त संख्या ज्ञात कीजिए: 10, 14, 19, 25, 32, ?",
    options: [
      { id: "A", textEn: "40", textHi: "40" },
      { id: "B", textEn: "38", textHi: "38" },
      { id: "C", textEn: "39", textHi: "39" },
      { id: "D", textEn: "42", textHi: "42" }
    ],
    correctAnswer: "A",
    explanation: "Differences increase by 1: +4, +5, +6, +7, +8 => 32 + 8 = 40."
  },
  {
    id: 47,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Select the related pair: Book : Reading :: Fork : ?",
    questionHi: "संबंधित युग्म चुनिए: पुस्तक : पढ़ना :: कांटा (Fork) : ?",
    options: [
      { id: "A", textEn: "Eating", textHi: "खाना (Eating)" },
      { id: "B", textEn: "Kitchen", textHi: "रसोई" },
      { id: "C", textEn: "Plate", textHi: "थाली" },
      { id: "D", textEn: "Cook", textHi: "पकाना" }
    ],
    correctAnswer: "A",
    explanation: "A book is an instrument for reading, and a fork is an instrument for eating."
  },
  {
    id: 48,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "What is the mirror image of 'TOP' when placed before a vertical mirror?",
    questionHi: "ऊर्ध्वाधर दर्पण के सामने रखने पर 'TOP' का दर्पण प्रतिबिंब कैसा होगा?",
    options: [
      { id: "A", textEn: "qOT (lateral reversal)", textHi: "दाएं से बाएं उल्टा" },
      { id: "B", textEn: "POT", textHi: "POT" },
      { id: "C", textEn: "TOP", textHi: "TOP" },
      { id: "D", textEn: "PTO", textHi: "PTO" }
    ],
    correctAnswer: "A",
    explanation: "Lateral inversion reverses the order from right to left, flipping P into mirror image followed by O and T."
  },
  {
    id: 49,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "In a family, P is the brother of Q, and Q is the mother of R. How is P related to R?",
    questionHi: "एक परिवार में P, Q का भाई है और Q, R की माँ है। P, R से किस प्रकार संबंधित है?",
    options: [
      { id: "A", textEn: "Maternal Uncle (मामा)", textHi: "मामा (Maternal Uncle)" },
      { id: "B", textEn: "Father", textHi: "पिता" },
      { id: "C", textEn: "Brother", textHi: "भाई" },
      { id: "D", textEn: "Paternal Uncle", textHi: "चाचा" }
    ],
    correctAnswer: "A",
    explanation: "The brother of one's mother is the maternal uncle (Mama)."
  },
  {
    id: 50,
    section: "oth_reasoning",
    sectionName: "2. Logical Reasoning & Mental Ability",
    questionEn: "Complete the sequence: AZ, BY, CX, DW, ?",
    questionHi: "श्रृंखला पूर्ण कीजिए: AZ, BY, CX, DW, ?",
    options: [
      { id: "A", textEn: "EV", textHi: "EV" },
      { id: "B", textEn: "FU", textHi: "FU" },
      { id: "C", textEn: "EU", textHi: "EU" },
      { id: "D", textEn: "EW", textHi: "EW" }
    ],
    correctAnswer: "A",
    explanation: "Opposite letter pairs: A-Z, B-Y, C-X, D-W, E-V."
  },

  // =========================================================================
  // SECTION 3: GENERAL AWARENESS & EVERYDAY SCIENCE (Q51 - Q75)
  // =========================================================================
  {
    id: 51,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the capital city of India?",
    questionHi: "भारत की राजधानी क्या है?",
    options: [
      { id: "A", textEn: "New Delhi", textHi: "नई दिल्ली (New Delhi)" },
      { id: "B", textEn: "Mumbai", textHi: "मुंबई" },
      { id: "C", textEn: "Kolkata", textHi: "कोलकाता" },
      { id: "D", textEn: "Chennai", textHi: "चेन्नई" }
    ],
    correctAnswer: "A",
    explanation: "New Delhi was inaugurated as the capital of India in 1931."
  },
  {
    id: 52,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Who was the first President of Independent India?",
    questionHi: "स्वतंत्र भारत के प्रथम राष्ट्रपति कौन थे?",
    options: [
      { id: "A", textEn: "Dr. Rajendra Prasad", textHi: "डॉ. राजेंद्र प्रसाद" },
      { id: "B", textEn: "Dr. S. Radhakrishnan", textHi: "डॉ. एस. राधाकृष्णन" },
      { id: "C", textEn: "Dr. Zakir Husain", textHi: "डॉ. जाकिर हुसैन" },
      { id: "D", textEn: "V.V. Giri", textHi: "वी.वी. गिरि" }
    ],
    correctAnswer: "A",
    explanation: "Dr. Rajendra Prasad served as the first President of India from 1950 to 1962."
  },
  {
    id: 53,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the chemical formula of water?",
    questionHi: "जल का रासायनिक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "H2O", textHi: "H2O" },
      { id: "B", textEn: "CO2", textHi: "CO2" },
      { id: "C", textEn: "NaCl", textHi: "NaCl" },
      { id: "D", textEn: "H2O2", textHi: "H2O2" }
    ],
    correctAnswer: "A",
    explanation: "A water molecule consists of two hydrogen atoms covalently bonded to one oxygen atom (H2O)."
  },
  {
    id: 54,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "In which year did India adopt its Constitution on Republic Day?",
    questionHi: "भारत का संविधान किस वर्ष 26 जनवरी को पूर्ण रूप से लागू हुआ?",
    options: [
      { id: "A", textEn: "26 January 1950", textHi: "26 जनवरी 1950" },
      { id: "B", textEn: "15 August 1947", textHi: "15 अगस्त 1947" },
      { id: "C", textEn: "26 November 1949", textHi: "26 नवंबर 1949" },
      { id: "D", textEn: "30 January 1948", textHi: "30 जनवरी 1948" }
    ],
    correctAnswer: "A",
    explanation: "The Constitution of India came into full effect on 26 January 1950, celebrated as Republic Day."
  },
  {
    id: 55,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which organ in the human body purifies blood?",
    questionHi: "मानव शरीर में रक्त का शुद्धिकरण (छानना) कौन सा अंग करता है?",
    options: [
      { id: "A", textEn: "Kidneys (वृक्क)", textHi: "गुर्दा / वृक्क (Kidney)" },
      { id: "B", textEn: "Heart", textHi: "हृदय" },
      { id: "C", textEn: "Lungs", textHi: "फेफड़े" },
      { id: "D", textEn: "Stomach", textHi: "आमाशय" }
    ],
    correctAnswer: "A",
    explanation: "The kidneys filter metabolic waste products (urea, creatinine) from the blood to form urine."
  },
  {
    id: 56,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which planet is closest to the Sun in our Solar System?",
    questionHi: "हमारे सौरमंडल में सूर्य के सबसे निकटतम ग्रह कौन सा है?",
    options: [
      { id: "A", textEn: "Mercury", textHi: "बुध (Mercury)" },
      { id: "B", textEn: "Venus", textHi: "शुक्र" },
      { id: "C", textEn: "Earth", textHi: "पृथ्वी" },
      { id: "D", textEn: "Mars", textHi: "मंगल" }
    ],
    correctAnswer: "A",
    explanation: "Mercury orbits closest to the Sun at an average distance of about 58 million km."
  },
  {
    id: 57,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Who wrote India's national anthem 'Jana Gana Mana'?",
    questionHi: "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा था?",
    options: [
      { id: "A", textEn: "Rabindranath Tagore", textHi: "रवींद्रनाथ टैगोर" },
      { id: "B", textEn: "Bankim Chandra Chattopadhyay", textHi: "बंकिम चंद्र चट्टोपाध्याय" },
      { id: "C", textEn: "Sarojini Naidu", textHi: "सरोजिनी नायडू" },
      { id: "D", textEn: "Subhash Chandra Bose", textHi: "सुभाष चंद्र बोस" }
    ],
    correctAnswer: "A",
    explanation: "Rabindranath Tagore composed 'Jana Gana Mana' in Bengali, adopted as the national anthem on 24 January 1950."
  },
  {
    id: 58,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the normal human body temperature in Celsius?",
    questionHi: "मानव शरीर का सामान्य तापमान सेल्सियस में कितना होता है?",
    options: [
      { id: "A", textEn: "37°C (98.6°F)", textHi: "37°C (98.6°F)" },
      { id: "B", textEn: "35°C", textHi: "35°C" },
      { id: "C", textEn: "39°C", textHi: "39°C" },
      { id: "D", textEn: "40°C", textHi: "40°C" }
    ],
    correctAnswer: "A",
    explanation: "Standard normal body temperature is approximately 37°C (98.6°F)."
  },
  {
    id: 59,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the national animal of India?",
    questionHi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: [
      { id: "A", textEn: "Royal Bengal Tiger", textHi: "रॉयल बंगाल टाइगर (बाघ)" },
      { id: "B", textEn: "Asiatic Lion", textHi: "शेर" },
      { id: "C", textEn: "Elephant", textHi: "हाथी" },
      { id: "D", textEn: "Leopard", textHi: "तेंदुआ" }
    ],
    correctAnswer: "A",
    explanation: "The Royal Bengal Tiger (Panthera tigris) was declared India's national animal in April 1973."
  },
  {
    id: 60,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which gas is absorbed by plants during photosynthesis?",
    questionHi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
    options: [
      { id: "A", textEn: "Carbon Dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड (CO2)" },
      { id: "B", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Nitrogen (N2)", textHi: "नाइट्रोजन" },
      { id: "D", textEn: "Methane", textHi: "मीथेन" }
    ],
    correctAnswer: "A",
    explanation: "Plants absorb carbon dioxide from the air and release oxygen during photosynthesis."
  },
  {
    id: 61,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Who is known as the 'Father of the Indian Constitution'?",
    questionHi: "भारतीय संविधान का जनक किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Dr. B.R. Ambedkar", textHi: "डॉ. बी.आर. अम्बेडकर" },
      { id: "B", textEn: "Mahatma Gandhi", textHi: "महात्मा गांधी" },
      { id: "C", textEn: "Jawaharlal Nehru", textHi: "जवाहरलाल नेहरू" },
      { id: "D", textEn: "Sardar Patel", textHi: "सरदार पटेल" }
    ],
    correctAnswer: "A",
    explanation: "Dr. Bhimrao Ramji Ambedkar chaired the Drafting Committee and is acknowledged as the chief architect of the Indian Constitution."
  },
  {
    id: 62,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the largest organ in the human body?",
    questionHi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options: [
      { id: "A", textEn: "Skin (त्वचा)", textHi: "त्वचा (Skin)" },
      { id: "B", textEn: "Liver (यकृत - सबसे बड़ी ग्रंथि)", textHi: "यकृत" },
      { id: "C", textEn: "Brain", textHi: "मस्तिष्क" },
      { id: "D", textEn: "Lungs", textHi: "फेफड़े" }
    ],
    correctAnswer: "A",
    explanation: "The skin is the largest organ of the human body, covering an average surface area of 1.5 to 2 square meters."
  },
  {
    id: 63,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which Indian state has the highest population?",
    questionHi: "भारत का सर्वाधिक जनसंख्या वाला राज्य कौन सा है?",
    options: [
      { id: "A", textEn: "Uttar Pradesh", textHi: "उत्तर प्रदेश (Uttar Pradesh)" },
      { id: "B", textEn: "Maharashtra", textHi: "महाराष्ट्र" },
      { id: "C", textEn: "Bihar", textHi: "बिहार" },
      { id: "D", textEn: "West Bengal", textHi: "पश्चिम बंगाल" }
    ],
    correctAnswer: "A",
    explanation: "Uttar Pradesh is the most populous state in India with over 200 million people."
  },
  {
    id: 64,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which festival in India is celebrated as the 'Festival of Lights'?",
    questionHi: "'प्रकाश का पर्व' किस त्योहार को कहा जाता है?",
    options: [
      { id: "A", textEn: "Diwali (दीपावली)", textHi: "दीपावली (Diwali)" },
      { id: "B", textEn: "Holi", textHi: "होली" },
      { id: "C", textEn: "Eid", textHi: "ईद" },
      { id: "D", textEn: "Dussehra", textHi: "दशहरा" }
    ],
    correctAnswer: "A",
    explanation: "Diwali symbolizes the spiritual victory of light over darkness and good over evil."
  },
  {
    id: 65,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which instrument is used to measure electric voltage?",
    questionHi: "विद्युत विभवांतर (Voltage) मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Voltmeter", textHi: "वोल्टमीटर (Voltmeter)" },
      { id: "B", textEn: "Ammeter", textHi: "एमीटर (धारा हेतु)" },
      { id: "C", textEn: "Ohmmeter", textHi: "ओममीटर" },
      { id: "D", textEn: "Galvanometer", textHi: "गैल्वेनोमीटर" }
    ],
    correctAnswer: "A",
    explanation: "A voltmeter connected in parallel measures potential difference across components."
  },
  {
    id: 66,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Who was the first woman Prime Minister of India?",
    questionHi: "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
    options: [
      { id: "A", textEn: "Indira Gandhi", textHi: "इंदिरा गांधी" },
      { id: "B", textEn: "Sarojini Naidu", textHi: "सरोजिनी नायडू" },
      { id: "C", textEn: "Pratibha Patil", textHi: "प्रतिभा पाटिल (प्रथम महिला राष्ट्रपति)" },
      { id: "D", textEn: "Sushma Swaraj", textHi: "सुषमा स्वराज" }
    ],
    correctAnswer: "A",
    explanation: "Indira Gandhi served as the first woman Prime Minister of India from 1966 to 1977 and again from 1980 to 1984."
  },
  {
    id: 67,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the hardest naturally occurring mineral on Earth?",
    questionHi: "पृथ्वी पर पाया जाने वाला सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options: [
      { id: "A", textEn: "Diamond (हीरा)", textHi: "हीरा (Diamond)" },
      { id: "B", textEn: "Quartz", textHi: "क्वार्ट्ज" },
      { id: "C", textEn: "Gold", textHi: "सोना" },
      { id: "D", textEn: "Iron", textHi: "लोहा" }
    ],
    correctAnswer: "A",
    explanation: "Diamond, an allotrope of carbon with tetrahedral covalent bonding, has a Mohs hardness of 10."
  },
  {
    id: 68,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    questionHi: "'भोर का तारा' या 'सांझ का तारा' किस ग्रह को कहा जाता है?",
    options: [
      { id: "A", textEn: "Venus (शुक्र)", textHi: "शुक्र (Venus)" },
      { id: "B", textEn: "Mars", textHi: "मंगल" },
      { id: "C", textEn: "Jupiter", textHi: "बृहस्पति" },
      { id: "D", textEn: "Mercury", textHi: "बुध" }
    ],
    correctAnswer: "A",
    explanation: "Venus is the brightest natural object in the night sky after the Moon, often seen around dawn and dusk."
  },
  {
    id: 69,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the primary function of red blood cells (RBCs)?",
    questionHi: "लाल रक्त कोशिकाओं (RBCs) का मुख्य कार्य क्या है?",
    options: [
      { id: "A", textEn: "To transport oxygen via hemoglobin to tissues", textHi: "हीमोग्लोबिन द्वारा शरीर के ऊतकों तक ऑक्सीजन पहुँचाना" },
      { id: "B", textEn: "To fight bacterial infection", textHi: "संक्रमण से लड़ना" },
      { id: "C", textEn: "To clot wounds", textHi: "रक्त जमाना" },
      { id: "D", textEn: "To digest carbohydrates", textHi: "पाचन करना" }
    ],
    correctAnswer: "A",
    explanation: "RBCs contain hemoglobin which binds oxygen in the lungs and delivers it to body cells."
  },
  {
    id: 70,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "In which city is the Taj Mahal located?",
    questionHi: "प्रसिद्ध ऐतिहासिक स्मारक 'ताजमहल' किस शहर में स्थित है?",
    options: [
      { id: "A", textEn: "Agra (Uttar Pradesh)", textHi: "आगरा (उत्तर प्रदेश)" },
      { id: "B", textEn: "Delhi", textHi: "दिल्ली" },
      { id: "C", textEn: "Jaipur", textHi: "जयपुर" },
      { id: "D", textEn: "Lucknow", textHi: "लखनऊ" }
    ],
    correctAnswer: "A",
    explanation: "The white marble Taj Mahal was built in Agra by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal."
  },
  {
    id: 71,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the unit of electric resistance?",
    questionHi: "विद्युत प्रतिरोध (Resistance) का मात्रक क्या है?",
    options: [
      { id: "A", textEn: "Ohm (Ω)", textHi: "ओम (Ohm)" },
      { id: "B", textEn: "Volt", textHi: "वोल्ट" },
      { id: "C", textEn: "Ampere", textHi: "एम्पीयर" },
      { id: "D", textEn: "Watt", textHi: "वाट" }
    ],
    correctAnswer: "A",
    explanation: "Electric resistance is measured in Ohms (Ω) according to Ohm's Law (V = IR)."
  },
  {
    id: 72,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Which ocean is the largest and deepest ocean in the world?",
    questionHi: "विश्व का सबसे बड़ा और सबसे गहरा महासागर कौन सा है?",
    options: [
      { id: "A", textEn: "Pacific Ocean (प्रशांत महासागर)", textHi: "प्रशांत महासागर (Pacific Ocean)" },
      { id: "B", textEn: "Atlantic Ocean", textHi: "अटलांटिक महासागर" },
      { id: "C", textEn: "Indian Ocean", textHi: "हिंद महासागर" },
      { id: "D", textEn: "Arctic Ocean", textHi: "आर्कटिक महासागर" }
    ],
    correctAnswer: "A",
    explanation: "The Pacific Ocean covers over 30% of the Earth's surface and contains the Mariana Trench (deepest point)."
  },
  {
    id: 73,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "Who discovered Penicillin, the first antibiotic?",
    questionHi: "पहले एंटीबायोटिक 'पेनिसिलिन' की खोज किसने की थी?",
    options: [
      { id: "A", textEn: "Alexander Fleming", textHi: "अलेक्जेंडर फ्लेमिंग" },
      { id: "B", textEn: "Louis Pasteur", textHi: "लुई पाश्चर" },
      { id: "C", textEn: "Edward Jenner", textHi: "एडवर्ड जेनर" },
      { id: "D", textEn: "Robert Koch", textHi: "रॉबर्ट कोच" }
    ],
    correctAnswer: "A",
    explanation: "Sir Alexander Fleming discovered penicillin from Penicillium notatum mold in London in 1928."
  },
  {
    id: 74,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "How many states and Union Territories are there in India currently?",
    questionHi: "वर्तमान में भारत में कुल कितने राज्य और केंद्र शासित प्रदेश हैं?",
    options: [
      { id: "A", textEn: "28 States and 8 Union Territories", textHi: "28 राज्य और 8 केंद्र शासित प्रदेश" },
      { id: "B", textEn: "29 States and 7 UTs", textHi: "29 राज्य और 7 UTs" },
      { id: "C", textEn: "28 States and 9 UTs", textHi: "28 राज्य और 9 UTs" },
      { id: "D", textEn: "29 States and 8 UTs", textHi: "29 राज्य और 8 UTs" }
    ],
    correctAnswer: "A",
    explanation: "India currently comprises 28 states and 8 Union Territories."
  },
  {
    id: 75,
    section: "oth_gk",
    sectionName: "3. General Awareness & Everyday Science",
    questionEn: "What is the chemical name of vitamin C?",
    questionHi: "विटामिन C का रासायनिक नाम क्या है?",
    options: [
      { id: "A", textEn: "Ascorbic Acid", textHi: "एस्कॉर्बिक एसिड (Ascorbic Acid)" },
      { id: "B", textEn: "Citric Acid", textHi: "साइट्रिक एसिड" },
      { id: "C", textEn: "Acetic Acid", textHi: "एसिटिक एसिड" },
      { id: "D", textEn: "Lactic Acid", textHi: "लैक्टिक एसिड" }
    ],
    correctAnswer: "A",
    explanation: "Vitamin C is chemically known as Ascorbic Acid."
  },

  // =========================================================================
  // SECTION 4: BASIC COMPUTER & DIGITAL LITERACY (Q76 - Q100)
  // =========================================================================
  {
    id: 76,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the full form of CPU?",
    questionHi: "CPU का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Central Processing Unit", textHi: "Central Processing Unit" },
      { id: "B", textEn: "Central Program Unit", textHi: "Central Program Unit" },
      { id: "C", textEn: "Computer Processing Unit", textHi: "Computer Processing Unit" },
      { id: "D", textEn: "Control Power Unit", textHi: "Control Power Unit" }
    ],
    correctAnswer: "A",
    explanation: "CPU (Central Processing Unit) is the electronic brain of a computer executing instructions."
  },
  {
    id: 77,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which of the following is volatile memory that loses contents when powered off?",
    questionHi: "निम्नलिखित में से कौन सी वोलेटाइल (अस्थिर) मेमोरी है जो बिजली जाने पर डेटा खो देती है?",
    options: [
      { id: "A", textEn: "RAM (Random Access Memory)", textHi: "RAM (रैंडम एक्सेस मेमोरी)" },
      { id: "B", textEn: "ROM (Read Only Memory)", textHi: "ROM" },
      { id: "C", textEn: "Hard Disk", textHi: "हार्ड डिस्क" },
      { id: "D", textEn: "SSD", textHi: "एसएसडी" }
    ],
    correctAnswer: "A",
    explanation: "RAM requires power to maintain storage; ROM and hard drives retain data non-volatilely."
  },
  {
    id: 78,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the keyboard shortcut for 'Undo' in Windows and Microsoft Office?",
    questionHi: "विंडोज और एमएस ऑफिस में 'Undo' (पूर्ववत) करने का कीबोर्ड शॉर्टकट क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Z", textHi: "Ctrl + Z" },
      { id: "B", textEn: "Ctrl + Y (Redo)", textHi: "Ctrl + Y" },
      { id: "C", textEn: "Ctrl + C (Copy)", textHi: "Ctrl + C" },
      { id: "D", textEn: "Ctrl + V (Paste)", textHi: "Ctrl + V" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Z reverses the last performed action."
  },
  {
    id: 79,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "How many bits make 1 Byte?",
    questionHi: "1 बाइट (Byte) में कितने बिट्स (Bits) होते हैं?",
    options: [
      { id: "A", textEn: "8 bits", textHi: "8 बिट्स (8 bits)" },
      { id: "B", textEn: "4 bits (1 Nibble)", textHi: "4 बिट्स" },
      { id: "C", textEn: "16 bits", textHi: "16 बिट्स" },
      { id: "D", textEn: "32 bits", textHi: "32 बिट्स" }
    ],
    correctAnswer: "A",
    explanation: "1 Byte = 8 binary digits (bits)."
  },
  {
    id: 80,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which of the following is an input device?",
    questionHi: "निम्नलिखित में से कौन सा इनपुट डिवाइस (Input Device) है?",
    options: [
      { id: "A", textEn: "Keyboard and Mouse", textHi: "कीबोर्ड और माउस" },
      { id: "B", textEn: "Monitor (Output)", textHi: "मॉनिटर" },
      { id: "C", textEn: "Printer (Output)", textHi: "प्रिंटर" },
      { id: "D", textEn: "Speaker (Output)", textHi: "स्पीकर" }
    ],
    correctAnswer: "A",
    explanation: "Keyboards, mice, and scanners feed data into the computer system (inputs)."
  },
  {
    id: 81,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What does 'WWW' stand for?",
    questionHi: "'WWW' का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "World Wide Web", textHi: "World Wide Web" },
      { id: "B", textEn: "World Wide Webpage", textHi: "World Wide Webpage" },
      { id: "C", textEn: "World Wide Word", textHi: "World Wide Word" },
      { id: "D", textEn: "World Web Wizard", textHi: "World Web Wizard" }
    ],
    correctAnswer: "A",
    explanation: "The World Wide Web was invented by Sir Tim Berners-Lee at CERN in 1989."
  },
  {
    id: 82,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which key is pressed to refresh an active web page in most web browsers?",
    questionHi: "वेब ब्राउज़र में पेज को रीफ्रेश (Reload) करने के लिए किस फंक्शन की का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "F5", textHi: "F5" },
      { id: "B", textEn: "F1 (Help)", textHi: "F1" },
      { id: "C", textEn: "F2 (Rename)", textHi: "F2" },
      { id: "D", textEn: "F11 (Fullscreen)", textHi: "F11" }
    ],
    correctAnswer: "A",
    explanation: "Pressing F5 reloads the current web page."
  },
  {
    id: 83,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the standard file extension for Microsoft Excel spreadsheets?",
    questionHi: "माइक्रोसॉफ्ट एक्सेल फाइल का मानक एक्सटेंशन क्या होता है?",
    options: [
      { id: "A", textEn: ".xlsx", textHi: ".xlsx" },
      { id: "B", textEn: ".docx (Word)", textHi: ".docx" },
      { id: "C", textEn: ".pptx (PowerPoint)", textHi: ".pptx" },
      { id: "D", textEn: ".txt", textHi: ".txt" }
    ],
    correctAnswer: "A",
    explanation: "Modern Excel workbooks use the .xlsx extension."
  },
  {
    id: 84,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What does 'HTTP' stand for in a web address?",
    questionHi: "वेबसाइट के पते में 'HTTP' का पूर्ण रूप क्या होता है?",
    options: [
      { id: "A", textEn: "HyperText Transfer Protocol", textHi: "HyperText Transfer Protocol" },
      { id: "B", textEn: "HyperText Transmission Program", textHi: "HyperText Transmission Program" },
      { id: "C", textEn: "Hyper Tool Transfer Protocol", textHi: "Hyper Tool Transfer Protocol" },
      { id: "D", textEn: "High Text Transfer Protocol", textHi: "High Text Transfer Protocol" }
    ],
    correctAnswer: "A",
    explanation: "HTTP is the fundamental application protocol used for data communication over the web."
  },
  {
    id: 85,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is 1 Gigabyte (1 GB) equal to?",
    questionHi: "1 गीगाबाइट (1 GB) कितने मेगाबाइट (MB) के बराबर होता है?",
    options: [
      { id: "A", textEn: "1,024 MB", textHi: "1,024 MB" },
      { id: "B", textEn: "1,000 KB", textHi: "1,000 KB" },
      { id: "C", textEn: "1,024 KB", textHi: "1,024 KB" },
      { id: "D", textEn: "1,024 GB", textHi: "1,024 GB" }
    ],
    correctAnswer: "A",
    explanation: "In binary computer storage, 1 GB = 1,024 Megabytes (MB)."
  },
  {
    id: 86,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the primary function of an Operating System (OS)?",
    questionHi: "ऑपरेटिंग सिस्टम (OS) का प्राथमिक कार्य क्या होता है?",
    options: [
      { id: "A", textEn: "To manage computer hardware, memory, and software applications", textHi: "हार्डवेयर, मेमोरी और सॉफ्टवेयर अनुप्रयोगों का प्रबंधन करना" },
      { id: "B", textEn: "To design graphics only", textHi: "केवल ग्राफिक्स बनाना" },
      { id: "C", textEn: "To print papers", textHi: "कागज प्रिंट करना" },
      { id: "D", textEn: "To scan viruses only", textHi: "केवल वायरस हटाना" }
    ],
    correctAnswer: "A",
    explanation: "An operating system acts as an intermediary interface between computer hardware and user programs."
  },
  {
    id: 87,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which of the following is an open-source operating system?",
    questionHi: "निम्नलिखित में से कौन सा एक ओपन-सोर्स (Open-Source) ऑपरेटिंग सिस्टम है?",
    options: [
      { id: "A", textEn: "Linux", textHi: "Linux" },
      { id: "B", textEn: "Microsoft Windows", textHi: "Microsoft Windows" },
      { id: "C", textEn: "macOS", textHi: "macOS" },
      { id: "D", textEn: "iOS", textHi: "iOS" }
    ],
    correctAnswer: "A",
    explanation: "Linux is an open-source Unix-like operating system kernel created by Linus Torvalds."
  },
  {
    id: 88,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is a 'firewall' in computer networking?",
    questionHi: "कंप्यूटर नेटवर्किंग में 'फ़ायरवॉल' (Firewall) का क्या कार्य है?",
    options: [
      { id: "A", textEn: "To block unauthorized network access and secure systems", textHi: "अनधिकृत पहुंच को रोकना और सिस्टम की सुरक्षा करना" },
      { id: "B", textEn: "To cool physical cables", textHi: "केबल को ठंडा रखना" },
      { id: "C", textEn: "To extinguish electrical fires", textHi: "आग बुझाना" },
      { id: "D", textEn: "To increase internet speed", textHi: "इंटरनेट स्पीड बढ़ाना" }
    ],
    correctAnswer: "A",
    explanation: "A firewall filters incoming and outgoing network traffic based on an organization's security policies."
  },
  {
    id: 89,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What does 'URL' stand for in web terminology?",
    questionHi: "वेब शब्दावली में 'URL' का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Uniform Resource Locator", textHi: "Uniform Resource Locator" },
      { id: "B", textEn: "Universal Resource Link", textHi: "Universal Resource Link" },
      { id: "C", textEn: "Uniform Radio Location", textHi: "Uniform Radio Location" },
      { id: "D", textEn: "United Resource Locator", textHi: "United Resource Locator" }
    ],
    correctAnswer: "A",
    explanation: "A URL specifies the address of a given unique resource on the web."
  },
  {
    id: 90,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which shortcut key is used to save a file in Windows programs?",
    questionHi: "विंडोज प्रोग्रामों में फाइल को सुरक्षित (Save) करने का शॉर्टकट क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + S", textHi: "Ctrl + S" },
      { id: "B", textEn: "Ctrl + O (Open)", textHi: "Ctrl + O" },
      { id: "C", textEn: "Ctrl + P (Print)", textHi: "Ctrl + P" },
      { id: "D", textEn: "Ctrl + N (New)", textHi: "Ctrl + N" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + S saves the current open document."
  },
  {
    id: 91,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the primary protocol used to send electronic mails across networks?",
    questionHi: "इंटरनेट पर ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "SMTP (Simple Mail Transfer Protocol)", textHi: "SMTP (Simple Mail Transfer Protocol)" },
      { id: "B", textEn: "POP3 (Receiving)", textHi: "POP3" },
      { id: "C", textEn: "FTP (File Transfer)", textHi: "FTP" },
      { id: "D", textEn: "DHCP", textHi: "DHCP" }
    ],
    correctAnswer: "A",
    explanation: "Simple Mail Transfer Protocol (SMTP) handles outgoing email transmission between mail servers."
  },
  {
    id: 92,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is phishing?",
    questionHi: "साइबर सुरक्षा में 'फ़िशिंग' (Phishing) क्या है?",
    options: [
      { id: "A", textEn: "A social engineering cyberattack masquerading as a trusted entity to steal credentials", textHi: "विश्वासपात्र बनकर संवेदनशील जानकारी (पासवर्ड, बैंक विवरण) चुराना" },
      { id: "B", textEn: "Catching fish online", textHi: "मछली पकड़ना" },
      { id: "C", textEn: "Formatting a hard drive", textHi: "हार्ड ड्राइव फॉर्मेट करना" },
      { id: "D", textEn: "Creating backup copies", textHi: "बैकअप बनाना" }
    ],
    correctAnswer: "A",
    explanation: "Phishing involves deceitful emails or websites imitating genuine banks or services to trick users into revealing sensitive data."
  },
  {
    id: 93,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What does 'PDF' stand for?",
    questionHi: "दस्तावेज़ प्रारूप 'PDF' का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Portable Document Format", textHi: "Portable Document Format" },
      { id: "B", textEn: "Public Document Format", textHi: "Public Document Format" },
      { id: "C", textEn: "Printable Document File", textHi: "Printable Document File" },
      { id: "D", textEn: "Personal Document File", textHi: "Personal Document File" }
    ],
    correctAnswer: "A",
    explanation: "Portable Document Format (PDF) was developed by Adobe in 1993 to present documents independent of software and hardware."
  },
  {
    id: 94,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which of the following is an example of an Operating System?",
    questionHi: "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम का एक उदाहरण है?",
    options: [
      { id: "A", textEn: "Windows 11 / Linux / Android", textHi: "Windows 11 / Linux / Android" },
      { id: "B", textEn: "MS Word (Word Processor)", textHi: "MS Word" },
      { id: "C", textEn: "Google Chrome (Browser)", textHi: "Google Chrome" },
      { id: "D", textEn: "VLC Media Player", textHi: "VLC Player" }
    ],
    correctAnswer: "A",
    explanation: "Windows, Linux, Android, and macOS are system software (operating systems)."
  },
  {
    id: 95,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the shortcut to select all text or files in a folder?",
    questionHi: "किसी फोल्डर या दस्तावेज में सभी सामग्री को एक साथ चुनने (Select All) का शॉर्टकट क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + A", textHi: "Ctrl + A" },
      { id: "B", textEn: "Ctrl + S", textHi: "Ctrl + S" },
      { id: "C", textEn: "Ctrl + B", textHi: "Ctrl + B" },
      { id: "D", textEn: "Ctrl + F", textHi: "Ctrl + F" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + A selects all items or text in the active window."
  },
  {
    id: 96,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "Which protocol is used to secure web traffic with SSL/TLS encryption?",
    questionHi: "वेबसाइटों पर सुरक्षित डेटा संचार हेतु किस एन्क्रिप्टेड प्रोटोकॉल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "HTTPS (Hypertext Transfer Protocol Secure)", textHi: "HTTPS" },
      { id: "B", textEn: "HTTP", textHi: "HTTP" },
      { id: "C", textEn: "FTP", textHi: "FTP" },
      { id: "D", textEn: "Telnet", textHi: "Telnet" }
    ],
    correctAnswer: "A",
    explanation: "HTTPS encrypts communications using Transport Layer Security (TLS/SSL) to protect against eavesdropping."
  },
  {
    id: 97,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is an IP address?",
    questionHi: "'आईपी एड्रेस' (IP Address) क्या होता है?",
    options: [
      { id: "A", textEn: "A unique numerical identifier assigned to each device connected to a network", textHi: "इंटरनेट या नेटवर्क से जुड़े प्रत्येक उपकरण का विशिष्ट संख्यात्मक पता" },
      { id: "B", textEn: "Email password", textHi: "ईमेल पासवर्ड" },
      { id: "C", textEn: "Physical serial number of keyboard", textHi: "कीबोर्ड का सीरियल नंबर" },
      { id: "D", textEn: "Internet browser name", textHi: "ब्राउज़र का नाम" }
    ],
    correctAnswer: "A",
    explanation: "An Internet Protocol address (IPv4 or IPv6) uniquely identifies a hardware device on a network."
  },
  {
    id: 98,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What is the function of the 'Spelling and Grammar Check' feature in MS Word (shortcut key F7)?",
    questionHi: "एमएस वर्ड में 'F7' शॉर्टकट की का क्या कार्य होता है?",
    options: [
      { id: "A", textEn: "Check Spelling and Grammar errors", textHi: "वर्तनी और व्याकरण की जांच करना (Spelling & Grammar)" },
      { id: "B", textEn: "Save the document", textHi: "दस्तावेज़ सुरक्षित करना" },
      { id: "C", textEn: "Print the document", textHi: "प्रिंट करना" },
      { id: "D", textEn: "Close the window", textHi: "खिड़की बंद करना" }
    ],
    correctAnswer: "A",
    explanation: "F7 opens the spelling and grammar checker in Microsoft Office applications."
  },
  {
    id: 99,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What type of software is an Antivirus program?",
    questionHi: "एंटीवायरस (Antivirus) किस प्रकार का सॉफ्टवेयर है?",
    options: [
      { id: "A", textEn: "Security Utility Software", textHi: "सुरक्षा / यूटिलिटी सॉफ्टवेयर (Utility Software)" },
      { id: "B", textEn: "Operating System", textHi: "ऑपरेटिंग सिस्टम" },
      { id: "C", textEn: "Database Management System", textHi: "डेटाबेस सिस्टम" },
      { id: "D", textEn: "Hardware driver", textHi: "हार्डवेयर ड्राइवर" }
    ],
    correctAnswer: "A",
    explanation: "Antivirus is utility software designed to prevent, detect, and remove malicious software."
  },
  {
    id: 100,
    section: "oth_comp",
    sectionName: "4. Basic Computer & Digital Literacy",
    questionEn: "What does 'Wi-Fi' stand for?",
    questionHi: "'Wi-Fi' का सामान्य पूर्ण रूप क्या माना जाता है?",
    options: [
      { id: "A", textEn: "Wireless Fidelity", textHi: "Wireless Fidelity" },
      { id: "B", textEn: "Wireless Field", textHi: "Wireless Field" },
      { id: "C", textEn: "Wired Fibre", textHi: "Wired Fibre" },
      { id: "D", textEn: "Wireless Frequency", textHi: "Wireless Frequency" }
    ],
    correctAnswer: "A",
    explanation: "Wi-Fi is a trademark of the Wi-Fi Alliance based on IEEE 802.11 wireless local area network standards, popularly called Wireless Fidelity."
  }
];
