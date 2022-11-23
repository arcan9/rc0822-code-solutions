/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;

  while (typeof stack.peek() !== 'undefined') {
    max = Math.max(max, stack.pop());
  }

  return max;

  // loop through stack
  // check if a value at of current top is larger than `max`
  // if it's larger than `max`, current top becomes the new `max`
}
