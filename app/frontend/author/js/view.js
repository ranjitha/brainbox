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
      this.onSelect($(event.target).closest(".section"))
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
      let section = $(event.target).closest(".section")
      this.onSelect(section)
      this.onEdit(section.data("id"))
      return false
    })
    $(document).on("click","#sectionMenuEdit", event=>{
      this.onEdit($(event.target).data("id"))
      return false
    })
    $(document).on("click","#sectionMenuDelete", event=>{
      this.onDelete($(event.target).data("id"))
      return false
    })
    $(document).on("click","#sectionMenuCommitEdit", event=>{
      this.onCommitEdit($(event.target).data("id"))
      return false
    })
    $(document).on("click","#sectionMenuCancelEdit", event=>{
      this.onCancelEdit()
      return false
    })
  }

  setDocument(json){
    this.document = new Document(json)
    this.render(this.document)
  }

  addMarkdown(){
    let entry = {
      id: shortid.generate(),
      type: "markdown",
      content: "## Header"
    }
    this.document.add(entry)
    this.renderMarkdown(entry)
  }

  addBrain(){
    let entry = {
      id: shortid.generate(),
      type: "brain",
      content: []
    }
    this.document.add(entry)
    this.renderBrain(entry)
  }

  render(document){
    this.html.find(".sections").html("")
    document.forEach( entry => {
      switch(entry.type){
        case "brain":
          this.renderBrain(entry)
              break
        case "markdown":
          this.renderMarkdown(entry)
              break
      }
    })
  }

  renderMarkdown(entry){
    let markdown = this.markdownEditor.render(entry.content)
    this.html.find(".sections").append(`
        <div data-id="${entry.id}" class='section'>
           <div class="sectionContent" data-type="markdown">${markdown}</div>
        </div>
      `)
  }

  renderBrain(entry){
    this.html.find(".sections").append(`
        <div data-id="${entry.id}" class='section'>
            <div class="sectionContent" data-type="brain">${entry.id}</div>
        </div>
      `)
  }

  onSelect(sectionDOM){
    if(this.currentEditor){
      return
    }
    this.onUnselect()
    let id = sectionDOM.data("id")
    this.activeSection = sectionDOM
    this.activeSection.addClass('activeSection')
    $(".sections .activeSection").append(`
        <div class='sectionMenu'>
          <div data-id="${id}" id="sectionMenuUp"     class='fa fa-caret-square-o-up' ></div>
          <div data-id="${id}" id="sectionMenuDown"   class='fa fa-caret-square-o-down' ></div>
          <div data-id="${id}" id="sectionMenuEdit"   class='fa fa-edit' ></div>
          <div data-id="${id}" id="sectionMenuDelete" class='fa fa-trash-o' ></div>
        </div>`)
  }


  onUnselect(){
    if(this.currentEditor){
      return
    }
    if(this.activeSection === null){
      return
    }
    $(".sectionMenu").remove()
    this.activeSection.removeClass("activeSection")
    this.activeSection = null
  }


  onEdit(id){
    if(this.currentEditor){
      return
    }

    let section = this.document.get(id)
    let type = section.type
    let menu = $(".sectionMenu")

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
          <div data-id="${id}" id="sectionMenuCommitEdit"   class='fa fa-check-square-o' ></div>
          <div data-id="${id}" id="sectionMenuCancelEdit" class='fa fa-minus-square-o' ></div>
        `)
  }

  onDelete(id){
    this.document.remove(id)
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
