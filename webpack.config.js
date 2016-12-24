var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'script.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    preLoaders: [

    ],
    loaders: [
      {
        test: /\.js$/,
        include: [ require('path').resolve(__dirname, "node_modules") ],
        loader: 'unlazy'
      },
      { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel', query: { presets: ['es2015'] } },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.hbs/, loader: 'handlebars-template-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'JSON SERVER TEST'
    })
  ]
};
