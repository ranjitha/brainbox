import conf from "../Configuration"
import Hogan from 'hogan.js'

let storage = require('../../../_common/js/BackendStorage')(conf)


export default class FileOpen {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */
  show(view) {
    $('#fileOpenDialog').modal('show')
    this.fetchPathContent("", view)
  }

  fetchPathContent(newPath, view) {
    storage.getFiles(newPath).then((files) => {
      files = files.filter( file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")

      let compiled = Hogan.compile(
        `
               {{^rootDir}}     
               <a href="#" class="list-group-item githubPath" data-type="dir" data-path="{{parentPath}}" >
                   <span class="glyphicon glyphicon-menu-left"></span>
                   ..
               </a>
               {{/rootDir}}
               {{#files}}
                 <a href="#" data-draw2d="{{draw2d}}" class="list-group-item githubPath text-nowrap" data-type="{{type}}" data-path="{{currentDir}}{{name}}" data-id="{{id}}">
                    <span class="glyphicon {{icon}}"></span>
                    {{{name}}}
                 </a>
               {{/files}}
          `
      )

      let parentPath = storage.dirname(newPath)
      let output = compiled.render({
        parentPath: parentPath,
        currentDir: newPath,
        files: files,
        rootDir: newPath === null,
        draw2d: function () {
          return this.name.endsWith(conf.fileSuffix)
        },
        icon: function () {
          if (this.name.endsWith(conf.fileSuffix)) {
            return "fa fa-object-group"
          }
          return this.type === "dir" ? "fa fa-folder-o" : "fa fa-file-o"
        }
      })

      $("#fileOpenDialog .list-group").html($(output))
      $("#fileOpenDialog .list-group").scrollTop(0)


      $(".githubPath[data-type='dir']").on("click", (event) => {
        this.fetchPathContent($(event.currentTarget).data("path"), view)
      })

      $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", (event) => {
        let path = $(event.currentTarget).data("path")
        app.historyFile(path)
        app.load(conf.backend.file.get(path))
        $('#fileOpenDialog').modal('hide')
        event.preventDefault()
      })
    })
  }
}

