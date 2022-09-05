/* exported capitalizeWord */

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var firstLetter = lower[0];
  var upper = firstLetter.toUpperCase();
  var newWord = '';

  if (lower === 'javascript') {
    var capitalS = lower[4].toUpperCase();
    var slicedFirstHalf = lower.slice(1, 4);
    var sliceSecondHalf = lower.slice(5);
    newWord = upper + slicedFirstHalf + capitalS + sliceSecondHalf;
  } else {
    newWord = upper + lower.slice(1);
  }
  return newWord;
}
