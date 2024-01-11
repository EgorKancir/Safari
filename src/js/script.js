const swiper = new Swiper('.swiper', {
    grid: {
        column: 3,
        rows: 2,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 3,
    spaceBeatween: 32,
});