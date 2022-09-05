/* exported numVowels */

/*

- loop through a passed string to the function
- declare a count variable set to 0
- lowercase the string to account for uppercase letters
- check how many vowels in string
  - if it's a vowel, add 1 to the original value of count
  - if it's not, do nothing
- return value of count

*/

function numVowels(string) {
  var count = 0;
  var lower = string.toLowerCase();

  for (var i = 0; i < lower.length; i++) {
    if (lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u') {
      count++;
    }
  }
  return count;
}
