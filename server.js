'use strict';
var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');

// cria o servidor do HAPI
var server = hapi.createServer(config.port, config.host_name);

server.pack.register({
	plugin: moonboots,
	options: {
	    //curinga, pega todas as rotas
		appPath: '/{p*}',

		// esta configuração é enviada para o plugin moonboots_hapi
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: config.isDev
		}
	}
}, function() {
	server.start();
	console.log('running server on http://' + config.host_name + ':' + config.port);
});
