const OFFERS = ['Cozy', 'Retro style', 'New loft', 'Euro standard', 'Favorite'];

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
    name: 'Apartment',
    price: 100
  },

  bungalow: {
    name: 'Bungalow',
    price: 0
  },

  house: {
    name: 'House',
    price: 500
  },

  palace: {
    name: 'Palace',
    price: 1000
  },

  hotel: {
    name: 'Hotel',
    price: 300
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

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'air conditioning'];

const DESCRIPTIONS = [
  'Booking without prepayment',
  'Children allowed',
  'Private parking with lounge area',
  'Children’s park and playroom',
  'Breakfast and lunch included'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

export { OFFERS, LOCATION, PRICES, TYPE_FLATS, ROOMS, GUESTS, CHECK_IN_OUT, FEATURES, DESCRIPTIONS, PHOTOS };
