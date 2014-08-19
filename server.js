'use strict';
var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');
var templatizer = require('templatizer');

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
			developmentMode: config.isDev,
			
			//CSS
			stylesheets: [
				__dirname + '/public/bootstrap.css'
			],

			//compila os templates JADE
			beforeBuildJS: function() {
				if(config.isDev){
					// onde estão os templates JADE para serem compilados?
					// arquivo destino que será criado com todos os templates
					//setTimeout(function() {
						templatizer(__dirname + '/templates', __dirname + '/client/templates.js');	
					//}, 1000)
					
				}
			}
		}
	}
}, function() {
	server.start();
	console.log('running server on http://' + config.host_name + ':' + config.port);
});
