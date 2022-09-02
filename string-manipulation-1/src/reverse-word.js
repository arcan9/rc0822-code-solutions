/* exported reverseWord */

function reverseWord(word) {
  var stringInReverse = '';

  for (var i = word.length - 1; i >= 0; i--) {
    stringInReverse += word[i];
  }
  return stringInReverse;
}

/*
function reverseWord(word) {
  var stringInReverse = '';
  var split = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== '') {
      split.push(word[i]);
    }
  }
}

function splitWord(word) {
    var stringInReverse;
    var split = word.split('');
    return split;
}
*/
