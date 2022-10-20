/* exported takeRight */

function takeRight(array, value) {
  // if the length of the array is greater than the value
  // then slice the array with the following argument
  // otherwise, just return the original array
  if (array.length > value) {
    array = array.slice((array.length) - value);
  }
  return array;
}
