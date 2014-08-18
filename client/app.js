'use strict';
var MainView = require('./main-view');
var Router = require('./router');
var Tracer = require('./tracer/mogger-tracer');

// espera que a página esteja carregada e chama o callback
// o mesmo que utilizar o $.ready(function() { ... })
var domready = require('domready');

// arquivo de entrada "entry-point"
window.app = {
	init: function(){
		var tracer = new Tracer();
		tracer.startTracing();

		this.router = new Router();
		
		// inicia o router principal, lê a URL e casa com a configuração de rotas
		// pushState: true -> para usar # (hashes)
		// para forçar alguma navegação use o this.router.history.navigate(url, {trigger: true})
		this.router.history.start({pushState: true});

		
		domready(this.renderMainView.bind(this));
	},

	renderMainView: function() {
		this.mainView = new MainView({
			el: document.body
		});
	}
};

window.app.init();
