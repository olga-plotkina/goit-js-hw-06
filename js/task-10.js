function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');


inputRef.addEventListener('change', (event) => {
  const lengthOfCollecton = event.currentTarget.value;
  buttonCreateRef.addEventListener('click', () => {
    createBoxes(lengthOfCollecton);
  });

  buttonDestroyRef.addEventListener('click', () => {
    destroyBoxes();
  })
});


function createBoxes(amount) {
  const arrayMarkup = [];

  for (let i = 1; i <= amount; i += 1) {
    for (let j = 0; j < (amount * 10) ; j += 10) {
      const divMarkup = `<div style="width: ${30 + j}px; height:${30 + j}px; background-color:${getRandomHexColor()}"></div>`
      arrayMarkup.push(divMarkup);
    }
    break;
  }
  const result = arrayMarkup.join('');
  divRef.innerHTML = result;
}

function destroyBoxes() {
  divRef.innerHTML = '';
  inputRef.value = '';
};