let swiper = new Swiper('.swiper', {
  // Optional parameters

  direction: 'horizontal',

  slidesPerView: 1.3,
  spaceBetween: 20,

  inverse: true,
  loop: true,

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is <= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    
  },
});









