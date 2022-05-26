/*
 * initialising References
 */

// reference on #validation-input
const textInputRef = document.querySelector('#validation-input');

// listener on blur of #validation-input
textInputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length !== Number(textInputRef.dataset.length)) {
        if (!textInputRef.classList.contains('invalid')) {
            textInputRef.classList.remove('valid');
            textInputRef.classList.add('invalid');
        }
    } else {
        if (!textInputRef.classList.contains('valid')) {
            textInputRef.classList.remove('invalid');
            textInputRef.classList.add('valid');
        }
    }
})