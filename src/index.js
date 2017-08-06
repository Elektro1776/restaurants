const path = require('path');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const homeRouter = require('../routes/home');
const reservationRouter = require('../routes/reservation');
const viewTablesRouter = require('../routes/viewTables');
const apiRouter = require('../routes/apiRoutes');
const hbs = require('hbs');
const app = express();
const config = require('../config');
const connection = mysql.createConnection(config);
const hotDb = require('./model/createReservation')(connection);

connection.connect((err) => {
  if(err) throw err;
  console.log(' WE HAVE A CONNECTION ON : ', connection.threadId);
})
const PORT = 3000;
app.use(bodyParser.json())
app.set('views', path.join(__dirname,'../views'))
app.set('view engine', 'hbs')


app.use(express.static(path.join(__dirname, '../public')));
app.use('/', homeRouter);
app.use('/reservation', reservationRouter);
app.use('/tables', viewTablesRouter);
app.post('/api/createReservation', (req, res) => {
  hotDb.addReservation(req.body)
  res.sendStatus(200)
} );

// TODO: add api routes for getting current tables that are reserved
//
app.get('/api/viewTables', (req, res) => {
  // hotDb.
})
app.listen(PORT, () => {
  console.log('Connected on port: ' + PORT);
})
