const path = require('path');
const { override, fixBabelImports } = require('customize-cra');

const aliasOverride = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  };

  return config;
};

module.exports = override(
  aliasOverride,
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
);
 