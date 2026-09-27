$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tempDir = "C:\Users\DELL\AppData\Local\Temp"
$artifactDir = "C:\Users\DELL\.gemini\antigravity-ide\brain\5deadacc-a290-4933-b21c-cd5de8477221"

$tempFile = Join-Path $tempDir "shot_login_window.png"
$destFile = Join-Path $artifactDir "login_window_view.png"
if (Test-Path $tempFile) { Remove-Item $tempFile -Force }

# Open index.html, click the login tab, and capture screenshot
$html = "file:///E:/New project/index.html?nosplash=1&auth_tab=login"
$proc = Start-Process -FilePath $chrome -ArgumentList "--headless --no-sandbox --disable-gpu --disable-cache --disk-cache-size=0 --window-size=1280,1600 --virtual-time-budget=4000 --screenshot=`"$tempFile`" `"$html`"" -Wait -PassThru

$tries = 0
while (-not (Test-Path $tempFile) -and $tries -lt 25) {
    Start-Sleep -Milliseconds 300
    $tries++
}

if (Test-Path $tempFile) {
    Copy-Item $tempFile $destFile -Force
    Write-Host "Saved: login_window_view.png ($(Get-Item $destFile | Select-Object -ExpandProperty Length) bytes)"
} else {
    Write-Warning "Could not capture login_window_view.png"
}
