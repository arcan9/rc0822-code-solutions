/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
