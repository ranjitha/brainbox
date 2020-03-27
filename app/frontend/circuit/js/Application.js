/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */
import Palette from "./Palette"
import View from "./View"
import Files from "./view/FilesScreen"
import Addons from "./view/AddonScreen"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import conf from "./Configuration"
import reader from "./io/Reader"
import DesignerDialog from "./dialog/DesignerDialog"
import AuthorDialog from "./dialog/AuthorDialog"
import toast from "../../_common/js/toast"

let storage = require('../../_common/js/BackendStorage')(conf)

/**
 * wait asyn that an DOM element is present
 * Usage: checkElement("<selector>").then(function(){alert("element found")})
 *
 * @returns {Promise<any>}
 */
function rafAsync() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve); //faster than set time out
  });
}

function checkElement(selector) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector));
  } else {
    return Promise.resolve(true);
  }
}


class Application {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
  }

  init(permissions) {
    this.permissions = permissions
    this.hasUnsavedChanges = false
    this.palette = new Palette(permissions)
    this.view = new View("draw2dCanvas", permissions)
    this.filePane = new Files(permissions)
    this.addonPane = new Addons(permissions)

    // Show the user an alert if there are unsaved changes
    //
    window.onbeforeunload = ()=> {
      return this.hasUnsavedChanges?  "The changes you made will be lost if you navigate away from this page": undefined;
    }

    this.view.getCommandStack().addEventListener(this)

    if(permissions.brains.list){
      $("#fileOpen, #editorFileOpen").show()
      $("#fileOpen, #editorFileOpen").on("click", () => { new FileOpen().show(this.view) })
    }
    else{
      $("#fileOpen, #editorFileOpen").remove()
    }

    $("#applicationSwitchDesigner").on("click", () => {
      new DesignerDialog().show()
    })

    $("#applicationSwitchAuthor").on("click", () => {
      new AuthorDialog().show()
    })

    $("#editorFileSave").on("click", () => {
      let callback = () => {
        this.hasUnsavedChanges = false
        toast("Saved")
        $("#editorFileSave div").removeClass("highlight")
      }
      if (this.permissions.brains.create && this.permissions.brains.update) {
        // allow the user to enter a file name....
        new FileSave().show(this.view, this.fileName, callback)
      } else if (this.permissions.brains.create) {
        // just save the file with a generated filename. It is a codepen-like modus
        new FileSave().save(this.view, this.fileName, callback)
      }
    })


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
    else {
      this.fileNew()
    }

    // listen on the history object to load files
    //
    window.onpopstate = (event) => {
      if (history.state && history.state.id === 'editor') {
        // Render new content for the homepage
        $("#leftTabStrip .editor").click()
        this.load(history.state.file)
      }
    }
  }

  load(file) {
    this.view.clear()
    $("#leftTabStrip .editor").click()
    return storage.loadUrl(file)
      .then((content) => {
        this.view.clear()
        reader.unmarshal(this.view, content)
        this.view.getCommandStack().markSaveLocation()
        this.view.centerDocument()
        this.hasUnsavedChanges = false
        $("#editorFileSave div").removeClass("highlight")

        // check if a tutorial exists for the named file and load/activate them
        //
        storage.loadUrl(file.replace(conf.fileSuffix, ".guide"))
          .then(content => {
            if (typeof content === "string") {
              content = JSON.parse(content)
            }
            $(content.screen).click()
            checkElement("#paletteElementsScroll").then(() => {
              let anno = new Anno(content.steps)
              anno.show()
            })
          })
          .catch(error => {
            // ignore 404 HTTP error silently
          })
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
      id: 'editor',
      file: name
    }, 'Brainbox Simulator | ' + name, window.location.href.split('?')[0] + '?file=' + file)
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


  fileNew(shapeTemplate, fileName) {
    $("#leftTabStrip .editor").click()

    this.view.clear()
    if (shapeTemplate) {
      new Reader().unmarshal(this.view, shapeTemplate)
    }

    if (fileName) {
      this.fileName = storage.sanitize(fileName) + conf.fileSuffix
    } else {
      this.fileName = "MyNewBrain" + conf.fileSuffix
    }
    this.view.centerDocument()
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
