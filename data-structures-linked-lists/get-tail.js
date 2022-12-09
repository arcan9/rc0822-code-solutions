/* exported getTail */

function getTail(list) {
  // while there are existing items on list
  // the list is reassigned the values of those items
  // until we are left with only value to evaluate: last item on list
  // then return that last item (tail)
  while (list.next) {
    list = list.next;
  }
  return list.data;
}
