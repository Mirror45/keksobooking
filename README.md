# 🏙️ Keksobooking – A Property Rental Platform

🚀 **Live Demo**: [keksobooking-alpha.vercel.app](https://keksobooking-alpha.vercel.app)

An interactive Single Page Application (SPA) for Browse and posting property rental listings. This project is built with vanilla JavaScript and showcases skills in working with external libraries (Leaflet), complex form validation, and asynchronous server communication.

---

📖 Project Overview

Keksobooking is a project designed to demonstrate core JavaScript skills by simulating a property rental service in Tokyo. Its main focus is on DOM manipulation, event handling, client-side form validation, and the integration of third-party APIs (in this case, interactive maps).

A key architectural feature is its page state management. The application starts in an "inactive" state and becomes fully "active" only after the map has successfully loaded and initialized, which ensures a smooth and error-free user experience.

---

## ✨ Key Features

### 🗺️ Interactive Leaflet Map

- All listings are displayed as markers on a dynamic Leaflet map.
- Clicking on a marker opens a custom popup with detailed information about the listing.
- The address for a new listing is set by dragging the main pin; the address field updates automatically and is protected from manual input.

### ⚙️ Advanced Dynamic Form

- Complex form with interdependent fields and real-time synchronization.
- The nightly price depends on the selected property type, and guest capacity is tied to the number of rooms.
- Check-in and check-out times are synchronized.
- Client-side validation ensures all inputs meet required criteria (e.g., title length, min/max price).
- Invalid fields are clearly highlighted.

### 🔍 Debounced Filtering

- Users can filter listings by housing type, price range, number of rooms, guest capacity, and amenities.
- Debounce mechanism (500ms) is used to optimize performance and prevent unnecessary re-renders.

### 🔒 Controlled Page States

- Two main states: **inactive** (form and filters disabled until the map loads) and **active**.
- Prevents user interaction with an uninitialized interface.

### 📤 Asynchronous Data Submission

- New listings are submitted to the server via AJAX in `multipart/form-data` format.
- Clear success/error messages are shown after submission.
- Messages can be dismissed via `Esc` key or by clicking the overlay.

### 🖼️ Image Upload Previews

- Live preview of uploaded avatar and property photos before submission.

---

## 🛠 Tech Stack

### 🚀 Core Stack

| Technology        | Purpose                                          |
|-------------------|--------------------------------------------------|
| JavaScript (ES6+) | Implementation of the entire application logic: DOM manipulation, event handling, form validation, and API interaction.                      |
| HTML5 & CSS3      | Creating a semantic structure and styling the application interface.                |
| Webpack           | Module bundler and build setup                  |

### 📦 Libraries & Utilities

| Library / Tool        | Role                                                        |
|------------------------|-------------------------------------------------------------|
| Leaflet.js        | The foundation of the project; used for rendering the interactive map, markers, and popup cards.         |
| Pristine.js           | Lightweight form validation library                         |
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

## 🧠 Challenges & Future Improvements

### ✅ Overcome Challenges

- **Integrating an Imperative Library (Leaflet)**  
  One of the main technical challenges was integrating Leaflet, which manipulates the DOM directly, into a modular architecture. This required creating wrapper modules and service layers to manage map state without breaking the overall structure.

- **Implementing Complex Validation Logic in Vanilla JS**  
  Synchronizing multiple form fields (e.g., *Property Type → Price*) demanded careful event handler logic and state control, all without the aid of frameworks.

- **Performance Optimization for Filtering**  
  Understanding and applying the debounce technique to the filtering function was key to providing a smooth UX when users interacted with multiple filter options simultaneously.

### 🚧 Potential Improvements

- **Refactor to React or Vue**  
  Migrating the project to a modern declarative framework would simplify state management and enable more reusable UI components.

- **Add User Authentication**  
  Implementing a login system would allow users to edit or delete only their own listings, improving security and personalization.

- **Expand Filtering Options**  
  Add support for sorting (e.g., by price) and implement full-text search by title or description to enhance usability.

