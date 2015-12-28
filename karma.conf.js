module.exports = function(config) {
    config.set({

        // use headless PhantomJS
        browsers: ['Chrome'],

        // use Jasmine with Sinon for mocking and stubs
        frameworks: ['jasmine', 'sinon'],

        // load our single entry point for our tests
        files: [
            'tests/tests.webpack.js'
        ],

        // preprocess with webpack and our sourcemap loader
        preprocessors: {
            'tests/tests.webpack.js': ['webpack', 'sourcemap']
        },

        reporters: [
            // https://github.com/mlex/karma-spec-reporter
            'spec',

            // https://github.com/karma-runner/karma-coverage
            'coverage'
        ],


        // configure webpack within Karma
        webpack: {

            // just do inline source maps instead of the default
            devtool: 'inline-source-map',

            module: {
                loaders: [{
                    test: /\.js/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }, {
                    test: /\.html$/,
                    loader: 'html'
                }],
                // delays coverage til after tests are run, fixing transpiled source coverage error
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /(tests|node_modules|\.spec\.js$)/,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },

        // configure the webpack server to not be so verbose
        webpackServer: {
            noInfo: true
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
