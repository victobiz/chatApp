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
});
