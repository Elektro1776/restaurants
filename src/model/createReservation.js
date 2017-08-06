// const mysql

const createReservation = (dbCon) => {
  const that = {};
  function addReservation(reservation) {
    dbCon.query('INSERT INTO reservations SET ?', reservation, (err, results, fields) => {
      if (err) throw new Error(err)

      console.log(' WE SHOULD HAVE AN INSERT!', results);
    })
  }
  that.addReservation = addReservation;
  return that;
}

module.exports = createReservation;
