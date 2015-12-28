var path = require('path');

module.exports = function(config) {
    config.set({

        basePath: '',

        // use headless PhantomJS
        browsers: ['PhantomJS'],

        // use Jasmine with Sinon for mocking and stubs
        frameworks: ['jasmine', 'sinon'],

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
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [path.resolve('test')]
                }, {
                    test: /\.js$/,
                    loader: 'isparta-loader',
                    include: [path.resolve('src')]
                }, {
                    test: /\.html$/,
                    loader: 'html'
                }]
            },
            stats: {
                colors: true
            }

            // loaders: [{
            //     test: /\.js/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader'
            // }, {
            //     test: /\.html$/,
            //     loader: 'html'
            // }],
            // // delays coverage til after tests are run, fixing transpiled source coverage error
            // postLoaders: [{
            //     test: /\.js$/,
            //     exclude: /(tests|node_modules|\.spec\.js$)/,
            //     loader: 'istanbul-instrumenter'
            // }]
        },

        // configure the webpack server to not be so verbose
        webpackServer: {
            noInfo: true
        },

        webpackMiddleware: {
            stats: {
                colors: true
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
