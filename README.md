# 🏙️ Keksobooking

**Keksobooking** is an interactive single-page web application for listing and searching short-term rental properties in central Tokyo. Users can view rental listings on a live map, filter results by parameters like type, price, and amenities, and submit their own property listings via a dynamic form with live validation and photo uploads.
  
The project is built with vanilla JavaScript (ES6+), Leaflet for map rendering, and Webpack for bundling.

---

## ⚙️ Functionality

### 📋 Core Features

- ⚡ Map initialization and interface activation
- 📍 Draggable main pin with live coordinate updates in the address field
- 📤 Submit new listing via AJAX `POST` request
- 📥 Load similar listings from server via AJAX `GET` request
- 🧭 Filter listings by type, price, number of guests, rooms, and amenities
- 📑 Form field validation with custom error messages and constraints
- 🖼️ Image upload and live preview for avatar and property photos
- 🧽 Reset form to initial state, including map and filters
- ✅ Notifications for success/error with dismissal via ESC, click, or button
- 🧠 Debounced marker filtering (no more than 10 shown at a time)

---

## 🗺️ Map

- Built with **Leaflet.js**
- Uses OpenStreetMap for rendering
- Draggable main pin and server-provided markers
- Clicking a marker opens a listing detail card
- Cards are templated and adapt if data is missing

---

## 🧪 Validation & UX

- Title: required, 30–100 characters
- Price: 0 to 1,000,000 — minimum depends on housing type
- Check-in/out fields are synchronized
- Rooms-to-guests validation (e.g. "100 rooms" = "not for guests")
- Address is auto-filled and read-only, based on main pin position
- Client-side validation enforced before submission

---

## 🛠 Tech Stack

### 🚀 Core Stack

| Technology        | Purpose                                          |
|-------------------|--------------------------------------------------|
| JavaScript (ES6+) | Core application language                       |
| Webpack           | Module bundler and build setup                  |
| Leaflet.js        | Interactive map and marker rendering            |
| ESLint            | Static code analysis                            |
| Prettier          | Code formatting                                 |

### 📦 Libraries & Utilities

| Library / Tool        | Role                                                        |
|------------------------|-------------------------------------------------------------|
| Leaflet               | Map, marker, and popup functionality                        |
| Custom Debounce (JS)  | Manual debounce logic for filtering performance             |
| ESLint + Prettier     | Linting and formatting setup                                |

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

---

## 🔍 Implementation Highlights

- 📦 **Modular structure** — All features are separated into reusable modules: form handling, map logic, validation, data rendering, and utilities.
- ⚙️ **Native DOM manipulation** — Uses `setCustomValidity`, `classList.toggle`, `disabled` and other built-in browser APIs to manage form UX and accessibility.
- 🧰 **Utility helpers** — Includes helper functions for rendering dynamic content, generating random mock data, debouncing filters, and formatting output.
- 🧱 **Dynamic templating** — Uses HTML `<template>` elements and `cloneNode(true)` to create listing cards and error/success messages dynamically.
- 🔁 **Full state reset** — Implements complete reset logic after successful submission or manual form clearing — including form fields, filters, map state, and pin position.
- 📡 **Error handling** — Detects server request failures and displays contextual messages without losing user-entered data.


