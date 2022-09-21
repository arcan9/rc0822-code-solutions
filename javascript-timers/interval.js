var countdownDisplay = document.querySelector('.countdown-display');

var counter = 4;

var countdown = setInterval(function () {
  countdownDisplay.textContent = counter;
  if (counter === 0) {
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  } else {
    counter--;
  }

}, 1000);
