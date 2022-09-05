/* exported swapChars */

/*
String with the characters at firstIndex and secondIndex swapped.

- split the string into an array
- create a temporary variable as buffer for elements at indexes 1 and 2
  - it is used to switch value of index 1 with value of index 2
- now that the characters are swapped, loop through array and convert back into a string
- return value of newString
*/

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var newString = '';

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  for (var i = 0; i < array.length; i++) {
    newString += array[i];
  }

  return newString;
}
