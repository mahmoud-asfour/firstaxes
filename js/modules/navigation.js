// ============================================
// Navigation Module — Mobile Menu
// ============================================

export function initNavigation() {
  const burger = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  if (!burger || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close on link click
  const navLinks = mobileNav.querySelectorAll('.mobile-nav__links a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
