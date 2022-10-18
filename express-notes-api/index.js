const express = require('express');
const dataJSON = require('./data.json');
const app = express();

app.use(express.json());

let notesId = 1;
const notes = {};

// DUMMY OBJECT
// const notes =
// {
//   1: {
//     content: 'This is some content',
//     id: 1
//   },
//   2: {
//     content: 'This is some MORE content',
//     id: 2
//   },
//   3: {
//     content: 'Bla bla bla bla bla',
//     id: 3
//   }
// };

app.get('/api/notes', (req, res) => {
  const arr = [];
  if (Object.keys(dataJSON).length >= 0) {
    for (const id in dataJSON) {
      arr.push(dataJSON[id]);
    }
  }
  res.json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parseInt(id) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `No note matches the id ${id}` });
  } else {
    res.status(200).json(notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const newNotesObj = req.body;
  const content = req.body.content;

  if (!content) {
    // eslint-disable-next-line no-console
    console.log('No content property input');
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const id = notesId++;
    newNotesObj.id = id;
    notes[id] = newNotesObj;
    res.status(201).json(newNotesObj);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
