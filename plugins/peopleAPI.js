var API = require('hapi-dummy-api');

// all these config items are optionals
module.exports = new API({
    // Optionally give it some starting data (should be an array)
    // defaults to [];
    data: [
        {
            id: 1,
            givenName: 'Julio',
            familyName: 'Saito',
            email: 'saitodisse@gmail.com'
        },
        {
            id: 2,
            givenName: 'Claudio',
            familyName: 'Martins',
            email: 'cmartinsss@gmail.com'
        }
    ],
    // the root RESTful resource URL
    rootUrl: '/api/people',
    // hapi plugin name, defaults to 'api'
    name: 'fake-people-api',
    // hapi plugin version, defaults to '0.0.0',
    version: '0.0.1'
});