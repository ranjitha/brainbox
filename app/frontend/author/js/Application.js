
import Toolbar from "./Toolbar"
import storage from "./io/BackendStorage"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import Files from "./view/FilesScreen"
import View from "./View"

class Application {
  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
  }

  init(permissions){
    $( "body" )
      .delegate( ".mousetrap-pause", "focus", function() {
        Mousetrap.pause()
      })
      .delegate(".mousetrap-pause", "blur", function (){
        Mousetrap.unpause()
      });

    this.view = new View(this, "#editor .content", permissions)
    this.filePane = new Files(permissions)
    this.storage = storage
    this.toolbar = new Toolbar(this, this.view, ".toolbar", permissions)


    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    let file = this.getParam("file")
    if (file) {
      this.load(conf.backend.sheet.get(file))
      this.storage.fileName = file
    }
    else {
      this.fileNew()
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the hompage
        this.load(event.state.file)
      }
    })

  }

  load(file){
    $("#leftTabStrip .editor").click()
    return this.storage.loadUrl(file)
      .then((content) => {
        this.view.setDocument(content)
        return content
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

  fileNew(shapeTemplate) {

  }

  fileOpen() {
    new FileOpen().show(this.storage, this.view)
  }

  fileSave() {
    new FileSave().show(this.storage,this.view)
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
