import CommandStack from "./commands/CommandStack"
import State from "./commands/State"

const shortid = require('shortid')
const Document = require("./document")
const MarkdownEditor = require("./editor/markdown/editor")
const BrainEditor = require("./editor/brain/editor")

export default class View {

  /**
   * @constructor
   *
   */
  constructor(app, id, permissions) {

    this.commandStack = new CommandStack()
    this.markdownEditor = new MarkdownEditor()
    this.brainEditor = new BrainEditor()
    this.document = new Document()
    this.activeSection = null;
    this.html = $(id)

    // inject the host for the rendered section
    this.html.html($("<div class='sections'></div>"))

    this.commandStack.on("change", this)

    $(".toolbar")
      .delegate("#editUndo:not(.disabled)", "click", () => {
        this.commandStack.undo()
      })
      .delegate("#editRedo:not(.disabled)", "click", () => {
        this.commandStack.redo()
      })


    $(document)
      .on("click", ".content", () => {
        this.onUnselect()
      })
      .on("click", ".sections .section .sectionContent", event => {
        let section = this.document.get($(event.target).closest(".section").data("id"))
        this.onSelect(section)
        return false
      })
      .on("click","#sectionMenuUp", event=>{
        let id = $(event.target).data("id")
        let index = this.document.index(id)
        if(index>0) {
          this.commandStack.push(new State(this))
          let prev = this.activeSection.prev()
          this.activeSection.insertBefore(prev)
          this.document.move(index, index-1)
        }
        return false
      })
      .on("click","#sectionMenuDown", event=>{
        let id = $(event.target).data("id")
        let index = this.document.index(id)
        if(index<this.document.length-1) {
          this.commandStack.push(new State(this))
          let prev = this.activeSection.next()
          this.activeSection.insertAfter(prev)
          this.document.move(index, index+1)
        }
        return false
      })
      .on("dblclick", ".sections .section .sectionContent", event => {
        let section = this.document.get($(event.target).closest(".section").data("id"))
        this.onSelect(section)
        this.onEdit(section)
        return false
      })
      .on("click","#sectionMenuEdit", event=>{
        this.onEdit(this.document.get($(event.target).data("id")))
        return false
      })
      .on("click","#sectionMenuDelete", event=>{
        this.onDelete(this.document.get($(event.target).data("id")))
        return false
      })
      .on("click","#sectionMenuCommitEdit", event=>{
        this.onCommitEdit(this.document.get($(event.target).data("id")))
        return false
      })
      .on("click","#sectionMenuCancelEdit", event=>{
        this.onCancelEdit()
        return false
      })
      .on("click","#sectionMenuInsertMarkdown", event=>{
        let section = this.addMarkdown($(event.target).data("index"))
        this.onSelect(section)
        this.onEdit(section)
        return false
      })
      .on("click","#sectionMenuInsertBrain", event=>{
        let section = this.addBrain($(event.target).data("index"))
        this.onSelect(section)
        this.onEdit(section)
        return false
      })
  }

  setDocument(document){
    this.document = document
    this.render(this.document)
  }

  getDocument(){
    return this.document
  }

  addMarkdown(index){
    this.commandStack.push(new State(this))
    let section = {
      id: shortid.generate(),
      type: "markdown",
      content: "## Header"
    }
    this.document.add(section, index)
    if(typeof index === "number"){
      this.render(this.document)
    }
    else{
      this.renderMarkdown(section, index)
    }
    return section
  }

  addBrain(index){
    this.commandStack.push(new State(this))
    let section = {
      id: shortid.generate(),
      type: "brain",
      content: null
    }
    this.document.add(section, index)
    if(typeof index === "number"){
      this.render(this.document)
    }
    else{
      this.renderBrain(section, index)
    }
    return section
  }

  render(document){
    this.html.find(".sections").html("")
    this.renderSpacer(0)
    document.forEach( (section, index) => {
      switch(section.type){
        case "brain":
          this.renderBrain(section)
              break
        case "markdown":
          this.renderMarkdown(section)
              break
        default:
          this.renderUnknown(section)
          break
      }
      this.renderSpacer(index+1)
    })
  }

  renderMarkdown(section){
    let errorCSS = ""
    let markdown = section.content
    try {
      markdown = this.markdownEditor.render(section.content)
    }
    catch(error){
      console.log(error)
      errorCSS = "error"
    }
    this.html.find(".sections").append(`
        <div data-id="${section.id}" class='section ${errorCSS}'>
           <div class="sectionContent markdownRendering" data-type="markdown">${markdown}</div>
        </div>
      `)
  }

  renderBrain(section){
    if(section.content){
      this.html.find(".sections").append(`
        <div data-id="${section.id}" class='section'>
            <img class="sectionContent" data-type="brain" src="${section.content.image}">
        </div>
      `)
    }
    else {
      this.html.find(".sections").append(`
        <div data-id="${section.id}" class='section'>
            <div class="sectionContent" data-type="brain">-double click to edit brain-</div>
        </div>
      `)
    }
  }

  renderSpacer(index){
    this.html.find(".sections").append(`
        <div class='section'>
          <div class='sectionContent ' data-type="spacer" >
            <div data-index="${index}" id="sectionMenuInsertMarkdown"  class='tinyFlyoverMenu fa fa-plus-square-o' >Text</div>
            <div data-index="${index}" id="sectionMenuInsertBrain" class='tinyFlyoverMenu fa fa-plus-square-o' >Diagram</div>
          </div>
        </div>
      `)
  }

  renderUnknown(section){
    this.html.find(".sections").append(`
        <div data-id="${section.id}" class='section'>
           <div class="sectionContent" data-type="unknown">Unknown section type</div>
        </div>
      `)
  }

  onSelect(section){
    if(this.currentEditor){
      return
    }
    this.onUnselect()
    this.activeSection = $(`.section[data-id='${section.id}']`)
    this.activeSection.addClass('activeSection')
    $(".sections .activeSection").prepend(`
        <div class='tinyFlyoverMenu'>
          <div data-id="${section.id}" id="sectionMenuUp"     class='fa fa-caret-square-o-up' ></div>
          <div data-id="${section.id}" id="sectionMenuDown"   class='fa fa-caret-square-o-down' ></div>
          <div data-id="${section.id}" id="sectionMenuEdit"   class='fa fa-edit' ></div>
          <div data-id="${section.id}" id="sectionMenuDelete" class='fa fa-trash-o' ></div>
        </div>`)
  }


  onUnselect(){
    if(this.currentEditor){
      return
    }
    if(this.activeSection === null){
      return
    }
    $(".tinyFlyoverMenu").remove()
    this.activeSection.removeClass("activeSection")
    this.activeSection = null
  }


  onEdit(section){
    if(this.currentEditor){
      return
    }

    let type = section.type

    let menu = $(".activeSection .tinyFlyoverMenu")

    menu.html(`
          <div data-id="${section.id}" id="sectionMenuCommitEdit" class='fa fa-check-square-o' ></div>
          <div data-id="${section.id}" id="sectionMenuCancelEdit" class='fa fa-minus-square-o' ></div>
        `)
    if(type==='markdown') {
      this.currentEditor = this.markdownEditor.inject(section)
      $(".sections").removeClass("activeSection")
    }
    else if (type === "brain"){
      this.currentEditor = this.brainEditor.inject(section)
      $(".sections").removeClass("activeSection")
    }

  }

  onDelete(section){
    this.commandStack.push(new State(this))
    this.document.remove(section.id)
    this.render(this.document)
  }

  onCommitEdit(){
    this.commandStack.push(new State(this))
    this.currentEditor.commit()
      .then(()=>{
        this.currentEditor = null;
        $(".editorContainerSelector").remove()
        this.render(this.document)
      })
  }

  onCancelEdit(){
    this.currentEditor.cancel()
      .then(() => {
        $(".editorContainerSelector").remove()
        this.currentEditor = null;
        this.render(this.document)
      })
  }

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged (event) {
    $("#editUndo").addClass("disabled")
    $("#editRedo").addClass("disabled")

    if (event.getStack().canUndo()) {
      $("#editUndo").removeClass("disabled")
    }

    if (event.getStack().canRedo()) {
      $("#editRedo").removeClass("disabled")
    }
  }
}
