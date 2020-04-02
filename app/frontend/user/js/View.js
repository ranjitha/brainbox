import Hogan from "hogan.js";

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


