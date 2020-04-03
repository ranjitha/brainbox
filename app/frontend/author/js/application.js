import shareDialog from "../../_common/js/LinkShareDialog"
import inputDialog from "../../_common/js/InputPrompt"
import Files from "../../_common/js/FilesScreen"
import Userinfo from "../../_common/js/Userinfo"
import toast from "../../_common/js/toast";

import Toolbar from "./toolbar"
import View from "./view"
import fileSave from "./dialog/FileSave"
import conf from "./configuration"
import Document from "./document"

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
    this.filePane = new Files(this, conf, permissions.sheets)
    this.toolbar = new Toolbar(this, this.view, ".toolbar", permissions)
    this.userinfo = new Userinfo(permissions, conf)

    this.view.commandStack.on("change", this)

    // Show the user an alert if there are unsaved changes
    //
    window.onbeforeunload = ()=> {
      return this.hasUnsavedChanges?  "The changes you made will be lost if you navigate away from this page": undefined;
    }

    let user = this.getParam("user")
    let global = this.getParam("global")
    let shared = this.getParam("shared")
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
    else if (shared) {
      $("#leftTabStrip .editor").click()
      this.load(shared, "shared")
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the homepage
        this.load(event.state.file, event.state.scope)
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


  fileSave() {
    let callback = () => {
      this.hasUnsavedChanges = false
      toast("Saved")
      $("#editorFileSave div").removeClass("highlight")
      this.filePane.refresh(conf, this.permissions.sheets, this.currentFile)
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


  fileShare() {
    let json = this.view.document
    storage.saveFile(json, "unused", "shared")
      .then(( response) => {
        let data = response.data
        let file = data.filePath
        shareDialog.show(file)
      })
  }

  fileNew(name, scope) {
    $("#leftTabStrip .editor").click()
    this.view.setDocument(new Document())
    this.currentFile = { name, scope }
    let section = this.view.addMarkdown(0)
    this.view.onSelect(section)
    this.view.onEdit(section)
  }

  load(name, scope){
    let url = conf.backend[scope].get(name)
    $("#leftTabStrip .editor").click()
    return this.storage.loadUrl(url)
      .then((content) => {
        this.view.setDocument(new Document(content.json))
        this.currentFile = { name, scope}
        return content
      })
  }

  stackChanged(event) {

    if (event.getStack().canUndo()){
      $("#editorFileSave div").addClass("highlight")
      this.hasUnsavedChanges = true
    }
  }
}


let app = new Application()
export default app
