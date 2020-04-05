let inputPrompt =require("../../_common/js/InputPrompt")

import commandStack from "./commands/CommandStack"
import State from "./commands/State";

export default class Palette{

  constructor(view, app, elementId) {
    this.html = $(elementId)
    this.app = app
    this.view = view
    commandStack.on("change", this)

    $(document).on("click","#addDocumentPage", ()=>{
      this.app.view.addPage()
    })
  }


  render(){
    // remove all classes from the other editors
    $("#paletteElementsScroll, #paletteFilter").addClass("pages")
    $("#paletteFilter").html("<button id='addDocumentPage'>+ Page</button>")
    this.stackChanged(null)
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
  stackChanged(event) {
    this.html.html('')
    let pages = this.app.getDocument().getPages()
    let currentPage = this.view.getPage()
    pages.forEach((page) => {
      this.html.append(`
        <div class="pageElement"  data-page="${page.id}"  id="layerElement_${page.id}" >
          ${page.name}
          <span data-page="${page.id}"  data-toggle="tooltip" title="Delete the page" class="page_delete pull-right" >
              <span class="fa fa-trash"/>
          </span>
          <span data-page="${page.id}"  data-toggle="tooltip" title="Edit Name of Page" class="page_edit_nmae pull-right" >
              <span class="fa fa-edit"/>
          </span>
        </div>`)
    }, true)
    $(`.pageElement[data-page=${currentPage.id}]`).addClass("selected")

    this.html.sortable({
      axis: "y",
      update: (event, dd) => {
        // fetch the state of the new order
        let pageDivs = $(".pageElement").toArray()
        let document = this.app.getDocument()
        //
        let newPageOrder = []
        pageDivs.forEach((page)=>{
          let id = $(page).data("page")
          newPageOrder.push(document.getPage(id))
        })
        document.setPages(newPageOrder)
      }
    })

    $(".pageElement .page_edit_name").on("click", (event) =>{
      let page = this.app.getDocument().getPage($(event.currentTarget).data("page"))
      inputPrompt.show("Rename Pager", "Page name", page.name, value => {
        commandStack.push(new State(this.app))
        page.name = value
        this.stackChanged(null)
      })
      return false
    })

    $(".pageElement .page_delete").on("click", (event) =>{
      commandStack.push(new State(this.app))
      let page = this.app.getDocument().getPage($(event.currentTarget).data("page"))
      this.app.getDocument().removePage(page)
      this.stackChanged(null)
      return false
    })


    $(".pageElement").on("click", (event)=> {
      $(".pageElement").removeClass("selected")
      let element = $(event.target)
      let id = element.data("page")
      let page = this.app.getDocument().getPage(id)
      this.app.view.setPage(page)
      element.addClass("selected")
    })
  }
}
