/* exported isVowel */

// define a boolean to be true
// convert all characters to lowecase to in case a passed string is uppercased
// if the string is not strictly equal to a vowel, boolean will be false, return boolean
// otherwise, return the original value of boolean which is true

function isVowel(char) {
  var boolean = true;
  char = char.toLowerCase();
  if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
    boolean = false;
    return boolean;
  }
  return boolean;
}
