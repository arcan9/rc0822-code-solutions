/* exported truncate */

function truncate(length, string) {
  var trancatedString = string.slice(0, length) + '...';
  return trancatedString;
}
