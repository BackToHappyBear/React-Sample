const path = require('path')
const { override, fixBabelImports, setWebpackOptimizationSplitChunks } = require('customize-cra')

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const useSMP = config => new SpeedMeasurePlugin().wrap(config)

const useOptimization = config => {
  config.optimization = {
    ...config.optimization,
    namedChunks: true,
    moduleIds: 'hashed',
  }
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  setWebpackOptimizationSplitChunks({
    chunks: 'all',
    cacheGroups: {
      libs: {
        name: 'chunk-libs',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: 'initial',
      },
      antd: {
        name: 'chunk-antd',
        priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        test: /[\\/]node_modules[\\/]antd[\\/]/,
      },
      commons: {
        name: 'chunk-commons',
        test: path.join(__dirname, 'src/components'), // 可自定义拓展你的规则
        minChunks: 1,
        priority: 5,
        // reuseExistingChunk: true,
      },
    },
  }),
  useOptimization,
  useSMP,
)
