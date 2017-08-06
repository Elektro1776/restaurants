const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { body: '<h2>Hello restaurant</h2>'})
});

module.exports = router;
