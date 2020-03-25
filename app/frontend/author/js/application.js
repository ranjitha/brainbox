import Toolbar from "./toolbar"
import storage from "./io/BackendStorage"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import Files from "./view/FilesScreen"
import View from "./view"
import conf from "./configuration";

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
    let file = this.getParam("file")
    if (file) {
      this.fileLoad(file)
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


  historySheet(file) {
    history.pushState({
      id: 'author',
      file: name
    }, 'Brainbox Author | ' + name, window.location.href.split('?')[0] + '?file=' + file)
  }
}


let app = new Application()
export default app
