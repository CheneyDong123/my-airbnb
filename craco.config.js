const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@utils": resolve("src/utils"),
      // '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}