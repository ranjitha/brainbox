import Hogan from "hogan.js"

let inputPrompt =require("./InputPrompt")

export default class Files {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor(conf, permissions) {
    this.conf = conf
    this.render(conf, permissions.sheets)
  }

  render(conf, permissions) {
    let storage = require("./BackendStorage")(conf)

    this.initTabs(permissions)
    this.initPane("#userFiles", conf.backend.file, permissions      , "")
    this.initPane("#demoFiles", conf.backend.demo, permissions.demos, "")

    socket.on("file:generated", msg => {
      let preview = $(".list-group-item[data-name='" + msg.filePath + "'] img")
      if (preview.length === 0) {
        this.render()
      } else {
        $(".list-group-item[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.file.image(msg.filePath) + "&timestamp=" + new Date().getTime()})
      }
    })

    $(document).on("click", "#userFiles .fileOperationsFolderAdd", (event) => {
      let folder = $(event.target).data("folder") || ""
      inputPrompt.show("Create Folder", "Folder name", value => {
        storage.createUserFolder(folder+value)
        this.initPane("#userFiles", conf.backend.file, permissions, folder)
      })
    })
    $(document).on("click", "#demoFiles .fileOperationsFolderAdd", (event) => {
      let folder = $(event.target).data("folder") || ""
      inputPrompt.show("Create Folder", "Folder name", value => {
        storage.createDemoFolder(folder+value)
        this.initPane("#demoFiles", conf.backend.demo, permissions.demos, folder)
      })
    })
  }

  initTabs(permissions) {
    // user can see private files and the demo files
    //
    if(permissions.list===true && permissions.demos.list===true) {
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
    else if (permissions.list===false && permissions.demos.list===true){
      $('#material-tabs').remove()
      $("#demoFiles").show()
      $("#userFiles").remove()
      $("#files .title span").html("Load a demo lesson file")
    }
    else if (permissions.list===true && permissions.demos.list===false){
      $('#material-tabs').remove()
      $("#demoFiles").remove()
      $("#userFiles").show()
      $("#files .title span").html("Load a lesson document")
    }
    else if (permissions.list===true && permissions.demos.list===false) {
    }
  }

  initPane(paneSelector, backendConf, permissions, initialPath) {
    let storage = require("./BackendStorage")(this.conf)
    if(permissions.list===false){
      return
    }

    let _this = this
    // load demo files
    //
    function loadPane(path) {
      storage.__getFiles( backendConf.list(path)).then((files) => {
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

        $(paneSelector + " .deleteIcon").on("click", (event) => {
          let $el = $(event.target).closest(".list-group-item")
          let name = $el.data("name")
          storage.deleteFile(name).then(() => {
            let parent = $el.closest(".list-group-item")
            parent.hide('slow', () => parent.remove())
          })
        })

        $(paneSelector + " [data-toggle='confirmation']").popConfirm({
          title: "Delete File?",
          content: "",
          placement: "bottom" // (top, right, bottom, left)
        })


        if (!_this.serverless) {
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
                $.ajax({
                    url: conf.backend.file.rename,
                    method: "POST",
                    xhrFields: {withCredentials: true},
                    data: {
                      from: name,
                      to: newName
                    }
                  }
                ).then(() => {
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
          let file = conf.backend.demo.get(name)
          app.load(file).then(() => {
            $el.removeClass("spinner")
          })
        })
      })
    }
    loadPane(initialPath)
  }
}
