var MainView = require('./main-view');

// espera que a página esteja carregada e chama o callback
// o mesmo que utilizar o $.ready(function() { ... })
var domready = require('domready');

// arquivo de entrada "entry-point"
window.app = {
	init: function(){
		domready(this.renderMainView.bind(this));
	},

	renderMainView: function() {
		this.mainView = new MainView({
			el: document.body
		});
	}
};

window.app.init();
