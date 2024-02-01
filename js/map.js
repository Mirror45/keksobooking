import { getFixedNumber } from './util.js';
import { generateCard } from './generate-card.js';
import { deactivateForm, activateForm, activateFilters } from './forms.js';
import { initFilters } from './filter-map.js';

deactivateForm();

const defaultCoordinates = {
  lat: 35.680052,
  lng: 139.764953
};
const mapZoom = 13;

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const mainPinMarker = L.marker(
  defaultCoordinates,

  {
    draggable: true,
    icon: mainPinIcon
  }
);

const markerGroup = L.layerGroup().addTo(map);

//Показываем координаты метки
const setMarkerValue = () => {
  const addressElement = document.querySelector('[name="address"]');
  addressElement.value = `${defaultCoordinates.lat}, ${defaultCoordinates.lng}`;

  //Отлавливаем позицию маркера при движении
  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    //Отрисовываем координаты метки
    addressElement.value = `${getFixedNumber(lat)}, ${getFixedNumber(lng)}`;
  });
};

//Создаёт кастомные метки
const createMarker = (createTemplate) => {
  const { lat, lng } = createTemplate.location;

  const marker = L.marker(
    {
      lat: lat,
      lng: lng
    },

    {
      draggable: false,
      icon: L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [26, 46]
      })
    }
  );

  marker.addTo(markerGroup).bindPopup(generateCard(createTemplate));
};

const onMapLoad = () => {
  activateForm();
  activateFilters();
};

const renderMap = (data) => {
  markerGroup.clearLayers();

  data.forEach((dataItem) => {
    createMarker(dataItem);
  });
};

const initMap = (data) => {
  map.on('load', () => onMapLoad());
  map.setView(defaultCoordinates, mapZoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //Вставляем основной маркер на карту
  mainPinMarker.addTo(map);

  //Отрисовываем значение маркера
  setMarkerValue();

  //Рендерим стандартные данные на основе InitMap()
  renderMap(data);

  //Рендерим данные на основе фильтра
  initFilters(data);
};

//Сбрасываем параметры карты
const resetMap = () => {
  map.setView(defaultCoordinates, mapZoom);

  mainPinMarker.setLatLng(defaultCoordinates);

  map.closePopup();
};

export { initMap, renderMap, resetMap };
