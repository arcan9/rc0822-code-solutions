/* exported getStudentNames */

function getStudentNames(students) {
  var studentNamesArray = [];
  for (var i = 0; i < students.length; i++) {
    studentNamesArray.push(students[i].name);
  }
  return studentNamesArray;
}
