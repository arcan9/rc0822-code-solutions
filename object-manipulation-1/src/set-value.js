/* exported setValue */

// assign the value of the variable 'value' to 'object' at index 'key'
// the result of that should be assigned to another variable
// return the result

function setValue(object, key, value) {
  var updatedObject = (object[key] = value);
  return updatedObject;
}
