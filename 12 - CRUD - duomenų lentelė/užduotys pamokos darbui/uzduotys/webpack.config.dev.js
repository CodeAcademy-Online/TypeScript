const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.config.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
});