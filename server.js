'use strict';
var hapi = require('hapi');
var moonboots = require('moonboots_hapi');

//localhost: apenas para essa maquina
//0.0.0.0: permite que o site seja visto de fora
var HOST_NAME = '0.0.0.0';
var PORT = 8888;

// cria o servidor do HAPI
var server = hapi.createServer(PORT, HOST_NAME);

server.pack.register({
	plugin: moonboots,
	options: {
	    //curinga, pega todas as rotas
		appPath: '/{p*}',

		// esta configuração é enviada para o plugin moonboots_hapi
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: true
		}
	}
}, function() {
	server.start();
	console.log('running server on port', PORT);
});
