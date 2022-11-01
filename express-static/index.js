const express = require('express');
const path = require('path');

const app = express();

const myPath = path.join(__dirname, 'public');
console.log('myPath:', myPath);

app.use(express.static(myPath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Im listening to station 3000!');
});
