var Router = require('ampersand-router');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'list': 'list'
	},

	home: function() {
		console.log('I\'m home');
	},

	list: function() {
		console.log('I\'m list');
	},

})