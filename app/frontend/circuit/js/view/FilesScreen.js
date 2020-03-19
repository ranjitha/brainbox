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

    this.initTabs(permissions)
    this.initDemos(permissions)
    this.initFiles(permissions)


    socket.on("brain:generated", msg => {
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
    if(permissions.brains.list===true && permissions.brains.demos===true) {
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
    else if (permissions.brains.list===false && permissions.brains.demos===true){
      $('#material-tabs').remove()
      $("#demoBrainFiles").show()
      $("#userBrainFiles").remove()
      $("#files .title span").html("Load a demo Circuit")
    }
    else if (permissions.brains.list===true && permissions.brains.demos===false){
      $('#material-tabs').remove()
      $("#demoBrainFiles").remove()
      $("#userBrainFiles").show()
      $("#files .title span").html("Load a Circuit")
    }
    else if (permissions.brains.list===true && permissions.brains.demos===false) {
    }
  }

  initDemos(permissions) {
    if(permissions.brains.demos===false){
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
            image: conf.backend.demo.image(path + file.name)
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
        $("#demoBrainFiles").html($(output))
        $("#demoBrainFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadDemos(name)
        })

        $("#demoBrainFiles .list-group-item[data-type='file']").on("click", (event) => {
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
    if(permissions.brains.list===false){
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
            image: conf.backend.file.image(path + file.name)
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
        $("#userBrainFiles").html($(output))

        $("#userBrainFiles .deleteIcon").on("click", (event) => {
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
          $("#userBrainFiles .list-group-item h4").on("click", (event) => {
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
            $replaceWith.on("click", (event) => {
              return false
            })

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

        $("#userBrainFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadFiles(name)
        })

        $("#userBrainFiles .list-group-item[data-type='file']").on("click", (event) => {
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
