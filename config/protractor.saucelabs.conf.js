var helpers = require('./helpers');
var merge = require('merge');

module.exports = function (testmethod) {

    var config = merge(require('./protractor.' + testmethod + '.conf'), {

        sauceUser: process.env.SAUCE_USERNAME,
        sauceKey: process.env.SAUCE_ACCESS_KEY,
        baseUrl: 'localhost:3000',

        multiCapabilities: [
            {
                'platform': 'Windows 7',
                'browserName': 'chrome',
                'version': '52'
            },
            {
                'platform': 'Windows 7',
                'browserName': 'chrome',
                'version': '51'
            }
        ]

    });

    return config;

};
