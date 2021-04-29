// This file will be ready by nodeJS
// Hence we use the module exports using commonJS format
// Webpack config reference: https://webpack.js.org/configuration/mode/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // path relative to this file
  entry: './typescript_with_webpack/src/index.ts',

  // tell webpack to compile TS to JS using rules on the
  // module object. ts-loader compiles TS files to JS.
  module: {
    rules: [
      {
        // this is a regex to get all files with ts extension
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'typescript_with_webpack/src')],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'typescript_with_webpack/src/index.html'),
      hash: true, // This is useful for cache busting
      filename: 'index.html'
    })
  ],
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    contentBase: path.resolve(__dirname, 'typescript_with_webpack/dist'),
    port: 9000,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    // bundle file name
    filename: 'bundle.js',
    // need absolute path to the target directory
    // __dirname provides the absolute path of the current file
    path: path.resolve(__dirname, 'typescript_with_webpack/dist'),
    clean: true
  }
};
