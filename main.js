var http = require('http');
var fs = require('fs');
var port = 8080;
http.createServer(function functionName(request, response) {
  fs.readFile('index.html', function(err, content) {
      if(err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('Failed')
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(content);
      }
  })
}).listen(8080);

console.log('Server runing on port ' + port);
