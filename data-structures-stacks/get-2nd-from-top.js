/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (typeof stack.peek() === 'undefined') {
    return undefined;
  } else {
    const top = stack.pop();
    const secondTop = stack.peek();
    stack.push(top);
    return secondTop;
  }
}
