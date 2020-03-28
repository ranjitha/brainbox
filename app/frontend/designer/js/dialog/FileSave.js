import conf from "../Configuration"

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
                        <h4 class="media-heading">Save Shape </h4>
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
                                                       class="form-control floating-label githubFileName"
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
                                               class="form-control floating-label githubCommitMessage"
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
  show(currentFile, storage, canvas, callback) {

    new draw2d.io.png.Writer().marshal(canvas, imageDataUrl => {
      $("#fileSaveDialog .filePreview").attr("src", imageDataUrl)
      $("#fileSaveDialog .githubFileName").val(currentFile.name)
      $("#fileSaveDialog .githubCommitMessage").val('commit message')

      $('#fileSaveDialog').on('shown.bs.modal', (event) => {
        $(event.currentTarget).find('input:first').focus()
      })
      $("#fileSaveDialog").modal("show")
      Mousetrap.pause()

      // Save Button
      //
      $("#fileSaveDialog .okButton").off('click').on("click", () => {
        Mousetrap.unpause()
        let writer = new draw2d.io.json.Writer()
        writer.marshal(canvas, json => {
          let name = $("#fileSaveDialog .githubFileName").val()
          name = name.replace(conf.fileSuffix, "")
          currentFile.name = name + conf.fileSuffix
          let commitMessage = $("#fileSaveDialog .githubCommitMessage").val()
          storage.saveFile(json, imageDataUrl, currentFile.name , commitMessage)
            .then((response) => {
              let data = response.data
              currentFile.name = data.filePath
              $('#fileSaveDialog').modal('hide')
              if(callback) {
                callback()
              }
            });
        })
      })
    }, canvas.getBoundingBox().scale(20, 20))
  }
}

let dialog = new Dialog()
export default dialog
