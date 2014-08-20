'use strict';
var MainView = require('./views/main');
var Router = require('./router');
var Tracer = require('./tracer/mogger-tracer');
var Me = require('./models/me');

// espera que a página esteja carregada e chama o callback
// o mesmo que utilizar o $.ready(function() { ... })
var domready = require('domready');

// arquivo de entrada "entry-point"
window.app = {
	init: function(){

		// me = Model
		// este modelo guarda as informações do usuário que está logado
		// por isso, para facilitar, ele é global
		window.me = new Me();

		// Mogger
		this.tracer = new Tracer();
		this.tracer.startTracing();

		// Gerenciamento de Rotas
		this.router = new Router();

		
		// mesma coisa que o $.ready
		domready(this.start.bind(this));
	},

	start: function() {
		// a view principal
		// escuta o evento 'page' do router
		this.mainView = new MainView({
			el: document.body,
			model: window.me
		});

		this.tracer.addSurrogateAndTracer({
			surrogateTarget: {
				name: 'mainView',
				instance: this.mainView
			},
			traceObj: {
				before: {	message: 'mainView', css: 'color: #C42' },
				target: 'mainView', targetConfig: {	css: 'color: #C42' },
				pointcut: /./
			}
		});

		// inicia o router principal, lê a URL e casa com a configuração de rotas
		// pushState: true -> para usar # (hashes)
		// para forçar alguma navegação use o this.router.history.navigate(url, {trigger: true})
		this.router.history.start({pushState: true});
	}
};

window.app.init();
