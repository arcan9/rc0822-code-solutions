/* exported includes */

function includes(array, value) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boolean = true;
    }
  }
  return boolean;
}
