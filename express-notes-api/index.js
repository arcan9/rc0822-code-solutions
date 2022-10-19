const express = require('express');
const dataJSON = require('./data.json');
const dataNotes = dataJSON.notes;
const app = express();

app.use(express.json());

let dataNextId = dataJSON.nextId;

app.get('/api/notes', (req, res) => {
  const arr = [];
  if (Object.keys(dataNotes).length >= 0) {
    for (const id in dataNotes) {
      arr.push(dataNotes[id]);
    }
  }
  res.json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parseInt(id) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataNotes[id]) {
    res.status(404).json({ error: `No note matches the id ${id}` });
  } else {
    res.status(200).json(dataNotes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const newNotesObj = req.body;
  const content = req.body.content;

  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    // create a conditional here that checks if you're adding
    // a new note between ones that already exist
    // or if you're adding a new note at the end
    let id = req.body.id;
    if (parseInt(id) < Object.keys(dataNotes).length) {
      newNotesObj.id = id;
    } else {
      id = dataNextId++;
      newNotesObj.id = id;
    }

    dataNotes[id] = newNotesObj;
    res.status(201).json(newNotesObj);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
