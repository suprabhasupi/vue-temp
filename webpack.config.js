const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: {
        loader: "babel-loader",
        options: {
            plugins: [
                "@babel/plugin-syntax-dynamic-import"
            ]
        }
      } },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].[contentHash].js"
  }
};
