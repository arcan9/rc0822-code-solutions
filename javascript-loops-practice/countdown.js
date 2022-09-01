/* exported countdown */

function countdown(number) {
  var countdown = [];
  var numberValue = number;

  while (numberValue >= 0) {
    countdown.push(numberValue);
    numberValue--;
  }
  return countdown;
}
