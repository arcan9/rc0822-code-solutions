/* exported dropRight */

function dropRight(array, count) {
  if (array.length > count) {
    var lastElements = array.slice((array.length) - count);
    // remove negative length of elements to start removing
    // from end of array
    array = array.slice(0, -(lastElements.length));
  }
  return array;
}
