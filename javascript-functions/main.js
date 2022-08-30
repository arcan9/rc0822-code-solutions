function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('value of convertMinutesToSecond(5):', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('value of greet(Jude):', greet('Jude'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('value of getArea(25, 10):', getArea(25, 10));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('value of get firstName({firstName: "Bugs", lastName: "Bunny"}:', getFirstName({ firstName: 'Bugs', lastName: 'Bunny' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log("last element in ['ps4', 'switch', 'gameboy', 'steamdeck']:", getLastElement(['ps4', 'switch', 'gameboy', 'steamdeck']));
