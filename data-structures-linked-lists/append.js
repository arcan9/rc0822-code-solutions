/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let tempList = list;
  // while a next node exists,
  // that next node will become the new list
  // until it reaches the end of the list and
  // no longer has a next node
  while (tempList.next) {
    tempList = tempList.next;
  }
  // a new value is then appended to the end(tail) of the list
  tempList.next = new LinkedList(value);
}
