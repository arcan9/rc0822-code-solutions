const fs = require('fs');

const argv = process.argv;

const [, , userInput] = argv;

const text = userInput + '\n';

fs.writeFile('./note.txt', text, 'utf-8', err => {
  if (err) {
    throw err;
  }
});
