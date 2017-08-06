const express = require('express');
const router = express.Router();

router.post('/createReservation', (req, res) => {
  console.log(' ARE WE HITTING OUR API ROUTE?', );
})
// finish api handler for viewing all reserved tables
router.get('/api/viewTabels')
module.exports = router;
