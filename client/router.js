'use strict';
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var ListPage = require('./pages/list');
var PersonDetailPage = require('./pages/person_detail');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'list/:id': 'list',
		'detail/:id': 'detail'
	},

	home: function() {
		this.trigger('page', new HomePage());
	},

	list: function() {
		this.trigger('page', new ListPage());
	},

	detail: function(id) {
		this.trigger('page', new PersonDetailPage({id: id}));
	},

});