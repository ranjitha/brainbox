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

    this.markdownEditor = new MarkdownEditor()
    this.brainEditor = new BrainEditor()
    this.document = new Document()
    this.activeSection = null;
    this.html = $(id)

    // inject the host for the rendered section
    this.html.html($("<div class='sections'></div>"))

    $(document).on("click", ".content", event => {
      this.onUnselect()
    })

    $(document).on("click", ".sections .section .sectionContent", event => {
      let section = this.document.get($(event.target).closest(".section").data("id"))
      this.onSelect(section)
      return false
    })

    $(document).on("click","#sectionMenuUp", event=>{
      let id = $(event.target).data("id")
      let index = this.document.index(id)
      if(index>0) {
        let prev = this.activeSection.prev()
        this.activeSection.insertBefore(prev)
        this.document.move(index, index-1)
      }
      return false
    })

    $(document).on("click","#sectionMenuDown", event=>{
      let id = $(event.target).data("id")
      let index = this.document.index(id)
      if(index<this.document.length-1) {
        let prev = this.activeSection.next()
        this.activeSection.insertAfter(prev)
        this.document.move(index, index+1)
      }
      return false
    })

    $(document).on("dblclick", ".sections .section .sectionContent", event => {
      let section = this.document.get($(event.target).closest(".section").data("id"))
      this.onSelect(section)
      this.onEdit(section)
      return false
    })
    $(document).on("click","#sectionMenuEdit", event=>{
      this.onEdit(this.document.get($(event.target).data("id")))
      return false
    })
    $(document).on("click","#sectionMenuDelete", event=>{
      this.onDelete(this.document.get($(event.target).data("id")))
      return false
    })
    $(document).on("click","#sectionMenuCommitEdit", event=>{
      this.onCommitEdit(this.document.get($(event.target).data("id")))
      return false
    })
    $(document).on("click","#sectionMenuCancelEdit", event=>{
      this.onCancelEdit()
      return false
    })
    $(document).on("click","#sectionMenuInsertMarkdown", event=>{
      let section = this.addMarkdown($(event.target).data("index"))
      this.onSelect(section)
      this.onEdit(section)
      return false
    })
    $(document).on("click","#sectionMenuInsertBrain", event=>{
      let section = this.addBrain($(event.target).data("index"))
      this.onSelect(section)
      this.onEdit(section)
      return false
    })

  }

  setDocument(json){
    this.document = new Document(json)
    this.render(this.document)
  }

  addMarkdown(index){
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
    let markdown = this.markdownEditor.render(section.content)
    this.html.find(".sections").append(`
        <div data-id="${section.id}" class='section'>
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
    $(".sections .activeSection").append(`
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
    if(type==='markdown') {
      this.currentEditor = this.markdownEditor.inject(section)
      $(".sections").removeClass("activeSection")
    }
    else if (type === "brain"){
      this.currentEditor = this.brainEditor.inject(section)
      $(".sections").removeClass("activeSection")
    }
    else {
      return
    }

    menu.html(`
          <div data-id="${section.id}" id="sectionMenuCommitEdit" class='fa fa-check-square-o' ></div>
          <div data-id="${section.id}" id="sectionMenuCancelEdit" class='fa fa-minus-square-o' ></div>
        `)
  }

  onDelete(section){
    this.document.remove(section.id)
    this.render(this.document)
  }

  onCommitEdit(){
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
}
