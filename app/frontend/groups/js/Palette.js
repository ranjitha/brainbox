import Hogan from "hogan.js";

let recordStore = require("./Records")

export default class Palette {

  constructor(app) {
    $(document).on("click", "#paletteElements .paletteItem", (event) => {
      let element = $(event.target)
      let id = "" + element.data("id")
      recordStore.findById(id).then( (record)=>{
        console.log(record)
        $(".paletteItem").removeClass("selected")
        element.addClass("selected")
        app.view.setRecord(record)
      })
    })

    this.update()
  }

  update(){
    recordStore.list().then((records) => {
      records = records.map( record => {return {...record, icon: record.role==="owner"?"fa-university":"fa-graduation-cap"}})
      let tmpl = Hogan.compile($("#recordsTemplate").html())
      let html = tmpl.render({
        records: records
      })
      $("#paletteElements").html(html)
    })
  }
}
