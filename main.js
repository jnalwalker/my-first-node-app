var http = require('http');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var port = 8080;
var logger = new EventEmitter();

logger.on('error', function(message){
  console.log('ERROR: ' + message);
})

http.createServer(function(request, response) {
  fs.readFile('index.html', function(err, content) {
      if(err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        logger.emit('error', err);
        response.end('Failed')
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(content);
      }
  })
}).listen(8080);

console.log('Server runing on port ' + port);
