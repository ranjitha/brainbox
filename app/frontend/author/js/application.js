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

    this.currentFile = { name:"NewDocument"+conf.fileSuffix, scope:"user"}
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
    let user = this.getParam("user")
    let global = this.getParam("global")
    if (user) {
      $("#leftTabStrip .editor").click()
      this.load(user, "user")
    }
    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    else if (global) {
      $("#leftTabStrip .editor").click()
      this.load(global, "global")
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the homepage
        this.load(event.state.file, event.state.scope)
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


  fileSave() {
    fileSave.show(this.currentFile, this.storage, this.view)
  }

  load(name, scope){
    let url = conf.backend[scope].get(name)
    $("#leftTabStrip .editor").click()
    return this.storage.loadUrl(url)
      .then((content) => {
        this.view.setDocument(content.json)
        this.currentFile = { name, scope}
        return content
      })
  }

}


let app = new Application()
export default app
