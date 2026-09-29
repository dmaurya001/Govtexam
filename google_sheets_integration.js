/**
 * =========================================================================
 * GOOGLE SHEETS LIVE 2-WAY SYNC SCRIPT — GOVTEXAMHUB CBT PORTAL
 * =========================================================================
 * Captures all Student Registrations & Exam Submissions from ANY device
 * (Phones, Laptops, Tablets, PCs anywhere in the world) into your Google Sheet!
 * 
 * Target Google Sheet URL:
 * https://docs.google.com/spreadsheets/d/1IjVmBmR-q2c7ZP9UORJAn3tqDIjzl2S_hzB0oW6LXhk/edit
 * 
 * 📌 सेटअप निर्देश (सिर्फ 1 मिनट का काम):
 * 1. अपनी Google Sheet खोलें।
 * 2. ऊपर मेनू में Extensions -> Apps Script पर क्लिक करें।
 * 3. पुराना सारा कोड मिटाकर (Delete all), नीचे दिया गया यह पूरा कोड पेस्ट करें।
 * 4. ऊपर Save (💾 या Ctrl+S) दबाएं।
 * 5. ऊपर दाईं ओर "Deploy" बटन दबाएं:
 *    - "Manage deployments" पर क्लिक करें।
 *    - बाईं ओर Web app के सामने पेंसिल आइकन (✏️ Edit) पर क्लिक करें।
 *    - "Version" में "New version" (नया संस्करण) चुनें! ⚠️ (यह सबसे महत्वपूर्ण है!)
 *    - "Execute as" में "Me" चुनें।
 *    - "Who has access" में "Anyone" (कोई भी) चुनें।
 *    - "Deploy" दबाएं और Google परमिशन Allow / Proceed करें।
 * =========================================================================
 */

// आपकी Google Sheet की ID
var TARGET_SPREADSHEET_ID = "1IjVmBmR-q2c7ZP9UORJAn3tqDIjzl2S_hzB0oW6LXhk";

/**
 * सुरक्षित रूप से स्प्रेडशीट प्राप्त करने का हेल्पर फंक्शन
 */
function getSpreadsheet() {
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch(e) {
    ss = null;
  }
  if (!ss) {
    try {
      ss = SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
    } catch(e) {
      ss = null;
    }
  }
  return ss;
}

/**
 * मुख्य शीट "Student Results" को सुरक्षित रूप से ढूंढने या बनाने का हेल्पर फंक्शन
 */
function getMainSheet(ss) {
  var sheet = ss.getSheetByName("Student Results");
  if (!sheet) {
    var allSheets = ss.getSheets();
    if (allSheets && allSheets.length > 0) {
      sheet = allSheets[0];
      try {
        var sName = sheet.getName();
        if (sName === "Sheet1" || sName === "शीट1" || sName.toLowerCase().indexOf("sheet") === 0) {
          sheet.setName("Student Results");
        }
      } catch(e) {}
    } else {
      sheet = ss.insertSheet("Student Results");
    }
  }
  return sheet;
}

/**
 * छात्र रजिस्ट्री शीट "Students_Registry" प्राप्त करने या बनाने का हेल्पर फंक्शन
 */
function getStudentsSheet(ss) {
  var sheet = ss.getSheetByName("Students_Registry");
  if (!sheet) {
    sheet = ss.insertSheet("Students_Registry");
    var headers = [
      "Timestamp", "Student_ID", "Full_Name", "Mobile_Phone",
      "Category", "Roll_Number", "Password_Hash", "Password_Salt",
      "Status", "Raw_JSON"
    ];
    sheet.appendRow(headers);
    try {
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0f172a");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    } catch(e) {}
  }
  return sheet;
}

/**
 * 1. HTTP GET Request — सभी डिवाइस से डेटा लोड करने के लिए (Submissions & Students)
 */
function doGet(e) {
  try {
    var ss = getSpreadsheet();
    if (!ss) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Spreadsheet not found or access denied. Check TARGET_SPREADSHEET_ID: " + TARGET_SPREADSHEET_ID
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var rawAction = (e && e.parameter && e.parameter.action) ? String(e.parameter.action).trim() : "getSubmissions";
    var action = rawAction.toLowerCase();

    // 1. हेल्थ चेक पिंग
    if (action === "ping") {
      return ContentService.createTextOutput(JSON.stringify({
        status: "active",
        message: "GovtExamHub Cloud Sync Webhook is LIVE & READY across all devices!",
        spreadsheetId: TARGET_SPREADSHEET_ID,
        timestamp: new Date().toISOString()
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // 2. पंजीकृत छात्रों की सूची प्राप्त करें (Sync Registered Students across all devices)
    if (action === "getstudents" || action === "get_students" || action === "students") {
      var stuSheet = getStudentsSheet(ss);
      var students = [];
      if (stuSheet && stuSheet.getLastRow() > 1) {
        var rows = stuSheet.getRange(2, 1, stuSheet.getLastRow() - 1, 10).getValues();
        for (var k = 0; k < rows.length; k++) {
          var r = rows[k];
          if (!r[1]) continue; // studentId required
          
          var parsedExtra = {};
          if (r[9] && typeof r[9] === "string") {
            try { parsedExtra = JSON.parse(r[9]); } catch(pe) {}
          }

          students.push({
            studentId: String(r[1]),
            name: String(r[2] || ""),
            phone: String(r[3] || ""),
            category: String(r[4] || "General"),
            batch: String(r[4] || "General"),
            roll: String(r[5] || r[1]),
            passwordHash: String(r[6] || (parsedExtra && parsedExtra.passwordHash) || ""),
            passwordSalt: String(r[7] || (parsedExtra && parsedExtra.passwordSalt) || ""),
            status: String(r[8] || "active"),
            createdAt: r[0] ? r[0].toString() : new Date().toISOString()
          });
        }
      }
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        count: students.length,
        students: students
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // 3. सभी सबमिशन लोड करें (Sync Exam Submissions across all devices)
    var submissions = [];

    // सबसे पहले बैकग्राउंड 'Submissions_DB' शीट से पूरा JSON डेटा लोड करें
    var dbSheet = ss.getSheetByName("Submissions_DB");
    if (dbSheet && dbSheet.getLastRow() > 1) {
      var lastRow = dbSheet.getLastRow();
      var dbRows = dbSheet.getRange(2, 1, lastRow - 1, 5).getValues();
      for (var i = 0; i < dbRows.length; i++) {
        var rawJson = dbRows[i][4];
        if (rawJson && typeof rawJson === "string") {
          try {
            var item = JSON.parse(rawJson);
            // Ignore accidental registration records or non-submissions
            if (item && (item.type === "student_registration" || item.action === "register_student")) {
              continue;
            }
            if (item && (item.examTitle || item.candidate || item.totalScore !== undefined)) {
              submissions.push(item);
            }
          } catch(err) {
            // ignore malformed JSON
          }
        }
      }
    }

    // अगर Submissions_DB खाली हो, तो मुख्य 'Student Results' शीट से डेटा निकालें
    if (submissions.length === 0) {
      var mainSheet = getMainSheet(ss);
      if (mainSheet && mainSheet.getLastRow() > 1) {
        var lastMainRow = mainSheet.getLastRow();
        var numCols = Math.min(mainSheet.getLastColumn(), 20);
        var mainRows = mainSheet.getRange(2, 1, lastMainRow - 1, numCols).getValues();
        for (var j = 0; j < mainRows.length; j++) {
          var row = mainRows[j];
          if (!row[1] && !row[2]) continue; // खाली रो छोड़ें
          submissions.push({
            id: "SHEET-SUB-" + (j + 1),
            submittedAt: row[0] ? row[0].toString() : new Date().toISOString(),
            examTitle: String(row[1] || "Govt Exam"),
            candidate: {
              roll: String(row[3] || "N/A"),
              name: String(row[4] || "Student"),
              studentId: String(row[5] || ""),
              phone: String(row[6] || "N/A"),
              batch: String(row[2] || "General")
            },
            totalScore: Number(row[7]) || 0,
            maxMarks: Number(row[8]) || 100,
            percentage: String(row[9] || "0").replace("%", ""),
            resultStatus: String(row[10] || "PASS"),
            correctCount: Number(row[11]) || 0,
            wrongCount: Number(row[12]) || 0,
            unattemptedCount: Number(row[13]) || 0,
            tabSwitches: Number(row[14]) || 0,
            timeTakenSeconds: 0,
            detailedAnswers: []
          });
        }
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      count: submissions.length,
      submissions: submissions
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 2. HTTP POST Request — छात्र रजिस्ट्रेशन या एग्जाम सबमिशन दर्ज करने के लिए
 */
function doPost(e) {
  try {
    var ss = getSpreadsheet();
    if (!ss) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Spreadsheet not found or access denied. Check TARGET_SPREADSHEET_ID: " + TARGET_SPREADSHEET_ID
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse Payload (JSON String या URL-encoded Parameter)
    var data = null;
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(err) {
        data = null;
      }
    }
    if (!data && e && e.parameter && e.parameter.payload) {
      try {
        data = JSON.parse(e.parameter.payload);
      } catch(err) {
        data = null;
      }
    }
    if (!data && e && e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    }

    if (!data) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "No valid payload received"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    // =========================================================================
    // CASE A: NEW STUDENT REGISTRATION (छात्र का स्थायी खाता क्लाउड में सुरक्षित)
    // =========================================================================
    if (data.type === "student_registration" || data.action === "register_student") {
      var stu = data.student || data;
      var stuSheet = getStudentsSheet(ss);
      
      var cleanPhone = (stu.phone || "").toString().replace(/\D/g, "");
      var stuId = String(stu.studentId || "");
      var stuName = String(stu.name || "");
      var stuCategory = String(stu.category || stu.batch || "General");
      var stuRoll = String(stu.roll || stuId);
      var stuHash = String(stu.passwordHash || "");
      var stuSalt = String(stu.passwordSalt || "");
      var stuStatus = String(stu.status || "active");
      
      // Prevent storing bloated images in spreadsheet
      var cleanSafeJson = { ...stu };
      delete cleanSafeJson.photoUrl;
      delete cleanSafeJson.photoBase64;
      var rawJsonStr = JSON.stringify(cleanSafeJson);

      // Check if student already exists in registry (update if found)
      var foundRow = -1;
      if (stuSheet.getLastRow() > 1) {
        var existingData = stuSheet.getRange(2, 2, stuSheet.getLastRow() - 1, 3).getValues();
        for (var idx = 0; idx < existingData.length; idx++) {
          var rowStuId = String(existingData[idx][0]);
          var rowPhone = String(existingData[idx][2]).replace(/\D/g, "");
          if ((stuId && rowStuId === stuId) || (cleanPhone && rowPhone === cleanPhone)) {
            foundRow = idx + 2;
            break;
          }
        }
      }

      var studentRow = [
        formattedDate,
        stuId,
        stuName,
        cleanPhone,
        stuCategory,
        stuRoll,
        stuHash,
        stuSalt,
        stuStatus,
        rawJsonStr
      ];

      if (foundRow > 0) {
        if (!stuHash || !stuSalt) {
          try {
            var oldCredentials = stuSheet.getRange(foundRow, 7, 1, 2).getValues()[0];
            if (!stuHash && oldCredentials[0]) stuHash = String(oldCredentials[0]);
            if (!stuSalt && oldCredentials[1]) stuSalt = String(oldCredentials[1]);
            studentRow[6] = stuHash;
            studentRow[7] = stuSalt;
          } catch(he) {}
        }
        stuSheet.getRange(foundRow, 1, 1, studentRow.length).setValues([studentRow]);
      } else {
        stuSheet.appendRow(studentRow);
      }

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        message: "Permanent student account synchronized to cloud registry",
        studentId: stuId
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // =========================================================================
    // CASE B: CBT EXAM SUBMISSION (किसी भी परीक्षा का परिणाम क्लाउड में सुरक्षित)
    // =========================================================================
    if (data.type === "student_registration" || data.action === "register_student") {
      return ContentService.createTextOutput(JSON.stringify({
        status: "ignored",
        message: "Student registration record bypassed CASE A"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var mainSheet = getMainSheet(ss);
    if (mainSheet.getLastRow() === 0) {
      createHeaderRow(mainSheet);
    }

    var totalScore = Number(data.totalScore) || 0;
    var maxMarks = Number(data.maxMarks) || 100;
    var resultStatus = totalScore >= (maxMarks * 0.4) ? "PASS" : "FAIL";
    var durationMins = data.timeTakenSeconds ? Math.round(data.timeTakenSeconds / 60) + " mins" : "N/A";
    var examTitle = data.examTitle || (data.candidate && data.candidate.exam) || "Govt CBT Exam";
    var candName = data.candidate ? data.candidate.name : "Student";
    var candRoll = data.candidate ? data.candidate.roll : "N/A";
    var candId = data.studentId || (data.candidate && data.candidate.studentId) || "N/A";
    var candPhone = data.candidate ? data.candidate.phone : "N/A";
    var candBatch = data.candidate ? (data.candidate.batch || data.candidate.category) : "General";

    var resultRow = [
      formattedDate,
      examTitle,
      candBatch,
      candRoll,
      candName,
      candId,
      candPhone,
      totalScore,
      maxMarks,
      (data.percentage || ((totalScore / maxMarks) * 100).toFixed(1)) + "%",
      resultStatus,
      data.correctCount !== undefined ? data.correctCount : 0,
      data.wrongCount !== undefined ? data.wrongCount : 0,
      data.unattemptedCount !== undefined ? data.unattemptedCount : 0,
      data.tabSwitches !== undefined ? data.tabSwitches : 0,
      durationMins
    ];

    // प्रश्न 1 से 100+ तक के चुने गए विकल्प
    if (data.detailedAnswers && data.detailedAnswers.length > 0) {
      data.detailedAnswers.forEach(function(ans) {
        if (!ans || !ans.studentOption) {
          resultRow.push("— (Skipped)");
        } else if (ans.isCorrect) {
          resultRow.push(ans.studentOption + " (✓ Correct)");
        } else {
          resultRow.push(ans.studentOption + " (✗ Key: " + (ans.correctOption || "N/A") + ")");
        }
      });
    }

    mainSheet.appendRow(resultRow);

    // 2. बैकग्राउंड 'Submissions_DB' शीट में पूरा रॉ JSON सेव करें (ताकि किसी भी डिवाइस पर पूरा पेपर दिखे)
    var dbSheet = ss.getSheetByName("Submissions_DB");
    if (!dbSheet) {
      dbSheet = ss.insertSheet("Submissions_DB");
      dbSheet.appendRow(["Timestamp", "Student Name", "Roll Number", "Total Score", "Raw_JSON"]);
      try {
        dbSheet.getRange(1, 1, 1, 5).setFontWeight("bold");
      } catch(e) {}
    }
    
    // Save lightweight JSON (prune excessive questions explanation if huge)
    var lightweightData = { ...data };
    if (lightweightData.detailedAnswers && lightweightData.detailedAnswers.length > 50) {
      lightweightData.detailedAnswers = lightweightData.detailedAnswers.map(function(ans) {
        return {
          id: ans.id,
          studentOption: ans.studentOption,
          correctOption: ans.correctOption,
          isCorrect: ans.isCorrect,
          status: ans.status
        };
      });
    }

    dbSheet.appendRow([
      formattedDate,
      candName,
      candRoll,
      totalScore,
      JSON.stringify(lightweightData)
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      student: candName,
      score: totalScore,
      timestamp: formattedDate
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 3. शीट के हेडर को फॉर्मेट और स्टाइल करने का फंक्शन
 */
function createHeaderRow(sheet) {
  var headers = [
    "Timestamp (IST)",
    "Exam Title",
    "Category / Target",
    "Roll Number",
    "Student Name",
    "Student ID",
    "WhatsApp / Phone",
    "Total Marks",
    "Max Marks",
    "Percentage",
    "Result",
    "Correct (✓)",
    "Incorrect (✗)",
    "Skipped (⚪)",
    "Tab Switches (Cheating)",
    "Time Taken"
  ];

  // Q1 से Q100 तक हेडर जोड़ें
  for (var i = 1; i <= 100; i++) {
    headers.push("Q" + i + "_Response");
  }

  sheet.appendRow(headers);

  try {
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#0B2D5C");
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(4);
  } catch(e) {}
}
