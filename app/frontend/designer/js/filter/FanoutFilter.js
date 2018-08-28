import Filter from "./Filter"

export default shape_designer.filter.FanoutFilter = class FanoutFilter extends Filter {

  constructor() {
    super()
    this.NAME = "shape_designer.filter.FanoutFilter"
    this.cssScope = this.NAME.replace(/[.]/g, "_")
  }

  insertPane(figure, $parent) {
    $parent.append('<div id="' + this.cssScope + '_container" class="panel panel-default">' +
      ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_width_panel">' +
      '     Maximal fan out' +
      '</div>' +

      ' <div class="panel-body collapse in" id="' + this.cssScope + '_width_panel">' +
      '   <div class="form-group">' +
      '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_' + this.cssScope + '_fanout" type="text" value="' + figure.getMaxFanOut() + '" name="filter_' + this.cssScope + '_fanout" class="form-control" />' +
      '   </div>' +
      ' </div>' +
      '</div>')
    inlineSVG.init({svgSelector:"#"+this.cssScope + "_container img.svg"})

    $("input[name='filter_" + this.cssScope + "_fanout']").TouchSpin({
      min: 0,
      max: 50,
      step: 1,
      maxboostedstep: 1,
      postfix: 'px'
    })
    $("input[name='filter_" + this.cssScope + "_fanout']").on("change", $.proxy(function () {
      this.setMaxFanOut(parseInt($("input[name='filter_" + this.cssScope + "_fanout']").val()))
    }, figure))


  }

  removePane() {
  }

  onInstall(figure) {
  }
}




