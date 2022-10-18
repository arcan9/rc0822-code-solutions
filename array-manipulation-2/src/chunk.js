/* exported chunk */

function chunk(array, size) {
  var newArr = [];
  var i = 0;

  while (i < array.length) {
    newArr.push(array.slice(i, i += size));
  }
  return newArr;
}
