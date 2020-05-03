import commandStack from "./commands/CommandStack"

export default class Toolbar {

  constructor(app, view, elementId, permissions) {
    this.html = $(elementId)
    this.app = app
    this.view = view
    this.permissions = permissions

    commandStack.off(this).on("change", this)

    this.saveButton = $("#editorFileSave")
    this.saveButton.off("click").on("click", () => {
      this.saveButton.tooltip("hide")
      app.fileSave()
    })

    this.shareButton = $("#editorFileShare")
    this.shareButton.off("click").on("click", () => {
      this.shareButton.tooltip("hide")
      if (this.app.hasUnsavedChanges) {
        // file must be save before sharing
        app.fileSave(() => {
          app.fileShare()
        })
      } else {
        app.fileShare()
      }
    })

    this.pdfButton = $("#editorFileToPDF")
    if (permissions.sheets.pdf || permissions.sheets.global.pdf) {
      this.pdfButton.off("click").on("click", () => {
        let file = app.currentFile
        if (this.app.hasUnsavedChanges
          && ((file.scope === "global" && permissions.sheets.global.update === true)
            ||
            (file.scope === "user" && permissions.sheets.update === true))) {
          // file must be save before sharing
          app.fileSave(() => {
            window.open(`../api/${file.scope}/sheet/pdf?file=${file.name}`, "__blank")
          })
        } else {
          window.open(`../api/${file.scope}/sheet/pdf?file=${file.name}`, "__blank")
        }
      })
    } else {
      this.pdfButton.hide()
    }

    /////////////////////////////////////////////
    // Editor Operations
    //
    this.addTextButton = $("#addTextSection")
    this.addTextButton.off("click").on("click", () => {
      this.addTextButton.tooltip("hide")
      this.view.addMarkdown()
    })

    this.addBrainButton = $("#addBrainSection")
    this.addBrainButton.off("click").on("click", () => {
      this.addBrainButton.tooltip("hide")
      this.view.addBrain()
    })

    this.addImageButton = $("#addImageSection")
    this.addImageButton.off("click").on("click", () => {
      this.addImageButton.tooltip("hide")
      this.view.addImage()
    })

    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: {show: 1000, hide: 10},
      html: true
    })

    // must delegate event from parent DOM because of the dynamic property of the CSS selector
    $(".toolbar")
      .off("#editUndo")
      .delegate("#editUndo:not(.disabled)","click", () => {
        commandStack.undo()
      })
      .off('#editRedo')
      .delegate("#editRedo:not(.disabled)", "click", () => {
        commandStack.redo()
      })

    this.stackChanged()
  }

  stackChanged(event) {
    this.pdfButton.hide()
    this.shareButton.hide()
    // check the permission if the current file is "user" scope
    if(this.app.getDocument() !==null) {
      if (this.app.currentFile.scope === "user") {
        if (this.permissions.sheets.pdf === true) {
          this.pdfButton.show()
        }
      } else if (this.app.currentFile.scope === "global") {
        if (this.permissions.sheets.global.pdf === true) {
          this.pdfButton.show()
        }
      }

      if (this.permissions.featureset.share) {
        this.shareButton.show()
      }
    }

    if(this.app.hasModifyPermissionForCurrentFile()){
      $("#editUndo, #editRedo").show()
      this.addImageButton.show()
      this.addBrainButton.show()
      this.addTextButton.show()
      this.pdfButton.show()
      this.saveButton.show()
    }
    else{
      $("#editUndo, #editRedo").hide()
      this.addImageButton.hide()
      this.addBrainButton.hide()
      this.addTextButton.hide()
      this.pdfButton.hide()
      this.saveButton.hide()
    }
  }

}
