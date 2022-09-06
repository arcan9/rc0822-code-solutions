/* exported lastChars */

/*
Return last length characters of string (e.g. only the last 8 characters of a string)

- slice the string using a negative argument
- using a negative index as the first argument counts from the end of the string and up to the given length
- return the value of sliced string
*/

function lastChars(length, string) {
  var lastChars = string.slice(-1 * length);
  return lastChars;
}
