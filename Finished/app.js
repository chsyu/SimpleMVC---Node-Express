var express = require('express');
var app = express();
var main = require('./routers/main');
var person = require('./routers/person');

var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', main);
app.use('/person', person);


app.listen(port);
