// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_74LSXX_74LS90 = CircuitFigure.extend({

   NAME: "circuit_74LSXX_74LS90",
   VERSION: "1.0.157_284",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:8031,height:8080},attr), setter, getter);
     var port;
     // pin_ckb
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 98.24797029702971 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_ckb");
     port.setMaxFanOut(20);
     // pin_r01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 98.49549504950495 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_r01");
     port.setMaxFanOut(20);
     // pin_r02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 98.75269801980198 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_r02");
     port.setMaxFanOut(20);
     // pin_nc1
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 99.00990099009901 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_nc1");
     port.setMaxFanOut(20);
     // pin_vcc
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 99.24456683168316 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_vcc");
     port.setMaxFanOut(20);
     // pin_r91
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 99.5017698019802 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_r91");
     port.setMaxFanOut(20);
     // pin_r92
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.24015564686839, y: 99.74394801980198 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_r92");
     port.setMaxFanOut(20);
     // pin_qc
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 99.74394801980198 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_qc");
     port.setMaxFanOut(20);
     // pin_qb
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 99.49797029702971 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_qb");
     port.setMaxFanOut(20);
     // pin_gnd
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 99.24456683168316 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_gnd");
     port.setMaxFanOut(20);
     // pin_qd
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 99.00990099009901 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_qd");
     port.setMaxFanOut(20);
     // pin_qa
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 98.75269801980198 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_qa");
     port.setMaxFanOut(20);
     // pin_nc2
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 98.49549504950495 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_nc2");
     port.setMaxFanOut(20);
     // cka
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.00038475905865, y: 98.24797029702971 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("cka");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 8031;
      this.originalHeight= 8080;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L8031,0 L8031,8080 L0,8080");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M7969 7920L8031 7920L8031 8080L7969 8080Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.path('M7991.125745685458 7920L7991.086165814079 7920.4524L7991.229183108134 7922.087095151244L7991.653889482188 7923.672120917513L7992.347380447978 7925.159317092961L7993.288584633432 7926.503495974353L7994.448904025647 7927.663815366568L7995.793082907039 7928.605019552022L7997.280279082487 7929.298510517812L7998.865304848756 7929.723216891866L8000.5 7929.866234185921L8002.134695151244 7929.723216891866L8003.719720917513 7929.298510517812L8005.206917092961 7928.605019552022L8006.551095974353 7927.663815366568L8007.711415366568 7926.503495974353L8008.652619552022 7925.159317092961L8009.346110517812 7923.672120917513L8009.770816891866 7922.087095151244L8009.913834185921 7920.4524L8009.874254314542 7920L7991.125745685458 7920Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(245,245,245,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Text');
       shape.attr({"x":4,"y":12.5,"text-anchor":"start","text":"Text","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * Generated Code for the Draw2D touch HTML5 lib.
 * File will be generated if you save the *.shape file.
 *
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custom code and event handler here.
 *
 * Looks disconcerting - extending my own class. But this is a good method to
 * merge basic code and override them with custom methods.
 */
circuit_74LSXX_74LS90 = circuit_74LSXX_74LS90.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
    },

    /**
     * Get the simulator a hint which kind of hardware the shapes requires or supports
     * This helps the simulator to bring up some dialogs and messages if any new hardware is connected/get lost
     * and your are running a circuit which needs this kind of hardware...
     **/
    getRequiredHardware: function(){
      return {
        raspi: false,
        arduino: false
      }
    }

});