/* exported reverse */

// declare a variable and assign it an empty array
// loop through the array but in reverse
// start at the end of the array which is array.length - 1
// and decrement i
// each iteration an element is pushed to the array in reverse order
// return the value of the array

function reverse(array) {
  var reverseArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
