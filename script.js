const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    effect: 'coverflow',

    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });