# 🏠 Keksobooking

A service for finding and posting real estate rental advertisements in the center of Tokyo. Users can browse available options on an interactive map, filter them by various criteria, and publish their own ads.

The project is built with **Vanilla JavaScript** using ES6 modules.

## ✨ Features

### 🗺 Interactive Map (Leaflet)
- Displays ad pins loaded from the server.
- **Main Pin** for selecting the address:
  - The pin is draggable.
  - Coordinates are automatically filled into the "Address" field.
- Clicking on an ad pin opens a card (balloon) with detailed information (photos, price, description, amenities).

### 🔍 Ad Filtering
A filter form below the map allows users to select ads by:
- Housing type (Palace, Flat, House, Bungalow, Hotel).
- Price range (Low, Middle, High).
- Number of rooms and guests.
- Additional features (Wi-Fi, Dishwasher, Parking, etc.).
- *Note:* **Debounce** is implemented to optimize rendering when filters are changed frequently.

### 📝 Ad Submission Form
A form for creating a new ad with validation and interactive elements:
- **Validation (Pristine.js):**
  - Title length check.
  - Price check (maximum value + minimum value depending on housing type).
  - Synchronization of "Number of rooms" and "Capacity" fields.
- **Time Synchronization:** "Check-in" and "Check-out" fields update synchronously.
- **Price Slider (noUiSlider):** A slider for convenient price selection, linked to the input field.
- **Photo Upload:**
  - User avatar preview.
  - Housing photo preview.

### 📡 Server Interaction
- Loading ad data (GET request).
- Sending form data (POST request).
- Handling success and error states (displaying appropriate messages).

---

## 🛠 Tech Stack

### Core
* **JavaScript (ES6+)** — Modular architecture.
* **HTML5 / CSS3** — Layout and styles.

### Libraries (Vendor)
* **Leaflet** — Interactive maps library.
* **Pristine** — Form validation library.
* **noUiSlider** — JavaScript Range Slider.

### Tools (DevTools)
* **BrowserSync** — Local server with live reload.
* **ESLint** — Code linter.

---

## 📂 Project Structure (`js/`)

All JS code is organized into ES6 modules within the `js/` folder:

* `main.js` — Entry point. Initializes the map, form, and filters.
* `api.js` — Server interaction module (getData, sendData).
* `map.js` — Leaflet map logic, pin and balloon creation.
* `forms.js` — Ad form logic (activation/deactivation, slider).
* `form-validate.js` — Validation rules using Pristine.
* `filter-map.js` — Ad filtering logic.
* `generate-card.js` — HTML markup generation for ad cards (Popups).
* `upload-photo.js` — Image upload preview functionality.
* `util.js` — Utility functions (debounce, key checks, etc.).

---

## 🧰 Getting Started

```bash
# Clone the repository to your local machine
git clone git@github.com:Mirror45/keksobooking.git

# Navigate into the cloned project directory
cd keksobooking

# Install dependencies
npm install

# Start local development server
npm run start

```


