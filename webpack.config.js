const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'lantern.[contenthash:8].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\/*.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ]
}