const express = require('express');
const app = express();

app.use(express.json());

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const id in grades) {
    arr.push(grades[id]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const newGradesObj = req.body;
  const id = nextId++;
  newGradesObj.id = id;
  grades[id] = newGradesObj;
  res.status(201).json(newGradesObj);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
