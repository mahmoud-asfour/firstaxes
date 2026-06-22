$sourceDir = "f:\FRONTEND-PROJECTS\FIRST-AXES"
$targetDir = "f:\FRONTEND-PROJECTS\FIRST-AXES\en"

if (-not (Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
}

$files = Get-ChildItem -Path $sourceDir -Filter *.html -File

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # 1. Update HTML tag
    $content = $content -replace '<html lang="ar" dir="rtl">', '<html lang="en" dir="ltr">'
    
    # 2. Fix the language switcher
    $content = $content -replace '<a href="/en/"(.*?)>EN</a>', '<a href="/"$1>AR</a>'
    
    # 3. Update hrefs to point to /en/ for local html files
    # Match href="/..." but exclude /assets, /scss, /js, /en
    $content = [regex]::Replace($content, 'href="/(?!assets|scss|js|en)(.*?\.html)?"', 'href="/en/$1"')
    
    # 4. Translate Navigation and common elements
    $content = $content -replace '>الرئيسية<', '>Home<'
    $content = $content -replace '>من نحن<', '>About Us<'
    $content = $content -replace '>خدماتنا<', '>Services<'
    $content = $content -replace '>مشاريعنا<', '>Projects<'
    $content = $content -replace '>القطاعات<', '>Industries<'
    $content = $content -replace '>الأسئلة الشائعة<', '>FAQ<'
    $content = $content -replace '>المدونة<', '>Blog<'
    $content = $content -replace '>اتصل بنا<', '>Contact Us<'
    $content = $content -replace '>طلب استشارة<', '>Consultation<'
    $content = $content -replace '>طلب استشارة مجانية<', '>Free Consultation<'
    
    # 5. Translate Footer
    $content = $content -replace '>روابط سريعة<', '>Quick Links<'
    $content = $content -replace '>تواصل معنا<', '>Get in Touch<'
    $content = $content -replace '>العنوان<', '>Address<'
    $content = $content -replace '>الهاتف<', '>Phone<'
    $content = $content -replace '>البريد الإلكتروني<', '>Email<'
    $content = $content -replace 'جميع الحقوق محفوظة', 'All Rights Reserved'
    $content = $content -replace '>سياسة الخصوصية<', '>Privacy Policy<'
    $content = $content -replace '>الشروط والأحكام<', '>Terms & Conditions<'
    
    $content = $content -replace 'مكتب استشارات هندسية معتمد في المملكة العربية السعودية\.', 'A certified engineering consultancy in Saudi Arabia.'
    $content = $content -replace 'نقدم حلولاً هندسية متكاملة من التخطيط والتصميم وحتى التسليم النهائي وفق أعلى المعايير\.', 'Providing comprehensive engineering solutions from planning and design to final delivery according to the highest standards.'
    $content = $content -replace 'كود البناء السعودي', 'Saudi Building Code'
    $content = $content -replace 'مهندسون معتمدون', 'Certified Engineers'
    
    # Footer services
    $content = $content -replace '>التصميم المعماري<', '>Architectural Design<'
    $content = $content -replace '>التصميم الإنشائي<', '>Structural Design<'
    $content = $content -replace '>التصميم الكهروميكانيكي<', '>MEP Design<'
    $content = $content -replace '>التراخيص الهندسية<', '>Engineering Licenses<'
    $content = $content -replace '>الإشراف على التنفيذ<', '>Site Supervision<'
    $content = $content -replace '>إدارة المشاريع<', '>Project Management<'

    # 6. Translate CTA Section
    $content = $content -replace 'لنجعل مشروعك هو قصة النجاح القادمة', 'Let''s Make Your Project the Next Success Story'
    $content = $content -replace 'انضم إلى قائمة عملائنا المميزين وابدأ مشروعك الهندسي معنا بثقة واطمئنان\.', 'Join our distinguished clients and start your engineering project with confidence and peace of mind.'

    # 7. Write translated content
    $targetPath = Join-Path -Path $targetDir -ChildPath $file.Name
    Set-Content -Path $targetPath -Value $content -Encoding UTF8
}

Write-Host "English files generated successfully in /en/"
