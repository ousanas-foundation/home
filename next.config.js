const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
module.exports = withImages(withCSS())
module.exports = withCSS({
  basePath: '/home',
  assetPrefix: '/home',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif|ico)$/,
      // test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    }
    )
    return config
  }
});