module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 300,
    };
    return config;
  },
};
