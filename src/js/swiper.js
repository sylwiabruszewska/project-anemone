const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  speed: 500,
  centerInsufficientSlides: true,
  // loopedSlides: 1,
  slidesPerView: 2,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 31,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
