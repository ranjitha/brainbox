
import View from "./View"
import Toolbar from "./Toolbar"
import Layer from "./Layer"
import FilterPane from "./FilterPane"
import storage from "./io/BackendStorage"
import SelectionToolPolicy from './policy/SelectionToolPolicy'
import Files from "./view/FilesScreen"
import FileSave from "../../_common/js/FileSave"
import toast from "../../_common/js/toast"

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

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

  init(permissions){
    this.permissions = permissions
    this.hasUnsavedChanges = false

    this.filePane = new Files(permissions)

    this.documentConfigurationTempl = {
      baseClass: "draw2d.SetFigure",
      code: $("#shape-edit-template").text().trim()
    }

    // Show the user an alert if there are unsaved changes
    //
    window.onbeforeunload = ()=> {
      return this.hasUnsavedChanges?  "The changes you made will be lost if you navigate away from this page": undefined;
    }

    this.localStorage = []
    try {
      if ('localStorage' in window && window.localStorage !== null) {
        this.localStorage = localStorage
      }
    } catch (e) {

    }

    $( "body" )
      .delegate( ".mousetrap-pause", "focus", function() {
        Mousetrap.pause()
      })
      .delegate(".mousetrap-pause", "blur", function (){
        Mousetrap.unpause()
      });

    // automatic add the configuration to the very first shape
    // in the document as userData
    //
    this.documentConfiguration = $.extend({}, this.documentConfigurationTempl)

    this.storage = storage
    this.view = new View(this, "canvas", permissions)
    this.toolbar = new Toolbar(this, ".toolbar", this.view, permissions)
    this.layer = new Layer(this, "layer_elements", this.view, permissions)
    this.filter = new FilterPane(this, "#filter .filter_actions", this.view, permissions)

    this.view.installEditPolicy(new SelectionToolPolicy())

    this.view.getCommandStack().addEventListener(this)

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    let file = this.getParam("file")
    if (file) {
      this.fileLoad(file)
    }
    else {
      this.fileNew()
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the homepage
        this.fileLoad(event.state.file)
      }
    })

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    let tutorial = this.getParam("tutorial")
    if(tutorial) {
      this.checkForTutorialMode()
    }
  }

  checkForTutorialMode() {
    let tutorial = this.getParam("tutorial")
    if (!tutorial || tutorial === '') {
      return
    }

    switch (tutorial) {
      case "markdown":
        checkElement("#editDoc").then( ()=>{
          new Anno([
            {
              target: '#editDoc',
              content: 'Click here to edit the documentation of the shape.',
              position: 'left'
            },
            {
              target: '#editorFileSave',
              content: "..and don't forget to save your changes afterwards.",
              position: 'right'
            },
          ]).show()
        })
        break
      case "code":
        checkElement("#editCode").then( ()=>{
          new Anno([
            {
              target: '#editCode',
              content: 'Click here to edit the code of the shape.',
              position: 'left'
            },
            {
              target: '#editTest',
              content: '...you can test the shape here...',
              position: 'left'
            },
            {
              target: '#editorFileSave',
              content: "..and don't forget to save your changes afterwards.",
              position: 'right'
            },
          ]).show()
        })
        break
      case "design":
        checkElement("#tool_shape").then( ()=>{
          new Anno([
            {
              target: '#tool_shape',
              content: 'Add rect, circles or lines to the shape..',
              position: 'left'
            },
            {
              target: '#editTest',
              content: '...you preview and can test the shape here...',
              position: 'left'
            },
            {
              target: '#editorFileSave',
              content: "..and don't forget to save your changes afterwards.",
              position: 'right'
            },
          ]).show()
        })
        break
      default:
        break
    }
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
    this.view.clear()
    $("#leftTabStrip .editor").click()

    return this.storage.loadFile(name)
      .then((content) => {
        this.view.clear()
        this.view.centerDocument()
        let reader = new draw2d.io.json.Reader()
        reader.unmarshal(this.view, content)
        this.getConfiguration()
        this.view.getCommandStack().markSaveLocation()
        this.view.centerDocument()
        this.hasUnsavedChanges = false
        $("#editorFileSave div").removeClass("highlight")
        return content
      })
  }

  fileNew(shapeTemplate) {
    this.view.clear()
    this.storage.currentFile = null
    this.documentConfiguration = $.extend({}, this.documentConfigurationTempl)

    if (shapeTemplate) {
      new draw2d.io.json.Reader().unmarshal(this.view, shapeTemplate)
      this.view.getCommandStack().markSaveLocation()
      this.view.centerDocument()
    }
  }

  fileSave() {
    this.setConfiguration()
    let callback = () => {
      this.hasUnsavedChanges = false
      toast("Saved")
      $("#editorFileSave div").removeClass("highlight")
    }

    new FileSave().show(this.storage,this.view, callback)
  }


  getConfiguration(key) {
    let figures = this.view.getExtFigures()
    if (figures.getSize() > 0) {
      this.documentConfiguration = $.extend({}, this.documentConfiguration, figures.first().getUserData())
    }

    if (key) {
      return this.documentConfiguration[key]
    }
    return this.documentConfiguration
  }

  setConfiguration(conf) {
    this.documentConfiguration = $.extend({}, this.documentConfiguration, conf)
    let figures = this.view.getExtFigures()
    if (figures.getSize() > 0) {
      figures.first().setUserData(this.documentConfiguration)
    }
  }

  historyShape(file) {
    history.pushState({
      id: 'editor',
      file: name
    }, 'Brainbox Designer | ' + name, window.location.href.split('?')[0] + '?file=' + file)
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
