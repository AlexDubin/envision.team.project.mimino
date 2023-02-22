// const swiper = new Swiper('.swiper-triple', {
//   freeMode: true,
// });

const swiper = new Swiper('.swiper-triple', {
  freeMode: {
    enabled: true,
    sticky: true,
  },

  direction: 'horizontal',

  slidesPerView: 1.3,

  inverse: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-triple-button-next',
    prevEl: '.swiper-triple-button-prev',
  },

  breakpoints: {
    // when window width is <= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
  },
});

// let swiper = new Swiper('.swiper-triple', {
//   // Optional parameters

//   direction: 'horizontal',

//   slidesPerView: 1.3,

//   inverse: true,
//   loop: true,

//   // Navigation arrows

//   navigation: {
//     nextEl: '.swiper-triple-button-next',
//     prevEl: '.swiper-triple-button-prev',
//   },

//   breakpoints: {
//     // when window width is <= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetweenSlides: 50,
//     },
//   },
// });
