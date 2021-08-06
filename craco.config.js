const CracoLessPlugin = require("craco-less");
const PostCssConfig = require("postcss");
const Pxtorem = require("postcss-pxtorem");
module.exports = {
  style: {
    postcss: {
      env: {
        autoprefixer: { add: true },
      },
      plugins: [
        Pxtorem({
          rootValue: 100,
          propList: ["*"],
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i,
        }),
      ],
    },
  },
  babel: {
    plugins: [["import", { libraryName: "antd-mobile", style: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
