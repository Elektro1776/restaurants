const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('viewTables', { title: 'Hot Restaurant'})
});

module.exports = router;
