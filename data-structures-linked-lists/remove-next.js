/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const tempList = list.next.next;
    list.next = tempList;
  }
}
