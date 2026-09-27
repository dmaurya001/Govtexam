/**
 * GovtExamHub — NIELIT O Level Examination (M1-R5 to M4-R5)
 * Official 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 */

const OLEVEL_EXAM_CONFIG = {
  id: "olevel",
  title: "NIELIT O Level Examination (M1-R5 to M4-R5)",
  shortName: "O Level",
  icon: "💻",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 90, // 90 Mins Real NIELIT Exam Duration
  marksPerCorrect: 1,
  negativeMarking: 0,
  sections: [
    { id: "m1", name: "M1-R5: IT Tools & Network Basics", start: 1, end: 25, total: 25 },
    { id: "m2", name: "M2-R5: Web Designing & Publishing", start: 26, end: 50, total: 25 },
    { id: "m3", name: "M3-R5: Python Programming", start: 51, end: 75, total: 25 },
    { id: "m4", name: "M4-R5: Internet of Things (IoT)", start: 76, end: 100, total: 25 }
  ]
};

const OLEVEL_QUESTIONS_DATA = [
  // --- M1-R5: IT TOOLS & NETWORK BASICS (Q1 - Q25) ---
  {
    id: 1,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which of the following is the default file extension of LibreOffice Writer?",
    questionHi: "LibreOffice Writer का डिफ़ॉल्ट फ़ाइल एक्सटेंशन क्या होता है?",
    options: [
      { id: "A", textEn: ".docx", textHi: ".docx" },
      { id: "B", textEn: ".odt", textHi: ".odt" },
      { id: "C", textEn: ".ods", textHi: ".ods" },
      { id: "D", textEn: ".odp", textHi: ".odp" }
    ],
    correctAnswer: "B",
    explanation: "LibreOffice Writer saves documents by default in Open Document Text (.odt) format. .ods is for Calc and .odp is for Impress."
  },
  {
    id: 2,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key for Print Preview in LibreOffice Writer / Calc?",
    questionHi: "LibreOffice Writer / Calc में प्रिंट प्रीव्यू की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + F2", textHi: "Ctrl + F2" },
      { id: "B", textEn: "Ctrl + Shift + O", textHi: "Ctrl + Shift + O" },
      { id: "C", textEn: "Ctrl + P", textHi: "Ctrl + P" },
      { id: "D", textEn: "Ctrl + Alt + P", textHi: "Ctrl + Alt + P" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + Shift + O is the shortcut for Print Preview in LibreOffice. Ctrl + P is for direct Print."
  },
  {
    id: 3,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "In LibreOffice Calc, what is the maximum number of rows in a single worksheet?",
    questionHi: "LibreOffice Calc में एक वर्कशीट में कुल पंक्तियों (Rows) की अधिकतम संख्या कितनी होती है?",
    options: [
      { id: "A", textEn: "65,536", textHi: "65,536" },
      { id: "B", textEn: "1,048,576", textHi: "1,048,576" },
      { id: "C", textEn: "16,384", textHi: "16,384" },
      { id: "D", textEn: "1,000,000", textHi: "1,000,000" }
    ],
    correctAnswer: "B",
    explanation: "LibreOffice Calc supports 1,048,576 rows and 1,024 columns (up to AMJ) in standard versions."
  },
  {
    id: 4,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which of the following is NOT an open source operating system?",
    questionHi: "निम्नलिखित में से कौन-सा ओपन सोर्स ऑपरेटिंग सिस्टम नहीं है?",
    options: [
      { id: "A", textEn: "Ubuntu Linux", textHi: "उबंटू लिनक्स" },
      { id: "B", textEn: "Fedora", textHi: "फेडोरा" },
      { id: "C", textEn: "Microsoft Windows 11", textHi: "माइक्रोसॉफ्ट विंडोज 11" },
      { id: "D", textEn: "Debian", textHi: "डेबियन" }
    ],
    correctAnswer: "C",
    explanation: "Microsoft Windows is proprietary closed-source commercial software, whereas Ubuntu, Fedora, and Debian are open-source Linux distributions."
  },
  {
    id: 5,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the full form of AEPS in digital financial services?",
    questionHi: "डिजिटल वित्तीय सेवाओं में AEPS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Aadhaar Enabled Payment System", textHi: "आधार इनेबल्ड पेमेंट सिस्टम" },
      { id: "B", textEn: "Automated Electronic Payment Service", textHi: "ऑटोमेटेड इलेक्ट्रॉनिक पेमेंट सर्विस" },
      { id: "C", textEn: "Advanced Electronic Processing System", textHi: "एडवांस्ड इलेक्ट्रॉनिक प्रोसेसिंग सिस्टम" },
      { id: "D", textEn: "Aadhaar Electronic Postal Service", textHi: "आधार इलेक्ट्रॉनिक पोस्टल सर्विस" }
    ],
    correctAnswer: "A",
    explanation: "AEPS stands for Aadhaar Enabled Payment System, developed by NPCI to allow financial transactions using Aadhaar biometric authentication."
  },
  {
    id: 6,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "In Linux OS, which command is used to display current working directory?",
    questionHi: "लिनक्स (Linux) में वर्तमान कार्यशील डायरेक्टरी देखने के लिए किस कमांड का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "cd", textHi: "cd" },
      { id: "B", textEn: "pwd", textHi: "pwd" },
      { id: "C", textEn: "ls", textHi: "ls" },
      { id: "D", textEn: "dir", textHi: "dir" }
    ],
    correctAnswer: "B",
    explanation: "'pwd' stands for 'Print Working Directory' in Unix/Linux operating systems."
  },
  {
    id: 7,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What does IPv6 address size consist of?",
    questionHi: "IPv6 पते (Address) का आकार कितना होता है?",
    options: [
      { id: "A", textEn: "32 bits", textHi: "32 बिट्स" },
      { id: "B", textEn: "64 bits", textHi: "64 बिट्स" },
      { id: "C", textEn: "128 bits", textHi: "128 बिट्स" },
      { id: "D", textEn: "256 bits", textHi: "256 बिट्स" }
    ],
    correctAnswer: "C",
    explanation: "IPv6 addresses are 128 bits in length, written as 8 groups of 4 hexadecimal digits separated by colons. IPv4 is 32 bits."
  },
  {
    id: 8,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key to insert a table in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में टेबल इन्सर्ट करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + F12", textHi: "Ctrl + F12" },
      { id: "B", textEn: "Ctrl + T", textHi: "Ctrl + T" },
      { id: "C", textEn: "Alt + T", textHi: "Alt + T" },
      { id: "D", textEn: "Shift + F12", textHi: "Shift + F12" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + F12 is used to open the Insert Table dialog box in LibreOffice Writer."
  },
  {
    id: 9,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which network topology requires a central hub or switch?",
    questionHi: "किस नेटवर्क टोपोलॉजी में एक केंद्रीय हब (Hub) या स्विच की आवश्यकता होती है?",
    options: [
      { id: "A", textEn: "Ring Topology", textHi: "रिंग टोपोलॉजी" },
      { id: "B", textEn: "Bus Topology", textHi: "बस टोपोलॉजी" },
      { id: "C", textEn: "Star Topology", textHi: "स्टार टोपोलॉजी" },
      { id: "D", textEn: "Mesh Topology", textHi: "मेश टोपोलॉजी" }
    ],
    correctAnswer: "C",
    explanation: "In Star Topology, all nodes are individually connected to a central connection point such as a hub or switch."
  },
  {
    id: 10,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the maximum zoom percentage in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में अधिकतम ज़ूम प्रतिशत कितना होता है?",
    options: [
      { id: "A", textEn: "300%", textHi: "300%" },
      { id: "B", textEn: "400%", textHi: "400%" },
      { id: "C", textEn: "500%", textHi: "500%" },
      { id: "D", textEn: "600%", textHi: "600%" }
    ],
    correctAnswer: "B",
    explanation: "In LibreOffice Calc, minimum zoom is 20% and maximum zoom is 400%. (In Writer it is 600%)."
  },
  {
    id: 11,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which of the following protocol is used for receiving emails?",
    questionHi: "निम्नलिखित में से कौन-सा प्रोटोकॉल ईमेल प्राप्त करने के लिए उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "SMTP", textHi: "SMTP" },
      { id: "B", textEn: "POP3 / IMAP", textHi: "POP3 / IMAP" },
      { id: "C", textEn: "FTP", textHi: "FTP" },
      { id: "D", textEn: "HTTP", textHi: "HTTP" }
    ],
    correctAnswer: "B",
    explanation: "POP3 (Post Office Protocol) and IMAP (Internet Message Access Protocol) are used for retrieving email messages. SMTP is used to send emails."
  },
  {
    id: 12,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key to cycle between case (Uppercase, Lowercase, Title Case) in LibreOffice?",
    questionHi: "LibreOffice में केस (अपरकेस, लोअरकेस, टाइटल केस) बदलने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Shift + F3", textHi: "Shift + F3" },
      { id: "B", textEn: "Ctrl + F3", textHi: "Ctrl + F3" },
      { id: "C", textEn: "Alt + F3", textHi: "Alt + F3" },
      { id: "D", textEn: "Ctrl + Shift + C", textHi: "Ctrl + Shift + C" }
    ],
    correctAnswer: "A",
    explanation: "Shift + F3 cycles selected text through Sentence Case, UPPERCASE, and lowercase."
  },
  {
    id: 13,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the character length limit of an OTP in general banking systems?",
    questionHi: "सामान्य बैंकिंग प्रणाली में OTP की लंबाई प्रायः कितने अंकों की होती है?",
    options: [
      { id: "A", textEn: "4 to 6 digits", textHi: "4 से 6 अंक" },
      { id: "B", textEn: "8 to 10 digits", textHi: "8 से 10 अंक" },
      { id: "C", textEn: "12 digits", textHi: "12 अंक" },
      { id: "D", textEn: "16 digits", textHi: "16 अंक" }
    ],
    correctAnswer: "A",
    explanation: "Standard banking One Time Passwords (OTP) are usually 4 to 6 numeric digits, valid for a brief interval (e.g. 5-10 minutes)."
  },
  {
    id: 14,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the port number of secure HTTP (HTTPS)?",
    questionHi: "सुरक्षित HTTP (HTTPS) का पोर्ट नंबर क्या होता है?",
    options: [
      { id: "A", textEn: "80", textHi: "80" },
      { id: "B", textEn: "443", textHi: "443" },
      { id: "C", textEn: "21", textHi: "21" },
      { id: "D", textEn: "25", textHi: "25" }
    ],
    correctAnswer: "B",
    explanation: "HTTPS uses TCP port 443 by default, whereas unencrypted HTTP uses port 80."
  },
  {
    id: 15,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "In LibreOffice Impress, which key is used to end a running slide show?",
    questionHi: "LibreOffice Impress में स्लाइड शो समाप्त करने के लिए किस कुंजी का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Esc", textHi: "Esc" },
      { id: "B", textEn: "Ctrl + Q", textHi: "Ctrl + Q" },
      { id: "C", textEn: "Backspace", textHi: "Backspace" },
      { id: "D", textEn: "Enter", textHi: "Enter" }
    ],
    correctAnswer: "A",
    explanation: "Pressing the 'Esc' (Escape) key stops an ongoing slide show immediately."
  },
  {
    id: 16,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the full form of RTGS in banking transactions?",
    questionHi: "बैंकिंग लेन-देन में RTGS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Real Time Gross Settlement", textHi: "रियल टाइम ग्रॉस सेटलमेंट" },
      { id: "B", textEn: "Rapid Transfer Guarantee System", textHi: "रैपिड ट्रांसफर गारंटी सिस्टम" },
      { id: "C", textEn: "Regular Time General Settlement", textHi: "रेगुलर टाइम जनरल सेटलमेंट" },
      { id: "D", textEn: "Real Transaction Gateway System", textHi: "रियल ट्रांजेक्शन गेटवे सिस्टम" }
    ],
    correctAnswer: "A",
    explanation: "RTGS stands for Real Time Gross Settlement, used for high-value fund transfers on an immediate real-time basis."
  },
  {
    id: 17,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which of the following is a volatile memory?",
    questionHi: "निम्नलिखित में से कौन-सी वोलाटाइल (अस्थिर) मेमोरी है?",
    options: [
      { id: "A", textEn: "ROM", textHi: "ROM" },
      { id: "B", textEn: "RAM", textHi: "RAM" },
      { id: "C", textEn: "Hard Disk", textHi: "हार्ड डिस्क" },
      { id: "D", textEn: "Flash Drive", textHi: "फ्लैश ड्राइव" }
    ],
    correctAnswer: "B",
    explanation: "RAM (Random Access Memory) is volatile because its content is lost as soon as the power supply is turned off."
  },
  {
    id: 18,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key to save a document as a new copy (Save As) in LibreOffice?",
    questionHi: "LibreOffice में 'Save As' की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F12", textHi: "F12" },
      { id: "B", textEn: "Ctrl + Shift + S", textHi: "Ctrl + Shift + S" },
      { id: "C", textEn: "Ctrl + S", textHi: "Ctrl + S" },
      { id: "D", textEn: "Alt + S", textHi: "Alt + S" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + Shift + S is used for 'Save As' in LibreOffice applications."
  },
  {
    id: 19,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the maximum file size limit for sending an attachment in Gmail without Google Drive link?",
    questionHi: "Gmail में बिना गूगल ड्राइव लिंक के सीधे अटैचमेंट भेजने की अधिकतम फ़ाइल साइज़ सीमा कितनी है?",
    options: [
      { id: "A", textEn: "10 MB", textHi: "10 MB" },
      { id: "B", textEn: "25 MB", textHi: "25 MB" },
      { id: "C", textEn: "50 MB", textHi: "50 MB" },
      { id: "D", textEn: "100 MB", textHi: "100 MB" }
    ],
    correctAnswer: "B",
    explanation: "Gmail permits direct file attachments of up to 25 MB. Larger files are sent via Google Drive links."
  },
  {
    id: 20,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which function in LibreOffice Calc is used to find the average of numbers?",
    questionHi: "LibreOffice Calc में संख्याओं का औसत ज्ञात करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "=AVG()", textHi: "=AVG()" },
      { id: "B", textEn: "=AVERAGE()", textHi: "=AVERAGE()" },
      { id: "C", textEn: "=MEAN()", textHi: "=MEAN()" },
      { id: "D", textEn: "=SUMAVG()", textHi: "=SUMAVG()" }
    ],
    correctAnswer: "B",
    explanation: "=AVERAGE(range) calculates the arithmetic mean of arguments in LibreOffice Calc."
  },
  {
    id: 21,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key to start slide show from current slide in LibreOffice Impress?",
    questionHi: "LibreOffice Impress में वर्तमान स्लाइड से स्लाइड शो शुरू करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F5", textHi: "F5" },
      { id: "B", textEn: "Shift + F5", textHi: "Shift + F5" },
      { id: "C", textEn: "Ctrl + F5", textHi: "Ctrl + F5" },
      { id: "D", textEn: "Alt + F5", textHi: "Alt + F5" }
    ],
    correctAnswer: "B",
    explanation: "F5 starts the presentation from the first slide, while Shift + F5 starts from the currently active slide."
  },
  {
    id: 22,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which of the following is an example of an input device?",
    questionHi: "निम्नलिखित में से कौन-सा इनपुट डिवाइस का उदाहरण है?",
    options: [
      { id: "A", textEn: "Monitor", textHi: "मॉनिटर" },
      { id: "B", textEn: "Plotter", textHi: "प्लॉटर" },
      { id: "C", textEn: "OMR Scanner", textHi: "OMR स्कैनर" },
      { id: "D", textEn: "Speaker", textHi: "स्पीकर" }
    ],
    correctAnswer: "C",
    explanation: "An OMR (Optical Mark Recognition) scanner reads marks on paper forms and transmits data into the computer, making it an input device."
  },
  {
    id: 23,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the full form of QR Code?",
    questionHi: "QR Code का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Quick Response Code", textHi: "क्विक रिस्पॉन्स कोड" },
      { id: "B", textEn: "Quality Record Code", textHi: "क्वालिटी रिकॉर्ड कोड" },
      { id: "C", textEn: "Quantitative Reader Code", textHi: "क्वांटिटेटिव रीडर कोड" },
      { id: "D", textEn: "Quick Register Code", textHi: "क्विक रजिस्टर कोड" }
    ],
    correctAnswer: "A",
    explanation: "QR Code stands for Quick Response Code, originally invented in 1994 by Denso Wave in Japan."
  },
  {
    id: 24,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "Which symbol must every formula begin with in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में प्रत्येक फ़ॉर्मूला किस प्रतीक से शुरू होना चाहिए?",
    options: [
      { id: "A", textEn: "#", textHi: "#" },
      { id: "B", textEn: "=", textHi: "=" },
      { id: "C", textEn: "@", textHi: "@" },
      { id: "D", textEn: "$", textHi: "$" }
    ],
    correctAnswer: "B",
    explanation: "All formulas and calculations in spreadsheet software like Calc and Excel must begin with an equal sign (=)."
  },
  {
    id: 25,
    section: "m1",
    sectionName: "M1-R5: IT Tools & Network Basics",
    questionEn: "What is the shortcut key for Spellcheck in LibreOffice?",
    questionHi: "LibreOffice में स्पेलिंग चेक करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F5", textHi: "F5" },
      { id: "B", textEn: "F7", textHi: "F7" },
      { id: "C", textEn: "Shift + F7", textHi: "Shift + F7" },
      { id: "D", textEn: "Ctrl + F7", textHi: "Ctrl + F7" }
    ],
    correctAnswer: "B",
    explanation: "F7 opens the Spelling dialog box to review and correct misspelled words in LibreOffice."
  },

  // --- M2-R5: WEB DESIGNING & PUBLISHING (Q26 - Q50) ---
  {
    id: 26,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML5 tag is used to specify a footer for a document or section?",
    questionHi: "दस्तावेज़ या अनुभाग के लिए पाद लेख (Footer) निर्दिष्ट करने के लिए किस HTML5 टैग का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<bottom>", textHi: "<bottom>" },
      { id: "B", textEn: "<footer>", textHi: "<footer>" },
      { id: "C", textEn: "<section-end>", textHi: "<section-end>" },
      { id: "D", textEn: "<foot>", textHi: "<foot>" }
    ],
    correctAnswer: "B",
    explanation: "The <footer> tag defines a footer for a document or section, typically containing copyright data, author info, or navigation links."
  },
  {
    id: 27,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which CSS property is used to change the background color of an element?",
    questionHi: "किसी तत्व का पृष्ठभूमि रंग (Background Color) बदलने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "bgcolor", textHi: "bgcolor" },
      { id: "B", textEn: "color", textHi: "color" },
      { id: "C", textEn: "background-color", textHi: "background-color" },
      { id: "D", textEn: "surface-color", textHi: "surface-color" }
    ],
    correctAnswer: "C",
    explanation: "'background-color' sets the background color of an element, while 'color' sets foreground text color."
  },
  {
    id: 28,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "In CSS Box Model, what is the space between the content and the border called?",
    questionHi: "CSS बॉक्स मॉडल में कंटेंट और बॉर्डर के बीच के खाली स्थान को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Margin", textHi: "मार्जिन (Margin)" },
      { id: "B", textEn: "Padding", textHi: "पैडिंग (Padding)" },
      { id: "C", textEn: "Outline", textHi: "आउटलाइन (Outline)" },
      { id: "D", textEn: "Gap", textHi: "गैप (Gap)" }
    ],
    correctAnswer: "B",
    explanation: "Padding is the space inside the border around the content. Margin is the transparent space outside the border."
  },
  {
    id: 29,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
    questionHi: "यदि छवि प्रदर्शित नहीं हो सकती है, तो वैकल्पिक पाठ निर्दिष्ट करने के लिए किस HTML विशेषता का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "title", textHi: "title" },
      { id: "B", textEn: "src", textHi: "src" },
      { id: "C", textEn: "alt", textHi: "alt" },
      { id: "D", textEn: "description", textHi: "description" }
    ],
    correctAnswer: "C",
    explanation: "The 'alt' attribute provides alternative text for accessibility and whenever an image fails to load."
  },
  {
    id: 30,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "How do you declare a variable with block scope in JavaScript (ES6)?",
    questionHi: "JavaScript (ES6) में ब्लॉक स्कोप वाला चर (Variable) घोषित करने के लिए किसका उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "var", textHi: "var" },
      { id: "B", textEn: "let and const", textHi: "let और const" },
      { id: "C", textEn: "define", textHi: "define" },
      { id: "D", textEn: "dim", textHi: "dim" }
    ],
    correctAnswer: "B",
    explanation: "'let' and 'const' provide block scoping in JavaScript, whereas 'var' provides function scoping."
  },
  {
    id: 31,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML element is used to define an unordered (bulleted) list?",
    questionHi: "बुलेटेड (अक्रमित) सूची परिभाषित करने के लिए किस HTML तत्व का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<ol>", textHi: "<ol>" },
      { id: "B", textEn: "<ul>", textHi: "<ul>" },
      { id: "C", textEn: "<dl>", textHi: "<dl>" },
      { id: "D", textEn: "<list>", textHi: "<list>" }
    ],
    correctAnswer: "B",
    explanation: "<ul> creates an Unordered List with bullets, while <ol> creates an Ordered List with numbers."
  },
  {
    id: 32,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What is the correct CSS syntax to select an element with id='header'?",
    questionHi: "id='header' वाले तत्व का चयन करने के लिए सही CSS सिंटैक्स क्या है?",
    options: [
      { id: "A", textEn: ".header", textHi: ".header" },
      { id: "B", textEn: "#header", textHi: "#header" },
      { id: "C", textEn: "*header", textHi: "*header" },
      { id: "D", textEn: "header::id", textHi: "header::id" }
    ],
    correctAnswer: "B",
    explanation: "The hash symbol (#) is used in CSS selectors to target elements by their ID (#header)."
  },
  {
    id: 33,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which JavaScript method is used to write directly into the browser console?",
    questionHi: "ब्राउज़र कंसोल में सीधे लॉग लिखने के लिए किस जावास्क्रिप्ट विधि का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "console.print()", textHi: "console.print()" },
      { id: "B", textEn: "console.log()", textHi: "console.log()" },
      { id: "C", textEn: "document.write()", textHi: "document.write()" },
      { id: "D", textEn: "window.alert()", textHi: "window.alert()" }
    ],
    correctAnswer: "B",
    explanation: "console.log() writes messages, objects, and diagnostic information to the browser's developer tools console."
  },
  {
    id: 34,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML5 tag is used to embed audio files in a web page?",
    questionHi: "वेब पेज में ऑडियो फ़ाइलें एम्बेड करने के लिए किस HTML5 टैग का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<sound>", textHi: "<sound>" },
      { id: "B", textEn: "<audio>", textHi: "<audio>" },
      { id: "C", textEn: "<mp3>", textHi: "<mp3>" },
      { id: "D", textEn: "<media>", textHi: "<media>" }
    ],
    correctAnswer: "B",
    explanation: "The <audio> element is standard in HTML5 for playing audio tracks on web pages with controls."
  },
  {
    id: 35,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What does the 'W3C' stand for in web standards?",
    questionHi: "वेब मानकों में 'W3C' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "World Wide Web Consortium", textHi: "वर्ल्ड वाइड वेब कंसोर्टियम" },
      { id: "B", textEn: "World Wide Web Community", textHi: "वर्ल्ड वाइड वेब कम्युनिटी" },
      { id: "C", textEn: "World Wide Web Corporation", textHi: "वर्ल्ड वाइड वेब कॉर्पोरेशन" },
      { id: "D", textEn: "Worldwide Website Council", textHi: "वर्ल्डवाइड वेबसाइट काउंसिल" }
    ],
    correctAnswer: "A",
    explanation: "W3C stands for World Wide Web Consortium, the international standards organization for the World Wide Web founded by Tim Berners-Lee."
  },
  {
    id: 36,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which CSS display value enables a flexible container for responsive layout?",
    questionHi: "रेस्पॉन्सिव लेआउट के लिए कौन-सा CSS डिस्प्ले मान लचीला कंटेनर सक्षम करता है?",
    options: [
      { id: "A", textEn: "display: block", textHi: "display: block" },
      { id: "B", textEn: "display: inline", textHi: "display: inline" },
      { id: "C", textEn: "display: flex", textHi: "display: flex" },
      { id: "D", textEn: "display: table", textHi: "display: table" }
    ],
    correctAnswer: "C",
    explanation: "'display: flex' activates the CSS Flexible Box Layout module, making alignment and distribution of items responsive and predictable."
  },
  {
    id: 37,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML attribute specifies that an input field must be filled out before submitting?",
    questionHi: "कौन-सा HTML विशेषता यह निर्दिष्ट करता है कि फॉर्म सबमिट करने से पहले इनपुट फ़ील्ड को भरना अनिवार्य है?",
    options: [
      { id: "A", textEn: "validate", textHi: "validate" },
      { id: "B", textEn: "mandatory", textHi: "mandatory" },
      { id: "C", textEn: "required", textHi: "required" },
      { id: "D", textEn: "checked", textHi: "checked" }
    ],
    correctAnswer: "C",
    explanation: "The 'required' boolean attribute specifies that an input element must contain a value before the form can be submitted."
  },
  {
    id: 38,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What is the correct way to include an external JavaScript file in an HTML document?",
    questionHi: "HTML दस्तावेज़ में बाहरी जावास्क्रिप्ट फ़ाइल को शामिल करने का सही तरीका क्या है?",
    options: [
      { id: "A", textEn: "<script href='script.js'></script>", textHi: "<script href='script.js'></script>" },
      { id: "B", textEn: "<script src='script.js'></script>", textHi: "<script src='script.js'></script>" },
      { id: "C", textEn: "<javascript link='script.js'>", textHi: "<javascript link='script.js'>" },
      { id: "D", textEn: "<link rel='script' href='script.js'>", textHi: "<link rel='script' href='script.js'>" }
    ],
    correctAnswer: "B",
    explanation: "The <script src='...'> tag with the 'src' (source) attribute is used to embed or reference external JavaScript files."
  },
  {
    id: 39,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which protocol is primarily used to upload files to a web hosting server?",
    questionHi: "वेब होस्टिंग सर्वर पर फ़ाइलें अपलोड करने के लिए मुख्य रूप से किस प्रोटोकॉल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "FTP / SFTP", textHi: "FTP / SFTP" },
      { id: "B", textEn: "SMTP", textHi: "SMTP" },
      { id: "C", textEn: "DNS", textHi: "DNS" },
      { id: "D", textEn: "DHCP", textHi: "DHCP" }
    ],
    correctAnswer: "A",
    explanation: "FTP (File Transfer Protocol) and its secure counterpart SFTP are used to transfer files between client and server over a network."
  },
  {
    id: 40,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "In CSS, what is the default position value of all HTML elements?",
    questionHi: "CSS में सभी HTML तत्वों का डिफ़ॉल्ट पोज़ीशन (position) मान क्या होता है?",
    options: [
      { id: "A", textEn: "relative", textHi: "relative" },
      { id: "B", textEn: "absolute", textHi: "absolute" },
      { id: "C", textEn: "static", textHi: "static" },
      { id: "D", textEn: "fixed", textHi: "fixed" }
    ],
    correctAnswer: "C",
    explanation: "HTML elements have 'position: static' by default, meaning they are positioned according to the normal flow of the page."
  },
  {
    id: 41,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which tag is used to create a hyperlink in HTML?",
    questionHi: "HTML में हाइपरलिंक बनाने के लिए किस टैग का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<link>", textHi: "<link>" },
      { id: "B", textEn: "<a>", textHi: "<a>" },
      { id: "C", textEn: "<href>", textHi: "<href>" },
      { id: "D", textEn: "<hyperlink>", textHi: "<hyperlink>" }
    ],
    correctAnswer: "B",
    explanation: "The <a> (anchor) tag with the 'href' attribute creates hyperlinks linking to other web pages or locations."
  },
  {
    id: 42,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which of the following is NOT a valid JavaScript data type?",
    questionHi: "निम्नलिखित में से कौन-सा एक मान्य जावास्क्रिप्ट डेटा प्रकार नहीं है?",
    options: [
      { id: "A", textEn: "Number", textHi: "Number" },
      { id: "B", textEn: "Boolean", textHi: "Boolean" },
      { id: "C", textEn: "Float", textHi: "Float" },
      { id: "D", textEn: "Undefined", textHi: "Undefined" }
    ],
    correctAnswer: "C",
    explanation: "In JavaScript, both integers and floating-point numbers are represented by the single primitive type 'Number'. 'Float' is not a separate primitive type."
  },
  {
    id: 43,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What does CSS stand for?",
    questionHi: "CSS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Cascading Style Sheets", textHi: "कास्केडिंग स्टाइल शीट्स" },
      { id: "B", textEn: "Creative Style System", textHi: "क्रिएटिव स्टाइल सिस्टम" },
      { id: "C", textEn: "Computer Styled Sheets", textHi: "कंप्यूटर स्टाइल्ड शीट्स" },
      { id: "D", textEn: "Color Style Sheets", textHi: "कलर स्टाइल शीट्स" }
    ],
    correctAnswer: "A",
    explanation: "CSS stands for Cascading Style Sheets, used to format the layout and presentation of Web pages."
  },
  {
    id: 44,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which CSS property controls the size of text?",
    questionHi: "टेक्स्ट का आकार नियंत्रित करने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "text-size", textHi: "text-size" },
      { id: "B", textEn: "font-size", textHi: "font-size" },
      { id: "C", textEn: "text-scale", textHi: "text-scale" },
      { id: "D", textEn: "font-scale", textHi: "font-scale" }
    ],
    correctAnswer: "B",
    explanation: "'font-size' sets the size of the font (e.g. 16px, 1.2rem, 100%)."
  },
  {
    id: 45,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What is the output of 'typeof NaN' in JavaScript?",
    questionHi: "जावास्क्रिप्ट में 'typeof NaN' का मान क्या होता है?",
    options: [
      { id: "A", textEn: "'undefined'", textHi: "'undefined'" },
      { id: "B", textEn: "'number'", textHi: "'number'" },
      { id: "C", textEn: "'object'", textHi: "'object'" },
      { id: "D", textEn: "'NaN'", textHi: "'NaN'" }
    ],
    correctAnswer: "B",
    explanation: "Surprisingly in JavaScript, NaN (Not-a-Number) is technically of type 'number' according to the IEEE 754 floating-point standard."
  },
  {
    id: 46,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML tag is used to create a drop-down selection list?",
    questionHi: "ड्रॉप-डाउन चयन सूची बनाने के लिए किस HTML टैग का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<select>", textHi: "<select>" },
      { id: "B", textEn: "<dropdown>", textHi: "<dropdown>" },
      { id: "C", textEn: "<list>", textHi: "<list>" },
      { id: "D", textEn: "<input type='dropdown'>", textHi: "<input type='dropdown'>" }
    ],
    correctAnswer: "A",
    explanation: "The <select> element is used to create a drop-down list containing <option> tags."
  },
  {
    id: 47,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which CSS property is used to make a web design responsive to different screen widths?",
    questionHi: "अलग-अलग स्क्रीन चौड़ाई के लिए उत्तरदायी (रेस्पॉन्सिव) डिज़ाइन बनाने के लिए किस CSS तकनीक का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "@media queries", textHi: "@media क्वेरीज़" },
      { id: "B", textEn: "@responsive", textHi: "@responsive" },
      { id: "C", textEn: "@screen", textHi: "@screen" },
      { id: "D", textEn: "@viewport", textHi: "@viewport" }
    ],
    correctAnswer: "A",
    explanation: "CSS Media Queries (@media) allow applying different style rules depending on device viewport width, resolution, and orientation."
  },
  {
    id: 48,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which HTML element is used for inserting a line break?",
    questionHi: "लाइन ब्रेक (नई पंक्ति) डालने के लिए किस HTML तत्व का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "<lb>", textHi: "<lb>" },
      { id: "B", textEn: "<break>", textHi: "<break>" },
      { id: "C", textEn: "<br>", textHi: "<br>" },
      { id: "D", textEn: "<hr>", textHi: "<hr>" }
    ],
    correctAnswer: "C",
    explanation: "The <br> empty tag inserts a single line break in text."
  },
  {
    id: 49,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "Which built-in JavaScript object is used to perform mathematical operations?",
    questionHi: "गणितीय संचालन करने के लिए किस अंतर्निहित जावास्क्रिप्ट ऑब्जेक्ट का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Arithmetic", textHi: "Arithmetic" },
      { id: "B", textEn: "Calculate", textHi: "Calculate" },
      { id: "C", textEn: "Math", textHi: "Math" },
      { id: "D", textEn: "Numbers", textHi: "Numbers" }
    ],
    correctAnswer: "C",
    explanation: "The Math object provides properties and methods for mathematical constants and functions (such as Math.PI, Math.round, Math.random)."
  },
  {
    id: 50,
    section: "m2",
    sectionName: "M2-R5: Web Designing & Publishing",
    questionEn: "What is the standard port for unencrypted HTTP traffic?",
    questionHi: "असुरक्षित HTTP ट्रैफ़िक के लिए मानक पोर्ट कौन-सा है?",
    options: [
      { id: "A", textEn: "80", textHi: "80" },
      { id: "B", textEn: "21", textHi: "21" },
      { id: "C", textEn: "25", textHi: "25" },
      { id: "D", textEn: "8080", textHi: "8080" }
    ],
    correctAnswer: "A",
    explanation: "Port 80 is the default network port assigned to World Wide Web HTTP communication."
  },

  // --- M3-R5: PYTHON PROGRAMMING (Q51 - Q75) ---
  {
    id: 51,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Who created the Python programming language in 1991?",
    questionHi: "1991 में पायथन प्रोग्रामिंग भाषा का निर्माण किसने किया था?",
    options: [
      { id: "A", textEn: "Guido van Rossum", textHi: "गुइडो वैन रोसुम" },
      { id: "B", textEn: "James Gosling", textHi: "जेम्स गोस्लिंग" },
      { id: "C", textEn: "Dennis Ritchie", textHi: "डेनिस रिची" },
      { id: "D", textEn: "Bjarne Stroustrup", textHi: "बजार्ने स्ट्राउस्ट्रुप" }
    ],
    correctAnswer: "A",
    explanation: "Python was created by Dutch programmer Guido van Rossum and first released in 1991."
  },
  {
    id: 52,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the output of the following Python expression: 9 // 2?",
    questionHi: "पायथन एक्सप्रेशन '9 // 2' का आउटपुट क्या होगा?",
    options: [
      { id: "A", textEn: "4.5", textHi: "4.5" },
      { id: "B", textEn: "4", textHi: "4" },
      { id: "C", textEn: "5", textHi: "5" },
      { id: "D", textEn: "1", textHi: "1" }
    ],
    correctAnswer: "B",
    explanation: "The '//' operator in Python is floor division, which divides and rounds down to the nearest integer (9 // 2 = 4)."
  },
  {
    id: 53,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which of the following data structures in Python is immutable?",
    questionHi: "पायथन में निम्नलिखित में से कौन-सी डेटा संरचना अपरिवर्तनीय (Immutable) है?",
    options: [
      { id: "A", textEn: "List", textHi: "List (सूची)" },
      { id: "B", textEn: "Dictionary", textHi: "Dictionary" },
      { id: "C", textEn: "Tuple", textHi: "Tuple (टुपल)" },
      { id: "D", textEn: "Set", textHi: "Set (सेट)" }
    ],
    correctAnswer: "C",
    explanation: "Tuples and Strings are immutable in Python; once created, their elements cannot be changed or re-assigned."
  },
  {
    id: 54,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which keyword is used to define a function in Python?",
    questionHi: "पायथन में फ़ंक्शन को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "func", textHi: "func" },
      { id: "B", textEn: "function", textHi: "function" },
      { id: "C", textEn: "def", textHi: "def" },
      { id: "D", textEn: "lambda", textHi: "lambda" }
    ],
    correctAnswer: "C",
    explanation: "The 'def' keyword is used to declare and define a user function in Python syntax."
  },
  {
    id: 55,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the output of print('Hello'*3) in Python?",
    questionHi: "पायथन में print('Hello'*3) का आउटपुट क्या होगा?",
    options: [
      { id: "A", textEn: "Hello Hello Hello", textHi: "Hello Hello Hello" },
      { id: "B", textEn: "Hello*3", textHi: "Hello*3" },
      { id: "C", textEn: "HelloHelloHello", textHi: "HelloHelloHello" },
      { id: "D", textEn: "TypeError", textHi: "TypeError" }
    ],
    correctAnswer: "C",
    explanation: "In Python, the '*' operator on a string performs string repetition, repeating 'Hello' three times consecutively without spaces."
  },
  {
    id: 56,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which function is used to take user input from the console in Python 3?",
    questionHi: "पायथन 3 में कंसोल से यूज़र इनपुट लेने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "raw_input()", textHi: "raw_input()" },
      { id: "B", textEn: "input()", textHi: "input()" },
      { id: "C", textEn: "scanf()", textHi: "scanf()" },
      { id: "D", textEn: "cin", textHi: "cin" }
    ],
    correctAnswer: "B",
    explanation: "'input()' is the standard built-in function to read a line of text from standard input in Python 3."
  },
  {
    id: 57,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the file extension of a compiled Python bytecode file?",
    questionHi: "कंपाइल्ड पायथन बाइटकोड फ़ाइल का फ़ाइल एक्सटेंशन क्या होता है?",
    options: [
      { id: "A", textEn: ".py", textHi: ".py" },
      { id: "B", textEn: ".pyc", textHi: ".pyc" },
      { id: "C", textEn: ".python", textHi: ".python" },
      { id: "D", textEn: ".pyd", textHi: ".pyd" }
    ],
    correctAnswer: "B",
    explanation: ".pyc files contain compiled bytecode generated by the Python interpreter to speed up loading of modules."
  },
  {
    id: 58,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What will be the output of: bool('') in Python?",
    questionHi: "पायथन में bool('') का आउटपुट क्या होगा?",
    options: [
      { id: "A", textEn: "True", textHi: "True" },
      { id: "B", textEn: "False", textHi: "False" },
      { id: "C", textEn: "None", textHi: "None" },
      { id: "D", textEn: "Error", textHi: "Error" }
    ],
    correctAnswer: "B",
    explanation: "An empty string ('') evaluates to falsy in Python boolean context, returning False."
  },
  {
    id: 59,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which Python package is predominantly used for numerical computing and multi-dimensional arrays?",
    questionHi: "संख्यात्मक कंप्यूटिंग और बहु-आयामी सरणियों के लिए मुख्य रूप से किस पायथन पैकेज का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "NumPy", textHi: "NumPy" },
      { id: "B", textEn: "Django", textHi: "Django" },
      { id: "C", textEn: "Flask", textHi: "Flask" },
      { id: "D", textEn: "Tkinter", textHi: "Tkinter" }
    ],
    correctAnswer: "A",
    explanation: "NumPy (Numerical Python) provides support for high-performance multi-dimensional arrays and mathematical functions."
  },
  {
    id: 60,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is an anonymous one-line function called in Python?",
    questionHi: "पायथन में एक पंक्ति वाले अनाम (Anonymous) फ़ंक्शन को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Inline function", textHi: "इनलाइन फ़ंक्शन" },
      { id: "B", textEn: "Lambda function", textHi: "लैम्ब्डा फ़ंक्शन (Lambda)" },
      { id: "C", textEn: "Virtual function", textHi: "वर्चुअल फ़ंक्शन" },
      { id: "D", textEn: "Macro", textHi: "मैक्रो" }
    ],
    correctAnswer: "B",
    explanation: "Lambda functions in Python are small anonymous functions created with the 'lambda' keyword without a 'def' name."
  },
  {
    id: 61,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which method is used to add an item to the end of a list in Python?",
    questionHi: "पायथन में किसी सूची के अंत में आइटम जोड़ने के लिए किस विधि का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "list.add()", textHi: "list.add()" },
      { id: "B", textEn: "list.append()", textHi: "list.append()" },
      { id: "C", textEn: "list.insert()", textHi: "list.insert()" },
      { id: "D", textEn: "list.push()", textHi: "list.push()" }
    ],
    correctAnswer: "B",
    explanation: "'append()' adds a single element to the end of an existing list."
  },
  {
    id: 62,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What character is used for single line comments in Python?",
    questionHi: "पायथन में एकल पंक्ति टिप्पणी (Single Line Comment) के लिए किस प्रतीक का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "//", textHi: "//" },
      { id: "B", textEn: "/*", textHi: "/*" },
      { id: "C", textEn: "#", textHi: "#" },
      { id: "D", textEn: "--", textHi: "--" }
    ],
    correctAnswer: "C",
    explanation: "In Python, the hash symbol (#) marks the start of a single-line comment."
  },
  {
    id: 63,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What will list(range(1, 6)) return in Python?",
    questionHi: "पायथन में list(range(1, 6)) क्या परिणाम देगा?",
    options: [
      { id: "A", textEn: "[1, 2, 3, 4, 5, 6]", textHi: "[1, 2, 3, 4, 5, 6]" },
      { id: "B", textEn: "[1, 2, 3, 4, 5]", textHi: "[1, 2, 3, 4, 5]" },
      { id: "C", textEn: "[0, 1, 2, 3, 4, 5]", textHi: "[0, 1, 2, 3, 4, 5]" },
      { id: "D", textEn: "[2, 3, 4, 5, 6]", textHi: "[2, 3, 4, 5, 6]" }
    ],
    correctAnswer: "B",
    explanation: "range(start, stop) generates numbers starting from 'start' up to 'stop - 1', so range(1, 6) produces [1, 2, 3, 4, 5]."
  },
  {
    id: 64,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which file mode is used to open a file for writing without truncating existing content (append mode)?",
    questionHi: "मौजूदा सामग्री को मिटाए बिना फ़ाइल में लिखने (जोड़ने) के लिए किस मोड का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "'r'", textHi: "'r'" },
      { id: "B", textEn: "'w'", textHi: "'w'" },
      { id: "C", textEn: "'a'", textHi: "'a'" },
      { id: "D", textEn: "'x'", textHi: "'x'" }
    ],
    correctAnswer: "C",
    explanation: "Mode 'a' (append) opens a file for writing, placing the file handle at the end so existing data is not overwritten."
  },
  {
    id: 65,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the return type of len() function in Python?",
    questionHi: "पायथन में len() फ़ंक्शन का रिटर्न प्रकार क्या होता है?",
    options: [
      { id: "A", textEn: "float", textHi: "float" },
      { id: "B", textEn: "int", textHi: "int" },
      { id: "C", textEn: "str", textHi: "str" },
      { id: "D", textEn: "bool", textHi: "bool" }
    ],
    correctAnswer: "B",
    explanation: "len() always returns an integer (int) representing the number of items in a container or string length."
  },
  {
    id: 66,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "In Python, which statement is used to terminate a loop prematurely?",
    questionHi: "पायथन में किसी लूप को समय से पहले समाप्त करने के लिए किस स्टेटमेंट का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "continue", textHi: "continue" },
      { id: "B", textEn: "break", textHi: "break" },
      { id: "C", textEn: "exit", textHi: "exit" },
      { id: "D", textEn: "pass", textHi: "pass" }
    ],
    correctAnswer: "B",
    explanation: "'break' exits immediately from the innermost enclosing 'for' or 'while' loop."
  },
  {
    id: 67,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "How are dictionary key-value pairs separated in Python?",
    questionHi: "पायथन में डिक्शनरी के की-वैल्यू (Key-Value) जोड़ों को किससे अलग किया जाता है?",
    options: [
      { id: "A", textEn: "Colon (:)", textHi: "कोलन (:)" },
      { id: "B", textEn: "Semicolon (;)", textHi: "सेमीकोलन (;)" },
      { id: "C", textEn: "Hyphen (-)", textHi: "हाइफ़न (-)" },
      { id: "D", textEn: "Equal (=)", textHi: "बराबर (=)" }
    ],
    correctAnswer: "A",
    explanation: "A colon (:) separates each key from its associated value in dictionary syntax: {key: value}."
  },
  {
    id: 68,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the purpose of the 'pass' statement in Python?",
    questionHi: "पायथन में 'pass' स्टेटमेंट का क्या उद्देश्य है?",
    options: [
      { id: "A", textEn: "To skip the current loop cycle", textHi: "वर्तमान लूप चक्र को छोड़ना" },
      { id: "B", textEn: "A null operation placeholder where code is syntactically required", textHi: "एक नल ऑपरेशन प्लेसहोल्डर जहाँ कोड सिंटैक्स के लिए आवश्यक हो" },
      { id: "C", textEn: "To return a value from function", textHi: "फ़ंक्शन से मान वापस करना" },
      { id: "D", textEn: "To throw an exception", textHi: "अपवाद (Exception) उत्पन्न करना" }
    ],
    correctAnswer: "B",
    explanation: "'pass' is a null statement; nothing happens when it executes. It acts as a syntactic placeholder."
  },
  {
    id: 69,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is the output of 2 ** 3 in Python?",
    questionHi: "पायथन में 2 ** 3 का आउटपुट क्या है?",
    options: [
      { id: "A", textEn: "6", textHi: "6" },
      { id: "B", textEn: "8", textHi: "8" },
      { id: "C", textEn: "9", textHi: "9" },
      { id: "D", textEn: "5", textHi: "5" }
    ],
    correctAnswer: "B",
    explanation: "The '**' operator represents exponentiation in Python: 2 raised to the power 3 equals 8."
  },
  {
    id: 70,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which built-in module provides pseudo-random number generators in Python?",
    questionHi: "पायथन में स्यूडो-रैंडम संख्या जनरेटर प्रदान करने वाला अंतर्निहित मॉड्यूल कौन-सा है?",
    options: [
      { id: "A", textEn: "rand", textHi: "rand" },
      { id: "B", textEn: "random", textHi: "random" },
      { id: "C", textEn: "math", textHi: "math" },
      { id: "D", textEn: "crypto", textHi: "crypto" }
    ],
    correctAnswer: "B",
    explanation: "The 'random' module implements pseudo-random number generators for various distributions."
  },
  {
    id: 71,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "How do you find the unique elements of a list in Python easily?",
    questionHi: "पायथन में किसी सूची के अनूठे (Unique) तत्वों को आसानी से कैसे प्राप्त किया जाता है?",
    options: [
      { id: "A", textEn: "set(my_list)", textHi: "set(my_list)" },
      { id: "B", textEn: "tuple(my_list)", textHi: "tuple(my_list)" },
      { id: "C", textEn: "dict(my_list)", textHi: "dict(my_list)" },
      { id: "D", textEn: "filter(my_list)", textHi: "filter(my_list)" }
    ],
    correctAnswer: "A",
    explanation: "Converting a list to a set with set(my_list) automatically removes all duplicate entries."
  },
  {
    id: 72,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What exception is raised when dividing any number by zero in Python?",
    questionHi: "पायथन में किसी संख्या को शून्य से विभाजित करने पर कौन-सा अपवाद (Exception) उत्पन्न होता है?",
    options: [
      { id: "A", textEn: "ValueError", textHi: "ValueError" },
      { id: "B", textEn: "ZeroDivisionError", textHi: "ZeroDivisionError" },
      { id: "C", textEn: "ArithmeticError", textHi: "ArithmeticError" },
      { id: "D", textEn: "NullDivisionError", textHi: "NullDivisionError" }
    ],
    correctAnswer: "B",
    explanation: "Division by zero triggers a ZeroDivisionError in Python."
  },
  {
    id: 73,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "What is string slicing syntax: s[start:stop:step]? If step is -1, what happens?",
    questionHi: "स्ट्रिंग स्लाइसिंग में यदि step का मान -1 हो, तो क्या होता है?",
    options: [
      { id: "A", textEn: "Deletes the string", textHi: "स्ट्रिंग डिलीट हो जाती है" },
      { id: "B", textEn: "Reverses the string", textHi: "स्ट्रिंग उलट (Reverse) जाती है" },
      { id: "C", textEn: "Returns empty string", textHi: "खाली स्ट्रिंग लौटाता है" },
      { id: "D", textEn: "SyntaxError", textHi: "सिंटैक्स एरर" }
    ],
    correctAnswer: "B",
    explanation: "Slicing with a negative step like s[::-1] traverses the string backwards, producing its reverse."
  },
  {
    id: 74,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which Python function converts a string '125' to an integer?",
    questionHi: "कौन-सा पायथन फ़ंक्शन स्ट्रिंग '125' को पूर्णांक (Integer) में परिवर्तित करता है?",
    options: [
      { id: "A", textEn: "str()", textHi: "str()" },
      { id: "B", textEn: "int()", textHi: "int()" },
      { id: "C", textEn: "parse()", textHi: "parse()" },
      { id: "D", textEn: "to_int()", textHi: "to_int()" }
    ],
    correctAnswer: "B",
    explanation: "int('125') parses and type-casts the string argument to the integer 125."
  },
  {
    id: 75,
    section: "m3",
    sectionName: "M3-R5: Python Programming",
    questionEn: "Which built-in Python module is used to work with JSON data?",
    questionHi: "JSON डेटा के साथ काम करने के लिए किस अंतर्निहित पायथन मॉड्यूल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "json", textHi: "json" },
      { id: "B", textEn: "jsondata", textHi: "jsondata" },
      { id: "C", textEn: "simplejson", textHi: "simplejson" },
      { id: "D", textEn: "xmljson", textHi: "xmljson" }
    ],
    correctAnswer: "A",
    explanation: "The 'json' module provides json.dumps() and json.loads() for encoding and decoding JSON."
  },

  // --- M4-R5: INTERNET OF THINGS (IoT) (Q76 - Q100) ---
  {
    id: 76,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Who coined the term 'Internet of Things' in 1999?",
    questionHi: "1999 में 'इंटरनेट ऑफ थिंग्स' (IoT) शब्द किसने गढ़ा था?",
    options: [
      { id: "A", textEn: "Kevin Ashton", textHi: "केविन एश्टन" },
      { id: "B", textEn: "Tim Berners-Lee", textHi: "टिम बर्नर्स-ली" },
      { id: "C", textEn: "Bill Gates", textHi: "बिल गेट्स" },
      { id: "D", textEn: "Steve Jobs", textHi: "स्टीव जॉब्स" }
    ],
    correctAnswer: "A",
    explanation: "Kevin Ashton coined 'Internet of Things' in 1999 while working at Procter & Gamble regarding RFID tracking."
  },
  {
    id: 77,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the full form of MQTT in IoT messaging protocols?",
    questionHi: "IoT मैसेजिंग प्रोटोकॉल में MQTT का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Message Queuing Telemetry Transport", textHi: "मैसेज क्यूइंग टेलीमेट्री ट्रांसपोर्ट" },
      { id: "B", textEn: "Machine Quality Transmission Transit", textHi: "मशीन क्वालिटी ट्रांसमिशन ट्रांजिट" },
      { id: "C", textEn: "Micro Queued Transport Technology", textHi: "माइक्रो कतारबद्ध ट्रांसपोर्ट टेक्नोलॉजी" },
      { id: "D", textEn: "Message Quality Telemetry Terminal", textHi: "मैसेज क्वालिटी टेलीमेट्री टर्मिनल" }
    ],
    correctAnswer: "A",
    explanation: "MQTT (Message Queuing Telemetry Transport) is an extremely lightweight publish/subscribe messaging protocol designed for constrained IoT devices."
  },
  {
    id: 78,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which component in an IoT system converts physical environmental parameters into electrical signals?",
    questionHi: "IoT सिस्टम में कौन-सा घटक भौतिक पर्यावरणीय मापदंडों को विद्युत संकेतों में परिवर्तित करता है?",
    options: [
      { id: "A", textEn: "Actuator", textHi: "एक्चुएटर (Actuator)" },
      { id: "B", textEn: "Sensor", textHi: "सेंसर (Sensor)" },
      { id: "C", textEn: "Router", textHi: "राउटर (Router)" },
      { id: "D", textEn: "Gateway", textHi: "गेटवे (Gateway)" }
    ],
    correctAnswer: "B",
    explanation: "Sensors detect physical inputs (temperature, light, pressure, motion) and convert them into electrical signals."
  },
  {
    id: 79,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which component in an IoT system converts electrical signals into physical motion or action?",
    questionHi: "IoT सिस्टम में कौन-सा घटक विद्युत संकेतों को भौतिक गति या क्रिया में परिवर्तित करता है?",
    options: [
      { id: "A", textEn: "Actuator", textHi: "एक्चुएटर (Actuator)" },
      { id: "B", textEn: "Sensor", textHi: "सेंसर (Sensor)" },
      { id: "C", textEn: "ADC", textHi: "ADC" },
      { id: "D", textEn: "DAC", textHi: "DAC" }
    ],
    correctAnswer: "A",
    explanation: "Actuators (such as motors, solenoids, valves, or relays) convert electrical control signals into physical mechanical motion."
  },
  {
    id: 80,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What microcontroller is used in standard Arduino UNO boards?",
    questionHi: "मानक Arduino UNO बोर्ड में किस माइक्रोकंट्रोलर का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "ATmega328P", textHi: "ATmega328P" },
      { id: "B", textEn: "PIC16F877A", textHi: "PIC16F877A" },
      { id: "C", textEn: "ARM Cortex-M4", textHi: "ARM Cortex-M4" },
      { id: "D", textEn: "Intel 8051", textHi: "Intel 8051" }
    ],
    correctAnswer: "A",
    explanation: "The Arduino UNO R3 uses the 8-bit ATmega328P microcontroller manufactured by Microchip (formerly Atmel)."
  },
  {
    id: 81,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the typical operating voltage of an Arduino UNO board?",
    questionHi: "Arduino UNO बोर्ड का विशिष्ट ऑपरेटिंग वोल्टेज कितना होता है?",
    options: [
      { id: "A", textEn: "1.8V", textHi: "1.8V" },
      { id: "B", textEn: "3.3V", textHi: "3.3V" },
      { id: "C", textEn: "5V", textHi: "5V" },
      { id: "D", textEn: "12V", textHi: "12V" }
    ],
    correctAnswer: "C",
    explanation: "Arduino UNO microcontrollers operate internally at 5 Volts logic levels."
  },
  {
    id: 82,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "How many digital I/O pins are present on an Arduino UNO board?",
    questionHi: "Arduino UNO बोर्ड पर कुल कितने डिजिटल I/O पिन मौजूद होते हैं?",
    options: [
      { id: "A", textEn: "8", textHi: "8" },
      { id: "B", textEn: "14", textHi: "14" },
      { id: "C", textEn: "20", textHi: "20" },
      { id: "D", textEn: "32", textHi: "32" }
    ],
    correctAnswer: "B",
    explanation: "Arduino UNO has 14 digital I/O pins (pins 0 to 13), of which 6 provide PWM output."
  },
  {
    id: 83,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What are the two mandatory functions in every Arduino sketch program?",
    questionHi: "प्रत्येक Arduino स्केच प्रोग्राम में कौन-से दो अनिवार्य फ़ंक्शन होते हैं?",
    options: [
      { id: "A", textEn: "start() and stop()", textHi: "start() और stop()" },
      { id: "B", textEn: "setup() and loop()", textHi: "setup() और loop()" },
      { id: "C", textEn: "main() and run()", textHi: "main() और run()" },
      { id: "D", textEn: "init() and main()", textHi: "init() और main()" }
    ],
    correctAnswer: "B",
    explanation: "setup() runs once at startup to initialize pin modes and libraries; loop() executes repeatedly continuously."
  },
  {
    id: 84,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the full form of PWM in embedded systems?",
    questionHi: "एम्बेडेड सिस्टम में PWM का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Pulse Width Modulation", textHi: "पल्स विड्थ मॉड्यूलेशन" },
      { id: "B", textEn: "Power Wave Management", textHi: "पावर वेव मैनेजमेंट" },
      { id: "C", textEn: "Peak Wattage Meter", textHi: "पीक वाटेज मीटर" },
      { id: "D", textEn: "Pulse Wave Multiplication", textHi: "पल्स वेव मल्टीप्लिकेशन" }
    ],
    correctAnswer: "A",
    explanation: "PWM stands for Pulse Width Modulation, a technique to simulate analog voltages by varying duty cycle."
  },
  {
    id: 85,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What type of sensor is DHT11?",
    questionHi: "DHT11 किस प्रकार का सेंसर है?",
    options: [
      { id: "A", textEn: "Temperature and Humidity Sensor", textHi: "तापमान और आर्द्रता सेंसर" },
      { id: "B", textEn: "Sound Sensor", textHi: "ध्वनि सेंसर" },
      { id: "C", textEn: "Ultrasonic Distance Sensor", textHi: "अल्ट्रासोनिक दूरी सेंसर" },
      { id: "D", textEn: "Flame Sensor", textHi: "ज्वाला (Flame) सेंसर" }
    ],
    correctAnswer: "A",
    explanation: "The DHT11 is a basic, low-cost digital temperature and humidity sensor."
  },
  {
    id: 86,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which wireless protocol operates on IEEE 802.15.4 standard for low-power mesh networking?",
    questionHi: "कम बिजली वाले मेश नेटवर्किंग के लिए IEEE 802.15.4 मानक पर कौन-सा वायरलेस प्रोटोकॉल काम करता है?",
    options: [
      { id: "A", textEn: "Wi-Fi", textHi: "Wi-Fi" },
      { id: "B", textEn: "Zigbee", textHi: "Zigbee" },
      { id: "C", textEn: "Bluetooth 2.0", textHi: "ब्लूटूथ 2.0" },
      { id: "D", textEn: "Ethernet", textHi: "ईथरनेट" }
    ],
    correctAnswer: "B",
    explanation: "Zigbee is built upon the IEEE 802.15.4 standard to provide low-cost, low-power wireless mesh network communication."
  },
  {
    id: 87,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the full form of CoAP in IoT application layer protocols?",
    questionHi: "IoT एप्लिकेशन लेयर प्रोटोकॉल में CoAP का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Constrained Application Protocol", textHi: "कंस्ट्रेंड एप्लिकेशन प्रोटोकॉल" },
      { id: "B", textEn: "Common Access Protocol", textHi: "कॉमन एक्सेस प्रोटोकॉल" },
      { id: "C", textEn: "Connected Application Point", textHi: "कनेक्टेड एप्लिकेशन पॉइंट" },
      { id: "D", textEn: "Continuous Analog Protocol", textHi: "कंटीन्यूअस एनालॉग प्रोटोकॉल" }
    ],
    correctAnswer: "A",
    explanation: "CoAP (Constrained Application Protocol) is a specialized web transfer protocol for use with constrained nodes and constrained networks in IoT."
  },
  {
    id: 88,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the baud rate of standard serial communication in Arduino examples?",
    questionHi: "Arduino उदाहरणों में मानक सीरियल संचार का बॉड रेट सामान्यतः कितना होता है?",
    options: [
      { id: "A", textEn: "1200", textHi: "1200" },
      { id: "B", textEn: "4800", textHi: "4800" },
      { id: "C", textEn: "9600", textHi: "9600" },
      { id: "D", textEn: "100000", textHi: "100000" }
    ],
    correctAnswer: "C",
    explanation: "Serial.begin(9600); configures serial data transmission at 9,600 bits per second (baud)."
  },
  {
    id: 89,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which of the following is a prominent single-board computer (SBC) widely used in IoT edge computing?",
    questionHi: "IoT एज कंप्यूटिंग में व्यापक रूप से उपयोग किया जाने वाला सिंगल-बोर्ड कंप्यूटर (SBC) कौन-सा है?",
    options: [
      { id: "A", textEn: "Raspberry Pi", textHi: "रास्पबेरी पाई (Raspberry Pi)" },
      { id: "B", textEn: "LM35", textHi: "LM35" },
      { id: "C", textEn: "ESP8266", textHi: "ESP8266" },
      { id: "D", textEn: "LDR", textHi: "LDR" }
    ],
    correctAnswer: "A",
    explanation: "The Raspberry Pi is a complete single-board computer running full Linux OS with USB, HDMI, and GPIO pins."
  },
  {
    id: 90,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the function of an LDR (Light Dependent Resistor) in IoT circuits?",
    questionHi: "IoT सर्किट में LDR (लाइट डिपेंडेंट रेसिस्टर) का क्या कार्य होता है?",
    options: [
      { id: "A", textEn: "Measures temperature", textHi: "तापमान मापता है" },
      { id: "B", textEn: "Resistance decreases when light intensity increases", textHi: "प्रकाश की तीव्रता बढ़ने पर प्रतिरोध घटता है" },
      { id: "C", textEn: "Emits laser light", textHi: "लेजर प्रकाश उत्सर्जित करता है" },
      { id: "D", textEn: "Stores electrical charge", textHi: "विद्युत आवेश संग्रहीत करता है" }
    ],
    correctAnswer: "B",
    explanation: "LDR is a photo-resistor whose resistance drops significantly when exposed to brighter ambient light."
  },
  {
    id: 91,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the full form of RFID in IoT asset tracking?",
    questionHi: "IoT एसेट ट्रैकिंग में RFID का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Radio Frequency Identification", textHi: "रेडियो फ्रीक्वेंसी आइडेंटिफिकेशन" },
      { id: "B", textEn: "Real Frequency Interface Device", textHi: "रियल फ्रीक्वेंसी इंटरफेस डिवाइस" },
      { id: "C", textEn: "Remote Field Identity Detector", textHi: "रिमोट फील्ड आइडेंटिटी डिटेक्टर" },
      { id: "D", textEn: "Rapid Frequency Infrared Device", textHi: "रैपिड फ्रीक्वेंसी इन्फ्रारेड डिवाइस" }
    ],
    correctAnswer: "A",
    explanation: "RFID stands for Radio Frequency Identification, using electromagnetic fields to automatically identify and track tags attached to objects."
  },
  {
    id: 92,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which microcontroller module is widely popular for adding Wi-Fi connectivity to IoT projects at low cost?",
    questionHi: "कम लागत में IoT परियोजनाओं में वाई-फाई कनेक्टिविटी जोड़ने के लिए कौन-सा मॉड्यूल अत्यधिक लोकप्रिय है?",
    options: [
      { id: "A", textEn: "ESP8266 / ESP32", textHi: "ESP8266 / ESP32" },
      { id: "B", textEn: "LM7805", textHi: "LM7805" },
      { id: "C", textEn: "HC-SR04", textHi: "HC-SR04" },
      { id: "D", textEn: "MAX232", textHi: "MAX232" }
    ],
    correctAnswer: "A",
    explanation: "The ESP8266 and ESP32 series by Espressif Systems provide built-in Wi-Fi and Bluetooth microcontrollers for IoT."
  },
  {
    id: 93,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What does HC-SR04 sensor measure in robotics and IoT?",
    questionHi: "रोबोटिक्स और IoT में HC-SR04 सेंसर क्या मापता है?",
    options: [
      { id: "A", textEn: "Distance using ultrasonic sound waves", textHi: "अल्ट्रासोनिक ध्वनि तरंगों का उपयोग करके दूरी" },
      { id: "B", textEn: "Water purity", textHi: "जल की शुद्धता" },
      { id: "C", textEn: "Gas leakage", textHi: "गैस रिसाव" },
      { id: "D", textEn: "Atmospheric pressure", textHi: "वायुमंडलीय दबाव" }
    ],
    correctAnswer: "A",
    explanation: "HC-SR04 is an ultrasonic distance measuring sensor using 40 kHz sonar echoes."
  },
  {
    id: 94,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "In MQTT architecture, what is the central broker called?",
    questionHi: "MQTT आर्किटेक्चर में केंद्रीय ब्रोकर को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "MQTT Broker / Server", textHi: "MQTT ब्रोकर / सर्वर" },
      { id: "B", textEn: "Actuator", textHi: "एक्चुएटर" },
      { id: "C", textEn: "Subscriber node", textHi: "सब्सक्राइबर नोड" },
      { id: "D", textEn: "Publisher node", textHi: "पब्लिशर नोड" }
    ],
    correctAnswer: "A",
    explanation: "The MQTT Broker acts as the centralized server that receives messages published by clients and routes them to subscribed clients."
  },
  {
    id: 95,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is an important cybersecurity risk uniquely heightened in IoT devices?",
    questionHi: "IoT उपकरणों में कौन-सा साइबर सुरक्षा जोखिम विशेष रूप से बढ़ जाता है?",
    options: [
      { id: "A", textEn: "Default unchangeable passwords & lack of encryption", textHi: "डिफ़ॉल्ट अपरिवर्तनीय पासवर्ड और एन्क्रिप्शन की कमी" },
      { id: "B", textEn: "Excessive CPU cooling", textHi: "अत्यधिक CPU कूलिंग" },
      { id: "C", textEn: "High memory leakage in hardware capacitors", textHi: "हार्डवेयर कैपेसिटर में मेमोरी लीकेज" },
      { id: "D", textEn: "High monitor resolution", textHi: "उच्च मॉनिटर रिज़ॉल्यूशन" }
    ],
    correctAnswer: "A",
    explanation: "Weak or hardcoded default passwords, unpatched firmware, and lack of transport encryption make IoT devices frequent targets for botnets (e.g. Mirai)."
  },
  {
    id: 96,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the primary role of an IoT Gateway?",
    questionHi: "IoT गेटवे (Gateway) की प्राथमिक भूमिका क्या है?",
    options: [
      { id: "A", textEn: "Bridges local sensor networks to the cloud/Internet", textHi: "स्थानीय सेंसर नेटवर्क को क्लाउड/इंटरनेट से जोड़ना" },
      { id: "B", textEn: "Stores physical batteries", textHi: "भौतिक बैटरियों को स्टोर करना" },
      { id: "C", textEn: "Displays video signals to monitors", textHi: "मॉनिटर पर वीडियो सिग्नल प्रदर्शित करना" },
      { id: "D", textEn: "Acts as a speaker amplifier", textHi: "स्पीकर एम्पलीफायर के रूप में कार्य करना" }
    ],
    correctAnswer: "A",
    explanation: "IoT gateways translate communication protocols between short-range sensor networks (Zigbee, BLE) and wide-area IP networks (Cloud)."
  },
  {
    id: 97,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the full form of BLE in wireless technology?",
    questionHi: "वायरलेस तकनीक में BLE का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Bluetooth Low Energy", textHi: "ब्लूटूथ लो एनर्जी (Bluetooth Low Energy)" },
      { id: "B", textEn: "Basic Level Ethernet", textHi: "बेसिक लेवल ईथरनेट" },
      { id: "C", textEn: "Broadband Light Emitting", textHi: "ब्रॉडबैंड लाइट एमिटिंग" },
      { id: "D", textEn: "Binary Logic Exchange", textHi: "बाइनरी लॉजिक एक्सचेंज" }
    ],
    correctAnswer: "A",
    explanation: "Bluetooth Low Energy (BLE) is designed for considerably reduced power consumption and lower cost while maintaining a similar communication range."
  },
  {
    id: 98,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "Which command in Arduino IDE is used to write a digital HIGH or LOW voltage to an output pin?",
    questionHi: "Arduino IDE में किसी आउटपुट पिन पर डिजिटल HIGH या LOW वोल्टेज लिखने के लिए किस कमांड का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "digitalWrite(pin, value)", textHi: "digitalWrite(pin, value)" },
      { id: "B", textEn: "pinMode(pin, value)", textHi: "pinMode(pin, value)" },
      { id: "C", textEn: "analogWrite(pin, value)", textHi: "analogWrite(pin, value)" },
      { id: "D", textEn: "setPin(pin, value)", textHi: "setPin(pin, value)" }
    ],
    correctAnswer: "A",
    explanation: "digitalWrite(pin, HIGH) sends 5V, while digitalWrite(pin, LOW) connects the pin to ground (0V)."
  },
  {
    id: 99,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the resolution of the analog-to-digital converter (ADC) on an Arduino UNO?",
    questionHi: "Arduino UNO पर एनालॉग-टू-डिजिटल कनवर्टर (ADC) का रिज़ॉल्यूशन कितना होता है?",
    options: [
      { id: "A", textEn: "8 bits (0-255)", textHi: "8 बिट्स (0-255)" },
      { id: "B", textEn: "10 bits (0-1023)", textHi: "10 बिट्स (0-1023)" },
      { id: "C", textEn: "12 bits (0-4095)", textHi: "12 बिट्स (0-4095)" },
      { id: "D", textEn: "16 bits (0-65535)", textHi: "16 बिट्स (0-65535)" }
    ],
    correctAnswer: "B",
    explanation: "Arduino UNO has a 10-bit ADC mapping input voltages between 0 and 5V into integer values from 0 to 1023."
  },
  {
    id: 100,
    section: "m4",
    sectionName: "M4-R5: Internet of Things (IoT)",
    questionEn: "What is the term for computing and analyzing IoT data locally near the sensors rather than in a distant central cloud?",
    questionHi: "IoT डेटा को दूरस्थ केंद्रीय क्लाउड के बजाय स्थानीय रूप से सेंसर के पास संसाधित और विश्लेषित करने की तकनीक को क्या कहते हैं?",
    options: [
      { id: "A", textEn: "Edge / Fog Computing", textHi: "एज / फॉग कंप्यूटिंग (Edge / Fog Computing)" },
      { id: "B", textEn: "Cold Storage", textHi: "कोल्ड स्टोरेज" },
      { id: "C", textEn: "Analog Processing", textHi: "एनालॉग प्रोसेसिंग" },
      { id: "D", textEn: "Cloud Streaming", textHi: "क्लाउड स्ट्रीमिंग" }
    ],
    correctAnswer: "A",
    explanation: "Edge and Fog Computing process time-sensitive data close to the source where it is generated, drastically reducing latency and network bandwidth usage."
  }
];
