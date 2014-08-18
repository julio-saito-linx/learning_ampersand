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

var MainView = require('../views/main');
var HomePage = require('../pages/home');
var Router = require('../router');

var ViewSwitcher = require('ampersand-view-switcher');

var surrogateTargetsSource = {
	'MainView.prototype': MainView.prototype,
	'HomePage.prototype': HomePage.prototype,
	'Router.prototype': Router.prototype,
	'ViewSwitcher.prototype': ViewSwitcher.prototype
};
// end/ all targets //////////////////////////////////////////



var MoggerTracer = function (){};
_.assign(MoggerTracer.prototype, { 
	startTracing: function() {
		// get the tracer
		var tracer = new Mogger.Tracer({
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
				filterRegex: /^(trigger|get|has|\$|setFilter|_on\w+|render\b|sync|previous|_routeToRegExp|setElement)/i,
				callback: function(info) {
					return info.method + '("' + info.args[0] + '")';
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
		tracer.traceObj({
			before: {	message: 'MainView', css: 'color: #A42' },
			target: 'MainView.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});

		tracer.traceObj({
			before: {	message: 'HomePage', css: 'color: #A42' },
			target: 'HomePage.prototype', targetConfig: {	css: 'color: #A42' },
			pointcut: /renderWithTemplate/
		});

		tracer.traceObj({
			before: {	message: 'Router', css: 'color: #55A' },
			target: 'Router.prototype', targetConfig: {	css: 'color: #55A' },
			pointcut: /trigger/
		});

		tracer.traceObj({
			before: {	message: 'ViewSwitcher', css: 'color: #555' },
			target: 'ViewSwitcher.prototype', targetConfig: {	css: 'color: #555' },
			pointcut: /(_show|render)/
		});

		//2A2, 075, 249, 
	}
});


module.exports = MoggerTracer;
