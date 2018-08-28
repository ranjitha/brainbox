import Filter from "./Filter"

export default shape_designer.filter.FontSizeFilter = class FontSizeFilter extends Filter {

  constructor() {
    super()
    this.NAME = "shape_designer.filter.FontSizeFilter"
    this.cssScope = this.NAME.replace(/[.]/g, "_")
  }

  insertPane(figure, $parent) {

    $parent.append('<div id="' + this.cssScope + '_container" class="panel panel-default">' +
      ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#fontsize_width_panel">' +
      '     Font Size' +
      '    <span id="button_remove_FontSizeFilter"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' +
      '</div>' +

      ' <div class="panel-body collapse in" id="fontsize_width_panel">' +
      '   <div class="form-group">' +
      '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_fontsize" type="text" value="' + figure.getFontSize() + '" name="filter_fontsize" class="form-control" />' +
      '   </div>' +
      ' </div>' +
      '</div>')
    inlineSVG.init({svgSelector:"#"+this.cssScope + "_container img.svg"})

    $("#filter_fontsize").TouchSpin({
      min: 4,
      max: 300,
      step: 1,
      boostat: figure.getFontSize(),
      maxboostedstep: 10,
      postfix: 'px'
    })

    $("input[name='filter_fontsize']").on("change", $.proxy(function () {
      this.setFontSize(parseInt($("input[name='filter_fontsize']").val()))
    }, figure))


    $("#button_remove_FontSizeFilter").on("click", () => {
      figure.removeFilter(this)
      figure.setFontSize(12)
      $("#fontsize_filter_container").animate({"height": "0", "opacity": 0, "margin-bottom": 0}, 500, () => {
        $('#fontsize_filter_container').remove()
      })
    })
  }

  removePane() {
  }

  onInstall(figure) {
    //   figure.setFontSize(1);
  }
}




