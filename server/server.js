//native to nodejs no installation neccessary
const path = require ('path');
const http = require ('http');
const express = require ('express');
const socketIO = require ('socket.io');

//reference current directory /server and add public
const publicPath = path.join(__dirname, '../public');
const {generateMessage} = require('./utils/message');

//need to add this for heroku enviornment
const port = process.env.PORT || 3000;
var app = express();

//http is integrated with express so much so that you dont need (req, res) => just (app)
var server = http.createServer(app);

//gives access to a route that accepts incoming connections
//gives acces to javascript library that makes it easy to work with socket.io localhost:3000/socket.io/sockt.io.js
var io = socketIO(server);

app.use(express.static(publicPath));

//whenever sombody connects
io.on('connection', function(socket) {
  console.log('New user connected');

//instead of listening to event here we are creating event
  /*socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on',
    createat: 123
  });*/

  /*socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createdAt: 123123
  })*/

  /*socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });*/

// socket.emit('newMessage', {
//   from: 'admin',
//   text: 'Welcome to the chat app',
//   createdAt: new Date().getTime()
// });

//now since we have teh message function in the utils folder...

socket.emit('newMessage', generateMessage('admin', 'welcome to the chat app'));

// socket.broadcast.emit('newMessage', {
//   from: 'admin',
//   text: 'new user joined',
//   createdAt: new Date().getTime()
// });

socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'))

  socket.on('createMessage', (message)=> {
    console.log('createMessage', message);

    // io.emit('newMessage', {
    //    from: message.from,
    //    text: message.text,
    //    createdAt: new Date().getTime()
    //  });

    io.emit('newMessage', generateMessage(message.from, message.text));

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });

  });

  socket.on('disconnect', function () {
    console.log('User was disconnected');
  })
});
//since using http use server instead of app
server.listen(port, ()=> {
  console.log(`Server is up on port ${port}`);
});
//console.log(__dirname +'/../public'); ... this is why you need to use path module

//create a new express application, configure express static middlewear to serve up the public folder, provide app.listen on port 3000
//print messaage to terminal, go to localhost 3000 and see results.

console.log(publicPath);
