const path = require ('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: `./src/main.js`,
    importSW: `./src/importSW.js`
  },
  output: {
    path: path.join(__dirname, `./dist/`),
    publicPath: `/public/`,
    filename: `javascripts/[name].[chunkhash].js`
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      chunks: ['app', 'importSW'],
      template: './src/index.html',
      filename: `./index.html`,
      inject: true
    }),
    new WorkboxPlugin({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};