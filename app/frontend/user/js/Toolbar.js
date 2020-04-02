import users from "./Users"
import toast from "../../_common/js/toast"

export default class Toolbar{

  constructor(app){

    $(document).on("click", "#editorFileSave:not(.disabled)", ( event )=>{
      let user = {}
      $("#editor .content input[data-id], #editor .content select[data-id]").each( (i, e) => {
        let element = $(e)
        let field = element.data("id")
        console.log(field, element.val())
        user[field] = element.val()
      })
      console.log(user)
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
  }
}
