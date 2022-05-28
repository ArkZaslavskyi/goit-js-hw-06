/*
 * initialising References
 */

// reference for input field
const textInputRef = document.querySelector('#name-input');

// reference for span field
const textOutputRef = document.querySelector('#name-output');

// optional - add class to anonymous state
if (!textInputRef.textContent) {
    textOutputRef.classList.add('anonymous');
}

/*
 * add listener on input
 */

textInputRef.addEventListener('input', onChangeTextInput);

// text input handler
// 1st solution - with change the text style
function onChangeTextInput({ currentTarget: { value }}) {
    if (!value) {
        textOutputRef.textContent = 'Anonymous';
        textOutputRef.classList.toggle('anonymous');
        return;
    };
    
    if (textOutputRef.classList.contains('anonymous')) {
        textOutputRef.classList.remove('anonymous');
    };

    textOutputRef.textContent = value;
}

// 2nd solution - if there is no need to change the text style 
/* 
function onChangeTextInput({ currentTarget: { value }}) {
    textOutputRef.textContent = !value
        ? 'Anonymous'
        : value;
}
*/