
exports.unsplash = function() {
  var https = require('https');
  var options = {
    host: 'api.unsplash.com',
    path: '/photos/?client_id=1798b6ed4122f2e6f7bb3b7a4a1e0e83f8dafcca34afc73baf499a44a2a3b337',
    method: 'GET'
  }

  var req = https.request(options, function(res) {
    console.log(res.statusCode);
    res.on('data', function(d) {
      process.stdout.write(d);  
    });
  });

  req.end();

  req.on('error', function(error) {
    console.error(error);
  });
}