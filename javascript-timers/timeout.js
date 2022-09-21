var message = document.querySelector('.message');

function helloThere() {
  message.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
