const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  trailingSlash: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/case-study/:id',
        destination: '/case-study?id=:id',
      },
      {
        source: '/post/:id',
        destination: '/post?id=:id',
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
});
