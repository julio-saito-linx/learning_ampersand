var hapi = require('hapi');

var PORT = 8080;

var server = hapi.createServer(PORT, 'localhost');

console.log('running server on port', PORT);
server.start();