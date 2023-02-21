let swiper = new Swiper('.swiper-triple', {
  // Optional parameters

  direction: 'horizontal',

  slidesPerView: 1.3,
  

  inverse: true,
  loop: true,

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-triple-button-next',
    prevEl: '.swiper-triple-button-prev',
  },

  breakpoints: {
    // when window width is <= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
  },
});
