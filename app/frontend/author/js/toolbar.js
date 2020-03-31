import Userinfo from "../../_common/js/Userinfo"

import designerDialog from "../../_common/js/DesignerDialog"
import simulatorDialog from "../../_common/js/SimulatorDialog"

import conf from "./configuration"


export default class Toolbar {

  constructor(app, view, elementId, permissions) {
    this.html = $(elementId)
    this.app = app
    this.view = view
    this.userinfo = new Userinfo(permissions)

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

    $("#applicationSwitchDesigner").on("click", () => {
      designerDialog.show(conf)
    })

    $("#applicationSwitchSimulator").on("click", () => {
      simulatorDialog.show(conf)
    })

    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: {show: 1000, hide: 10},
      html: true
    })

  }

}
