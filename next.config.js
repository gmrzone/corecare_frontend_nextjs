module.exports = {
  webpack: (config, { isServer }) => {
    config.experiments = {};
    if (isServer) {
      require('./sitemap/generate_sitemap');
    }

    return config;
  },
  images: {
    domains: ['www.afzalsaiyed.corecare.in', '127.0.0.1', 'localhost'],
  },
  }