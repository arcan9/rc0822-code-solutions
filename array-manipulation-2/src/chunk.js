/* exported chunk */

// take out n elements and store them inside a variable. Slice.
// there will be n sets of arrays, the one(s) sliced out
// and the remaining one (if any).
// transfer those arrays into a new empty array. Push method.
// return the value of the new array.

function chunk(array, size) {
  var newArr = [];
  var i = 0;

  while (i < array.length) {
    newArr.push(array.slice(i, i += size));
  }
  return newArr;
}
