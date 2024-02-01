import { formElement } from './forms.js';
import { TYPE_FLATS } from './mocks.js';
import { sendData } from './api.js';
import { showSuccess, showError } from './api-util.js';
import { resetMap } from './map.js';
import { initImageControl } from './upload-photo.js';

const titleFieldElement = formElement.querySelector('[name="title"]');
const priceFieldElement = formElement.querySelector('[name="price"]');
const typeFieldElement = formElement.querySelector('[name="type"]');
const roomsFieldElement = formElement.querySelector('[name="rooms"]');
const capacityFieldElement = formElement.querySelector('[name="capacity"]');

const timeFieldset = document.querySelector('.ad-form__element--time');
const timeIn = document.querySelector('[name="timein"]');
const timeOut = document.querySelector('[name="timeout"]');

const choseAvatarElement = document.querySelector('#avatar');
const previewAvatarElement = document.querySelector('.ad-form-header__preview');
const chosePhotoElement = document.querySelector('#images');
const previewPhotoElement = document.querySelector('.ad-form__photo');

const clearAvatar = initImageControl(choseAvatarElement, previewAvatarElement);
const clearPhoto = initImageControl(chosePhotoElement, previewPhotoElement);

const limit = 100000;

const RoomToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element--error'
});

//---------Валидация Заголовок объявления------------//

// Проверка поля заголовка объявления
const checkStringLength = (value) => {
  const text = value.split(' ');

  return text.every((item) => item.length < 100);
};

//---------Валидация Типа жилья------------//

//Задаём минимальную цену - если выбран данный ${target}
typeFieldElement.addEventListener('change', (evt) => {
  for (const key in TYPE_FLATS) {
    if (evt.target.value === key) {
      priceFieldElement.value = '';
      priceFieldElement.placeholder = `${TYPE_FLATS[key].price}`;
    }
  }
});

//Проверяем заданную ценну с текущей
const checkPricePlaceholder = () => {
  const placeholder = Number(priceFieldElement.placeholder);
  priceFieldElement.value = parseInt(priceFieldElement.value, 10 || 0);

  return priceFieldElement.value >= placeholder && priceFieldElement.value <= limit;
};

// Получаем сообщение ошибки цены
const getPriceMessage = () => {
  if (priceFieldElement.value >= limit) {
    return `Максимальная цена ${limit}`;
  }

  return `Минимальная цена ${priceFieldElement.placeholder}`;
};

//---------Валидация Гостей и Комнат------------//

// Проверка на количество гостей
const validCapacity = () => {
  if (RoomToGuests[roomsFieldElement.value].includes(capacityFieldElement.value)) {
    return true;
  }
  return false;
};

// Формируем сообщение в зависимости от выбора комнат
const validCapacityMessage = () => {
  const value = roomsFieldElement.value;

  switch (value) {
    case '1':
      return `${value} комната для ${value} гостя`;

    case '2':
      return `${value} ${value === '2' ? 'комнаты' : 'комнат'} для ${value} ${value === '2' ? 'гостей' : 'гостя'}`;

    case '3':
      return `${value} ${value === '3' ? 'комнаты' : 'комнат'} для ${value} ${value === '3' ? 'гостей' : 'гостя'}`;

    case '100':
      return `${value} комнат не для гостей.`;
  }
};

//---------Валидация Время заезда------------//

//Проверяем время заезда между собой
timeFieldset.addEventListener('change', (evt) => {
  if (evt.target.value !== timeIn.value) {
    timeIn.value = evt.target.value;
  }

  if (evt.target.value !== timeOut.value) {
    timeOut.value = evt.target.value;
  }
});

// Валидация заголовка
pristine.addValidator(titleFieldElement, checkStringLength, 'Максимальная длина 100 символов.');

// Валидация цены
pristine.addValidator(priceFieldElement, checkPricePlaceholder, getPriceMessage);

// Валидация гостей и комнат
pristine.addValidator(roomsFieldElement, validCapacity, validCapacityMessage);

capacityFieldElement.addEventListener('change', () => {
  pristine.validate(roomsFieldElement);
});

const initAdForm = () => {
  //Отправка формы
  formElement.addEventListener('submit', (evt) => {
    const valid = pristine.validate();
    evt.preventDefault();

    if (valid) {
      //Выполняем запрос sendData(с аргументами)
      return sendData(
        new FormData(evt.target),
        () => showSuccess(),
        () => showError()
      );
    }
  });

  //Очищаем форму
  formElement.addEventListener('reset', () => {
    pristine.reset();
    resetMap();
    clearAvatar();
    clearPhoto();
  });
};

export { initAdForm };
