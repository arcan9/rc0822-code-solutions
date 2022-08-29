var student = {
  firstName: 'Ashelle',
  lastName: 'Cancio',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Illustrator';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Kia',
  model: 'Rio',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('the value of vehicle["color"]:', vehicle['color']);
console.log('the value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Indy',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('the value of pet:', pet);
