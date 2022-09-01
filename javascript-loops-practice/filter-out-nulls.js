/* exported filterOutNulls */

function filterOutNulls(values) {
  var newValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
