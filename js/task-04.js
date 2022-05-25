// initialising Counter Value
let counterValue = 0;

// reference on decrement button
const btnDecrementRef = document.querySelector('#counter > [data-action="decrement"]');

// reference on increment button
const btnIncrementRef = document.querySelector('#counter > [data-action="increment"]');

// reference on counter value
const valueRef = document.querySelector('#value');
valueRef.classList.add('zeroNumber');

// Listener of click on decrement button
btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue.toString();

    // optional - change color of counter
    changeColorOfCounter();
});

// Listener of click on increment button
btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue.toString();

    // optional - change color of counter
    changeColorOfCounter();
});

/*
 * optional part of code
 */

// change color of counter
function changeColorOfCounter() {
    if (counterValue < 0 && !valueRef.classList.contains('negativeNumber')) {
        valueRef.classList.add('negativeNumber');
        valueRef.classList.remove('zeroNumber');
        return;
    };

    if (counterValue === 0) {
        valueRef.classList.remove('negativeNumber');
        valueRef.classList.remove('positiveNumber');
        valueRef.classList.add('zeroNumber');
        return;
    };

    if (counterValue > 0 && !valueRef.classList.contains('positiveNumber')) {
        valueRef.classList.add('positiveNumber');
        valueRef.classList.remove('zeroNumber');
        return;
    };
};



