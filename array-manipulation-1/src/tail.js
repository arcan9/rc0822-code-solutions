/* exported tail */

// declare variable and assign it an empty array
// Loop through the passed array and push every element into a new array except the first element
// so if the index i = 0 (first element), the function doesn't push it to the new array
// return value of the new array

function tail(array) {
  var tailArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
