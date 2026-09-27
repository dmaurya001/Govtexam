$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tempDir = "C:\Users\DELL\AppData\Local\Temp"
$artifactDir = "C:\Users\DELL\.gemini\antigravity-ide\brain\5deadacc-a290-4933-b21c-cd5de8477221"

function Capture-Page($url, $tempName, $destName, $width = 1280, $height = 950) {
    $tempFile = Join-Path $tempDir $tempName
    $destFile = Join-Path $artifactDir $destName
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }
    
    Write-Host "Capturing $destName ($($width)x$($height))..."
    $proc = Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=$width,$height --virtual-time-budget=6000 --screenshot=`"$tempFile`" `"$url`"" -Wait -PassThru
    
    $tries = 0
    while (-not (Test-Path $tempFile) -and $tries -lt 25) {
        Start-Sleep -Milliseconds 300
        $tries++
    }
    
    if (Test-Path $tempFile) {
        Copy-Item $tempFile $destFile -Force
        Write-Host "Saved: $destName ($(Get-Item $destFile | Select-Object -ExpandProperty Length) bytes)"
    } else {
        Write-Warning "Could not capture $destName"
    }
}

# 1. Automated Verification Suite with Test 19, 20 & 21
Capture-Page "file:///E:/New project/test_runner.html" "shot_test_runner.png" "test_runner_results.png" 1280 950

# 2. Homepage (Clean, no choose exam section, clear banner + 4 feature cards + auth card)
Capture-Page "file:///E:/New project/index.html?nosplash=1" "shot_home.png" "welcome_clean_homepage.png" 1280 1550

# 3. Student Dashboard (Choose Exam & Mock Test Card with 13 categories)
Capture-Page "file:///E:/New project/index.html?mode=test_student_dashboard" "shot_dash.png" "student_dashboard_exam_selector.png" 1280 1200

# 4. Student Dashboard with Police Exam Selected
Capture-Page "file:///E:/New project/index.html?mode=test_student_dashboard&exam=police" "shot_dash_police.png" "student_dashboard_police.png" 1280 1200

# 5. Result Screen after Exam Submission
Capture-Page "file:///E:/New project/index.html?mode=test_result" "shot_result.png" "exam_result_scorecard.png" 1280 1200

# 6. Full Student Dashboard showing updated Recent Attempts & Refresh Button
Capture-Page "file:///E:/New project/index.html?mode=test_student_dashboard" "shot_dash_full.png" "student_dashboard_full_history.png" 1280 2200

# 7. Innovation Support Modal & UPI QR Code
Capture-Page "file:///E:/New project/index.html?nosplash=1&show_support_modal=1" "shot_support_modal.png" "innovation_support_modal.png" 1280 950
