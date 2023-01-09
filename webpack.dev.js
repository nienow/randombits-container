const prodConfig = require('./webpack.config');
require('dotenv').config();
require('dotenv').config({path: '.env.local'});

module.exports = {
  ...prodConfig,
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  optimization: {
    minimize: false
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  devtool: "source-map"
};
