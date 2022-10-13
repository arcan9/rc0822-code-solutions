// IN PROGRESS. NOT DONE WITH THIS EXERCISE

const fs = require('fs');

const argv = process.argv;

const [, , ...txtFiles] = argv;

fs.readFile(txtFiles, (err, data) => {
  if (err) {
    console.log(err);
  }

});
