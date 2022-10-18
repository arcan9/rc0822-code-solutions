const express = require('express');
const app = express();

app.use(express.json());

// const notesId = 1;
// const notes = {};

// DUMMY OBJECT
const notes =
{
  1: {
    content: 'This is some content',
    id: 1
  },
  2: {
    content: 'This is some MORE content',
    id: 2
  },
  3: {
    content: 'Bla bla bla bla bla',
    id: 3
  }
};

app.get('/api/notes', (req, res) => {
  const arr = [];
  if (Object.keys(notes).length > 0) {
    for (const id in notes) {
      arr.push(notes[id]);
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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
