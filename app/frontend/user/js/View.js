import Hogan from "hogan.js";
import axios from "axios"

export default class View{

  constructor(app){
    this.app = app
    this.displayInfo()
    $(document)
      .off("click", "#passwordReset")
      .on("click", "#passwordReset", ()=>{
        let record = {}
        $("#editor .content input[data-id], #editor .content select[data-id]").each( (i, e) => {
          let element = $(e)
          let field = element.data("id")
          record[field] = element.val()
        })
        axios.post("../password/token", record).then( (response)=>{
          let email = $("#userEmail").val()
          let currentUrl = window.location.href.split('?')[0]
          let segments =  currentUrl.split("/")
          segments.pop()
          if(currentUrl.endsWith("/")){
            segments.pop()
          }
          let url = segments.join("/")
          let username = $("#userDisplayName").val()
          let subject = encodeURIComponent('Password reset request for BrainBox')
          let emailBody = encodeURIComponent(
            `Hi ${username}, 


You recently requested to reset your password for your BrainBox 
account. Click the link to reset it.

${url}/password?token=${response.data}

If you did not request a password reset, please ignore it or reply to let us know.
This password reset link is only valid for the next 30 minutes.

Thanks 


You Brainbox Administrator
`)
          window.open("mailto:"+email+"?subject="+subject+"&body="+emailBody)

        })
      })
  }

  setRecord(record){
    if(record===null){
      $("#editorFileSave").addClass("disabled")
      $("#editorDelete").addClass("disabled")
      this.displayInfo()
    }
    else{
      $("#editorFileSave").removeClass("disabled")

      if(record.id && record.id !== this.app.userinfo.getUser().id) {
        $("#editorDelete").removeClass("disabled")
      }
      else{
        $("#editorDelete").addClass("disabled")
      }

      let tmpl = Hogan.compile($("#recordTemplate").html());
      let html = tmpl.render({
        record: record,
        options: [
          {val: "admin", label: 'Administrator'},
          {val: "user", label: 'User'}
        ],
        selected: function() {
          if (this.val===record.role) return "selected";
          return "";
        }
      })
      $("#editor .content").html(html)
    }

  }


  displayInfo(){
    let tmpl = $("#userinfoTemplate").html()
    $("#editor .content").html(tmpl)
  }
}


