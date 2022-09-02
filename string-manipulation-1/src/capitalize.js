/* exported capitalize */

function capitalize(word) {
  var lower = word.toLowerCase(); // word
  var firstLetter = lower[0]; // w
  var upper = firstLetter.toUpperCase(); // W

  var newWord = upper + lower.slice(1);
  return newWord;
}
