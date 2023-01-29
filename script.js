// Script for Sign-up Form

const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const tel = document.querySelector('.tel');
const pwd = document.querySelector('.pwd');
const pwdConfirm = document.querySelector('.pwdConfirm');

const submitBtn = document.querySelector('.submitBtn');

const firstNameError = document.querySelector('.firstNameError');
const lastNameError = document.querySelector('.lastNameError');
const emailError = document.querySelector('.emailError');
const telError = document.querySelector('.telError');
const pwdError = document.querySelector('.pwdError');
const pwdConfirmError = document.querySelector('.pwdConfirmError');


submitBtn.addEventListener('click', () => {
    if (firstName.value === '') {
        firstNameError.textContent = 'Please type in your first name.';
    } else {
        firstNameError.textContent = '';
    }
    
    if (lastName.value === '') {
        lastNameError.textContent = 'Please type in your last name.';
    } else {
        lastNameError.textContent = '';
    }

    if (email.validity.typeMismatch || email.value === '') {
        emailError.textContent = 'Please enter in a valid Email, example: you@email.com';
    } else {
        emailError.textContent = '';
    }

    if (tel.validity.patternMismatch || tel.value === '') {
        telError.textContent = 'Please enter in a 10 digit phone number, example: 6507778965';
    } else {
        telError.textContent = '';
    }

    if (pwd.validity.patternMismatch || pwd.value === '') {
        const capRegex = new RegExp(/[A-Z]/)
        const digitRegex = new RegExp(/[0-9]/)
        let output = '';
        if (capRegex.test(pwd.value)) {
            output += '';
        } else {
            output += 'Password requires at least 1 capital letter.';
            output += '\n';
        }
        if (digitRegex.test(pwd.value)) {
            output += '';
        } else {
            output += 'Password requires at least 1 number.';
            output += '\n';
        }

        pwdError.textContent = output;
    } else {
        pwdError.textContent = '';
    }

    if (pwd.validity.tooShort || pwd.validity.tooLong || pwd.value === '') {
        pwdError.textContent += 'Password must be a min length of 6 and max length of 12.';
    } else {
        pwdError.textContent += '';
    }
    
    if (pwdConfirm.value !== pwd.value) {
        pwdConfirmError.textContent = 'Passwords do not match';
    } else {
        pwdConfirmError.textContent = '';
    }
})