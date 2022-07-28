const refs = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output'),
};

refs.inputRef.addEventListener('input', onInputChange);

function onInputChange (event) {
    if (!event.currentTarget.value) {
        refs.spanRef.textContent = 'Anonymous';
    } else {
        refs.spanRef.textContent = event.currentTarget.value;
    };
};

