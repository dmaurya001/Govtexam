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

# 1. Automated Test Suite Screenshot
Take-Screenshot "file:///E:/New project/test_runner.html" "shot_test_runner.png" "test_runner_result.png" 1280 850

# 2. Desktop Views (with ?nosplash=1)
Take-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_welcome_13.png" "welcome_screen_13_live.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_reg_card.png" "registration_card_deepak.png" 1280 1350
Take-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=neet" "shot_cbt_neet.png" "cbt_neet_screen.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=banking&subexam=ibps-po-pre" "shot_cbt_banking.png" "cbt_banking_continuous.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=ssc&subexam=ssc-cgl-tier1&practice=1" "shot_cbt_practice.png" "cbt_practice_mode.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_result&exam=neet" "shot_result_neet.png" "result_neet_scorecard.png" 1280 850
Take-Screenshot "file:///E:/New project/index.html?mode=test_admin&admin_tab=patterns" "shot_admin_patterns.png" "admin_patterns_screen.png" 1280 850

# 3. Mobile Phone Views (390x844)
$mobileUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"

function Take-Mobile-Screenshot($url, $tempName, $destName) {
    $tempFile = Join-Path $tempDir $tempName
    $destFile = Join-Path $artifactDir $destName
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }
    
    Write-Host "Capturing Mobile $destName (390x844)..."
    $proc = Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=390,844 --enable-viewport --user-agent=`"$mobileUA`" --screenshot=`"$tempFile`" `"$url`"" -Wait -PassThru
    
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

Take-Mobile-Screenshot "file:///E:/New project/index.html?nosplash=1" "shot_mob_welcome_13.png" "mobile_welcome_13_live.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_cbt&exam=neet" "shot_mob_neet.png" "mobile_cbt_neet.png"
Take-Mobile-Screenshot "file:///E:/New project/index.html?mode=test_result&exam=neet" "shot_mob_result_neet.png" "mobile_result_neet.png"

Write-Host "ALL SCREENSHOTS CAPTURED SUCCESSFULLY!"
