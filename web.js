var express = require('express');
var fs = require('fs');

 
var app = express.createServer(express.logger());

var buffer = new Buffer();



app.get('/', function(request, response) {
    //fs.readFileSync('index.html', function(err, data) {
    //if (err) throw err;
    buffer.write(fs.readFileSync('index.html')); 
    //});

  response.send(buffer.toString('utf-8')); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
