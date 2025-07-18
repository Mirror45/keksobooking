import { forms } from './forms.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

let cloneElement;

// Pressing the "Escape" key.
const isEscapeKey = (evt) => evt.key === 'Escape';

// Show the success submission window.
const showSuccess = () => {
  cloneElement = templateSuccess.cloneNode(true);

  body.append(cloneElement);
  // Clear the form fields.
  forms.forEach(({ formElement }) => formElement.reset());

  document.addEventListener('keydown', closeOnEsc);
  cloneElement.addEventListener('click', () => {
    // Check if the element exists — remove it.
    if (cloneElement) {
      cloneElement.remove();
    }
  });
};

// Show the window if submission fails.
const showError = () => {
  cloneElement = templateError.cloneNode(true);
  const errorButton = cloneElement.querySelector('.error__button');

  body.append(cloneElement);

  document.addEventListener('keydown', closeOnEsc);
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.error') || evt.target === errorButton) {
      cloneElement.remove();
    }
  });
};

// Remove the block on 'Esc' key press.
function closeOnEsc(evt) {
  if (isEscapeKey(evt)) {
    cloneElement.remove();
  }
}

export { showSuccess, showError };
