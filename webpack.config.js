const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const keys = require('./keys')

const config = {
  mode: 'production',
  plugins: [
    new HtmlWebPackPlugin({
      googleMapsApiKey: keys.googleMapsApiKey,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    })
  ]
}

module.exports = config
