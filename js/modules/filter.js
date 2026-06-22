// ============================================
// Filter Module — Project Filtering
// ============================================

export function initFilter() {
  const filterBars = document.querySelectorAll('.filter-bar');

  filterBars.forEach(bar => {
    const buttons = bar.querySelectorAll('.filter-bar__btn');
    const gridId = bar.getAttribute('data-target') || 'projects-grid';
    const grid = document.getElementById(gridId) || bar.nextElementSibling;

    if (!grid) return;

    const items = grid.querySelectorAll('[data-category]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        buttons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter items
        items.forEach(item => {
          const category = item.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            item.style.display = '';
            item.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
}
