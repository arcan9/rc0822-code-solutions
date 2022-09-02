/* exported getValues */

// create an empty array and assign it to a new variable
// access the keys(properties) in an object using the for...in loop
// get the value of each property in an object by using bracket notation
// push that value to the new array
// return the result of that array

function getValues(object) {
  var newArray = [];

  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
