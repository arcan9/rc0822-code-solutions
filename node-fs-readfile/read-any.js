const fs = require('fs');

const argv = process.argv;

fs.readFile(argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('TXT FILE CONTENT:', data);
});
