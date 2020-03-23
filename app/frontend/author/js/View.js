const shortid = require('shortid')

export default class View {

  /**
   * @constructor
   *
   */
  constructor(app, id, permissions) {

    this.document = []

    this.activeSection = null;
    this.html = $(id)
    this.html.html($("<ul class='sections'></ul>"))
    $(document).on("click", ".sections .section", event => {
      $(".sections .section").removeClass("active")
      this.activeSection =  $(event.target)
      this.activeSection.addClass("active")
    })
  }

  setDocument(json){
    this.document = json
    this.render(this.document)
  }

  addMarkdown(){
    let entry = {
      id: shortid.generate(),
      type: "markdown",
      content: "## Header"
    }
    this.document.push(entry)
    this.renderMarkdown(entry)
  }

  addBrain(){
    let entry = {
      id: shortid.generate(),
      type: "draw2d",
      content: []
    }
    this.document.push(entry)
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
    this.html.find("ul").append(`<li class='section'>${entry.id}</li>`)
  }

  renderBrain(entry){
    this.html.find("ul").append(`<li class='section'>${entry.id}</li>`)
  }

}
