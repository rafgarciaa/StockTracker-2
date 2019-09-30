const path = require('path');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // remove if not using
// lookup HtmlWebpackPlugin, very commonly used

// keep in mind most production ready code bases create two to three webpack configs
// base config both dev & production pull from
// dev for sourcemaps and dev plugins
// production for key optimizations where absolutely necessary
module.exports = {
  // entry should come from ./src/index.tsx
  // need work on file structure
  entry: './frontend/stockTracker.tsx',
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
          // presets should live in .babelrc
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        // as of Babel 7 ts-loader is unnecessary
        // see: https://devblogs.microsoft.com/typescript/typescript-and-babel-7/
        loader: 'ts-loader',
        options: {
          // disable type checker - let fork-ts-checker to the type checking
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map', // see comment above: production vs develop
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '*'], // resolve all extensions?
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    // new FriendlyErrorsWebpackPlugin(), // NO commented out code
  ],
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
  },
  // - externals field -
  // We want to avoid bundling all of React into the same file,
  // doing so increase compilation time and browsers will typically
  // be able to cache a library if it doesn’t change.
  // This utilizes the "namespace pattern", look up.
  externals: {
    react: 'React', // any import of "react" will load from this React variable
    'react-dom': 'ReactDOM',
  },
};
