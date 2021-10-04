const path = require('path')
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 300,
    }
    return config
  }
}
