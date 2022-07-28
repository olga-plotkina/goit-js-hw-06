const spanRef = document.querySelector('#value');
let counterValue = 0;


const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');


decrementButtonRef.addEventListener('click', decreaseValue);
incrementButtonRef.addEventListener('click', increseValue);


function increseValue () {
   return spanRef.textContent = counterValue += 1;
    
};

function decreaseValue () {
    return spanRef.textContent = counterValue -= 1;
};

