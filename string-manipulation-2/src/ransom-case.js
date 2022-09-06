/* exported ransomCase */

// assign an empty value to a new string
// any string passed to the function should be lowercased and stored in a variable
// loop through the lowercased string
// if index is even, lowercase the character
// otherwise, uppercase the character
// add those new values to the new string variable
// return the value of the new string

function ransomCase(string) {
  var newString = '';
  var lower = string.toLowerCase();

  for (var i = 0; i < lower.length; i++) {
    if (i % 2 === 0) {
      newString += lower[i];
    } else {
      var upper = lower[i].toUpperCase();
      newString += upper;
    }
  }
  return newString;
}
