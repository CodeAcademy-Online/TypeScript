const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.config.common');

module.exports = merge(webpackCommon, {
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
});