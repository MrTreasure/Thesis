const express = require('express');
let router = express.Router();
let data = require('../data.js');
let info = require('../info.js');
router.get('/data/newsAll',(req, res) => {
  res.json(data);
});
router.get('/data/news/:id?', (req, res) => {
  console.log(req.query)
  let flag = true;
  for (item of data) {
    if (req.query.id == item.id) {
      flag = false;
      res.json(item);
    }
  }
  if (flag) {
    res.status(404).send('not found news!');
  }
});
router.get('/data/info/:name?', (req, res) => {
  console.log(req.query)
  let flag = true;
  if(info[req.query.name]) {
    flag = false;
    res.json(info[req.query.name]);
  }
  if (flag) {
    res.status(404).send('not found info!');
  }
});
router.post('/data/login', (req, res) => {
  console.log(req.body);
  if (req.body.username === 'admin' && req.body.userpwd === 'admin') {
    res.send('right');
  } else {
    res.send('wrong');
  }
});
router.post('/data/send', (req, res) => {
  console.log(req.body);
  let rand = ~~(Math.random()*10);
  if (rand >= 5) {
    res.send('right');
  } else {
    res.send('wrong');
  }
});

module.exports = router;
