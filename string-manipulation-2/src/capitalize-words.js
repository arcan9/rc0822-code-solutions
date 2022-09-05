/* exported capitalizeWords */

/*
- assign an empty value to a new string
- lowercase all strings passed to the function
- split the string into an array and assign it to a variable
- loop through this array
  - in each iteration take the first letter of each word in the array, then uppercase it
  - slice the word to extract the characters EXCEPT the first letter
  - add the uppercase letter to the sliced word, which results in a capitaliezed word (e.g. 'coding' becomes 'Coding')
  - add that result + a space (' ') to the newString variable created earlier
  - do the same thing to the rest of the words but don't add the space to the last word (at last index)
- return the final value of the newString variable
*/

function capitalizeWords(string) {
  var newString = '';
  var lower = string.toLowerCase();
  var splitString = lower.split(' '); // array

  for (var i = 0; i < splitString.length; i++) {
    var firstLetter = splitString[i][0];
    var upper = firstLetter.toUpperCase();

    if (i === splitString.length - 1) {
      newString += upper + splitString[i].slice(1);
    } else {
      newString += upper + splitString[i].slice(1) + ' ';
    }
  }
  return newString;
}
