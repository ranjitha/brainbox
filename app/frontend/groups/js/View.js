import textPrompt from "../../_common/js/TextPrompt"

import Hogan from "hogan.js";

export default class View{

  constructor(app){
    this.app = app
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

      let tmpl = Hogan.compile($("#recordTemplate").html());
      let html = tmpl.render({
        record: record
      })
      $("#editor .content").html(html)

      $(".showJoinToken").on("click",()=>{
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
  }
}


