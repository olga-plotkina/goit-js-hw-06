const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const formData = {};
    
    for (let i = 0; i < formElements.length - 1; i += 1) {
        if (!formElements[i].value) {
            alert('Усі поля мають бути заповнені!');
            return;
        } 
        else {
            formData[formElements.email.name] = formElements.email.value;
            formData[formElements.password.name] = formElements.password.value;
            
        }
        
   
    };
    console.log(formData);
    form.reset();
};
