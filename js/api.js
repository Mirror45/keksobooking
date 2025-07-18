import { showAlert } from './util.js';

// Fetch data from the server.
const getData = (onSuccess) => {
  const getUrl = 'https://26.javascript.htmlacademy.pro/keksobooking/data';

  fetch(getUrl)
    .then((response) => response.json())

    .then((data) => {
      onSuccess(data);
    })

    .catch(() => {
      // Catch errors and show the error block.
      showAlert('Server is not available (Server is unavailable)');
    });
};

// Send data to the server using the 'POST' method.
const sendData = (body, onSuccess, onError) => {
  const sendUrl = 'https://26.javascript.htmlacademy.pro/keksobooking';

  fetch(sendUrl, {
    method: 'POST',
    body,
    type: 'multipart/form-data'
  })
    .then((response) => {
      // Check if the server response is "OK (200)".
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    })

    .catch(() => {
      onError();
    });
};

export { getData, sendData };
