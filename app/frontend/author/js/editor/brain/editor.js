import Split from "split.js";
import reader from "./io/reader"
import writer from "./io/writer"

let View = require("./view")
let Palette = require("./palette")

export default class Editor {

  constructor() {
  }

  inject(section) {
    this.section = section
    let menu = $(".tinyFlyoverMenu")
    $(".workspace").append(`
          <div class="content editorContainerSelector" " id="draw2dCanvasWrapper">
               <div class="canvas" id="draw2dCanvas" oncontextmenu="return false;">
          </div>
       `)


    $("#draw2dCanvasWrapper").append(menu)

    this.view = new View("draw2dCanvas")
    this.palette = new Palette(this.view, "#paletteElements")

    reader.unmarshal(this.view, section.content)

    this.splitter = Split(['#paletteHeader', '#paletteElementsScroll'], {
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
      this._resetDOM()
      this.view.getSelection().each((index, item)=>{
         item.unselect()
      })
      writer.marshal(this.view, (content)=>{
        this.section.content = content
        resolve(this.section)
      })
    })
  }

  cancel(){
    return new Promise((resolve, reject) => {
      this._resetDOM()
      resolve(this.section)
    })
  }

  _resetDOM(){
    this.splitter.destroy()
    $("#paletteElements").html("")
    $("#paletteFilter").html("")
  }

}
