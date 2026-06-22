// ============================================
// Accordion Module — FAQ
// ============================================

export function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion__item');

    items.forEach(item => {
      const header = item.querySelector('.accordion__header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items in this accordion
        items.forEach(i => {
          i.classList.remove('active');
          const h = i.querySelector('.accordion__header');
          if (h) h.setAttribute('aria-expanded', 'false');
        });

        // Open clicked item (if it wasn't already open)
        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
}
