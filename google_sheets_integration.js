/**
 * =========================================================================
 * GOOGLE SHEETS LIVE 2-WAY SYNC SCRIPT — B.Sc. NURSING ENTRANCE CBT PORTAL
 * =========================================================================
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
 * 1. HTTP GET Request — सभी डिवाइस (फोन, लैपटॉप) से एडमिन डैशबोर्ड में डेटा लोड करने के लिए
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

    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "getSubmissions";

    // हेल्थ चेक पिंग
    if (action === "ping") {
      return ContentService.createTextOutput(JSON.stringify({
        status: "active",
        message: "Google Apps Script 2-Way Sync Webhook is LIVE & READY!",
        spreadsheetId: TARGET_SPREADSHEET_ID,
        timestamp: new Date().toISOString()
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var submissions = [];

    // 1. सबसे पहले बैकग्राउंड 'Submissions_DB' शीट से पूरा JSON डेटा लोड करें
    var dbSheet = ss.getSheetByName("Submissions_DB");
    if (dbSheet && dbSheet.getLastRow() > 1) {
      var lastRow = dbSheet.getLastRow();
      var dbRows = dbSheet.getRange(2, 1, lastRow - 1, 5).getValues();
      for (var i = 0; i < dbRows.length; i++) {
        var rawJson = dbRows[i][4];
        if (rawJson && typeof rawJson === "string") {
          try {
            submissions.push(JSON.parse(rawJson));
          } catch(err) {
            // ignore malformed JSON
          }
        }
      }
    }

    // 2. अगर Submissions_DB खाली हो, तो मुख्य 'Student Results' शीट से डेटा निकालें
    if (submissions.length === 0) {
      var mainSheet = getMainSheet(ss);
      if (mainSheet && mainSheet.getLastRow() > 1) {
        var lastMainRow = mainSheet.getLastRow();
        var numCols = Math.min(mainSheet.getLastColumn(), 20);
        var mainRows = mainSheet.getRange(2, 1, lastMainRow - 1, numCols).getValues();
        for (var j = 0; j < mainRows.length; j++) {
          var r = mainRows[j];
          if (!r[1] && !r[2]) continue; // खाली रो छोड़ें
          submissions.push({
            id: "SHEET-SUB-" + (j + 1),
            submittedAt: r[0] ? r[0].toString() : new Date().toISOString(),
            candidate: {
              roll: String(r[1] || "N/A"),
              name: String(r[2] || "Student"),
              phone: String(r[3] || "N/A"),
              batch: String(r[4] || "General")
            },
            totalScore: Number(r[5]) || 0,
            percentage: String(r[6] || "0").replace("%", ""),
            resultStatus: String(r[7] || "PASS"),
            correctCount: Number(r[8]) || 0,
            wrongCount: Number(r[9]) || 0,
            unattemptedCount: Number(r[10]) || 0,
            sectionScores: {
              physics: { score: Number(r[11]) || 0 },
              chemistry: { score: Number(r[12]) || 0 },
              biology: { score: Number(r[13]) || 0 },
              english: { score: Number(r[14]) || 0 }
            },
            tabSwitches: Number(r[15]) || 0,
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
 * 2. HTTP POST Request — जब भी छात्र अपने फोन पर एग्जाम सबमिट करेगा
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

    // 1. मुख्य शीट ("Student Results") प्राप्त करें
    var mainSheet = getMainSheet(ss);

    // अगर पहली बार डेटा आ रहा है और शीट खाली है, तो सुंदर हेडर रो (Header Row) बनाएं
    if (mainSheet.getLastRow() === 0) {
      createHeaderRow(mainSheet);
    }

    // छात्र का समय व रिजल्ट स्टेटस
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var totalScore = Number(data.totalScore) || 0;
    var resultStatus = totalScore >= 50 ? "PASS" : "FAIL";
    var durationMins = data.timeTakenSeconds ? Math.round(data.timeTakenSeconds / 60) + " mins" : "N/A";

    var physScore = (data.sectionScores && data.sectionScores.physics) ? data.sectionScores.physics.score : 0;
    var chemScore = (data.sectionScores && data.sectionScores.chemistry) ? data.sectionScores.chemistry.score : 0;
    var bioScore = (data.sectionScores && data.sectionScores.biology) ? data.sectionScores.biology.score : 0;
    var engScore = (data.sectionScores && data.sectionScores.english) ? data.sectionScores.english.score : 0;

    // मुख्य विवरण (Student Profile + Overall Score)
    var row = [
      formattedDate,
      data.candidate ? data.candidate.roll : "N/A",
      data.candidate ? data.candidate.name : "N/A",
      data.candidate ? data.candidate.phone : "N/A",
      (data.candidate && data.candidate.batch) ? data.candidate.batch : "General",
      totalScore,
      (data.percentage || totalScore) + "%",
      resultStatus,
      data.correctCount !== undefined ? data.correctCount : 0,
      data.wrongCount !== undefined ? data.wrongCount : 0,
      data.unattemptedCount !== undefined ? data.unattemptedCount : 0,
      physScore,
      chemScore,
      bioScore,
      engScore,
      data.tabSwitches !== undefined ? data.tabSwitches : 0,
      durationMins
    ];

    // प्रश्न 1 से 100 तक के चुने गए विकल्प (Q1 to Q100 with result)
    if (data.detailedAnswers && data.detailedAnswers.length > 0) {
      data.detailedAnswers.forEach(function(ans) {
        if (!ans || !ans.studentOption) {
          row.push("— (Skipped)");
        } else if (ans.isCorrect) {
          row.push(ans.studentOption + " (✓ Correct)");
        } else {
          row.push(ans.studentOption + " (✗ Key: " + (ans.correctOption || "N/A") + ")");
        }
      });
    }

    mainSheet.appendRow(row);

    // 2. बैकग्राउंड 'Submissions_DB' शीट में पूरा रॉ डेटा सेव करें (ताकि टीचर किसी भी डिवाइस से देख सकें)
    var dbSheet = ss.getSheetByName("Submissions_DB");
    if (!dbSheet) {
      dbSheet = ss.insertSheet("Submissions_DB");
      dbSheet.appendRow(["Timestamp", "Student Name", "Roll Number", "Total Score", "Raw_JSON"]);
      try {
        dbSheet.getRange(1, 1, 1, 5).setFontWeight("bold");
      } catch(e) {}
    }
    
    dbSheet.appendRow([
      formattedDate,
      data.candidate ? data.candidate.name : "Anonymous",
      data.candidate ? data.candidate.roll : "N/A",
      totalScore,
      JSON.stringify(data)
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      student: data.candidate ? data.candidate.name : "Anonymous",
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
    "Roll Number",
    "Student Name",
    "WhatsApp / Phone",
    "Category / Target",
    "Total Marks (/100)",
    "Percentage",
    "Result",
    "Correct (✓)",
    "Incorrect (✗)",
    "Skipped (⚪)",
    "Physics (/25)",
    "Chemistry (/25)",
    "Biology (/40)",
    "English (/10)",
    "Tab Switches (Cheating)",
    "Time Taken"
  ];

  // Q1 से Q100 तक हेडर जोड़ें
  for (var i = 1; i <= 100; i++) {
    headers.push("Q" + i + "_Response");
  }

  sheet.appendRow(headers);

  // हेडर रो को बोल्ड, नेवी ब्लू बैकग्राउंड, वाइट टेक्स्ट और टॉप रो व प्रथम 3 कॉलम फ्रीज करें
  try {
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e3a8a");
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(3);
  } catch(e) {}
}
