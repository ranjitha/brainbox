class Dialog {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  /**
   */
  show(title, label, callback) {

      $("#inputPromptDialog .media-heading").html(title)
      $("#inputPromptDialog .promptValueLabel").html(label)

      $('#inputPromptDialog').on('shown.bs.modal', (event) => {
        $(event.currentTarget).find('input:first').focus()
      })
      $("#inputPromptDialog").modal("show")
      Mousetrap.pause()

      $('#inputPromptDialog .inputPromptValue').on('keypress', function (e) {
        let key = e.charCode || e.keyCode || 0;
        if (key === 13) {
          $("#inputPromptDialog .okButton").click()
        }
      })

      // Save Button
      //
      $("#inputPromptDialog .okButton").off('click').on("click", () => {
        Mousetrap.unpause()
        $('#inputPromptDialog').modal('hide')
        let value = $("#inputPromptDialog .inputPromptValue").val()
        callback(value)
      })
  }
}


let dialog = new Dialog()
export default dialog
