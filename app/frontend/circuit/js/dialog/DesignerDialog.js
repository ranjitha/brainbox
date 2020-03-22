import "google-code-prettify/bin/prettify.min.css"

import {prettyPrint} from "google-code-prettify/bin/prettify.min"
import conf from "../Configuration";

export default class CodeDialog {

  constructor() {
  }

  show(figure) {
    if(figure){
      let baseName = figure.attr("userData.file").replace(/\.shape$/, "")
      let pathToDesign = conf.designer.url
        + "?timestamp=" + new Date().getTime()
        + "&file=" + baseName + ".shape"
        + "&tutorial=design"
      window.open(pathToDesign, "designer")
    }
    else{
      let pathToDesign = conf.designer.url
      window.open(pathToDesign, "designer")
    }

  }
}
