const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


const onFieldInput = () => {
    if (fieldEl.value.trim() === "" || fieldEl.value.trim() === " ") {
        spanEl.textContent = 'Anonymous';
    }else {
        spanEl.textContent = fieldEl.value.trim();
    };
}

fieldEl.addEventListener('input', onFieldInput);


