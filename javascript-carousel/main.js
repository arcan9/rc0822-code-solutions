var carouselImage = document.querySelector('.carousel-img');

var imagesArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var counter = 0;

var timerId;

function startInterval() {
  timerId = setInterval(nextImgShow, 3000);
}

function stopInterval() {
  clearInterval(timerId);
}

function nextImgShow() {

  // img path is set to values in array and incremented
  carouselImage.src = imagesArray[counter++];

  // reset counter once you reach end of array
  if (counter >= imagesArray.length) {
    counter = 0;
  }

}
startInterval();

var $dotsContainer = document.querySelector('.dots-container');
var $dots = document.querySelectorAll('.dots-container i');

$dotsContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('i')) {

    for (var i in $dots) {
      if (event.target.className === 'fa-regular fa-circle') {
        event.target.className = 'fa-solid fa-circle';
        $dots[i].className = 'fa-regular fa-circle';
      } else {
        $dots[i].className = 'fa-regular fa-circle';
      }
    }

    if (event.target.id === 'btn-1') {
      carouselImage.src = imagesArray[0];
      counter = imagesArray.indexOf(imagesArray[0]);
    } else if (event.target.id === 'btn-2') {
      carouselImage.src = imagesArray[1];
      counter = imagesArray.indexOf(imagesArray[1]);
    } else if (event.target.id === 'btn-3') {
      carouselImage.src = imagesArray[2];
      counter = imagesArray.indexOf(imagesArray[2]);
    } else if (event.target.id === 'btn-4') {
      carouselImage.src = imagesArray[3];
      counter = imagesArray.indexOf(imagesArray[3]);
    } else if (event.target.id === 'btn-5') {
      carouselImage.src = imagesArray[4];
      counter = imagesArray.indexOf(imagesArray[4]);
    }
    stopInterval();

  }
}

var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', function () {
  counter++;

  counter = counter % imagesArray.length;

  carouselImage.src = imagesArray[counter];

  for (var i in $dots) {
    if ($dots[counter].className === 'fa-regular fa-circle') {
      $dots[counter].className = 'fa-solid fa-circle';
      $dots[i].className = 'fa-regular fa-circle';
    } else {
      $dots[i].className = 'fa-regular fa-circle';
    }
  }

  stopInterval();
});

leftArrow.addEventListener('click', function () {
  // if counter becomes 0, then go to the end of array for last image
  if (counter === 0) {
    counter = imagesArray.length;
  }
  // decrease counter by 1 and gives back the image at the current counter
  counter = counter - 1;
  carouselImage.src = imagesArray[counter];

  for (var i in $dots) {
    if ($dots[counter].className === 'fa-regular fa-circle') {
      $dots[counter].className = 'fa-solid fa-circle';
      $dots[i].className = 'fa-regular fa-circle';
    } else {
      $dots[i].className = 'fa-regular fa-circle';
    }
  }

  stopInterval();
});

startInterval();
