/*
 * initialising References
 */

// reference on #validation-input
const textInputRef = document.querySelector('#validation-input');

// listener on blur of #validation-input
textInputRef.addEventListener('blur', ({ currentTarget: { value } }) => {
    value = value.trim();

    if (value.length !== Number(textInputRef.dataset.length)) {
        if (!textInputRef.classList.contains('invalid')) {
            textInputRef.classList.add('invalid');
            textInputRef.classList.remove('valid');
        };
    } else {
        if (!textInputRef.classList.contains('valid')) {
            textInputRef.classList.add('valid');
            textInputRef.classList.remove('invalid');
        };
    }
});