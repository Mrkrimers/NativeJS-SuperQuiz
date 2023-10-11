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


const p = document.querySelector('.drop-menu')
const drop = document.querySelector('.dropdown')
const li = document.querySelector('.dropdown li')
let flag = false;

drop.addEventListener('mouseenter', () => {
    flag = true
    p.style = `background-color: #9E00FF;
    transition: 0.15s ease;
    border-radius: 1em;
    padding: 12px 32px;
    box-shadow: 1px 5px 10px -5px $black-color;`
});

drop.addEventListener('mouseleave', () => {
    flag = false
    p.style = 'none';
    drop.style.display = 'none';
})

p.addEventListener('mouseenter', () => {
    drop.style.display = 'block';
});

p.addEventListener('mouseleave', () => {

    setTimeout(() => {
        if (!flag) {
            drop.style.display = 'none';
        }
    }, 100);
});
