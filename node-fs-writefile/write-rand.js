const fs = require('fs');

const randomNum = () => {
  const rand = (Math.floor(Math.random() * 100));
  return rand + '\n';
};

fs.writeFile('./rando.txt', randomNum(), 'utf-8', err => {
  if (err) {
    throw err;
  }
});
