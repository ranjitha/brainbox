import Split from "split.js";

let View = require("./view")
let Palette = require("./palette")

export default class Editor {

  constructor() {
  }

  inject(section) {
    this.section = section
    let menu = $(".sectionMenu")
    $(".workspace").append(`
          <div class="content editorContainerSelector" " id="draw2dCanvasWrapper">
               <div class="canvas" id="draw2dCanvas" oncontextmenu="return false;">
          </div>
       `)


    $("#draw2dCanvasWrapper").append(menu)

    this.view = new View("draw2dCanvas")
    this.palette = new Palette(this.view, "#paletteElements")

    new draw2d.io.json.Reader().unmarshal(this.view, section.content)

    Split(['#paletteHeader', '#paletteElementsScroll'], {
      gutterSize: 10,
      sizes: [40, 60],
      minSize: 200,
      cursor: 'row-resize',
      direction: 'vertical'
    })

    return this
  }

  commit(){
    return new Promise((resolve, reject) => {
      new draw2d.io.json.Writer().marshal(this.view, (content)=>{
        this.section.content = content
        resolve(this.section)
      })
    })
  }

  cancel(){
    return new Promise((resolve, reject) => {
      resolve(this.section)
    })
  }


}
