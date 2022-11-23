/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }

  let count = 0;
  while (count < index) {
    const front = queue.dequeue();
    queue.enqueue(front);
    count++;
  }
  return queue.dequeue();
}
