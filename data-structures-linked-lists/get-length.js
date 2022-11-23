/* exported getLength */

function getLength(list) {
  let i = 0;
  let temp = list;

  while (temp) {
    i++;
    temp = temp.next;
  }
  return i;
}
