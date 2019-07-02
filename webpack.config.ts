const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './frontend/stockTracker.js',
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
  },
  plugins: [new Dotenv()],
};
