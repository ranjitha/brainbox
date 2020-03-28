import Files from "../../_common/js/FilesScreen"

import Toolbar from "./toolbar"
import View from "./view"
import fileSave from "./dialog/FileSave"
import conf from "./configuration"

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
    this.filePane = new Files(conf, permissions.sheets)
    this.toolbar = new Toolbar(this, this.view, ".toolbar", permissions)


    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    this.fileName = this.getParam("user")
    let global = this.getParam("global")
    if (this.fileName) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.user.get(this.fileName))
    }
    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    else if (global) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.global.get(global))
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the homepage
        this.fileLoad(event.state.file)
      }
    })
    $("#leftTabStrip .files").click()
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

  fileSave() {
    fileSave.show(this.storage, this.view)
  }

  load(file){
    $("#leftTabStrip .editor").click()
    return this.storage.loadUrl(file)
      .then((content) => {
        this.view.setDocument(content.json)
        return content
      })
  }

}


let app = new Application()
export default app
