function handleSubmit(event) {
  event.preventDefault();
  var $nameInput = $formEl.elements.name.value;
  var $emailInput = $formEl.elements.email.value;
  var $messageInput = $formEl.elements.message.value;

  var userData = {};

  userData.name = $nameInput;
  userData.email = $emailInput;
  userData.message = $messageInput;

  console.log('userData:', userData);

  $formEl.reset();
}

var $formEl = document.querySelector('#contact-form');
$formEl.addEventListener('submit', handleSubmit);
