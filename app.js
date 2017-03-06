var express = require('express');
//using express
var todocontroler = require('./controlers/control.js');
var app = express();

app.set('view engine', 'ejs');
//setting template engine

//fire controlers
todocontroler(app);

app.use(express.static('./views'));

//listen at port 8888
app.listen(8888);
console.log('server is running');
