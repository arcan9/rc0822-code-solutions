/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }

  if (list.next) {
    const temp = list.next.data;
    const temp2 = list.data;
    list.data = temp;
    list.next.data = temp2;
    return list;
  }
}
