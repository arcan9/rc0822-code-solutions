var $tabContainer = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {

    for (var i = 0; i < $allTab.length; i++) {
      $allTab[i].className = 'tab';
      if ($allTab[i] === event.target) {
        $allTab[i].className = 'tab' + ' active';
      }
    }
  }

  var viewAttr = event.target.getAttribute('data-view');

  for (var j = 0; j < $allView.length; j++) {
    if ($allView[j].getAttribute('data-view') === viewAttr) {
      $allView[j].className = 'view';
    } else {
      $allView[j].className = 'hidden';
    }
  }
});
