let View = require("./view")

export default class Editor {

  constructor() {
  }

  inject(editorId, content) {
    this.view = new View(editorId)
    return this
  }

  getValue(){
    return []
  }
}
