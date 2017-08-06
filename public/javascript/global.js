$('document').ready(function() {
  console.log(' READY!!!!');

  $('form').submit((e) => {
    console.log(' IS THIS CLICKING?',);
    e.preventDefault();
    e.preventDefault();
    var $inputs = $('#reservationForm :input:not(:button)');
    var values = {};
    $inputs.each(function() {
      console.log(' WHAT IS THE This', $(this));
      var id = $(this)[0].id;
      values[id] = $(this).val();

      $(this).val('');
    });
    console.log(' WHAT ARE THE VALUES', values);
    post('/api/createReservation', values).then((status) => {
      if(status === 200) console.log(' SUCCESS@!');
      console.log(' WHAT IS OUR STATUS', status);
    })
  });

  function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}
})
