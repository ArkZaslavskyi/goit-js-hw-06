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

/** initialising References **/
const refs = {
  boxes: document.querySelector('#boxes'),
  btnCreate: document.querySelector('#controls button[data-create]'),
  btnDestroy: document.querySelector('#controls button[data-destroy]'),
  inputNumbersOfBoxes: document.querySelector('#controls input[type="number"]'),
};

/** Listeners **/
refs.btnCreate.addEventListener('click', onBtnCreateClk);
refs.btnDestroy.addEventListener('click', onBtnDestroyClk);

/** callback functions **/
function onBtnCreateClk() {
  const {
    inputNumbersOfBoxes: { value },
    boxes: boxesRef,
  } = refs;

  if (value) {
    const boxesItems = createBoxes(value, boxesRef.children.length);
    // 
    boxesRef.append(...boxesItems);
  };
};

function onBtnDestroyClk() {
  const {
    boxes: boxesRef,
    inputNumbersOfBoxes: inputOfNumber
  } = refs;

  destroyBoxes(boxesRef);
  inputOfNumber.value = '';  
}

/** Create & Destroy boxes functions **/
function createBoxes (amount, boxesAmount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');

    elem.style.width = 30 + 10 * (i + boxesAmount) + 'px';
    elem.style.height = elem.style.width;
    elem.style.backgroundColor = getRandomHexColor();

    boxes.push(elem);
  };

  return boxes;
}

function destroyBoxes (boxesRef) {
  boxesRef.innerHTML = '';
}

/**/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
