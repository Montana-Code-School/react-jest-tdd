var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    index: ['webpack-hot-middleware/client',
    './client/index'],
    postblog: ['webpack-hot-middleware/client',
    './client/postblog']
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/',
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel'],
      query: {
        presets: ['es2015','react']
      },
      exclude: /node_modules/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    }]
  }
};