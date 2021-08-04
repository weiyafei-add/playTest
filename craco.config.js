const CracoLessPlugin = require("craco-less");
const PostCssConfig = require("postcss");
const Pxtorem = require("postcss-pxtorem");
module.exports = {
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
