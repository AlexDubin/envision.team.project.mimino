let swiper = new Swiper('.swiper-singl', {
  // Optional parameters

  direction: 'horizontal',

   slidesPerView: 1,



   inverse: true,
   loop: true,

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-singl-button-next',
    prevEl: '.swiper-singl-button-prev',
  },

  breakpoints: {
    // when window width is <= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
  },
});



