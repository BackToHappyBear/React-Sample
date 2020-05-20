const loaderUtils = require('loader-utils')
const fs = require('fs')

export function bannerLoader(source) {
  let options = loaderUtils.getOptions(this)
  let cb = this.async()
  // 指定文件
  if (options.filename) {
    fs.readFile(options.filename, 'utf8', function(err, data) {
      cb(err, `/**${data}**/${source}`)
    })
  } else {
    // 传递 text 值
    cb(null, `/**${options.text}**/${source}`)
  }
}

// NOTE: 将文件带上 hash 后缀 emit 指定目录，返回图片路径
export function fileLoader(source) {
  let filename = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source })
  this.emitFile(filename, source)
  return `module.exports=${filename}`
}
fileLoader.raw = true

const mime = require('mime')

export function urlLoader(source) {
  let { limit } = loaderUtils.getOptions(this)
  // NOTE: source.length 图片大小
  if (limit && limit > source.length) {
    let file = this.resourcePath
    let mimetype = mime.getType(file)
    return `module.exports="data:${mimetype};base64,${source.toString('base64')}"`
    // return `'module.exports =' ${JSON.stringify(
    //   `data:${mimetype || ''};base64,${source.toString('base64')}`,
    // )}`
  } else {
    return fileLoader.call(this, source)
  }
}
urlLoader.raw = true

const less = require('less')
export function lessLoader(source) {
  let css
  less.render(source, function(err, r) {
    css = r.css
  })
  return css
}

export function cssLoader(source) {}

export function styleLoader(source) {
  let str = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style)
  `
  return str
}
