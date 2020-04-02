import users from "./Users"
import toast from "../../_common/js/toast"
import designerDialog from "../../_common/js/DesignerDialog"
import simulatorDialog from "../../_common/js/SimulatorDialog"
import authorDialog from "../../_common/js/AuthorDialog"
import conf from "./Configuration"

export default class Toolbar{

  constructor(app){

    $(document).on("click", "#editorFileSave:not(.disabled)", ( event )=>{
      let user = {}
      $("#editor .content input[data-id], #editor .content select[data-id]").each( (i, e) => {
        let element = $(e)
        let field = element.data("id")
        user[field] = element.val()
      })
      users.save(user).then((updatedUser)=>{
        toast("Saved")
        app.view.setUser(updatedUser)
        app.palette.update()
      })
    })


    $(document).on("click", "#editorAdd:not(.disabled)", ( event )=>{
      let user = {
        role:"user"
      }
      app.view.setUser(user)
    })


    $(document).on("click", "#editorDelete:not(.disabled)", ( event )=>{
      let user = { id: $("#editor .content input[data-id='id']").val() }
      users.delete(user).then(()=>{
        toast("Deleted")
        app.view.setUser({
          role:"user"
        })
        app.palette.update()
      })
    })

    $(document).on("click", "#applicationSwitchSimulator", () => {
      simulatorDialog.show(conf)
    })
    $(document).on("click", "#applicationSwitchAuthor", () => {
      authorDialog.show(conf)
    })
    $(document).on("click", "#applicationSwitchDesigner", () => {
      designerDialog.show(conf)
    })

  }
}
