const swiper = new Swiper(".emotions-slider__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 600,
    observer: true,
    watchOverflow: true,
    watchSlidesProgress: true,
    /*centeredSlides: true,*/
    initialSlide: 1,
    navigation: {
        nextEl: '.emotions_next',
        prevEl: '.emotions_prev', disabledClass: "disabled"
    },
    /*   pagination: {
    el: pagination,
        type: "bullets",
        modifierClass: "slider-pagination",
        bulletClass: "slider-pagination__item",
        bulletActiveClass: "active",
        clickable: true
    }*/
});

const swiper2 = new Swiper(".hero-swiper", {
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    allowTouchMove: false,
    centeredSlides: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});

const swiper3 = new Swiper(".novelties-slider__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.novelties_next',
        prevEl: '.novelties_prev', disabledClass: "disabled"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const news = new Swiper(".news-slider__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.news_next',
        prevEl: '.news_prev', disabledClass: "disabled"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});