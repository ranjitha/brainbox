var documentation_Markdown = draw2d.shape.basic.Rectangle.extend({
    NAME: "documentation_Markdown",
    VERSION: "1.0.0",

    init: function (attr) {
        this._super($.extend({bgColor: "#00a3f6", color: "#1B1B1B"}, attr));

        this
            .on("change:userData.text", (figure, event) => {
                this.markdown = markdown.render(this.attr("userData.text"))
                if(this.overlay) {
                    this.overlay.html(markdown)
                }
            })
            .on("added", (emitter, event) => {
                this.overlay = $(`<div id="${this.id}" style="overflow:hidden;border:1px solid black;position:absolute; top:${this.getY()}px;left:${this.getY()}px">
                        ${this.markdown}
                        </div>`)
                event.canvas.html.append(this.overlay)
                this.overlay.css({
                    width: this.getWidth(),
                    height: this.getHeight(),
                    top: this.getY(),
                    left: this.getX()
                })
            })
            .on("removed", (emitter, event) => {
                this.overlay.remove()
            })
            .on("change:dimension", (emitter, event) => {
                this.overlay.css({width: event.width, height: event.height})
            })
            .on("move", (emitter, event) => {
                this.overlay.css({top: event.y, left: event.x})
            })

        this.attr("userData.text", "The quick brown fox $ **jumps** over the *lazy* dog")
    },

    getParameterSettings: function () {
        return [
            {
                name: "text",
                label: "Markdown Text",
                property: {
                    type: "longtext"
                }

            }];
    }

});
