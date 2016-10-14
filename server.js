var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var photos = require('./photos.unsplash.js');
var https = require('https');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8000, function() {
  var port = server.address().port;
  console.log('App now running on port', port);
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    "error": message
  });
}

app.get('/api/unsplash/photos', function(req, res) {
  res.send(photos.unsplash());
});