/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return front;
  }

  const next = queue.dequeue();
  if (front < next) {
    queue.enqueue(next);
    return front;
  } else {
    queue.enqueue(front);
    return next;
  }
}
