function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');


let sizeOfBox = 30;
let markup = '';


inputRef.addEventListener('change', (event) => {
  markup = '';
  const lengthOfCollecton = event.target.value;
  buttonCreateRef.addEventListener('click', () => {
    createBoxes(lengthOfCollecton);
    
  });

  buttonDestroyRef.addEventListener('click', () => {
    destroyBoxes();
  })
});






function createBoxes(amount) {

  
  for (let i = 1; i <= amount; i +=1) {
    for (let j = 0; j < (amount * 10); i += 10) {
      const divMarkup = `<div style="width: ${sizeOfBox + j}px; height:${sizeOfBox + j}px; background-color:${getRandomHexColor()}">${i}</div>`;
      markup += divMarkup;
    }
    

   
};
divRef.innerHTML = markup;

 
}

function destroyBoxes() {
  divRef.innerHTML = '';
  inputRef.value = 0;
  sizeOfBox = 30;
console.log(inputRef.value);
markup = '';

};