import { fillElement } from './util.js';

const cardTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const generateCard = (data) => {
  const { author, offer } = data;
  const cardElement = cardTemplateElement.cloneNode(true);

  // Заголовок объявления
  cardElement.querySelector('.popup__title').textContent = offer.title;
  // Адрес объявления
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  // Цена жилья
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  // Тип жилья
  cardElement.querySelector('.popup__type').textContent = offer.type;
  // Количество комнат
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  // Время заезда и выезда
  cardElement.querySelector(
    '.popup__text--time'
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  // Доступные удобства
  const featuresElement = cardElement.querySelector('.popup__features');
  fillElement(
    featuresElement,
    offer.features,
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`
  );
  // Описание объявления
  cardElement.querySelector('.popup__description').textContent = offer.description;
  // Фотографии объявления
  const photoElement = cardElement.querySelector('.popup__photos');
  fillElement(
    photoElement,
    offer.photos,
    (photos) => `<img src="${photos}" class="popup__photo" width="45" height="40" alt="Фотография жилья" />`
  );
  // Аватар пользователя
  const avatarUserElement = cardElement.querySelector('.popup__avatar');
  avatarUserElement.src = author.avatar;

  //возвращаем заполненую карточку
  return cardElement;
};

export { generateCard };
