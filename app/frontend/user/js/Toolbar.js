import recordStore from "./Records"
import toast from "../../_common/js/toast"

export default class Toolbar {

  constructor(app) {

    $(document)
      .on("click", "#editorFileSave:not(.disabled)", (event) => {
        $("small.error").removeClass("error")
        let user = {}
        $("#editor .content input[data-id], #editor .content select[data-id]").each((i, e) => {
          let element = $(e)
          let field = element.data("id")
          user[field] = element.val()
        })
        recordStore.save(user)
          .then((updatedUser) => {
            toast("Saved")
            app.view.setRecord(updatedUser)
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
      .on("click", "#editorAdd:not(.disabled)", (event) => {
        app.view.setRecord({ role: "user" })
      })
      .on("click", "#editorDelete:not(.disabled)", (event) => {
        let user = {id: $("#editor .content input[data-id='id']").val()}
        recordStore.delete(user).then(() => {
          toast("Deleted")
          app.view.setRecord(null)
          app.palette.update()
        })
      })

  }
}
