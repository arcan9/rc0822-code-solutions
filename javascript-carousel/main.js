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
// var $dots = document.querySelectorAll('.dots-container i');

$dotsContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('i')) {

    if (event.target.id === 'btn-1') {
      carouselImage.src = imagesArray[0];
    } else if (event.target.id === 'btn-2') {
      carouselImage.src = imagesArray[1];
    } else if (event.target.id === 'btn-3') {
      carouselImage.src = imagesArray[2];
    } else if (event.target.id === 'btn-4') {
      carouselImage.src = imagesArray[3];
    } else if (event.target.id === 'btn-5') {
      carouselImage.src = imagesArray[4];
    }
    stopInterval();

  }
}
startInterval();
