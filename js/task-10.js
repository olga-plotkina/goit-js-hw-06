function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');


let sizeOfBox = 30;
let stringForBoxes = '';


inputRef.addEventListener('change', (event) => {
  let lengthOfCollecton = event.currentTarget.value;
  
  buttonCreateRef.addEventListener('click', () => {
    createBoxes(lengthOfCollecton);

    inputRef.addEventListener('input', (event) => {
      lengthOfCollecton = 0;
    });
    });
    
})

  buttonDestroyRef.addEventListener('click', () => {
    destroyBoxes();
  });


function createBoxes(amount) { 

  for (let i = 1; i <= amount; i +=1) {

      const divMarkup = `<div style="width: ${sizeOfBox}px; height:${sizeOfBox}px; background-color:${getRandomHexColor()}">${i}</div>`;
      stringForBoxes += divMarkup;
      sizeOfBox += 10;
     
      divRef.innerHTML = stringForBoxes;
  };
}

function destroyBoxes() {
  divRef.innerHTML = '';
  inputRef.value = '';
  sizeOfBox = 30;
  stringForBoxes = '';
};