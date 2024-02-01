import { showAlert } from './util.js';

// Получаем данные с сервера
const getData = (onSuccess) => {
  const getUrl = 'https://26.javascript.htmlacademy.pro/keksobooking/data';

  fetch(getUrl)
    .then((response) => response.json())

    .then((data) => {
      onSuccess(data);
    })

    .catch(() => {
      //Ловим ошибку и показываем блок ошибки
      showAlert('Server is not available (Сервер не доступен)');
    });
};

//Отправляем данные на сервер с методом 'POST'
const sendData = (body, onSuccess, onError) => {
  const sendUrl = 'https://26.javascript.htmlacademy.pro/keksobooking';

  fetch(sendUrl, {
    method: 'POST',
    body,
    type: 'multipart/form-data'
  })
    .then((response) => {
      //Проверка если ответ сервера "ок(200)"
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
    })

    .catch(() => {
      onError();
    });
};

export { getData, sendData };
