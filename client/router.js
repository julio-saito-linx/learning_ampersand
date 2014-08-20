'use strict';
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UsersListPage = require('./pages/users-list');
var PersonDetailPage = require('./pages/person_detail');
var UmDoisTresPage = require('./pages/um-dois-tres');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'users': 'users',
		'detail/:id': 'detail',
		'um': 'um',
		'dois': 'dois',
		'tres': 'tres',
	},

	initialize: function() {
		window.app.tracer.addSurrogateAndTracer({
			surrogateTarget: {
				name: 'router',
				instance: this
			},
			traceObj: {
				before: {	message: 'router', css: 'color: #C42' },
				target: 'router', targetConfig: {	css: 'color: #C42' },
				pointcut: /./
			}
		});
	},

	home: function() {
		this.trigger('page', new HomePage());
	},

	users: function() {
		this.trigger('page', new UsersListPage({
			collection: app.persons
		}));
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