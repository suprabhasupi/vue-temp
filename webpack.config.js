const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.scss$/, use: ['style-loader',  'css-loader',  'sass-loader']},
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
  ]
};