


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true
    },
    

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        980: {
            slidesPerView:1.5,
        },
        1280: {
            slidesPerView: 2,
        }
    },
});





new WOW().init();  



AOS.init();


    // HERO SLIDER
   


