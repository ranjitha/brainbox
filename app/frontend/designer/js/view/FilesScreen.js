import conf from "../Configuration"
import Hogan from "hogan.js"
import storage from "../io/BackendStorage"

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

export default class Files {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor(permissions) {
    this.render(permissions)
  }

  render(permissions) {

    if(permissions.shapes.list===false){
      return
    }

    // load demo files
    //
    function loadShapes(path) {
      storage.getFiles(path).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            readonly: true,
            folder: path,
            title: file.name.replace(conf.fileSuffix, ""),
            image: conf.backend.shape.image(path + file.name.replace(conf.fileSuffix,".png"))
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            readonly: true,
            back:"_back",
            title: ".."
          })
        }

        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
        $("#appShapeFiles").html($(output))
        $("#appShapeFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadShapes(name)
        })

        $("#appShapeFiles .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          $el.addClass("spinner")
          app.fileLoad(name).then(() => {
            $el.removeClass("spinner")
            app.historyShape(name)
          })
        })
      })
    }

    loadShapes("")
  }

}
