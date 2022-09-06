var userClicks = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  userClicks++;
  $clickCount.textContent = 'Clicks: ' + userClicks;
  if (userClicks < 4) {
    $hotButton.className = 'hot-button' + ' cold';
  } else if (userClicks < 7) {
    $hotButton.className = 'hot-button' + ' cool';
  } else if (userClicks < 10) {
    $hotButton.className = 'hot-button' + ' tepid';
  } else if (userClicks < 13) {
    $hotButton.className = 'hot-button' + ' warm';
  } else if (userClicks < 16) {
    $hotButton.className = 'hot-button' + ' hot';
  } else {
    $hotButton.className = 'hot-button' + ' nuclear';
  }
});
