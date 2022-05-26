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

textInputRef.addEventListener('input', (event) => {
    if (!event.currentTarget.value) {
        textOutputRef.textContent = 'Anonymous';
        textOutputRef.classList.toggle('anonymous');
        return;
    };
    
    if (textOutputRef.classList.contains('anonymous')) {
        textOutputRef.classList.remove('anonymous');
    };

    textOutputRef.textContent = event.currentTarget.value;
});