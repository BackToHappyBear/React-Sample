class DonePlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('DonePlugin', stats => {})
    // compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation, cb) => {
    //   setTimeout(() => {
    //     console.log('emit')
    //     cb()
    //   }, 1000)
    // })
    compiler.hooks.emit.tapPromise('AsyncPlugin', compilation => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('tapPromise')
          resolve()
        }, 1000)
      })
    })
  }
}

class FileListPlugin {
  constructor({ filename }) {
    this.filename = filename
  }

  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', compilcation => {
      let assets = compilcation.assets
      let content = `## 文件名    资源大小\r\n`
      Object.entries(assets).forEach(([filename, statObj]) => {
        content += `- ${filename}    ${statObj.size()}\r\n`
      })
      assets[this.filename] = {
        source() {
          return content
        },
        size() {
          return content.length
        },
      }
    })
  }
}

exports.FileListPlugin = FileListPlugin
