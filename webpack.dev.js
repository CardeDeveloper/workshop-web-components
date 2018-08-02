const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const keys = require('./keys')

const config = {
  mode: 'development',
  devServer: {
    compress: true,
    hot: true,
    port: 8000,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      googleMapsApiKey: keys.googleMapsApiKey,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
