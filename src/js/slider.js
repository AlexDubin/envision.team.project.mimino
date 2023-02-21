// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


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
});

// swiper = new Swiper('.swiper.my-slider', {
//   // Optional parameters 
//   direction: 'horizontal',
//   slidesPerView: 1.37,
//   spaceBetween: 20,
//   inverse: true,
//   loop: true,
//   // Navigation arrows 
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
