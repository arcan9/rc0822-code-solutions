var $allLetters = document.querySelectorAll('span');

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  // console.log($allLetters.length);
  var keyPressed = event.key;
  for (const element of $allLetters) {
    if (element === keyPressed) {
      console.log('letter matched!');
    }
    // console.log(element);
  }
  // console.log('$allLetters[i]', $allLetters[i]);
  console.log('pressed key:', keyPressed);
}

// go through all the elements in the array $allSpan
// check if the keydown is equal to the current entry in the array
// if it is, add a className to $allSpan[i] that changes the color of that element

// else {
//       $allLetters[i].className = 'wrong';
//     }
