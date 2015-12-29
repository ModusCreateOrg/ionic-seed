var path = require('path');

module.exports = function(config) {
    config.set({

        basePath: '',

        // use headless PhantomJS
        browsers: ['PhantomJS'],

        // use Jasmine with Sinon for mocking and stubs
        frameworks: ['mocha', 'sinon-chai'],

        // load our single entry point for our tests
        files: [
            'test/index.js'
        ],

        // preprocess with webpack and our sourcemap loader
        preprocessors: {
            'test/index.js': ['webpack']
        },

        reporters: [
            // https://github.com/mlex/karma-spec-reporter
            'nyan',

            // https://github.com/karma-runner/karma-coverage
            'coverage'
        ],


        // configure webpack within Karma
        webpack: {

            devtool: 'eval',

            module: {
                loaders: [{
                    test: /\.spec\.js$/,
                    loader: 'babel-loader',
                    include: [path.resolve('src'), path.resolve('test')]
                }, {
                    test: /\.js$/,
                    loader: 'isparta-loader',
                    exclude: /\.spec\.js$/,
                    include: [path.resolve('src'), path.resolve('test')]
                }, {
                    test: /\.html$/,
                    loader: 'html'
                }]
            },
            stats: {
                colors: true
            }
        },

        // Mocha Configurations
        client: {
            mocha: {
                reporter: 'html' // change Karma's debug.html to the mocha web reporter
            }
        },

        // configure the webpack server to not be so verbose
        webpackServer: {
            noInfo: true
        },

        webpackMiddleware: {
            stats: {
                colors: true,
                chunks: false
            }
        },

        // setup code coverage
        coverageReporter: {
            reporters: [{
                type: 'text-summary',
            }, {
                type: 'html',
                dir: 'coverage/'
            }]
        },


    });
};
