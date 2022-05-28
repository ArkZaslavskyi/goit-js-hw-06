/*
 * initialising References
 */

// reference on range field "#font-size-control"
const rangeInputRef = document.querySelector('#font-size-control');

// reference on text "#text"
const textRef = document.querySelector('#text');

// initialising values (36)
rangeInputRef.value = 36;
textRef.style.fontSize = rangeInputRef.value+"px";

// listener on input range field
rangeInputRef.addEventListener('input', ({ currentTarget: { value } }) => {
    textRef.style.fontSize = value+"px";
});