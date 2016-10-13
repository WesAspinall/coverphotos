var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var mongodb = require('mongodb');

var ObjectID = mongodb.ObjectID;
var UNSPLASH_COLLECTION = "unsplash";
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

// database variable outside of connection
// callback ... reusable by API routes
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  //initialize
  var server = app.listen(process.env.PORT || 8000, function() {
    var port = server.address().port;
    console.log('App now running on port', port);
  });

});