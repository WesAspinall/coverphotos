var bodyParser = require('body-parser');
var fs = require('fs');
var express = require('express');
var path = require('path');
var photos = require('./photos.unsplash.js');
var request = require('request');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/api/unsplash/photos', (req,res) => {
 req.pipe(request('https://api.unsplash.com/photos/?client_id=1798b6ed4122f2e6f7bb3b7a4a1e0e83f8dafcca34afc73baf499a44a2a3b337')).pipe(res);
});


var server = app.listen(process.env.PORT || 8000, function() {
  var port = server.address().port;
  console.log('App now running on port', port);
});
