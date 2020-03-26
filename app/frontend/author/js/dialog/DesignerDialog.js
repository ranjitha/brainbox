import "google-code-prettify/bin/prettify.min.css"
import conf from "../configuration";

export default class Dialog {

  constructor() {
  }

  show(figure) {
    if(figure){
      let baseName = figure.attr("userData.file").replace(/\.shape$/, "")
      let pathToApp = conf.designer.url
        + "?timestamp=" + new Date().getTime()
        + "&file=" + baseName + ".shape"
      window.open(pathToApp, "designer")
    }
    else{
      window.open(conf.designer.url, "designer")
    }

  }
}
