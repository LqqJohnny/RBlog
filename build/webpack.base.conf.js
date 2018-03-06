var path = require('path')
var utils = require('./utils')
var config = require('../config')
var {blogTheme}  = require("../blog.config.js")
require('./getArticleInfo.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
console.log("选用主题："+ blogTheme);
module.exports = {
  entry: {
    // app: './src/main.js'
    app: './theme/'+blogTheme+'/src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      '~article': resolve('static/articles'),
    }
  },
  module: {
    rules: [
      {
          test: /\.md$/,
          loader:"html-loader!markdown-loader?pedantic=true"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
                  presets: ['es2015']
                }
        },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
