var num1 = 5;
var num2 = 15;
var num3 = 7;

var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['spiderman', 'baymax', 'mystique', 'the incredibles'];

var randomNumber = Math.random();
randomNumber += randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('the value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [{ title: 'Jade City', author: 'Fonda Lee' }, { title: 'Death On The Nile', Author: 'Agatha Christie' }, { title: 'The Metamorphosis', Author: 'Franz Kafka' }];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js.title);
library.unshift(css.title);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Ashelle Cancio';

var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
