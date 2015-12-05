var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//noinspection JSUnresolvedFunction
/**
 * webpack config
 */
module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  node: {  // this is for pixi.js
    fs: "empty"
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      include: path.join(__dirname, 'src')
    }]
  }
};
