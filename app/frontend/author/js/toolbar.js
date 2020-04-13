import designerDialog from "../../_common/js/DesignerDialog"
import simulatorDialog from "../../_common/js/SimulatorDialog"

import commandStack from "./commands/CommandStack"
import conf from "./configuration"
import userAdminDialog from "../../_common/js/UserAdminDialog";


export default class Toolbar {

  constructor(app, view, elementId, permissions) {
    this.html = $(elementId)
    this.app = app
    this.view = view
    this.permissions = permissions

    commandStack.on("change", this)

    this.saveButton = $("#editorFileSave")
    if(permissions.sheets.update || permissions.sheets.create) {
      this.saveButton.on("click", () => {
        this.saveButton.tooltip("hide")
        app.fileSave()
      })
      Mousetrap.bindGlobal("ctrl+s", () => {
        this.saveButton.click()
        return false
      })
    }
    else{
      this.saveButton.remove()
    }

    this.shareButton = $("#editorFileShare")
    if(permissions.featureset.share) {
      this.shareButton.on("click", () => {
        this.shareButton.tooltip("hide")
        if (this.app.hasUnsavedChanges) {
          // file must be save before sharing
          app.fileSave(()=>{
            app.fileShare()
          })
        }
        else {
          app.fileShare()
        }
      })
    }
    else{
      this.shareButton.remove()
    }

    this.pdfButton = $("#editorFileToPDF")
    if(permissions.sheets.pdf || permissions.sheets.global.pdf) {
      this.pdfButton.on("click", () => {
        let file = app.currentFile
        if (this.app.hasUnsavedChanges
          && ((file.scope==="global" && permissions.sheets.global.update===true)
             ||
              (file.scope==="user" && permissions.sheets.update===true))) {
          // file must be save before sharing
          app.fileSave(()=>{
            window.open(`../backend/${file.scope}/sheet/pdf?file=${file.name}`, "__blank")
          })
        }
        else {
          window.open(`../backend/${file.scope}/sheet/pdf?file=${file.name}`, "__blank")
        }
      })
    }
    else{
      this.pdfButton.remove()
    }


    /////////////////////////////////////////////
    // Editor Operations
    //
    this.addTextButton = $("#addTextSection")
    this.addTextButton.on("click", () => {
      this.addTextButton.tooltip("hide")
      this.view.addMarkdown()
    })
    Mousetrap.bindGlobal("ctrl+t", () => {
      this.addTextButton.click()
      return false
    })


    this.addBrainButton = $("#addBrainSection")
    this.addBrainButton.on("click", () => {
      this.addBrainButton.tooltip("hide")
      this.view.addBrain()
    })
    Mousetrap.bindGlobal("ctrl+s", (event) => {
      this.addBrainButton.click()
      return false
    })

    $(".applicationSwitchDesigner").on("click", () => {
      designerDialog.show(conf)
    })

    $(".applicationSwitchSimulator").on("click", () => {
      simulatorDialog.show(conf)
    })

    if(permissions.featureset.usermanagement===true) {
      $(document).on("click", ".applicationSwitchUser", () => {
        userAdminDialog.show(conf)
      })
    }
    else{
      $(".applicationSwitchUser").remove()
    }

    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: {show: 1000, hide: 10},
      html: true
    })

  }

  stackChanged(event) {
    this.pdfButton.hide()
    // check the permission if the current file is "user" scope
    if(this.app.currentFile.scope==="user"){
      if(this.permissions.sheets.pdf === true){
        this.pdfButton.show()
      }
    }
    else if(this.app.currentFile.scope==="global"){
      if(this.permissions.sheets.global.pdf === true){
        this.pdfButton.show()
      }
    }
  }

}
