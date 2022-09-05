/* exported swapChars */

/*
- Take firstIndex
*/

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var newString = '';

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  for (var i = 0; i < array.length; i++) {
    newString += array[i];
  }

  return newString;
}
