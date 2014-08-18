var 

// arquivo de entrada "entry-point"
window.app = {
	init: function(){
		var debugMessage = 'window.app.init() executed';
		console.log(debugMessage);

		//ERRO: document.body ainda não existe!
		//document.body.innerHTML = debugMessage;
	}
};

window.app.init();
