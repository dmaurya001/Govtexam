/**
 * GovtExamHub — NIELIT CCC (Course on Computer Concepts) Examination
 * Official 100 MCQs CBT Question Paper with Bilingual Statement, 4 Options & Explanations
 */

const CCC_EXAM_CONFIG = {
  id: "ccc",
  title: "NIELIT CCC (Course on Computer Concepts) Examination",
  shortName: "CCC",
  icon: "🖥️",
  isAvailable: true,
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 90, // 90 Mins Real NIELIT CCC Exam Duration
  marksPerCorrect: 1,
  negativeMarking: 0,
  sections: [
    { id: "ccc_sec1", name: "1. Computer Fundamentals & OS", start: 1, end: 25, total: 25 },
    { id: "ccc_sec2", name: "2. LibreOffice Writer & Calc", start: 26, end: 50, total: 25 },
    { id: "ccc_sec3", name: "3. Impress, Internet & Web", start: 51, end: 75, total: 25 },
    { id: "ccc_sec4", name: "4. Digital Finance & Cyber Security", start: 76, end: 100, total: 25 }
  ]
};

const CCC_QUESTIONS_DATA = [
  // --- SECTION 1: COMPUTER FUNDAMENTALS & OS (Q1 - Q25) ---
  {
    id: 1,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Who is known as the 'Father of Computer'?",
    questionHi: "कंप्यूटर का जनक (Father of Computer) किसे कहा जाता है?",
    options: [
      { id: "A", textEn: "Charles Babbage", textHi: "चार्ल्स बैबेज" },
      { id: "B", textEn: "Alan Turing", textHi: "एलन ट्यूरिंग" },
      { id: "C", textEn: "John von Neumann", textHi: "जॉन वॉन न्यूमैन" },
      { id: "D", textEn: "Blaise Pascal", textHi: "ब्लेज़ पास्कल" }
    ],
    correctAnswer: "A",
    explanation: "Charles Babbage is considered the Father of the Computer for conceiving the Analytical Engine and Difference Engine."
  },
  {
    id: 2,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the smallest unit of digital data in computers?",
    questionHi: "कंप्यूटर में डिजिटल डेटा की सबसे छोटी इकाई क्या है?",
    options: [
      { id: "A", textEn: "Byte", textHi: "बाइट (Byte)" },
      { id: "B", textEn: "Bit", textHi: "बिट (Bit)" },
      { id: "C", textEn: "Nibble", textHi: "निब्बल (Nibble)" },
      { id: "D", textEn: "Word", textHi: "वर्ड (Word)" }
    ],
    correctAnswer: "B",
    explanation: "A bit (binary digit: 0 or 1) is the basic and smallest unit of data. 4 bits make 1 nibble, and 8 bits make 1 byte."
  },
  {
    id: 3,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What does GUI stand for in computer operating systems?",
    questionHi: "ऑपरेटिंग सिस्टम में GUI का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Graphical User Interface", textHi: "ग्राफिकल यूजर इंटरफेस" },
      { id: "B", textEn: "General Utility Interface", textHi: "जनरल यूटिलिटी इंटरफेस" },
      { id: "C", textEn: "Global Unified Internet", textHi: "ग्लोबल यूनिफाइड इंटरनेट" },
      { id: "D", textEn: "Graphics Universal Instruction", textHi: "ग्राफिक्स यूनिवर्सल इंस्ट्रक्शन" }
    ],
    correctAnswer: "A",
    explanation: "GUI stands for Graphical User Interface, enabling users to interact through visual icons and menus rather than text commands."
  },
  {
    id: 4,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which of the following is an example of System Software?",
    questionHi: "निम्नलिखित में से कौन-सा सिस्टम सॉफ्टवेयर का उदाहरण है?",
    options: [
      { id: "A", textEn: "Operating System", textHi: "ऑपरेटिंग सिस्टम (OS)" },
      { id: "B", textEn: "VLC Media Player", textHi: "VLC मीडिया प्लेयर" },
      { id: "C", textEn: "Google Chrome", textHi: "गूगल क्रोम" },
      { id: "D", textEn: "Adobe Photoshop", textHi: "एडोब फोटोशॉप" }
    ],
    correctAnswer: "A",
    explanation: "An Operating System manages computer hardware and system resources, making it core System Software."
  },
  {
    id: 5,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "1 Megabyte (MB) is equal to exactly how many Kilobytes (KB)?",
    questionHi: "1 मेगाबाइट (MB) में ठीक कितने किलोबाइट (KB) होते हैं?",
    options: [
      { id: "A", textEn: "1000 KB", textHi: "1000 KB" },
      { id: "B", textEn: "1024 KB", textHi: "1024 KB" },
      { id: "C", textEn: "1048 KB", textHi: "1048 KB" },
      { id: "D", textEn: "512 KB", textHi: "512 KB" }
    ],
    correctAnswer: "B",
    explanation: "In binary computing memory architecture, 1 MB = 1024 KB, and 1 KB = 1024 Bytes."
  },
  {
    id: 6,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which component of the CPU coordinates and directs all operations of the computer?",
    questionHi: "CPU का कौन-सा घटक कंप्यूटर के सभी कार्यों का समन्वय और नियंत्रण करता है?",
    options: [
      { id: "A", textEn: "Arithmetic Logic Unit (ALU)", textHi: "अरिथमेटिक लॉजिक यूनिट (ALU)" },
      { id: "B", textEn: "Control Unit (CU)", textHi: "कंट्रोल यूनिट (CU)" },
      { id: "C", textEn: "Registers", textHi: "रजिस्टर" },
      { id: "D", textEn: "Primary Cache", textHi: "प्राइमरी कैश" }
    ],
    correctAnswer: "B",
    explanation: "The Control Unit (CU) directs the flow of data and instructions between CPU, ALU, registers, and peripherals."
  },
  {
    id: 7,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which key combination is used to permanently delete a file in Windows without sending it to Recycle Bin?",
    questionHi: "विंडोज में किसी फ़ाइल को रीसायकल बिन में भेजे बिना स्थायी रूप से हटाने के लिए किस शॉर्टकट का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Shift + Delete", textHi: "Shift + Delete" },
      { id: "B", textEn: "Ctrl + Delete", textHi: "Ctrl + Delete" },
      { id: "C", textEn: "Alt + Delete", textHi: "Alt + Delete" },
      { id: "D", textEn: "Fn + Delete", textHi: "Fn + Delete" }
    ],
    correctAnswer: "A",
    explanation: "Shift + Delete permanently deletes files bypassing the Recycle Bin."
  },
  {
    id: 8,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the core kernel of the Linux Operating System?",
    questionHi: "लिनक्स ऑपरेटिंग सिस्टम का मुख्य केंद्रीय भाग (Kernel) क्या है?",
    options: [
      { id: "A", textEn: "Monolithic Kernel", textHi: "मोनोलिथिक कर्नल (Monolithic Kernel)" },
      { id: "B", textEn: "Micro Kernel", textHi: "माइक्रो कर्नल" },
      { id: "C", textEn: "Hybrid Kernel", textHi: "हाइब्रिड कर्नल" },
      { id: "D", textEn: "Exo Kernel", textHi: "एक्सो कर्नल" }
    ],
    correctAnswer: "A",
    explanation: "Linux is based on a monolithic kernel architecture originally designed by Linus Torvalds."
  },
  {
    id: 9,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What type of device is a Barcode Reader / QR Scanner?",
    questionHi: "बारकोड रीडर / क्यूआर स्कैनर किस प्रकार का उपकरण है?",
    options: [
      { id: "A", textEn: "Input Device", textHi: "इनपुट डिवाइस (Input Device)" },
      { id: "B", textEn: "Output Device", textHi: "आउटपुट डिवाइस" },
      { id: "C", textEn: "Storage Device", textHi: "स्टोरेज डिवाइस" },
      { id: "D", textEn: "Processing Device", textHi: "प्रोसेसिंग डिवाइस" }
    ],
    correctAnswer: "A",
    explanation: "Barcode and QR scanners read optical patterns and input the decoded alphanumeric data into the system."
  },
  {
    id: 10,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which of the following memory has the fastest access time?",
    questionHi: "निम्नलिखित में से किस मेमोरी का एक्सेस समय सबसे तेज़ होता है?",
    options: [
      { id: "A", textEn: "Registers / Cache Memory", textHi: "रजिस्टर / कैश मेमोरी" },
      { id: "B", textEn: "RAM", textHi: "RAM" },
      { id: "C", textEn: "Hard Disk", textHi: "हार्ड डिस्क" },
      { id: "D", textEn: "Optical Disc", textHi: "ऑप्टिकल डिस्क" }
    ],
    correctAnswer: "A",
    explanation: "CPU internal registers and SRAM cache memory are the fastest memory types in the computer hierarchy."
  },
  {
    id: 11,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What does POST stand for during computer boot-up?",
    questionHi: "कंप्यूटर बूटिंग के दौरान POST का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Power On Self Test", textHi: "पावर ऑन सेल्फ टेस्ट" },
      { id: "B", textEn: "Program Operating System Test", textHi: "प्रोग्राम ऑपरेटिंग सिस्टम टेस्ट" },
      { id: "C", textEn: "Primary Output Storage Terminal", textHi: "प्राइमरी आउटपुट स्टोरेज टर्मिनल" },
      { id: "D", textEn: "Post Operational Security Test", textHi: "पोस्ट ऑपरेशनल सिक्योरिटी टेस्ट" }
    ],
    correctAnswer: "A",
    explanation: "POST (Power On Self Test) is a diagnostic testing sequence run by BIOS immediately after powering on."
  },
  {
    id: 12,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the shortcut key to open Task Manager directly in Windows?",
    questionHi: "विंडोज में सीधे टास्क मैनेजर खोलने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Shift + Esc", textHi: "Ctrl + Shift + Esc" },
      { id: "B", textEn: "Ctrl + Alt + T", textHi: "Ctrl + Alt + T" },
      { id: "C", textEn: "Alt + F4", textHi: "Alt + F4" },
      { id: "D", textEn: "Win + T", textHi: "Win + T" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Shift + Esc opens Windows Task Manager directly without an intermediate security screen."
  },
  {
    id: 13,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the full form of USB in peripheral interfaces?",
    questionHi: "यूएसबी (USB) का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Universal Serial Bus", textHi: "यूनिवर्सल सीरियल बस" },
      { id: "B", textEn: "Unified System Board", textHi: "यूनिफाइड सिस्टम बोर्ड" },
      { id: "C", textEn: "Universal Storage Backup", textHi: "यूनिवर्सल स्टोरेज बैकअप" },
      { id: "D", textEn: "Unique Serial Binary", textHi: "यूनिक सीरियल बाइनरी" }
    ],
    correctAnswer: "A",
    explanation: "USB stands for Universal Serial Bus, an industry standard connecting computers and electronic devices."
  },
  {
    id: 14,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which of the following is NOT an operating system?",
    questionHi: "निम्नलिखित में से कौन-सा ऑपरेटिंग सिस्टम नहीं है?",
    options: [
      { id: "A", textEn: "Android", textHi: "एंड्रॉइड (Android)" },
      { id: "B", textEn: "Linux", textHi: "लिनक्स (Linux)" },
      { id: "C", textEn: "Oracle", textHi: "ओरेकल (Oracle Database)" },
      { id: "D", textEn: "macOS", textHi: "macOS" }
    ],
    correctAnswer: "C",
    explanation: "Oracle is a Relational Database Management System (RDBMS), not an operating system."
  },
  {
    id: 15,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which generation of computers used Microprocessors for the first time?",
    questionHi: "किस पीढ़ी के कंप्यूटरों में पहली बार माइक्रोप्रोसेसर का उपयोग किया गया था?",
    options: [
      { id: "A", textEn: "First Generation", textHi: "प्रथम पीढ़ी" },
      { id: "B", textEn: "Second Generation", textHi: "द्वितीय पीढ़ी" },
      { id: "C", textEn: "Third Generation", textHi: "तृतीय पीढ़ी" },
      { id: "D", textEn: "Fourth Generation", textHi: "चतुर्थ पीढ़ी (Fourth Generation)" }
    ],
    correctAnswer: "D",
    explanation: "Fourth-generation computers (from ~1971 onward) incorporated microprocessors using VLSI technology (e.g. Intel 4004)."
  },
  {
    id: 16,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which key is used to rename a selected file or folder in Windows?",
    questionHi: "विंडोज में चयनित फ़ाइल या फ़ोल्डर का नाम बदलने (Rename) के लिए किस कुंजी का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "F1", textHi: "F1" },
      { id: "B", textEn: "F2", textHi: "F2" },
      { id: "C", textEn: "F3", textHi: "F3" },
      { id: "D", textEn: "F5", textHi: "F5" }
    ],
    correctAnswer: "B",
    explanation: "Pressing F2 activates inline renaming of the selected file or folder."
  },
  {
    id: 17,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What does ASCII stand for in character encoding?",
    questionHi: "वर्ण एन्कोडिंग में ASCII का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "American Standard Code for Information Interchange", textHi: "अमेरिकन स्टैंडर्ड कोड फॉर इंफॉर्मेशन इंटरचेंज" },
      { id: "B", textEn: "Advanced Standard Computer Information Institute", textHi: "एडवांस्ड स्टैंडर्ड कंप्यूटर इंफॉर्मेशन इंस्टीट्यूट" },
      { id: "C", textEn: "Automated System Code for Internet Interchange", textHi: "ऑटोमेटेड सिस्टम कोड फॉर इंटरनेट इंटरचेंज" },
      { id: "D", textEn: "American Scientific Code for International Interchange", textHi: "अमेरिकन साइंटिफिक कोड फॉर इंटरनेशनल इंटरचेंज" }
    ],
    correctAnswer: "A",
    explanation: "ASCII stands for American Standard Code for Information Interchange."
  },
  {
    id: 18,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the shortcut to lock your Windows computer screen immediately?",
    questionHi: "विंडोज कंप्यूटर स्क्रीन को तुरंत लॉक करने का शॉर्टकट क्या है?",
    options: [
      { id: "A", textEn: "Windows Key + L", textHi: "Windows Key + L" },
      { id: "B", textEn: "Windows Key + D", textHi: "Windows Key + D" },
      { id: "C", textEn: "Windows Key + E", textHi: "Windows Key + E" },
      { id: "D", textEn: "Windows Key + R", textHi: "Windows Key + R" }
    ],
    correctAnswer: "A",
    explanation: "Win + L immediately locks the user workstation requiring password to re-enter."
  },
  {
    id: 19,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What type of storage is a Solid State Drive (SSD)?",
    questionHi: "सॉलिड स्टेट ड्राइव (SSD) किस प्रकार का स्टोरेज माध्यम है?",
    options: [
      { id: "A", textEn: "Optical", textHi: "ऑप्टिकल" },
      { id: "B", textEn: "Non-volatile Flash Semiconductor", textHi: "नॉन-वोलाटाइल फ्लैश सेमीकंडक्टर" },
      { id: "C", textEn: "Magnetic Tape", textHi: "मैग्नेटिक टेप" },
      { id: "D", textEn: "Volatile DRAM", textHi: "वोलाटाइल DRAM" }
    ],
    correctAnswer: "B",
    explanation: "An SSD uses flash-based non-volatile memory (NAND flash) with no mechanical moving parts."
  },
  {
    id: 20,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which utility is used in Windows to remove temporary and unnecessary files?",
    questionHi: "विंडोज में अस्थायी और अनावश्यक फ़ाइलों को हटाने के लिए किस उपयोगिता का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Disk Defragmenter", textHi: "डिस्क डीफ्रैग्मेंटर" },
      { id: "B", textEn: "Disk Cleanup", textHi: "डिस्क क्लीनअप (Disk Cleanup)" },
      { id: "C", textEn: "Device Manager", textHi: "डिवाइस मैनेजर" },
      { id: "D", textEn: "Registry Editor", textHi: "रजिस्ट्री एडिटर" }
    ],
    correctAnswer: "B",
    explanation: "Disk Cleanup analyzes and deletes unneeded cache, logs, and temporary files to free hard drive space."
  },
  {
    id: 21,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the full form of BIOS?",
    questionHi: "BIOS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Basic Input Output System", textHi: "बेसिक इनपुट आउटपुट सिस्टम" },
      { id: "B", textEn: "Binary Integrated Operating System", textHi: "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम" },
      { id: "C", textEn: "Boot Initial Output System", textHi: "बूट इनिशियल आउटपुट सिस्टम" },
      { id: "D", textEn: "Basic Instruction On Storage", textHi: "बेसिक इंस्ट्रक्शन ऑन स्टोरेज" }
    ],
    correctAnswer: "A",
    explanation: "BIOS stands for Basic Input Output System, firmware stored on a motherboard ROM chip."
  },
  {
    id: 22,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which display resolution is referred to as 1080p Full HD?",
    questionHi: "किस डिस्प्ले रिज़ॉल्यूशन को 1080p फुल एचडी (Full HD) कहा जाता है?",
    options: [
      { id: "A", textEn: "1280 x 720", textHi: "1280 x 720" },
      { id: "B", textEn: "1920 x 1080", textHi: "1920 x 1080" },
      { id: "C", textEn: "2560 x 1440", textHi: "2560 x 1440" },
      { id: "D", textEn: "3840 x 2160", textHi: "3840 x 2160" }
    ],
    correctAnswer: "B",
    explanation: "Full HD (FHD) resolution is 1920 pixels horizontally by 1080 pixels vertically."
  },
  {
    id: 23,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the default browser included in Windows 10 & 11?",
    questionHi: "विंडोज 10 और 11 में शामिल डिफ़ॉल्ट वेब ब्राउज़र कौन-सा है?",
    options: [
      { id: "A", textEn: "Internet Explorer", textHi: "इंटरनेट एक्सप्लोरर" },
      { id: "B", textEn: "Microsoft Edge", textHi: "माइक्रोसॉफ्ट एज (Microsoft Edge)" },
      { id: "C", textEn: "Google Chrome", textHi: "गूगल क्रोम" },
      { id: "D", textEn: "Mozilla Firefox", textHi: "मोज़िला फ़ायरफ़ॉक्स" }
    ],
    correctAnswer: "B",
    explanation: "Microsoft Edge is the default Chromium-based web browser in Windows 10 and 11."
  },
  {
    id: 24,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "Which of the following is an example of an impact printer?",
    questionHi: "निम्नलिखित में से कौन-सा इम्पैक्ट प्रिंटर का उदाहरण है?",
    options: [
      { id: "A", textEn: "Laser Printer", textHi: "लेजर प्रिंटर" },
      { id: "B", textEn: "Inkjet Printer", textHi: "इंकजेट प्रिंटर" },
      { id: "C", textEn: "Dot Matrix Printer", textHi: "डॉट मैट्रिक्स प्रिंटर (Dot Matrix Printer)" },
      { id: "D", textEn: "Thermal Printer", textHi: "थर्मल प्रिंटर" }
    ],
    correctAnswer: "C",
    explanation: "Dot Matrix printers strike pins against an ink ribbon onto paper, making them impact printers."
  },
  {
    id: 25,
    section: "ccc_sec1",
    sectionName: "1. Computer Fundamentals & OS",
    questionEn: "What is the purpose of the Recycle Bin in Windows?",
    questionHi: "विंडोज में रीसायकल बिन (Recycle Bin) का क्या उद्देश्य है?",
    options: [
      { id: "A", textEn: "Stores deleted files temporarily before permanent removal", textHi: "स्थायी रूप से हटाने से पहले हटाई गई फ़ाइलों को अस्थायी रूप से सहेजता है" },
      { id: "B", textEn: "Increases CPU speed", textHi: "CPU की गति बढ़ाता है" },
      { id: "C", textEn: "Scans for computer viruses", textHi: "कंप्यूटर वायरस को स्कैन करता है" },
      { id: "D", textEn: "Compresses audio files", textHi: "ऑडियो फ़ाइलों को कंप्रेस करता है" }
    ],
    correctAnswer: "A",
    explanation: "The Recycle Bin provides safety storage allowing users to restore deleted files if deleted accidentally."
  },

  // --- SECTION 2: LIBREOFFICE WRITER & CALC (Q26 - Q50) ---
  {
    id: 26,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to close the current document in LibreOffice?",
    questionHi: "LibreOffice में वर्तमान दस्तावेज़ को बंद करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + W", textHi: "Ctrl + W" },
      { id: "B", textEn: "Ctrl + Q", textHi: "Ctrl + Q" },
      { id: "C", textEn: "Ctrl + E", textHi: "Ctrl + E" },
      { id: "D", textEn: "Ctrl + X", textHi: "Ctrl + X" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + W closes the current open document window without exiting the entire LibreOffice suite. (Ctrl + Q exits LibreOffice entirely)."
  },
  {
    id: 27,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the default font size in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में डिफ़ॉल्ट फ़ॉन्ट साइज़ कितना होता है?",
    options: [
      { id: "A", textEn: "10 pt", textHi: "10 pt" },
      { id: "B", textEn: "11 pt", textHi: "11 pt" },
      { id: "C", textEn: "12 pt", textHi: "12 pt" },
      { id: "D", textEn: "14 pt", textHi: "14 pt" }
    ],
    correctAnswer: "C",
    explanation: "The default font in LibreOffice Writer is Liberation Serif with a size of 12 pt."
  },
  {
    id: 28,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key for Center Alignment in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में टेक्स्ट को केंद्र (Center) में संरेखित करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + C", textHi: "Ctrl + C" },
      { id: "B", textEn: "Ctrl + E", textHi: "Ctrl + E" },
      { id: "C", textEn: "Ctrl + R", textHi: "Ctrl + R" },
      { id: "D", textEn: "Ctrl + J", textHi: "Ctrl + J" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + E aligns text to the center. (Ctrl + C is for Copy)."
  },
  {
    id: 29,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to insert a Page Break in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में पेज ब्रेक (Page Break) डालने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Enter", textHi: "Ctrl + Enter" },
      { id: "B", textEn: "Shift + Enter", textHi: "Shift + Enter" },
      { id: "C", textEn: "Alt + Enter", textHi: "Alt + Enter" },
      { id: "D", textEn: "Ctrl + Shift + Enter", textHi: "Ctrl + Shift + Enter" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Enter immediately starts a new page by inserting a hard page break."
  },
  {
    id: 30,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the default name of the first worksheet in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में पहली वर्कशीट का डिफ़ॉल्ट नाम क्या होता है?",
    options: [
      { id: "A", textEn: "Sheet1", textHi: "Sheet1" },
      { id: "B", textEn: "Worksheet1", textHi: "Worksheet1" },
      { id: "C", textEn: "Calc1", textHi: "Calc1" },
      { id: "D", textEn: "Document1", textHi: "Document1" }
    ],
    correctAnswer: "A",
    explanation: "When you create a new spreadsheet in LibreOffice Calc, the initial sheet is named 'Sheet1'."
  },
  {
    id: 31,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to insert current Date in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में वर्तमान दिनांक (Current Date) डालने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + ; (Semicolon)", textHi: "Ctrl + ; (सेमीकोलन)" },
      { id: "B", textEn: "Ctrl + Shift + ;", textHi: "Ctrl + Shift + ;" },
      { id: "C", textEn: "Ctrl + D", textHi: "Ctrl + D" },
      { id: "D", textEn: "Alt + D", textHi: "Alt + D" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + ; inserts the current date into the active cell in Calc. Ctrl + Shift + ; inserts current time."
  },
  {
    id: 32,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the result of formula '=5*2+3' in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में फ़ॉर्मूला '=5*2+3' का मान क्या होगा?",
    options: [
      { id: "A", textEn: "25", textHi: "25" },
      { id: "B", textEn: "13", textHi: "13" },
      { id: "C", textEn: "10", textHi: "10" },
      { id: "D", textEn: "15", textHi: "15" }
    ],
    correctAnswer: "B",
    explanation: "Following mathematical precedence (BODMAS), multiplication is evaluated before addition: 5 * 2 = 10, 10 + 3 = 13."
  },
  {
    id: 33,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the maximum number of columns in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में कॉलम (Columns) की अधिकतम संख्या कितनी होती है?",
    options: [
      { id: "A", textEn: "256", textHi: "256" },
      { id: "B", textEn: "1024", textHi: "1024 (AMJ)" },
      { id: "C", textEn: "16384", textHi: "16384" },
      { id: "D", textEn: "65536", textHi: "65536" }
    ],
    correctAnswer: "B",
    explanation: "LibreOffice Calc standard versions support 1024 columns ranging from A to AMJ."
  },
  {
    id: 34,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key for Hyperlink in LibreOffice?",
    questionHi: "LibreOffice में हाइपरलिंक इन्सर्ट करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + H", textHi: "Ctrl + H" },
      { id: "B", textEn: "Ctrl + K", textHi: "Ctrl + K" },
      { id: "C", textEn: "Ctrl + L", textHi: "Ctrl + L" },
      { id: "D", textEn: "Ctrl + Shift + K", textHi: "Ctrl + Shift + K" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + K opens the Hyperlink dialog box in LibreOffice Writer, Calc, and Impress."
  },
  {
    id: 35,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "In LibreOffice Writer, what is the shortcut key for Find and Replace?",
    questionHi: "LibreOffice Writer में 'Find and Replace' की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + F", textHi: "Ctrl + F" },
      { id: "B", textEn: "Ctrl + H", textHi: "Ctrl + H" },
      { id: "C", textEn: "Ctrl + R", textHi: "Ctrl + R" },
      { id: "D", textEn: "Shift + F", textHi: "Shift + F" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + H opens Find and Replace dialog, while Ctrl + F opens the simple Find bar at bottom."
  },
  {
    id: 36,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the minimum zoom percentage supported in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में न्यूनतम ज़ूम प्रतिशत कितना समर्थित है?",
    options: [
      { id: "A", textEn: "5%", textHi: "5%" },
      { id: "B", textEn: "10%", textHi: "10%" },
      { id: "C", textEn: "20%", textHi: "20%" },
      { id: "D", textEn: "25%", textHi: "25%" }
    ],
    correctAnswer: "C",
    explanation: "The minimum zoom in LibreOffice Writer is 20%, and the maximum is 600%."
  },
  {
    id: 37,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "Which shortcut key is used for Subscript text in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में सबस्क्रिप्ट (Subscript, जैसे H₂O) की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Shift + B", textHi: "Ctrl + Shift + B" },
      { id: "B", textEn: "Ctrl + Shift + P", textHi: "Ctrl + Shift + P" },
      { id: "C", textEn: "Ctrl + =", textHi: "Ctrl + =" },
      { id: "D", textEn: "Alt + B", textHi: "Alt + B" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Shift + B applies Subscript in LibreOffice Writer. (Ctrl + Shift + P applies Superscript)."
  },
  {
    id: 38,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What does the error '###' indicate in a LibreOffice Calc cell?",
    questionHi: "LibreOffice Calc सेल में '###' त्रुटि क्या दर्शाती है?",
    options: [
      { id: "A", textEn: "Formula syntax is invalid", textHi: "फ़ॉर्मूला सिंटैक्स अमान्य है" },
      { id: "B", textEn: "Column width is too narrow to display the number", textHi: "कॉलम की चौड़ाई संख्या प्रदर्शित करने के लिए बहुत संकीर्ण है" },
      { id: "C", textEn: "Divided by zero", textHi: "शून्य से विभाजित" },
      { id: "D", textEn: "Cell is locked", textHi: "सेल लॉक है" }
    ],
    correctAnswer: "B",
    explanation: "The '###' string appears when a numeric value or date exceeds the visible width of the column."
  },
  {
    id: 39,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to open the Sidebar in LibreOffice?",
    questionHi: "LibreOffice में साइडबार (Sidebar) खोलने या बंद करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + F5", textHi: "Ctrl + F5" },
      { id: "B", textEn: "Ctrl + F1", textHi: "Ctrl + F1" },
      { id: "C", textEn: "Alt + F5", textHi: "Alt + F5" },
      { id: "D", textEn: "Shift + F5", textHi: "Shift + F5" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + F5 toggles visibility of the Sidebar in LibreOffice applications."
  },
  {
    id: 40,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the address of the very first cell in a LibreOffice Calc worksheet?",
    questionHi: "LibreOffice Calc वर्कशीट में सबसे पहले सेल का पता (Address) क्या होता है?",
    options: [
      { id: "A", textEn: "A1", textHi: "A1" },
      { id: "B", textEn: "1A", textHi: "1A" },
      { id: "C", textEn: "0A", textHi: "0A" },
      { id: "D", textEn: "R1C1", textHi: "R1C1" }
    ],
    correctAnswer: "A",
    explanation: "Cell addresses in Calc are denoted by Column letter followed by Row number, making the first cell A1."
  },
  {
    id: 41,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "Which menu in LibreOffice Writer contains the Mail Merge Wizard?",
    questionHi: "LibreOffice Writer के किस मेनू में मेल मर्ज विज़ार्ड (Mail Merge Wizard) होता है?",
    options: [
      { id: "A", textEn: "File Menu", textHi: "फ़ाइल मेनू" },
      { id: "B", textEn: "Tools Menu", textHi: "टूल्स मेनू (Tools Menu)" },
      { id: "C", textEn: "Insert Menu", textHi: "इन्सर्ट मेनू" },
      { id: "D", textEn: "Format Menu", textHi: "फ़ॉर्मेट मेनू" }
    ],
    correctAnswer: "B",
    explanation: "Mail Merge Wizard is located under the Tools menu in LibreOffice Writer."
  },
  {
    id: 42,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to enter fullscreen mode in LibreOffice?",
    questionHi: "LibreOffice में फुलस्क्रीन मोड में जाने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F11", textHi: "F11" },
      { id: "B", textEn: "Ctrl + Shift + J", textHi: "Ctrl + Shift + J" },
      { id: "C", textEn: "Alt + Enter", textHi: "Alt + Enter" },
      { id: "D", textEn: "Shift + F11", textHi: "Shift + F11" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + Shift + J toggles Full Screen display in LibreOffice."
  },
  {
    id: 43,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to insert a comment in a LibreOffice Calc cell?",
    questionHi: "LibreOffice Calc सेल में टिप्पणी (Comment) जोड़ने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Alt + C", textHi: "Ctrl + Alt + C" },
      { id: "B", textEn: "Ctrl + C", textHi: "Ctrl + C" },
      { id: "C", textEn: "Shift + F2", textHi: "Shift + F2" },
      { id: "D", textEn: "Alt + C", textHi: "Alt + C" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Alt + C inserts a new comment in LibreOffice Writer and Calc."
  },
  {
    id: 44,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to open the Manage Styles window in LibreOffice?",
    questionHi: "LibreOffice में स्टाइल्स (Styles) विंडो खोलने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F11", textHi: "F11" },
      { id: "B", textEn: "F12", textHi: "F12" },
      { id: "C", textEn: "Ctrl + F11", textHi: "Ctrl + F11" },
      { id: "D", textEn: "Shift + F11", textHi: "Shift + F11" }
    ],
    correctAnswer: "A",
    explanation: "F11 opens the Styles and Formatting panel in LibreOffice."
  },
  {
    id: 45,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What does the Calc formula '=COUNT(1, 2, \"A\", 4)' return?",
    questionHi: "Calc फ़ॉर्मूला '=COUNT(1, 2, \"A\", 4)' का परिणाम क्या होगा?",
    options: [
      { id: "A", textEn: "4", textHi: "4" },
      { id: "B", textEn: "3", textHi: "3" },
      { id: "C", textEn: "2", textHi: "2" },
      { id: "D", textEn: "Error", textHi: "Error" }
    ],
    correctAnswer: "B",
    explanation: "COUNT() only counts numeric items. '1', '2', and '4' are numbers (3 total), while 'A' is text."
  },
  {
    id: 46,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to select all cells in a worksheet in LibreOffice Calc?",
    questionHi: "LibreOffice Calc में पूरी वर्कशीट के सभी सेल को सेलेक्ट करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + A", textHi: "Ctrl + A" },
      { id: "B", textEn: "Ctrl + Shift + Space", textHi: "Ctrl + Shift + Space" },
      { id: "C", textEn: "Both A and B", textHi: "A और B दोनों" },
      { id: "D", textEn: "Alt + A", textHi: "Alt + A" }
    ],
    correctAnswer: "C",
    explanation: "Both Ctrl + A and Ctrl + Shift + Space select the entire worksheet in LibreOffice Calc."
  },
  {
    id: 47,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "In LibreOffice Writer, what is the default margins setting on all sides of a page?",
    questionHi: "LibreOffice Writer में पेज के चारों ओर डिफ़ॉल्ट मार्जिन कितना होता है?",
    options: [
      { id: "A", textEn: "0.5 inch", textHi: "0.5 इंच" },
      { id: "B", textEn: "0.75 inch (2 cm)", textHi: "0.75 इंच (2 सेमी)" },
      { id: "C", textEn: "1.0 inch (2.54 cm)", textHi: "1.0 इंच" },
      { id: "D", textEn: "1.25 inch", textHi: "1.25 इंच" }
    ],
    correctAnswer: "B",
    explanation: "LibreOffice Writer sets default page margins to 2 cm (~0.79 in) on all four sides."
  },
  {
    id: 48,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the shortcut key to clear direct formatting in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में डायरेक्ट फॉर्मेटिंग हटाने (Clear Direct Formatting) की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + M", textHi: "Ctrl + M" },
      { id: "B", textEn: "Ctrl + D", textHi: "Ctrl + D" },
      { id: "C", textEn: "Ctrl + Shift + M", textHi: "Ctrl + Shift + M" },
      { id: "D", textEn: "Alt + M", textHi: "Alt + M" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + M clears direct manual formatting, reverting text back to the underlying paragraph style."
  },
  {
    id: 49,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "Which chart type in LibreOffice Calc is best suited to display proportions of a whole (percentages)?",
    questionHi: "LibreOffice Calc में संपूर्ण के अनुपातों (प्रतिशत) को प्रदर्शित करने के लिए कौन-सा चार्ट सबसे उपयुक्त है?",
    options: [
      { id: "A", textEn: "Bar Chart", textHi: "बार चार्ट" },
      { id: "B", textEn: "Line Chart", textHi: "लाइन चार्ट" },
      { id: "C", textEn: "Pie Chart", textHi: "पाई चार्ट (Pie Chart)" },
      { id: "D", textEn: "Scatter Plot", textHi: "स्कैटर प्लॉट" }
    ],
    correctAnswer: "C",
    explanation: "A Pie chart divides a circle into proportional slices to effectively represent percentage parts of a whole."
  },
  {
    id: 50,
    section: "ccc_sec2",
    sectionName: "2. LibreOffice Writer & Calc",
    questionEn: "What is the default orientation of a page in LibreOffice Writer?",
    questionHi: "LibreOffice Writer में पेज का डिफ़ॉल्ट ओरिएंटेशन क्या होता है?",
    options: [
      { id: "A", textEn: "Landscape", textHi: "लैंडस्केप" },
      { id: "B", textEn: "Portrait", textHi: "पोर्ट्रेट (Portrait)" },
      { id: "C", textEn: "Horizontal", textHi: "हॉरिजॉन्टल" },
      { id: "D", textEn: "Custom", textHi: "कस्टम" }
    ],
    correctAnswer: "B",
    explanation: "Standard document pages are vertically oriented in Portrait mode by default."
  },

  // --- SECTION 3: IMPRESS, INTERNET & WEB (Q51 - Q75) ---
  {
    id: 51,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the default file extension of LibreOffice Impress presentations?",
    questionHi: "LibreOffice Impress प्रेजेंटेशन का डिफ़ॉल्ट फ़ाइल एक्सटेंशन क्या होता है?",
    options: [
      { id: "A", textEn: ".pptx", textHi: ".pptx" },
      { id: "B", textEn: ".odp", textHi: ".odp" },
      { id: "C", textEn: ".odt", textHi: ".odt" },
      { id: "D", textEn: ".ods", textHi: ".ods" }
    ],
    correctAnswer: "B",
    explanation: "Open Document Presentation (.odp) is the native default format of LibreOffice Impress."
  },
  {
    id: 52,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the shortcut key to insert a new slide in LibreOffice Impress?",
    questionHi: "LibreOffice Impress में नई स्लाइड डालने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + M", textHi: "Ctrl + M" },
      { id: "B", textEn: "Ctrl + N", textHi: "Ctrl + N" },
      { id: "C", textEn: "Ctrl + Shift + N", textHi: "Ctrl + Shift + N" },
      { id: "D", textEn: "Alt + M", textHi: "Alt + M" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + M inserts a new slide into the current presentation. (Ctrl + N creates an entirely new presentation document)."
  },
  {
    id: 53,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the maximum zoom level possible in LibreOffice Impress?",
    questionHi: "LibreOffice Impress में अधिकतम ज़ूम प्रतिशत कितना संभव है?",
    options: [
      { id: "A", textEn: "500%", textHi: "500%" },
      { id: "B", textEn: "1000%", textHi: "1000%" },
      { id: "C", textEn: "3000%", textHi: "3000%" },
      { id: "D", textEn: "600%", textHi: "600%" }
    ],
    correctAnswer: "C",
    explanation: "LibreOffice Impress allows a maximum zoom magnification of up to 3000%."
  },
  {
    id: 54,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What does URL stand for in web addressing?",
    questionHi: "वेब एड्रेसिंग में URL का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Uniform Resource Locator", textHi: "यूनिफ़ॉर्म रिसोर्स लोकेटर" },
      { id: "B", textEn: "Unified Reference Link", textHi: "यूनिफाइड रेफरेंस लिंक" },
      { id: "C", textEn: "Universal Radio Line", textHi: "यूनिवर्सल रेडियो लाइन" },
      { id: "D", textEn: "Uniform Registration Location", textHi: "यूनिफ़ॉर्म रजिस्ट्रेशन लोकेशन" }
    ],
    correctAnswer: "A",
    explanation: "URL stands for Uniform Resource Locator, specifying the web address of a resource on the Internet."
  },
  {
    id: 55,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "Which of the following is a popular Web Search Engine?",
    questionHi: "निम्नलिखित में से कौन-सा एक वेब सर्च इंजन है?",
    options: [
      { id: "A", textEn: "Google", textHi: "Google" },
      { id: "B", textEn: "Bing", textHi: "Bing" },
      { id: "C", textEn: "DuckDuckGo", textHi: "DuckDuckGo" },
      { id: "D", textEn: "All of the above", textHi: "उपरोक्त सभी (All of the above)" }
    ],
    correctAnswer: "D",
    explanation: "Google, Bing, Yahoo, and DuckDuckGo are all web search engines."
  },
  {
    id: 56,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What does DNS stand for in computer networking?",
    questionHi: "कंप्यूटर नेटवर्किंग में DNS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Domain Name System", textHi: "डोमेन नेम सिस्टम" },
      { id: "B", textEn: "Digital Network Service", textHi: "डिजिटल नेटवर्क सर्विस" },
      { id: "C", textEn: "Data Number Sequence", textHi: "डेटा नंबर सीक्वेंस" },
      { id: "D", textEn: "Direct Node Server", textHi: "डायरेक्ट नोड सर्वर" }
    ],
    correctAnswer: "A",
    explanation: "DNS (Domain Name System) translates human-readable domain names (like example.com) to machine IP addresses."
  },
  {
    id: 57,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the shortcut key to open a New Incognito/Private window in Google Chrome?",
    questionHi: "गूगल क्रोम में नया इनकॉग्निटो (प्राइवेट) विंडो खोलने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + Shift + N", textHi: "Ctrl + Shift + N" },
      { id: "B", textEn: "Ctrl + Shift + P", textHi: "Ctrl + Shift + P" },
      { id: "C", textEn: "Ctrl + Alt + N", textHi: "Ctrl + Alt + N" },
      { id: "D", textEn: "Ctrl + P", textHi: "Ctrl + P" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + Shift + N opens an Incognito private browsing window in Google Chrome and Microsoft Edge."
  },
  {
    id: 58,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "Which protocol is used to assign dynamic IP addresses automatically to devices on a network?",
    questionHi: "नेटवर्क पर उपकरणों को स्वचालित रूप से गतिशील IP पते सौंपने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "DHCP", textHi: "DHCP" },
      { id: "B", textEn: "DNS", textHi: "DNS" },
      { id: "C", textEn: "SNMP", textHi: "SNMP" },
      { id: "D", textEn: "ICMP", textHi: "ICMP" }
    ],
    correctAnswer: "A",
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically allocates IP configurations to network hosts."
  },
  {
    id: 59,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the maximum transition speed option in LibreOffice Impress animations?",
    questionHi: "LibreOffice Impress में स्लाइड ट्रांज़िशन (Transition) की डिफ़ॉल्ट गतियाँ कौन-सी होती हैं?",
    options: [
      { id: "A", textEn: "Slow, Medium, Fast", textHi: "धीमा (Slow), मध्यम (Medium), तेज़ (Fast)" },
      { id: "B", textEn: "Low, High", textHi: "Low, High" },
      { id: "C", textEn: "1x, 2x, 3x", textHi: "1x, 2x, 3x" },
      { id: "D", textEn: "Minimum, Maximum", textHi: "Minimum, Maximum" }
    ],
    correctAnswer: "A",
    explanation: "Slide transitions in Impress offer Slow, Medium, and Fast preset duration choices."
  },
  {
    id: 60,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the full form of ISP?",
    questionHi: "ISP का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Internet Service Provider", textHi: "इंटरनेट सर्विस प्रोवाइडर" },
      { id: "B", textEn: "International Software Protocol", textHi: "इंटरनेशनल सॉफ्टवेयर प्रोटोकॉल" },
      { id: "C", textEn: "Internal Server Port", textHi: "इंटरनल सर्वर पोर्ट" },
      { id: "D", textEn: "Integrated System Protocol", textHi: "इंटीग्रेटेड सिस्टम प्रोटोकॉल" }
    ],
    correctAnswer: "A",
    explanation: "An ISP (Internet Service Provider) is a telecommunications company providing consumer internet connectivity."
  },
  {
    id: 61,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the shortcut key to reload/refresh a web page in modern browsers?",
    questionHi: "आधुनिक ब्राउज़रों में वेब पेज को रीलोड/रिफ्रेश करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "F5 (or Ctrl + R)", textHi: "F5 (या Ctrl + R)" },
      { id: "B", textEn: "F2", textHi: "F2" },
      { id: "C", textEn: "F4", textHi: "F4" },
      { id: "D", textEn: "Ctrl + F", textHi: "Ctrl + F" }
    ],
    correctAnswer: "A",
    explanation: "F5 and Ctrl + R refresh the active web document."
  },
  {
    id: 62,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "Which view in LibreOffice Impress is best suited to reorder and organize multiple slides?",
    questionHi: "LibreOffice Impress में कई स्लाइडों को पुनर्व्यवस्थित और व्यवस्थित करने के लिए कौन-सा व्यू सबसे उपयुक्त है?",
    options: [
      { id: "A", textEn: "Slide Sorter View", textHi: "स्लाइड सॉर्टर व्यू (Slide Sorter View)" },
      { id: "B", textEn: "Outline View", textHi: "आउटलाइन व्यू" },
      { id: "C", textEn: "Notes View", textHi: "नोट्स व्यू" },
      { id: "D", textEn: "Master View", textHi: "मास्टर व्यू" }
    ],
    correctAnswer: "A",
    explanation: "Slide Sorter View displays thumbnail tiles of all slides, making reordering simple."
  },
  {
    id: 63,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the full form of Wi-Fi?",
    questionHi: "Wi-Fi का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Wireless Fidelity", textHi: "वायरलेस फिडेलिटी (Wireless Fidelity)" },
      { id: "B", textEn: "Wireless Field Interface", textHi: "वायरलेस फील्ड इंटरफेस" },
      { id: "C", textEn: "Wide Frequency Internet", textHi: "वाइड फ्रीक्वेंसी इंटरनेट" },
      { id: "D", textEn: "Wireless Fiber Internet", textHi: "वायरलेस फाइबर इंटरनेट" }
    ],
    correctAnswer: "A",
    explanation: "Wi-Fi is commonly referred to as Wireless Fidelity based on IEEE 802.11 standards."
  },
  {
    id: 64,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the network protocol used to browse web pages over the Internet?",
    questionHi: "इंटरनेट पर वेब पेज देखने के लिए किस नेटवर्क प्रोटोकॉल का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "HTTP / HTTPS", textHi: "HTTP / HTTPS" },
      { id: "B", textEn: "FTP", textHi: "FTP" },
      { id: "C", textEn: "SMTP", textHi: "SMTP" },
      { id: "D", textEn: "SNMP", textHi: "SNMP" }
    ],
    correctAnswer: "A",
    explanation: "Hypertext Transfer Protocol (HTTP) and secure HTTPS are the foundational application protocols of the World Wide Web."
  },
  {
    id: 65,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What does the 'Bcc' field in an email message header stand for?",
    questionHi: "ईमेल संदेश हेडर में 'Bcc' का क्या अर्थ है?",
    options: [
      { id: "A", textEn: "Blind Carbon Copy", textHi: "ब्लाइंड कार्बन कॉपी (Blind Carbon Copy)" },
      { id: "B", textEn: "Basic Carbon Copy", textHi: "बेसिक कार्बन कॉपी" },
      { id: "C", textEn: "Backup Contact Copy", textHi: "बैकअप कांटेक्ट कॉपी" },
      { id: "D", textEn: "Blank Closed Copy", textHi: "ब्लैंक क्लोज्ड कॉपी" }
    ],
    correctAnswer: "A",
    explanation: "Bcc (Blind Carbon Copy) sends email copies without disclosing the recipients' addresses to other recipients."
  },
  {
    id: 66,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is an IP address in computer networks?",
    questionHi: "कंप्यूटर नेटवर्क में IP पता (IP Address) क्या है?",
    options: [
      { id: "A", textEn: "A unique numerical identifier assigned to every device connected to a network", textHi: "नेटवर्क से जुड़े प्रत्येक उपकरण को सौंपा गया एक अनूठा संख्यात्मक पहचानकर्ता" },
      { id: "B", textEn: "An email username", textHi: "एक ईमेल यूज़रनेम" },
      { id: "C", textEn: "A web page password", textHi: "वेब पेज पासवर्ड" },
      { id: "D", textEn: "A hardware serial number", textHi: "हार्डवेयर सीरियल नंबर" }
    ],
    correctAnswer: "A",
    explanation: "An IP (Internet Protocol) address uniquely identifies each host device communicating over an IP network."
  },
  {
    id: 67,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "Which key is used to navigate to the Next Slide during a slide show in LibreOffice Impress?",
    questionHi: "LibreOffice Impress में स्लाइड शो के दौरान अगली स्लाइड पर जाने के लिए किस कुंजी का उपयोग किया जाता है?",
    options: [
      { id: "A", textEn: "Spacebar / Enter / Right Arrow", textHi: "Spacebar / Enter / दायाँ तीर (Right Arrow)" },
      { id: "B", textEn: "Esc", textHi: "Esc" },
      { id: "C", textEn: "Ctrl + Z", textHi: "Ctrl + Z" },
      { id: "D", textEn: "Home", textHi: "Home" }
    ],
    correctAnswer: "A",
    explanation: "Pressing Spacebar, Enter, or the Right/Down arrow advances presentation to the next slide or effect."
  },
  {
    id: 68,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is a small text file saved by websites in the user's browser to remember preferences called?",
    questionHi: "वेबसाइटों द्वारा प्राथमिकताओं को याद रखने के लिए ब्राउज़र में सहेजी गई छोटी टेक्स्ट फ़ाइल को क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Cookie", textHi: "कुकी (Cookie)" },
      { id: "B", textEn: "Malware", textHi: "मालवेयर" },
      { id: "C", textEn: "Cache memory", textHi: "कैश मेमोरी" },
      { id: "D", textEn: "Firewall", textHi: "फ़ायरवॉल" }
    ],
    correctAnswer: "A",
    explanation: "HTTP cookies store state information (login sessions, preferences, shopping carts) across web visits."
  },
  {
    id: 69,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What does LAN stand for?",
    questionHi: "LAN का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Local Area Network", textHi: "लोकल एरिया नेटवर्क" },
      { id: "B", textEn: "Large Access Node", textHi: "लार्ज एक्सेस नोड" },
      { id: "C", textEn: "Logical Array Network", textHi: "लॉजिकल ऐरे नेटवर्क" },
      { id: "D", textEn: "Linear Area Network", textHi: "लीनियर एरिया नेटवर्क" }
    ],
    correctAnswer: "A",
    explanation: "LAN (Local Area Network) spans a small geographical area such as a home, office, or school building."
  },
  {
    id: 70,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the maximum number of recipients allowed in a single email typically?",
    questionHi: "सामान्यतः एक समय में ईमेल में अधिकतम कितने प्राप्तकर्ताओं को जोड़ा जा सकता है?",
    options: [
      { id: "A", textEn: "Up to 500 (Gmail daily limits)", textHi: "500 तक (जीमेल दैनिक सीमा)" },
      { id: "B", textEn: "10 only", textHi: "केवल 10" },
      { id: "C", textEn: "10000", textHi: "10000" },
      { id: "D", textEn: "Unlimited", textHi: "असीमित" }
    ],
    correctAnswer: "A",
    explanation: "Free Gmail accounts enforce a maximum of 500 recipients per day to combat spam."
  },
  {
    id: 71,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the shortcut key to bookmark the current web page in most web browsers?",
    questionHi: "अधिकांश वेब ब्राउज़रों में वर्तमान वेब पेज को बुकमार्क (Bookmark) करने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + D", textHi: "Ctrl + D" },
      { id: "B", textEn: "Ctrl + B", textHi: "Ctrl + B" },
      { id: "C", textEn: "Ctrl + M", textHi: "Ctrl + M" },
      { id: "D", textEn: "Alt + B", textHi: "Alt + B" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + D saves the current webpage into your browser bookmarks."
  },
  {
    id: 72,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the default presentation slide aspect ratio in modern LibreOffice Impress?",
    questionHi: "आधुनिक LibreOffice Impress में डिफ़ॉल्ट स्लाइड पहलू अनुपात (Aspect Ratio) क्या होता है?",
    options: [
      { id: "A", textEn: "4:3", textHi: "4:3" },
      { id: "B", textEn: "16:9 (Widescreen)", textHi: "16:9 (वाइडस्क्रीन)" },
      { id: "C", textEn: "16:10", textHi: "16:10" },
      { id: "D", textEn: "1:1", textHi: "1:1" }
    ],
    correctAnswer: "B",
    explanation: "Modern versions of Impress default to 16:9 widescreen format."
  },
  {
    id: 73,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the domain name extension reserved for accredited educational institutions?",
    questionHi: "मान्यता प्राप्त शैक्षणिक संस्थानों के लिए कौन-सा डोमेन एक्सटेंशन आरक्षित है?",
    options: [
      { id: "A", textEn: ".edu", textHi: ".edu" },
      { id: "B", textEn: ".com", textHi: ".com" },
      { id: "C", textEn: ".org", textHi: ".org" },
      { id: "D", textEn: ".gov", textHi: ".gov" }
    ],
    correctAnswer: "A",
    explanation: ".edu is specifically designated for recognized educational bodies and universities (.gov is for government)."
  },
  {
    id: 74,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "Which key combination opens the browser download history in Google Chrome?",
    questionHi: "गूगल क्रोम में डाउनलोड इतिहास देखने की शॉर्टकट कुंजी क्या है?",
    options: [
      { id: "A", textEn: "Ctrl + J", textHi: "Ctrl + J" },
      { id: "B", textEn: "Ctrl + D", textHi: "Ctrl + D" },
      { id: "C", textEn: "Ctrl + H", textHi: "Ctrl + H" },
      { id: "D", textEn: "Alt + J", textHi: "Alt + J" }
    ],
    correctAnswer: "A",
    explanation: "Ctrl + J displays the Downloads page in Chrome/Firefox. (Ctrl + H opens Browsing History)."
  },
  {
    id: 75,
    section: "ccc_sec3",
    sectionName: "3. Impress, Internet & Web",
    questionEn: "What is the full form of WAN?",
    questionHi: "WAN का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Wide Area Network", textHi: "वाइड एरिया नेटवर्क" },
      { id: "B", textEn: "Wireless Access Node", textHi: "वायरलेस एक्सेस नोड" },
      { id: "C", textEn: "Web Accessible Network", textHi: "वेब एक्सेसिबल नेटवर्क" },
      { id: "D", textEn: "World Area Node", textHi: "वर्ल्ड एरिया नोड" }
    ],
    correctAnswer: "A",
    explanation: "A Wide Area Network (WAN) spans broad geographic areas across cities, countries, or globally (the Internet is the largest WAN)."
  },

  // --- SECTION 4: DIGITAL FINANCE & CYBER SECURITY (Q76 - Q100) ---
  {
    id: 76,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does UPI stand for in modern cashless payments?",
    questionHi: "कैशलेस भुगतान में UPI का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Unified Payments Interface", textHi: "यूनिफाइड पेमेंट्स इंटरफेस" },
      { id: "B", textEn: "Universal Public Internet", textHi: "यूनिवर्सल पब्लिक इंटरनेट" },
      { id: "C", textEn: "Unique Personal Identification", textHi: "यूनिक पर्सनल आइडेंटिफिकेशन" },
      { id: "D", textEn: "Unified Postal Interface", textHi: "यूनिफाइड पोस्टल इंटरफेस" }
    ],
    correctAnswer: "A",
    explanation: "UPI (Unified Payments Interface) was developed by National Payments Corporation of India (NPCI) for instant bank-to-bank mobile transfers."
  },
  {
    id: 77,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the USSD service code used to access mobile banking without internet in India?",
    questionHi: "भारत में बिना इंटरनेट के मोबाइल बैंकिंग सेवा का उपयोग करने के लिए कौन-सा USSD कोड डायल किया जाता है?",
    options: [
      { id: "A", textEn: "*99#", textHi: "*99#" },
      { id: "B", textEn: "*121#", textHi: "*121#" },
      { id: "C", textEn: "*100#", textHi: "*100#" },
      { id: "D", textEn: "*198#", textHi: "*198#" }
    ],
    correctAnswer: "A",
    explanation: "*99# is the National Unified USSD Platform (NUUP) code enabling banking on basic feature phones without mobile internet."
  },
  {
    id: 78,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does CVV stand for on debit and credit cards?",
    questionHi: "डेबिट और क्रेडिट कार्ड पर CVV का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Card Verification Value", textHi: "कार्ड वेरिफिकेशन वैल्यू" },
      { id: "B", textEn: "Customer Valid Voucher", textHi: "कस्टमर वैलिड वाउचर" },
      { id: "C", textEn: "Credit Virtual Verification", textHi: "क्रेडिट वर्चुअल वेरिफिकेशन" },
      { id: "D", textEn: "Card Visual Validity", textHi: "कार्ड विज़ुअल वैलिडिटी" }
    ],
    correctAnswer: "A",
    explanation: "CVV (Card Verification Value) is a 3-digit security code on the back of VISA/MasterCard/RuPay cards."
  },
  {
    id: 79,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "Which Indian organisation developed UPI, RuPay, and BHIM?",
    questionHi: "भारत में UPI, RuPay और BHIM ऐप को किस संगठन ने विकसित किया है?",
    options: [
      { id: "A", textEn: "RBI", textHi: "भारतीय रिजर्व बैंक (RBI)" },
      { id: "B", textEn: "NPCI", textHi: "भारतीय राष्ट्रीय भुगतान निगम (NPCI)" },
      { id: "C", textEn: "SEBI", textHi: "सेबी (SEBI)" },
      { id: "D", textEn: "SBI", textHi: "एसबीआई (SBI)" }
    ],
    correctAnswer: "B",
    explanation: "NPCI (National Payments Corporation of India) created UPI, BHIM, RuPay, IMPS, and NACH payment rails."
  },
  {
    id: 80,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does IMPS stand for in electronic banking?",
    questionHi: "इलेक्ट्रॉनिक बैंकिंग में IMPS का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Immediate Payment Service", textHi: "इमीडिएट पेमेंट सर्विस" },
      { id: "B", textEn: "Instant Money Processing System", textHi: "इंस्टेंट मनी प्रोसेसिंग सिस्टम" },
      { id: "C", textEn: "Indian Mobile Payment Standard", textHi: "इंडियन मोबाइल पेमेंट स्टैंडर्ड" },
      { id: "D", textEn: "International Money Protocol Service", textHi: "इंटरनेशनल मनी प्रोटोकॉल सर्विस" }
    ],
    correctAnswer: "A",
    explanation: "IMPS (Immediate Payment Service) enables round-the-clock 24x7 instant interbank fund transfer via mobile and net banking."
  },
  {
    id: 81,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the full form of NEFT in banking funds transfer?",
    questionHi: "बैंकिंग फंड ट्रांसफर में NEFT का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "National Electronic Funds Transfer", textHi: "नेशनल इलेक्ट्रॉनिक फंड्स ट्रांसफर" },
      { id: "B", textEn: "New Electronic Financial Transaction", textHi: "न्यू इलेक्ट्रॉनिक फाइनेंशियल ट्रांजेक्शन" },
      { id: "C", textEn: "National Efficient Fund Transport", textHi: "नेशनल एफिशिएंट फंड ट्रांसपोर्ट" },
      { id: "D", textEn: "Network Electronic Fund Transfer", textHi: "नेटवर्क इलेक्ट्रॉनिक फंड ट्रांसफर" }
    ],
    correctAnswer: "A",
    explanation: "NEFT stands for National Electronic Funds Transfer, operating across half-hourly settlement batches."
  },
  {
    id: 82,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "How many digits are in an Indian Aadhaar card number?",
    questionHi: "भारतीय आधार कार्ड (Aadhaar Number) में कुल कितने अंक होते हैं?",
    options: [
      { id: "A", textEn: "10 digits", textHi: "10 अंक" },
      { id: "B", textEn: "12 digits", textHi: "12 अंक" },
      { id: "C", textEn: "16 digits", textHi: "16 अंक" },
      { id: "D", textEn: "14 digits", textHi: "14 अंक" }
    ],
    correctAnswer: "B",
    explanation: "Aadhaar is a unique 12-digit individual identification number issued by UIDAI."
  },
  {
    id: 83,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the full form of BHIM app launched by the Government of India?",
    questionHi: "भारत सरकार द्वारा लॉन्च किए गए BHIM ऐप का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Bharat Interface for Money", textHi: "भारत इंटरफेस फॉर मनी (Bharat Interface for Money)" },
      { id: "B", textEn: "Bank Handling Internet Money", textHi: "बैंक हैंडलिंग इंटरनेट मनी" },
      { id: "C", textEn: "Bharat Instant Mobile Transfer", textHi: "भारत इंस्टेंट मोबाइल ट्रांसफर" },
      { id: "D", textEn: "Biometric Handling Interface for Money", textHi: "बायोमेट्रिक हैंडलिंग इंटरफेस फॉर मनी" }
    ],
    correctAnswer: "A",
    explanation: "BHIM stands for Bharat Interface for Money, named after Dr. B.R. Ambedkar."
  },
  {
    id: 84,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is Phishing in cyber crimes?",
    questionHi: "साइबर अपराधों में फ़िशिंग (Phishing) क्या है?",
    options: [
      { id: "A", textEn: "Fraudulent attempt to steal sensitive user data like passwords and card details by impersonating a trustworthy entity", textHi: "भरोसेमंद संस्था का रूप धारण करके पासवर्ड और कार्ड विवरण जैसी संवेदनशील जानकारी चुराना" },
      { id: "B", textEn: "Catching computer hardware with fishing rods", textHi: "कंप्यूटर हार्डवेयर पकड़ना" },
      { id: "C", textEn: "Speeding up network bandwidth", textHi: "नेटवर्क बैंडविड्थ बढ़ाना" },
      { id: "D", textEn: "Designing web logos", textHi: "वेब लोगो डिज़ाइन करना" }
    ],
    correctAnswer: "A",
    explanation: "Phishing is a social engineering attack where malicious actors deceive victims into handing over credentials via fake emails and websites."
  },
  {
    id: 85,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What type of malware encrypts a victim's files and demands payment to restore access?",
    questionHi: "कौन-सा मालवेयर उपयोगकर्ता की फ़ाइलों को एन्क्रिप्ट कर देता है और पहुंच बहाल करने के लिए फिरौती मांगता है?",
    options: [
      { id: "A", textEn: "Spyware", textHi: "स्पाइवेयर" },
      { id: "B", textEn: "Ransomware", textHi: "रैनसमवेयर (Ransomware)" },
      { id: "C", textEn: "Adware", textHi: "एडवेयर" },
      { id: "D", textEn: "Trojan Horse", textHi: "ट्रोजन हॉर्स" }
    ],
    correctAnswer: "B",
    explanation: "Ransomware holds user files hostage using military-grade encryption until a ransom (often in cryptocurrency) is paid."
  },
  {
    id: 86,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does the abbreviation OTP stand for?",
    questionHi: "OTP का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "One Time Password", textHi: "वन टाइम पासवर्ड" },
      { id: "B", textEn: "Online Transaction Protocol", textHi: "ऑनलाइन ट्रांजेक्शन प्रोटोकॉल" },
      { id: "C", textEn: "Only Time Processing", textHi: "ओनली टाइम प्रोसेसिंग" },
      { id: "D", textEn: "Official Transmission Pin", textHi: "ऑफिशियल ट्रांसमिशन पिन" }
    ],
    correctAnswer: "A",
    explanation: "An OTP (One Time Password) is a temporary dynamic authentication credential valid for only one transaction or login session."
  },
  {
    id: 87,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "How many digits are present in an Indian PAN (Permanent Account Number)?",
    questionHi: "भारतीय पैन कार्ड (PAN) में कुल कितने अल्फ़ान्यूमेरिक वर्ण (वर्ण/अंक) होते हैं?",
    options: [
      { id: "A", textEn: "8", textHi: "8" },
      { id: "B", textEn: "10", textHi: "10" },
      { id: "C", textEn: "12", textHi: "12" },
      { id: "D", textEn: "16", textHi: "16" }
    ],
    correctAnswer: "B",
    explanation: "PAN is a 10-character alphanumeric string (e.g. ABCDE1234F) issued by the Indian Income Tax Department."
  },
  {
    id: 88,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does IFSC stand for in Indian banking?",
    questionHi: "भारतीय बैंकिंग में IFSC का पूर्ण रूप क्या है?",
    options: [
      { id: "A", textEn: "Indian Financial System Code", textHi: "इंडियन फाइनेंशियल सिस्टम कोड" },
      { id: "B", textEn: "International Fund Security Code", textHi: "इंटरनेशनल फंड सिक्योरिटी कोड" },
      { id: "C", textEn: "Instant Financial Service Center", textHi: "इंस्टेंट फाइनेंशियल सर्विस सेंटर" },
      { id: "D", textEn: "Indian Federal Settlement Code", textHi: "इंडियन फेडरल सेटलमेंट कोड" }
    ],
    correctAnswer: "A",
    explanation: "IFSC is an 11-character alphanumeric code that uniquely identifies each individual bank branch participating in NEFT, RTGS, and IMPS."
  },
  {
    id: 89,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "Which character is always in the 5th position of any standard 11-digit IFSC code?",
    questionHi: "किसी भी मानक 11-अंकीय IFSC कोड के 5वें स्थान पर हमेशा कौन-सा वर्ण होता है?",
    options: [
      { id: "A", textEn: "0 (Zero)", textHi: "0 (शून्य)" },
      { id: "B", textEn: "1", textHi: "1" },
      { id: "C", textEn: "X", textHi: "X" },
      { id: "D", textEn: "Letter corresponding to state", textHi: "राज्य का अक्षर" }
    ],
    correctAnswer: "A",
    explanation: "The 5th character of all IFSC codes is reserved as 0 (Zero) for future use."
  },
  {
    id: 90,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is DigiLocker, launched under the Digital India initiative?",
    questionHi: "डिजिटल इंडिया पहल के तहत शुरू किया गया डिजिलॉकर (DigiLocker) क्या है?",
    options: [
      { id: "A", textEn: "A secure cloud-based platform for issuing, sharing, and verifying authentic digital documents and certificates", textHi: "प्रामाणिक डिजिटल दस्तावेज़ों और प्रमाणपत्रों को जारी करने, साझा करने और सत्यापित करने का सुरक्षित क्लाउड प्लेटफ़ॉर्म" },
      { id: "B", textEn: "An online shopping app", textHi: "एक ऑनलाइन शॉपिंग ऐप" },
      { id: "C", textEn: "A social media video platform", textHi: "सोशल मीडिया वीडियो प्लेटफ़ॉर्म" },
      { id: "D", textEn: "A computer antivirus application", textHi: "एक कंप्यूटर एंटीवायरस एप्लिकेशन" }
    ],
    correctAnswer: "A",
    explanation: "DigiLocker provides citizens with a digital locker tied to their Aadhaar to legally store and share government-issued documents."
  },
  {
    id: 91,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What constitutes a 'strong password'?",
    questionHi: "एक 'मजबूत पासवर्ड' (Strong Password) में क्या शामिल होना चाहिए?",
    options: [
      { id: "A", textEn: "Your birthdate and phone number", textHi: "आपकी जन्मतिथि और फोन नंबर" },
      { id: "B", textEn: "Minimum 8-12 characters combining uppercase, lowercase, numbers, and special symbols", textHi: "कम से कम 8-12 वर्ण जिसमें बड़े अक्षर, छोटे अक्षर, संख्याएं और विशेष प्रतीक शामिल हों" },
      { id: "C", textEn: "12345678", textHi: "12345678" },
      { id: "D", textEn: "Your pet name", textHi: "आपके पालतू जानवर का नाम" }
    ],
    correctAnswer: "B",
    explanation: "Strong passwords resist brute force attacks by utilizing high entropy: length and character mixture."
  },
  {
    id: 92,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does Two-Factor Authentication (2FA) provide?",
    questionHi: "द्वि-चरणीय प्रमाणीकरण (2FA) क्या प्रदान करता है?",
    options: [
      { id: "A", textEn: "An extra layer of security requiring two different types of verification (e.g. password + OTP)", textHi: "सुरक्षा की एक अतिरिक्त परत जिसके लिए दो अलग-अलग प्रकार के सत्यापन की आवश्यकता होती है (जैसे पासवर्ड + ओटीपी)" },
      { id: "B", textEn: "Two separate computer screens", textHi: "दो अलग कंप्यूटर स्क्रीन" },
      { id: "C", textEn: "Faster internet speed", textHi: "तेज़ इंटरनेट गति" },
      { id: "D", textEn: "Free cloud backup", textHi: "मुफ़्त क्लाउड बैकअप" }
    ],
    correctAnswer: "A",
    explanation: "2FA requires two distinct factors (something you know + something you have) before granting access."
  },
  {
    id: 93,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is an unauthorized program that hides inside a legitimate-looking software called?",
    questionHi: "एक अनधिकृत प्रोग्राम जो वैध दिखने वाले सॉफ़्टवेयर के अंदर छिपा होता है, उसे क्या कहा जाता है?",
    options: [
      { id: "A", textEn: "Trojan Horse", textHi: "ट्रोजन हॉर्स (Trojan Horse)" },
      { id: "B", textEn: "Firewall", textHi: "फ़ायरवॉल" },
      { id: "C", textEn: "Kernel", textHi: "कर्नल" },
      { id: "D", textEn: "Compiler", textHi: "कंपाइलर" }
    ],
    correctAnswer: "A",
    explanation: "A Trojan Horse disguises itself as genuine useful software while secretly executing malicious payloads."
  },
  {
    id: 94,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the primary role of a Firewall in computer security?",
    questionHi: "कंप्यूटर सुरक्षा में फ़ायरवॉल (Firewall) की प्राथमिक भूमिका क्या है?",
    options: [
      { id: "A", textEn: "Monitors and filters incoming and outgoing network traffic based on security rules", textHi: "सुरक्षा नियमों के आधार पर आने और जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और फ़िल्टर करता है" },
      { id: "B", textEn: "Extinguishes computer fire", textHi: "कंप्यूटर की आग बुझाना" },
      { id: "C", textEn: "Boosts CPU clock frequency", textHi: "CPU क्लॉक फ्रीक्वेंसी बढ़ाना" },
      { id: "D", textEn: "Cools the power supply", textHi: "पावर सप्लाई को ठंडा करना" }
    ],
    correctAnswer: "A",
    explanation: "A firewall forms a barrier between a trusted internal network and untrusted external networks (like the Internet)."
  },
  {
    id: 95,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "Under which section of India's Information Technology (IT) Act 2000 is hacking defined as a punishable offense?",
    questionHi: "भारत के सूचना प्रौद्योगिकी (IT) अधिनियम 2000 की किस धारा के तहत हैकिंग को दंडनीय अपराध माना गया है?",
    options: [
      { id: "A", textEn: "Section 66", textHi: "धारा 66 (Section 66)" },
      { id: "B", textEn: "Section 302", textHi: "धारा 302" },
      { id: "C", textEn: "Section 420", textHi: "धारा 420" },
      { id: "D", textEn: "Section 144", textHi: "धारा 144" }
    ],
    correctAnswer: "A",
    explanation: "Section 66 of the IT Act 2000 penalizes computer-related offenses such as hacking with imprisonment up to 3 years or fine."
  },
  {
    id: 96,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the maximum amount limit for instant fund transfer via UPI per day as per NPCI standard guidelines?",
    questionHi: "NPCI के मानक दिशानिर्देशों के अनुसार प्रति दिन UPI के माध्यम से सामान्य अधिकतम लेन-देन सीमा कितनी है?",
    options: [
      { id: "A", textEn: "₹10,000", textHi: "₹10,000" },
      { id: "B", textEn: "₹50,000", textHi: "₹50,000" },
      { id: "C", textEn: "₹1,00,000 (1 Lakh)", textHi: "₹1,00,000 (1 लाख रुपये)" },
      { id: "D", textEn: "₹10,00,000", textHi: "₹10,00,000" }
    ],
    correctAnswer: "C",
    explanation: "Standard peer-to-peer UPI transactions are capped at ₹1,00,000 per day by NPCI (with higher limits for specific educational/medical categories)."
  },
  {
    id: 97,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is UMANG app in Indian e-governance?",
    questionHi: "भारतीय ई-गवर्नेंस में उमंग (UMANG) ऐप क्या है?",
    options: [
      { id: "A", textEn: "Unified Mobile Application for New-age Governance", textHi: "यूनिफाइड मोबाइल एप्लिकेशन फॉर न्यू-एज गवर्नेंस (सभी सरकारी सेवाओं के लिए एकल ऐप)" },
      { id: "B", textEn: "Universal Money Access Network Group", textHi: "यूनिवर्सल मनी एक्सेस नेटवर्क ग्रुप" },
      { id: "C", textEn: "Unified Medical Aid National Guide", textHi: "यूनिफाइड मेडिकल एड नेशनल गाइड" },
      { id: "D", textEn: "Universal Meter Reading App", textHi: "यूनिवर्सल मीटर रीडिंग ऐप" }
    ],
    correctAnswer: "A",
    explanation: "UMANG (Unified Mobile Application for New-age Governance) brings central and state government services (EPFO, Aadhaar, PAN, Digilocker) under one single mobile interface."
  },
  {
    id: 98,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What does the lock icon in the browser address bar next to 'https://' symbolize?",
    questionHi: "ब्राउज़र एड्रेस बार में 'https://' के आगे बना पैडलॉक (ताले का आइकन) क्या दर्शाता है?",
    options: [
      { id: "A", textEn: "Connection is encrypted and secure with SSL/TLS certificate", textHi: "कनेक्शन SSL/TLS प्रमाणपत्र के साथ एन्क्रिप्टेड और सुरक्षित है" },
      { id: "B", textEn: "Website cannot be opened", textHi: "वेबसाइट नहीं खोली जा सकती" },
      { id: "C", textEn: "User is permanently logged out", textHi: "उपयोगकर्ता लॉग आउट है" },
      { id: "D", textEn: "Computer hard drive is locked", textHi: "हार्ड ड्राइव लॉक है" }
    ],
    correctAnswer: "A",
    explanation: "The padlock indicates that the data exchanged between your browser and the web server is encrypted via SSL/TLS."
  },
  {
    id: 99,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What should you NEVER share with anyone over the phone or SMS?",
    questionHi: "फोन या एसएमएस पर किसी के साथ क्या कभी भी साझा नहीं करना चाहिए?",
    options: [
      { id: "A", textEn: "Bank OTP, UPI PIN, and CVV", textHi: "बैंक OTP, UPI पिन और CVV नंबर" },
      { id: "B", textEn: "Your favorite color", textHi: "आपका पसंदीदा रंग" },
      { id: "C", textEn: "Your bank branch name", textHi: "बैंक शाखा का नाम" },
      { id: "D", textEn: "City name", textHi: "शहर का नाम" }
    ],
    correctAnswer: "A",
    explanation: "Banks and official agencies never ask for OTP, ATM PIN, UPI PIN, or CVV; sharing these permits unauthorized financial draining."
  },
  {
    id: 100,
    section: "ccc_sec4",
    sectionName: "4. Digital Finance & Cyber Security",
    questionEn: "What is the official national cyber crime reporting portal of the Government of India?",
    questionHi: "भारत सरकार का आधिकारिक राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल कौन-सा है?",
    options: [
      { id: "A", textEn: "cybercrime.gov.in (Helpline: 1930)", textHi: "cybercrime.gov.in (हेल्पलाइन नंबर: 1930)" },
      { id: "B", textEn: "police.in", textHi: "police.in" },
      { id: "C", textEn: "antivirus.gov.in", textHi: "antivirus.gov.in" },
      { id: "D", textEn: "cyberalert.org", textHi: "cyberalert.org" }
    ],
    correctAnswer: "A",
    explanation: "Citizens can report cyber fraud and online crimes directly at cybercrime.gov.in or by calling the dedicated national helpline 1930."
  }
];
