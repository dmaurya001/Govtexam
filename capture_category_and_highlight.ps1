$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tempDir = "C:\Users\DELL\AppData\Local\Temp"
$artifactDir = "C:\Users\DELL\.gemini\antigravity-ide\brain\5deadacc-a290-4933-b21c-cd5de8477221"

function Capture-Url($url, $tempName, $destName, $width = 1280, $height = 1450) {
    $tempFile = Join-Path $tempDir $tempName
    $destFile = Join-Path $artifactDir $destName
    if (Test-Path $tempFile) { Remove-Item $tempFile -Force }

    Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=$width,$height --virtual-time-budget=4000 --screenshot=`"$tempFile`" `"$url`"" -Wait
    
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

# 1. Normal homepage with default first exam (NEET) and highlighted registration card
Capture-Url "file:///E:/New project/index.html?nosplash=1" "shot_neet_highlight.png" "home_exam_selection_highlight.png" 1280 1550

# 2. Homepage with SSC selected and highlighted registration card
Capture-Url "file:///E:/New project/index.html?nosplash=1&exam=ssc" "shot_ssc_highlight.png" "ssc_exam_selection_highlight.png" 1280 1550

# 3. Homepage with Banking selected and login window active & highlighted
Capture-Url "file:///E:/New project/index.html?nosplash=1&exam=banking&auth_tab=login" "shot_banking_login.png" "banking_login_highlight.png" 1280 1550
