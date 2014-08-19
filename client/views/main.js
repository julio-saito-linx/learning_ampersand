'use strict';
var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');


module.exports = View.extend({
	template: templates.body,

	autoRender: true,

	// eventos globais
	events:{
		//qualquer click num link será capturado
		'click a[href]': 'handleLinkClick'
	},
	
	initialize: function() {
		this.listenTo(app.router, 'page', this.handleNewPage);
	},

	render: function() {
		//http://ampersandjs.com/docs#ampersand-view-renderwithtemplate
		this.renderWithTemplate();

		// getByRole => this.$el.find('[role=page-container]')
		var pageContainerElement = this.getByRole('page-container');
		
		// O ViewSwitcher funciona como o Marionet Layout/Regions
		this.pages = new ViewSwitcher(pageContainerElement);

		return this;
	},

	handleNewPage: function(page) {
		this.pages.set(page);
	},

	// Qualquer click num link <a href=":::"> será capturado
	handleLinkClick: function (e) {
		var aTag = e.target;
		var localhost_name = window.location.host;
		var isLinkingToLocalHost = aTag.host === localhost_name;
		if (isLinkingToLocalHost) {
			// apenas links locais serão modificados
			
			// Ex: /list
			var partialNewLocation = aTag.pathname;
			
			app.router.history.navigate(partialNewLocation, { trigger:true });

			// não permite que seja propagado
			e.preventDefault();
		}
	}
});