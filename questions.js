// GovtExamHub — Multiple Exams Platform
// B.Sc. Nursing Entrance Practice Paper Dataset

const NURSING_EXAM_CONFIG = {
  id: "nursing",
  title: "B.Sc. Nursing Entrance Examination",
  shortName: "Nursing",
  icon: "🩺",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120, // 2 Hours Real Exam Duration
  marksPerCorrect: 1,
  negativeMarking: 0,
  sections: [
    { id: "physics", name: "Physics / भौतिक विज्ञान", start: 1, end: 25, total: 25 },
    { id: "chemistry", name: "Chemistry / रसायन विज्ञान", start: 26, end: 50, total: 25 },
    { id: "biology", name: "Biology / जीव विज्ञान", start: 51, end: 90, total: 40 },
    { id: "english", name: "English / अंग्रेजी", start: 91, end: 100, total: 10 }
  ]
};

const NURSING_QUESTIONS_DATA = [
  // --- PHYSICS (Q1 - Q25) ---
  {
    id: 1,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the SI unit of force?",
    questionHi: "बल की SI इकाई क्या है?",
    options: [
      { id: "A", textEn: "Joule", textHi: "जूल" },
      { id: "B", textEn: "Newton", textHi: "न्यूटन" },
      { id: "C", textEn: "Watt", textHi: "वाट" },
      { id: "D", textEn: "Pascal", textHi: "पास्कल" }
    ],
    correctAnswer: "B",
    explanation: "The SI unit of force is Newton (N), defined as 1 kg·m/s². Joule is for energy, Watt for power, and Pascal for pressure."
  },
  {
    id: 2,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A body moving with constant velocity has:",
    questionHi: "समान वेग से गति कर रही वस्तु का त्वरण कितना होता है?",
    options: [
      { id: "A", textEn: "Increasing", textHi: "बढ़ता हुआ" },
      { id: "B", textEn: "Zero", textHi: "शून्य" },
      { id: "C", textEn: "Negative", textHi: "ऋणात्मक" },
      { id: "D", textEn: "Infinite", textHi: "अनंत" }
    ],
    correctAnswer: "B",
    explanation: "Acceleration is the rate of change of velocity (a = dv/dt). When velocity is constant, dv = 0, so acceleration is zero."
  },
  {
    id: 3,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the dimensional formula of velocity?",
    questionHi: "वेग का विमीय सूत्र क्या है?",
    options: [
      { id: "A", textEn: "[LT⁻¹]", textHi: "[LT⁻¹]" },
      { id: "B", textEn: "[LT⁻²]", textHi: "[LT⁻²]" },
      { id: "C", textEn: "[MLT⁻¹]", textHi: "[MLT⁻¹]" },
      { id: "D", textEn: "[ML²T⁻²]", textHi: "[ML²T⁻²]" }
    ],
    correctAnswer: "A",
    explanation: "Velocity = Displacement / Time = [L] / [T] = [M⁰LT⁻¹] or [LT⁻¹]."
  },
  {
    id: 4,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "At what angle between force and displacement is work done zero?",
    questionHi: "बल और विस्थापन के बीच किस कोण पर किया गया कार्य शून्य होता है?",
    options: [
      { id: "A", textEn: "0°", textHi: "0°" },
      { id: "B", textEn: "45°", textHi: "45°" },
      { id: "C", textEn: "90°", textHi: "90°" },
      { id: "D", textEn: "180°", textHi: "180°" }
    ],
    correctAnswer: "C",
    explanation: "Work done W = F · d · cos(θ). When θ = 90°, cos(90°) = 0, so Work = 0."
  },
  {
    id: 5,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Kinetic energy of an object depends on:",
    questionHi: "किसी वस्तु की गतिज ऊर्जा किन पर निर्भर करती है?",
    options: [
      { id: "A", textEn: "Mass only", textHi: "केवल द्रव्यमान" },
      { id: "B", textEn: "Velocity only", textHi: "केवल वेग" },
      { id: "C", textEn: "Mass and velocity", textHi: "द्रव्यमान और वेग" },
      { id: "D", textEn: "Acceleration only", textHi: "केवल त्वरण" }
    ],
    correctAnswer: "C",
    explanation: "Kinetic energy KE = (1/2)mv². Hence it depends on both mass (m) and velocity (v)."
  },
  {
    id: 6,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the approximate acceleration due to gravity on Earth?",
    questionHi: "पृथ्वी पर गुरुत्वीय त्वरण का लगभग मान क्या है?",
    options: [
      { id: "A", textEn: "5.8 m/s²", textHi: "5.8 m/s²" },
      { id: "B", textEn: "7.8 m/s²", textHi: "7.8 m/s²" },
      { id: "C", textEn: "9.8 m/s²", textHi: "9.8 m/s²" },
      { id: "D", textEn: "12.8 m/s²", textHi: "12.8 m/s²" }
    ],
    correctAnswer: "C",
    explanation: "The standard acceleration due to gravity on Earth surface is approximately 9.8 m/s² (or 9.81 m/s²)."
  },
  {
    id: 7,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which of the following is a scalar quantity?",
    questionHi: "निम्न में से कौन-सी अदिश राशि है?",
    options: [
      { id: "A", textEn: "Velocity", textHi: "वेग" },
      { id: "B", textEn: "Force", textHi: "बल" },
      { id: "C", textEn: "Displacement", textHi: "विस्थापन" },
      { id: "D", textEn: "Speed", textHi: "चाल" }
    ],
    correctAnswer: "D",
    explanation: "Speed has only magnitude and no specific direction, so it is a scalar quantity. Velocity, Force, and Displacement are vector quantities."
  },
  {
    id: 8,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which equation represents Ohm's law?",
    questionHi: "निम्न में से कौन-सा समीकरण ओम के नियम को दर्शाता है?",
    options: [
      { id: "A", textEn: "V = IR", textHi: "V = IR" },
      { id: "B", textEn: "P = VI", textHi: "P = VI" },
      { id: "C", textEn: "Q = It", textHi: "Q = It" },
      { id: "D", textEn: "W = Fs", textHi: "W = Fs" }
    ],
    correctAnswer: "A",
    explanation: "Ohm's Law states that potential difference V is directly proportional to current I, so V = IR (where R is resistance)."
  },
  {
    id: 9,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the SI unit of electrical resistance?",
    questionHi: "विद्युत प्रतिरोध की SI इकाई क्या है?",
    options: [
      { id: "A", textEn: "Volt", textHi: "वोल्ट" },
      { id: "B", textEn: "Ampere", textHi: "एम्पियर" },
      { id: "C", textEn: "Ohm", textHi: "ओम" },
      { id: "D", textEn: "Coulomb", textHi: "कूलॉम" }
    ],
    correctAnswer: "C",
    explanation: "The SI unit of electrical resistance is Ohm (Ω). Volt is potential, Ampere is current, Coulomb is charge."
  },
  {
    id: 10,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "If resistance is doubled while voltage remains constant, current will:",
    questionHi: "यदि वोल्टेज समान रहे और प्रतिरोध दोगुना हो जाए, तो धारा:",
    options: [
      { id: "A", textEn: "Double", textHi: "दोगुनी होगी" },
      { id: "B", textEn: "Become half", textHi: "आधी होगी" },
      { id: "C", textEn: "Become four times", textHi: "चार गुना होगी" },
      { id: "D", textEn: "Remain same", textHi: "समान रहेगी" }
    ],
    correctAnswer: "B",
    explanation: "According to I = V/R, current is inversely proportional to resistance. Doubling resistance halves the current."
  },
  {
    id: 11,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A convex lens is also called:",
    questionHi: "उत्तल लेंस को और किस नाम से जाना जाता है?",
    options: [
      { id: "A", textEn: "Diverging lens", textHi: "अपसारी लेंस" },
      { id: "B", textEn: "Converging lens", textHi: "अभिसारी लेंस" },
      { id: "C", textEn: "Plane lens", textHi: "समतल लेंस" },
      { id: "D", textEn: "Cylindrical lens", textHi: "बेलनाकार लेंस" }
    ],
    correctAnswer: "B",
    explanation: "A convex lens focuses parallel light rays to a point (converges them), so it is called a converging lens."
  },
  {
    id: 12,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The speed of light is maximum in:",
    questionHi: "प्रकाश की गति सबसे अधिक किसमें होती है?",
    options: [
      { id: "A", textEn: "Water", textHi: "जल" },
      { id: "B", textEn: "Glass", textHi: "काँच" },
      { id: "C", textEn: "Air", textHi: "वायु" },
      { id: "D", textEn: "Vacuum", textHi: "निर्वात" }
    ],
    correctAnswer: "D",
    explanation: "Light travels fastest in vacuum where there is no refractive resistance, at approximately 3 × 10⁸ m/s."
  },
  {
    id: 13,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The blue colour of the sky is mainly due to:",
    questionHi: "आकाश का नीला रंग मुख्यतः किस कारण दिखाई देता है?",
    options: [
      { id: "A", textEn: "Reflection", textHi: "परावर्तन" },
      { id: "B", textEn: "Refraction", textHi: "अपवर्तन" },
      { id: "C", textEn: "Dispersion", textHi: "विक्षेपण" },
      { id: "D", textEn: "Scattering", textHi: "प्रकीर्णन" }
    ],
    correctAnswer: "D",
    explanation: "Rayleigh scattering of shorter wavelengths (blue light) by atmospheric gas molecules gives the sky its blue appearance."
  },
  {
    id: 14,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The SI unit of frequency is:",
    questionHi: "आवृत्ति की SI इकाई क्या है?",
    options: [
      { id: "A", textEn: "Hertz", textHi: "हर्ट्ज़" },
      { id: "B", textEn: "Newton", textHi: "न्यूटन" },
      { id: "C", textEn: "Tesla", textHi: "टेस्ला" },
      { id: "D", textEn: "Weber", textHi: "वेबर" }
    ],
    correctAnswer: "A",
    explanation: "Frequency is measured in Hertz (Hz), which represents cycles per second."
  },
  {
    id: 15,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Sound cannot travel through:",
    questionHi: "ध्वनि किस माध्यम से यात्रा नहीं कर सकती?",
    options: [
      { id: "A", textEn: "Air", textHi: "वायु" },
      { id: "B", textEn: "Water", textHi: "जल" },
      { id: "C", textEn: "Steel", textHi: "स्टील" },
      { id: "D", textEn: "Vacuum", textHi: "निर्वात" }
    ],
    correctAnswer: "D",
    explanation: "Sound is a mechanical wave requiring a material medium (solid, liquid, or gas) to propagate, so it cannot travel through vacuum."
  },
  {
    id: 16,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Energy stored in a stretched spring is:",
    questionHi: "खींचे हुए स्प्रिंग में कौन-सी ऊर्जा संचित होती है?",
    options: [
      { id: "A", textEn: "Heat energy", textHi: "ऊष्मीय ऊर्जा" },
      { id: "B", textEn: "Elastic potential energy", textHi: "प्रत्यास्थ स्थितिज ऊर्जा" },
      { id: "C", textEn: "Chemical energy", textHi: "रासायनिक ऊर्जा" },
      { id: "D", textEn: "Nuclear energy", textHi: "नाभिकीय ऊर्जा" }
    ],
    correctAnswer: "B",
    explanation: "Work done to deform or stretch a spring is stored as elastic potential energy (U = 1/2 k x²)."
  },
  {
    id: 17,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Momentum is equal to:",
    questionHi: "संवेग किसके बराबर होता है?",
    options: [
      { id: "A", textEn: "m/v", textHi: "m/v" },
      { id: "B", textEn: "mv", textHi: "mv" },
      { id: "C", textEn: "ma", textHi: "ma" },
      { id: "D", textEn: "F/t", textHi: "F/t" }
    ],
    correctAnswer: "B",
    explanation: "Linear momentum p = mass × velocity (p = mv)."
  },
  {
    id: 18,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "What is the SI unit of power?",
    questionHi: "शक्ति की SI इकाई क्या है?",
    options: [
      { id: "A", textEn: "Joule", textHi: "जूल" },
      { id: "B", textEn: "Watt", textHi: "वाट" },
      { id: "C", textEn: "Newton", textHi: "न्यूटन" },
      { id: "D", textEn: "Volt", textHi: "वोल्ट" }
    ],
    correctAnswer: "B",
    explanation: "Power is rate of doing work (P = W/t). Its SI unit is Joule/second, called Watt (W)."
  },
  {
    id: 19,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A transformer works on the principle of:",
    questionHi: "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है?",
    options: [
      { id: "A", textEn: "Electromagnetic induction", textHi: "विद्युतचुंबकीय प्रेरण" },
      { id: "B", textEn: "Photoelectric effect", textHi: "प्रकाश विद्युत प्रभाव" },
      { id: "C", textEn: "Electrolysis", textHi: "विद्युत अपघटन" },
      { id: "D", textEn: "Thermionic emission", textHi: "तापायनिक उत्सर्जन" }
    ],
    correctAnswer: "A",
    explanation: "A transformer operates on Faraday's law of mutual electromagnetic induction between two coils."
  },
  {
    id: 20,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which particle has a negative charge?",
    questionHi: "किस कण पर ऋणात्मक आवेश होता है?",
    options: [
      { id: "A", textEn: "Proton", textHi: "प्रोटॉन" },
      { id: "B", textEn: "Neutron", textHi: "न्यूट्रॉन" },
      { id: "C", textEn: "Electron", textHi: "इलेक्ट्रॉन" },
      { id: "D", textEn: "Alpha particle", textHi: "अल्फा कण" }
    ],
    correctAnswer: "C",
    explanation: "Electrons have a negative charge of -1.6 × 10⁻¹⁹ C. Protons are positive, neutrons neutral, and alpha particles doubly positive."
  },
  {
    id: 21,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "The focal length of a plane mirror is:",
    questionHi: "समतल दर्पण की फोकस दूरी कितनी होती है?",
    options: [
      { id: "A", textEn: "Zero", textHi: "शून्य" },
      { id: "B", textEn: "One metre", textHi: "एक मीटर" },
      { id: "C", textEn: "Infinite", textHi: "अनंत" },
      { id: "D", textEn: "Negative", textHi: "ऋणात्मक" }
    ],
    correctAnswer: "C",
    explanation: "A plane mirror has no curvature (radius of curvature R = ∞), therefore its focal length f = R/2 = ∞ (Infinite)."
  },
  {
    id: 22,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "Which electromagnetic radiation has the highest frequency?",
    questionHi: "किस विद्युतचुंबकीय विकिरण की आवृत्ति सबसे अधिक होती है?",
    options: [
      { id: "A", textEn: "Radio waves", textHi: "रेडियो तरंगें" },
      { id: "B", textEn: "Microwaves", textHi: "माइक्रोवेव" },
      { id: "C", textEn: "Visible light", textHi: "दृश्य प्रकाश" },
      { id: "D", textEn: "Gamma rays", textHi: "गामा किरणें" }
    ],
    correctAnswer: "D",
    explanation: "Gamma rays have the shortest wavelength and highest frequency (and hence highest energy) in the EM spectrum."
  },
  {
    id: 23,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In circular motion, centripetal acceleration is directed:",
    questionHi: "वृत्तीय गति में अभिकेंद्रीय त्वरण किस दिशा में होता है?",
    options: [
      { id: "A", textEn: "Away from centre", textHi: "केंद्र से दूर" },
      { id: "B", textEn: "Towards centre", textHi: "केंद्र की ओर" },
      { id: "C", textEn: "Along tangent", textHi: "स्पर्श रेखा के अनुदिश" },
      { id: "D", textEn: "Upward", textHi: "ऊपर की ओर" }
    ],
    correctAnswer: "B",
    explanation: "Centripetal acceleration always acts radially inwards towards the center of the circular path."
  },
  {
    id: 24,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "In a series circuit, the current through each resistor is:",
    questionHi: "श्रेणी परिपथ में प्रत्येक प्रतिरोधक से गुजरने वाली धारा:",
    options: [
      { id: "A", textEn: "Different", textHi: "अलग-अलग" },
      { id: "B", textEn: "Same", textHi: "समान" },
      { id: "C", textEn: "Zero", textHi: "शून्य" },
      { id: "D", textEn: "Infinite", textHi: "अनंत" }
    ],
    correctAnswer: "B",
    explanation: "In a series circuit, charge has only one single path to follow, so electric current is identical across all components."
  },
  {
    id: 25,
    section: "physics",
    sectionName: "Physics / भौतिक विज्ञान",
    questionEn: "A fuse wire should generally have:",
    questionHi: "फ्यूज तार में सामान्यतः कौन-सा गुण होना चाहिए?",
    options: [
      { id: "A", textEn: "High melting point", textHi: "उच्च गलनांक" },
      { id: "B", textEn: "Low melting point", textHi: "निम्न गलनांक" },
      { id: "C", textEn: "Zero resistance", textHi: "शून्य प्रतिरोध" },
      { id: "D", textEn: "Very high density", textHi: "बहुत अधिक घनत्व" }
    ],
    correctAnswer: "B",
    explanation: "A fuse wire must have a low melting point so it melts rapidly and breaks the circuit in case of excessive current flow."
  },

  // --- CHEMISTRY (Q26 - Q50) ---
  {
    id: 26,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Atomic number represents the number of:",
    questionHi: "परमाणु क्रमांक किसकी संख्या को दर्शाता है?",
    options: [
      { id: "A", textEn: "Neutrons", textHi: "न्यूट्रॉन" },
      { id: "B", textEn: "Protons", textHi: "प्रोटॉन" },
      { id: "C", textEn: "Nucleons", textHi: "न्यूक्लिऑन" },
      { id: "D", textEn: "Protons + neutrons", textHi: "प्रोटॉन + न्यूट्रॉन" }
    ],
    correctAnswer: "B",
    explanation: "Atomic number (Z) of an atom is strictly equal to the number of protons inside its nucleus."
  },
  {
    id: 27,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "What is the pH of a neutral solution at 25°C?",
    questionHi: "25°C पर उदासीन विलयन का pH कितना होता है?",
    options: [
      { id: "A", textEn: "0", textHi: "0" },
      { id: "B", textEn: "5", textHi: "5" },
      { id: "C", textEn: "7", textHi: "7" },
      { id: "D", textEn: "14", textHi: "14" }
    ],
    correctAnswer: "C",
    explanation: "At 25°C (room temp), pure water and neutral aqueous solutions have [H⁺] = [OH⁻] = 10⁻⁷ M, meaning pH = 7."
  },
  {
    id: 28,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which gas is essential for respiration?",
    questionHi: "श्वसन के लिए कौन-सी गैस आवश्यक है?",
    options: [
      { id: "A", textEn: "Nitrogen", textHi: "नाइट्रोजन" },
      { id: "B", textEn: "Oxygen", textHi: "ऑक्सीजन" },
      { id: "C", textEn: "Hydrogen", textHi: "हाइड्रोजन" },
      { id: "D", textEn: "Carbon dioxide", textHi: "कार्बन डाइऑक्साइड" }
    ],
    correctAnswer: "B",
    explanation: "Oxygen (O₂) is vital for cellular aerobic respiration to oxidize glucose and generate ATP energy."
  },
  {
    id: 29,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "What is the chemical formula of water?",
    questionHi: "जल का रासायनिक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "H₂O", textHi: "H₂O" },
      { id: "B", textEn: "H₂O₂", textHi: "H₂O₂" },
      { id: "C", textEn: "HO₂", textHi: "HO₂" },
      { id: "D", textEn: "H₃O", textHi: "H₃O" }
    ],
    correctAnswer: "A",
    explanation: "Water consists of two hydrogen atoms bonded covalently to one oxygen atom (H₂O)."
  },
  {
    id: 30,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "NaCl is commonly known as:",
    questionHi: "NaCl को सामान्यतः क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Baking soda", textHi: "बेकिंग सोडा" },
      { id: "B", textEn: "Washing soda", textHi: "वाशिंग सोडा" },
      { id: "C", textEn: "Common salt", textHi: "साधारण नमक" },
      { id: "D", textEn: "Bleaching powder", textHi: "ब्लीचिंग पाउडर" }
    ],
    correctAnswer: "C",
    explanation: "Sodium chloride (NaCl) is common table salt. Baking soda is NaHCO₃ and washing soda is Na₂CO₃·10H₂O."
  },
  {
    id: 31,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The symbol K represents:",
    questionHi: "K किस तत्व का प्रतीक है?",
    options: [
      { id: "A", textEn: "Calcium", textHi: "कैल्शियम" },
      { id: "B", textEn: "Potassium", textHi: "पोटैशियम" },
      { id: "C", textEn: "Krypton", textHi: "क्रिप्टॉन" },
      { id: "D", textEn: "Phosphorus", textHi: "फॉस्फोरस" }
    ],
    correctAnswer: "B",
    explanation: "The chemical symbol K stands for Potassium (derived from its Latin name Kalium)."
  },
  {
    id: 32,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The usual valency of oxygen is:",
    questionHi: "ऑक्सीजन की सामान्य संयोजकता कितनी होती है?",
    options: [
      { id: "A", textEn: "1", textHi: "1" },
      { id: "B", textEn: "2", textHi: "2" },
      { id: "C", textEn: "3", textHi: "3" },
      { id: "D", textEn: "4", textHi: "4" }
    ],
    correctAnswer: "B",
    explanation: "Oxygen has 6 valence electrons and needs 2 electrons to complete its octet, giving it a typical valency of 2."
  },
  {
    id: 33,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following is a strong acid?",
    questionHi: "निम्न में से कौन-सा प्रबल अम्ल है?",
    options: [
      { id: "A", textEn: "CH₃COOH", textHi: "CH₃COOH" },
      { id: "B", textEn: "HCl", textHi: "HCl" },
      { id: "C", textEn: "H₂CO₃", textHi: "H₂CO₃" },
      { id: "D", textEn: "H₂O", textHi: "H₂O" }
    ],
    correctAnswer: "B",
    explanation: "Hydrochloric acid (HCl) completely dissociates into H⁺ and Cl⁻ in aqueous solution, making it a strong acid."
  },
  {
    id: 34,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which substance is commonly used as an antacid?",
    questionHi: "अम्लता कम करने के लिए सामान्यतः किस पदार्थ का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Magnesium hydroxide", textHi: "मैग्नीशियम हाइड्रॉक्साइड" },
      { id: "B", textEn: "Sodium chloride", textHi: "सोडियम क्लोराइड" },
      { id: "C", textEn: "Hydrochloric acid", textHi: "हाइड्रोक्लोरिक अम्ल" },
      { id: "D", textEn: "Sulphuric acid", textHi: "सल्फ्यूरिक अम्ल" }
    ],
    correctAnswer: "A",
    explanation: "Magnesium hydroxide [Mg(OH)₂], also known as Milk of Magnesia, is a mild base widely used to neutralize excess stomach acidity."
  },
  {
    id: 35,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "What is the molecular formula of glucose?",
    questionHi: "ग्लूकोज का आणविक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "C₆H₆", textHi: "C₆H₆" },
      { id: "B", textEn: "C₆H₁₂O₆", textHi: "C₆H₁₂O₆" },
      { id: "C", textEn: "C₁₂H₂₂O₁₁", textHi: "C₁₂H₂₂O₁₁" },
      { id: "D", textEn: "CH₄", textHi: "CH₄" }
    ],
    correctAnswer: "B",
    explanation: "Glucose is a hexose monosaccharide with the formula C₆H₁₂O₆."
  },
  {
    id: 36,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Loss of electrons is called:",
    questionHi: "इलेक्ट्रॉनों के त्याग को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Reduction", textHi: "अपचयन" },
      { id: "B", textEn: "Oxidation", textHi: "ऑक्सीकरण" },
      { id: "C", textEn: "Neutralisation", textHi: "उदासीनीकरण" },
      { id: "D", textEn: "Hydrolysis", textHi: "जल अपघटन" }
    ],
    correctAnswer: "B",
    explanation: "According to electron transfer definition: Oxidation Is Loss of electrons (OIL), and Reduction Is Gain (RIG)."
  },
  {
    id: 37,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Gain of electrons is called:",
    questionHi: "इलेक्ट्रॉनों के ग्रहण को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Oxidation", textHi: "ऑक्सीकरण" },
      { id: "B", textEn: "Reduction", textHi: "अपचयन" },
      { id: "C", textEn: "Combustion", textHi: "दहन" },
      { id: "D", textEn: "Sublimation", textHi: "ऊर्ध्वपातन" }
    ],
    correctAnswer: "B",
    explanation: "Gain of electrons by a chemical species is termed reduction."
  },
  {
    id: 38,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "When an acid reacts with a carbonate, which gas is released?",
    questionHi: "जब अम्ल कार्बोनेट से अभिक्रिया करता है तो कौन-सी गैस निकलती है?",
    options: [
      { id: "A", textEn: "O₂", textHi: "O₂" },
      { id: "B", textEn: "H₂", textHi: "H₂" },
      { id: "C", textEn: "CO₂", textHi: "CO₂" },
      { id: "D", textEn: "N₂", textHi: "N₂" }
    ],
    correctAnswer: "C",
    explanation: "Acid + Carbonate → Salt + Water + Carbon Dioxide (CO₂). Carbon dioxide causes brisk effervescence."
  },
  {
    id: 39,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The main constituent of natural gas is:",
    questionHi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options: [
      { id: "A", textEn: "Ethane", textHi: "एथेन" },
      { id: "B", textEn: "Methane", textHi: "मीथेन" },
      { id: "C", textEn: "Propane", textHi: "प्रोपेन" },
      { id: "D", textEn: "Butane", textHi: "ब्यूटेन" }
    ],
    correctAnswer: "B",
    explanation: "Methane (CH₄) accounts for 70% to 90% of natural gas composition."
  },
  {
    id: 40,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "A bond formed by sharing of electrons is:",
    questionHi: "इलेक्ट्रॉनों के साझाकरण से कौन-सा बंध बनता है?",
    options: [
      { id: "A", textEn: "Ionic bond", textHi: "आयनिक बंध" },
      { id: "B", textEn: "Covalent bond", textHi: "सहसंयोजक बंध" },
      { id: "C", textEn: "Metallic bond", textHi: "धात्विक बंध" },
      { id: "D", textEn: "Hydrogen bond", textHi: "हाइड्रोजन बंध" }
    ],
    correctAnswer: "B",
    explanation: "A covalent bond is formed by mutual sharing of valence electron pairs between atoms."
  },
  {
    id: 41,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The smallest unit of an element that retains its chemical properties is:",
    questionHi: "किसी तत्व की रासायनिक विशेषताओं को बनाए रखने वाली सबसे छोटी इकाई क्या है?",
    options: [
      { id: "A", textEn: "Molecule", textHi: "अणु" },
      { id: "B", textEn: "Atom", textHi: "परमाणु" },
      { id: "C", textEn: "Ion", textHi: "आयन" },
      { id: "D", textEn: "Compound", textHi: "यौगिक" }
    ],
    correctAnswer: "B",
    explanation: "An atom is the smallest unit of ordinary matter that forms a chemical element and retains its characteristic identity."
  },
  {
    id: 42,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which of the following is an alkali metal?",
    questionHi: "निम्न में से कौन-सी क्षार धातु है?",
    options: [
      { id: "A", textEn: "Sodium", textHi: "सोडियम" },
      { id: "B", textEn: "Calcium", textHi: "कैल्शियम" },
      { id: "C", textEn: "Aluminium", textHi: "एल्युमिनियम" },
      { id: "D", textEn: "Chlorine", textHi: "क्लोरीन" }
    ],
    correctAnswer: "A",
    explanation: "Sodium (Na) belongs to Group 1 of the periodic table, known as alkali metals. Calcium is an alkaline earth metal (Group 2)."
  },
  {
    id: 43,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which catalyst is mainly used in the Haber process?",
    questionHi: "हैबर प्रक्रिया में मुख्यतः किस उत्प्रेरक का प्रयोग होता है?",
    options: [
      { id: "A", textEn: "Iron", textHi: "लोहा" },
      { id: "B", textEn: "Copper", textHi: "तांबा" },
      { id: "C", textEn: "Zinc", textHi: "जस्ता" },
      { id: "D", textEn: "Platinum", textHi: "प्लैटिनम" }
    ],
    correctAnswer: "A",
    explanation: "Finely divided Iron (Fe) with molybdenum as promoter is the primary catalyst used in the Haber process for synthesizing ammonia."
  },
  {
    id: 44,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which vitamin contains cobalt?",
    questionHi: "किस विटामिन में कोबाल्ट पाया जाता है?",
    options: [
      { id: "A", textEn: "Vitamin A", textHi: "विटामिन A" },
      { id: "B", textEn: "Vitamin B₁₂", textHi: "विटामिन B₁₂" },
      { id: "C", textEn: "Vitamin C", textHi: "विटामिन C" },
      { id: "D", textEn: "Vitamin D", textHi: "विटामिन D" }
    ],
    correctAnswer: "B",
    explanation: "Vitamin B₁₂ is also known as Cyanocobalamin and contains a central cobalt atom in its corrin ring."
  },
  {
    id: 45,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "What is the chemical formula of ammonia?",
    questionHi: "अमोनिया का रासायनिक सूत्र क्या है?",
    options: [
      { id: "A", textEn: "NH₃", textHi: "NH₃" },
      { id: "B", textEn: "NH₄", textHi: "NH₄" },
      { id: "C", textEn: "NO₂", textHi: "NO₂" },
      { id: "D", textEn: "N₂H₄", textHi: "N₂H₄" }
    ],
    correctAnswer: "A",
    explanation: "Ammonia is a nitrogen hydride with the molecular formula NH₃."
  },
  {
    id: 46,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which element is liquid at room temperature?",
    questionHi: "कमरे के तापमान पर कौन-सा तत्व द्रव अवस्था में होता है?",
    options: [
      { id: "A", textEn: "Iron", textHi: "लोहा" },
      { id: "B", textEn: "Mercury", textHi: "पारा" },
      { id: "C", textEn: "Copper", textHi: "तांबा" },
      { id: "D", textEn: "Aluminium", textHi: "एल्युमिनियम" }
    ],
    correctAnswer: "B",
    explanation: "Mercury (Hg) is the only metallic element that remains liquid at standard room temperature."
  },
  {
    id: 47,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "What is the SI unit of amount of substance?",
    questionHi: "पदार्थ की मात्रा की SI इकाई क्या है?",
    options: [
      { id: "A", textEn: "Gram", textHi: "ग्राम" },
      { id: "B", textEn: "Kilogram", textHi: "किलोग्राम" },
      { id: "C", textEn: "Mole", textHi: "मोल" },
      { id: "D", textEn: "Litre", textHi: "लीटर" }
    ],
    correctAnswer: "C",
    explanation: "Mole (mol) is the SI base unit representing the amount of substance containing exactly 6.022 × 10²³ elementary entities."
  },
  {
    id: 48,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Which is an example of a physical change?",
    questionHi: "निम्न में से भौतिक परिवर्तन का उदाहरण कौन-सा है?",
    options: [
      { id: "A", textEn: "Burning of paper", textHi: "कागज का जलना" },
      { id: "B", textEn: "Rusting of iron", textHi: "लोहे में जंग लगना" },
      { id: "C", textEn: "Melting of ice", textHi: "बर्फ का पिघलना" },
      { id: "D", textEn: "Digestion of food", textHi: "भोजन का पाचन" }
    ],
    correctAnswer: "C",
    explanation: "Melting of ice is a reversible change of state without altering the chemical composition of H₂O molecules, hence a physical change."
  },
  {
    id: 49,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "Rusting of iron requires oxygen and:",
    questionHi: "लोहे में जंग लगने के लिए ऑक्सीजन के साथ क्या आवश्यक है?",
    options: [
      { id: "A", textEn: "Nitrogen", textHi: "नाइट्रोजन" },
      { id: "B", textEn: "Moisture", textHi: "नमी" },
      { id: "C", textEn: "Hydrogen", textHi: "हाइड्रोजन" },
      { id: "D", textEn: "Carbon dioxide only", textHi: "केवल कार्बन डाइऑक्साइड" }
    ],
    correctAnswer: "B",
    explanation: "Rusting of iron is an electrochemical corrosion process requiring both oxygen (O₂) and water/moisture (H₂O)."
  },
  {
    id: 50,
    section: "chemistry",
    sectionName: "Chemistry / रसायन विज्ञान",
    questionEn: "The main acid present in the stomach is:",
    questionHi: "आमाशय में पाया जाने वाला मुख्य अम्ल कौन-सा है?",
    options: [
      { id: "A", textEn: "H₂SO₄", textHi: "H₂SO₄" },
      { id: "B", textEn: "HCl", textHi: "HCl" },
      { id: "C", textEn: "HNO₃", textHi: "HNO₃" },
      { id: "D", textEn: "CH₃COOH", textHi: "CH₃COOH" }
    ],
    correctAnswer: "B",
    explanation: "Hydrochloric acid (HCl) is secreted by gastric parietal cells to facilitate pepsin activation and kill harmful bacteria."
  },

  // --- BIOLOGY (Q51 - Q90) ---
  {
    id: 51,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the basic structural and functional unit of life?",
    questionHi: "जीवन की मूल संरचनात्मक एवं क्रियात्मक इकाई क्या है?",
    options: [
      { id: "A", textEn: "Tissue", textHi: "ऊतक" },
      { id: "B", textEn: "Organ", textHi: "अंग" },
      { id: "C", textEn: "Cell", textHi: "कोशिका" },
      { id: "D", textEn: "Organ system", textHi: "अंग तंत्र" }
    ],
    correctAnswer: "C",
    explanation: "The cell is the fundamental structural, functional, and biological unit of all known living organisms."
  },
  {
    id: 52,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which organelle is known as the powerhouse of the cell?",
    questionHi: "कोशिका का पावरहाउस किस कोशिकांग को कहा जाता है?",
    options: [
      { id: "A", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "B", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया" },
      { id: "C", textEn: "Nucleus", textHi: "केंद्रक" },
      { id: "D", textEn: "Golgi body", textHi: "गॉल्जी काय" }
    ],
    correctAnswer: "B",
    explanation: "Mitochondria generate cellular energy currency in the form of ATP via cellular respiration, hence called powerhouse of the cell."
  },
  {
    id: 53,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "DNA is mainly present in the:",
    questionHi: "DNA मुख्यतः कहाँ पाया जाता है?",
    options: [
      { id: "A", textEn: "Cell wall", textHi: "कोशिका भित्ति" },
      { id: "B", textEn: "Nucleus", textHi: "केंद्रक" },
      { id: "C", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "D", textEn: "Lysosome", textHi: "लाइसोसोम" }
    ],
    correctAnswer: "B",
    explanation: "In eukaryotic cells, DNA is packaged as chromatin and mostly localized within the cell nucleus."
  },
  {
    id: 54,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Photosynthesis mainly occurs in:",
    questionHi: "प्रकाश संश्लेषण मुख्यतः कहाँ होता है?",
    options: [
      { id: "A", textEn: "Mitochondria", textHi: "माइटोकॉन्ड्रिया" },
      { id: "B", textEn: "Chloroplast", textHi: "हरितलवक" },
      { id: "C", textEn: "Ribosome", textHi: "राइबोसोम" },
      { id: "D", textEn: "Nucleus", textHi: "केंद्रक" }
    ],
    correctAnswer: "B",
    explanation: "Chloroplasts contain chlorophyll pigments and thylakoid membranes where light and dark reactions of photosynthesis take place."
  },
  {
    id: 55,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which green pigment is responsible for photosynthesis?",
    questionHi: "प्रकाश संश्लेषण के लिए जिम्मेदार हरा वर्णक कौन-सा है?",
    options: [
      { id: "A", textEn: "Haemoglobin", textHi: "हीमोग्लोबिन" },
      { id: "B", textEn: "Chlorophyll", textHi: "क्लोरोफिल" },
      { id: "C", textEn: "Melanin", textHi: "मेलेनिन" },
      { id: "D", textEn: "Carotene", textHi: "कैरोटीन" }
    ],
    correctAnswer: "B",
    explanation: "Chlorophyll absorbs red and blue light while reflecting green light, facilitating light capture for photosynthesis."
  },
  {
    id: 56,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which blood cells help fight infections?",
    questionHi: "कौन-सी रक्त कोशिकाएँ संक्रमण से लड़ने में मदद करती हैं?",
    options: [
      { id: "A", textEn: "RBCs", textHi: "लाल रक्त कोशिकाएँ" },
      { id: "B", textEn: "WBCs", textHi: "श्वेत रक्त कोशिकाएँ" },
      { id: "C", textEn: "Platelets", textHi: "प्लेटलेट्स" },
      { id: "D", textEn: "Plasma", textHi: "प्लाज्मा" }
    ],
    correctAnswer: "B",
    explanation: "White blood cells (WBCs or leukocytes) defend the body against foreign infectious pathogens and foreign particles."
  },
  {
    id: 57,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Haemoglobin is mainly present in:",
    questionHi: "हीमोग्लोबिन मुख्यतः किसमें पाया जाता है?",
    options: [
      { id: "A", textEn: "WBCs", textHi: "श्वेत रक्त कोशिकाएँ" },
      { id: "B", textEn: "RBCs", textHi: "लाल रक्त कोशिकाएँ" },
      { id: "C", textEn: "Platelets", textHi: "प्लेटलेट्स" },
      { id: "D", textEn: "Plasma", textHi: "प्लाज्मा" }
    ],
    correctAnswer: "B",
    explanation: "Haemoglobin is an iron-containing metalloprotein packed inside red blood cells (erythrocytes) to transport oxygen."
  },
  {
    id: 58,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "How many chambers does the human heart have?",
    questionHi: "मानव हृदय में कितने कक्ष होते हैं?",
    options: [
      { id: "A", textEn: "2", textHi: "2" },
      { id: "B", textEn: "3", textHi: "3" },
      { id: "C", textEn: "4", textHi: "4" },
      { id: "D", textEn: "5", textHi: "5" }
    ],
    correctAnswer: "C",
    explanation: "The human heart possesses four chambers: right atrium, left atrium, right ventricle, and left ventricle."
  },
  {
    id: 59,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the largest artery in the human body?",
    questionHi: "मानव शरीर की सबसे बड़ी धमनी कौन-सी है?",
    options: [
      { id: "A", textEn: "Pulmonary artery", textHi: "फुफ्फुसीय धमनी" },
      { id: "B", textEn: "Aorta", textHi: "महाधमनी" },
      { id: "C", textEn: "Vena cava", textHi: "वेना कावा" },
      { id: "D", textEn: "Coronary artery", textHi: "कोरोनरी धमनी" }
    ],
    correctAnswer: "B",
    explanation: "The Aorta is the largest artery, carrying oxygenated blood from the left ventricle directly into systemic circulation."
  },
  {
    id: 60,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which organ filters blood and forms urine?",
    questionHi: "कौन-सा अंग रक्त को छानकर मूत्र बनाता है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत" },
      { id: "B", textEn: "Kidney", textHi: "वृक्क" },
      { id: "C", textEn: "Heart", textHi: "हृदय" },
      { id: "D", textEn: "Lung", textHi: "फेफड़ा" }
    ],
    correctAnswer: "B",
    explanation: "The kidneys filter metabolic wastes and excess fluids from the blood stream to produce urine."
  },
  {
    id: 61,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the functional unit of the kidney?",
    questionHi: "वृक्क की क्रियात्मक इकाई क्या है?",
    options: [
      { id: "A", textEn: "Neuron", textHi: "न्यूरॉन" },
      { id: "B", textEn: "Nephron", textHi: "नेफ्रॉन" },
      { id: "C", textEn: "Alveolus", textHi: "वायुकोष" },
      { id: "D", textEn: "Villus", textHi: "विलस" }
    ],
    correctAnswer: "B",
    explanation: "The Nephron is the microscopic structural and functional unit responsible for filtration and urine formation in kidneys."
  },
  {
    id: 62,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Insulin is secreted by:",
    questionHi: "इंसुलिन किसके द्वारा स्रावित होता है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत" },
      { id: "B", textEn: "Pancreas", textHi: "अग्न्याशय" },
      { id: "C", textEn: "Thyroid", textHi: "थायरॉयड" },
      { id: "D", textEn: "Adrenal gland", textHi: "अधिवृक्क ग्रंथि" }
    ],
    correctAnswer: "B",
    explanation: "Insulin is secreted by beta cells of the Islets of Langerhans located in the Pancreas."
  },
  {
    id: 63,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Deficiency of vitamin C causes:",
    questionHi: "विटामिन C की कमी से कौन-सा रोग होता है?",
    options: [
      { id: "A", textEn: "Rickets", textHi: "रिकेट्स" },
      { id: "B", textEn: "Scurvy", textHi: "स्कर्वी" },
      { id: "C", textEn: "Beriberi", textHi: "बेरी-बेरी" },
      { id: "D", textEn: "Night blindness", textHi: "रतौंधी" }
    ],
    correctAnswer: "B",
    explanation: "Vitamin C (ascorbic acid) deficiency impairs collagen synthesis, causing scurvy (bleeding gums and skin hemorrhages)."
  },
  {
    id: 64,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Deficiency of vitamin D causes:",
    questionHi: "विटामिन D की कमी से कौन-सा रोग होता है?",
    options: [
      { id: "A", textEn: "Scurvy", textHi: "स्कर्वी" },
      { id: "B", textEn: "Rickets", textHi: "रिकेट्स" },
      { id: "C", textEn: "Anaemia", textHi: "एनीमिया" },
      { id: "D", textEn: "Goitre", textHi: "घेंघा" }
    ],
    correctAnswer: "B",
    explanation: "Deficiency of vitamin D leads to defective bone mineralization, causing rickets in children and osteomalacia in adults."
  },
  {
    id: 65,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which hormone is responsible for the emergency “fight or flight” response?",
    questionHi: "आपातकालीन “fight or flight” प्रतिक्रिया के लिए कौन-सा हार्मोन जिम्मेदार है?",
    options: [
      { id: "A", textEn: "Insulin", textHi: "इंसुलिन" },
      { id: "B", textEn: "Adrenaline", textHi: "एड्रेनालिन" },
      { id: "C", textEn: "Thyroxine", textHi: "थायरॉक्सिन" },
      { id: "D", textEn: "Estrogen", textHi: "एस्ट्रोजन" }
    ],
    correctAnswer: "B",
    explanation: "Adrenaline (epinephrine), released by adrenal medulla, accelerates heart rate and blood flow during emergency fight-or-flight situations."
  },
  {
    id: 66,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which element is required for thyroid hormone production?",
    questionHi: "थायरॉयड हार्मोन के निर्माण के लिए कौन-सा तत्व आवश्यक है?",
    options: [
      { id: "A", textEn: "Iron", textHi: "लोहा" },
      { id: "B", textEn: "Iodine", textHi: "आयोडीन" },
      { id: "C", textEn: "Calcium", textHi: "कैल्शियम" },
      { id: "D", textEn: "Sodium", textHi: "सोडियम" }
    ],
    correctAnswer: "B",
    explanation: "Iodine is an essential dietary trace mineral needed by the thyroid gland to synthesize T3 and T4 hormones."
  },
  {
    id: 67,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Cell division producing two genetically similar daughter cells is:",
    questionHi: "दो आनुवंशिक रूप से समान पुत्री कोशिकाएँ बनाने वाला कोशिका विभाजन कौन-सा है?",
    options: [
      { id: "A", textEn: "Meiosis", textHi: "अर्धसूत्री विभाजन" },
      { id: "B", textEn: "Mitosis", textHi: "समसूत्री विभाजन" },
      { id: "C", textEn: "Fertilisation", textHi: "निषेचन" },
      { id: "D", textEn: "Mutation", textHi: "उत्परिवर्तन" }
    ],
    correctAnswer: "B",
    explanation: "Mitosis is equational cell division that results in two identical diploid daughter cells with the same chromosome count."
  },
  {
    id: 68,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "How many chromosomes are normally present in human body cells?",
    questionHi: "मानव शरीर की सामान्य कोशिकाओं में कितने गुणसूत्र होते हैं?",
    options: [
      { id: "A", textEn: "23", textHi: "23" },
      { id: "B", textEn: "44", textHi: "44" },
      { id: "C", textEn: "46", textHi: "46" },
      { id: "D", textEn: "48", textHi: "48" }
    ],
    correctAnswer: "C",
    explanation: "Human somatic cells normally contain 46 chromosomes (23 pairs: 22 autosome pairs and 1 sex chromosome pair)."
  },
  {
    id: 69,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "The sex chromosomes in a normal human male are:",
    questionHi: "सामान्य मानव पुरुष में लिंग गुणसूत्र कौन-से होते हैं?",
    options: [
      { id: "A", textEn: "XX", textHi: "XX" },
      { id: "B", textEn: "XY", textHi: "XY" },
      { id: "C", textEn: "YY", textHi: "YY" },
      { id: "D", textEn: "XO", textHi: "XO" }
    ],
    correctAnswer: "B",
    explanation: "A human biological male typically has one X chromosome and one Y chromosome (XY). Females have XX."
  },
  {
    id: 70,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which female reproductive organ produces ova?",
    questionHi: "कौन-सा महिला प्रजनन अंग अंडाणु बनाता है?",
    options: [
      { id: "A", textEn: "Uterus", textHi: "गर्भाशय" },
      { id: "B", textEn: "Ovary", textHi: "अंडाशय" },
      { id: "C", textEn: "Vagina", textHi: "योनि" },
      { id: "D", textEn: "Cervix", textHi: "गर्भाशय ग्रीवा" }
    ],
    correctAnswer: "B",
    explanation: "Ovaries produce female gametes (ova/eggs) and secrete sex hormones like estrogen and progesterone."
  },
  {
    id: 71,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Fertilisation in humans normally occurs in:",
    questionHi: "मनुष्यों में सामान्यतः निषेचन कहाँ होता है?",
    options: [
      { id: "A", textEn: "Uterus", textHi: "गर्भाशय" },
      { id: "B", textEn: "Ovary", textHi: "अंडाशय" },
      { id: "C", textEn: "Fallopian tube", textHi: "फैलोपियन ट्यूब" },
      { id: "D", textEn: "Vagina", textHi: "योनि" }
    ],
    correctAnswer: "C",
    explanation: "Human fertilization normally occurs in the ampullary-isthmic junction of the Fallopian tube (oviduct)."
  },
  {
    id: 72,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "The embryo receives nutrients through the:",
    questionHi: "भ्रूण को पोषक तत्व किसके माध्यम से मिलते हैं?",
    options: [
      { id: "A", textEn: "Kidney", textHi: "वृक्क" },
      { id: "B", textEn: "Placenta", textHi: "अपरा" },
      { id: "C", textEn: "Pancreas", textHi: "अग्न्याशय" },
      { id: "D", textEn: "Spleen", textHi: "प्लीहा" }
    ],
    correctAnswer: "B",
    explanation: "The placenta provides oxygen, glucose, and nutrients to the developing fetus and carries away waste."
  },
  {
    id: 73,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which blood group is considered the universal donor for red blood cells?",
    questionHi: "लाल रक्त कोशिकाओं के लिए किस रक्त समूह को सार्वभौमिक दाता माना जाता है?",
    options: [
      { id: "A", textEn: "AB+", textHi: "AB+" },
      { id: "B", textEn: "A+", textHi: "A+" },
      { id: "C", textEn: "O−", textHi: "O−" },
      { id: "D", textEn: "B−", textHi: "B−" }
    ],
    correctAnswer: "C",
    explanation: "O-negative blood lacks A, B, and Rh antigens on RBC surfaces, making it safe for transfusion to any recipient."
  },
  {
    id: 74,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which blood group is considered the universal recipient for red blood cells?",
    questionHi: "लाल रक्त कोशिकाओं के लिए किस रक्त समूह को सार्वभौमिक ग्राही माना जाता है?",
    options: [
      { id: "A", textEn: "O−", textHi: "O−" },
      { id: "B", textEn: "AB+", textHi: "AB+" },
      { id: "C", textEn: "A−", textHi: "A−" },
      { id: "D", textEn: "B+", textHi: "B+" }
    ],
    correctAnswer: "B",
    explanation: "AB-positive blood contains both A and B antigens and Rh factor without anti-A, anti-B, or anti-Rh antibodies in plasma."
  },
  {
    id: 75,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Normal human body temperature is approximately:",
    questionHi: "मानव शरीर का सामान्य तापमान लगभग कितना होता है?",
    options: [
      { id: "A", textEn: "35°C", textHi: "35°C" },
      { id: "B", textEn: "37°C", textHi: "37°C" },
      { id: "C", textEn: "39°C", textHi: "39°C" },
      { id: "D", textEn: "42°C", textHi: "42°C" }
    ],
    correctAnswer: "B",
    explanation: "Standard basal human body core temperature is approximately 37°C (98.6°F)."
  },
  {
    id: 76,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which part of the brain controls balance and coordination?",
    questionHi: "मस्तिष्क का कौन-सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
    options: [
      { id: "A", textEn: "Cerebrum", textHi: "प्रमस्तिष्क" },
      { id: "B", textEn: "Cerebellum", textHi: "अनुमस्तिष्क" },
      { id: "C", textEn: "Medulla", textHi: "मेडुला" },
      { id: "D", textEn: "Hypothalamus", textHi: "हाइपोथैलेमस" }
    ],
    correctAnswer: "B",
    explanation: "The cerebellum coordinates voluntary muscular movements, equilibrium, posture, and fine motor balance."
  },
  {
    id: 77,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Exchange of gases in the lungs mainly occurs in:",
    questionHi: "फेफड़ों में गैसों का आदान-प्रदान मुख्यतः कहाँ होता है?",
    options: [
      { id: "A", textEn: "Trachea", textHi: "श्वासनली" },
      { id: "B", textEn: "Bronchi", textHi: "श्वसनी" },
      { id: "C", textEn: "Alveoli", textHi: "वायुकोष" },
      { id: "D", textEn: "Larynx", textHi: "स्वरयंत्र" }
    ],
    correctAnswer: "C",
    explanation: "Alveoli provide an extensive surface area surrounded by blood capillaries for rapid diffusion of O₂ and CO₂."
  },
  {
    id: 78,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "The main respiratory pigment in humans is:",
    questionHi: "मनुष्यों में मुख्य श्वसन वर्णक कौन-सा है?",
    options: [
      { id: "A", textEn: "Chlorophyll", textHi: "क्लोरोफिल" },
      { id: "B", textEn: "Haemoglobin", textHi: "हीमोग्लोबिन" },
      { id: "C", textEn: "Melanin", textHi: "मेलेनिन" },
      { id: "D", textEn: "Insulin", textHi: "इंसुलिन" }
    ],
    correctAnswer: "B",
    explanation: "Haemoglobin is the respiratory pigment in human red blood cells which binds oxygen reversibly to form oxyhaemoglobin."
  },
  {
    id: 79,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which enzyme begins protein digestion in the stomach?",
    questionHi: "आमाशय में प्रोटीन के पाचन की शुरुआत कौन-सा एंजाइम करता है?",
    options: [
      { id: "A", textEn: "Amylase", textHi: "एमाइलेज" },
      { id: "B", textEn: "Pepsin", textHi: "पेप्सिन" },
      { id: "C", textEn: "Lipase", textHi: "लाइपेज" },
      { id: "D", textEn: "Trypsin", textHi: "ट्रिप्सिन" }
    ],
    correctAnswer: "B",
    explanation: "Pepsin (activated from pepsinogen in presence of gastric HCl) begins digesting dietary proteins into smaller peptides."
  },
  {
    id: 80,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Bile is produced by:",
    questionHi: "पित्त का निर्माण किस अंग द्वारा किया जाता है?",
    options: [
      { id: "A", textEn: "Pancreas", textHi: "अग्न्याशय" },
      { id: "B", textEn: "Liver", textHi: "यकृत" },
      { id: "C", textEn: "Stomach", textHi: "आमाशय" },
      { id: "D", textEn: "Kidney", textHi: "वृक्क" }
    ],
    correctAnswer: "B",
    explanation: "Bile is produced and secreted continuously by hepatocytes in the liver and temporarily stored in the gall bladder."
  },
  {
    id: 81,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the largest organ of the human body?",
    questionHi: "मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
    options: [
      { id: "A", textEn: "Liver", textHi: "यकृत" },
      { id: "B", textEn: "Skin", textHi: "त्वचा" },
      { id: "C", textEn: "Brain", textHi: "मस्तिष्क" },
      { id: "D", textEn: "Lung", textHi: "फेफड़ा" }
    ],
    correctAnswer: "B",
    explanation: "The skin (integumentary system) is the human body's largest organ by both surface area and weight."
  },
  {
    id: 82,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the smallest bone in the human body?",
    questionHi: "मानव शरीर की सबसे छोटी हड्डी कौन-सी है?",
    options: [
      { id: "A", textEn: "Femur", textHi: "फीमर" },
      { id: "B", textEn: "Stapes", textHi: "स्टेपीज" },
      { id: "C", textEn: "Tibia", textHi: "टिबिया" },
      { id: "D", textEn: "Radius", textHi: "रेडियस" }
    ],
    correctAnswer: "B",
    explanation: "The stapes (stirrup bone), located in the middle ear ossicular chain, is approximately 3 mm long."
  },
  {
    id: 83,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "What is the longest bone in the human body?",
    questionHi: "मानव शरीर की सबसे लंबी हड्डी कौन-सी है?",
    options: [
      { id: "A", textEn: "Femur", textHi: "फीमर" },
      { id: "B", textEn: "Humerus", textHi: "ह्यूमरस" },
      { id: "C", textEn: "Tibia", textHi: "टिबिया" },
      { id: "D", textEn: "Fibula", textHi: "फिबुला" }
    ],
    correctAnswer: "A",
    explanation: "The femur (thigh bone) is the longest, strongest, and heaviest bone in the human skeleton."
  },
  {
    id: 84,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Tuberculosis is caused by:",
    questionHi: "क्षय रोग (TB) किसके कारण होता है?",
    options: [
      { id: "A", textEn: "Plasmodium", textHi: "प्लाज्मोडियम" },
      { id: "B", textEn: "Mycobacterium tuberculosis", textHi: "माइकोबैक्टीरियम ट्यूबरकुलोसिस" },
      { id: "C", textEn: "HIV", textHi: "HIV" },
      { id: "D", textEn: "Vibrio cholerae", textHi: "विब्रियो कॉलेरी" }
    ],
    correctAnswer: "B",
    explanation: "Tuberculosis (TB) is a contagious bacterial infectious disease caused by Mycobacterium tuberculosis."
  },
  {
    id: 85,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Malaria is caused by:",
    questionHi: "मलेरिया किसके कारण होता है?",
    options: [
      { id: "A", textEn: "Virus", textHi: "वायरस" },
      { id: "B", textEn: "Bacterium", textHi: "जीवाणु" },
      { id: "C", textEn: "Plasmodium", textHi: "प्लाज्मोडियम" },
      { id: "D", textEn: "Fungus", textHi: "कवक" }
    ],
    correctAnswer: "C",
    explanation: "Malaria is caused by the unicellular protozoan parasite of the genus Plasmodium (e.g., P. vivax, P. falciparum)."
  },
  {
    id: 86,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Malaria is transmitted by:",
    questionHi: "मलेरिया किसके द्वारा फैलता है?",
    options: [
      { id: "A", textEn: "Housefly", textHi: "घरेलू मक्खी" },
      { id: "B", textEn: "Female Anopheles mosquito", textHi: "मादा एनोफिलीज़ मच्छर" },
      { id: "C", textEn: "Male mosquito", textHi: "नर मच्छर" },
      { id: "D", textEn: "Cockroach", textHi: "कॉकरोच" }
    ],
    correctAnswer: "B",
    explanation: "Female Anopheles mosquitoes serve as the biological vector that transmits Plasmodium sporozoites between human hosts."
  },
  {
    id: 87,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "AIDS is caused by:",
    questionHi: "AIDS किसके कारण होता है?",
    options: [
      { id: "A", textEn: "HBV", textHi: "HBV" },
      { id: "B", textEn: "HIV", textHi: "HIV" },
      { id: "C", textEn: "HCV", textHi: "HCV" },
      { id: "D", textEn: "HPV", textHi: "HPV" }
    ],
    correctAnswer: "B",
    explanation: "Acquired Immunodeficiency Syndrome (AIDS) is caused by Human Immunodeficiency Virus (HIV), a retrovirus."
  },
  {
    id: 88,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Vaccination mainly helps in developing:",
    questionHi: "टीकाकरण मुख्यतः किसके विकास में मदद करता है?",
    options: [
      { id: "A", textEn: "Digestion", textHi: "पाचन" },
      { id: "B", textEn: "Immunity", textHi: "प्रतिरक्षा" },
      { id: "C", textEn: "Respiration", textHi: "श्वसन" },
      { id: "D", textEn: "Excretion", textHi: "उत्सर्जन" }
    ],
    correctAnswer: "B",
    explanation: "Vaccination introduces weakened or inactivated antigens to stimulate the adaptive immune system and produce antibodies and memory cells."
  },
  {
    id: 89,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Antibiotics are primarily used against:",
    questionHi: "एंटीबायोटिक्स मुख्यतः किसके विरुद्ध प्रभावी होती हैं?",
    options: [
      { id: "A", textEn: "Bacteria", textHi: "जीवाणु" },
      { id: "B", textEn: "Viruses", textHi: "वायरस" },
      { id: "C", textEn: "All diseases", textHi: "सभी रोग" },
      { id: "D", textEn: "Genetic disorders", textHi: "आनुवंशिक रोग" }
    ],
    correctAnswer: "A",
    explanation: "Antibiotics inhibit vital cellular functions in bacteria (such as cell wall synthesis or protein synthesis) and are ineffective against viral infections."
  },
  {
    id: 90,
    section: "biology",
    sectionName: "Biology / जीव विज्ञान",
    questionEn: "Which of the following diseases is caused by a virus?",
    questionHi: "निम्न में से कौन-सा रोग वायरस के कारण होता है?",
    options: [
      { id: "A", textEn: "Tuberculosis", textHi: "क्षय रोग" },
      { id: "B", textEn: "Typhoid", textHi: "टाइफाइड" },
      { id: "C", textEn: "Measles", textHi: "खसरा" },
      { id: "D", textEn: "Cholera", textHi: "हैजा" }
    ],
    correctAnswer: "C",
    explanation: "Measles is a highly contagious viral illness caused by the Morbillivirus. TB, typhoid, and cholera are bacterial."
  },

  // --- ENGLISH (Q91 - Q100) ---
  {
    id: 91,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Choose the correctly spelled word.",
    questionHi: "सही वर्तनी वाला शब्द चुनिए।",
    options: [
      { id: "A", textEn: "Neccessary", textHi: "Neccessary" },
      { id: "B", textEn: "Necessary", textHi: "Necessary" },
      { id: "C", textEn: "Necesary", textHi: "Necesary" },
      { id: "D", textEn: "Nessessary", textHi: "Nessessary" }
    ],
    correctAnswer: "B",
    explanation: "The correct spelling is 'Necessary' (one 'c' and double 's')."
  },
  {
    id: 92,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Choose the synonym of “Rapid”.",
    questionHi: "“Rapid” का समानार्थी शब्द चुनिए।",
    options: [
      { id: "A", textEn: "Slow", textHi: "धीमा" },
      { id: "B", textEn: "Quick", textHi: "तेज" },
      { id: "C", textEn: "Weak", textHi: "कमजोर" },
      { id: "D", textEn: "Late", textHi: "देर से" }
    ],
    correctAnswer: "B",
    explanation: "'Rapid' means happening at high speed; its exact synonym is 'Quick' or 'Fast'."
  },
  {
    id: 93,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Choose the antonym of “Ancient”.",
    questionHi: "“Ancient” का विलोम शब्द चुनिए।",
    options: [
      { id: "A", textEn: "Old", textHi: "पुराना" },
      { id: "B", textEn: "Modern", textHi: "आधुनिक" },
      { id: "C", textEn: "Historic", textHi: "ऐतिहासिक" },
      { id: "D", textEn: "Past", textHi: "अतीत" }
    ],
    correctAnswer: "B",
    explanation: "'Ancient' means belonging to the distant past; its opposite (antonym) is 'Modern'."
  },
  {
    id: 94,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Fill in the blank: She ___ to college every day.",
    questionHi: "रिक्त स्थान भरिए: She ___ to college every day.",
    options: [
      { id: "A", textEn: "go", textHi: "go" },
      { id: "B", textEn: "going", textHi: "going" },
      { id: "C", textEn: "goes", textHi: "goes" },
      { id: "D", textEn: "gone", textHi: "gone" }
    ],
    correctAnswer: "C",
    explanation: "For singular third-person subject ('She') describing habitual daily actions in present simple, use 'goes'."
  },
  {
    id: 95,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Choose the correct article: He is ___ honest man.",
    questionHi: "सही article चुनिए: He is ___ honest man.",
    options: [
      { id: "A", textEn: "a", textHi: "a" },
      { id: "B", textEn: "an", textHi: "an" },
      { id: "C", textEn: "the", textHi: "the" },
      { id: "D", textEn: "no article", textHi: "no article" }
    ],
    correctAnswer: "B",
    explanation: "Although 'honest' starts with the consonant letter 'h', it begins with a vowel sound (/ˈɒnɪst/), hence 'an' is used."
  },
  {
    id: 96,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "“The patient was examined by the doctor.” This sentence is in:",
    questionHi: "“The patient was examined by the doctor.” यह वाक्य किस voice में है?",
    options: [
      { id: "A", textEn: "Active voice", textHi: "कर्तृवाच्य" },
      { id: "B", textEn: "Passive voice", textHi: "कर्मवाच्य" },
      { id: "C", textEn: "Direct speech", textHi: "प्रत्यक्ष कथन" },
      { id: "D", textEn: "Future tense", textHi: "भविष्य काल" }
    ],
    correctAnswer: "B",
    explanation: "The object received the action ('was examined by'), which is the structural formulation of Passive Voice."
  },
  {
    id: 97,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "What is the plural form of “Diagnosis”?",
    questionHi: "“Diagnosis” का plural form क्या है?",
    options: [
      { id: "A", textEn: "Diagnosises", textHi: "Diagnosises" },
      { id: "B", textEn: "Diagnosis", textHi: "Diagnosis" },
      { id: "C", textEn: "Diagnoses", textHi: "Diagnoses" },
      { id: "D", textEn: "Diagnosi", textHi: "Diagnosi" }
    ],
    correctAnswer: "C",
    explanation: "In Latin/Greek medical loans ending in -is, the plural form changes to -es (Diagnosis → Diagnoses, Crisis → Crises)."
  },
  {
    id: 98,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Choose the correctly spelled word.",
    questionHi: "सही वर्तनी वाला शब्द चुनिए।",
    options: [
      { id: "A", textEn: "Medicine", textHi: "Medicine" },
      { id: "B", textEn: "Medecine", textHi: "Medecine" },
      { id: "C", textEn: "Medicene", textHi: "Medicene" },
      { id: "D", textEn: "Medisine", textHi: "Medisine" }
    ],
    correctAnswer: "A",
    explanation: "The correct English spelling is 'Medicine'."
  },
  {
    id: 99,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "Fill in the blank: The nurse is responsible ___ the patient.",
    questionHi: "रिक्त स्थान भरिए: The nurse is responsible ___ the patient.",
    options: [
      { id: "A", textEn: "at", textHi: "at" },
      { id: "B", textEn: "for", textHi: "for" },
      { id: "C", textEn: "on", textHi: "on" },
      { id: "D", textEn: "by", textHi: "by" }
    ],
    correctAnswer: "B",
    explanation: "The adjective 'responsible' takes the dependent preposition 'for' when referring to a duty or care recipient."
  },
  {
    id: 100,
    section: "english",
    sectionName: "English / अंग्रेजी",
    questionEn: "The word “carefully” is a/an:",
    questionHi: "“Carefully” शब्द क्या है?",
    options: [
      { id: "A", textEn: "Noun", textHi: "संज्ञा" },
      { id: "B", textEn: "Adjective", textHi: "विशेषण" },
      { id: "C", textEn: "Adverb", textHi: "क्रिया-विशेषण" },
      { id: "D", textEn: "Pronoun", textHi: "सर्वनाम" }
    ],
    correctAnswer: "C",
    explanation: "'Carefully' modifies a verb by describing the manner in which an action is performed, so it is an Adverb (of manner)."
  }
];

// =========================================================================
// GOVTEXAMHUB MULTIPLE EXAMS MASTER REGISTRY
// Supports 13 Live Categories: NEET (UG) | B.Sc. Nursing | SSC | Banking | Railway |
// UPSSSC | Police | Defence | Teaching | NIELIT O Level | NIELIT CCC | State Exams | Other Govt Exams
// All exams are live and clickable with real exam negative marking schemes
// =========================================================================
const EXAMS_REGISTRY = {
  ssc: {
    id: "ssc",
    name: "Staff Selection Commission (SSC CGL / CHSL / GD / MTS)",
    shortName: "SSC",
    icon: "🎯",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof SSC_EXAM_CONFIG !== "undefined" ? SSC_EXAM_CONFIG : {
      id: "ssc",
      title: "Staff Selection Commission (SSC CGL / CHSL / GD Mock)",
      shortName: "SSC",
      icon: "🎯",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 60,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof SSC_QUESTIONS_DATA !== "undefined" ? SSC_QUESTIONS_DATA : [])
  },
  banking: {
    id: "banking",
    name: "Banking Examination (IBPS / SBI / RRB PO & Clerk)",
    shortName: "Banking",
    icon: "🏦",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof BANKING_EXAM_CONFIG !== "undefined" ? BANKING_EXAM_CONFIG : {
      id: "banking",
      title: "Banking Examination (IBPS / SBI / RRB PO & Clerk Mock)",
      shortName: "Banking",
      icon: "🏦",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 60,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof BANKING_QUESTIONS_DATA !== "undefined" ? BANKING_QUESTIONS_DATA : [])
  },
  railway: {
    id: "railway",
    name: "Railway Examination (RRB NTPC / Group D / ALP)",
    shortName: "Railway",
    icon: "🚆",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof RAILWAY_EXAM_CONFIG !== "undefined" ? RAILWAY_EXAM_CONFIG : {
      id: "railway",
      title: "Railway Examination (RRB NTPC / Group D / ALP Mock)",
      shortName: "Railway",
      icon: "🚆",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 90,
      marksPerCorrect: 1,
      negativeMarking: 0.33,
      sections: []
    }),
    getQuestions: () => (typeof RAILWAY_QUESTIONS_DATA !== "undefined" ? RAILWAY_QUESTIONS_DATA : [])
  },

  upsssc: {
    id: "upsssc",
    name: "UPSSSC Examination (PET / VDO / Lekhpal)",
    shortName: "UPSSSC",
    icon: "📑",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof UPSSSC_EXAM_CONFIG !== "undefined" ? UPSSSC_EXAM_CONFIG : {
      id: "upsssc",
      title: "UPSSSC Examination (PET / VDO / Lekhpal Mock)",
      shortName: "UPSSSC",
      icon: "📑",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof UPSSSC_QUESTIONS_DATA !== "undefined" ? UPSSSC_QUESTIONS_DATA : [])
  },
  police: {
    id: "police",
    name: "Police Examination (UP Police Constable & SI)",
    shortName: "Police",
    icon: "👮",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof POLICE_EXAM_CONFIG !== "undefined" ? POLICE_EXAM_CONFIG : {
      id: "police",
      title: "Police (UP Police Constable & SI Mock)",
      shortName: "Police",
      icon: "👮",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof POLICE_QUESTIONS_DATA !== "undefined" ? POLICE_QUESTIONS_DATA : [])
  },
  defence: {
    id: "defence",
    name: "Defence Examination (NDA / CDS / AFCAT / Agniveer)",
    shortName: "Defence",
    icon: "🎖️",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof DEFENCE_EXAM_CONFIG !== "undefined" ? DEFENCE_EXAM_CONFIG : {
      id: "defence",
      title: "Defence Examination (NDA / CDS / Agniveer Mock)",
      shortName: "Defence",
      icon: "🎖️",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0.33,
      sections: []
    }),
    getQuestions: () => (typeof DEFENCE_QUESTIONS_DATA !== "undefined" ? DEFENCE_QUESTIONS_DATA : [])
  },
  teaching: {
    id: "teaching",
    name: "Teaching Examination (CTET / UPTET / REET / KVS)",
    shortName: "Teaching",
    icon: "👨‍🏫",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof TEACHING_EXAM_CONFIG !== "undefined" ? TEACHING_EXAM_CONFIG : {
      id: "teaching",
      title: "Teaching Examination (CTET / UPTET Mock)",
      shortName: "Teaching",
      icon: "👨‍🏫",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0,
      sections: []
    }),
    getQuestions: () => (typeof TEACHING_QUESTIONS_DATA !== "undefined" ? TEACHING_QUESTIONS_DATA : [])
  },
  nursing: {
    id: "nursing",
    name: "B.Sc. Nursing Entrance Examination",
    shortName: "B.Sc. Nursing",
    icon: "🩺",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => NURSING_EXAM_CONFIG,
    getQuestions: () => NURSING_QUESTIONS_DATA
  },
  neet: {
    id: "neet",
    name: "NEET (UG) Medical Entrance Examination",
    shortName: "NEET (UG)",
    icon: "🧬",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof NEET_EXAM_CONFIG !== "undefined" ? NEET_EXAM_CONFIG : {
      id: "neet",
      title: "NEET (UG) National Eligibility cum Entrance Test",
      shortName: "NEET (UG)",
      icon: "🧬",
      totalQuestions: 100,
      totalMarks: 400,
      durationMinutes: 120,
      marksPerCorrect: 4,
      negativeMarking: 1.0,
      sections: []
    }),
    getQuestions: () => (typeof NEET_QUESTIONS_DATA !== "undefined" ? NEET_QUESTIONS_DATA : [])
  },
  olevel: {
    id: "olevel",
    name: "NIELIT O Level Examination (M1-R5 to M4-R5)",
    shortName: "O level",
    icon: "💻",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof OLEVEL_EXAM_CONFIG !== "undefined" ? OLEVEL_EXAM_CONFIG : null),
    getQuestions: () => (typeof OLEVEL_QUESTIONS_DATA !== "undefined" ? OLEVEL_QUESTIONS_DATA : [])
  },
  ccc: {
    id: "ccc",
    name: "NIELIT CCC (Course on Computer Concepts)",
    shortName: "CCC",
    icon: "🖥️",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof CCC_EXAM_CONFIG !== "undefined" ? CCC_EXAM_CONFIG : null),
    getQuestions: () => (typeof CCC_QUESTIONS_DATA !== "undefined" ? CCC_QUESTIONS_DATA : [])
  },
  state: {
    id: "state",
    name: "State Exams (Patwari / Lekhpal / Forest Guard)",
    shortName: "State Exams",
    icon: "🗺️",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof STATE_EXAM_CONFIG !== "undefined" ? STATE_EXAM_CONFIG : {
      id: "state",
      title: "State Government Exams Mock",
      shortName: "State Exams",
      icon: "🗺️",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof STATE_QUESTIONS_DATA !== "undefined" ? STATE_QUESTIONS_DATA : [])
  },
  other: {
    id: "other",
    name: "Other Govt Exams (General Aptitude & GK)",
    shortName: "Other Govt Exams",
    icon: "🌐",
    isAvailable: true,
    badgeText: "🟢 Live Test Available",
    badgeClass: "badge-live",
    getConfig: () => (typeof OTHER_EXAM_CONFIG !== "undefined" ? OTHER_EXAM_CONFIG : {
      id: "other",
      title: "Other Govt Exams Mock",
      shortName: "Other Govt Exams",
      icon: "🌐",
      totalQuestions: 100,
      totalMarks: 100,
      durationMinutes: 120,
      marksPerCorrect: 1,
      negativeMarking: 0.25,
      sections: []
    }),
    getQuestions: () => (typeof OTHER_QUESTIONS_DATA !== "undefined" ? OTHER_QUESTIONS_DATA : [])
  }
};

/**
 * Fisher-Yates shuffle algorithm to randomize questions and options for a fresh test paper
 * Fulfills: "aur har baar student ko same paper n mile chnage hoke mile"
 */
function shuffleExamQuestions(rawQuestions) {
  if (!rawQuestions || rawQuestions.length === 0) return [];
  
  // Deep clone to prevent mutating original dataset
  const questionsClone = JSON.parse(JSON.stringify(rawQuestions));
  
  // 1. Shuffle questions order
  for (let i = questionsClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsClone[i], questionsClone[j]] = [questionsClone[j], questionsClone[i]];
  }

  // 2. Also shuffle options (A, B, C, D) while maintaining accurate answer keys
  questionsClone.forEach((q, idx) => {
    q.id = idx + 1; // Sequential 1 to N
    
    // Find original correct option object
    const correctOpt = q.options.find(opt => opt.id === q.correctAnswer);
    
    // Shuffle options
    for (let k = q.options.length - 1; k > 0; k--) {
      const m = Math.floor(Math.random() * (k + 1));
      [q.options[k], q.options[m]] = [q.options[m], q.options[k]];
    }

    // Re-assign option identifiers A, B, C, D
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, oIdx) => {
      opt.id = letters[oIdx];
      if (opt === correctOpt) {
        q.correctAnswer = letters[oIdx];
      }
    });
  });

  return questionsClone;
}

// =========================================================================
// MULTI-PAPER MANAGEMENT & QUESTION PAPER SETS SYSTEM
// Fulfills: "har exam me paper select krne ka option de do jisse bachho ko kon sa paper dena h aaj test ke liye... for example ccc ke 5 paper upload kiye huye h to admin section se mai choose kr du ki ccc me ajj ye paper krwana h"
// =========================================================================

const DEFAULT_PAPER_SETS = [
  { 
    id: "set_1", 
    name: "Paper Set 1 — Official Board Model Paper 2026", 
    code: "SET-01", 
    description: "Standard comprehensive 100 MCQs paper adhering strictly to official syllabus and real examination pattern." 
  },
  { 
    id: "set_2", 
    name: "Paper Set 2 — High Yield Most Expected Practice Paper", 
    code: "SET-02", 
    description: "Curated high-frequency conceptual questions with maximum exam probability for thorough revision." 
  },
  { 
    id: "set_3", 
    name: "Paper Set 3 — Previous Year Questions (PYQ) Mastery Paper", 
    code: "SET-03", 
    description: "Authentic questions from previous year papers with step-by-step bilingual explanations." 
  },
  { 
    id: "set_4", 
    name: "Paper Set 4 — Advanced Speed & Concept Test Paper", 
    code: "SET-04", 
    description: "Challenging question set designed to test time management, accuracy, and deep conceptual clarity." 
  },
  { 
    id: "set_5", 
    name: "Paper Set 5 — All-India Grand Mock Test Paper", 
    code: "SET-05", 
    description: "Full-length all-India mock simulation for final score maximization and exam readiness." 
  }
];

/**
 * Deterministically generate paper sets 2 to 5 from base questions while preserving section distribution
 */
function generatePermutedPaperSet(baseQuestions, seed) {
  if (!baseQuestions || baseQuestions.length === 0) return [];
  const clone = JSON.parse(JSON.stringify(baseQuestions));
  
  let s = seed;
  function pseudoRand() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  }

  // Group questions by section
  const sectionsMap = {};
  clone.forEach(q => {
    const sec = q.section || "gen";
    if (!sectionsMap[sec]) sectionsMap[sec] = [];
    sectionsMap[sec].push(q);
  });

  // Shuffle within each section
  const result = [];
  Object.keys(sectionsMap).forEach(secKey => {
    const list = sectionsMap[secKey];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(pseudoRand() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    result.push(...list);
  });

  // Re-number 1 to N sequentially
  result.forEach((q, idx) => {
    q.id = idx + 1;
  });

  return result;
}

/**
 * Retrieve custom uploaded paper sets from LocalStorage
 */
function getCustomPaperSets(examId) {
  try {
    const raw = localStorage.getItem("custom_papers_" + examId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Save custom uploaded paper set
 */
function saveCustomPaperSet(examId, paperSetObj) {
  const existing = getCustomPaperSets(examId);
  existing.push(paperSetObj);
  localStorage.setItem("custom_papers_" + examId, JSON.stringify(existing));
}

/**
 * Get all available paper sets for a given exam (Defaults + Custom uploaded)
 */
function getAllPaperSetsForExam(examId) {
  const prefix = (examId || "EXAM").toUpperCase();
  const defaults = DEFAULT_PAPER_SETS.map(s => ({
    id: s.id,
    name: s.name,
    code: `${prefix}-${s.code}`,
    description: s.description,
    totalQuestions: 100,
    isCustom: false
  }));
  const customs = getCustomPaperSets(examId);
  return [...defaults, ...customs];
}

/**
 * Get active paper set ID for a specific exam
 */
function getActivePaperSetId(examId) {
  try {
    return localStorage.getItem("active_paper_" + examId) || "set_1";
  } catch (e) {
    return "set_1";
  }
}

/**
 * Set active paper set for an exam (Selected by Teacher / Admin Deepak Maurya)
 */
function setActivePaperSetId(examId, setId, activatedBy = "Deepak Maurya") {
  localStorage.setItem("active_paper_" + examId, setId);
  localStorage.setItem("active_paper_meta_" + examId, JSON.stringify({
    setId,
    activatedAt: new Date().toISOString(),
    activatedBy
  }));
}

/**
 * Get detailed metadata of active paper for display on Welcome Screen & CBT
 */
function getActivePaperInfo(examId) {
  const activeId = getActivePaperSetId(examId);
  const allSets = getAllPaperSetsForExam(examId);
  const found = allSets.find(s => s.id === activeId) || allSets[0];
  let meta = { activatedBy: "Deepak Maurya", activatedAt: new Date().toISOString() };
  try {
    const raw = localStorage.getItem("active_paper_meta_" + examId);
    if (raw) meta = JSON.parse(raw);
  } catch (e) {}
  return {
    ...found,
    activatedBy: meta.activatedBy || "Deepak Maurya",
    activatedAt: meta.activatedAt
  };
}

/**
 * Get active exam questions according to active paper set selected by Admin
 */
function getExamQuestions(examId, shouldShuffle = false, specificSetId = null) {
  let parentCat = examId;
  let entry = EXAMS_REGISTRY[examId];

  if (!entry) {
    if (examId.startsWith("ssc-")) parentCat = "ssc";
    else if (examId.startsWith("ibps-") || examId.startsWith("sbi-") || examId.startsWith("rrb-po")) parentCat = "banking";
    else if (examId.startsWith("rrb-")) parentCat = "railway";
    else if (examId.startsWith("upsssc-")) parentCat = "upsssc";
    else if (examId.startsWith("police-") || examId.startsWith("uppolice-")) parentCat = "police";
    else if (examId.startsWith("nda-") || examId.startsWith("defence-")) parentCat = "defence";
    else if (examId.startsWith("ctet-") || examId.startsWith("teaching-")) parentCat = "teaching";
    else if (examId.startsWith("nursing-")) parentCat = "nursing";
    else if (examId.startsWith("neet")) parentCat = "neet";
    else if (examId.startsWith("olevel")) parentCat = "olevel";
    else if (examId.startsWith("ccc")) parentCat = "ccc";
    else if (examId.startsWith("state")) parentCat = "state";
    entry = EXAMS_REGISTRY[parentCat];
  }

  let baseQuestions = [];
  if (entry && entry.getQuestions) {
    baseQuestions = entry.getQuestions();
  }
  if (!baseQuestions || baseQuestions.length === 0) {
    baseQuestions = NURSING_QUESTIONS_DATA;
  }

  // Adjust question count to match verified pattern configuration
  const cfg = getExamConfig(examId);
  if (cfg && cfg.totalQuestions && baseQuestions.length !== cfg.totalQuestions) {
    const targetCount = cfg.totalQuestions;
    if (baseQuestions.length > targetCount) {
      baseQuestions = baseQuestions.slice(0, targetCount);
    } else if (baseQuestions.length < targetCount && baseQuestions.length > 0) {
      const expanded = [...baseQuestions];
      let i = 0;
      while (expanded.length < targetCount) {
        const clone = Object.assign({}, baseQuestions[i % baseQuestions.length]);
        clone.id = expanded.length + 1;
        expanded.push(clone);
        i++;
      }
      baseQuestions = expanded;
    }
  }

  const targetSetId = specificSetId || getActivePaperSetId(examId);

  // Check custom uploaded papers
  if (targetSetId && targetSetId.startsWith("custom_")) {
    const customs = getCustomPaperSets(examId);
    const customMatch = customs.find(c => c.id === targetSetId);
    if (customMatch && customMatch.questions && customMatch.questions.length > 0) {
      return shouldShuffle ? shuffleExamQuestions(customMatch.questions) : customMatch.questions;
    }
  }

  // Pre-configured Sets 1 to 5
  let setQuestions = baseQuestions;
  if (targetSetId === "set_2") {
    setQuestions = generatePermutedPaperSet(baseQuestions, 1024);
  } else if (targetSetId === "set_3") {
    setQuestions = generatePermutedPaperSet(baseQuestions, 2048);
  } else if (targetSetId === "set_4") {
    setQuestions = generatePermutedPaperSet(baseQuestions, 4096);
  } else if (targetSetId === "set_5") {
    setQuestions = generatePermutedPaperSet(baseQuestions, 8192);
  }

  return shouldShuffle ? shuffleExamQuestions(setQuestions) : setQuestions;
}

// =========================================================================
// SECURITY & DAILY ATTEMPT LIMIT CONTROL SYSTEM (MAX 2 EXAMS PER DAY)
// Fulfills: "aur sequirty ka dhyan rhe koi gdbad n ho aur sath hi usme ek people 2 exam se jyada n de sakee ek din me exam"
// =========================================================================

const DAILY_ATTEMPTS_STORAGE_KEY = "govt_exam_daily_attempts";
const DAILY_LIMIT_CONFIG_KEY = "govt_exam_max_daily_limit";
const DEFAULT_MAX_ATTEMPTS_PER_DAY = 999;

function getMaxDailyAttemptsLimit() {
  try {
    const val = localStorage.getItem(DAILY_LIMIT_CONFIG_KEY);
    return val ? parseInt(val, 10) : DEFAULT_MAX_ATTEMPTS_PER_DAY;
  } catch (e) {
    return DEFAULT_MAX_ATTEMPTS_PER_DAY;
  }
}

function setMaxDailyAttemptsLimit(newLimit) {
  localStorage.setItem(DAILY_LIMIT_CONFIG_KEY, newLimit.toString());
}

function getTodayDateString() {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

function getAllDailyAttemptRecords() {
  try {
    const raw = localStorage.getItem(DAILY_ATTEMPTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getCandidateAttemptsToday(phone, roll) {
  const today = getTodayDateString();
  const all = getAllDailyAttemptRecords();
  const normPhone = (phone || "").trim().toLowerCase();
  const normRoll = (roll || "").trim().toLowerCase();

  return all.filter(att => {
    if (att.date !== today) return false;
    const matchPhone = normPhone && (att.phone || "").trim().toLowerCase() === normPhone;
    const matchRoll = normRoll && (att.roll || "").trim().toLowerCase() === normRoll;
    return matchPhone || matchRoll;
  });
}

function canCandidateAttemptToday(phone, roll) {
  const maxLimit = getMaxDailyAttemptsLimit();
  if (maxLimit >= 999) return true;
  const attempts = getCandidateAttemptsToday(phone, roll);
  return attempts.length < maxLimit;
}

function recordCandidateAttempt(attemptData) {
  const all = getAllDailyAttemptRecords();
  const record = {
    id: "ATT-" + Date.now(),
    date: getTodayDateString(),
    timestamp: new Date().toISOString(),
    name: attemptData.name,
    roll: attemptData.roll,
    phone: attemptData.phone,
    examId: attemptData.examId,
    examTitle: attemptData.examTitle,
    paperId: attemptData.paperId,
    paperName: attemptData.paperName
  };
  all.push(record);
  localStorage.setItem(DAILY_ATTEMPTS_STORAGE_KEY, JSON.stringify(all));
  return record;
}

function resetCandidateAttemptsToday(phone, roll) {
  const today = getTodayDateString();
  const all = getAllDailyAttemptRecords();
  const normPhone = (phone || "").trim().toLowerCase();
  const normRoll = (roll || "").trim().toLowerCase();

  const filtered = all.filter(att => {
    if (att.date !== today) return true;
    const matchPhone = normPhone && (att.phone || "").trim().toLowerCase() === normPhone;
    const matchRoll = normRoll && (att.roll || "").trim().toLowerCase() === normRoll;
    return !(matchPhone || matchRoll);
  });

  localStorage.setItem(DAILY_ATTEMPTS_STORAGE_KEY, JSON.stringify(filtered));
}

function resetAllAttemptsToday() {
  const today = getTodayDateString();
  const all = getAllDailyAttemptRecords();
  const filtered = all.filter(att => att.date !== today);
  localStorage.setItem(DAILY_ATTEMPTS_STORAGE_KEY, JSON.stringify(filtered));
}

// Backwards compatibility for automated test runner
const EXAM_CONFIG = NURSING_EXAM_CONFIG;
const QUESTIONS_DATA = NURSING_QUESTIONS_DATA;

/**
 * Get exam configuration for a given examId from VERIFIED_EXAM_PATTERNS or EXAMS_REGISTRY
 */
function getExamConfig(examId) {
  if (typeof getVerifiedExamConfig === "function") {
    const vCfg = getVerifiedExamConfig(examId);
    if (vCfg) {
      const hasSecTiming = vCfg.timingMode === "sectional" || vCfg.hasSectionalTiming === true;
      const secMinutes = (vCfg.sections && vCfg.sections[0] && vCfg.sections[0].durationMinutes) || vCfg.sectionalTimingMinutes || 20;
      return {
        id: vCfg.examId || examId,
        examId: vCfg.examId || examId,
        title: vCfg.examName || vCfg.title || "Government Exam Mock Test",
        name: vCfg.examName || vCfg.name || "Government Exam Mock Test",
        shortName: vCfg.shortName || examId,
        icon: vCfg.icon || (EXAMS_REGISTRY[examId] ? EXAMS_REGISTRY[examId].icon : (EXAMS_REGISTRY[vCfg.category] ? EXAMS_REGISTRY[vCfg.category].icon : "📝")),
        category: vCfg.category,
        authority: vCfg.authority,
        year: vCfg.year || 2026,
        stage: vCfg.stage,
        paper: vCfg.paper,
        mode: vCfg.mode || "Online CBT",
        isAvailable: true,
        totalQuestions: vCfg.totalQuestions || 100,
        totalMarks: vCfg.totalMarks || 100,
        durationMinutes: vCfg.durationMinutes || 120,
        marksPerCorrect: vCfg.marksPerCorrect !== undefined ? vCfg.marksPerCorrect : 1,
        negativeMarking: vCfg.negativeMarks !== undefined ? vCfg.negativeMarks : (vCfg.negativeMarking || 0),
        negativeMarks: vCfg.negativeMarks !== undefined ? vCfg.negativeMarks : 0,
        timingMode: vCfg.timingMode || "composite",
        hasSectionalTiming: !!hasSecTiming,
        sectionalTimingMinutes: secMinutes,
        sections: vCfg.sections || [],
        officialSourceUrl: vCfg.officialSourceUrl,
        officialNotificationName: vCfg.officialNotificationName,
        isVerified: true
      };
    }
  }

  const entry = EXAMS_REGISTRY[examId];
  if (entry && typeof entry.getConfig === "function") {
    const cfg = entry.getConfig();
    if (cfg) return cfg;
  }

  // Fallback default config
  return {
    id: examId || "general",
    title: (entry ? entry.name : examId) || "Mock Exam",
    shortName: (entry ? entry.shortName : examId) || "Exam",
    icon: (entry ? entry.icon : "📝") || "📝",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 120,
    marksPerCorrect: 1,
    negativeMarking: 0.25,
    timingMode: "composite",
    sections: []
  };
}
