/* 
 * Напиши скрипт управления формой логина.
 * Обработка отправки формы form.login-form должна быть по событию submit.
 * При отправке формы страница не должна перезагружаться.
 * Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
 * Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
 * Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
 */

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const formData = new Object;

    for (const el of formElements) {
        if (!el.name) break;

        if (!el.value) {
            alert(`Поле ${el.name} не заполнено!`);
            return;
        };
        // add element to form data object
        formData[el.name] = el.value;
    }
    // log form data
    console.log(formData);
    // reset form fields
    event.currentTarget.reset();
};