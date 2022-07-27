const spanRef = document.querySelector('#value');
spanRef.textContent = 0;

const decrementButtonRef = document.querySelector('.button[data-set="decrement"]');
const incrementButtonRef = document.querySelector('.button[data-set="increment"]');


decrementButtonRef.addEventListener('click', increseValue);
incrementButtonRef.addEventListener('click', decreaseValue);

function increseValue () {
    return Number(spanRef.textContent) += 1;
    
}

function decreaseValue () {
    return Number(spanRef.textContent) -= 1;
}

