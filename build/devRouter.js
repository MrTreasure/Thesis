const express = require('express');
let router = express.Router();
let data = require('../data.js');
router.get('/data/newsAll',(req, res) => {
  console.log(req.query);
  res.json(data);
});
router.get('/data/news/:id?', (req, res) => {
  console.log(req.query)
  let flag = true;
  for (item of data) {
    if (req.query.id === item.id) {
      flag = false;
      res.json(item);
    }
  }
  if (flag) {
    res.status(404).send('not found news!');
  }

});

module.exports = router;
