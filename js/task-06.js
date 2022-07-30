const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputCheck);


function onInputCheck (event) {
    if (event.currentTarget.value.length !== Number(inputRef.dataset.length)) {
        event.currentTarget.classList.remove("valid"); 
        event.currentTarget.classList.add("invalid"); 
    } else {
        event.currentTarget.classList.remove("invalid"); 
        event.currentTarget.classList.add("valid"); 
    };
};

