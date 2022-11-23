/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }
  // create a temp list for items starting from
  // second element
  let tempList = list.next;

  while (tempList) {
    // check two nodes ahead,
    // if that node is null,
    // set tempList starting on second node to null
    if (tempList.next.next == null) {
      tempList.next = null; // removes last node (tail)
    }
    // you traverse through the nodes
    // setting the value of the list to
    // the next values one node ahead
    tempList = tempList.next;
  }
}
