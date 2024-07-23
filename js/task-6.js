function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const fieldEl = document.querySelector('body input');

const onFieldInput = () => {
  const amount = fieldEl.value;
}

function createBoxes(amount) {
  boxesEl.innerHTML = '';
  const box = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    size += 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    box.push(div);
  }
  boxesEl.append(...box);
};
  
const onCreateBtn = () => {
const amount = fieldEl.value;
  if (amount >= 1 && amount <= 100) { 
    createBoxes(amount);
    fieldEl.value = '';
}
}

const destroyBox = () => {
  boxesEl.innerHTML = '';
}



btnCreateEl.addEventListener('click', onCreateBtn);
btnDestroyEl.addEventListener('click', destroyBox);
fieldEl.addEventListener('input', onFieldInput);