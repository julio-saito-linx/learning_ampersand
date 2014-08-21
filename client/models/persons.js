'use strict';

////
// https://github.com/ampersandjs/ampersand-rest-collection
// Collection that extends ampersand-collection with REST and Underscore mixins.
var Collection = require('ampersand-rest-collection');

var Person = require('./person');

module.exports = Collection.extend({
	url: '/api/people',
	model: Person
});