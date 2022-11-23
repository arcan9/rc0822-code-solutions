/* exported addToBack */

function addToBack(queue, value) {
  const back = queue.enqueue(value);
  return back;
}
