import toast from "../../_common/js/toast"
import inputPrompt from "../../_common/js/InputPrompt"

import recordStore from "./Records"

export default class Toolbar {

  constructor(app) {

    $(document)
      .on("click", "#editorSave:not(.disabled)", (event) => {
        $("small.error").removeClass("error")
        let record = {}
        $("#editor .content input[data-id], #editor .content select[data-id]").each((i, e) => {
          let element = $(e)
          let field = element.data("id")
          record[field] = element.val()
        })
        recordStore.save(record)
          .then((updatedRecord) => {
            toast("Saved")
            app.view.setRecord(updatedRecord)
            app.palette.update()
          })
          .catch((error) => {
            let status = error.response.status
            if (status === 400) {
              let field = error.response.data
              $("#" + field + "Help").html("required").addClass("error")
            }
          })
      })
      .on("click", "#joinGroupButton, #editorAdd:not(.disabled)", (event) => {
        inputPrompt.show("Join a group","Enter the Join Code you received from the group owner","",(value) => {
          recordStore.join(value)
        })
        $("#inputPromptDialog .okButton").html("Join")
      })
      .on("click", "#createGroupButton, #editorAdd:not(.disabled)", (event) => {
        app.view.setRecord({})
      })
      .on("click", "#editorDelete:not(.disabled)", (event) => {
        let record = {id: $("#editor .content input[data-id='id']").val()}
        recordStore.delete(record).then(() => {
          toast("Deleted")
          app.view.setRecord({})
          app.palette.update()
        })
      })
  }
}
