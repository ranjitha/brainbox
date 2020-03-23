import conf from "../Configuration";

export default class Dialog {

  constructor() {
  }

  show() {
      let pathToDesign = conf.circuit.url
      window.open(pathToDesign, "circuit")
  }
}
