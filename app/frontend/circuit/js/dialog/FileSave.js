import conf from "../Configuration"
import writer from '../io/Writer'

let storage = require('../../../_common/js/BackendStorage')(conf)

class Dialog {

  /**
   * @constructor
   *
   */
  constructor() {
    $("body").append(`
        <div id="fileSaveDialog" class="modal fade genericDialog" tabindex="-1">
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="media-heading">Save your circuit</h4>
              </div>
              <div class="modal-body">
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <div class="media-object filePreview ion-ios-upload-outline"></div>
                    </a>
                  </div>
                  <div class="media-body">
        
        
                    <br>
                    <br>
                    <fieldset>
                      <div class="form-group">
                        <div class="col-lg-12">
                          <input type="text"
                                 class="form-control floating-label githubFileName"
                                 value=""
                          >
                        </div>
                      </div>
                    </fieldset>
                    <div class="row"></div>
        
        
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn" data-dismiss="modal">Abort</button>
                <button class="btn btn-primary okButton"><span>Save</span></button>
              </div>
            </div>
          </div>
        </div>
    `)
  }

  /**
   */
  show(currentFile, canvas, defaultFileName, callback) {
    Mousetrap.pause()
    $("#fileSaveDialog .githubFileName").val(currentFile.name)

    $('#fileSaveDialog').off('shown.bs.modal').on('shown.bs.modal', (event) => {
      $(event.currentTarget).find('input:first').focus()
    })
    $("#fileSaveDialog").modal("show")

    // Button: Commit to GitHub
    //
    $("#fileSaveDialog .okButton").off("click").on("click", () => {
      let name = $("#fileSaveDialog .githubFileName").val()
      name = name.replace(conf.fileSuffix, "")
      currentFile.name = name + conf.fileSuffix
      this.save(canvas, currentFile.name, ()=>{
        Mousetrap.unpause()
        $('#fileSaveDialog').modal('hide')
        if(callback) {
          callback()
        }
      })
    })
  }

  save(currentFile, canvas, name, callback){
    canvas.setCurrentSelection(null)
    writer.marshal(canvas, json => {
      // to forbid path in the file names you must uncomment this line
      storage.saveFile(json, name)
        .then(function (response) {
          let data = response.data
          currentFile.name = data.filePath
          if(callback) {
            callback()
          }
        })
    })
  }
}

let dialog = new Dialog()
export default dialog
