/* exported initial */

// declare variable and assign it an empty array
// Loop through the passed array and push every element into a new array except the last element
// so if the index i = array.length - 1 (last element), the function doesn't push it to the new array
// return value of the new array

function initial(array) {
  var initialArray = [];
  var lastIndex = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    if (i !== lastIndex) {
      initialArray.push(array[i]);
    }
  }
  return initialArray;
}
