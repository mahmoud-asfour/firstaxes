// ============================================
// Swiper Initialization Module
// ============================================

export function initSwiper() {
  // Testimonials Swiper
  const testimonialsEl = document.querySelector('.testimonials-swiper');
  if (testimonialsEl) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }

  // Hero Swiper (if used on other pages)
  const heroSwiperEl = document.querySelector('.hero-swiper');
  if (heroSwiperEl) {
    new Swiper('.hero-swiper', {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-swiper .swiper-pagination',
        clickable: true,
      },
    });
  }

  // Project Gallery Swiper (project detail pages)
  const galleryEl = document.querySelector('.gallery-swiper');
  if (galleryEl) {
    new Swiper('.gallery-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.gallery-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
}
