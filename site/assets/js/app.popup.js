const popupBG = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');

const openPopupBtn = document.querySelector('.btn-connect');
const openPopupBtn2 = document.querySelector('.last-card .btn-continue');
const closePopupBtn = document.querySelector('.btn-close-popup');

openPopupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupBG.classList.add('active')
    popup.classList.add('active')
});

openPopupBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    popupBG.classList.add('active')
    popup.classList.add('active')
});

closePopupBtn.addEventListener('click', (e) => {
    popupBG.classList.remove('active')
    popup.classList.remove('active')
});

document.addEventListener('click', (e) => {
    if (e.target === popupBG) {
        popupBG.classList.remove('active')
        popup.classList.remove('active')
    }
})