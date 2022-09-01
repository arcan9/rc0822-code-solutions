/* exported filterOutStrings */

function filterOutStrings(values) {
  var newStringValues = [];

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newStringValues.push(values[i]);
    }
  }
  return newStringValues;
}
