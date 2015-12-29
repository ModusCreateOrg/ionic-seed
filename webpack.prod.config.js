var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    watch: false,

    entry: [
        './src/app/app.js'
    ],

    output: {
        path: __dirname + '/www',
        filename: 'app.js'
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(test|node_modules|\.spec\.js$)/,
            loaders: ['ng-annotate', 'babel-loader']
        },{
            test: /\.html$/,
            loader: 'html'
        }]
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({

            // load our index.html "template"
            template: './src/index.html',

            // inject all scripts into the body
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
