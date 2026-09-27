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

# 1. Automated Test Suite Screenshot
Capture-Page "file:///E:/New project/test_runner.html" "shot_test_runner.png" "test_runner_student_accounts.png" 1280 950

# 2. Student Dashboard with Live Mock History & Stats
Capture-Page "file:///E:/New project/index.html?mode=test_student_dashboard" "shot_student_dash.png" "student_dashboard_live.png" 1280 950

# 3. Welcome Screen with Student Auth Switcher & Photo Upload
Capture-Page "file:///E:/New project/index.html?nosplash=1" "shot_student_welcome.png" "welcome_screen_student_auth.png" 1280 1650

# 4. Admin Student Accounts Panel (Panel 5 with student table & actions)
Capture-Page "file:///E:/New project/index.html?mode=test_admin&admin_tab=students" "shot_admin_students.png" "admin_students_panel.png" 1280 950
