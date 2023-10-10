const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});