/* exported includesSeven */

function includesSeven(array) {
  var includesSeven = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      includesSeven = true;
      return includesSeven;
    }
  }
  return includesSeven;
}
