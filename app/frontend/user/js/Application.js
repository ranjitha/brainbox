import AppSwitch from "../../_common/js/AppSwitch"
import Userinfo  from "../../_common/js/Userinfo"

import conf from "./Configuration"

let Palette = require("./Palette")
let View = require("./View")
let Toolbar = require("./Toolbar")

class App {

  constructor() {

  }

  init(permissions) {
    this.palette = new Palette(this)
    this.view = new View(this)
    this.toolbar = new Toolbar(this)
    this.userinfo = new Userinfo(permissions, conf)
    this.appSwitch = new AppSwitch(permissions, conf)
  }
}

let app = new App()
export default app
