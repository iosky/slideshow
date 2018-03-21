const path = require('path');
const webpack = require('webpack');
const HtmlWp = require('html-webpack-plugin');
const CleanWp = require('clean-webpack-plugin');

const config = {
  target: 'web',
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:5].js'
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    overlay: {
      error: true
    },
    open: true
  },
  plugins: [
    new HtmlWp({
      title: 'sliderShow',
      template: 'index.html'
    }),
    new CleanWp(['./dist'])
  ]
};

module.exports = config;