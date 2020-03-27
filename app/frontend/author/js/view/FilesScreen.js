import conf from "../configuration"
import Hogan from "hogan.js"

let storage = require('../../../_common/js/BackendStorage')(conf)


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

    this.initTabs(permissions)
    this.initDemos(permissions)
    this.initFiles(permissions)

    socket.on("sheet:generated", msg => {
      let preview = $(".list-group-item[data-name='" + msg.filePath + "'] img")
      if (preview.length === 0) {
        this.render()
      } else {
        $(".list-group-item[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.file.image(msg.filePath) + "&timestamp=" + new Date().getTime()})
      }
    })
  }

  initTabs(permissions) {
    // user can see personal files and the demo files
    //
    console.log(permissions)
    if(permissions.sheets.list===true && permissions.sheets.demos.list===true) {
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
    else if (permissions.sheets.list===false && permissions.sheets.demos.list===true){
      $('#material-tabs').remove()
      $("#demoFiles").show()
      $("#userFiles").remove()
      $("#files .title span").html("Load a demo lesson file")
    }
    else if (permissions.sheets.list===true && permissions.sheets.demos.list===false){
      $('#material-tabs').remove()
      $("#demoFiles").remove()
      $("#userFiles").show()
      $("#files .title span").html("Load a lesson document")
    }
    else if (permissions.brains.list===true && permissions.brains.demos.list===false) {
    }
  }

  initDemos(permissions) {
    if(permissions.sheets.demos.list===false){
      return
    }

    // load demo files
    //
    function loadDemos(path) {
      storage.getDemos(path).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            readonly: true,
            folder: path,
            title: file.name.replace(conf.fileSuffix, ""),
            desc: conf.backend.demo.desc(path + file.name)
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            readonly: true,
            title: ".."
          })
        }

        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
        $("#demoFiles").html($(output))
        if(permissions.sheets.demos.create === false){
          $("#demoFiles .fileOperations").remove()
        }
        $("#demoFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadDemos(name)
        })

        $("#demoFiles .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          $el.addClass("spinner")
          let file = conf.backend.demo.get(name)
          app.load(file).then(() => {
            $el.removeClass("spinner")
            app.historyDemo(name)
          })
        })
      })
    }
    loadDemos("")
  }

  initFiles(permissions) {
    if(permissions.sheets.list===false){
      return
    }

    // load user files
    //
    let _this = this

    function loadFiles(path) {
      storage.getFiles(path).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            readonly: false,
            folder: path,
            title: file.name.replace(conf.fileSuffix, ""),
            desc: conf.backend.file.desc(path + file.name)
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            readonly: true,
            title: ".."
          })
        }

        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
        $("#userFiles").html($(output))
        if(permissions.sheets.create === false){
          $("#userFiles .fileOperations").remove()
        }

        $("#userFiles .deleteIcon").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          storage.deleteFile(name).then(() => {
            let parent = $el.closest(".list-group-item")
            parent.hide('slow', () => parent.remove())
          })
        })

        $("[data-toggle='confirmation']").popConfirm({
          title: "Delete File?",
          content: "",
          placement: "bottom" // (top, right, bottom, left)
        })

        if (!_this.serverless) {
          $("#userFiles .list-group-item h4").on("click", (event) => {
            // can happen if the "serverless" websocket event comes too late
            //
            if (_this.serverless) {
              return
            }

            Mousetrap.pause()
            let $el = $(event.currentTarget)
            let parent = $el.closest(".list-group-item")
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

        $("#userFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadFiles(name)
        })

        $("#userFiles .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let parent = $el.closest(".list-group-item")
          let name = parent.data("name")
          parent.addClass("spinner")
          let file = conf.backend.file.get(name)
          app.historyFile(name)
          app.load(file).then(() => {
            parent.removeClass("spinner")
          })
        })
      })
    }
    loadFiles("")
  }
}
