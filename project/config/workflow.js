module.exports = config => {
  config.development.open = '/#/home';

  config.development.hotLoader = {
    enabled: true,
    experimental: false,
  };

  return config;
};
