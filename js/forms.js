const formElement = document.querySelector('.ad-form');
const filterElement = document.querySelector('.map__filters');
const fieldsetsElement = formElement.querySelectorAll('fieldset');

const deactivateForm = () => {
  formElement.classList.add('ad-form--disabled');
  filterElement.classList.add('ad-form--disabled');
  fieldsetsElement.forEach((item) => {
    item.setAttribute('disabled', '');
  });
  for (let i = 0; i < filterElement.children.length; i++) {
    filterElement.children[i].setAttribute('disabled', '');
  }
};

const activateForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetsElement.forEach((item) => {
    item.removeAttribute('disabled');
  });
  for (let i = 0; i < filterElement.children.length; i++) {
    filterElement.children[i].removeAttribute('disabled');
  }
};

const activateFilters = () => {
  filterElement.classList.remove('ad-form--disabled');
};

const forms = ['.ad-form', '.map__filters'].map((selector) => {
  const formElement = document.querySelector(`${selector}`);
  //Возвращаем новый объект: каждой формы, все поля форм, и класс disabled формы
  return {
    formElement,
    partElements: formElement.querySelectorAll('fieldset, select'),
    disabledClass: `${selector}--disabled`
  };
});

export { formElement, deactivateForm, activateForm, activateFilters, forms };
