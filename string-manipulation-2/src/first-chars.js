/* exported firstChars */

/*
Return the first length characters of a string (e.g. only return the first 8 characters of a string)

- get the full string length first
- declare variable for the first length characters of the string, with no value yet
- slice the string starting at 0 index, and ending at length
- return value of first length characters
- if the value of length parameter is more than the full length of the string
  - return the whole string
*/

function firstChars(length, string) {
  var stringLength = string.length;
  var firstChars;

  if (length > stringLength) {
    firstChars = string;
  } else {
    firstChars = string.slice(0, length);
  }
  return firstChars;
}
