import Hogan from "hogan.js";

export default class View{

  constructor(app){
    this.app = app
  }

  setRecord(record){
    if(record===null){
      $("#editorSave").addClass("disabled")
      $("#editorDelete").addClass("disabled")
    }
    else{
      $("#editorSave").removeClass("disabled")
      $("#editorDelete").removeClass("disabled")
    }

    let tmpl = Hogan.compile($("#recordTemplate").html());
    let html = tmpl.render({
      record: record
    })
    $("#editor .content").html(html)
  }
}


