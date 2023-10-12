const questOne = document.querySelector('.question-one');
const questTwo = document.querySelector('.question-two');
const questThree = document.querySelector('.question-three');

const mainCard = document.querySelector('.main-card');
const secondCard = document.querySelector('.second-card');
const lastCard = document.querySelector('.last-card');

const btnContinueMain = document.querySelector('.main-card .btn-continue');
const btnContinueSecond = document.querySelector('.second-card .btn-continue');
const btnContinueLast = document.querySelector('.last-card .btn-continue');

const btnBackSecond = document.querySelector('.second-card .btn-back');
const btnBackLast = document.querySelector('.last-card .btn-back');

const obj = {
    one: true,
    two: false,
    three: false,
    showBlackBG: `opacity: 1; background-color: #000; color: #FFFFFF;`,
    showWhiteBG: `opacity: 1; background-color: #FFFFFF; color: #000;  pointer-events: all;`,
    close: `opacity: 0;`,
}

btnContinueMain.addEventListener('click', () => {
    obj.one = false;
    obj.two = true;
    obj.three = false;

    mainCard.style.display = 'none';
    secondCard.style.display = 'block';

    questOne.style = obj.showWhiteBG;
    questTwo.style = obj.showBlackBG;
})

btnContinueSecond.addEventListener('click', () => {
    obj.one = false;
    obj.two = false;
    obj.three = true;

    secondCard.style.display = 'none';
    lastCard.style.display = 'block';

    questThree.style = obj.showBlackBG;
    questTwo.style = obj.showWhiteBG;
    questOne.style = obj.showWhiteBG;
})

btnBackSecond.addEventListener('click', () => {
    obj.one = true;
    obj.two = false;
    obj.three = false;

    mainCard.style.display = 'block';
    secondCard.style.display = 'none';

    questOne.style = obj.showBlackBG;
    questTwo.style = obj.close;
})

btnBackLast.addEventListener('click', () => {
    obj.one = false;
    obj.two = true;
    obj.three = false;

    secondCard.style.display = 'block';
    lastCard.style.display = 'none';

    questTwo.style = obj.showBlackBG;
    questThree.style = obj.close;
})

questOne.addEventListener('click', () => {
    mainCard.style.display = 'block';
    secondCard.style.display = 'none';
    lastCard.style.display = 'none';

    questOne.style = obj.showBlackBG;
    questTwo.style = obj.close;
    questThree.style = obj.close;
})
questTwo.addEventListener('click', () => {
    mainCard.style.display = 'none';
    secondCard.style.display = 'block';
    lastCard.style.display = 'none';

    questOne.style = obj.showWhiteBG;
    questTwo.style = obj.showBlackBG;
    questThree.style = obj.close;
})
questThree.addEventListener('click', () => {
    mainCard.style.display = 'none';
    secondCard.style.display = 'none';
    lastCard.style.display = 'block';

    questOne.style = obj.close;
    questTwo.style = obj.close;
    questThree.style = obj.showBlackBG;
})