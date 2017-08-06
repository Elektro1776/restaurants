const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('reservation', { body: 'Hot Restaurant'})
});

module.exports = router;
