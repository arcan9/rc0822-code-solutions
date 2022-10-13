const fs = require('fs');

fs.readFile('./dijkstra.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
