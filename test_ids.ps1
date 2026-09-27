$appJs = Get-Content "e:/New project/app.js" -Raw
$html = Get-Content "e:/New project/index.html" -Raw

$matches = [regex]::Matches($appJs, 'document\.getElementById\("([^"]+)"\)\.addEventListener')
Write-Host "Found $($matches.Count) direct addEventListener calls..."

$missing = @()
foreach ($m in $matches) {
    $id = $m.Groups[1].Value
    if (-not $html.Contains("id=""$id""") -and -not $html.Contains("id='$id'")) {
        $missing += $id
        Write-Host "CRITICAL BUG: Missing element in HTML: $id (calling addEventListener on null!)"
    }
}

if ($missing.Count -eq 0) {
    Write-Host "No direct addEventListener calls on missing IDs."
} else {
    Write-Host "Total missing elements: $($missing.Count)"
}
