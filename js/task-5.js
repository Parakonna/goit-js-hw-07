const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

console.dir(bodyEl);

const onBtnClick = () => {
  bodyEl.style.background = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}

btnEl.addEventListener('click', onBtnClick)