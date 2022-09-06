var $lightBulb = document.querySelector('.light-bulb');
var $bodyEl = document.querySelector('body');
var lightIsOn = true;

function lightOnAndOff() {
  if (lightIsOn) {
    $bodyEl.className = 'dark-mode';
    $lightBulb.className = 'light-bulb' + ' off';
    lightIsOn = false;
  } else {
    $bodyEl.className = '';
    $lightBulb.className = 'light-bulb';
    lightIsOn = true;
  }
}

$lightBulb.addEventListener('click', lightOnAndOff);
