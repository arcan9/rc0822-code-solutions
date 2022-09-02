/* exported sumAll */

function sumAll(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
