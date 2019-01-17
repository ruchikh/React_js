const path = require('path');

const htmlplugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
	mode: "development",
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
      	test: /\.css$/,
       	use: ['style-loader','css-loader']
      }      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
    plugins: [
    new htmlplugin({
    	filename: "main.html",
     	template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
