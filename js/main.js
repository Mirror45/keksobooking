import { initMap } from './map.js';
import { initAdForm } from './form-validate.js';
import { getData } from './api.js';

import { initImageControl } from './upload-photo.js';

const choser = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview img');

initImageControl(choser, preview);

getData((data) => {
  initMap(data.slice(0, 20));
  initAdForm();
});
