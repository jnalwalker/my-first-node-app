var http = require('http');
var port = 8080;
http.createServer(function functionName(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("My first Node app");
}).listen(8080);

console.log('Server runing on port ' + port);
