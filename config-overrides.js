const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.html$/i,
    loader: 'html-loader',
  });

  return config;
};
