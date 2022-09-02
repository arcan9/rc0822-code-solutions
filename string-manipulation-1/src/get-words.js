/* exported getWords */

// Create a new array to be returned later
// Create a tempString variable to hold value of characters being extracted from string
// Loop through each character of the string
// add value of string at index to tempString as long as it's not a space
// this is where space acts as a separator
// else if it's a space, push the current value of tempString to the new array

// when a string contains more than one word, the last word doesn't get pushed to the array
// a new if statement is need for the last word to be included
// create an if statement that check if tempString still has a value
// whatever value's left will get pushed to the end of array
// return the value of the new array

function getWords(string) {
  var newArray = [];
  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      tempString += string[i];
    } else {
      newArray.push(tempString);
      tempString = '';
    }
  }

  if (tempString) {
    newArray.push(tempString);
  }
  return newArray;
}
