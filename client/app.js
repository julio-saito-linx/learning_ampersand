'use strict';
var MainView = require('./views/main');
var Router = require('./router');
var Tracer = require('./tracer/mogger-tracer');
var Me = require('./models/me')

// espera que a página esteja carregada e chama o callback
// o mesmo que utilizar o $.ready(function() { ... })
var domready = require('domready');

// arquivo de entrada "entry-point"
window.app = {
	init: function(){

		window.me = new Me();

		var tracer = new Tracer();
		tracer.startTracing();

		this.router = new Router();
		
		domready(this.start.bind(this));
	},

	start: function() {
		// a view principal
		// escuta o evento 'page' do router
		this.mainView = new MainView({
			el: document.body
		});

		// inicia o router principal, lê a URL e casa com a configuração de rotas
		// pushState: true -> para usar # (hashes)
		// para forçar alguma navegação use o this.router.history.navigate(url, {trigger: true})
		this.router.history.start({pushState: true});
	}
};

window.app.init();
