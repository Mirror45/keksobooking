// The function generates a random number from minimum (inclusive) to maximum
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Maximum and minimum are included
};

// The function generates random floating-point numbers
function getRandomFloat(min, max, digits = 1) {
  const result = Math.random() * (max - min) + min;

  return +result.toFixed(digits);
}

// The function generates a random array element
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// The function adds a leading zero
const getNumberWithLeadZero = (num) => `${num > 0 && num < 10 ? '0' : ''}${num}`;

// The function generates a string with an Avatar
const generateAvatar = (num) => {
  const string = `img/avatars/user${getNumberWithLeadZero(num)}.png`;

  return string;
};

const getFixedNumber = (number) => number.toFixed(6);

// The function shuffles our array
const shufflArray = (array) => array.sort(() => Math.random() - 0.5);

// The function fills an element
const fillElement = (
  element,
  data = [],
  callback = (item) => item
) => {
  if (data.length && data.some((item) => item)) {
    element.innerHTML = data.map(callback).join('');
  } else {
    element.remove();
  }
};

const getGuestsNumber = (guests) => guests % 10 === 1 && guests !== 11 ? `${guests} guest` : `${guests} guests`;

const getRoomsNumber = (rooms) => {
  const remainder = rooms % 10;
  if ((rooms >= 5 && rooms <= 20) || rooms === 0) {
    return `${rooms} rooms`;
  }
  if (remainder === 1) {
    return `${rooms} room`;
  }
  if (remainder > 1 && remainder < 5) {
    return `${rooms} rooms`;
  }
  return `${rooms} rooms`;
};


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

// The function debounces
const debounce = (callback, timer) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), timer);
  };
};

export {
  getRandomInteger,
  getRandomFloat,
  generateAvatar,
  getRandomArrayElement,
  getFixedNumber,
  shufflArray,
  fillElement,
  getGuestsNumber,
  getRoomsNumber,
  showAlert,
  debounce
};
