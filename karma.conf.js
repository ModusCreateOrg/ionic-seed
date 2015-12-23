module.exports = function(config) {
    config.set({

        // use headless PhantomJS
        browsers: ['PhantomJS'],

        // use Jasmine with Sinon for mocking and stubs
        frameworks: ['jasmine', 'sinon'],

        // watch for all files in `src` that end in *.spec.js
        files: [
            'src/**/*.spec.js'
        ],

        // preprocess our test files with Babel so we can use ES6
        preprocessors: {
            'src/**/*.spec.js': ['webpack', 'sourcemap']
        },

        reporters: [
          // https://github.com/mlex/karma-spec-reporter
          'spec',

          // https://github.com/karma-runner/karma-coverage
          'coverage'
        ],

        // configure webpack within Karma
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
                    { test: /\.html$/, loader: 'html' }
                ]
            },
            watch: true
        },

        // configure the webpack server to not be so verbose
        webpackServer: {
            noInfo: true
        },

        // setup code coverage
        coverageReporter: {
          dir: 'coverage/',
          type: 'html'
        },
    });
};
