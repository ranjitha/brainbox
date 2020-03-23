const shortid = require('shortid')
const Document = require("./document")

export default class View {

  /**
   * @constructor
   *
   */
  constructor(app, id, permissions) {

    this.document = new Document()

    this.activeSection = null;
    this.html = $(id)
    this.html.html($("<ul class='sections'></ul>"))
    $(document).on("click", ".sections .section", event => {
      this.onSelect($(event.target))
    })

    $(document).on("click","#sectionMenuUp", event=>{
      let id = $(event.target).data("id")
      let index = this.document.index(id)
      console.log(index, id)
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

    $(document).on("click","#sectionMenuEdit", event=>{})
    $(document).on("click","#sectionMenuDelete", event=>{})
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
    this.html.find("ul").html("")
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
    this.html.find("ul").append(`<li data-id="${entry.id}" class='section'>${entry.id}</li>`)
  }

  renderBrain(entry){
    this.html.find("ul").append(`<li data-id="${entry.id}" class='section'>${entry.id}</li>`)
  }

  onSelect(sectionDOM){
    let id = sectionDOM.data("id")
    if(this.activeSection){
      this.activeSection.parent().find(".menu").remove()
      this.activeSection.unwrap()
    }
    this.activeSection = sectionDOM
    this.activeSection.wrap("<div class='active'></div>")
    $(".sections .active").append(`
        <div class='menu'>
          <div data-id="${id}" id="sectionMenuUp"     class='fa fa-caret-square-o-up' ></div>
          <div data-id="${id}" id="sectionMenuDown"   class='fa fa-caret-square-o-down' ></div>
          <div data-id="${id}" id="sectionMenuEdit"   class='fa fa-edit' ></div>
          <div data-id="${id}" id="sectionMenuDelete" class='fa fa-trash-o' ></div>
        </div>`)
  }
}
