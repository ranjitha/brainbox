import conf from "../Configuration";

export default class CodeDialog {

  constructor() {
  }

  show(circuit) {
    if(circuit){
      let baseName = figure.attr("userData.file").replace(/\.shape$/, "")
      let pathToDesign = conf.author.url
        + "&file=" + baseName + ".shape"
        + "&tutorial=design"
      window.open(pathToDesign, "author")
    }
    else{
      let pathToDesign = conf.author.url
      window.open(pathToDesign, "author")
    }

  }
}
