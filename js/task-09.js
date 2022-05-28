/*
 * Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
 * Для генерации случайного цвета используй функцию getRandomHexColor.
 */

/*
 * initialising References
 */
const btnChangeColorRef = document.querySelector('.widget .change-color');
const bodyRef = document.querySelector('body');
const textColorRef = document.querySelector('.widget .color');

// on button click listener
btnChangeColorRef.addEventListener('click', onBtnChangeColor);

// on button click handle
function onBtnChangeColor() {
  textColorRef.textContent =
    getRandomHexColor()
    .toString()
    .toUpperCase();
  bodyRef.style.backgroundColor = textColorRef.textContent;
};

// 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
