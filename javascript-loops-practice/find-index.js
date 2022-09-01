/* exported findIndex */

function findIndex(array, value) {
  var indexOfValue = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return indexOfValue;
}
