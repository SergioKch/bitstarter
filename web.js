var express = require('express');
var fs = require('fs');

 
var app = express.createServer(express.logger());

var buffer = new Buffer();

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    buffer.write(data); 
    });

  response.send(buffer.toString()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
