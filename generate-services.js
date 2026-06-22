const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir);
}

const services = [
  {
    id: 'architectural-design',
    title: 'التصميم المعماري',
    desc: 'تصاميم معمارية مبتكرة وعصرية تجمع بين الجمال والوظيفية وتلبي احتياجات المشروع وفق أعلى المعايير.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/><path d="M9 12h6"/></svg>'
  },
  {
    id: 'structural-design',
    title: 'التصميم الإنشائي',
    desc: 'حسابات إنشائية دقيقة وتصميم عناصر هيكلية آمنة ومتوافقة مع كود البناء السعودي والمعايير الدولية.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>'
  },
  {
    id: 'mep-design',
    title: 'التصميم الكهروميكانيكي',
    desc: 'تصميم شامل للأنظمة الكهربائية والميكانيكية والسباكة (MEP) بأحدث التقنيات ومعايير الكفاءة.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
  },
  {
    id: 'engineering-licenses',
    title: 'التراخيص الهندسية',
    desc: 'نساعدك في الحصول على جميع التراخيص والتصاريح الهندسية المطلوبة بسرعة وكفاءة من الجهات المختصة.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>'
  },
  {
    id: 'municipality-approvals',
    title: 'اعتمادات البلدية',
    desc: 'خدمة متكاملة للحصول على موافقات واعتمادات البلدية والتنسيق مع الجهات الحكومية المعنية.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>'
  },
  {
    id: 'building-code-compliance',
    title: 'كود البناء السعودي',
    desc: 'ضمان مطابقة جميع التصاميم والمخططات لمتطلبات كود البناء السعودي SBC والأنظمة المحلية.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>'
  },
  {
    id: 'construction-supervision',
    title: 'الإشراف على التنفيذ',
    desc: 'إشراف هندسي متواصل على أعمال التنفيذ لضمان الجودة والمطابقة للمخططات المعتمدة.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"/><path d="M17 12h5"/><path d="m7.5 4.2 2 3.5"/><path d="m14.5 16.3 2 3.5"/><path d="m4.2 16.5 3.5-2"/><path d="m16.3 9.5 3.5-2"/><path d="m4.2 7.5 3.5 2"/><path d="m16.3 14.5 3.5 2"/><path d="m7.5 19.8 2-3.5"/><path d="m14.5 7.7 2-3.5"/><circle cx="12" cy="12" r="3"/></svg>'
  },
  {
    id: 'project-management',
    title: 'إدارة المشاريع',
    desc: 'إدارة احترافية للمشاريع من البداية للنهاية مع الالتزام بالجداول الزمنية والميزانيات المحددة.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M12 12h.01"/></svg>'
  },
  {
    id: 'quantity-surveying',
    title: 'حصر الكميات',
    desc: 'حصر دقيق لكميات المواد والأعمال المطلوبة مع إعداد جداول الكميات ومقايسات التكاليف.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>'
  },
  {
    id: 'technical-reports',
    title: 'التقارير الفنية',
    desc: 'إعداد تقارير فنية هندسية شاملة ودقيقة لتقييم المباني والمنشآت القائمة وتقديم التوصيات.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
  },
  {
    id: 'feasibility-studies',
    title: 'دراسات الجدوى',
    desc: 'دراسات جدوى اقتصادية وفنية شاملة لتقييم المشاريع واتخاذ القرارات الاستثمارية المدروسة.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>'
  },
  {
    id: 'engineering-consultations',
    title: 'الاستشارات الهندسية',
    desc: 'استشارات هندسية متخصصة من فريق خبراء لمساعدتك في اتخاذ أفضل القرارات لمشروعك.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  }
];

const template = (service) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service.title} | فيرست أكسز للاستشارات الهندسية</title>
  <meta name="description" content="${service.desc}">
  <link rel="canonical" href="https://firstaxes.com/services/${service.id}.html">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="/scss/main.scss">
  <link rel="icon" type="image/svg+xml" href="/assets/favicons/favicon.svg">
</head>
<body>
  <!-- ========== HEADER ========== -->
  <header class="header" id="header">
    <div class="header__inner">
      <a href="/" class="header__logo">
        <span class="logo-text">First<span>Axes</span></span>
      </a>
      <nav class="header__nav" id="main-nav">
        <a href="/" class="header__nav-link">الرئيسية</a>
        <a href="/about.html" class="header__nav-link">من نحن</a>
        <a href="/services.html" class="header__nav-link active">خدماتنا</a>
        <a href="/projects.html" class="header__nav-link">مشاريعنا</a>
        <a href="/industries.html" class="header__nav-link">القطاعات</a>
        <a href="/faq.html" class="header__nav-link">الأسئلة الشائعة</a>
        <a href="/blog.html" class="header__nav-link">المدونة</a>
        <a href="/contact.html" class="header__nav-link">اتصل بنا</a>
      </nav>
      <div class="header__actions">
        <a href="/request-consultation.html" class="btn btn-primary btn-sm header__cta">طلب استشارة</a>
      </div>
    </div>
  </header>

  <main id="main-content">
    <!-- ===== PAGE HERO ===== -->
    <section class="page-hero">
      <div class="page-hero__inner">
        <div style="display: inline-block; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 50%; margin-bottom: 1rem; color: var(--color-gold-400);">
          ${service.icon}
        </div>
        <h1 class="page-hero__title reveal">${service.title}</h1>
        <p class="page-hero__desc reveal">${service.desc}</p>
        
        <nav class="breadcrumb breadcrumb--light reveal" aria-label="Breadcrumb">
          <ol class="breadcrumb__list">
            <li class="breadcrumb__item"><a href="/">الرئيسية</a></li>
            <li class="breadcrumb__item"><a href="/services.html">خدماتنا</a></li>
            <li class="breadcrumb__item active" aria-current="page">${service.title}</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- ===== SERVICE DETAILS ===== -->
    <section class="section-padding">
      <div class="container">
        <div class="grid" style="display: grid; grid-template-columns: 1fr; gap: var(--space-10); @media(min-width: 992px) { grid-template-columns: 2fr 1fr; }">
          
          <!-- Main Content -->
          <div class="service-content">
            <h2 style="font-size: var(--text-2xl); font-weight: var(--weight-bold); color: var(--color-navy-800); margin-bottom: var(--space-4);">نظرة عامة على الخدمة</h2>
            <p style="color: var(--color-gray-700); line-height: var(--leading-relaxed); margin-bottom: var(--space-6);">${service.desc} نحن نركز على تحقيق أقصى درجات الجودة مع الالتزام التام بكود البناء السعودي.</p>
            
            <h3 style="font-size: var(--text-xl); font-weight: var(--weight-semibold); color: var(--color-navy-800); margin-bottom: var(--space-4);">ماذا نقدم؟</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: var(--space-8);">
              <li style="display: flex; gap: var(--space-3); margin-bottom: var(--space-3); color: var(--color-gray-700);">
                <svg style="color: var(--color-gold-500); flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                دراسة تحليلية شاملة للمتطلبات والمعايير.
              </li>
              <li style="display: flex; gap: var(--space-3); margin-bottom: var(--space-3); color: var(--color-gray-700);">
                <svg style="color: var(--color-gold-500); flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                إعداد مخططات تفصيلية مطابقة لاشتراطات البلدية.
              </li>
              <li style="display: flex; gap: var(--space-3); margin-bottom: var(--space-3); color: var(--color-gray-700);">
                <svg style="color: var(--color-gold-500); flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                تطبيق أعلى معايير الجودة والسلامة.
              </li>
              <li style="display: flex; gap: var(--space-3); margin-bottom: var(--space-3); color: var(--color-gray-700);">
                <svg style="color: var(--color-gold-500); flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                دعم مستمر وإشراف دقيق خلال مراحل التنفيذ.
              </li>
            </ul>

            <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=800&h=400&fit=crop" alt="${service.title}" style="width: 100%; border-radius: var(--radius-xl); margin-bottom: var(--space-8);">
          </div>

          <!-- Sidebar -->
          <aside class="service-sidebar">
            <div style="background: var(--color-gray-50); padding: var(--space-6); border-radius: var(--radius-xl); border: 1px solid var(--color-gray-200); position: sticky; top: calc(var(--header-height) + 2rem);">
              <h3 style="font-size: var(--text-lg); font-weight: var(--weight-bold); color: var(--color-navy-800); margin-bottom: var(--space-4);">هل تحتاج إلى مساعدة في هذا المجال؟</h3>
              <p style="color: var(--color-gray-600); font-size: var(--text-sm); margin-bottom: var(--space-6);">فريقنا من المهندسين الاستشاريين جاهز لتقديم أفضل الحلول لمشروعك.</p>
              
              <a href="/request-consultation.html" class="btn btn-primary btn-block" style="margin-bottom: var(--space-3);">طلب تسعيرة للخدمة</a>
              <a href="https://wa.me/9665XXXXXXXX" class="btn btn-whatsapp btn-block" target="_blank">تواصل عبر واتساب</a>
              
              <hr style="border: 0; border-top: 1px solid var(--color-gray-200); margin: var(--space-6) 0;">
              
              <h4 style="font-size: var(--text-base); font-weight: var(--weight-bold); margin-bottom: var(--space-3);">خدمات أخرى قد تهمك:</h4>
              <ul style="list-style: none; padding: 0;">
                ${services.filter(s => s.id !== service.id).slice(0, 4).map(s => `
                  <li style="margin-bottom: var(--space-2);">
                    <a href="/services/${s.id}.html" style="color: var(--color-gray-600); font-size: var(--text-sm); transition: color 0.2s;">› ${s.title}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>

  <!-- ========== CTA SECTION ========== -->
  <section class="cta-section">
    <div class="cta-section__inner">
      <h2 class="cta-section__title reveal">هل لديك مشروع هندسي؟</h2>
      <p class="cta-section__desc reveal">نحن هنا لتحويل أفكارك إلى واقع ملموس باحترافية عالية. تواصل معنا اليوم لمناقشة مشروعك.</p>
      <div class="btn-group btn-group-center reveal">
        <a href="/request-consultation.html" class="btn btn-primary btn-lg">طلب استشارة مجانية</a>
        <a href="tel:+9665XXXXXXXX" class="btn btn-outline-white btn-lg">اتصل الآن</a>
      </div>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer" id="footer" role="contentinfo">
    <div class="footer__main">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="logo-text">First<span>Axes</span></span>
        </div>
        <p>مكتب استشارات هندسية معتمد في المملكة العربية السعودية. نقدم حلولاً هندسية متكاملة من التخطيط والتصميم وحتى التسليم النهائي وفق أعلى المعايير.</p>
        <div class="footer__certifications">
          <div class="cert-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            كود البناء السعودي
          </div>
          <div class="cert-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            مهندسون معتمدون
          </div>
        </div>
        <div class="footer__social">
          <a href="#" target="_blank" rel="noopener" aria-label="تويتر"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" target="_blank" rel="noopener" aria-label="لينكد إن"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="#" target="_blank" rel="noopener" aria-label="إنستغرام"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
        </div>
      </div>
      <div class="footer__col">
        <h3 class="footer__heading">خدماتنا</h3>
        <div class="footer__links">
          <a href="/services/architectural-design.html">التصميم المعماري</a>
          <a href="/services/structural-design.html">التصميم الإنشائي</a>
          <a href="/services/mep-design.html">التصميم الكهروميكانيكي</a>
          <a href="/services/engineering-licenses.html">التراخيص الهندسية</a>
          <a href="/services/construction-supervision.html">الإشراف على التنفيذ</a>
          <a href="/services/project-management.html">إدارة المشاريع</a>
        </div>
      </div>
      <div class="footer__col">
        <h3 class="footer__heading">روابط سريعة</h3>
        <div class="footer__links">
          <a href="/about.html">من نحن</a>
          <a href="/projects.html">مشاريعنا</a>
          <a href="/industries.html">القطاعات</a>
          <a href="/blog.html">المدونة</a>
          <a href="/faq.html">الأسئلة الشائعة</a>
          <a href="/contact.html">اتصل بنا</a>
        </div>
      </div>
      <div class="footer__col">
        <h3 class="footer__heading">تواصل معنا</h3>
        <div class="footer__contact-info">
          <div class="contact-item">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div class="contact-text"><strong>العنوان</strong>الرياض، المملكة العربية السعودية</div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div class="contact-text"><strong>الهاتف</strong><a href="tel:+9665XXXXXXXX" dir="ltr">+966 5X XXX XXXX</a></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
            <div class="contact-text"><strong>البريد الإلكتروني</strong><a href="mailto:info@firstaxes.com">info@firstaxes.com</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <div class="footer__bottom-copy">© 2024 فيرست أكسز. جميع الحقوق محفوظة.</div>
        <div class="footer__bottom-links">
          <a href="/privacy-policy.html">سياسة الخصوصية</a>
          <a href="/terms-conditions.html">الشروط والأحكام</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- ========== FLOATING CTA ========== -->
  <div class="floating-cta" id="floating-cta">
    <a href="https://wa.me/9665XXXXXXXX" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب" id="whatsapp-float">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script type="module" src="/js/main.js"></script>
</body>
</html>`;

services.forEach(service => {
  fs.writeFileSync(path.join(servicesDir, \`\${service.id}.html\`), template(service));
  console.log(\`Generated \${service.id}.html\`);
});
