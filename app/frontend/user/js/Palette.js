import Hogan from "hogan.js";
import conf from "../../circuit/js/Configuration";

let users = require("./Users")

export default class Palette{

  constructor(){
    users.list().then(( data )=>{
      let tmpl = Hogan.compile($("#userlistTemplate").html());
      let html = tmpl.render({
        users: data
      })

      $("#paletteElements").append(html)
    })
  }
}
