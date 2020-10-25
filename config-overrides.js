const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // setWebpackOptimizationSplitChunks({
  //   chunks: 'all',
  //   cacheGroups: {
  //     libs: {
  //       name: 'chunk-libs',
  //       test: /[\\/]node_modules[\\/]/,
  //       priority: 10,
  //       chunks: 'initial', // 只打包初始时依赖的第三方
  //     },
  //     elementUI: {
  //       name: 'chunk-antd', // 单独将 elementUI 拆包
  //       priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
  //       test: /[\\/]node_modules[\\/]antd[\\/]/,
  //     },
  //     commons: {
  //       name: 'chunk-commons',
  //       // test: path.resolve('src/components'), // 可自定义拓展你的规则
  //       minChunks: 2, // 最小共用次数
  //       priority: 5,
  //       reuseExistingChunk: true,
  //     },
  //   },
  // }),
)
