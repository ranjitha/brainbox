import "google-code-prettify/bin/prettify.min.css"
import conf from "../configuration";

export default class Dialog {

  constructor() {
  }

  show() {
      window.open(conf.simulator.url, "simulator")
  }
}
