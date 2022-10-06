var express = require('express');
var app = express();
var host ='127.0.0.1';
var port = 8080
app.use(express.static('public'));

app.listen(port, host);


