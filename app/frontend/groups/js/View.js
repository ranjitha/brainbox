import textPrompt from "../../_common/js/TextPrompt"
import fileSelectDialog from "./FileSelectDialog"

import Hogan from "hogan.js";

export default class View{

  constructor(app, permissions){
    this.app = app
    this.permissions = permissions

    this.showWelcomeMessage()
  }

  setRecord(record){
    if(record===null){
      $("#editorSave").addClass("disabled")
      $("#editorDelete").addClass("disabled")
      this.showWelcomeMessage()
    }
    else if(record.id){

      $("#editorSave").removeClass("disabled")
      $("#editorDelete").removeClass("disabled")

      let tmpl = Hogan.compile(record.role==="owner"?$("#recordOwnerTemplate").html():$("#recordMemberTemplate").html());
      let html = tmpl.render({
        record: record
      })
      $("#editor .content").html(html)

      $(".showJoinToken").off("click").on("click",()=>{
        textPrompt.show(record.joinToken)
      })
    }
    else {
      $("#editorSave").removeClass("disabled")
      $("#editorDelete").removeClass("disabled")

      let tmpl = Hogan.compile($("#recordCreateTemplate").html());
      let html = tmpl.render({
        record: record
      })
      $("#editor .content").html(html)

    }
  }

  showWelcomeMessage(){
    let tmpl = $("#welcomeTemplate").html()
    $("#editor .content").html(tmpl)

    fileSelectDialog.show(this.permissions.sheets)
  }
}


