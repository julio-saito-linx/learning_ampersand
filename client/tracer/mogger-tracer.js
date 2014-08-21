'use strict';
var Mogger = require('mogger');
var _ = require('lodash');
/*
	usefull links
	-----------------
	test: https://github.com/saitodisse/mogger/blob/master/test/mogger.test.js
	usage: https://github.com/saitodisse/mogger/blob/gh-pages/examples/todo-mvc-backbone-require/js/mogger-example/mogger-example.js
	-----------------
*/


// all targets //////////////////////////////////////////

var ViewSwitcher = require('ampersand-view-switcher');
var Router = require('../router');

// Models
var Me = require('../models/me');
var Person = require('../models/person');
var Persons = require('../models/persons');

// Views
var MainView = require('../views/main');
var UserView = require('../views/user');

// Pages
var HomePage = require('../pages/home');
var PersonDetailPage = require('../pages/person_detail');
var UmDoisTresPage = require('../pages/um-dois-tres');
var UserCreatePage = require('../pages/user_create');
var UserEditPage = require('../pages/user_edit');
var UserViewPage = require('../pages/user_view');
var UsersListPage = require('../pages/users_list');

//Forms
var UserFormPage = require('../forms/user_form');



var surrogateTargetsSource = {
	'ViewSwitcher.prototype': ViewSwitcher.prototype,
	'Router.prototype': Router.prototype,
	'Me.prototype': Me.prototype,
	'Person.prototype': Person.prototype,
	'Persons.prototype': Persons.prototype,
	'MainView.prototype': MainView.prototype,
	'UserView.prototype': UserView.prototype,
	'HomePage.prototype': HomePage.prototype,
	'PersonDetailPage.prototype': PersonDetailPage.prototype,
	'UmDoisTresPage.prototype': UmDoisTresPage.prototype,
	'UserCreatePage.prototype': UserCreatePage.prototype,
	'UserEditPage.prototype': UserEditPage.prototype,
	'UserViewPage.prototype': UserViewPage.prototype,
	'UsersListPage.prototype': UsersListPage.prototype,
	'UserFormPage.prototype': UserFormPage.prototype,
};
// end/ all targets //////////////////////////////////////////



var MoggerTracer = function (){};

_.assign(MoggerTracer.prototype, { 
	
	addSurrogateAndTracer: function(opt) {
		surrogateTargetsSource[opt.surrogateTarget.name] = opt.surrogateTarget.instance;
		this.tracer.traceObj(opt.traceObj);
	},

	startTracing: function() {
		// get the tracer
		this.tracer = new Mogger.Tracer({
			//-------------------------------------------------------
			// enable / disable
			//-------------------------------------------------------
			enabled: true,

			//-------------------------------------------------------
			// prints a pause when no logs are printed for some time
			//-------------------------------------------------------
			showPause: true,

			//-------------------------------------------------------
			// where is our sources objects?
			// in our surrogateTargetsSource
			//-------------------------------------------------------
			surrogateTargets: surrogateTargetsSource,

			//-------------------------------------------------------
			// default output logger
			//-------------------------------------------------------
			loggerConfig: {
				output: console
			},

			//-------------------------------------------------------
			// global config
			//-------------------------------------------------------
			before: {
				//css: 'color: blue',
				size: 15
			},
			targetConfig: {
				//css: 'color: red',
				size: 30
			},
			showArguments: true,

			//-------------------------------------------------------
			// interceptors
			//-------------------------------------------------------
			interceptors: [
			{
				filterRegex: /^(trigger|get|has|\$|setFilter|on|_on\w+|render\b|sync|previous|_routeToRegExp|setElement|_getCompareForType|_getDerivedProperty)/i,
				callback: function(info) {
					return info.method + '("' + info.args[0] + '")';
				}
			},
			{
				filterRegex: /^(execute)/i,
				callback: function(info) {
					return info.method + '("' + info.args[2] + '")';
				}
			},
			{
				filterRegex: /^(_(show|render))|(renderWithTemplate)/i,
				callback: function(info) {
					if(info.args[0]){
						return info.method + '("' + info.args[0].cid + '")';
					}
					return info.method + '()';
				}
			},
			]
		});


		/*
			Objects to trace
			use pointcut: /./ to trace all functions
		*/

		// FIXME: (Mogger) por que será que só loga as funções internas da instancia "router"
		//      : quando antes é logado o "Router.prototype"?
		this.tracer.traceObj({
			before: {	message: 'ViewSwitcher', css: 'color: #555' },
			target: 'ViewSwitcher.prototype', targetConfig: {	css: 'color: #555' },
			pointcut: /(_show|render)/
		});
		this.tracer.traceObj({
			before: {	message: 'Router', css: 'color: #C42' },
			target: 'Router.prototype', targetConfig: {	css: 'color: #C42' },
			pointcut: /./
		});


		/*
		MODELS
		*/
		this.tracer.traceObj({
			before: {	message: 'Me', css: 'color: #2A2' },
			target: 'Me.prototype', targetConfig: {	css: 'color: #2A2' },
			pointcut: /./
		});
		this.tracer.traceObj({
			before: {	message: 'Persons', css: 'color: #770' },
			target: 'Persons.prototype', targetConfig: {	css: 'color: #770' },
			pointcut: /^(trigger|on)$/
		});
		this.tracer.traceObj({
			before: {	message: 'Person', css: 'color: #A47' },
			target: 'Person.prototype', targetConfig: {	css: 'color: #A47' },
			pointcut: /^(trigger|on)$/
		});



		/*
		VIEWS
		*/
		this.tracer.traceObj({
			before: {	message: 'MainView', css: 'color: #A42' },
			target: 'MainView.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UserView', css: 'color: #A42' },
			target: 'UserView.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});


		/*
		PAGES
		*/
		this.tracer.traceObj({
			before: {	message: 'HomePage', css: 'color: #A42' },
			target: 'HomePage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'PersonDetailPage', css: 'color: #A42' },
			target: 'PersonDetailPage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UmDoisTresPage', css: 'color: #A42' },
			target: 'UmDoisTresPage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UserCreatePage', css: 'color: #A42' },
			target: 'UserCreatePage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UserEditPage', css: 'color: #A42' },
			target: 'UserEditPage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UserViewPage', css: 'color: #A42' },
			target: 'UserViewPage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});
		this.tracer.traceObj({
			before: {	message: 'UsersListPage', css: 'color: #A40' },
			target: 'UsersListPage.prototype', targetConfig: {	css: 'color: #A40' },
			pointcut: /renderWithTemplate/
		});

		/*
		FORMS
		*/
		this.tracer.traceObj({
			before: {	message: 'UserFormPage', css: 'color: #A40' },
			target: 'UserFormPage.prototype', targetConfig: {	css: 'color: #A40' },
			pointcut: /renderWithTemplate/
		});



		//2A2, 075, 249, 
	}
});


module.exports = MoggerTracer;
