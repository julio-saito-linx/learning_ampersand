'use strict';
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var ListPage = require('./pages/list');
var PersonDetailPage = require('./pages/person_detail');
var UmDoisTresPage = require('./pages/um-dois-tres');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'list/:id': 'list',
		'detail/:id': 'detail',
		'um/': 'um',
		'dois/': 'dois',
		'tres/': 'tres',
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

	um: function() {
		this.trigger('page', new UmDoisTresPage());
	},

	dois: function() {
		this.trigger('page', new UmDoisTresPage());
	},

	tres: function() {
		this.trigger('page', new UmDoisTresPage());
	},

});