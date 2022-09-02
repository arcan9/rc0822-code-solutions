/* exported compact */

// loop through an array and omit all falsy values

// declare variable and assign it an empty array
// declare an undefined falsy variable
// loop through each element in an array and define falsy as the truthiness of the array element
// if falsy is true (if it has a true value), then it's pushed to the array
// false values are omitted
// return the value of the new array

function compact(array) {
  var newArray = [];
  var falsy;

  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
