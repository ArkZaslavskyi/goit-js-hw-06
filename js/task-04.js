/** initialising References **/

const btnDecrementRef = document.querySelector('#counter > [data-action="decrement"]');
const btnIncrementRef = document.querySelector('#counter > [data-action="increment"]');
const valueRef = document.querySelector('#value');

/** initialising starting values **/

// initialising Counter Value
let counterValue = 0;
// optional - change color of counter
valueRef.classList.add('number--zero');

/** Add listeners on buttons **/

// Listener of click on decrement button
btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue.toString();

    // optional - change color of counter
    changeColorOfCounter(counterValue, valueRef);
});

// Listener of click on increment button
btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue.toString();

    // optional - change color of counter
    changeColorOfCounter(counterValue, valueRef);
});


/** optional part of code **/

// change color of counter
function changeColorOfCounter(value, ref) {
    if (value < 0 && !ref.classList.contains('number--negative')) {
        ref.classList.add('number--negative');
        ref.classList.remove('number--zero');
        return;
    };

    if (value === 0) {
        ref.classList.remove('number--negative');
        ref.classList.remove('number--positive');
        ref.classList.add('number--zero');
        return;
    };

    if (value > 0 && !ref.classList.contains('number--positive')) {
        ref.classList.add('number--positive');
        ref.classList.remove('number--zero');
        return;
    };
};



