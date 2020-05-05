import path from 'path'

import loaderUtils from 'loader-utils'
import validateOptions from 'schema-utils'

import schema from './options.json'

// loader 配置
// {
//   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//   loader: require.resolve('url-loader'),
//   options: {
//     limit: imageInlineSizeLimit,
//     name: 'static/media/[name].[hash:8].[ext]',
//   },
// }

export default function loader(content) {
  // 获取配置参数
  const options = loaderUtils.getOptions(this)
  // 配置参数校验
  validateOptions(schema, options, {
    name: 'File Loader',
    baseDataPath: 'options',
  })
  // 获取上下文信息
  const context = options.context || this.rootContext
  // https://github.com/webpack/loader-utils
  // 根据参数 name，动态替换 [name] [hash:8] [ext] 等占位符，生成对应的文件名
  const url = loaderUtils.interpolateName(this, options.name || '[contenthash].[ext]', {
    context,
    content,
    regExp: options.regExp,
  })

  let outputPath = url

  if (options.outputPath) {
    if (typeof options.outputPath === 'function') {
      outputPath = options.outputPath(url, this.resourcePath, context)
    } else {
      // path.posix 跨平台
      outputPath = path.posix.join(options.outputPath, url)
    }
  }
  // __webpack_public_path__：webpack 全局变量 public_path
  let publicPath = `__webpack_public_path__ + ${JSON.stringify(outputPath)}`

  if (options.publicPath) {
    if (typeof options.publicPath === 'function') {
      publicPath = options.publicPath(url, this.resourcePath, context)
    } else {
      publicPath = `${
        options.publicPath.endsWith('/') ? options.publicPath : `${options.publicPath}/`
      }${url}`
    }

    publicPath = JSON.stringify(publicPath)
  }

  if (options.postTransformPublicPath) {
    publicPath = options.postTransformPublicPath(publicPath)
  }

  // 输出文件到制定目录
  if (typeof options.emitFile === 'undefined' || options.emitFile) {
    this.emitFile(outputPath, content)
  }

  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true

  // 这里要注意一点：这个返回的字符串是一段JS，在浏览器中运行的
  // css源码这样写： background-image: url('a.png')
  // 编译后变成: background-image: require('xxxxxx.png')
  // 这里的 require 语句返回的结果，就是下面的 exports 的字符串，也就是图片的路径
  // 多内容的情况可以使用 callback 的形式输出：this.callback(null, json, 2, 3, 4)
  return `${esModule ? 'export default' : 'module.exports ='} ${publicPath};`
}
// 默认情况下 webpack 对文件进行 UTF8 编码，当 loader 需要处理二进制数据的时候，需要设置 raw 为 true
export const raw = true
