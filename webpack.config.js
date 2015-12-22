var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,

  eslint: {
    configFile: '.eslintrc'
  },

  entry: [
    './src/app.js'
  ],

  output: {
    path: __dirname + '/js',
    filename: 'app.js'
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /node_modules/,
      loaders: ['ng-annotate', 'babel-loader']
    }, {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
       test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
       loader : 'url?prefix=font/&limit=10000'
    },
    {
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
    new webpack.NoErrorsPlugin()
  ]
};
