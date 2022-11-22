/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (typeof stack.peek() !== 'undefined') {
    const top = stack.pop();
    stack.push(value);
    stack.push(top);
  }
}
