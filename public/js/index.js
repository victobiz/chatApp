//need to send data to the server.
var socket =io();

socket.on('connect', function() {
  console.log('connected to server');

  /*socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey. This chris'
  });*/

/*  socket.emit('createMessage', {
    from: 'Chris',
    text: 'great goodness'
  });*/
});

socket.on('disconnect', () => {
  console.log('disconnected from server');
});
/*socket.on('newEmail', function(email) {
  console.log('new email', email);
});*/

socket.on('newMessage', function(message) {
  console.log('newMessage', message);

  //modify our callback function
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});



// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hi'
// }, function(data) {
//   console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){

  });
});
