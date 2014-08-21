'use strict';
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UsersListPage = require('./pages/users_list');
var UserViewPage = require('./pages/user_view');
var UserCreatePage = require('./pages/user_create');
var UserEditPage = require('./pages/user_edit');
var UmDoisTresPage = require('./pages/um-dois-tres');


module.exports = Router.extend({
	routes: {
		'': 'home',
		'users': 'users',
		'users/create': 'users_create',
		'users/:id/edit': 'users_edit',
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
			id: Number(id), // Number() é necessário porque o 'user model' requer um tipo 'number'
			collection: app.persons
		}));
	},

	users_create: function() {
		this.trigger('page', new UserCreatePage({
			collection: app.persons
		}));
	},

	users_edit: function(id) {
		this.trigger('page', new UserEditPage({
			id: Number(id), // Number() é necessário porque o 'user model' requer um tipo 'number'
			collection: app.persons
		}));
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