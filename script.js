const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
const showError = (input, message) => {
 const formControl = input.parentElement;
 formControl.className = 'form-control error';
 const small = formControl.querySelector('small');
 small.innerText = message;
}

//Show success messgae
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email Validation
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    }else {
        showError(input, 'Email is not Valid')
        
    }
}

// Check passwords match 

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

// check if password has number and character

const numberCharacter = (input) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (input.value.match(letterNumber)) {
        showSuccess(input);
    } else {
        showError(input, 'Password Must contain Number and Alphabet')
    }
}

// Check required Data

const checkrequired = (inputArr) => {
    inputArr.forEach( (input) => {
            if(input.value.trim() === ''){
                showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
            };

        });
} 

// Check input length

const checkLength = (input, min, max) => {
    if(input.value.length < min) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be atleast ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be atleast ${min} characters`)
    }else {
        showSuccess(input);
    }
}

//Event Listeners
form.addEventListener('submit', (e)  => {
    
    e.preventDefault();

    checkrequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    numberCharacter(password);


    // if(username.value === '') {
    //     showError( username, 'Please input the Username');
    // }else {
    //     showSuccess(username);
    // }

    // if(email.value === '') {
    //     showError( email, 'Please enter your email');
    // }else if(!isValidEmail(email.value)) {
    //     showError( email, 'Email Entered is not Valid');
    // }else {
    //     showSuccess(email);
    // };

    // if(password.value === '') {
    //     showError(password, 'Enter your Password');
    // }else {
    //     showSuccess(password);
    // }

    // if(password2.value === '') {
    //     showError( password2, 'Password 2 is required');
    // }else {
    //     showSuccess(password2);
    // }


});