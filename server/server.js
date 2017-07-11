//native to nodejs no installation neccessary
const path = require ('path');
const express = require ('express');
//reference current directory /server and add public
const publicPath = path.join(__dirname, '../public');

//need to add this for heroku
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));
app.listen(port, ()=> {
  console.log(`Server is up on port ${port}`);
});
//console.log(__dirname +'/../public'); ... this is why you need to use path module

//create a new express application, configure express static middlewear to serve up the public folder, provide app.listen on port 3000
//print messaage to terminal, go to localhost 3000 and see results.

console.log(publicPath);
