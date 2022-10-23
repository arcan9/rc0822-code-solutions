const express = require('express');
const pg = require('pg');
const app = express();
app.use(express.json());

// when using pg package, create a database connection object.
// this creates ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
SELECT *
FROM "grades"
`;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (typeof score === 'undefined') {
    res.status(400).json({
      error: 'Score is a required field.'
    });
    return;
  }

  if (typeof course === 'undefined') {
    res.status(400).json({
      error: 'Course is a required field.'
    });
    return;
  }

  if (typeof name === 'undefined') {
    res.status(400).json({
      error: 'Name is a required field.'
    });
    return;
  }

  if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100' });
    return;
  }

  const sql = `
  INSERT INTO "grades" ("name", "course", "score")
  VALUES ($1, $2, $3)
  RETURNING *
  `;

  const values = [name, course, score];

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId);

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (typeof score === 'undefined') {
    res.status(400).json({
      error: 'Score is a required field.'
    });
    return;
  }

  if (typeof course === 'undefined') {
    res.status(400).json({
      error: 'Course is a required field.'
    });
    return;
  }

  if (typeof name === 'undefined') {
    res.status(400).json({
      error: 'Name is a required field.'
    });
    return;
  }

  const sql = `
  UPDATE "grades"
  SET "name" = $1,
      "course" = $2,
      "score" = $3
  WHERE "gradeId" = $4
  RETURNING *
  `;

  const values = [name, course, score, id];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${id}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId);

  const sql = `
  DELETE
  FROM "grades"
  WHERE "gradeId" = $1
  RETURNING *
  `;

  const value = [id];

  db.query(sql, value)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with the gradeId ${id}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
/* ================== */

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000...');
});
