/* exported countValues */

function countValues(stack) {
  let i = 0;

  while (typeof stack.peek() !== 'undefined') {
    i++;
    stack.pop();
  }
  return i;
}
