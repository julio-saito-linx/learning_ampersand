'use strict';

////
// Servidor tipo express.js, porém muito simples e poderoso
var hapi = require('hapi');

////
// faz a ligação entre o hapi e várias ferramentas 
// como o stylizer e o templatizer
// o Moonboots é o coração deste arquivo
var moonboots = require('moonboots_hapi');

////
// pega configuração de um arquivo .json que varia de nome conforme
// a variável de ambiente do node (NODE_ENV)
// em desenvolvimento: dev_config.json
var config = require('getconfig');

////
// lida com templates JADE -> HTML
var templatizer = require('templatizer');

////
// lida com arquivos .styl -> CSS
var stylizer = require('stylizer');

////
// cria o servidor do HAPI
var server = hapi.createServer(config.port, config.host_name);

////
// # peopleAPI
// fake server: servidor de entidades pessoas
var peopleAPI = require('./plugins/peopleAPI');

////
// # fakeLoginAPI
// fake server: servidor de entidades pessoas
server.route({
	method: 'GET',
	path: '/api/me',
	handler: function(request, reply) {
		reply({
			id: '12345',
			givenName: 'Julio',
			familyName: 'Saito',
			email: 'saitodisse@gmail.com'
		});
	}
});

server.pack.register([

	////
	// # moobboots_hapi (hapi-dummy-api)
	// plugin 1
	{
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
			        __dirname + '/node_modules/jquery-browserify/lib/jquery.js',
			        __dirname + '/node_modules/bootstrap/dist/js/bootstrap.js'
			    ],

	    		//CSS
				stylesheets: [
					__dirname + '/node_modules/bootstrap/dist/css/bootstrap.css',
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
					}, done);
				}

			}
		}
	},

	////
	// # peopleAPI
	// plugin 2
	// fake server: servidor de usuário logado(me) e autenticação
	peopleAPI

], function () {
		server.start();
		console.log('running server on http://' + config.host_name + ':' + config.port);
});
