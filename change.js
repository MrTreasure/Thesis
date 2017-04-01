const fs = require('fs');
let data = require('./data.js');
const path = require('path');

let dataJson = JSON.stringify(data);

fs.writeFile(path.join(__dirname, '/data.json'), dataJson, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(path.join(__dirname, '/data.json'));
    console.log('finish');
  }
});
