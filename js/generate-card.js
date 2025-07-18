import { fillElement, getGuestsNumber, getRoomsNumber, } from './util.js';

const cardTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const generateCard = (data) => {
  const { author, offer } = data;
  const cardElement = cardTemplateElement.cloneNode(true);

  // Listing title
  cardElement.querySelector('.popup__title').textContent = offer.title;
  // Listing address
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  // Property price
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} $/night`;
  // Property type
  cardElement.querySelector('.popup__type').textContent = offer.type;
  // Number of rooms and guests
  cardElement.querySelector('.popup__text--capacity').textContent = `${getRoomsNumber(offer.rooms)} for ${getGuestsNumber(offer.guests)}`;
  // Check-in and check-out time
  cardElement.querySelector('.popup__text--time').textContent = `Check-in after ${offer.checkin}, check-out before ${offer.checkout}`;
  // Available features
  const featuresElement = cardElement.querySelector('.popup__features');
  fillElement(featuresElement, offer.features, (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`);
  // Listing description
  cardElement.querySelector('.popup__description').textContent = offer.description;
  // Listing photos
  const photoElement = cardElement.querySelector('.popup__photos');
  fillElement(photoElement, offer.photos, (photos) => `<img src="${photos}" class="popup__photo" width="45" height="40" alt="Property photos" />`);
  // User avatar

  const avatarUserElement = cardElement.querySelector('.popup__avatar');
  avatarUserElement.src = author.avatar;

  return cardElement;
};

export { generateCard };
