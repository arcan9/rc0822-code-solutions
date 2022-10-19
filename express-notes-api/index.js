const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');

const dataNotes = dataJSON.notes;
const app = express();
app.use(express.json());

let dataNextId = dataJSON.nextId;

// get entire list of notes
app.get('/api/notes', (req, res) => {
  const arr = [];
  if (Object.keys(dataNotes).length >= 0) {
    for (const id in dataNotes) {
      arr.push(dataNotes[id]);
    }
  }
  res.json(arr);
});

// gets a specific note that matches an id
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

// adds a note in data.json
app.post('/api/notes', (req, res) => {
  const newNotesObj = req.body;
  const content = req.body.content;

  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const id = dataNextId++;
    newNotesObj.id = id;
    dataNotes[id] = newNotesObj;

    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      } else {
        res.status(201).json(newNotesObj);
      }
    });
  }
});

// deletes a note by id in data.json
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parseInt(id) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataNotes[id]) {
    res.status(404).json({ error: `No note matches the id ${id}` });
  } else {
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      delete dataNotes[id];
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
