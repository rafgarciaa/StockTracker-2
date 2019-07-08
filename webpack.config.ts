const path = require('path');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
        options: {
          // disable type checker - let fork-ts-checker to the type checking
          transpileOnly: true,
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    // new FriendlyErrorsWebpackPlugin(),
  ],
};
