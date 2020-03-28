import axios from 'axios'

let sanitize = require("sanitize-filename")

class BackendStorage {

  /**
   * @constructor
   *
   */
  constructor( conf) {
    this.conf = conf
  }

  getFiles(path){
    return this.__getFiles( this.conf.backend.user.list(path))
  }

  getDemos(path){
    return this.__getFiles( this.conf.backend.global.list(path))
  }

  __getFiles(path) {
    return axios.get(path)
      .then((response) => {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        let files = []
        if (typeof response === "string")
          files = JSON.parse(response).data.files
        else
          files = response.data.files

      // sort the result
      // Directories are always on top
      //
      files.sort(function (a, b) {
        if (a.type === b.type) {
          if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1
          if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1
          return 0
        }
        if (a.type === "dir") {
          return -1
        }
        return 1
      })
      return files
    })
  }


  saveFile(json, fileName) {
    let data = {
      filePath: fileName,
      content: JSON.stringify(json, undefined, 2)
    }
    return axios.post(this.conf.backend.user.save, data)
  }

  loadFile(fileName) {
    return this.loadUrl(this.conf.backend.user.get(fileName))
  }

  loadDemo(fileName) {
    return this.loadUrl(this.conf.backend.global.get(fileName))
  }

  deleteFile(fileName) {
    let data = {
      filePath: fileName
    }
    return axios.post(this.conf.backend.user.del,data )
  }

  createUserFolder(folderName){
    let data = {
      filePath: folderName
    }
    return axios.post(this.conf.backend.user.folder, data)
  }

  createDemoFolder(folderName){
    let data = {
      filePath: folderName
    }
    return axios.post(this.conf.backend.global.folder, data)
  }

  /**
   * Load the file content of the given path
   *
   * @param fileName
   * @returns {*}
   */
   loadUrl(url) {
    return axios.get(url)
      .then((response) => {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string")
          return JSON.parse(response).data

        return response.data
      })
  }

  dirname(path) {
    if (path === undefined || path === null || path.length === 0)
      return null

    let segments = path.split("/")
    if (segments.length <= 1)
      return null

    segments = segments.filter(n => n !== "")
    path = segments.slice(0, -1).join("/")
    return (path === "") ? null : path + "/"

  }

  sanitize(file) {
    file = sanitize(file, "_")
    file = file.replace(this.conf.fileSuffix, "")
    // I don't like dots in the name to
    file = file.replace(RegExp("[.]", "g"), "_")
    return file
  }

  basename(path) {
    if (path === null || path === "" || path === undefined) {
      return null
    }
    return path.split(/[\\/]/).pop()
  }
}

export default conf => new BackendStorage(conf)
