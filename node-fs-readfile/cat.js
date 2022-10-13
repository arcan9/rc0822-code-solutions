const fs = require('fs');

const argv = process.argv;

const [, , ...txtFiles] = argv;

for (let i = 0; i < txtFiles.length; i++) {
  fs.readFile(txtFiles[i], 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

console.log('txtFiles:', txtFiles);
