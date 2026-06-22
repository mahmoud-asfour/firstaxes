// ============================================
// FirstAxes — Main JavaScript Entry
// ============================================

import '../scss/main.scss';

import { initHeader } from './modules/header.js';
import { initNavigation } from './modules/navigation.js';
import { initAccordion } from './modules/accordion.js';
import { initCounters } from './modules/counters.js';
import { initFilter } from './modules/filter.js';
import { initForms } from './modules/forms.js';
import { initAnimations } from './modules/animations.js';
import { initSwiper } from './modules/swiper-init.js';

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  // Core modules — always load
  initHeader();
  initNavigation();
  initAnimations();

  // Conditional modules — only if elements exist
  if (document.querySelector('.accordion')) {
    initAccordion();
  }

  if (document.querySelector('.counter')) {
    initCounters();
  }

  if (document.querySelector('.filter-bar')) {
    initFilter();
  }

  if (document.querySelector('form')) {
    initForms();
  }

  if (document.querySelector('.swiper')) {
    initSwiper();
  }

  console.log('FirstAxes — Loaded ✓');
});
