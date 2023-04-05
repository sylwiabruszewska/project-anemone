const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  speed: 500,
  centerInsufficientSlides: true,

  slidesPerView: 2,
  spaceBetween: 16,
  // centerInsufficientSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 31,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
