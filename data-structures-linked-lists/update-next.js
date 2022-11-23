/* exported updateNext */

function updateNext(list, value) {
  if (list.next) {
    list.next.data = value;
  }
}
