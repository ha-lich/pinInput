const path = require('path');
const CracoLessPlugin = require('craco-less');

const alias = require('./src/config/aliases');

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias('<rootDir>/src')).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ]),
);

module.exports = {
  devServer: {
    port: process.env.PORT,
  },
  webpack: {
    alias: {
      '@apis': path.resolve(__dirname, './src/apis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets': path.resolve(__dirname, './src/assets/styles'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/views/components'),
      '@pages': path.resolve(__dirname, './src/views/pages'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@apps': path.resolve(__dirname, './src/apps'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@globalTypes': path.resolve(__dirname, './src/types'),
    },
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3d3dc3',
              '@link-color': '#262626',
              '@text-color': '#262626',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
