/* exported drop */

// to keep last n items of an array:
// [1] subtract the total of removed elements from the length of the array
// [2] store the difference in a variable called `number`
// [3] slice the array
//   [a] the values passed inside the argument of the slice method
//       is the difference of array.length and `number`
// [4] return the new array

function drop(array, count) {
  // count === removed elements
  var number = array.length - count;
  array = array.slice((array.length) - number);
  return array;
}
