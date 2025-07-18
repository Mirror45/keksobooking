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

// Display the marker coordinates
const setMarkerValue = () => {
  const addressElement = document.querySelector('[name="address"]');
  addressElement.value = `${defaultCoordinates.lat}, ${defaultCoordinates.lng}`;

  // Track the marker's position while moving
  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    // Render the marker coordinates
    addressElement.value = `${getFixedNumber(lat)}, ${getFixedNumber(lng)}`;
  });
};


// Creates custom markers
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

  // Add the main marker to the map
  mainPinMarker.addTo(map);

  // Display the marker coordinates
  setMarkerValue();

  // Render default data using InitMap()
  renderMap(data);

  // Render data based on filters
  initFilters(data);
};

// Reset map parameters
const resetMap = () => {
  map.setView(defaultCoordinates, mapZoom);

  mainPinMarker.setLatLng(defaultCoordinates);

  map.closePopup();
};

export { initMap, renderMap, resetMap };
