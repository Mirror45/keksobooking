const OFFERS = ['Уютная', 'Ретро стиль', 'Новый лофт', 'Евро стандарт', 'Фаворит'];

const LOCATION = {
  MIN_LAT: 35.65,
  MAX_LAT: 35.7,
  MIN_LNG: 139.7,
  MAX_LNG: 139.8
};

const PRICES = {
  min: 1000,
  max: 5000
};

const TYPE_FLATS = {
  flat: {
    name: 'Квартира',
    price: 1000
  },

  bungalow: {
    name: 'Бунгало',
    price: 0
  },

  house: {
    name: 'Дом',
    price: 5000
  },

  palace: {
    name: 'Дворец',
    price: 10000
  },

  hotel: {
    name: 'Отель',
    price: 3000
  }
};

const ROOMS = {
  min: 1,
  max: 5
};

const GUESTS = {
  min: 1,
  max: 5
};

const CHECK_IN_OUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONS = [
  'Бронирование без предоплаты',
  'Можно с детьми',
  'Собственный паркинг с лаунж зоной',
  'Детский парк и комната для детей',
  'Завтрак и Обед включены'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

export { OFFERS, LOCATION, PRICES, TYPE_FLATS, ROOMS, GUESTS, CHECK_IN_OUT, FEATURES, DESCRIPTIONS, PHOTOS };
