const http = require('http')
const os = require('os')

console.log('Server starting')

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("<h1>You've hit " + os.hostname() + "</h1>\n");
}

var server = http.createServer(handler);
server.listen(9090);