import conf from "../Configuration";

export default class Dialog {

  constructor() {
  }

  show() {
    let pathToDesign = conf.author.url
    window.open(pathToDesign, "author")
  }
}
