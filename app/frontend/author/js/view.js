const shortid = require('shortid')
const Document = require("./document")
const MarkdownEditor = require("./inplace/markdown/editor")

export default class View {

  /**
   * @constructor
   *
   */
  constructor(app, id, permissions) {

    this.markdownEditor = new MarkdownEditor()

    this.document = new Document()

    this.activeSection = null;
    this.html = $(id)

    // inject the host for the rendered section
    this.html.html($("<div class='sections'></div>"))

    $(document).on("click", ".sections .section .sectionContent", event => {
      this.onSelect($(event.target).closest(".section"))
    })

    $(document).on("click","#sectionMenuUp", event=>{
      let id = $(event.target).data("id")
      let index = this.document.index(id)
      if(index>0) {
        let prev = this.activeSection.parent().prev()
        this.activeSection.parent().insertBefore(prev)
        this.document.move(index, index-1)
      }
    })

    $(document).on("click","#sectionMenuDown", event=>{
      let id = $(event.target).data("id")
      let index = this.document.index(id)
      if(index<this.document.length-1) {
        let prev = this.activeSection.parent().next()
        this.activeSection.parent().insertAfter(prev)
        this.document.move(index, index+1)
      }
    })

    $(document).on("dblclick", ".sections .section .sectionContent", event => {
      let section = $(event.target).closest(".section")
      this.onSelect(section)
      this.onEdit(section.data("id"))
    })
    $(document).on("click","#sectionMenuEdit", event=>{
      this.onEdit($(event.target).data("id"))
    })
    $(document).on("click","#sectionMenuDelete", event=>{
      this.onDelete($(event.target).data("id"))
    })
    $(document).on("click","#sectionMenuCommitEdit", event=>{
      this.onCommitEdit($(event.target).data("id"))
    })
    $(document).on("click","#sectionMenuCancelEdit", event=>{
      this.onCancelEdit()
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
      type: "draw2d",
      content: []
    }
    this.document.add(entry)
    this.renderBrain(entry)
  }


  render(document){
    this.html.find(".sections").html("")
    document.forEach( entry => {
      switch(entry.type){
        case "draw2d":
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
           <div class="sectionContent">${markdown}</div>
        </div>
      `)
  }

  renderBrain(entry){
    this.html.find(".sections").append(`<div data-id="${entry.id}" class='section'><div>${entry.id}</div></div>`)
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
        <div class='menu'>
          <div data-id="${id}" id="sectionMenuUp"     class='fa fa-caret-square-o-up' ></div>
          <div data-id="${id}" id="sectionMenuDown"   class='fa fa-caret-square-o-down' ></div>
          <div data-id="${id}" id="sectionMenuEdit"   class='fa fa-edit' ></div>
          <div data-id="${id}" id="sectionMenuDelete" class='fa fa-trash-o' ></div>
        </div>`)
  }


  onUnselect(){
    if(this.activeSection === null){
      return
    }
    $(".sections .activeSection .menu").remove()
    this.activeSection.removeClass("activeSection")
    this.activeSection = null
  }


  onEdit(id){
    if(this.currentEditor){
      return
    }

    let section = this.document.get(id)

    $(".sections .activeSection .sectionContent").html(`
            <div id="editor-container">
              <div class="left">
                <textarea id="markdownEditor"></textarea>
              </div>
              <div class="right">
                <article class="markdown-body" id="htmlPreview"></article>
              </div>
            </div>
              `)
    $(".sections").removeClass("activeSection")

    this.currentEditor = this.markdownEditor.inject('markdownEditor', 'htmlPreview', section.content)

    $(".sections .menu").html(`
          <div data-id="${id}" id="sectionMenuCommitEdit"   class='fa fa-check-square-o' ></div>
          <div data-id="${id}" id="sectionMenuCancelEdit" class='fa fa-minus-square-o' ></div>
        `)
  }

  onDelete(id){
    this.document.remove(id)
    this.render(this.document)
  }

  onCommitEdit(id){
    let section = this.document.get(id)
    let value = this.currentEditor.getValue()
    section.content = value
    this.currentEditor = null;
    this.render(this.document)
  }

  onCancelEdit(){
    this.currentEditor = null;
    this.render(this.document)
  }
}
