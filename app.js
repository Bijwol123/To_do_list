var express = require('express');

var todoController = require('./controllers/todoController'); 

var app = express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//lusten to port
// app.listen(3000);
// console.log('You are listening to port 3000');
app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});