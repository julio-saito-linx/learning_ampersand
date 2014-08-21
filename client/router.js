'use strict';
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UsersListPage = require('./pages/users-list');
var UserViewPage = require('./pages/user_view');
var UserCreatePage = require('./pages/user_create');
var UmDoisTresPage = require('./pages/um-dois-tres');


module.exports = Router.extend({
	routes: {
		'': 'home',
		'users': 'users',
		'users/create': 'users_create',
		'users/:id': 'user_view',
		'um': 'um',
		'dois': 'dois',
		'tres': 'tres',
	},

	home: function() {
		this.trigger('page', new HomePage());
	},

	users: function() {
		this.trigger('page', new UsersListPage({
			collection: app.persons
		}));
	},

	user_view: function(id) {
		this.trigger('page', new UserViewPage({
			id: Number(id),
			collection: app.persons
		}));
	},

	users_create: function() {
		this.trigger('page', new UserCreatePage());
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