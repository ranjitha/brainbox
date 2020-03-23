var common_Text= draw2d.shape.basic.Text.extend({

    NAME:"common_Text",
    VERSION: "1.0.0",

    init:function()
    {
        this._super({ bold:false, fontFamily:"Verdana", fontSize:10, bgColor:"#fafafa"});


        this.on("change:userData.text", (figure, event)=>{
            this.setText(event.value)
        })

        this.attr("userData.text","The quick brown fox $ jumps over the lazy dog")
    },

    getParameterSettings: function()
    {
        return [
            {
                name:"text",
                label:"Text",
                property:{
                    type: "longtext"
                }

            }];
    }

});

