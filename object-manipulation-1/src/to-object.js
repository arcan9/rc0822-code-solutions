/* exported toObject */

// create an empty object and assign to a new variable
// assign the first element in the keyValuePair array as the first key of the object by using bracket notation
// assign the second element in the keyValuePair as the value of the key that was just added in using = operator.
// return value of the object

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
