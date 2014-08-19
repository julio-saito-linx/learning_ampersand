'use strict';
var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');
var templatizer = require('templatizer');
var stylizer = require('stylizer');

// cria o servidor do HAPI
var server = hapi.createServer(config.port, config.host_name);

server.route({
	method: 'GET',
	path: '/api/me',
	handler: function(request, reply) {
		reply({
			id: '12345',
			givenName: 'Julio',
			familyName: 'Saito',
			email: 'saitodisse@gmail.com'
		})
	}
})

server.pack.register({
	plugin: moonboots,
	options: {
	    //curinga, pega todas as rotas
		appPath: '/{p*}',

		// esta configuração é enviada para o plugin moonboots_hapi
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: config.isDev,
			
			//JS
			libraries: [
		        __dirname + '/node_modules/jquery-browserify/lib/jquery.js'
		    ],

    		//CSS
			stylesheets: [
				__dirname + '/public/bootstrap.css',
				__dirname + '/public/app.css',
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
			},

			beforeBuildCSS: function(done) {
				if(!config.isDev){
					// se não estiver em DEV já cai fora daqui
					return done();
				}

				stylizer({
					infile: 	 __dirname + '/public/app/main.styl',
					outfile:	 __dirname + '/public/app.css',
					development: true,
					watch:       __dirname + '/public/app/**/*.styl'
				}, done)
			}

		}
	}
}, function() {
	server.start();
	console.log('running server on http://' + config.host_name + ':' + config.port);
});
