import Files from "../../_common/js/FilesScreen"

import Toolbar from "./toolbar"
import View from "./view"
import fileSave from "./dialog/FileSave"
import conf from "./configuration"
import toast from "../../_common/js/toast";

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

    this.permissions = permissions
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
    let callback = () => {
      this.hasUnsavedChanges = false
      toast("Saved")
      $("#editorFileSave div").removeClass("highlight")
    }

    // if the user didn't has the access to write "global" files, the scope of the file is changed
    // // from "global" to "user". In fact the user creates a copy in his/her own repository.
    //
    if(this.permissions.sheets.global.update ===false){
      this.currentFile.scope = "user"
    }

    if (this.permissions.sheets.create && this.permissions.sheets.update) {
      // allow the user to enter/change the file name....
      fileSave.show(this.currentFile, this.storage, this.view, callback)
    } else if (this.permissions.sheets.create) {
      // just save the file with a generated filename. It is a codepen-like modus
      fileSave.save(this.currentFile, this.storage, this.view, callback)
    }

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

  stackChanged(event) {
    if (event.isPreChangeEvent()) {
      return // silently
    }
    if (event.getStack().canUndo()){
      $("#editorFileSave div").addClass("highlight")
      this.hasUnsavedChanges = true
    }
  }
}


let app = new Application()
export default app
