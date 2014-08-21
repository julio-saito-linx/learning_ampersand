'use strict';
var View = require('ampersand-view');
var UserFormView = require('../forms/user_form');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.pages.user_create,

	subviews: {
		form: {
			role: 'user-form',
			prepareView: function() {
				return new UserFormView({
					el: this.el,
					submitCallback: function(data) {
						console.log('submitCallback', data);
					}
				});
			}
		}
	}
});