'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false }));

// Make app a public folder
app.use('/', express.static(__dirname + '/'));



var port = process.env.PORT || 8001;
var host = process.env.HOST || '0.0.0.0';
console.log('Starting dev REST server on http://%s:%d/', host, port);
app.listen(port, host);