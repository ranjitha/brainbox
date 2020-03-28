import Hogan from "hogan.js"
import axios from "axios"
import "./PopConfirm"

let inputPrompt =require("./InputPrompt")

export default class Files {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor(conf, permissions) {
    $("#files_tab a").on("click", this.onShow)

    $("body").append(` 
        <script id="filesTemplate" type="text/x-jsrender">
        <div class="fileOperations">
            <div data-folder="{{folder}}" class='fileOperationsFolderAdd   fa fa-plus' > Folder</div>
            <div data-folder="{{folder}}" class='fileOperationsDocumentAdd fa fa-plus' > Document</div>
        </div>
        <div>Folder: {{folder}}</div>
        <ul class="list-group col-lg-10 col-md-10 col-xs-10 ">
        {{#files}}
          <li class="list-group-item"  data-type="{{type}}"  data-delete="{{delete}}" data-update="{{update}}" data-name="{{folder}}{{name}}">
            <div class="media thumb">
               {{#dir}}
                  <a class="media-left">
                  <div style="width: 48px; height: 48px">
                    <img style="width:100%; height:100%; object-fit: contain"  src="../_common/images/files_folder{{back}}.svg">
                  </div>
                  </a>
               {{/dir}}
               {{^dir}}
                  <a class="thumbnail media-left">
                  <div style="width: 48px; height: 48px">
                    <img style="width:100%; height:100%; object-fit: contain" src="{{image}}">
                  </div>
                  </a>
               {{/dir}}
              <div class="media-body">
                <h4 class="media-heading">{{title}}</h4>
                {{#delete}}
                    <div class="deleteIcon fa fa-trash-o" data-toggle="confirmation" ></div>
                {{/delete}}
              </div>
            </div>
          </li>
        {{/files}}
        </ul>
        </script>
    `)

    this.conf = conf
    this.render(conf, permissions)
  }

  onShow() {
    if($("#materialStyle").length)
      return

    setTimeout(()=>{
      let w1= $("#userFilesTab").outerWidth()
      let w2= $("#globalFilesTab").outerWidth()
      $("<style id='materialStyle'>")
        .prop("type", "text/css")
        .html(`
        #userFilesTab.active ~ span.yellow-bar{
          left: 0px;
          width: ${w1}px;
        }
        #globalFilesTab.active ~ span.yellow-bar{
          left: ${w1}px;
          width: ${w2}px;
        })`
        )
        .appendTo("head")
    },100)
  }

  render(conf, permissions) {
    let storage = require("./BackendStorage")(conf)

    this.initTabs(permissions)
    this.initPane("user",   "#userFiles", conf.backend.user,   permissions      , "")
    this.initPane("global", "#globalFiles", conf.backend.global, permissions.global, "")

    socket.on("file:generated", msg => {
      let preview = $(".list-group-item[data-name='" + msg.filePath + "'] img")
      if (preview.length === 0) {
        this.render()
      } else {
        $(".list-group-item[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.user.image(msg.filePath) + "&timestamp=" + new Date().getTime()})
      }
    })

    $(document).on("click", "#userFiles .fileOperationsFolderAdd", (event) => {
      let folder = $(event.target).data("folder") || ""
      inputPrompt.show("Create Folder", "Folder name", value => {
        storage.createFolder(folder+value, "user")
        this.initPane("user", "#userFiles", conf.backend.user, permissions, folder)
      })
    })
    $(document).on("click", "#globalFiles .fileOperationsFolderAdd", (event) => {
      let folder = $(event.target).data("folder") || ""
      inputPrompt.show("Create Folder", "Folder name", value => {
        storage.createFolder(folder+value, "global")
        this.initPane("global", "#globalFiles", conf.backend.global, permissions.global, folder)
      })
    })
  }

  initTabs(permissions) {
    // user can see private files and the demo files
    //
    if(permissions.list===true && permissions.global.list===true) {
      $('#material-tabs').each(function () {
        let $active, $content, $links = $(this).find('a');
        $active = $($links[0]);
        $active.addClass('active');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
          $(this.hash).hide()
        })

        $(this).on('click', 'a', function (e) {
          $active.removeClass('active')
          $content.hide()

          $active = $(this)
          $content = $(this.hash)

          $active.addClass('active')
          $content.show()

          e.preventDefault()
        })
      })
    }
    else if (permissions.list===false && permissions.global.list===true){
      $('#material-tabs').remove()
      $("#globalFiles").show()
      $("#userFiles").remove()
      $("#files .title span").html("Open a document")
    }
    else if (permissions.list===true && permissions.global.list===false){
      $('#material-tabs').remove()
      $("#globalFiles").remove()
      $("#userFiles").show()
      $("#files .title span").html("Open a document")
    }
    else if (permissions.list===true && permissions.global.list===false) {
    }
  }

  initPane(scope, paneSelector, backendConf, permissions, initialPath) {
    let storage = require("./BackendStorage")(this.conf)
    if(permissions.list===false){
      return
    }

    let _this = this
    // load demo files
    //
    function loadPane(path) {
      storage.getFiles( path, scope).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            delete: permissions.delete,
            update: permissions.update,
            folder: path,
            image: backendConf.image(path+file.name),
            title: file.name.replace(conf.fileSuffix, "")
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            delete: false,
            update: false,
            back:"_back",
            title: ".."
          })
        }
        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
        $(paneSelector).html($(output))
        if(permissions.create === false){
          $(paneSelector + " .fileOperations").remove()
        }

        if(permissions.delete === true) {
          $(paneSelector + " .deleteIcon").on("click", (event) => {
            let $el = $(event.target).closest(".list-group-item")
            let name = $el.data("name")
            storage.deleteFile(name, scope).then(() => {
              let parent = $el.closest(".list-group-item")
              parent.hide('slow', () => parent.remove())
            })
          })
          $(paneSelector + " [data-toggle='confirmation']").popConfirm({
            title: "Delete File?",
            content: "",
            placement: "bottom" // (top, right, bottom, left)
          })
        }


        // Rename of a file or folder is the very same as delete -> create
        // I this case the user must have the two permissions to rename a folder or file
        if (!_this.serverless && permissions.delete === true && permissions.create === true) {
          $(paneSelector + " .list-group-item h4").on("click", (event) => {

            let $el = $(event.currentTarget)
            let parent = $el.closest(".list-group-item")
            let update = parent.data("update")
            // can happen if the "serverless" websocket event comes too late
            //
            if (_this.serverless || update===false) {
              return
            }

            Mousetrap.pause()
            let name = parent.data("name")
            let type = parent.data("type")
            let $replaceWith = $('<input type="input" class="filenameInplaceEdit" value="' + name.replace(conf.fileSuffix, "") + '" />')
            $el.hide()
            $el.after($replaceWith)
            $replaceWith.focus()
            $replaceWith.on("click", () => false)

            let fire = () => {
              Mousetrap.unpause()
              let newName = $replaceWith.val()
              if (newName !== "") {
                if (type !== "dir") {
                  newName = storage.sanitize(newName) + conf.fileSuffix
                }
                axios.post(conf.backend.user.rename, {from: name, to: newName})
                  .then(() => {
                    $replaceWith.remove()
                    $el.html(newName.replace(conf.fileSuffix, ""))
                    $el.show()
                    parent.data("name", newName)
                  })
              } else {
                // get the value and post them here
                $replaceWith.remove()
                $el.show()
              }
            }
            $replaceWith.blur(fire)
            $replaceWith.keypress((e) => {
              if (e.which === 13) {
                fire()
              }
            })
            event.preventDefault()
            event.stopPropagation()
            return false
          })
        }


        $(paneSelector + " .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadPane(name)
        })

        $(paneSelector + " .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          $el.addClass("spinner")
          app.load(name, scope).then(() => {
            $el.removeClass("spinner")
            history.pushState({
              id: 'editor',
              scope: scope,
              file: name
            }, conf.appName+' | ' + name, window.location.href.split('?')[0] + '?'+scope+'=' + name)
          })
        })
      })
    }
    loadPane(initialPath)
  }
}
