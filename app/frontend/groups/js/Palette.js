import Hogan from "hogan.js";

let recordStore = require("./Records")

export default class Palette {

  constructor(app) {
    $(document).on("click", "#paletteElements .paletteItem", (event) => {
      let element = $(event.target)
      let id = "" + element.data("id")
      recordStore.findById(id).then( (record)=>{
        $(".paletteItem").removeClass("selected")
        element.addClass("selected")
        app.view.setRecord(record)
      })
    })

    this.update()
  }

  update(){
    recordStore.list().then((records) => {
      let tmpl = Hogan.compile($("#recordsTemplate").html())
      console.log(records)
      let html = tmpl.render({
        records: records
      })
      $("#paletteElements").html(html)
    })
  }
}
