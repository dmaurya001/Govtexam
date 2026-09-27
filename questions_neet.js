// =========================================================================
// GovtExamHub — NEET (UG) 2026 OFFICIAL PATTERN QUESTION DATASET
// Official NTA NEET UG 2026 Examination Configuration:
// Total Questions: 180 Compulsory Questions
// Total Marks: 720 Marks (4 Marks per Correct, -1 Mark Negative)
// Duration: 180 Minutes (3 Hours)
// Section Breakdown:
//   1. Physics: 45 Questions (Q1 - Q45), 180 Marks
//   2. Chemistry: 45 Questions (Q46 - Q90), 180 Marks
//   3. Botany: 45 Questions (Q91 - Q135), 180 Marks
//   4. Zoology: 45 Questions (Q136 - Q180), 180 Marks
//   Total Biology = 90 Questions (360 Marks)
// =========================================================================

const NEET_EXAM_CONFIG = {
  id: "neet",
  examId: "neet",
  title: "NEET UG 2026 Pattern-Based Mock Test",
  name: "NEET UG 2026 Pattern-Based Mock Test",
  shortName: "NEET (UG)",
  icon: "🧬",
  authority: "National Testing Agency (NTA)",
  year: 2026,
  stage: "UG Medical Entrance",
  paper: "National Eligibility cum Entrance Test",
  mode: "Offline OMR Pattern Simulation",
  isAvailable: true,
  totalQuestions: 180,
  totalMarks: 720,
  durationMinutes: 180, // 3 Hours
  marksPerCorrect: 4.0,
  negativeMarking: 1.0,
  negativeMarks: 1.0,
  negativeMarkType: "fixed",
  timingMode: "composite",
  languages: ["en", "hi"],
  questionType: "Objective Multiple Choice (Single Correct)",
  officialSourceUrl: "https://exams.nta.ac.in/NEET/",
  officialNotificationName: "NEET (UG) - 2026 Information Bulletin (NTA)",
  notificationYear: 2026,
  lastVerifiedDate: "2026-09-26",
  sections: [
    { id: "physics", name: "Physics / भौतिक विज्ञान", start: 1, end: 45, total: 45, questions: 45, marks: 180 },
    { id: "chemistry", name: "Chemistry / रसायन विज्ञान", start: 46, end: 90, total: 45, questions: 45, marks: 180 },
    { id: "botany", name: "Botany / वनस्पति विज्ञान", start: 91, end: 135, total: 45, questions: 45, marks: 180 },
    { id: "zoology", name: "Zoology / जन्तु विज्ञान", start: 136, end: 180, total: 45, questions: 45, marks: 180 }
  ]
};

const NEET_QUESTIONS_DATA = [
  // =========================================================================
  // 1. PHYSICS (Q1 to Q45) — 45 Questions (180 Marks)
  // =========================================================================
  {
    id: 1,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the dimensional formula for the universal gravitational constant (G)?",
    questionHi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक (G) का विमीय सूत्र क्या है?",
    options: [
      { id: "A", textEn: "[M^-1 L^3 T^-2]", textHi: "[M^-1 L^3 T^-2]" },
      { id: "B", textEn: "[M L^2 T^-2]", textHi: "[M L^2 T^-2]" },
      { id: "C", textEn: "[M^-1 L^2 T^-1]", textHi: "[M^-1 L^2 T^-1]" },
      { id: "D", textEn: "[M L^3 T^-2]", textHi: "[M L^3 T^-2]" }
    ],
    correctAnswer: "A",
    explanation: "F = G(m1·m2)/r^2 => G = F·r^2 / (m1·m2) = [M L T^-2][L^2] / [M^2] = [M^-1 L^3 T^-2]."
  },
  {
    id: 2,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A projectile is launched with speed u at an angle θ with the horizontal. The maximum horizontal range is obtained when θ is:",
    questionHi: "किसी प्रक्षेप्य को चाल u से क्षैतिज से कोण θ पर प्रक्षेपित किया जाता है। अधिकतम क्षैतिज परास किस कोण θ पर प्राप्त होगी?",
    options: [
      { id: "A", textEn: "30°", textHi: "30°" },
      { id: "B", textEn: "45°", textHi: "45°" },
      { id: "C", textEn: "60°", textHi: "60°" },
      { id: "D", textEn: "90°", textHi: "90°" }
    ],
    correctAnswer: "B",
    explanation: "R = (u^2 sin 2θ)/g. The range is maximized when sin 2θ = 1 => 2θ = 90° => θ = 45°."
  },
  {
    id: 3,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Work done by a centripetal force on a particle moving in a uniform circular path is:",
    questionHi: "एकसमान वृत्ताकार पथ में गतिमान कण पर अभिकेन्द्रीय बल द्वारा किया गया कार्य कितना होता है?",
    options: [
      { id: "A", textEn: "Positive", textHi: "धनात्मक" },
      { id: "B", textEn: "Negative", textHi: "ऋणात्मक" },
      { id: "C", textEn: "Zero", textHi: "शून्य" },
      { id: "D", textEn: "Dependent on radius", textHi: "त्रिज्या पर निर्भर" }
    ],
    correctAnswer: "C",
    explanation: "Centripetal force is always perpendicular to displacement (cos 90° = 0), so W = F·d·cos 90° = 0."
  },
  {
    id: 4,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Escape velocity from the surface of the Earth is approximately:",
    questionHi: "पृथ्वी की सतह से पलायन वेग का मान लगभग कितना होता है?",
    options: [
      { id: "A", textEn: "9.8 km/s", textHi: "9.8 किमी/से" },
      { id: "B", textEn: "11.2 km/s", textHi: "11.2 किमी/से" },
      { id: "C", textEn: "8.0 km/s", textHi: "8.0 किमी/से" },
      { id: "D", textEn: "42.0 km/s", textHi: "42.0 किमी/से" }
    ],
    correctAnswer: "B",
    explanation: "v_e = √(2gR) = √(2 × 9.8 × 6.4 × 10^6) ≈ 11.2 km/s."
  },
  {
    id: 5,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The moment of inertia of a uniform solid sphere of mass M and radius R about its diameter is:",
    questionHi: "द्रव्यमान M तथा त्रिज्या R वाले एकसमान ठोस गोले का उसके व्यास के परितः जड़त्व आघूर्ण क्या होता है?",
    options: [
      { id: "A", textEn: "(2/5) MR^2", textHi: "(2/5) MR^2" },
      { id: "B", textEn: "(2/3) MR^2", textHi: "(2/3) MR^2" },
      { id: "C", textEn: "(1/2) MR^2", textHi: "(1/2) MR^2" },
      { id: "D", textEn: "MR^2", textHi: "MR^2" }
    ],
    correctAnswer: "A",
    explanation: "For a solid sphere about diametrical axis, I = (2/5)MR^2. For hollow sphere it is (2/3)MR^2."
  },
  {
    id: 6,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Bernoulli's principle is based on the law of conservation of:",
    questionHi: "बरनौली का प्रमेय किस भौतिक राशि के संरक्षण के नियम पर आधारित है?",
    options: [
      { id: "A", textEn: "Mass", textHi: "द्रव्यमान" },
      { id: "B", textEn: "Linear momentum", textHi: "रैखिक संवेग" },
      { id: "C", textEn: "Energy", textHi: "ऊर्जा" },
      { id: "D", textEn: "Angular momentum", textHi: "कोणीय संवेग" }
    ],
    correctAnswer: "C",
    explanation: "Bernoulli's theorem represents conservation of mechanical energy for streamline flow of an incompressible, non-viscous fluid."
  },
  {
    id: 7,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "An ideal gas undergoes an isothermal expansion. The change in its internal energy (ΔU) is:",
    questionHi: "एक आदर्श गैस समतापीय प्रसार से गुजरती है। इसकी आंतरिक ऊर्जा में परिवर्तन (ΔU) होगा:",
    options: [
      { id: "A", textEn: "Positive", textHi: "धनात्मक" },
      { id: "B", textEn: "Negative", textHi: "ऋणात्मक" },
      { id: "C", textEn: "Zero", textHi: "शून्य" },
      { id: "D", textEn: "Infinite", textHi: "अनंत" }
    ],
    correctAnswer: "C",
    explanation: "Internal energy of an ideal gas depends solely on temperature: U = f/2 nRT. In isothermal process ΔT = 0, hence ΔU = 0."
  },
  {
    id: 8,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Efficiency of a Carnot engine operating between temperatures 127°C and 27°C is:",
    questionHi: "127°C तथा 27°C तापमानों के बीच कार्य कर रहे कार्नो इंजन की दक्षता कितनी होगी?",
    options: [
      { id: "A", textEn: "25%", textHi: "25%" },
      { id: "B", textEn: "50%", textHi: "50%" },
      { id: "C", textEn: "75%", textHi: "75%" },
      { id: "D", textEn: "20%", textHi: "20%" }
    ],
    correctAnswer: "A",
    explanation: "T1 = 127 + 273 = 400 K; T2 = 27 + 273 = 300 K. η = 1 - (T2/T1) = 1 - (300/400) = 0.25 = 25%."
  },
  {
    id: 9,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In simple harmonic motion (SHM), the phase difference between velocity and acceleration is:",
    questionHi: "सरल आवर्त गति (SHM) में वेग और त्वरण के बीच कलान्तर कितना होता है?",
    options: [
      { id: "A", textEn: "0", textHi: "0" },
      { id: "B", textEn: "π/2 radians", textHi: "π/2 रेडियन" },
      { id: "C", textEn: "π radians", textHi: "π रेडियन" },
      { id: "D", textEn: "2π radians", textHi: "2π रेडियन" }
    ],
    correctAnswer: "B",
    explanation: "x = A sin(ωt), v = Aω cos(ωt) = Aω sin(ωt + π/2), a = -Aω^2 sin(ωt) = Aω^2 sin(ωt + π). Phase difference between v and a is π - π/2 = π/2."
  },
  {
    id: 10,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Electric potential at any point on the equatorial line of an electric dipole is:",
    questionHi: "किसी विद्युत द्विध्रुव की निरक्षीय रेखा पर स्थित किसी बिंदु पर विद्युत विभव कितना होता है?",
    options: [
      { id: "A", textEn: "Maximum", textHi: "अधिकतम" },
      { id: "B", textEn: "Zero", textHi: "शून्य" },
      { id: "C", textEn: "Infinite", textHi: "अनंत" },
      { id: "D", textEn: "k p / r^2", textHi: "k p / r^2" }
    ],
    correctAnswer: "B",
    explanation: "V = (1/4πε0) [q/d - q/d] = 0, as every point on the equatorial line is equidistant from both +q and -q charges."
  },
  {
    id: 11,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "When a dielectric slab of constant K is inserted completely between the plates of an isolated charged capacitor, its capacitance:",
    questionHi: "जब किसी विलगित आवेशित संधारित्र की प्लेटों के बीच K परावैद्युतांक की पट्टिका रखी जाती है, तो धारिता:",
    options: [
      { id: "A", textEn: "Decreases K times", textHi: "K गुना घटती है" },
      { id: "B", textEn: "Increases K times", textHi: "K गुना बढ़ती है" },
      { id: "C", textEn: "Remains unchanged", textHi: "अपरिवर्तित रहती है" },
      { id: "D", textEn: "Becomes zero", textHi: "शून्य हो जाती है" }
    ],
    correctAnswer: "B",
    explanation: "Capacitance C = K·C0. It increases by a factor of K."
  },
  {
    id: 12,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Kirchhoff's first law (junction rule) ΣI = 0 is a consequence of conservation of:",
    questionHi: "किरचॉफ का प्रथम नियम (संधि नियम) ΣI = 0 किसके संरक्षण पर आधारित है?",
    options: [
      { id: "A", textEn: "Energy", textHi: "ऊर्जा" },
      { id: "B", textEn: "Charge", textHi: "आवेश" },
      { id: "C", textEn: "Momentum", textHi: "संवेग" },
      { id: "D", textEn: "Angular momentum", textHi: "कोणीय संवेग" }
    ],
    correctAnswer: "B",
    explanation: "Electric charge cannot accumulate at any junction node in an electric circuit; total incoming current equals outgoing current."
  },
  {
    id: 13,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Magnetic field at the center of a circular coil of radius R carrying current I is given by:",
    questionHi: "त्रिज्या R तथा धारा I वाली वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र का मान होता है:",
    options: [
      { id: "A", textEn: "μ0 I / (2R)", textHi: "μ0 I / (2R)" },
      { id: "B", textEn: "μ0 I / (4πR)", textHi: "μ0 I / (4πR)" },
      { id: "C", textEn: "μ0 I / R", textHi: "μ0 I / R" },
      { id: "D", textEn: "2μ0 I / R", textHi: "2μ0 I / R" }
    ],
    correctAnswer: "A",
    explanation: "From Biot-Savart law, field at center B = (μ0/4π) · (2πI/R) = μ0 I / (2R)."
  },
  {
    id: 14,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Lenz's law of electromagnetic induction is in accordance with the law of conservation of:",
    questionHi: "विद्युत चुम्बकीय प्रेरण का लेन्ज का नियम किस भौतिक राशि के संरक्षण के नियम पर आधारित है?",
    options: [
      { id: "A", textEn: "Charge", textHi: "आवेश" },
      { id: "B", textEn: "Energy", textHi: "ऊर्जा" },
      { id: "C", textEn: "Momentum", textHi: "संवेग" },
      { id: "D", textEn: "Mass", textHi: "द्रव्यमान" }
    ],
    correctAnswer: "B",
    explanation: "Mechanical work done against opposing induced EMF is converted into electrical energy, satisfying energy conservation."
  },
  {
    id: 15,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In a series LCR resonant circuit, the impedance Z is:",
    questionHi: "श्रेणी LCR अनुनादी परिपथ में प्रतिबाधा (Impedance Z) का मान होता है:",
    options: [
      { id: "A", textEn: "Maximum and equal to R", textHi: "अधिकतम तथा R के बराबर" },
      { id: "B", textEn: "Minimum and equal to R", textHi: "न्यूनतम तथा R के बराबर" },
      { id: "C", textEn: "Zero", textHi: "शून्य" },
      { id: "D", textEn: "Infinity", textHi: "अनंत" }
    ],
    correctAnswer: "B",
    explanation: "At resonance XL = XC, therefore Z = √[R^2 + (XL - XC)^2] = R, which is the minimum possible impedance."
  },
  {
    id: 16,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which of the following electromagnetic waves has the highest frequency?",
    questionHi: "निम्नलिखित में से किस विद्युत चुम्बकीय तरंग की आवृत्ति सर्वाधिक होती है?",
    options: [
      { id: "A", textEn: "Radio waves", textHi: "रेडियो तरंगें" },
      { id: "B", textEn: "Microwaves", textHi: "सूक्ष्म तरंगें" },
      { id: "C", textEn: "X-rays", textHi: "एक्स-किरणें" },
      { id: "D", textEn: "Gamma rays", textHi: "गामा किरणें" }
    ],
    correctAnswer: "D",
    explanation: "Gamma rays have the shortest wavelength (< 10^-12 m) and correspondingly the highest frequency (> 10^20 Hz)."
  },
  {
    id: 17,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The power of a convex lens of focal length 25 cm in diopters is:",
    questionHi: "25 सेमी फोकस दूरी वाले उत्तल लेंस की क्षमता डायोप्टर में कितनी होगी?",
    options: [
      { id: "A", textEn: "+4 D", textHi: "+4 D" },
      { id: "B", textEn: "-4 D", textHi: "-4 D" },
      { id: "C", textEn: "+0.25 D", textHi: "+0.25 D" },
      { id: "D", textEn: "+2.5 D", textHi: "+2.5 D" }
    ],
    correctAnswer: "A",
    explanation: "P = 100 / f(cm) = 100 / 25 = +4 D."
  },
  {
    id: 18,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In Young's double-slit experiment, if the distance between slits is halved and distance to screen is doubled, the fringe width will:",
    questionHi: "यंग के द्वि-स्लिट प्रयोग में यदि स्लिटों के बीच की दूरी आधी तथा पर्दे की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई:",
    options: [
      { id: "A", textEn: "Remain unchanged", textHi: "अपरिवर्तित रहेगी" },
      { id: "B", textEn: "Become 2 times", textHi: "2 गुना हो जाएगी" },
      { id: "C", textEn: "Become 4 times", textHi: "4 गुना हो जाएगी" },
      { id: "D", textEn: "Become half", textHi: "आधी हो जाएगी" }
    ],
    correctAnswer: "C",
    explanation: "β = λD/d. New β' = λ(2D)/(d/2) = 4(λD/d) = 4β."
  },
  {
    id: 19,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The de Broglie wavelength associated with an electron accelerated through potential difference V volts is:",
    questionHi: "V वोल्ट के विभवांतर से त्वरित इलेक्ट्रॉन से संबद्ध डी-ब्रोग्ली तरंगदैर्घ्य होती है:",
    options: [
      { id: "A", textEn: "12.27 / √V Å", textHi: "12.27 / √V Å" },
      { id: "B", textEn: "1.227 / V Å", textHi: "1.227 / V Å" },
      { id: "C", textEn: "122.7 / √V Å", textHi: "122.7 / √V Å" },
      { id: "D", textEn: "0.286 / √V Å", textHi: "0.286 / √V Å" }
    ],
    correctAnswer: "A",
    explanation: "λ = h / √(2m·e·V) = 1.227 nm / √V = 12.27 Å / √V."
  },
  {
    id: 20,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The radius of the first orbit of hydrogen atom according to Bohr's theory is r0. The radius of the third orbit will be:",
    questionHi: "बोहर सिद्धांत के अनुसार हाइड्रोजन परमाणु की प्रथम कक्षा की त्रिज्या r0 है। तृतीय कक्षा की त्रिज्या क्या होगी?",
    options: [
      { id: "A", textEn: "3 r0", textHi: "3 r0" },
      { id: "B", textEn: "9 r0", textHi: "9 r0" },
      { id: "C", textEn: "6 r0", textHi: "6 r0" },
      { id: "D", textEn: "27 r0", textHi: "27 r0" }
    ],
    correctAnswer: "B",
    explanation: "Radius rn ∝ n^2 / Z. For n = 3, r3 = 3^2 · r0 = 9 r0."
  },
  {
    id: 21,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Nuclear radius R is related to mass number A as:",
    questionHi: "नाभिकीय त्रिज्या R का द्रव्यमान संख्या A के साथ क्या संबंध होता है?",
    options: [
      { id: "A", textEn: "R = R0 A^1/3", textHi: "R = R0 A^1/3" },
      { id: "B", textEn: "R = R0 A^2/3", textHi: "R = R0 A^2/3" },
      { id: "C", textEn: "R = R0 A^3", textHi: "R = R0 A^3" },
      { id: "D", textEn: "R = R0 A^-1/3", textHi: "R = R0 A^-1/3" }
    ],
    correctAnswer: "A",
    explanation: "Volume V ∝ A => (4/3)πR^3 ∝ A => R = R0 A^(1/3), where R0 ≈ 1.2 × 10^-15 m (1.2 fm)."
  },
  {
    id: 22,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In a p-type semiconductor, the majority charge carriers are:",
    questionHi: "p-प्रकार के अर्धचालक में बहुसंख्यक आवेश वाहक कौन होते हैं?",
    options: [
      { id: "A", textEn: "Electrons", textHi: "इलेक्ट्रॉन" },
      { id: "B", textEn: "Holes", textHi: "कोटर (होल)" },
      { id: "C", textEn: "Positive ions", textHi: "धनायन" },
      { id: "D", textEn: "Neutrons", textHi: "न्यूट्रॉन" }
    ],
    correctAnswer: "B",
    explanation: "Doping pure Si or Ge with trivalent impurities (B, Al, Ga) creates excess positive holes as majority carriers."
  },
  {
    id: 23,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The logic gate which gives an output of 1 only when both inputs are 0 is:",
    questionHi: "वह लॉजिक गेट जो केवल तभी आउटपुट 1 देता है जब दोनों इनपुट 0 हों, कहलाता है:",
    options: [
      { id: "A", textEn: "AND gate", textHi: "AND गेट" },
      { id: "B", textEn: "NAND gate", textHi: "NAND गेट" },
      { id: "C", textEn: "NOR gate", textHi: "NOR गेट" },
      { id: "D", textEn: "OR gate", textHi: "OR गेट" }
    ],
    correctAnswer: "C",
    explanation: "NOR gate gives Y = NOT(A OR B). When A = 0 and B = 0, Y = NOT(0) = 1. For any other input Y = 0."
  },
  {
    id: 24,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A body of mass 2 kg moving at 10 m/s collides with a stationary body of mass 3 kg and sticks to it. The common velocity after collision is:",
    questionHi: "10 मी/से से गतिमान 2 किग्रा का पिण्ड स्थिर 3 किग्रा के पिण्ड से टकराकर चिपक जाता है। संघट्ट के बाद संयुक्त वेग होगा:",
    options: [
      { id: "A", textEn: "4 m/s", textHi: "4 मी/से" },
      { id: "B", textEn: "5 m/s", textHi: "5 मी/से" },
      { id: "C", textEn: "2 m/s", textHi: "2 मी/से" },
      { id: "D", textEn: "6 m/s", textHi: "6 मी/से" }
    ],
    correctAnswer: "A",
    explanation: "Conservation of momentum: m1 u1 + m2 u2 = (m1 + m2) v => 2(10) + 3(0) = (2 + 3) v => 20 = 5v => v = 4 m/s."
  },
  {
    id: 25,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The ratio of root-mean-square speed of hydrogen molecules to oxygen molecules at the same temperature is:",
    questionHi: "समान तापमान पर हाइड्रोजन और ऑक्सीजन अणुओं की वर्ग माध्य मूल चाल (v_rms) का अनुपात क्या होगा?",
    options: [
      { id: "A", textEn: "1 : 4", textHi: "1 : 4" },
      { id: "B", textEn: "4 : 1", textHi: "4 : 1" },
      { id: "C", textEn: "1 : 16", textHi: "1 : 16" },
      { id: "D", textEn: "16 : 1", textHi: "16 : 1" }
    ],
    correctAnswer: "B",
    explanation: "v_rms = √(3RT/M). Ratio v_H2 / v_O2 = √(M_O2 / M_H2) = √(32 / 2) = √16 = 4 : 1."
  },
  {
    id: 26,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A wire of resistance R is stretched uniformly to twice its original length. Its new resistance will be:",
    questionHi: "प्रतिरोध R वाले एक तार को खींचकर उसकी मूल लम्बाई का दोगुना कर दिया जाता है। इसका नया प्रतिरोध होगा:",
    options: [
      { id: "A", textEn: "2R", textHi: "2R" },
      { id: "B", textEn: "4R", textHi: "4R" },
      { id: "C", textEn: "R/2", textHi: "R/2" },
      { id: "D", textEn: "R/4", textHi: "R/4" }
    ],
    correctAnswer: "B",
    explanation: "Volume V = A·L remains constant. When L' = 2L, A' = A/2. New R' = ρ·L'/A' = ρ(2L)/(A/2) = 4(ρL/A) = 4R."
  },
  {
    id: 27,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The magnetic susceptibility of a diamagnetic substance is:",
    questionHi: "प्रतिचुंबकीय पदार्थ (Diamagnetic substance) की चुंबकीय प्रवृत्ति (χ) होती है:",
    options: [
      { id: "A", textEn: "Small and positive", textHi: "अल्प एवं धनात्मक" },
      { id: "B", textEn: "Small and negative", textHi: "अल्प एवं ऋणात्मक" },
      { id: "C", textEn: "Large and positive", textHi: "अत्यधिक एवं धनात्मक" },
      { id: "D", textEn: "Zero", textHi: "शून्य" }
    ],
    correctAnswer: "B",
    explanation: "Diamagnetic materials have small negative magnetic susceptibility (-1 < χ < 0) and are independent of temperature."
  },
  {
    id: 28,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A transformer works on the principle of:",
    questionHi: "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है?",
    options: [
      { id: "A", textEn: "Self induction", textHi: "स्व-प्रेरण" },
      { id: "B", textEn: "Mutual induction", textHi: "अन्योन्य प्रेरण" },
      { id: "C", textEn: "Ampere's law", textHi: "एम्पीयर का नियम" },
      { id: "D", textEn: "Coulomb's law", textHi: "कूलॉम का नियम" }
    ],
    correctAnswer: "B",
    explanation: "A transformer operates on the principle of mutual induction between primary and secondary coils sharing a common magnetic core."
  },
  {
    id: 29,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which phenomenon proves the transverse nature of light waves?",
    questionHi: "कौन सी परिघटना प्रकाश तरंगों की अनुप्रस्थ प्रकृति को सिद्ध करती है?",
    options: [
      { id: "A", textEn: "Interference", textHi: "व्यतिकरण" },
      { id: "B", textEn: "Diffraction", textHi: "विवर्तन" },
      { id: "C", textEn: "Polarization", textHi: "ध्रुवण (Polarization)" },
      { id: "D", textEn: "Refraction", textHi: "अपवर्तन" }
    ],
    correctAnswer: "C",
    explanation: "Longitudinal waves cannot be polarized. Only transverse waves exhibit polarization, proving light is transverse."
  },
  {
    id: 30,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The photoelectric work function of a metal is 4.0 eV. The threshold frequency for emission is approximately:",
    questionHi: "किसी धातु का प्रकाश विद्युत कार्यफलन 4.0 eV है। इसके देहली आवृत्ति (Threshold frequency) का मान लगभग कितना होगा?",
    options: [
      { id: "A", textEn: "9.66 × 10^14 Hz", textHi: "9.66 × 10^14 Hz" },
      { id: "B", textEn: "4.83 × 10^14 Hz", textHi: "4.83 × 10^14 Hz" },
      { id: "C", textEn: "2.41 × 10^14 Hz", textHi: "2.41 × 10^14 Hz" },
      { id: "D", textEn: "1.20 × 10^15 Hz", textHi: "1.20 × 10^15 Hz" }
    ],
    correctAnswer: "A",
    explanation: "ν0 = W0 / h = (4.0 × 1.6 × 10^-19 J) / (6.63 × 10^-34 J·s) ≈ 9.66 × 10^14 Hz."
  },
  {
    id: 31,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The half-life of a radioactive substance is 20 days. The time required for 75% of it to decay is:",
    questionHi: "एक रेडियोधर्मी पदार्थ की अर्ध-आयु 20 दिन है। इसके 75% क्षय होने में कितना समय लगेगा?",
    options: [
      { id: "A", textEn: "20 days", textHi: "20 दिन" },
      { id: "B", textEn: "30 days", textHi: "30 दिन" },
      { id: "C", textEn: "40 days", textHi: "40 दिन" },
      { id: "D", textEn: "60 days", textHi: "60 दिन" }
    ],
    correctAnswer: "C",
    explanation: "75% decay means 25% (1/4) remains. (1/2)^n = 1/4 => n = 2 half-lives. Total time = 2 × 20 = 40 days."
  },
  {
    id: 32,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A force F = (2i + 3j - k) N produces a displacement s = (i + 4j + k) m. The work done is:",
    questionHi: "एक बल F = (2i + 3j - k) N विस्थापन s = (i + 4j + k) m उत्पन्न करता है। कृत कार्य होगा:",
    options: [
      { id: "A", textEn: "13 J", textHi: "13 J" },
      { id: "B", textEn: "15 J", textHi: "15 J" },
      { id: "C", textEn: "11 J", textHi: "11 J" },
      { id: "D", textEn: "14 J", textHi: "14 J" }
    ],
    correctAnswer: "A",
    explanation: "W = F · s = (2)(1) + (3)(4) + (-1)(1) = 2 + 12 - 1 = 13 J."
  },
  {
    id: 33,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The velocity of sound in a gas is maximum in:",
    questionHi: "किस गैस में ध्वनि का वेग सर्वाधिक होता है?",
    options: [
      { id: "A", textEn: "Hydrogen (H2)", textHi: "हाइड्रोजन (H2)" },
      { id: "B", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन (O2)" },
      { id: "C", textEn: "Nitrogen (N2)", textHi: "नाइट्रोजन (N2)" },
      { id: "D", textEn: "Carbon dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड (CO2)" }
    ],
    correctAnswer: "A",
    explanation: "v = √(γRT/M). Since Hydrogen has the lowest molecular mass (M = 2), the velocity of sound in H2 is maximum."
  },
  {
    id: 34,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In an adiabatic process, the relation between pressure P and volume V for an ideal gas is:",
    questionHi: "रुद्धोष्म प्रक्रम (Adiabatic process) में आदर्श गैस के लिए दाब P तथा आयतन V में क्या संबंध है?",
    options: [
      { id: "A", textEn: "PV = constant", textHi: "PV = नियतांक" },
      { id: "B", textEn: "PV^γ = constant", textHi: "PV^γ = नियतांक" },
      { id: "C", textEn: "P^γ V = constant", textHi: "P^γ V = नियतांक" },
      { id: "D", textEn: "P/V^γ = constant", textHi: "P/V^γ = नियतांक" }
    ],
    correctAnswer: "B",
    explanation: "In a reversible adiabatic process, PV^γ = constant, where γ = Cp/Cv is the adiabatic index."
  },
  {
    id: 35,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A convex mirror of focal length f produces an image which is 1/n times the size of the object. The distance of the object from mirror is:",
    questionHi: "फोकस दूरी f वाला उत्तल दर्पण वस्तु के आकार का 1/n गुना प्रतिबिम्ब बनाता है। वस्तु की दर्पण से दूरी होगी:",
    options: [
      { id: "A", textEn: "(n - 1) f", textHi: "(n - 1) f" },
      { id: "B", textEn: "(n + 1) f", textHi: "(n + 1) f" },
      { id: "C", textEn: "(n - 1) / f", textHi: "(n - 1) / f" },
      { id: "D", textEn: "f / n", textHi: "f / n" }
    ],
    correctAnswer: "A",
    explanation: "m = f / (f - u). For convex mirror m = +1/n => 1/n = f / (f - u) => f - u = nf => -u = (n - 1)f. Distance = (n - 1)f."
  },
  {
    id: 36,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The ratio of specific heats Cp / Cv for a monoatomic ideal gas is:",
    questionHi: "एकपरमाणुक आदर्श गैस के लिए विशिष्ट ऊष्माओं का अनुपात (Cp / Cv) कितना होता है?",
    options: [
      { id: "A", textEn: "1.33 (4/3)", textHi: "1.33 (4/3)" },
      { id: "B", textEn: "1.40 (7/5)", textHi: "1.40 (7/5)" },
      { id: "C", textEn: "1.67 (5/3)", textHi: "1.67 (5/3)" },
      { id: "D", textEn: "1.25", textHi: "1.25" }
    ],
    correctAnswer: "C",
    explanation: "For a monoatomic gas degrees of freedom f = 3. Cv = (3/2)R, Cp = (5/2)R. γ = Cp/Cv = 5/3 ≈ 1.67."
  },
  {
    id: 37,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A charge q is placed at the center of a cube of side a. The electric flux passing through each face of the cube is:",
    questionHi: "भुजा a वाले एक घन के केंद्र पर आवेश q रखा है। घन के प्रत्येक फलक से गुजरने वाला विद्युत फ्लक्स होगा:",
    options: [
      { id: "A", textEn: "q / ε0", textHi: "q / ε0" },
      { id: "B", textEn: "q / (6 ε0)", textHi: "q / (6 ε0)" },
      { id: "C", textEn: "q / (4 ε0)", textHi: "q / (4 ε0)" },
      { id: "D", textEn: "6q / ε0", textHi: "6q / ε0" }
    ],
    correctAnswer: "B",
    explanation: "By Gauss's law, total flux through the cube is q/ε0. Since a cube has 6 symmetrical faces, flux through each face = q / (6ε0)."
  },
  {
    id: 38,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "When a light wave travels from air into glass, which of the following properties remains constant?",
    questionHi: "जब प्रकाश तरंग वायु से काँच में प्रवेश करती है, तो निम्नलिखित में से कौन-सा गुण अपरिवर्तित रहता है?",
    options: [
      { id: "A", textEn: "Wavelength", textHi: "तरंगदैर्घ्य" },
      { id: "B", textEn: "Velocity", textHi: "वेग" },
      { id: "C", textEn: "Frequency", textHi: "आवृत्ति" },
      { id: "D", textEn: "Amplitude", textHi: "आयाम" }
    ],
    correctAnswer: "C",
    explanation: "Frequency is determined by the source of radiation and remains constant across all media during refraction."
  },
  {
    id: 39,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "An object is placed at 20 cm in front of a concave mirror of focal length 15 cm. The image formed is:",
    questionHi: "15 सेमी फोकस दूरी वाले अवतल दर्पण के सामने 20 सेमी पर एक वस्तु रखी है। बनने वाला प्रतिबिम्ब होगा:",
    options: [
      { id: "A", textEn: "Real, inverted and magnified", textHi: "वास्तविक, उल्टा तथा आवर्धित" },
      { id: "B", textEn: "Virtual, erect and diminished", textHi: "आभासी, सीधा तथा छोटा" },
      { id: "C", textEn: "Real, inverted and diminished", textHi: "वास्तविक, उल्टा तथा छोटा" },
      { id: "D", textEn: "Virtual, erect and magnified", textHi: "आभासी, सीधा तथा आवर्धित" }
    ],
    correctAnswer: "A",
    explanation: "Object lies between F (15 cm) and C (30 cm). The image formed is beyond C, real, inverted and magnified."
  },
  {
    id: 40,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Self-inductance of a solenoid of N turns, area A, and length l is proportional to:",
    questionHi: "N फेरों, क्षेत्रफल A तथा लम्बाई l वाली परिनालिका का स्व-प्रेरकत्व किसके समानुपाती होता है?",
    options: [
      { id: "A", textEn: "N", textHi: "N" },
      { id: "B", textEn: "N^2", textHi: "N^2" },
      { id: "C", textEn: "1/N", textHi: "1/N" },
      { id: "D", textEn: "N^3", textHi: "N^3" }
    ],
    correctAnswer: "B",
    explanation: "L = μ0 N^2 A / l. Inductance is directly proportional to the square of number of turns (N^2)."
  },
  {
    id: 41,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The SI unit of magnetic flux is:",
    questionHi: "चुंबकीय फ्लक्स का SI मात्रक क्या है?",
    options: [
      { id: "A", textEn: "Tesla", textHi: "टेस्ला" },
      { id: "B", textEn: "Weber", textHi: "वेबर" },
      { id: "C", textEn: "Henry", textHi: "हेनरी" },
      { id: "D", textEn: "Gauss", textHi: "गॉस" }
    ],
    correctAnswer: "B",
    explanation: "Magnetic flux Φ = B·A is measured in Weber (Wb) or Tesla-meter square (T·m^2)."
  },
  {
    id: 42,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A body oscillates in simple harmonic motion with amplitude A. At what displacement from mean position is kinetic energy equal to potential energy?",
    questionHi: "एक पिण्ड आयाम A के साथ सरल आवर्त गति करता है। माध्य स्थिति से किस विस्थापन पर गतिज ऊर्जा स्थितिज ऊर्जा के बराबर होगी?",
    options: [
      { id: "A", textEn: "A / 2", textHi: "A / 2" },
      { id: "B", textEn: "A / √2", textHi: "A / √2" },
      { id: "C", textEn: "A / 4", textHi: "A / 4" },
      { id: "D", textEn: "A √3 / 2", textHi: "A √3 / 2" }
    ],
    correctAnswer: "B",
    explanation: "KE = PE => (1/2)k(A^2 - x^2) = (1/2)k x^2 => A^2 - x^2 = x^2 => 2x^2 = A^2 => x = A / √2."
  },
  {
    id: 43,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which of the following colors of light undergoes maximum deviation when passed through a triangular glass prism?",
    questionHi: "त्रिभुजाकार काँच के प्रिज्म से गुजरने पर किस रंग के प्रकाश का विचलन सर्वाधिक होता है?",
    options: [
      { id: "A", textEn: "Red", textHi: "लाल" },
      { id: "B", textEn: "Yellow", textHi: "पीला" },
      { id: "C", textEn: "Green", textHi: "हरा" },
      { id: "D", textEn: "Violet", textHi: "बैंगनी" }
    ],
    correctAnswer: "D",
    explanation: "Violet light has the shortest wavelength, highest refractive index μ in glass, and hence suffers maximum deviation δ."
  },
  {
    id: 44,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The energy of an electron in the ground state of hydrogen atom is -13.6 eV. Its kinetic energy in this state is:",
    questionHi: "हाइड्रोजन परमाणु की मूल अवस्था में इलेक्ट्रॉन की ऊर्जा -13.6 eV है। इस अवस्था में इसकी गतिज ऊर्जा कितनी होगी?",
    options: [
      { id: "A", textEn: "-13.6 eV", textHi: "-13.6 eV" },
      { id: "B", textEn: "+13.6 eV", textHi: "+13.6 eV" },
      { id: "C", textEn: "+27.2 eV", textHi: "+27.2 eV" },
      { id: "D", textEn: "-27.2 eV", textHi: "-27.2 eV" }
    ],
    correctAnswer: "B",
    explanation: "In Bohr's atomic model, Total Energy E = -KE. Hence KE = -(-13.6 eV) = +13.6 eV."
  },
  {
    id: 45,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A Zener diode is predominantly used as a:",
    questionHi: "जेनर डायोड का मुख्य रूप से किस रूप में उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Rectifier", textHi: "दिष्टकारी (Rectifier)" },
      { id: "B", textEn: "Amplifier", textHi: "प्रवर्धक (Amplifier)" },
      { id: "C", textEn: "Voltage regulator", textHi: "वोल्टेज नियामक (Voltage regulator)" },
      { id: "D", textEn: "Oscillator", textHi: "दोलक (Oscillator)" }
    ],
    correctAnswer: "C",
    explanation: "In reverse breakdown condition, voltage across a Zener diode remains constant over a wide range of currents, making it ideal as a voltage regulator."
  },

  // =========================================================================
  // 2. CHEMISTRY (Q46 to Q90) — 45 Questions (180 Marks)
  // =========================================================================
  {
    id: 46,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The number of radial nodes for a 3p orbital is:",
    questionHi: "3p कक्षक के लिए त्रिज्य नोडों (Radial nodes) की संख्या क्या है?",
    options: [
      { id: "A", textEn: "0", textHi: "0" },
      { id: "B", textEn: "1", textHi: "1" },
      { id: "C", textEn: "2", textHi: "2" },
      { id: "D", textEn: "3", textHi: "3" }
    ],
    correctAnswer: "B",
    explanation: "Number of radial nodes = n - l - 1. For 3p, n = 3, l = 1. Nodes = 3 - 1 - 1 = 1."
  },
  {
    id: 47,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following molecules possesses a zero net dipole moment?",
    questionHi: "निम्नलिखित में से किस अणु का परिणामी द्विध्रुव आघूर्ण शून्य होता है?",
    options: [
      { id: "A", textEn: "H2O", textHi: "H2O" },
      { id: "B", textEn: "NH3", textHi: "NH3" },
      { id: "C", textEn: "BF3", textHi: "BF3" },
      { id: "D", textEn: "SO2", textHi: "SO2" }
    ],
    correctAnswer: "C",
    explanation: "BF3 has a symmetrical trigonal planar geometry (120° bond angle). The vector sum of the three polar B-F bonds cancels to zero."
  },
  {
    id: 48,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "According to VSEPR theory, the molecular geometry of SF6 is:",
    questionHi: "VSEPR सिद्धांत के अनुसार SF6 अणु की ज्यामिति कैसी होती है?",
    options: [
      { id: "A", textEn: "Octahedral", textHi: "अष्टफलकीय (Octahedral)" },
      { id: "B", textEn: "Trigonal bipyramidal", textHi: "त्रिकोणीय द्विपिरामिडीय" },
      { id: "C", textEn: "Tetrahedral", textHi: "चतुष्फलकीय" },
      { id: "D", textEn: "Square planar", textHi: "वर्ग समतलीय" }
    ],
    correctAnswer: "A",
    explanation: "Sulfur in SF6 has sp3d2 hybridization with 6 bond pairs and 0 lone pairs, giving a regular octahedral geometry."
  },
  {
    id: 49,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which element has the highest negative electron gain enthalpy in the halogen family?",
    questionHi: "हैलोजन परिवार में किस तत्व की इलेक्ट्रॉन लब्धि एन्थैल्पी सर्वाधिक ऋणात्मक होती है?",
    options: [
      { id: "A", textEn: "Fluorine (F)", textHi: "फ्लोरीन (F)" },
      { id: "B", textEn: "Chlorine (Cl)", textHi: "क्लोरीन (Cl)" },
      { id: "C", textEn: "Bromine (Br)", textHi: "ब्रोमीन (Br)" },
      { id: "D", textEn: "Iodine (I)", textHi: "आयोडीन (I)" }
    ],
    correctAnswer: "B",
    explanation: "Chlorine has higher negative electron gain enthalpy than Fluorine because F has a very small 2p orbital causing strong inter-electronic repulsion."
  },
  {
    id: 50,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The oxidation state of Chromium in Cr2O7^2- (dichromate ion) is:",
    questionHi: "डाइक्रोमेट आयन (Cr2O7^2-) में क्रोमियम की ऑक्सीकरण अवस्था क्या है?",
    options: [
      { id: "A", textEn: "+3", textHi: "+3" },
      { id: "B", textEn: "+6", textHi: "+6" },
      { id: "C", textEn: "+4", textHi: "+4" },
      { id: "D", textEn: "+7", textHi: "+7" }
    ],
    correctAnswer: "B",
    explanation: "2x + 7(-2) = -2 => 2x - 14 = -2 => 2x = 12 => x = +6."
  },
  {
    id: 51,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "For an endothermic reaction to be spontaneous at all temperatures, the condition is:",
    questionHi: "किसी ऊष्माशोषी (Endothermic) अभिक्रिया के सभी तापमानों पर स्वतःप्रवर्तित होने की शर्त क्या है?",
    options: [
      { id: "A", textEn: "ΔH > 0 and ΔS > 0 with high T", textHi: "ΔH > 0 तथा ΔS > 0 उच्च ताप पर" },
      { id: "B", textEn: "ΔH < 0 and ΔS > 0", textHi: "ΔH < 0 तथा ΔS > 0" },
      { id: "C", textEn: "ΔH > 0 and ΔS < 0", textHi: "ΔH > 0 तथा ΔS < 0" },
      { id: "D", textEn: "Never spontaneous", textHi: "कभी स्वतःप्रवर्तित नहीं" }
    ],
    correctAnswer: "A",
    explanation: "ΔG = ΔH - TΔS. If ΔH > 0, spontaneity (ΔG < 0) requires TΔS > ΔH, which occurs at sufficiently high temperatures when ΔS > 0."
  },
  {
    id: 52,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The conjugate acid of HSO4^- ion is:",
    questionHi: "HSO4^- आयन का संयुग्मी अम्ल (Conjugate acid) क्या है?",
    options: [
      { id: "A", textEn: "SO4^2-", textHi: "SO4^2-" },
      { id: "B", textEn: "H2SO4", textHi: "H2SO4" },
      { id: "C", textEn: "H3SO4^+", textHi: "H3SO4^+" },
      { id: "D", textEn: "HSO3^-", textHi: "HSO3^-" }
    ],
    correctAnswer: "B",
    explanation: "Conjugate acid is formed by adding one proton (H+) to the base: HSO4^- + H+ -> H2SO4."
  },
  {
    id: 53,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The half-life period of a first-order reaction is independent of:",
    questionHi: "प्रथम कोटि की अभिक्रिया की अर्ध-आयु (t1/2) किस पर निर्भर नहीं करती?",
    options: [
      { id: "A", textEn: "Rate constant k", textHi: "वेग स्थिरांक k" },
      { id: "B", textEn: "Initial concentration of reactant", textHi: "अभिकारक की प्रारंभिक सांद्रता" },
      { id: "C", textEn: "Temperature", textHi: "तापमान" },
      { id: "D", textEn: "Catalyst", textHi: "उत्प्रेरक" }
    ],
    correctAnswer: "B",
    explanation: "For first order reaction t1/2 = 0.693 / k. It does not depend on initial concentration [A]0."
  },
  {
    id: 54,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following compounds exhibits optical isomerism (enantiomerism)?",
    questionHi: "निम्नलिखित में से कौन-सा यौगिक प्रकाशिक समावयवता (Optical isomerism) प्रदर्शित करता है?",
    options: [
      { id: "A", textEn: "Lactic acid [CH3-CH(OH)-COOH]", textHi: "लैक्टिक अम्ल [CH3-CH(OH)-COOH]" },
      { id: "B", textEn: "Acetic acid", textHi: "ऐसीटिक अम्ल" },
      { id: "C", textEn: "Ethanol", textHi: "एथेनॉल" },
      { id: "D", textEn: "Acetone", textHi: "ऐसीटोन" }
    ],
    correctAnswer: "A",
    explanation: "Lactic acid has a chiral (asymmetric) carbon atom bonded to 4 distinct groups: -H, -CH3, -OH, and -COOH."
  },
  {
    id: 55,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Benzene undergoes electrophilic substitution reactions instead of addition reactions because:",
    questionHi: "बेंजीन योगात्मक अभिक्रियाओं के बजाय इलेक्ट्रॉनस्नेही प्रतिस्थापन अभिक्रियाएँ क्यों देती है?",
    options: [
      { id: "A", textEn: "It preserves aromatic resonance stabilization", textHi: "यह अपनी एरोमैटिक अनुनाद ऊर्जा को बनाए रखती है" },
      { id: "B", textEn: "It has only single bonds", textHi: "इसमें केवल एकल बंध होते हैं" },
      { id: "C", textEn: "It is an inorganic substance", textHi: "यह एक अकार्बनिक पदार्थ है" },
      { id: "D", textEn: "It has no pi electrons", textHi: "इसमें कोई पाई इलेक्ट्रॉन नहीं होते" }
    ],
    correctAnswer: "A",
    explanation: "Electrophilic substitution preserves the highly stable 6 pi-electron aromatic ring, whereas addition disrupts aromaticity."
  },
  {
    id: 56,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Lucas reagent used to distinguish between 1°, 2°, and 3° alcohols is a mixture of:",
    questionHi: "1°, 2°, तथा 3° एल्कोहॉलों में विभेद करने के लिए प्रयुक्त ल्यूकास अभिकर्मक किसका मिश्रण है?",
    options: [
      { id: "A", textEn: "Anhydrous ZnCl2 + Conc. HCl", textHi: "निर्जल ZnCl2 + सांद्र HCl" },
      { id: "B", textEn: "Anhydrous AlCl3 + HCl", textHi: "निर्जल AlCl3 + HCl" },
      { id: "C", textEn: "Conc. HNO3 + H2SO4", textHi: "सांद्र HNO3 + H2SO4" },
      { id: "D", textEn: "Pd/BaSO4 + Quinoline", textHi: "Pd/BaSO4 + क्विनोलिन" }
    ],
    correctAnswer: "A",
    explanation: "Lucas reagent is an equimolar solution of anhydrous ZnCl2 in concentrated hydrochloric acid (HCl)."
  },
  {
    id: 57,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Cannizzaro reaction is not shown by which of the following aldehydes?",
    questionHi: "निम्नलिखित में से कौन-सा एल्डिहाइड कैनिजारो अभिक्रिया प्रदर्शित नहीं करता?",
    options: [
      { id: "A", textEn: "Formaldehyde (HCHO)", textHi: "फॉर्मेल्डिहाइड (HCHO)" },
      { id: "B", textEn: "Benzaldehyde (C6H5CHO)", textHi: "बेंजैल्डिहाइड (C6H5CHO)" },
      { id: "C", textEn: "Acetaldehyde (CH3CHO)", textHi: "ऐसीटैल्डिहाइड (CH3CHO)" },
      { id: "D", textEn: "Trimethylacetaldehyde [(CH3)3CCHO]", textHi: "ट्राइमेथिलऐसीटैल्डिहाइड" }
    ],
    correctAnswer: "C",
    explanation: "Cannizzaro reaction requires aldehydes having NO alpha-hydrogen. Acetaldehyde contains three alpha-hydrogens, so it undergoes Aldol condensation instead."
  },
  {
    id: 58,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The reagent that converts an amide into a primary amine with one less carbon atom is:",
    questionHi: "एमाइड को एक कम कार्बन वाले प्राथमिक एमीन में बदलने वाली अभिक्रिया में प्रयुक्त अभिकर्मक है:",
    options: [
      { id: "A", textEn: "Br2 / KOH (Hoffmann bromamide)", textHi: "Br2 / KOH (हॉफमैन ब्रोमामाइड)" },
      { id: "B", textEn: "LiAlH4", textHi: "LiAlH4" },
      { id: "C", textEn: "PCl5", textHi: "PCl5" },
      { id: "D", textEn: "H2 / Ni", textHi: "H2 / Ni" }
    ],
    correctAnswer: "A",
    explanation: "Hoffmann bromamide degradation reaction: R-CONH2 + Br2 + 4KOH -> R-NH2 + K2CO3 + 2KBr + 2H2O."
  },
  {
    id: 59,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following carbohydrates is a non-reducing sugar?",
    questionHi: "निम्नलिखित में से कौन-सी शर्करा एक अनअपचायक (Non-reducing) शर्करा है?",
    options: [
      { id: "A", textEn: "Glucose", textHi: "ग्लूकोज" },
      { id: "B", textEn: "Fructose", textHi: "फ्रक्टोज" },
      { id: "C", textEn: "Maltose", textHi: "माल्टोज" },
      { id: "D", textEn: "Sucrose", textHi: "सुक्रोज" }
    ],
    correctAnswer: "D",
    explanation: "Sucrose is non-reducing because both anomeric carbons of glucose (C1) and fructose (C2) are involved in glycosidic linkage."
  },
  {
    id: 60,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The hybridization of Cobalt in the inner orbital complex [Co(NH3)6]^3+ is:",
    questionHi: "आंतरिक कक्षक संकुल [Co(NH3)6]^3+ में कोबाल्ट का संकरण क्या है?",
    options: [
      { id: "A", textEn: "sp3d2", textHi: "sp3d2" },
      { id: "B", textEn: "d2sp3", textHi: "d2sp3" },
      { id: "C", textEn: "dsp2", textHi: "dsp2" },
      { id: "D", textEn: "sp3", textHi: "sp3" }
    ],
    correctAnswer: "B",
    explanation: "Co3+ has 3d6. NH3 is a strong field ligand causing electron pairing, vacating two 3d orbitals, resulting in d2sp3 (diamagnetic, octahedral)."
  },
  {
    id: 61,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Lanthanoid contraction is caused by:",
    questionHi: "लैन्थेनाइड संकुचन (Lanthanoid contraction) का मुख्य कारण क्या है?",
    options: [
      { id: "A", textEn: "Imperfect shielding of 4f electrons", textHi: "4f इलेक्ट्रॉनों का दुर्बल परिरक्षण प्रभाव" },
      { id: "B", textEn: "Strong shielding of 5d electrons", textHi: "5d इलेक्ट्रॉनों का प्रबल परिरक्षण" },
      { id: "C", textEn: "Decrease in nuclear charge", textHi: "नाभिकीय आवेश में कमी" },
      { id: "D", textEn: "Increase in ionic radius", textHi: "आयनिक त्रिज्या में वृद्धि" }
    ],
    correctAnswer: "A",
    explanation: "The diffused shape of 4f orbitals results in very poor shielding effect, causing the effective nuclear charge to pull outer electrons closer."
  },
  {
    id: 62,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "A 0.1 M solution of which of the following electrolytes will show the maximum depression in freezing point?",
    questionHi: "निम्नलिखित में से किसके 0.1 M विलयन में हिमांक अवनमन (Depression in freezing point) अधिकतम होगा?",
    options: [
      { id: "A", textEn: "Glucose (C6H12O6)", textHi: "ग्लूकोज" },
      { id: "B", textEn: "NaCl", textHi: "NaCl" },
      { id: "C", textEn: "BaCl2", textHi: "BaCl2" },
      { id: "D", textEn: "Al2(SO4)3", textHi: "Al2(SO4)3" }
    ],
    correctAnswer: "D",
    explanation: "ΔTf = i·Kf·m. For Al2(SO4)3, van 't Hoff factor i = 5 (2 Al3+ + 3 SO4^2-), giving highest colligative depression."
  },
  {
    id: 63,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The standard electrode potential (E°) for standard hydrogen electrode (SHE) is arbitrarily taken as:",
    questionHi: "मानक हाइड्रोजन इलेक्ट्रोड (SHE) का मानक इलेक्ट्रोड विभव (E°) स्वेच्छा से कितना माना गया है?",
    options: [
      { id: "A", textEn: "0.00 V", textHi: "0.00 V" },
      { id: "B", textEn: "1.00 V", textHi: "1.00 V" },
      { id: "C", textEn: "-1.00 V", textHi: "-1.00 V" },
      { id: "D", textEn: "0.76 V", textHi: "0.76 V" }
    ],
    correctAnswer: "A",
    explanation: "The standard reduction potential of H+(aq) + e- -> 1/2 H2(g) is defined as exactly 0.00 V at 298 K."
  },
  {
    id: 64,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following gases exhibits the highest solubility in water at room temperature?",
    questionHi: "कमरे के तापमान पर जल में सर्वाधिक विलेय गैस कौन सी है?",
    options: [
      { id: "A", textEn: "Ammonia (NH3)", textHi: "अमोनिया (NH3)" },
      { id: "B", textEn: "Nitrogen (N2)", textHi: "नाइट्रोजन (N2)" },
      { id: "C", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन (O2)" },
      { id: "D", textEn: "Helium (He)", textHi: "हीलियम (He)" }
    ],
    correctAnswer: "A",
    explanation: "Ammonia forms strong hydrogen bonds with water molecules and ionizes to form NH4+ and OH-, making it extremely soluble."
  },
  {
    id: 65,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The IUPAC name of the compound CH3-CH(OH)-CH2-CHO is:",
    questionHi: "यौगिक CH3-CH(OH)-CH2-CHO का IUPAC नाम क्या है?",
    options: [
      { id: "A", textEn: "3-Hydroxybutanal", textHi: "3-हाइड्रॉक्सीब्यूटेनल" },
      { id: "B", textEn: "2-Hydroxybutanal", textHi: "2-हाइड्रॉक्सीब्यूटेनल" },
      { id: "C", textEn: "3-Hydroxybutanone", textHi: "3-हाइड्रॉक्सीब्यूटेनोन" },
      { id: "D", textEn: "4-Hydroxybutanal", textHi: "4-हाइड्रॉक्सीब्यूटेनल" }
    ],
    correctAnswer: "A",
    explanation: "Aldehyde (-CHO) has higher priority than alcohol (-OH). C1 is -CHO, C2 is -CH2-, C3 is -CH(OH)-, C4 is -CH3. Name: 3-hydroxybutanal."
  },
  {
    id: 66,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "In the nucleophilic substitution mechanism SN2, the reaction proceeds with:",
    questionHi: "नाभिकस्नेही प्रतिस्थापन अभिक्रिया (SN2) में क्या घटित होता है?",
    options: [
      { id: "A", textEn: "Complete inversion of configuration (Walden inversion)", textHi: "विन्यास का पूर्ण प्रतिलोमन (वाल्डेन प्रतिलोमन)" },
      { id: "B", textEn: "Retention of configuration", textHi: "विन्यास का धारण (Retention)" },
      { id: "C", textEn: "Racemization", textHi: "रेसिमीकरण (Racemization)" },
      { id: "D", textEn: "Carbocation formation", textHi: "कार्बोकेटायन का निर्माण" }
    ],
    correctAnswer: "A",
    explanation: "SN2 is a concerted single-step backside attack mechanism that leads to 100% inversion of configuration (Walden inversion)."
  },
  {
    id: 67,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Phenol on distillation with Zinc dust yields:",
    questionHi: "फीनॉल को जिंक चूर्ण के साथ आसुत करने पर क्या प्राप्त होता है?",
    options: [
      { id: "A", textEn: "Benzene", textHi: "बेंजीन" },
      { id: "B", textEn: "Toluene", textHi: "टॉलूईन" },
      { id: "C", textEn: "Benzoic acid", textHi: "बेंजोइक अम्ल" },
      { id: "D", textEn: "Cyclohexane", textHi: "साइक्लोहेक्सेन" }
    ],
    correctAnswer: "A",
    explanation: "C6H5OH + Zn (dust) -> C6H6 (Benzene) + ZnO."
  },
  {
    id: 68,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following vitamins is water-soluble?",
    questionHi: "निम्नलिखित में से कौन-सा विटामिन जल में विलेय है?",
    options: [
      { id: "A", textEn: "Vitamin A", textHi: "विटामिन A" },
      { id: "B", textEn: "Vitamin D", textHi: "विटामिन D" },
      { id: "C", textEn: "Vitamin C", textHi: "विटामिन C" },
      { id: "D", textEn: "Vitamin K", textHi: "विटामिन K" }
    ],
    correctAnswer: "C",
    explanation: "Vitamins B and C are water-soluble vitamins, while Vitamins A, D, E, and K are fat-soluble."
  },
  {
    id: 69,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The number of unpaired electrons in a gaseous Fe^2+ ion (atomic number of Fe = 26) is:",
    questionHi: "गैसीय Fe^2+ आयन (Fe का परमाणु क्रमांक = 26) में अयुग्मित इलेक्ट्रॉनों की संख्या क्या है?",
    options: [
      { id: "A", textEn: "2", textHi: "2" },
      { id: "B", textEn: "4", textHi: "4" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "0", textHi: "0" }
    ],
    correctAnswer: "B",
    explanation: "Fe (Z = 26) = [Ar] 3d6 4s2. Fe2+ = [Ar] 3d6. In 3d6, one orbital has paired electrons and 4 orbitals have 1 electron each => 4 unpaired electrons."
  },
  {
    id: 70,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following is an example of an extensive property of a thermodynamic system?",
    questionHi: "निम्नलिखित में से कौन-सा ऊष्मागतिक निकाय का विस्तीर्ण गुण (Extensive property) है?",
    options: [
      { id: "A", textEn: "Density", textHi: "घनत्व" },
      { id: "B", textEn: "Temperature", textHi: "तापमान" },
      { id: "C", textEn: "Enthalpy", textHi: "एन्थैल्पी" },
      { id: "D", textEn: "Refractive index", textHi: "अपवर्तनांक" }
    ],
    correctAnswer: "C",
    explanation: "Enthalpy (H), volume (V), and mass depend on the size/quantity of matter in the system, making them extensive properties."
  },
  {
    id: 71,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The catalyst used in Haber's process for the synthesis of ammonia is:",
    questionHi: "अमोनिया के निर्माण की हैबर विधि में किस उत्प्रेरक का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Finely divided Iron with Molybdenum promoter", textHi: "बारीक पिसा हुआ आयरन व मॉलिब्डेनम वर्धक" },
      { id: "B", textEn: "Vanadium pentoxide (V2O5)", textHi: "वैनेडियम पेंटॉक्साइड (V2O5)" },
      { id: "C", textEn: "Platinum gauge", textHi: "प्लैटिनम जाली" },
      { id: "D", textEn: "Nickel", textHi: "निकेल" }
    ],
    correctAnswer: "A",
    explanation: "N2 + 3H2 ⇌ 2NH3 is catalyzed by finely divided iron (Fe) promoted with Mo or K2O/Al2O3."
  },
  {
    id: 72,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "According to Kohlrausch's law, limiting molar conductivity of an electrolyte AxBy is given by:",
    questionHi: "कोलराउश के नियमानुसार विद्युत-अपघट्य AxBy की अनंत तनुता पर मोलर चालकता होती है:",
    options: [
      { id: "A", textEn: "x λ°(A^y+) + y λ°(B^x-)", textHi: "x λ°(A^y+) + y λ°(B^x-)" },
      { id: "B", textEn: "λ°(A^y+) + λ°(B^x-)", textHi: "λ°(A^y+) + λ°(B^x-)" },
      { id: "C", textEn: "x λ°(A^y+) - y λ°(B^x-)", textHi: "x λ°(A^y+) - y λ°(B^x-)" },
      { id: "D", textEn: "[x λ°(A^y+)] / [y λ°(B^x-)]", textHi: "[x λ°(A^y+)] / [y λ°(B^x-)]" }
    ],
    correctAnswer: "A",
    explanation: "Limiting molar conductivity is the sum of the individual contributions of ions multiplied by their stoichiometric coefficients."
  },
  {
    id: 73,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following noble gases is synthesized into maximum number of chemical compounds?",
    questionHi: "निम्नलिखित में से किस अक्रिय गैस के सर्वाधिक रासायनिक यौगिक निर्मित किए गए हैं?",
    options: [
      { id: "A", textEn: "Helium (He)", textHi: "हीलियम (He)" },
      { id: "B", textEn: "Argon (Ar)", textHi: "ऑर्गन (Ar)" },
      { id: "C", textEn: "Xenon (Xe)", textHi: "जीनॉन (Xe)" },
      { id: "D", textEn: "Neon (Ne)", textHi: "नियॉन (Ne)" }
    ],
    correctAnswer: "C",
    explanation: "Due to relatively low ionization enthalpy, Xenon reacts with highly electronegative elements (F and O) to form XeF2, XeF4, XeO3, etc."
  },
  {
    id: 74,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "A solution of sodium chloride in water is neutral (pH = 7) because:",
    questionHi: "जल में सोडियम क्लोराइड (NaCl) का विलयन उदासीन (pH = 7) होता है क्योंकि:",
    options: [
      { id: "A", textEn: "It is salt of strong acid and strong base", textHi: "यह प्रबल अम्ल तथा प्रबल क्षार का लवण है" },
      { id: "B", textEn: "It is salt of weak acid and weak base", textHi: "यह दुर्बल अम्ल तथा दुर्बल क्षार का लवण है" },
      { id: "C", textEn: "It does not dissolve in water", textHi: "यह जल में नहीं घुलता" },
      { id: "D", textEn: "It produces equal OH- and H3O+ by reaction", textHi: "यह अभिक्रिया द्वारा H+ उत्पन्न करता है" }
    ],
    correctAnswer: "A",
    explanation: "NaCl is formed from strong acid (HCl) and strong base (NaOH). Neither Na+ nor Cl- undergoes hydrolysis in water."
  },
  {
    id: 75,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following functional groups gives a silver mirror in Tollens' test?",
    questionHi: "निम्नलिखित में से कौन-सा क्रियात्मक समूह टॉलेन अभिकर्मक के साथ रजत दर्पण (Silver mirror) देता है?",
    options: [
      { id: "A", textEn: "Ketone (-CO-)", textHi: "कीटोन (-CO-)" },
      { id: "B", textEn: "Aldehyde (-CHO)", textHi: "एल्डिहाइड (-CHO)" },
      { id: "C", textEn: "Ester (-COOR)", textHi: "एस्टर (-COOR)" },
      { id: "D", textEn: "Alcohol (-OH)", textHi: "एल्कोहॉल (-OH)" }
    ],
    correctAnswer: "B",
    explanation: "Aldehydes readily reduce Tollens' reagent [Ag(NH3)2]+ to metallic silver, depositing a shiny silver mirror."
  },
  {
    id: 76,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The primary structure of a protein refers to:",
    questionHi: "प्रोटीन की प्राथमिक संरचना (Primary structure) किसे प्रदर्शित करती है?",
    options: [
      { id: "A", textEn: "Linear sequence of amino acids", textHi: "अमीनो अम्लों का रेखीय क्रम" },
      { id: "B", textEn: "Alpha-helix structure", textHi: "अल्फा-हेलिक्स संरचना" },
      { id: "C", textEn: "Beta-pleated sheet", textHi: "बीटा-प्लीटेड शीट" },
      { id: "D", textEn: "Three-dimensional folding", textHi: "त्रिविमीय वलन" }
    ],
    correctAnswer: "A",
    explanation: "The primary structure is the specific linear sequence in which amino acids are joined by peptide bonds."
  },
  {
    id: 77,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Ozone layer in the stratosphere is depleted primarily by:",
    questionHi: "समताप मंडल में ओजोन परत का क्षरण मुख्यतः किसके कारण होता है?",
    options: [
      { id: "A", textEn: "Chlorofluorocarbons (CFCs)", textHi: "क्लोरोफ्लोरोकार्बन (CFCs)" },
      { id: "B", textEn: "Carbon dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड (CO2)" },
      { id: "C", textEn: "Methane (CH4)", textHi: "मीथेन (CH4)" },
      { id: "D", textEn: "Sulfur dioxide (SO2)", textHi: "सल्फर डाइऑक्साइड (SO2)" }
    ],
    correctAnswer: "A",
    explanation: "CFCs release active chlorine radicals under UV radiation, which catalytically decompose O3 into O2."
  },
  {
    id: 78,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The bond order of N2 molecule according to Molecular Orbital Theory is:",
    questionHi: "आण्विक कक्षक सिद्धांत (MOT) के अनुसार N2 अणु का बंध क्रम (Bond order) क्या है?",
    options: [
      { id: "A", textEn: "1", textHi: "1" },
      { id: "B", textEn: "2", textHi: "2" },
      { id: "C", textEn: "3", textHi: "3" },
      { id: "D", textEn: "2.5", textHi: "2.5" }
    ],
    correctAnswer: "C",
    explanation: "N2 has 14 electrons: Nb = 10, Na = 4. Bond Order = (Nb - Na)/2 = (10 - 4)/2 = 3."
  },
  {
    id: 79,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The geometry and hybridization of central Xenon atom in XeF4 is:",
    questionHi: "XeF4 में केंद्रीय जीनॉन परमाणु का संकरण तथा ज्यामिति क्या है?",
    options: [
      { id: "A", textEn: "sp3d2, Square planar", textHi: "sp3d2, वर्ग समतलीय (Square planar)" },
      { id: "B", textEn: "sp3d, Trigonal bipyramidal", textHi: "sp3d, त्रिकोणीय द्विपिरामिडीय" },
      { id: "C", textEn: "sp3, Tetrahedral", textHi: "sp3, चतुष्फलकीय" },
      { id: "D", textEn: "d2sp3, Octahedral", textHi: "d2sp3, अष्टफलकीय" }
    ],
    correctAnswer: "A",
    explanation: "Xe has 8 valence electrons: 4 bond pairs with F + 2 lone pairs => steric number 6 (sp3d2). The shape is square planar."
  },
  {
    id: 80,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following elements has the lowest first ionization enthalpy?",
    questionHi: "निम्नलिखित तत्वों में से किसकी प्रथम आयनन एन्थैल्पी सबसे कम है?",
    options: [
      { id: "A", textEn: "Lithium (Li)", textHi: "लिथियम (Li)" },
      { id: "B", textEn: "Sodium (Na)", textHi: "सोडियम (Na)" },
      { id: "C", textEn: "Potassium (K)", textHi: "पोटैशियम (K)" },
      { id: "D", textEn: "Cesium (Cs)", textHi: "सीजियम (Cs)" }
    ],
    correctAnswer: "D",
    explanation: "Cesium has the largest atomic radius in alkali metals, so its outermost 6s electron experiences least nuclear attraction."
  },
  {
    id: 81,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "In the reaction CH3COOH + C2H5OH in presence of acid catalyst, the product formed is:",
    questionHi: "अम्लीय उत्प्रेरक की उपस्थिति में CH3COOH तथा C2H5OH की अभिक्रिया से बनने वाला उत्पाद है:",
    options: [
      { id: "A", textEn: "Ethyl acetate (CH3COOC2H5)", textHi: "एथिल एसीटेट (CH3COOC2H5)" },
      { id: "B", textEn: "Diethyl ether", textHi: "डाइएथिल ईथर" },
      { id: "C", textEn: "Acetaldehyde", textHi: "ऐसीटैल्डिहाइड" },
      { id: "D", textEn: "Acetone", textHi: "ऐसीटोन" }
    ],
    correctAnswer: "A",
    explanation: "Fischer esterification: Carboxylic acid + alcohol with H2SO4 catalyst forms an ester (ethyl ethanoate / ethyl acetate) and water."
  },
  {
    id: 82,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Permanent hardness of water is caused by chlorides and sulphates of:",
    questionHi: "जल की स्थायी कठोरता किसके क्लोराइड एवं सल्फेट लवणों के कारण होती है?",
    options: [
      { id: "A", textEn: "Sodium and Potassium", textHi: "सोडियम तथा पोटैशियम" },
      { id: "B", textEn: "Calcium and Magnesium", textHi: "कैल्शियम तथा मैग्नीशियम" },
      { id: "C", textEn: "Iron and Copper", textHi: "लोहा तथा तांबा" },
      { id: "D", textEn: "Aluminium only", textHi: "केवल एल्युमिनियम" }
    ],
    correctAnswer: "B",
    explanation: "Permanent hardness is due to soluble CaCl2, CaSO4, MgCl2, and MgSO4, which cannot be removed by boiling."
  },
  {
    id: 83,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following is an example of an addition polymer?",
    questionHi: "निम्नलिखित में से कौन-सा एक योगात्मक बहुलक (Addition polymer) है?",
    options: [
      { id: "A", textEn: "Nylon-6,6", textHi: "नायलॉन-6,6" },
      { id: "B", textEn: "Dacron (Terylene)", textHi: "डेक्रॉन (टेरीलीन)" },
      { id: "C", textEn: "Polythene", textHi: "पॉलीथीन" },
      { id: "D", textEn: "Bakelite", textHi: "बैकेलाइट" }
    ],
    correctAnswer: "C",
    explanation: "Polythene is formed by repeated addition of ethene monomers (CH2=CH2) without elimination of any small molecules."
  },
  {
    id: 84,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Electrolysis of aqueous NaCl solution using inert electrodes produces which gas at the anode?",
    questionHi: "अक्रिय इलेक्ट्रोडों का उपयोग करके जलीय NaCl के विद्युत-अपघटन से एनोड पर कौन-सी गैस मुक्त होती है?",
    options: [
      { id: "A", textEn: "Hydrogen (H2)", textHi: "हाइड्रोजन (H2)" },
      { id: "B", textEn: "Chlorine (Cl2)", textHi: "क्लोरीन (Cl2)" },
      { id: "C", textEn: "Oxygen (O2)", textHi: "ऑक्सीजन (O2)" },
      { id: "D", textEn: "Sodium vapor", textHi: "सोडियम वाष्प" }
    ],
    correctAnswer: "B",
    explanation: "At the anode, Cl- is oxidized in preference to water due to oxygen overvoltage: 2Cl- -> Cl2(g) + 2e-."
  },
  {
    id: 85,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The pH of a 10^-3 M HCl solution at 25°C is:",
    questionHi: "25°C पर 10^-3 M HCl विलयन का pH मान क्या होगा?",
    options: [
      { id: "A", textEn: "3", textHi: "3" },
      { id: "B", textEn: "11", textHi: "11" },
      { id: "C", textEn: "7", textHi: "7" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "A",
    explanation: "HCl completely dissociates: [H+] = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3."
  },
  {
    id: 86,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following compounds does NOT decolorize bromine water?",
    questionHi: "निम्नलिखित में से कौन-सा यौगिक ब्रोमीन जल को रंगहीन नहीं करता?",
    options: [
      { id: "A", textEn: "Ethane (CH3-CH3)", textHi: "एथेन (CH3-CH3)" },
      { id: "B", textEn: "Ethene (CH2=CH2)", textHi: "एथीन (CH2=CH2)" },
      { id: "C", textEn: "Ethyne (CH≡CH)", textHi: "एथाइन (CH≡CH)" },
      { id: "D", textEn: "Phenol", textHi: "फीनॉल" }
    ],
    correctAnswer: "A",
    explanation: "Ethane is a saturated alkane and lacks reactive pi bonds or activating rings, so it does not react with bromine water under normal conditions."
  },
  {
    id: 87,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "In the coordination compound K4[Fe(CN)6], the primary valency (oxidation state) of Iron is:",
    questionHi: "उपसहसंयोजक यौगिक K4[Fe(CN)6] में आयरन की प्राथमिक संयोजकता (ऑक्सीकरण अवस्था) क्या है?",
    options: [
      { id: "A", textEn: "+2", textHi: "+2" },
      { id: "B", textEn: "+3", textHi: "+3" },
      { id: "C", textEn: "+4", textHi: "+4" },
      { id: "D", textEn: "+6", textHi: "+6" }
    ],
    correctAnswer: "A",
    explanation: "4(+1) + x + 6(-1) = 0 => x - 2 = 0 => x = +2. Primary valency corresponds to oxidation number (+2)."
  },
  {
    id: 88,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following oxoacids of phosphorus is a reducing agent with one P-H bond?",
    questionHi: "फास्फोरस का कौन-सा ऑक्सोअम्ल एक P-H बंध युक्त अपचायक अम्ल है?",
    options: [
      { id: "A", textEn: "H3PO4 (Orthophosphoric acid)", textHi: "H3PO4 (ऑर्थोफास्फोरिक अम्ल)" },
      { id: "B", textEn: "H3PO3 (Orthophosphorous acid)", textHi: "H3PO3 (फास्फोरस अम्ल)" },
      { id: "C", textEn: "H3PO2 (Hypophosphorous acid)", textHi: "H3PO2 (हाइपोफास्फोरस अम्ल)" },
      { id: "D", textEn: "H4P2O7 (Pyrophosphoric acid)", textHi: "H4P2O7" }
    ],
    correctAnswer: "B",
    explanation: "H3PO3 contains one P-H bond, two P-OH bonds, and one P=O bond, giving it reducing properties."
  },
  {
    id: 89,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The unit of rate constant for a zero-order reaction is:",
    questionHi: "शून्य कोटि की अभिक्रिया के वेग स्थिरांक (k) का मात्रक क्या होता है?",
    options: [
      { id: "A", textEn: "mol L^-1 s^-1", textHi: "mol L^-1 s^-1" },
      { id: "B", textEn: "s^-1", textHi: "s^-1" },
      { id: "C", textEn: "L mol^-1 s^-1", textHi: "L mol^-1 s^-1" },
      { id: "D", textEn: "L^2 mol^-2 s^-1", textHi: "L^2 mol^-2 s^-1" }
    ],
    correctAnswer: "A",
    explanation: "Rate = k[A]^0 = k. Unit of k = Unit of rate = mol L^-1 s^-1."
  },
  {
    id: 90,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "When ethyl chloride is treated with alcoholic KOH, the product obtained is:",
    questionHi: "एथिल क्लोराइड को एल्कोहॉलीय KOH के साथ गर्म करने पर बनने वाला मुख्य उत्पाद है:",
    options: [
      { id: "A", textEn: "Ethylene (Ethene)", textHi: "एथिलीन (एथीन)" },
      { id: "B", textEn: "Ethanol", textHi: "एथेनॉल" },
      { id: "C", textEn: "Ethane", textHi: "एथेन" },
      { id: "D", textEn: "Diethyl ether", textHi: "डाइएथिल ईथर" }
    ],
    correctAnswer: "A",
    explanation: "Alcoholic KOH acts as a base and causes dehydrohalogenation (beta-elimination): CH3-CH2-Cl -> CH2=CH2 + KCl + H2O."
  },

  // =========================================================================
  // 3. BOTANY (Q91 to Q135) — 45 Questions (180 Marks)
  // =========================================================================
  {
    id: 91,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which organelle is designated as the 'kitchen of the plant cell'?",
    questionHi: "पादप कोशिका का 'रसोईघर' किस कोशिकांग को कहा जाता है?",
    options: [
      { id: "A", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया" },
      { id: "B", textEn: "Chloroplast", textHi: "हरितलवक (क्लोरोप्लास्ट)" },
      { id: "C", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "D", textEn: "Golgi apparatus", textHi: "गॉल्जीकाय" }
    ],
    correctAnswer: "B",
    explanation: "Chloroplasts contain chlorophyll and photosynthetic enzymes that synthesize organic carbohydrates from CO2 and water."
  },
  {
    id: 92,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "During light reaction of photosynthesis, photolysis of water occurs at:",
    questionHi: "प्रकाश संश्लेषण की प्रकाशिक अभिक्रिया में जल का प्रकाशिक अपघटन (Photolysis) कहाँ होता है?",
    options: [
      { id: "A", textEn: "Photosystem I (PS I)", textHi: "प्रकाशतंत्र I (PS I)" },
      { id: "B", textEn: "Photosystem II (PS II)", textHi: "प्रकाशतंत्र II (PS II)" },
      { id: "C", textEn: "Stroma matrix", textHi: "स्ट्रोमा मैट्रिक्स" },
      { id: "D", textEn: "Outer membrane", textHi: "बाह्य झिल्ली" }
    ],
    correctAnswer: "B",
    explanation: "Oxygen-evolving complex (OEC) associated with Photosystem II (P680) on the lumen side of thylakoid catalyzes 2H2O -> 4H+ + O2 + 4e-."
  },
  {
    id: 93,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The primary CO2 acceptor in C3 photosynthetic pathway (Calvin cycle) is:",
    questionHi: "C3 प्रकाश संश्लेषी पथ (केल्विन चक्र) में प्राथमिक CO2 ग्राही अणु कौन-सा है?",
    options: [
      { id: "A", textEn: "Phosphoenolpyruvate (PEP)", textHi: "फॉस्फोइनोलपायरुवेट (PEP)" },
      { id: "B", textEn: "Ribulose-1,5-bisphosphate (RuBP)", textHi: "राइबुलोस-1,5-बिसफॉस्फेट (RuBP)" },
      { id: "C", textEn: "3-Phosphoglyceric acid (PGA)", textHi: "3-फॉस्फोग्लिसरिक अम्ल" },
      { id: "D", textEn: "Oxaloacetic acid (OAA)", textHi: "ऑक्सैलोएसीटिक अम्ल" }
    ],
    correctAnswer: "B",
    explanation: "RuBP (a 5-carbon ketose sugar) is carboxylated by RuBisCO to form two molecules of 3-PGA in the C3 cycle."
  },
  {
    id: 94,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Kranz anatomy is a characteristic feature of leaves in:",
    questionHi: "क्रैंज शारीरिकी (Kranz anatomy) किन पौधों की पत्तियों की विशिष्ट पहचान है?",
    options: [
      { id: "A", textEn: "C3 plants", textHi: "C3 पौधे" },
      { id: "B", textEn: "C4 plants", textHi: "C4 पौधे (जैसे मक्का, गन्ना)" },
      { id: "C", textEn: "CAM plants", textHi: "CAM पौधे" },
      { id: "D", textEn: "Bryophytes", textHi: "ब्रायोफाइट्स" }
    ],
    correctAnswer: "B",
    explanation: "Kranz anatomy features bundle sheath cells rich in chloroplasts arranged like a wreath around vascular bundles in C4 plants (e.g. maize, sugarcane)."
  },
  {
    id: 95,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The plant growth hormone primarily responsible for apical dominance is:",
    questionHi: "शीर्ष प्रमुखता (Apical dominance) के लिए मुख्य रूप से उत्तरदायी पादप हॉर्मोन कौन-सा है?",
    options: [
      { id: "A", textEn: "Auxin (IAA)", textHi: "ऑक्सिन (IAA)" },
      { id: "B", textEn: "Gibberellin", textHi: "जिबरेलिन" },
      { id: "C", textEn: "Abscisic acid (ABA)", textHi: "एब्सिसिक अम्ल (ABA)" },
      { id: "D", textEn: "Cytokinin", textHi: "साइटोकाइनिन" }
    ],
    correctAnswer: "A",
    explanation: "Auxin synthesized at the shoot apex inhibits the growth of lateral axillary buds, maintaining apical dominance."
  },
  {
    id: 96,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The opening and closing of stomata is regulated primarily by changes in:",
    questionHi: "रंध्रों (Stomata) का खुलना और बंद होना मुख्य रूप से किसके परिवर्तन से नियंत्रित होता है?",
    options: [
      { id: "A", textEn: "Turgor pressure of guard cells", textHi: "द्वार कोशिकाओं की स्फीति दाब में परिवर्तन" },
      { id: "B", textEn: "Soil temperature", textHi: "मृदा का तापमान" },
      { id: "C", textEn: "Atmospheric pressure directly", textHi: "वायुमंडलीय दाब" },
      { id: "D", textEn: "Root pressure", textHi: "मूल दाब" }
    ],
    correctAnswer: "A",
    explanation: "Accumulation of K+ and Cl- ions causes water uptake into guard cells by osmosis, increasing turgor pressure and opening the stomata."
  },
  {
    id: 97,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Guttation in plants occurs through specialized marginal pores known as:",
    questionHi: "पौधों में बिंदुस्राव (Guttation) पत्ती के किनारों पर स्थित किन छिद्रों द्वारा होता है?",
    options: [
      { id: "A", textEn: "Lenticels", textHi: "वात-रंध्र" },
      { id: "B", textEn: "Hydathodes", textHi: "जल-रंध्र (Hydathodes)" },
      { id: "C", textEn: "Stomata", textHi: "पर्ण-रंध्र" },
      { id: "D", textEn: "Cuticle", textHi: "उपत्वचा" }
    ],
    correctAnswer: "B",
    explanation: "Hydathodes situated at vein endings of leaves exude water droplets due to root pressure when transpiration is suppressed."
  },
  {
    id: 98,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Double fertilization is a unique characteristic found exclusively in:",
    questionHi: "दोहरा निषेचन (Double fertilization) किसकी एक अनूठी एवं विशिष्ट विशेषता है?",
    options: [
      { id: "A", textEn: "Gymnosperms", textHi: "अनावृतबीजी (जिम्नोस्पर्म)" },
      { id: "B", textEn: "Angiosperms (Flowering plants)", textHi: "आवृतबीजी (एंजियोस्पर्म)" },
      { id: "C", textEn: "Pteridophytes", textHi: "टेरिडोफाइट्स" },
      { id: "D", textEn: "Bryophytes", textHi: "ब्रायोफाइट्स" }
    ],
    correctAnswer: "B",
    explanation: "One sperm fuses with egg (syngamy -> diploid zygote) and the other fuses with polar nuclei (triple fusion -> triploid primary endosperm nucleus)."
  },
  {
    id: 99,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The ploidy level of endosperm in angiosperms after double fertilization is:",
    questionHi: "आवृतबीजी पौधों में दोहरे निषेचन के पश्चात भ्रूणपोष (Endosperm) की गुणिता क्या होती है?",
    options: [
      { id: "A", textEn: "Haploid (n)", textHi: "अगुणित (n)" },
      { id: "B", textEn: "Diploid (2n)", textHi: "द्विगुणित (2n)" },
      { id: "C", textEn: "Triploid (3n)", textHi: "त्रिगुणित (3n)" },
      { id: "D", textEn: "Tetraploid (4n)", textHi: "चतुर्गुणित (4n)" }
    ],
    correctAnswer: "C",
    explanation: "Triple fusion of one haploid male gamete (n) with two haploid polar nuclei (n + n) produces a triploid (3n) endosperm."
  },
  {
    id: 100,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Pneumatophores (respiratory roots) are found in:",
    questionHi: "श्वसन मूल (Pneumatophores) किन पौधों में पाए जाते हैं?",
    options: [
      { id: "A", textEn: "Rhizophora (Mangroves)", textHi: "राइजोफोरा (मैंग्रोव पौधे)" },
      { id: "B", textEn: "Opuntia", textHi: "नागफनी" },
      { id: "C", textEn: "Banyan tree", textHi: "बरगद" },
      { id: "D", textEn: "Eichhornia", textHi: "जलकुंभी" }
    ],
    correctAnswer: "A",
    explanation: "In halophytes like Rhizophora growing in saline swampy areas, negatively geotropic roots grow upward to obtain oxygen for respiration."
  },
  {
    id: 101,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The cross between an F1 individual and its homozygous recessive parent is called a:",
    questionHi: "F1 संतति तथा उसके समयुग्मजी अप्रभावी जनक के बीच संकरण क्या कहलाता है?",
    options: [
      { id: "A", textEn: "Test cross", textHi: "परीक्षार्थ संकरण (Test cross)" },
      { id: "B", textEn: "Back cross", textHi: "संकर पूर्वज संकरण" },
      { id: "C", textEn: "Reciprocal cross", textHi: "व्युत्क्रम संकरण" },
      { id: "D", textEn: "Monohybrid cross", textHi: "एकसंकर संकरण" }
    ],
    correctAnswer: "A",
    explanation: "A test cross (F1 × recessive parent) is used to determine whether an individual showing dominant phenotype is homozygous or heterozygous."
  },
  {
    id: 102,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The typical Mendelian dihybrid phenotypic ratio in F2 generation is:",
    questionHi: "F2 पीढ़ी में विशिष्ट मेंडेलियन द्विसंकर लक्षणप्ररूपी (Phenotypic) अनुपात क्या होता है?",
    options: [
      { id: "A", textEn: "9 : 3 : 3 : 1", textHi: "9 : 3 : 3 : 1" },
      { id: "B", textEn: "3 : 1", textHi: "3 : 1" },
      { id: "C", textEn: "1 : 2 : 1", textHi: "1 : 2 : 1" },
      { id: "D", textEn: "12 : 3 : 1", textHi: "12 : 3 : 1" }
    ],
    correctAnswer: "A",
    explanation: "According to Mendel's law of independent assortment, the F2 dihybrid cross results in 9:3:3:1 phenotypic ratio."
  },
  {
    id: 103,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Crossing over during meiosis occurs during which sub-stage of Prophase I?",
    questionHi: "अर्धसूत्री विभाजन में जीन विनिमय (Crossing over) प्रोफेज I की किस उप-अवस्था में होता है?",
    options: [
      { id: "A", textEn: "Leptotene", textHi: "लेप्टोटीन" },
      { id: "B", textEn: "Zygotene", textHi: "जाइगोटीन" },
      { id: "C", textEn: "Pachytene", textHi: "पैचीटीन (Pachytene)" },
      { id: "D", textEn: "Diplotene", textHi: "डिप्लोटीन" }
    ],
    correctAnswer: "C",
    explanation: "Crossing over mediated by the enzyme recombinase occurs between non-sister chromatids of homologous chromosomes during pachytene."
  },
  {
    id: 104,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The start codon that initiates translation in both prokaryotes and eukaryotes is:",
    questionHi: "प्रोकैरियोट्स और यूकैरियोट्स दोनों में अनुवादन (Translation) प्रारंभ करने वाला प्रकूट कौन-सा है?",
    options: [
      { id: "A", textEn: "AUG (Methionine)", textHi: "AUG (मेथियोनीन)" },
      { id: "B", textEn: "UAA", textHi: "UAA" },
      { id: "C", textEn: "UGA", textHi: "UGA" },
      { id: "D", textEn: "UAG", textHi: "UAG" }
    ],
    correctAnswer: "A",
    explanation: "AUG codes for Methionine (Formyl-methionine in prokaryotes) and acts as the universal initiation codon."
  },
  {
    id: 105,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following is a stop (nonsense) codon?",
    questionHi: "निम्नलिखित में से कौन-सा एक समापन (Stop) प्रकूट है?",
    options: [
      { id: "A", textEn: "UAA, UAG, UGA", textHi: "UAA, UAG, UGA" },
      { id: "B", textEn: "AUG, GUG, UUG", textHi: "AUG, GUG, UUG" },
      { id: "C", textEn: "AAA, UUU, CCC", textHi: "AAA, UUU, CCC" },
      { id: "D", textEn: "CGA, AGC, UCG", textHi: "CGA, AGC, UCG" }
    ],
    correctAnswer: "A",
    explanation: "UAA (ochre), UAG (amber), and UGA (opal) are termination codons that do not specify any amino acid."
  },
  {
    id: 106,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The enzyme that plays a central role in unwinding the double helix during DNA replication is:",
    questionHi: "DNA प्रतिकृतिकरण के दौरान द्विकुंडली को खोलने में मुख्य भूमिका निभाने वाला एंजाइम कौन-सा है?",
    options: [
      { id: "A", textEn: "DNA Helicase", textHi: "DNA हेलिकेज" },
      { id: "B", textEn: "DNA Ligase", textHi: "DNA लाइगेज" },
      { id: "C", textEn: "RNA Polymerase", textHi: "RNA पॉलीमरेज" },
      { id: "D", textEn: "Topoisomerase", textHi: "टोपोआइसोमरेज" }
    ],
    correctAnswer: "A",
    explanation: "Helicase unwinds the double-stranded DNA by breaking hydrogen bonds between complementary base pairs at the replication fork."
  },
  {
    id: 107,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which group of plants produces seeds enclosed within an ovary (fruit)?",
    questionHi: "किस पादप समूह में बीज अंडाशय (फल) के भीतर बंद होते हैं?",
    options: [
      { id: "A", textEn: "Angiosperms", textHi: "आवृतबीजी (एंजियोस्पर्म)" },
      { id: "B", textEn: "Gymnosperms", textHi: "अनावृतबीजी (जिम्नोस्पर्म)" },
      { id: "C", textEn: "Pteridophytes", textHi: "टेरिडोफाइट्स" },
      { id: "D", textEn: "Algae", textHi: "शैवाल" }
    ],
    correctAnswer: "A",
    explanation: "Angiosperms are flowering plants whose ovules develop inside an ovary, which matures into a fruit surrounding the seeds."
  },
  {
    id: 108,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The symbiotic association between a fungus and roots of higher plants is known as:",
    questionHi: "कवक तथा उच्च पादपों की जड़ों के बीच सहजीवी संबंध को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Mycorrhiza", textHi: "माइकोराइजा (कवकमूल)" },
      { id: "B", textEn: "Lichen", textHi: "लाइकेन" },
      { id: "C", textEn: "Rhizobium nodule", textHi: "राइजोबियम ग्रंथि" },
      { id: "D", textEn: "Epiphyte", textHi: "अधिपादप" }
    ],
    correctAnswer: "A",
    explanation: "Mycorrhizae enhance mineral (especially phosphorus) and water absorption for the plant, while the plant provides carbohydrates to the fungus."
  },
  {
    id: 109,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The fruit of mango is botanically classified as a:",
    questionHi: "आम का फल वानस्पतिक रूप से किस प्रकार का फल है?",
    options: [
      { id: "A", textEn: "Berry", textHi: "सरस फल (Berry)" },
      { id: "B", textEn: "Drupe (Stone fruit)", textHi: "अष्ठिल फल (Drupe)" },
      { id: "C", textEn: "Pome", textHi: "पोम" },
      { id: "D", textEn: "Hesperidium", textHi: "हेस्पेरिडियम" }
    ],
    correctAnswer: "B",
    explanation: "Mango and coconut are drupes developing from monocarpellary superior ovaries with a hard, stony endocarp."
  },
  {
    id: 110,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "In an ecosystem, the pyramid of energy is always:",
    questionHi: "किसी पारिस्थितिक तंत्र में ऊर्जा का पिरामिड हमेशा कैसा होता है?",
    options: [
      { id: "A", textEn: "Always upright", textHi: "हमेशा सीधा (Upright)" },
      { id: "B", textEn: "Always inverted", textHi: "हमेशा उल्टा (Inverted)" },
      { id: "C", textEn: "Spindle-shaped", textHi: "तर्कुरूपी" },
      { id: "D", textEn: "Variable depending on biome", textHi: "पारिस्थितिकी तंत्र पर निर्भर" }
    ],
    correctAnswer: "A",
    explanation: "According to Lindeman's 10% law, only about 10% of energy is transferred to each successive trophic level, so energy pyramid is always upright."
  },
  {
    id: 111,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Water potential (Ψw) of pure water at standard atmospheric pressure and room temperature is:",
    questionHi: "मानक ताप एवं वायुमंडलीय दाब पर शुद्ध जल का जल विभव (Ψw) कितना होता है?",
    options: [
      { id: "A", textEn: "Zero", textHi: "शून्य" },
      { id: "B", textEn: "100", textHi: "100" },
      { id: "C", textEn: "-10", textHi: "-10" },
      { id: "D", textEn: "1.0", textHi: "1.0" }
    ],
    correctAnswer: "A",
    explanation: "Pure water has the highest potential energy, defined conventionally as zero. Any solute added lowers water potential to negative values."
  },
  {
    id: 112,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which element is an essential constituent of the chlorophyll ring structure?",
    questionHi: "पर्णहरित (Chlorophyll) की पोरफाइरिन वलय संरचना का अनिवार्य घटक कौन-सा तत्व है?",
    options: [
      { id: "A", textEn: "Magnesium (Mg)", textHi: "मैग्नीशियम (Mg)" },
      { id: "B", textEn: "Iron (Fe)", textHi: "लोहा (Fe)" },
      { id: "C", textEn: "Calcium (Ca)", textHi: "कैल्शियम (Ca)" },
      { id: "D", textEn: "Manganese (Mn)", textHi: "मैंगनीज (Mn)" }
    ],
    correctAnswer: "A",
    explanation: "Magnesium occupies the central coordination position in the tetrapyrrole porphyrin ring of chlorophyll."
  },
  {
    id: 113,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "In glycolysis, the net gain of ATP molecules per molecule of glucose under aerobic conditions is:",
    questionHi: "ग्लाइकोलिसिस में प्रति ग्लूकोज अणु शुद्ध (Net) कितने ATP अणुओं का लाभ होता है?",
    options: [
      { id: "A", textEn: "2 ATP", textHi: "2 ATP" },
      { id: "B", textEn: "4 ATP", textHi: "4 ATP" },
      { id: "C", textEn: "36 ATP", textHi: "36 ATP" },
      { id: "D", textEn: "8 ATP", textHi: "8 ATP" }
    ],
    correctAnswer: "A",
    explanation: "Direct substrate-level phosphorylation produces 4 ATP, but 2 ATP are consumed during the preparatory phase, giving a net yield of 2 ATP."
  },
  {
    id: 114,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The gaseous plant hormone responsible for fruit ripening is:",
    questionHi: "फलों को पकाने के लिए उत्तरदायी गैसीय पादप हॉर्मोन कौन-सा है?",
    options: [
      { id: "A", textEn: "Ethylene", textHi: "एथिलीन (Ethylene)" },
      { id: "B", textEn: "Auxin", textHi: "ऑक्सिन" },
      { id: "C", textEn: "Cytokinin", textHi: "साइटोकाइनिन" },
      { id: "D", textEn: "Gibberellin", textHi: "जिबरेलिन" }
    ],
    correctAnswer: "A",
    explanation: "Ethylene (C2H4) is a volatile gas that triggers respiration climacteric and accelerates ripening in climacteric fruits."
  },
  {
    id: 115,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "In a fully turgid plant cell, which relation holds true?",
    questionHi: "एक पूर्णतः स्फीत (Turgid) पादप कोशिका में कौन-सा संबंध सही है?",
    options: [
      { id: "A", textEn: "DPD = 0 (Ψw = 0)", textHi: "DPD = 0 (Ψw = 0)" },
      { id: "B", textEn: "DPD = OP", textHi: "DPD = OP" },
      { id: "C", textEn: "TP = 0", textHi: "TP = 0" },
      { id: "D", textEn: "OP = 0", textHi: "OP = 0" }
    ],
    correctAnswer: "A",
    explanation: "In a fully turgid cell, Turgor Pressure (TP) equals Osmotic Pressure (OP), so Diffusion Pressure Deficit (DPD = OP - TP) becomes zero."
  },
  {
    id: 116,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following is a non-vascular terrestrial plant?",
    questionHi: "निम्नलिखित में से कौन-सा एक संवहन-ऊतक रहित (Non-vascular) स्थलीय पौधा है?",
    options: [
      { id: "A", textEn: "Funaria (Moss)", textHi: "फ्यूनेरिया (मॉस)" },
      { id: "B", textEn: "Dryopteris (Fern)", textHi: "ड्रायोप्टेरिस (फर्न)" },
      { id: "C", textEn: "Pinus", textHi: "पाइनस" },
      { id: "D", textEn: "Cycas", textHi: "साइकस" }
    ],
    correctAnswer: "A",
    explanation: "Bryophytes (mosses like Funaria and liverworts) lack true vascular tissues (xylem and phloem)."
  },
  {
    id: 117,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Casparial strips are characteristic suberized thickenings found in the walls of:",
    questionHi: "कैस्पेरी पट्टिकाएँ (Casparian strips) किसकी कोशिकाओं की भित्तियों में पाई जाती हैं?",
    options: [
      { id: "A", textEn: "Endodermis of root", textHi: "जड़ की अंतस्त्वचा (Endodermis)" },
      { id: "B", textEn: "Epidermis of stem", textHi: "तने की बाह्यत्वचा" },
      { id: "C", textEn: "Pericycle", textHi: "परिरंभ" },
      { id: "D", textEn: "Cortex", textHi: "वल्कुट" }
    ],
    correctAnswer: "A",
    explanation: "Casparian strips containing water-impermeable suberin block apoplastic flow in root endodermis, forcing water through the symplast."
  },
  {
    id: 118,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which enzyme is directly responsible for carbon fixation in the mesophyll cells of C4 plants?",
    questionHi: "C4 पौधों की पर्णमध्योतक (Mesophyll) कोशिकाओं में CO2 स्थिरीकरण के लिए कौन-सा एंजाइम उत्तरदायी है?",
    options: [
      { id: "A", textEn: "PEP carboxylase (PEPCase)", textHi: "PEP कार्बोक्सिलेज" },
      { id: "B", textEn: "RuBisCO", textHi: "रूबिस्को (RuBisCO)" },
      { id: "C", textEn: "Pyruvate dehydrogenase", textHi: "पायरुवेट डिहाइड्रोजिनेज" },
      { id: "D", textEn: "Carbonic anhydrase", textHi: "कार्बोनिक एनहाइड्रेज" }
    ],
    correctAnswer: "A",
    explanation: "PEPCase fixes atmospheric HCO3- onto PEP (3C) in mesophyll cells to form 4C oxaloacetic acid (OAA)."
  },
  {
    id: 119,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Okazaki fragments synthesized during DNA replication on lagging strand are joined by:",
    questionHi: "DNA प्रतिकृतिकरण में पश्चगामी रज्जुक पर संश्लेषित ओकाजाकी खंडों को किस एंजाइम द्वारा जोड़ा जाता है?",
    options: [
      { id: "A", textEn: "DNA Ligase", textHi: "DNA लाइगेज" },
      { id: "B", textEn: "DNA Polymerase I", textHi: "DNA पॉलीमरेज I" },
      { id: "C", textEn: "Primase", textHi: "प्राइमेज" },
      { id: "D", textEn: "Helicase", textHi: "हेलिकेज" }
    ],
    correctAnswer: "A",
    explanation: "DNA ligase forms phosphodiester bonds between adjacent 3'-OH and 5'-phosphate ends to seal Okazaki fragments."
  },
  {
    id: 120,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The genetic disorder Down's syndrome is caused by trisomy of chromosome number:",
    questionHi: "डाउन सिंड्रोम आनुवंशिक विकार किस गुणसूत्र की ट्राइसॉमी (त्रिसूत्रता) के कारण होता है?",
    options: [
      { id: "A", textEn: "Chromosome 21", textHi: "गुणसूत्र 21" },
      { id: "B", textEn: "Chromosome 18", textHi: "गुणसूत्र 18" },
      { id: "C", textEn: "Chromosome 13", textHi: "गुणसूत्र 13" },
      { id: "D", textEn: "X Chromosome", textHi: "X गुणसूत्र" }
    ],
    correctAnswer: "A",
    explanation: "Down's syndrome is an autosomal aneuploidy caused by non-disjunction resulting in an extra copy of chromosome 21 (2n + 1 = 47)."
  },
  {
    id: 121,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following is considered an ex-situ conservation method for biodiversity?",
    questionHi: "निम्नलिखित में से किसे जैव विविधता की बाह्य-स्थाने (Ex-situ) संरक्षण विधि माना जाता है?",
    options: [
      { id: "A", textEn: "Botanical gardens and Seed banks", textHi: "वानस्पतिक उद्यान तथा बीज बैंक" },
      { id: "B", textEn: "National parks", textHi: "राष्ट्रीय उद्यान" },
      { id: "C", textEn: "Wildlife sanctuaries", textHi: "वन्यजीव अभयारण्य" },
      { id: "D", textEn: "Biosphere reserves", textHi: "जैवमंडल आरक्षित क्षेत्र" }
    ],
    correctAnswer: "A",
    explanation: "Ex-situ conservation involves conserving threatened plant species outside their natural habitats in controlled facilities like botanical gardens and cryopreserved seed banks."
  },
  {
    id: 122,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "During aerobic respiration, maximum ATP molecules are generated through:",
    questionHi: "वायवीय श्वसन में सर्वाधिक ATP अणुओं का निर्माण किस प्रक्रम के माध्यम से होता है?",
    options: [
      { id: "A", textEn: "Oxidative phosphorylation in ETS", textHi: "इलेक्ट्रॉन परिवहन तंत्र में ऑक्सीकारी फॉस्फोरीलीकरण" },
      { id: "B", textEn: "Glycolysis directly", textHi: "सीधे ग्लाइकोलिसिस द्वारा" },
      { id: "C", textEn: "Krebs cycle substrate phosphorylation", textHi: "क्रेब्स चक्र" },
      { id: "D", textEn: "Fermentation", textHi: "किण्वन" }
    ],
    correctAnswer: "A",
    explanation: "Electron transport chain (ETC) across the inner mitochondrial membrane drives ATP synthase via proton gradient, yielding the majority of ATP."
  },
  {
    id: 123,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The 70S ribosomes are characteristic of:",
    questionHi: "70S राइबोसोम किसकी विशिष्ट पहचान हैं?",
    options: [
      { id: "A", textEn: "Prokaryotes, chloroplasts and mitochondria", textHi: "प्रोकैरियोट्स, हरितलवक तथा माइटोकॉन्ड्रिया" },
      { id: "B", textEn: "Eukaryotic cytoplasm only", textHi: "केवल यूकैरियोटिक कोशिकाद्रव्य" },
      { id: "C", textEn: "Fungi only", textHi: "केवल कवक" },
      { id: "D", textEn: "Viruses", textHi: "विषाणु" }
    ],
    correctAnswer: "A",
    explanation: "70S ribosomes (composed of 50S and 30S subunits) exist in bacterial cells as well as semi-autonomous organelles of endosymbiotic origin."
  },
  {
    id: 124,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following is an example of an insect-pollinated (entomophilous) flower adaptation?",
    questionHi: "निम्नलिखित में से कौन-सा कीट-परागित पुष्प का विशिष्ट अनुकूलन है?",
    options: [
      { id: "A", textEn: "Brightly colored petals with nectar and fragrant scent", textHi: "चमकीले दल, मकरंद तथा सुगंध" },
      { id: "B", textEn: "Large feathery stigmas and non-sticky pollen", textHi: "पंखदार वर्तिकाग्र तथा हल्के परागकण" },
      { id: "C", textEn: "Complete absence of petals", textHi: "दलों की अनुपस्थिति" },
      { id: "D", textEn: "Submerged mucilage-covered pollen", textHi: "जलमग्न श्लेष्मी परागकण" }
    ],
    correctAnswer: "A",
    explanation: "Entomophilous flowers are conspicuous, showy, fragrant, and secrete nectar to attract insect pollinators."
  },
  {
    id: 125,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "In biological classification, which category comes immediately between Order and Genus?",
    questionHi: "जैविक वर्गीकरण में गण (Order) तथा वंश (Genus) के मध्य कौन-सा संवर्ग आता है?",
    options: [
      { id: "A", textEn: "Family", textHi: "कुल (Family)" },
      { id: "B", textEn: "Class", textHi: "वर्ग (Class)" },
      { id: "C", textEn: "Phylum", textHi: "संघ" },
      { id: "D", textEn: "Species", textHi: "जाति" }
    ],
    correctAnswer: "A",
    explanation: "Taxonomic hierarchy: Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species."
  },
  {
    id: 126,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Collenchyma tissue differs from parenchyma in possessing cell wall thickenings of:",
    questionHi: "स्थूलकोण ऊतक (Collenchyma) पैरेन्काइमा से किस पदार्थ के स्थूलन के कारण भिन्न होता है?",
    options: [
      { id: "A", textEn: "Cellulose, hemicellulose and pectin at corners", textHi: "कोनों पर सेल्युलोज, हेमीसेल्युलोज व पेक्टिन" },
      { id: "B", textEn: "Lignin uniformly", textHi: "लिग्निन" },
      { id: "C", textEn: "Suberin only", textHi: "सुबेरिन" },
      { id: "D", textEn: "Cutin", textHi: "क्यूटिन" }
    ],
    correctAnswer: "A",
    explanation: "Collenchyma cells provide mechanical flexibility to young stems and petioles due to localized pectocellulosic corner thickenings."
  },
  {
    id: 127,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "A flower in which floral parts are inserted below the ovary (superior ovary) is termed:",
    questionHi: "वह पुष्प जिसमें अन्य पुष्पीय भाग अंडाशय के नीचे से निकलते हैं (ऊर्ध्ववर्ती अंडाशय), कहलाता है:",
    options: [
      { id: "A", textEn: "Hypogynous", textHi: "जायांगधर (Hypogynous)" },
      { id: "B", textEn: "Epigynous", textHi: "जायांगोपरिक (Epigynous)" },
      { id: "C", textEn: "Perigynous", textHi: "परिजायांगी (Perigynous)" },
      { id: "D", textEn: "Zygomorphic", textHi: "एकव्याससममित" }
    ],
    correctAnswer: "A",
    explanation: "In hypogynous flowers (e.g. mustard, brinjal, China rose), the gynoecium occupies the highest position on thalamus and the ovary is superior."
  },
  {
    id: 128,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The respiratory quotient (RQ) for carbohydrates during complete aerobic respiration is:",
    questionHi: "कार्बोहाइड्रेट के पूर्ण वायवीय श्वसन में श्वसन गुणांक (RQ) का मान क्या होता है?",
    options: [
      { id: "A", textEn: "1.0", textHi: "1.0" },
      { id: "B", textEn: "0.7", textHi: "0.7" },
      { id: "C", textEn: "0.9", textHi: "0.9" },
      { id: "D", textEn: "Infinity", textHi: "अनंत" }
    ],
    correctAnswer: "A",
    explanation: "C6H12O6 + 6O2 -> 6CO2 + 6H2O. RQ = Volume of CO2 evolved / Volume of O2 consumed = 6/6 = 1.0."
  },
  {
    id: 129,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The phenomenon of seeds germinating while still attached to the parent plant is known as:",
    questionHi: "जनक पौधे पर लगे रहने के दौरान ही बीजों के अंकुरित होने की परिघटना क्या कहलाती है?",
    options: [
      { id: "A", textEn: "Vivipary", textHi: "जरायुजता (Vivipary)" },
      { id: "B", textEn: "Parthenocarpy", textHi: "अनिषेकफलन" },
      { id: "C", textEn: "Apomixis", textHi: "असंगजनन" },
      { id: "D", textEn: "Vernalization", textHi: "वसंतीकरण" }
    ],
    correctAnswer: "A",
    explanation: "Vivipary is seen in mangrove plants (e.g. Rhizophora), enabling establishment in saline and poorly aerated muddy soil."
  },
  {
    id: 130,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The enzyme nitrogenase which converts atmospheric N2 to ammonia is extremely sensitive to:",
    questionHi: "नाइट्रोजिनेज एंजाइम जो वायुमंडलीय N2 को अमोनिया में बदलता है, किसके प्रति अत्यधिक संवेदनशील होता है?",
    options: [
      { id: "A", textEn: "Molecular Oxygen (O2)", textHi: "आण्विक ऑक्सीजन (O2)" },
      { id: "B", textEn: "Carbon dioxide (CO2)", textHi: "कार्बन डाइऑक्साइड" },
      { id: "C", textEn: "Nitrogen gas", textHi: "नाइट्रोजन गैस" },
      { id: "D", textEn: "Water", textHi: "जल" }
    ],
    correctAnswer: "A",
    explanation: "Nitrogenase is irreversibly inactivated by oxygen; leghemoglobin acts as an oxygen scavenger in root nodules to protect it."
  },
  {
    id: 131,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The process of development of fruit without fertilization is called:",
    questionHi: "बिना निषेचन के फल के विकास की प्रक्रिया को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Parthenocarpy", textHi: "अनिषेकफलन (Parthenocarpy)" },
      { id: "B", textEn: "Parthenogenesis", textHi: "अनिषेकजनन" },
      { id: "C", textEn: "Polyembryony", textHi: "बहुभ्रूणता" },
      { id: "D", textEn: "Apomixis", textHi: "असंगजनन" }
    ],
    correctAnswer: "A",
    explanation: "Parthenocarpic fruits (e.g. banana) develop without fertilization and are seedless."
  },
  {
    id: 132,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following is a free-living aerobic nitrogen-fixing bacterium in soil?",
    questionHi: "मृदा में स्वतंत्र रूप से रहने वाला वायवीय नाइट्रोजन-स्थिरीकारक जीवाणु कौन-सा है?",
    options: [
      { id: "A", textEn: "Azotobacter", textHi: "एजोटोबैक्टर (Azotobacter)" },
      { id: "B", textEn: "Clostridium", textHi: "क्लॉस्ट्रिडियम" },
      { id: "C", textEn: "Rhizobium", textHi: "राइजोबियम" },
      { id: "D", textEn: "Frankia", textHi: "फ्रैंकिया" }
    ],
    correctAnswer: "A",
    explanation: "Azotobacter and Beijerinckia are free-living aerobic nitrogen-fixing soil bacteria, while Clostridium is anaerobic."
  },
  {
    id: 133,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "The primary tissue responsible for secondary growth in thickness in dicot stems is:",
    questionHi: "द्विबीजपत्री तने में मोटाई में द्वितीयक वृद्धि के लिए उत्तरदायी मुख्य ऊतक कौन-सा है?",
    options: [
      { id: "A", textEn: "Vascular cambium and Cork cambium", textHi: "संवहन कैम्बियम तथा काग कैम्बियम" },
      { id: "B", textEn: "Apical meristem", textHi: "शीर्षस्थ विभज्योतक" },
      { id: "C", textEn: "Intercalary meristem", textHi: "अंतर्वेशी विभज्योतक" },
      { id: "D", textEn: "Protoderm", textHi: "प्रोटोडर्म" }
    ],
    correctAnswer: "A",
    explanation: "Lateral meristems (vascular cambium producing secondary xylem/phloem, and cork cambium producing phellem) cause secondary thickening."
  },
  {
    id: 134,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "In a plant cell, spindle fibers attach to chromosomes during mitosis at the:",
    questionHi: "समसूत्री विभाजन के दौरान तर्कु तंतु गुणसूत्रों के किस भाग से जुड़ते हैं?",
    options: [
      { id: "A", textEn: "Kinetochore of the centromere", textHi: "गुणसूत्रबिंदु का काइनेटोकोर" },
      { id: "B", textEn: "Telomere", textHi: "टिलोमियर" },
      { id: "C", textEn: "Chromomere", textHi: "क्रोमोमियर" },
      { id: "D", textEn: "Centrosome", textHi: "तारककाय" }
    ],
    correctAnswer: "A",
    explanation: "Kinetochores are disc-shaped protein complexes situated on the centromere of each chromosome where spindle microtubules anchor."
  },
  {
    id: 135,
    section: "botany",
    sectionName: "Botany / वनस्पति विज्ञान",
    questionEn: "Which of the following greenhouse gases has the highest global warming potential per molecule?",
    questionHi: "प्रति अणु के आधार पर सर्वाधिक वैश्विक तापन क्षमता (GWP) वाली ग्रीनहाउस गैस कौन सी है?",
    options: [
      { id: "A", textEn: "CFCs (Chlorofluorocarbons)", textHi: "CFCs (क्लोरोफ्लोरोकार्बन)" },
      { id: "B", textEn: "Carbon dioxide (CO2)", textHi: "CO2" },
      { id: "C", textEn: "Methane (CH4)", textHi: "मीथेन (CH4)" },
      { id: "D", textEn: "Nitrous oxide (N2O)", textHi: "नाइट्रस ऑक्साइड" }
    ],
    correctAnswer: "A",
    explanation: "Chlorofluorocarbons have thousands of times greater heat-trapping capacity per molecule than carbon dioxide."
  },

  // =========================================================================
  // 4. ZOOLOGY (Q136 to Q180) — 45 Questions (180 Marks)
  // =========================================================================
  {
    id: 136,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In the human circulatory system, which vessel carries oxygenated blood from lungs to left atrium?",
    questionHi: "मानव परिसंचरण तंत्र में फेफड़ों से शुद्ध (ऑक्सीजनित) रक्त को बाएँ अलिंद में कौन ले जाती है?",
    options: [
      { id: "A", textEn: "Pulmonary artery", textHi: "फुफ्फुस धमनी" },
      { id: "B", textEn: "Pulmonary vein", textHi: "फुफ्फुस शिरा (Pulmonary vein)" },
      { id: "C", textEn: "Superior vena cava", textHi: "अग्र महाशिरा" },
      { id: "D", textEn: "Aorta", textHi: "महाधमनी" }
    ],
    correctAnswer: "B",
    explanation: "Pulmonary veins are the only veins in human body that transport oxygen-rich blood from lungs into the left atrium of the heart."
  },
  {
    id: 137,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The structural and functional filtration unit of the human kidney is the:",
    questionHi: "मानव वृक्क (किडनी) की कार्यात्मक एवं निस्यंदन इकाई क्या है?",
    options: [
      { id: "A", textEn: "Nephron", textHi: "नेफ्रॉन (वृक्काणु)" },
      { id: "B", textEn: "Neuron", textHi: "न्यूरॉन (तंत्रिका कोशिका)" },
      { id: "C", textEn: "Glomerulus only", textHi: "केवल केशिकागुच्छ" },
      { id: "D", textEn: "Alveolus", textHi: "कूपिका" }
    ],
    correctAnswer: "A",
    explanation: "Each human kidney contains approximately 1 to 1.2 million nephrons, which filter blood and produce urine."
  },
  {
    id: 138,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Normal resting glomerular filtration rate (GFR) in a healthy adult human is approximately:",
    questionHi: "एक स्वस्थ वयस्क मानव में सामान्य गुच्छीय निस्यंदन दर (GFR) लगभग कितनी होती है?",
    options: [
      { id: "A", textEn: "125 mL/min (180 L/day)", textHi: "125 मिली/मिनट (180 लीटर/दिन)" },
      { id: "B", textEn: "50 mL/min", textHi: "50 मिली/मिनट" },
      { id: "C", textEn: "250 mL/min", textHi: "250 मिली/मिनट" },
      { id: "D", textEn: "1.5 L/day", textHi: "1.5 लीटर/दिन" }
    ],
    correctAnswer: "A",
    explanation: "GFR is about 125 mL/minute or 180 liters per day. Nearly 99% of this filtrate is reabsorbed by the renal tubules."
  },
  {
    id: 139,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In human digestion, which gastric cell secretes Hydrochloric acid (HCl) and Castle's intrinsic factor?",
    questionHi: "मानव आमाशय में हाइड्रोक्लोरिक अम्ल (HCl) तथा कैसल के आंतरिक कारक का स्राव कौन-सी कोशिकाएँ करती हैं?",
    options: [
      { id: "A", textEn: "Peptic (Chief) cells", textHi: "पेप्टिक (मुख्य) कोशिकाएँ" },
      { id: "B", textEn: "Parietal (Oxyntic) cells", textHi: "पैराइटल (ऑक्सिन्टिक) कोशिकाएँ" },
      { id: "C", textEn: "Goblet cells", textHi: "गोब्लेट कोशिकाएँ" },
      { id: "D", textEn: "G-cells", textHi: "G-कोशिकाएँ" }
    ],
    correctAnswer: "B",
    explanation: "Parietal (oxyntic) cells secrete HCl to activate pepsinogen and intrinsic factor essential for Vitamin B12 absorption in the ileum."
  },
  {
    id: 140,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The sliding filament theory of skeletal muscle contraction involves interaction between:",
    questionHi: "कंकाल पेशी संकुचन का सर्पी तंतु सिद्धांत (Sliding filament theory) किनके बीच पारस्परिक क्रिया पर आधारित है?",
    options: [
      { id: "A", textEn: "Actin and Myosin", textHi: "एक्टिन तथा मायोसिन" },
      { id: "B", textEn: "Collagen and Elastin", textHi: "कोलेजन तथा इलास्टिन" },
      { id: "C", textEn: "Keratin and Tubulin", textHi: "किरेटिन तथा ट्यूब्युलिन" },
      { id: "D", textEn: "Hemoglobin and Myoglobin", textHi: "हीमोग्लोबिन तथा मायोग्लोबिन" }
    ],
    correctAnswer: "A",
    explanation: "Myosin cross-bridges bind to exposed active sites on actin thin filaments in the presence of Ca2+ and ATP, pulling them toward the center of the sarcomere."
  },
  {
    id: 141,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "During transmission of nerve impulse along an axon, rapid depolarization is caused by influx of:",
    questionHi: "तंत्रिका आवेग के संचरण के दौरान अक्षतंतु का तीव्र विध्रुवण (Depolarization) किसके अंतर्वाह से होता है?",
    options: [
      { id: "A", textEn: "Sodium ions (Na+)", textHi: "सोडियम आयन (Na+)" },
      { id: "B", textEn: "Potassium ions (K+)", textHi: "पोटैशियम आयन (K+)" },
      { id: "C", textEn: "Chloride ions (Cl-)", textHi: "क्लोराइड आयन (Cl-)" },
      { id: "D", textEn: "Calcium ions (Ca2+)", textHi: "कैल्शियम आयन (Ca2+)" }
    ],
    correctAnswer: "A",
    explanation: "Stimulus opens voltage-gated Na+ channels, allowing rapid influx of Na+ down electrochemical gradient, flipping membrane potential from -70 mV to +30 mV."
  },
  {
    id: 142,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which endocrine gland is controlled by the hypothalamus and referred to as the 'master gland'?",
    questionHi: "हाइपोथैलेमस द्वारा नियंत्रित तथा 'मास्टर ग्रंथि' कहलाने वाली अंतःस्रावी ग्रंथि कौन सी है?",
    options: [
      { id: "A", textEn: "Pituitary gland", textHi: "पीयूष ग्रंथि (Pituitary gland)" },
      { id: "B", textEn: "Thyroid gland", textHi: "थायरॉयड ग्रंथि" },
      { id: "C", textEn: "Adrenal gland", textHi: "अधिवृक्क ग्रंथि" },
      { id: "D", textEn: "Pineal gland", textHi: "पीनियल ग्रंथि" }
    ],
    correctAnswer: "A",
    explanation: "The anterior and posterior lobes of pituitary secrete trophic hormones (TSH, ACTH, FSH, LH, GH) that regulate other peripheral endocrine glands."
  },
  {
    id: 143,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Sertoli cells located in the seminiferous tubules of human testes function to:",
    questionHi: "मानव वृषण की शुक्रजनक नलिकाओं में स्थित सर्टोली कोशिकाओं का मुख्य कार्य क्या है?",
    options: [
      { id: "A", textEn: "Provide nutrition to developing spermatozoa", textHi: "विकासशील शुक्राणुओं को पोषण प्रदान करना" },
      { id: "B", textEn: "Secrete testosterone", textHi: "टेस्टोस्टेरोन का स्राव करना" },
      { id: "C", textEn: "Undergo meiosis directly", textHi: "अर्धसूत्री विभाजन करना" },
      { id: "D", textEn: "Produce estrogen", textHi: "एस्ट्रोजन बनाना" }
    ],
    correctAnswer: "A",
    explanation: "Sertoli (nurse) cells provide nourishment, mechanical support, and secrete ABP and inhibin to regulate developing spermatogenic cells."
  },
  {
    id: 144,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Ovulation in human females is triggered by a sudden surge in the level of:",
    questionHi: "मानव मादा में अंडोत्सर्ग (Ovulation) किस हॉर्मोन के अचानक तीव्र स्राव (Surge) से प्रेरित होता है?",
    options: [
      { id: "A", textEn: "Luteinizing Hormone (LH)", textHi: "ल्यूटीनाइज़िंग हॉर्मोन (LH)" },
      { id: "B", textEn: "Progesterone", textHi: "प्रोजेस्टेरोन" },
      { id: "C", textEn: "Oxytocin", textHi: "ऑक्सीटोसिन" },
      { id: "D", textEn: "Prolactin", textHi: "प्रोलैक्टिन" }
    ],
    correctAnswer: "A",
    explanation: "LH surge at mid-menstrual cycle (around day 14) induces rupture of the mature Graafian follicle and release of secondary oocyte."
  },
  {
    id: 145,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The permanent surgical contraception method in human males involving tying off the vas deferens is:",
    questionHi: "मानव पुरुषों में शुक्रवाहिका को काटकर बाँधने की स्थायी शल्य गर्भनिरोधक विधि क्या कहलाती है?",
    options: [
      { id: "A", textEn: "Vasectomy", textHi: "शुक्रवाहक उच्छेदन (Vasectomy)" },
      { id: "B", textEn: "Tubectomy", textHi: "ट्यूबेक्टॉमी" },
      { id: "C", textEn: "Coitus interruptus", textHi: "सहमति सहवास" },
      { id: "D", textEn: "IUD insertion", textHi: "IUD रोपण" }
    ],
    correctAnswer: "A",
    explanation: "Vasectomy prevents sperm transport into ejaculatory semen without affecting testosterone secretion or erection."
  },
  {
    id: 146,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which of the following animal phyla exhibits true metameric segmentation and a closed circulatory system?",
    questionHi: "निम्नलिखित में से किस जंतु संघ में वास्तविक विखंडी खंडीभवन तथा बंद परिसंचरण तंत्र पाया जाता है?",
    options: [
      { id: "A", textEn: "Annelida (e.g. Earthworm)", textHi: "एनेलिडा (केंचुआ)" },
      { id: "B", textEn: "Arthropoda", textHi: "आर्थ्रोपोडा" },
      { id: "C", textEn: "Mollusca", textHi: "मोलस्का" },
      { id: "D", textEn: "Platyhelminthes", textHi: "प्लैटीहेल्मिन्थीज" }
    ],
    correctAnswer: "A",
    explanation: "Annelids (like earthworm and leech) have internal and external body segmentation (metameres) and a closed circulatory system with hemoglobin."
  },
  {
    id: 147,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Water vascular system (ambulacral system) used for locomotion and respiration is diagnostic of:",
    questionHi: "प्रचलन तथा श्वसन में सहायक जल संवहन तंत्र (Water vascular system) किस संघ का विशिष्ट लक्षण है?",
    options: [
      { id: "A", textEn: "Echinodermata (e.g. Starfish)", textHi: "इकाइनोडर्मेटा (तारा मछली)" },
      { id: "B", textEn: "Porifera", textHi: "पोरिफेरा" },
      { id: "C", textEn: "Coelenterata", textHi: "सीलेंट्रेटा" },
      { id: "D", textEn: "Aschelminthes", textHi: "एस्केल्मिन्थीज" }
    ],
    correctAnswer: "A",
    explanation: "Echinoderms have a coelomic water vascular system with tube feet (podia) providing hydraulic locomotion, food capture, and respiration."
  },
  {
    id: 148,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The antibody isotype predominantly present in maternal colostrum providing passive immunity to newborn is:",
    questionHi: "नवजात शिशु को निष्क्रिय प्रतिरक्षा प्रदान करने वाले माता के प्रथम दुग्ध (Colostrum) में कौन-सा एंटीबॉडी प्रमुखता से होता है?",
    options: [
      { id: "A", textEn: "IgA", textHi: "IgA" },
      { id: "B", textEn: "IgG", textHi: "IgG" },
      { id: "C", textEn: "IgM", textHi: "IgM" },
      { id: "D", textEn: "IgE", textHi: "IgE" }
    ],
    correctAnswer: "A",
    explanation: "Secretory IgA is abundant in colostrum, saliva, and mucous membranes, protecting infant mucosal linings against pathogens."
  },
  {
    id: 149,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "HIV primarily infects and destroys which of the following immune cells, leading to AIDS?",
    questionHi: "HIV विषाणु मुख्य रूप से किन प्रतिरक्षा कोशिकाओं को संक्रमित एवं नष्ट करता है, जिससे AIDS होता है?",
    options: [
      { id: "A", textEn: "T-helper (CD4+) lymphocytes", textHi: "टी-सहायक (CD4+) लिम्फोसाइट्स" },
      { id: "B", textEn: "B-lymphocytes", textHi: "बी-लिम्फोसाइट्स" },
      { id: "C", textEn: "Erythrocytes (RBCs)", textHi: "लाल रक्त कणिकाएँ" },
      { id: "D", textEn: "Basophils", textHi: "बेसोफिल" }
    ],
    correctAnswer: "A",
    explanation: "HIV targets CD4 surface receptors on T-helper lymphocytes, replicating inside them and progressively depleting cell-mediated immunity."
  },
  {
    id: 150,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The molecular scissors used in genetic engineering to cut double-stranded DNA at specific palindromic sequences are:",
    questionHi: "जेनेटिक इंजीनियरिंग में विशिष्ट विलोमपद (Palindromic) अनुक्रमों पर DNA को काटने वाले 'आण्विक कैंची' कौन से हैं?",
    options: [
      { id: "A", textEn: "Restriction Endonucleases", textHi: "प्रतिबंधन एंडोन्यूक्लिएज (Restriction Endonucleases)" },
      { id: "B", textEn: "DNA Ligases", textHi: "DNA लाइगेज" },
      { id: "C", textEn: "DNA Polymerases", textHi: "DNA पॉलीमरेज" },
      { id: "D", textEn: "RNA Transcriptases", textHi: "RNA ट्रांसक्रिप्टेज" }
    ],
    correctAnswer: "A",
    explanation: "Restriction endonucleases (e.g. EcoRI) recognize specific palindromic recognition sequences and cut phosphodiester backbones to generate sticky ends."
  },
  {
    id: 151,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The Polymerase Chain Reaction (PCR) technique was invented by:",
    questionHi: "पॉलीमरेज श्रृंखला अभिक्रिया (PCR) तकनीक का आविष्कार किसने किया था?",
    options: [
      { id: "A", textEn: "Kary Mullis", textHi: "कैरी मुलिस (Kary Mullis)" },
      { id: "B", textEn: "Alexander Fleming", textHi: "अलेक्जेंडर फ्लेमिंग" },
      { id: "C", textEn: "Francis Crick", textHi: "फ्रांसिस क्रिक" },
      { id: "D", textEn: "Stanley Cohen", textHi: "स्टेनली कोहेन" }
    ],
    correctAnswer: "A",
    explanation: "Kary Mullis developed PCR in 1983 using Taq polymerase from Thermus aquaticus, for which he was awarded the Nobel Prize."
  },
  {
    id: 152,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In the Hardy-Weinberg equation (p^2 + 2pq + q^2 = 1), 2pq represents the frequency of:",
    questionHi: "हार्डी-वीनबर्ग समीकरण (p^2 + 2pq + q^2 = 1) में 2pq किसकी आवृत्ति को प्रदर्शित करता है?",
    options: [
      { id: "A", textEn: "Heterozygous individuals", textHi: "विषमयुग्मजी व्यष्टि (Heterozygous)" },
      { id: "B", textEn: "Homozygous dominant individuals", textHi: "समयुग्मजी प्रभावी" },
      { id: "C", textEn: "Homozygous recessive individuals", textHi: "समयुग्मजी अप्रभावी" },
      { id: "D", textEn: "Recessive allele", textHi: "अप्रभावी एलील" }
    ],
    correctAnswer: "A",
    explanation: "p^2 = frequency of homozygous dominant (AA), 2pq = frequency of heterozygous genotype (Aa), q^2 = homozygous recessive (aa)."
  },
  {
    id: 153,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Homologous organs provide evidence of evolution by demonstrating:",
    questionHi: "समजात अंग (Homologous organs) जैव विकास का प्रमाण देते हुए क्या प्रदर्शित करते हैं?",
    options: [
      { id: "A", textEn: "Divergent evolution from a common ancestor", textHi: "समान पूर्वज से अपसारी विकास (Divergent evolution)" },
      { id: "B", textEn: "Convergent evolution", textHi: "अभिसारी विकास" },
      { id: "C", textEn: "Analogous functions", textHi: "समान कार्य" },
      { id: "D", textEn: "Independent origin", textHi: "स्वतंत्र उत्पत्ति" }
    ],
    correctAnswer: "A",
    explanation: "Homologous organs (e.g. forelimbs of human, cheetah, whale, bat) share common anatomical plan and embryonic origin but perform different adapted functions."
  },
  {
    id: 154,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In an ECG (electrocardiogram), the T-wave represents:",
    questionHi: "मानक ईसीजी (ECG) में T-तरंग (T-wave) क्या प्रदर्शित करती है?",
    options: [
      { id: "A", textEn: "Ventricular repolarization (relaxation)", textHi: "निलय का पुनर्ध्रुवण (शिथिलन)" },
      { id: "B", textEn: "Ventricular depolarization", textHi: "निलय का विध्रुवण" },
      { id: "C", textEn: "Atrial depolarization", textHi: "अलिंद का विध्रुवण" },
      { id: "D", textEn: "Atrial repolarization", textHi: "अलिंद का पुनर्ध्रुवण" }
    ],
    correctAnswer: "A",
    explanation: "P-wave = atrial depolarization, QRS complex = ventricular depolarization, T-wave = ventricular repolarization (return to resting state)."
  },
  {
    id: 155,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The volume of air inspired or expired during a normal relaxed respiration in human adults is termed:",
    questionHi: "सामान्य शांत श्वसन के दौरान अंतःश्वसित या निःश्वसित वायु का आयतन क्या कहलाता है?",
    options: [
      { id: "A", textEn: "Tidal Volume (TV ≈ 500 mL)", textHi: "ज्वारीय आयतन (Tidal Volume ≈ 500 mL)" },
      { id: "B", textEn: "Inspiratory Reserve Volume (IRV)", textHi: "अंतःश्वसन सुरक्षित आयतन" },
      { id: "C", textEn: "Residual Volume (RV)", textHi: "अवशिष्ट आयतन" },
      { id: "D", textEn: "Vital Capacity (VC)", textHi: "जैव क्षमता" }
    ],
    correctAnswer: "A",
    explanation: "Tidal Volume is the volume of air breathed in or out during normal resting ventilation, approximately 500 mL in a healthy man."
  },
  {
    id: 156,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The primary pacemaker of the human heart responsible for initiating rhythmic contractions is:",
    questionHi: "मानव हृदय का प्राथमिक गति-प्रेरक (पेसमेकर), जो लयबद्ध संकुचन प्रारंभ करता है, कौन सा है?",
    options: [
      { id: "A", textEn: "Sino-Atrial (SA) node", textHi: "शिरा-अलिंद पर्व (SA नोड)" },
      { id: "B", textEn: "Atrio-Ventricular (AV) node", textHi: "अलिंद-निलय पर्व (AV नोड)" },
      { id: "C", textEn: "Bundle of His", textHi: "हिस का बंडल" },
      { id: "D", textEn: "Purkinje fibers", textHi: "पुरकिंजे तंतु" }
    ],
    correctAnswer: "A",
    explanation: "The SA node situated in the upper right atrium generates action potentials at 70-75 bpm, driving the cardiac cycle."
  },
  {
    id: 157,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In the human eye, the photoreceptor cells responsible for colored vision and visual acuity in bright light are:",
    questionHi: "मानव नेत्र में प्रकाश की उपस्थिति में रंगीन दृष्टि तथा दृश्य तीक्ष्णता के लिए उत्तरदायी प्रकाशग्राही कोशिकाएँ कौन-सी हैं?",
    options: [
      { id: "A", textEn: "Cones", textHi: "शंकु कोशिकाएँ (Cones)" },
      { id: "B", textEn: "Rods", textHi: "शलाका कोशिकाएँ (Rods)" },
      { id: "C", textEn: "Amacrine cells", textHi: "एमाक्राइन कोशिकाएँ" },
      { id: "D", textEn: "Bipolar cells", textHi: "द्विध्रुवीय कोशिकाएँ" }
    ],
    correctAnswer: "A",
    explanation: "Cones contain photopsin pigments and provide photopic (daylight) and trichromatic color vision, concentrated at the fovea centralis."
  },
  {
    id: 158,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which hormone is synthesized by the corpus luteum after ovulation to maintain the uterine endometrium?",
    questionHi: "अंडोत्सर्ग के पश्चात गर्भाशय के अंतर्गर्भाशय स्तर (Endometrium) को बनाए रखने के लिए कॉर्पस ल्यूटियम द्वारा कौन-सा हॉर्मोन स्रावित होता है?",
    options: [
      { id: "A", textEn: "Progesterone", textHi: "प्रोजेस्टेरोन" },
      { id: "B", textEn: "Estrogen only", textHi: "केवल एस्ट्रोजन" },
      { id: "C", textEn: "Prolactin", textHi: "प्रोलैक्टिन" },
      { id: "D", textEn: "Oxytocin", textHi: "ऑक्सीटोसिन" }
    ],
    correctAnswer: "A",
    explanation: "Progesterone maintains a secretory vascularized endometrium essential for implantation of the fertilized blastocyst."
  },
  {
    id: 159,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The hormone responsible for the 'milk ejection reflex' (letdown reflex) in lactating mothers is:",
    questionHi: "स्तनपान कराने वाली माताओं में 'दुग्ध निष्कासन प्रतिवर्त' (Letdown reflex) के लिए कौन-सा हॉर्मोन उत्तरदायी है?",
    options: [
      { id: "A", textEn: "Oxytocin", textHi: "ऑक्सीटोसिन" },
      { id: "B", textEn: "Prolactin", textHi: "प्रोलैक्टिन" },
      { id: "C", textEn: "Progesterone", textHi: "प्रोजेस्टेरोन" },
      { id: "D", textEn: "Relaxin", textHi: "रिलैक्सिन" }
    ],
    correctAnswer: "A",
    explanation: "Prolactin stimulates milk synthesis in mammary alveoli, whereas oxytocin stimulates myoepithelial contractions causing milk ejection."
  },
  {
    id: 160,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Urea cycle (ornithine cycle) for ammonia detoxification in humans takes place in:",
    questionHi: "मानव में अमोनिया के विषहरण हेतु यूरिया चक्र (ऑर्निथीन चक्र) किस अंग में संपन्न होता है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत (Liver)" },
      { id: "B", textEn: "Kidney", textHi: "वृक्क (Kidney)" },
      { id: "C", textEn: "Spleen", textHi: "प्लीहा" },
      { id: "D", textEn: "Pancreas", textHi: "अग्न्याशय" }
    ],
    correctAnswer: "A",
    explanation: "The urea cycle takes place in hepatocytes of the liver, converting toxic ammonia into water-soluble urea."
  },
  {
    id: 161,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The oxygen-hemoglobin dissociation curve shifts to the right (Bohr effect) when there is an increase in:",
    questionHi: "ऑक्सीजन-हीमोग्लोबिन वियोजन वक्र दाईं ओर विस्थापित (Bohr effect) कब होता है, जब किसकी वृद्धि होती है?",
    options: [
      { id: "A", textEn: "pCO2, H+ concentration and temperature", textHi: "pCO2, H+ सांद्रता तथा तापमान में" },
      { id: "B", textEn: "pO2 and pH", textHi: "pO2 तथा pH में" },
      { id: "C", textEn: "pH only", textHi: "केवल pH में" },
      { id: "D", textEn: "Fetal hemoglobin level", textHi: "भ्रूणीय हीमोग्लोबिन स्तर में" }
    ],
    correctAnswer: "A",
    explanation: "Increased pCO2, acidity (lower pH), and elevated temperature decrease hemoglobin affinity for O2, promoting oxygen delivery to metabolizing tissues."
  },
  {
    id: 162,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which of the following is an autoimmune disorder that affects the neuromuscular junction, causing progressive muscle weakness?",
    questionHi: "निम्नलिखित में से कौन-सा स्वप्रतिरक्षा विकार न्यूरोमस्कुलर जंक्शन को प्रभावित कर पेशियों में कमजोरी उत्पन्न करता है?",
    options: [
      { id: "A", textEn: "Myasthenia gravis", textHi: "मायस्थेनिया ग्रेविस" },
      { id: "B", textEn: "Muscular dystrophy", textHi: "पेशीय दुर्विकास" },
      { id: "C", textEn: "Osteoporosis", textHi: "अस्थिसुषिरता" },
      { id: "D", textEn: "Gout", textHi: "गाउट" }
    ],
    correctAnswer: "A",
    explanation: "Myasthenia gravis is an autoimmune condition where antibodies block or destroy acetylcholine receptors at the neuromuscular junction."
  },
  {
    id: 163,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Bt cotton has been genetically engineered to resist pest infestation by incorporating an insecticidal endotoxin gene from:",
    questionHi: "कीट प्रतिरोधी बीटी कपास (Bt cotton) में कीटनाशी एंडोटॉक्सिन जीन किस जीवाणु से प्रविष्ट कराया गया है?",
    options: [
      { id: "A", textEn: "Bacillus thuringiensis", textHi: "बैसिलस थुरिंजिएंसिस (Bacillus thuringiensis)" },
      { id: "B", textEn: "Agrobacterium tumefaciens", textHi: "एग्रोबैक्टीरियम ट्यूमीफेसिएंस" },
      { id: "C", textEn: "Escherichia coli", textHi: "ई. कोलाई" },
      { id: "D", textEn: "Thermus aquaticus", textHi: "थर्मस एक्वाटिकस" }
    ],
    correctAnswer: "A",
    explanation: "Bt cotton carries cry genes from the soil bacterium Bacillus thuringiensis which code for crystal endotoxins toxic to lepidopteran pests."
  },
  {
    id: 164,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In recombinant human insulin (Humulin) production, chain A and chain B are synthesized separately in E. coli and combined by:",
    questionHi: "मानव इंसुलिन (ह्युमुलिन) के निर्माण में ई. कोलाई में अलग-अलग संश्लेषित श्रृंखला A तथा B को किसके द्वारा जोड़ा जाता है?",
    options: [
      { id: "A", textEn: "Disulfide bonds", textHi: "डाइसल्फाइड बंध (Disulfide bonds)" },
      { id: "B", textEn: "Hydrogen bonds", textHi: "हाइड्रोजन बंध" },
      { id: "C", textEn: "Phosphodiester bonds", textHi: "फॉस्फोडाइएस्टर बंध" },
      { id: "D", textEn: "Glycosidic linkages", textHi: "ग्लाइकोसिडिक बंध" }
    ],
    correctAnswer: "A",
    explanation: "Eli Lilly produced insulin chains A and B separately in E. coli and bonded them together chemically via disulfide bridges."
  },
  {
    id: 165,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which of the following blood groups is known as the universal donor in the ABO and Rh systems?",
    questionHi: "ABO तथा Rh रक्त समूह तंत्र में कौन-सा रक्त समूह 'सार्वत्रिक दाता' (Universal donor) कहलाता है?",
    options: [
      { id: "A", textEn: "O Negative (O-)", textHi: "O नेगेटिव (O-)" },
      { id: "B", textEn: "O Positive (O+)", textHi: "O पॉजिटिव (O+)" },
      { id: "C", textEn: "AB Positive (AB+)", textHi: "AB पॉजिटिव (AB+)" },
      { id: "D", textEn: "AB Negative (AB-)", textHi: "AB नेगेटिव (AB-)" }
    ],
    correctAnswer: "A",
    explanation: "O Negative erythrocytes lack A, B, and Rh (D) surface antigens, preventing agglutination in any recipient."
  },
  {
    id: 166,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The primary site of fertilization in the human female reproductive tract is:",
    questionHi: "मानव मादा जनन तंत्र में निषेचन का मुख्य स्थल कौन-सा है?",
    options: [
      { id: "A", textEn: "Ampulla of fallopian tube", textHi: "फैलोपियन नलिका का तुम्बिका (Ampulla) भाग" },
      { id: "B", textEn: "Uterus", textHi: "गर्भाशय" },
      { id: "C", textEn: "Cervix", textHi: "ग्रीवा" },
      { id: "D", textEn: "Vagina", textHi: "योनि" }
    ],
    correctAnswer: "A",
    explanation: "Fertilization takes place at the ampullary region of the oviduct (fallopian tube) when ovum and sperm arrive simultaneously."
  },
  {
    id: 167,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which cell organelle in eukaryotic cells is inherited strictly via maternal lineage in humans?",
    questionHi: "मानव में कौन-सा कोशिकांग संतानों में केवल माता के माध्यम से वंशानुगत होता है?",
    options: [
      { id: "A", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया" },
      { id: "B", textEn: "Centrosome", textHi: "तारककाय" },
      { id: "C", textEn: "Endoplasmic reticulum", textHi: "अंतःप्रद्रव्यी जालिका" },
      { id: "D", textEn: "Ribosome", textHi: "राइबोसोम" }
    ],
    correctAnswer: "A",
    explanation: "Mitochondrial DNA (mtDNA) is passed exclusively through the egg's cytoplasm, as sperm mitochondria in the flagellum are degraded upon fertilization."
  },
  {
    id: 168,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "A primary lymphoid organ where T-lymphocytes undergo maturation and immunocompetence training is the:",
    questionHi: "वह प्राथमिक लसिकाभ अंग जहाँ टी-लिम्फोसाइट्स परिपक्वता तथा प्रतिरक्षात्मक क्षमता प्राप्त करते हैं:",
    options: [
      { id: "A", textEn: "Thymus", textHi: "थाइमस ग्रंथि (Thymus)" },
      { id: "B", textEn: "Spleen", textHi: "प्लीहा" },
      { id: "C", textEn: "Lymph node", textHi: "लसीका ग्रंथि" },
      { id: "D", textEn: "Tonsil", textHi: "टॉन्सिल" }
    ],
    correctAnswer: "A",
    explanation: "Bone marrow produces immature T-cell progenitors which migrate to the thymus for education, differentiation, and maturation."
  },
  {
    id: 169,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The disease phenylketonuria (PKU) is an inborn error of metabolism caused by deficiency of:",
    questionHi: "फेनिलकीटोन्यूरिया (PKU) नामक उपापचयी आनुवंशिक रोग किस एंजाइम की कमी के कारण होता है?",
    options: [
      { id: "A", textEn: "Phenylalanine hydroxylase", textHi: "फेनिलएलेनिन हाइड्रॉक्सिलेस" },
      { id: "B", textEn: "Tyrosinase", textHi: "टाइरोसिनेस" },
      { id: "C", textEn: "Homogentisate oxidase", textHi: "होमोजेंटिसिक अम्ल ऑक्सीडेस" },
      { id: "D", textEn: "Hexosaminidase A", textHi: "हेक्सोसामिनिडेस A" }
    ],
    correctAnswer: "A",
    explanation: "Deficiency of phenylalanine hydroxylase prevents conversion of phenylalanine into tyrosine, causing accumulation of phenylpyruvic acid and mental retardation."
  },
  {
    id: 170,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In the human ear, auditory receptors (hair cells) are located within the:",
    questionHi: "मानव कान में श्रवण ग्राही कोशिकाएँ (हेयर सेल्स) कहाँ स्थित होती हैं?",
    options: [
      { id: "A", textEn: "Organ of Corti on basilar membrane", textHi: "बेसिलर झिल्ली पर स्थित कॉर्टाई का अंग" },
      { id: "B", textEn: "Tympanic membrane", textHi: "कर्णपटह झिल्ली" },
      { id: "C", textEn: "Semicircular canals", textHi: "अर्धचंद्राकार नलिकाएँ" },
      { id: "D", textEn: "Eustachian tube", textHi: "यूस्टेशियन नलिका" }
    ],
    correctAnswer: "A",
    explanation: "The Organ of Corti resting on the basilar membrane of the cochlea contains sensory hair cells that convert sound vibrations into nerve impulses."
  },
  {
    id: 171,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The hormone calcitonin secreted by thyroid parafollicular cells functions to:",
    questionHi: "थायरॉयड ग्रंथि की पैराफॉलिक्युलर कोशिकाओं द्वारा स्रावित कैल्सीटोनिन हॉर्मोन का कार्य क्या है?",
    options: [
      { id: "A", textEn: "Lower blood calcium level", textHi: "रक्त में कैल्शियम के स्तर को कम करना" },
      { id: "B", textEn: "Increase blood calcium level", textHi: "रक्त में कैल्शियम का स्तर बढ़ाना" },
      { id: "C", textEn: "Increase blood sodium level", textHi: "सोडियम का स्तर बढ़ाना" },
      { id: "D", textEn: "Regulate basal metabolism", textHi: "उपापचय का नियमन" }
    ],
    correctAnswer: "A",
    explanation: "Calcitonin lowers blood Ca2+ by suppressing osteoclast activity and promoting bone mineralization (antagonistic to Parathyroid Hormone PTH)."
  },
  {
    id: 172,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In assisted reproductive technology (ART), the procedure of direct injection of a single sperm into an ovum is:",
    questionHi: "सहायक जनन प्रौद्योगिकी (ART) में एक शुक्राणु को सीधे अंडाणु में प्रविष्ट कराने की विधि कहलाती है:",
    options: [
      { id: "A", textEn: "ICSI (Intra-Cytoplasmic Sperm Injection)", textHi: "ICSI (इंट्रा-साइटोप्लाज्मिक स्पर्म इंजेक्शन)" },
      { id: "B", textEn: "ZIFT", textHi: "ZIFT" },
      { id: "C", textEn: "GIFT", textHi: "GIFT" },
      { id: "D", textEn: "IUI", textHi: "IUI" }
    ],
    correctAnswer: "A",
    explanation: "ICSI is a micromanipulation technique where a single motile spermatozoon is injected directly into the oocyte cytoplasm in laboratory."
  },
  {
    id: 173,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The presence of which hormone in a woman's urine provides the basis for common home pregnancy tests?",
    questionHi: "महिला के मूत्र में किस हॉर्मोन की उपस्थिति सामान्य घरेलू गर्भावस्था परीक्षण का आधार है?",
    options: [
      { id: "A", textEn: "human Chorionic Gonadotropin (hCG)", textHi: "मानव कोरियोनिक गोनाडोट्रोपिन (hCG)" },
      { id: "B", textEn: "Luteinizing Hormone (LH)", textHi: "LH" },
      { id: "C", textEn: "Progesterone", textHi: "प्रोजेस्टेरोन" },
      { id: "D", textEn: "Estrogen", textHi: "एस्ट्रोजन" }
    ],
    correctAnswer: "A",
    explanation: "Trophoblast cells of the implanted blastocyst secrete hCG, which is filtered into maternal urine and detected by immunochromatographic strips."
  },
  {
    id: 174,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which of the following bones is known as the collarbone in human skeletal anatomy?",
    questionHi: "मानव कंकाल तंत्र में हँसली की हड्डी (Collarbone) किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Clavicle", textHi: "क्लैविकल (Clavicle)" },
      { id: "B", textEn: "Scapula", textHi: "स्कैपुला" },
      { id: "C", textEn: "Sternum", textHi: "स्टर्नम (उरोस्थि)" },
      { id: "D", textEn: "Humerus", textHi: "ह्यूमरस" }
    ],
    correctAnswer: "A",
    explanation: "The clavicle (collarbone) connects the arm to the trunk, articulating with the sternum medially and the acromion of scapula laterally."
  },
  {
    id: 175,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "During muscle contraction, calcium ions released from sarcoplasmic reticulum bind specifically to:",
    questionHi: "पेशी संकुचन के दौरान सारकोप्लाज्मिक रेटिकुलम से मुक्त कैल्शियम आयन किससे जुड़ते हैं?",
    options: [
      { id: "A", textEn: "Troponin C", textHi: "ट्रोपोनिन C" },
      { id: "B", textEn: "Tropomyosin", textHi: "ट्रोपोमायोसिन" },
      { id: "C", textEn: "Myosin head", textHi: "मायोसिन शीर्ष" },
      { id: "D", textEn: "Z-disc", textHi: "Z-डिस्क" }
    ],
    correctAnswer: "A",
    explanation: "Ca2+ binding to troponin C induces conformational shift in tropomyosin, unmasking myosin-binding sites on actin filaments."
  },
  {
    id: 176,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The disease kala-azar (visceral leishmaniasis) is transmitted by the bite of:",
    questionHi: "काला-अजार (लीशमैनियासिस) रोग का संचरण किसके काटने से होता है?",
    options: [
      { id: "A", textEn: "Sandfly (Phlebotomus)", textHi: "बालू मक्खी (Sandfly)" },
      { id: "B", textEn: "Female Anopheles mosquito", textHi: "मादा एनाफिलीज मच्छर" },
      { id: "C", textEn: "Tsetse fly", textHi: "त्से-त्से मक्खी" },
      { id: "D", textEn: "Housefly", textHi: "घरेलू मक्खी" }
    ],
    correctAnswer: "A",
    explanation: "Leishmania donovani is a protozoan parasite transmitted to humans by the bite of infected female phlebotomine sandflies."
  },
  {
    id: 177,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "In the juxtaglomerular apparatus (JGA) of kidney, a fall in glomerular blood pressure stimulates release of:",
    questionHi: "वृक्क के जक्स्टाग्लोमेरुलर उपकरण (JGA) में गुच्छीय रक्तचाप घटने पर किसका स्राव प्रेरित होता है?",
    options: [
      { id: "A", textEn: "Renin", textHi: "रेनिन (Renin)" },
      { id: "B", textEn: "Aldosterone directly", textHi: "एल्डोस्टेरोन" },
      { id: "C", textEn: "Atrial Natriuretic Factor (ANF)", textHi: "ANF" },
      { id: "D", textEn: "Erythropoietin", textHi: "इरिथ्रोपोइटिन" }
    ],
    correctAnswer: "A",
    explanation: "JG cells release the enzyme renin, which converts angiotensinogen to angiotensin I, initiating the RAAS vasoconstrictor pathway."
  },
  {
    id: 178,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "The cranial capacity of Neanderthal man was approximately:",
    questionHi: "निएंडरथल मानव की कपाल क्षमता (Cranial capacity) लगभग कितनी थी?",
    options: [
      { id: "A", textEn: "1400 cc", textHi: "1400 cc" },
      { id: "B", textEn: "900 cc", textHi: "900 cc" },
      { id: "C", textEn: "650 cc", textHi: "650 cc" },
      { id: "D", textEn: "450 cc", textHi: "450 cc" }
    ],
    correctAnswer: "A",
    explanation: "Homo neanderthalensis lived in central and east Asia 100,000 to 40,000 years ago with a large brain capacity of about 1400 cc."
  },
  {
    id: 179,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Which of the following is an X-linked recessive genetic disorder in humans?",
    questionHi: "मानव में निम्नलिखित में से कौन-सा X-सहलग्न अप्रभावी आनुवंशिक विकार है?",
    options: [
      { id: "A", textEn: "Hemophilia and Red-Green Color Blindness", textHi: "हीमोफीलिया तथा लाल-हरा वर्णांधता" },
      { id: "B", textEn: "Sickle cell anemia", textHi: "सिकल सेल एनीमिया" },
      { id: "C", textEn: "Thalassemia", textHi: "थैलेसीमिया" },
      { id: "D", textEn: "Cystic fibrosis", textHi: "सिस्टिक फाइब्रोसिस" }
    ],
    correctAnswer: "A",
    explanation: "Hemophilia and color blindness genes reside on the X chromosome and show criss-cross inheritance from grandfather to grandson through carrier daughters."
  },
  {
    id: 180,
    section: "zoology",
    sectionName: "Zoology / जन्तु विज्ञान",
    questionEn: "Gel electrophoresis is used in genetic engineering and DNA fingerprinting to separate DNA fragments according to their:",
    questionHi: "जेनेटिक इंजीनियरिंग तथा DNA फिंगरप्रिंटिंग में जेल इलेक्ट्रोफोरेसिस द्वारा DNA खंडों को किसके आधार पर अलग किया जाता है?",
    options: [
      { id: "A", textEn: "Size and molecular weight", textHi: "आकार एवं आण्विक भार के आधार पर" },
      { id: "B", textEn: "Positive charge", textHi: "धनात्मक आवेश" },
      { id: "C", textEn: "Sequence of bases", textHi: "क्षार अनुक्रम" },
      { id: "D", textEn: "Melting temperature", textHi: "गलनांक" }
    ],
    correctAnswer: "A",
    explanation: "Negatively charged DNA fragments migrate toward the positive anode through agarose gel matrix; smaller fragments move faster and travel further."
  }
];

// Helper functions for NEET dataset
function getNeetQuestions(shuffle = false) {
  if (!shuffle) return NEET_QUESTIONS_DATA;
  const copy = JSON.parse(JSON.stringify(NEET_QUESTIONS_DATA));
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Global context export
window.NEET_EXAM_CONFIG = NEET_EXAM_CONFIG;
window.NEET_QUESTIONS_DATA = NEET_QUESTIONS_DATA;
window.getNeetQuestions = getNeetQuestions;
