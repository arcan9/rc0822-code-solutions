/* exported getKeys */

// create an empty array and assign to a new variable
// go through an object and access its keys using the for...in loop
// push each key to the new array
// return the result of the new array

function getKeys(object) {
  var newArray = [];

  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
