import Toolbar from "./toolbar"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import Files from "./view/FilesScreen"
import View from "./view"
import conf from "./configuration";

let storage = require('../../_common/js/BackendStorage')(conf)

class Application {
  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
  }

  init(permissions) {
    $("body")
      .delegate(".mousetrap-pause", "focus", function () {
        Mousetrap.pause()
      })
      .delegate(".mousetrap-pause", "blur", function () {
        Mousetrap.unpause()
      });

    this.storage = storage
    this.view = new View(this, "#editor .content", permissions)
    this.filePane = new Files(permissions)
    this.toolbar = new Toolbar(this, this.view, ".toolbar", permissions)


    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    this.fileName = this.getParam("file")
    let demo = this.getParam("demo")
    if (this.fileName) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.file.get(this.fileName))
    }
    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    else if (demo) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.demo.get(demo))
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the homepage
        this.fileLoad(event.state.file)
      }
    })
  }

  getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
    let regexS = "[\\?&]" + name + "=([^&#]*)"
    let regex = new RegExp(regexS)
    let results = regex.exec(window.location.href)
    // the param isn't part of the normal URL pattern...
    //
    if (results === null) {
      // maybe it is part in the hash.
      //
      regexS = "[\\#]" + name + "=([^&#]*)"
      regex = new RegExp(regexS)
      results = regex.exec(window.location.hash)
      if (results === null) {
        return null
      }
    }
    return results[1]
  }

  fileLoad(name){
    $("#leftTabStrip .editor").click()
    return this.storage.loadFile(name)
      .then((content) => {
        this.view.setDocument(content.json)
        return content
      })
  }

  fileOpen() {
    new FileOpen().show(this.storage, this.view)
  }

  fileSave() {
    new FileSave().show(this.storage, this.view)
  }


  load(file){
    $("#leftTabStrip .editor").click()
    return this.storage.loadUrl(file)
      .then((content) => {
        this.view.setDocument(content.json)
        return content
      })
  }

  historyDemo(file) {
    history.pushState({
      id: 'editor',
      file: name
    }, 'Brainbox Simulator | ' + name, window.location.href.split('?')[0] + '?demo=' + file)
  }

  historyFile(file) {
    this.fileName = file
    history.pushState({
      id: 'author',
      file: name
    }, 'Brainbox Author | ' + name, window.location.href.split('?')[0] + '?file=' + file)
  }
}


let app = new Application()
export default app
