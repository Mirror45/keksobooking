// Функция генерирует случайное число от минимума(включая) до максимума
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

// Функция генерирует случайные числа с плавающей точкой
function getRandomFloat(min, max, digits = 1) {
  const result = Math.random() * (max - min) + min;

  return +result.toFixed(digits);
}

// Функция генерирует случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция с ведущим нулём
const getNumberWithLeadZero = (num) => `${num > 0 && num < 10 ? '0' : ''}${num}`;

// Функция генерирует строку с Аватаркой
const generateAvatar = (num) => {
  const string = `img/avatars/user${getNumberWithLeadZero(num)}.png`;

  return string;
};

const getFixedNumber = (number) => number.toFixed(6);

// Функция перемешивает наш массив
const shufflArray = (array) => array.sort(() => Math.random() - 0.5);

// Функция заполняет элемент
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

const getGuestsNumber = (guests) => guests % 10 === 1 && guests !== 11 ? `${guests} гостя` : `${guests} гостей`;

const getRoomsNumber = (rooms) => {
  const reminder = rooms % 10;
  if ((rooms >= 5 && rooms <= 20) || rooms === 0) {
    return `${rooms} комнат`;
  }
  if (reminder === 1) {
    return `${rooms} комната`;
  }
  if (reminder > 1 && reminder < 5) {
    return `${rooms} комнаты`;
  }
  return `${rooms} комнат`;
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

//Функция Устранение дребезга
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
