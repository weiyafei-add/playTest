const CracoLessPlugin = require('craco-less');
const PostCssConfig = require('postcss');
const Pxtorem = require('postcss-pxtorem');
module.exports = {

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