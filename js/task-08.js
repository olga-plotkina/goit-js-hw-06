const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName.toUpperCase() === 'BUTTON') {
            continue;
        } 
        if (!formElements[i].value) {
            alert ('Усі поля мають бути заповнені!');
            return;
        }

        const formData = {};
        formData[formElements.email.name] = formElements.email.value;
        formData[formElements.password.name] = formElements.password.value;
        
    };
    console.log(formData);
    form.reset();
};
