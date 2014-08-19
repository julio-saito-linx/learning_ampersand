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
		var localTarget = e.target.host === window.location.host;
		if (localTarget) {
			// apenas links locais serão modificados
			
			// "http://localhost:8888/list"
			var fullNewLocation = e.target.href; 
			
			// "/list"
			var partialNewLocation = e.target.href.replace('http://' + e.target.host, '');
			
			app.router.history.navigate(partialNewLocation, { trigger:true });

			// não permite que seja propagado
			e.preventDefault();
			return false;
		}
	}
});