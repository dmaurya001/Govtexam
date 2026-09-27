$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tempDir = "C:\Users\DELL\AppData\Local\Temp"
$artifactDir = "C:\Users\DELL\.gemini\antigravity-ide\brain\5deadacc-a290-4933-b21c-cd5de8477221"

function Take-Screenshot($url, $tempName, $destName, $width = 1280, $height = 850) {
    $tempFile = Join-Path $tempDir $tempName
    $destFile = Join-Path $artifactDir $destName
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }
    
    Write-Host "Capturing $destName ($($width)x$($height))..."
    $proc = Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=$width,$height --screenshot=`"$tempFile`" `"$url`"" -Wait -PassThru
    
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

# 1. Desktop Views (1280x850)
Take-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_welcome.png" "welcome_screen.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_welcome_full.png" "welcome_screen_full.png" 1280 2100
Take-Screenshot "file:///E:/New project/index.html?mode=test_not_started&exam=banking" "shot_not_started.png" "test_not_started_screen.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=olevel" "shot_cbt.png" "cbt_exam_screen.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=ccc" "shot_ccc.png" "cbt_ccc_screen.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_result&exam=olevel" "shot_result.png" "result_scorecard.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_admin" "shot_admin.png" "admin_dashboard.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_admin_auth" "shot_auth.png" "teacher_login_modal.png" 1280 850

# 2. Mobile Phone Views (390x844 - iPhone / Android)
$mobileUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"

function Take-Mobile-Screenshot($url, $tempName, $destName) {
    $tempFile = Join-Path $tempDir $tempName
    $destFile = Join-Path $artifactDir $destName
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }
    
    Write-Host "Capturing Mobile $destName (390x844)..."
    $proc = Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=390,844 --enable-viewport --hide-scrollbars --user-agent=`"$mobileUA`" --screenshot=`"$tempFile`" `"$url`"" -Wait -PassThru
    
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

Take-Mobile-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_mobile_welcome.png" "mobile_welcome.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_not_started&exam=banking" "shot_mobile_not_started.png" "mobile_not_started.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=olevel" "shot_mobile_cbt.png" "mobile_cbt_screen.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_result&exam=olevel" "shot_mobile_result.png" "mobile_result_screen.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_admin" "shot_mobile_admin.png" "mobile_admin_screen.png"

Write-Host "ALL DESKTOP AND MOBILE SCREENSHOTS CAPTURED!"
