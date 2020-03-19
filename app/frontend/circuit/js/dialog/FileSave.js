import conf from "../Configuration"

import storage from "../io/BackendStorage"
import writer from '../io/Writer'

export default class FileSave {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */
  show(canvas, defaultFileName) {
    Mousetrap.pause()
    $("#fileSaveDialog .githubFileName").val(defaultFileName)

    $('#fileSaveDialog').off('shown.bs.modal').on('shown.bs.modal', (event) => {
      $(event.currentTarget).find('input:first').focus()
    })
    $("#fileSaveDialog").modal("show")

    // Button: Commit to GitHub
    //
    $("#fileSaveDialog .okButton").off("click").on("click", () => {
      let name = $("#fileSaveDialog .githubFileName").val()
      name = name.replace(conf.fileSuffix, "")
      name = name + conf.fileSuffix
      this.save(canvas, name, ()=>{
        Mousetrap.unpause()
        $('#fileSaveDialog').modal('hide')
      })
    })
  }

  save(canvas, name, callback){
    canvas.setCurrentSelection(null)
    writer.marshal(canvas, json => {
      // to forbid path in the file names you must uncomment this line
      storage.saveFile(json, name)
        .then(function (response) {
          let data = response.data
          if(typeof data === "string"){
            data = JSON.parse(data)
          }
          app.historyFile(data.filePath)
          if(callback) {
            callback()
          }
        })
    })
  }
}
