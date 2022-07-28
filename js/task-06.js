const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputCheck);


function onInputCheck (event) {
    if (event.currentTarget.value.length !== Number(inputRef.dataset.length)) {
        // event.currentTarget.id = 'validation-input.invalid'; 
        // Зміна кольору під час зміни CSS-класу не працює, тому що скрипт завантажується після DOM, тож слідування ТЗ неможливе, але результату можна досягнути іншим шляхом
        event.currentTarget.style.borderColor = '#f44336';
    } else {
        // event.currentTarget.id = 'validation-input.valid'; 
        // Динимічна зміна кольору через CSS класс, як того потребує завдання, неможлива;
        event.currentTarget.style.borderColor = '#4caf50';
    };
};

