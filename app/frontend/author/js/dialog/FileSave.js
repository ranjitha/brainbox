import conf from "./../configuration"

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
                        <h4 class="media-heading">Save Sheet</h4>
                    </div>
                    <div class="modal-body">
                        <div class="media">
                            <div class="media-left media-middle">
                                <a href="#">
                                    <img class="media-object filePreview" src="">
                                </a>
                            </div>
                            <div class="media-body">
        
                                <form class="form-horizontal">
                                    <br>
                                    Filename:
                                    <fieldset>
                                        <div class="form-group">
                                            <div class="col-lg-12">
                                                <input type="text"
                                                       class="form-control floating-label fileName"
                                                       value=""
                                                        >
                                            </div>
                                        </div>
        
                                    </fieldset>
                                  Change Reason:
                                  <fieldset>
                                    <div class="form-group">
                                      <div class="col-lg-12">
                                        <input type="text"
                                               class="form-control floating-label commitMessage"
                                               value=""
                                        >
                                      </div>
                                    </div>
        
                                  </fieldset>
                                    <div class="row"></div>
        
                                </form>
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
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */
  show(currentFile, storage, view) {

      $("#fileSaveDialog .fileName").val(currentFile.name)
      $("#fileSaveDialog .commitMessage").val('change reason')

      $('#fileSaveDialog').on('shown.bs.modal', (event) => {
        $(event.currentTarget).find('input:first').focus()
      })
      $("#fileSaveDialog").modal("show")
      Mousetrap.pause()

      // Save Button
      //
      $("#fileSaveDialog .okButton").off('click').on("click", () => {
        Mousetrap.unpause()
        let json = view.document
        let name = $("#fileSaveDialog .fileName").val()
        name = name.replace(conf.fileSuffix, "")
        currentFile.name = name + conf.fileSuffix
        let commitMessage = $("#fileSaveDialog .commitMessage").val()
        storage.saveFile(json, currentFile.name, commitMessage)
          .then(( response) => {
            let data = response.data
            currentFile.name = data.filePath
            $('#fileSaveDialog').modal('hide')
          });
      })
  }
}

let dialog = new Dialog()
export default dialog
