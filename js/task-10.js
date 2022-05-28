/*
Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX.
Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

/*
 * initialising References
 */
const boxesRef = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('#controls button[data-create]');
const btnDestroyRef = document.querySelector('#controls button[data-destroy]');
const numberOfBoxesRef = document.querySelector('#controls input[type="number"]');

/*
 * Listeners
 */
btnCreateRef.addEventListener('click', onbtnCreateClk);
btnDestroyRef.addEventListener('click', onbtnDestroyClk);

/*
 * callback functions
 */
function onbtnCreateClk() {
  if (numberOfBoxesRef.value) {
    console.log(numberOfBoxesRef.value);
    const boxes = createBoxes(numberOfBoxesRef.value);
    console.log(boxes);
    boxesRef.append(...boxes);
  };
};

function onbtnDestroyClk() {
  destroyBoxes();
}

/*
 *
 */
function createBoxes(amount) {
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const elem = document.createElement('div');
    elem.style.width = (30 + 10 * (i - 1)) + 'px';
    elem.style.height = elem.style.width;
    elem.style.backgroundColor = getRandomHexColor();
    boxes.push(elem);
  };
  return boxes;
}
function destroyBoxes() {
  boxesRef.innerHTML = '';
}

/*
 *
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
