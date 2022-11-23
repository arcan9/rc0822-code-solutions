/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  // store list values starting from second position to temp variable
  const tempList = list.next;
  // on initial list starting from second position, insert the new value
  list.next = new LinkedList(value);
  // on initial list starting from third position, insert the temp list
  list.next.next = tempList;
}
