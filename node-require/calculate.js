const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argv = process.argv;
const num1 = parseInt(argv[2]);
const operation = argv[3];
const num2 = parseInt(argv[4]);

if (operation === 'plus') {
  const result = add(num1, num2);
  console.log('Result:', result);
}

if (operation === 'minus') {
  const result = subtract(num1, num2);
  console.log('Result:', result);
}

if (operation === 'times') {
  const result = multiply(num1, num2);
  console.log('Result:', result);
}

if (operation === 'divide') {
  const result = divide(num1, num2);
  console.log('Result:', result);
}
