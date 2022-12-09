/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const front = queue.dequeue();
    const queueEnd = queue.enqueue(front);
    return queueEnd;
  }
}
