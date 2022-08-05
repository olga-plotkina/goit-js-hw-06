function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');


const SIZE_OF_BOX = 30;
let currentSizeOfBox = SIZE_OF_BOX;


buttonCreateRef.addEventListener('click', () => {
  const lengthOfCollecton = inputRef.value;
  let stringForBoxes = '';

  for (let i = 1; i <= lengthOfCollecton; i++) {

    stringForBoxes += `<div style="width: ${currentSizeOfBox}px; height:${currentSizeOfBox}px; background-color:${getRandomHexColor()}"></div>`;
    currentSizeOfBox += 10;
  }
    divRef.insertAdjacentHTML('beforeend', stringForBoxes);
  
});

  buttonDestroyRef.addEventListener('click', () => {
    divRef.innerHTML = '';
    inputRef.value = '';
    currentSizeOfBox = SIZE_OF_BOX;
  });

