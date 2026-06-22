$files = Get-ChildItem -Path "f:\FRONTEND-PROJECTS\FIRST-AXES" -Filter "*.html"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $newContent = [regex]::Replace($content, '/services/[a-zA-Z0-9-]+\.html', '/service-detail.html')
    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
}
