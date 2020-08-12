module.exports = config => {
  config.development.open = '/';

  config.development.hotLoader = {
    enabled: true,
    experimental: false,
  };

  return config;
};
