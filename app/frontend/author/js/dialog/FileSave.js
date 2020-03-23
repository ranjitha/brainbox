import conf from "./../configuration"

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
  show(storage, view) {

      $("#fileSaveDialog .githubFileName").val(storage.currentFile?storage.currentFile:"NewDocument"+conf.fileSuffix)
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
        let json = view.document
        let newName = $("#fileSaveDialog .githubFileName").val()
        let commitMessage = $("#fileSaveDialog .githubCommitMessage").val()
        storage.saveFile(json, newName, commitMessage)
          .then(() => {
            storage.currentFile = newName
            $('#fileSaveDialog').modal('hide')
          });
      })
  }
}
