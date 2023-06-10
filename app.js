const http = require('http')

console.log('Server starting')
var port = process.env.PORT || 8080

var handler = function(request, response) {
    //console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    //response.end("<h1>You've hit " + os.hostname() + "</h1>\n");
    response.end("<h1> OpenShift and Node.js</h1>\n");
}

var server = http.createServer(handler);
server.listen(port);
