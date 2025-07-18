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

//---------Ad Title Validation------------//

// Check the ad title field
const checkStringLength = (value) => {
  const text = value.split(' ');

  return text.every((item) => item.length < 100);
};

//---------Property Type Validation------------//

// Set minimum price if the selected ${target}
typeFieldElement.addEventListener('change', (evt) => {
  for (const key in TYPE_FLATS) {
    if (evt.target.value === key) {
      priceFieldElement.value = '';
      priceFieldElement.placeholder = `${TYPE_FLATS[key].price}`;
    }
  }
});

// Validate the entered price against the current one
const checkPricePlaceholder = () => {
  const placeholder = Number(priceFieldElement.placeholder);
  priceFieldElement.value = parseInt(priceFieldElement.value, 10 || 0);

  return priceFieldElement.value >= placeholder && priceFieldElement.value <= limit;
};

// Get the price error message
const getPriceMessage = () => {
  if (priceFieldElement.value >= limit) {
    return `Maximum price is ${limit}`;
  }

  return `Minimum price is ${priceFieldElement.placeholder}`;
};


//---------Guests and Rooms Validation------------//

// Check the number of guests
const validCapacity = () => {
  if (RoomToGuests[roomsFieldElement.value].includes(capacityFieldElement.value)) {
    return true;
  }
  return false;
};

// Generate the message depending on the selected number of rooms
const validCapacityMessage = () => {
  const value = roomsFieldElement.value;

  switch (value) {
    case '1':
      return `${value} room for ${value} guest`;

    case '2':
      return `${value} ${value === '2' ? 'rooms' : 'room'} for ${value} guests`;

    case '3':
      return `${value} ${value === '3' ? 'rooms' : 'room'} for ${value} guests`;

    case '100':
      return `${value} rooms not for guests.`;
  }
};

//---------Check-in Time Validation------------//

// Compare check-in and check-out times
timeFieldset.addEventListener('change', (evt) => {
  if (evt.target.value !== timeIn.value) {
    timeIn.value = evt.target.value;
  }

  if (evt.target.value !== timeOut.value) {
    timeOut.value = evt.target.value;
  }
});

// Title validation
pristine.addValidator(titleFieldElement, checkStringLength, 'Maximum length is 100 characters.');

// Price validation
pristine.addValidator(priceFieldElement, checkPricePlaceholder, getPriceMessage);

// Guests and rooms validation
pristine.addValidator(roomsFieldElement, validCapacity, validCapacityMessage);

capacityFieldElement.addEventListener('change', () => {
  pristine.validate(roomsFieldElement);
});

const initAdForm = () => {
  // Form submission
  formElement.addEventListener('submit', (evt) => {
    const valid = pristine.validate();
    evt.preventDefault();

    if (valid) {
      // Execute the request sendData(with arguments)
      return sendData(
        new FormData(evt.target),
        () => showSuccess(),
        () => showError()
      );
    }
  });

  // Reset the form
  formElement.addEventListener('reset', () => {
    pristine.reset();
    resetMap();
    clearAvatar();
    clearPhoto();
  });
};

export { initAdForm };
