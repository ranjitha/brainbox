import Hogan from "hogan.js";
import axios from "axios"

export default class View{

  constructor(app){
    this.app = app
  }

  setUser(user){
    if(user===null){
      $("#editorFileSave").addClass("disabled")
      $("#editorDelete").addClass("disabled")
    }
    else{
      $("#editorFileSave").removeClass("disabled")

      if(user.id && user.id !== this.app.userinfo.getUser().id) {
        $("#editorDelete").removeClass("disabled")
      }
      else{
        $("#editorDelete").addClass("disabled")
      }
    }

    $(document).on("click", "#passwordReset", ()=>{
      let user = {}
      $("#editor .content input[data-id], #editor .content select[data-id]").each( (i, e) => {
        let element = $(e)
        let field = element.data("id")
        user[field] = element.val()
      })
      axios.post("../password/request", user).then( (response)=>{
        alert(response.data)
      })
    })

    let tmpl = Hogan.compile($("#userformTemplate").html());
    let html = tmpl.render({
      user: user,
      options: [
        {val: "admin", label: 'Administrator'},
        {val: "user", label: 'User'}
      ],
      selected: function() {
        if (this.val===user.role) return "selected";
        return "";
      }
    })
    $("#editor .content").html(html)
  }
}


