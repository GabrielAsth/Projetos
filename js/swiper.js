let swiper = new Swiper(".mySwiper", {
   loop: true,
   loopFillGroupWithBlank: true,
   centeredSlides: true,
   loopFillGroupWithBlank: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1.5,
         spaceBetween: 5,
      },
      400:{
         slidesPerView: 2.5,
         spaceBetween: 15,
      },
      600:{
         slidesPerView:3.5,
         spaceBetween:10,
         slidesPerGroup: 2,

      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 10,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 10,
        slidesPerGroup: 3,
      },
    },
 });

 