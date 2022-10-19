const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const dataNotes = data.notes;
const app = express();
app.use(express.json());

let dataNextId = data.nextId;

// get entire list of notes
app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const id in dataNotes) {
    arr.push(dataNotes[id]);
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
    dataNotes[id] = newNotesObj;
    newNotesObj.id = id;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
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
  const id = parseInt(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataNotes[id]) {
    res.status(404).json({ error: `No note matches the id ${id}` });
  } else {
    delete dataNotes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

// existing notes can be edited
app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const content = req.body.content;
  const newNotesObj = req.body;

  if (id < 0 || !content) {
    if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!content) {
      res.status(400).json({ error: 'content is a required field' });
    }
  } else if (!dataNotes[id] && content) {
    res.status(404).json({ error: `No note matches the id ${id}` });
  } else {
    dataNotes[id] = newNotesObj;
    newNotesObj.id = id;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      } else {
        res.status(200).json(newNotesObj);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
