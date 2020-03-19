const fs = require('fs')
const glob = require("glob")
const path = require('path')

// Generic file operations for "brains" and "shapes"
//
module.exports = {

  listFiles: function (baseDir, subDir, res) {
    glob(baseDir + subDir + "*", {}, function (er, files) {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({
        files: files.map(function (f) {
          let isDir = fs.lstatSync(f).isDirectory()
          return {
            name: path.basename(f) + (isDir ? "/" : ""),
            type: isDir ? "dir" : "file",
            dir: isDir
          }
        })
      }))
    })
  },

  getJSONFile: function (baseDir, subDir, res) {
    let file = baseDir + subDir
    console.log(file)
    if (!fs.existsSync(file)) {
      res.status(404).send('Not found')
      return
    }
    try {
      let readStream = fs.createReadStream(file)
      res.setHeader('Content-Type', 'application/json')
      readStream.pipe(res)
    } catch (exc) {
      res.status(404).send('Not found')
    }
  },

  getBase64Image: function (baseDir, subDir, res) {
    let file = path.join(baseDir, subDir)
    if (!fs.existsSync(file)) {
      res.status(404).send('Not found')
      return
    }
    try {
      let contents = fs.readFileSync(file)
      let json = JSON.parse(contents)
      let base64data = json.image.replace(/^data:image\/png;base64,/, '')
      let img = Buffer.from(base64data, 'base64')
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      })
      res.end(img)
    } catch (exc) {
      res.status(404).send('Not found')
    }
  },


  renameFile: function (baseDir, from, to, res) {
    let fromDir = path.join(baseDir, from)
    let toDir = path.join(baseDir + to)
    fs.rename(fromDir, toDir, err => {
      if (err) console.log(err)
      res.send('true')
    })
  },

  deleteFile: function (baseDir, subDir, res) {
    let file = path.join(baseDir, subDir)
    fs.unlink(file, err => {
      if (err) console.log(err)
      res.send('true')
    })
  },

  writeFile: function (baseDir, subDir, content, res, callback) {
    let file = path.join(baseDir, subDir)
    let dir = path.dirname(baseDir + subDir)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    fs.writeFile(file, content, err => {
      if (err) console.log(err)
      if(typeof callback === "function") {
        callback(subDir, err)
      }
    })
  },

  writeBrain: function (baseDir, subDir, content, res, callback){
    module.exports.writeFile(baseDir, subDir, content, res, callback)
  },

  writeShape: function (baseDir, subDir, content, reason, res, callback){
    module.exports.writeFile(baseDir, subDir, content, res, callback)
  }
}

