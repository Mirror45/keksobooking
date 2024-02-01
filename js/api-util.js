import { forms } from './forms.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

let cloneElement;

//Нажатие на кнопку "Escape".
const isEscapeKey = (evt) => evt.key === 'Escape';

//Покаываеи окно успешной отправки
const showSuccess = () => {
  cloneElement = templateSuccess.cloneNode(true);

  body.append(cloneElement);
  //очищаем поля форм
  forms.forEach(({ formElement }) => formElement.reset());

  document.addEventListener('keydown', closeOnEsc);
  cloneElement.addEventListener('click', () => {
    //проверяем если елемент есть - удаляем
    if (cloneElement) {
      cloneElement.remove();
    }
  });
};

//Покаываеи окно если отправка не успешна
const showError = () => {
  cloneElement = templateError.cloneNode(true);
  const errorButton = cloneElement.querySelector('.error__button');

  body.append(cloneElement);

  document.addEventListener('keydown', closeOnEsc);
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.error') || evt.target === errorButton) {
      cloneElement.remove();
    }
  });
};

//Удаляем блок на нажатие 'Esc'
function closeOnEsc(evt) {
  if (isEscapeKey(evt)) {
    cloneElement.remove();
  }
}

export { showSuccess, showError };
