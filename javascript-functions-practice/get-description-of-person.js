/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person) {
  var desc = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return desc;
}
