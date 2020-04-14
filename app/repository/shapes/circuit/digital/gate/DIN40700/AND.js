// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_digital_gate_DIN40700_AND = CircuitFigure.extend({

   NAME: "circuit_digital_gate_DIN40700_AND",
   VERSION: "1.0.114_202",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:29.6456,height:40},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 91.56704536254959, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 8.432954637450415, y: 21.25 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 8.432954637450415, y: 80 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 29.6456;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L29.6456,0 L29.6456,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // 
       shape = this.canvas.paper.path('M2.6032000000000153 39.992866146253334L2.7047115376348643 40L7.02828868578581 39.696155060244166L11.220496130125639 38.79385241571816L15.153955768817582 37.320508075688906L18.70915142116644 35.32088886237969L21.77806026629179 32.85575219373081L24.267435061876654 29.99999999999997L26.101637414442564 26.84040286651347L27.224936013657157 23.472963553338587L27.603200000000015 20L27.224936013657157 16.527036446661413L26.101637414442564 13.159597133486614L24.267435061876768 10.000000000000028L21.77806026629179 7.14424780626922L18.70915142116644 4.679111137620453L15.153955768817582 2.679491924311236L11.220496130125639 1.2061475842818083L7.028288685785753 0.3038449397558338L2.7047115376348643 0L2.6032000000000153 0.007133853746665864L2.6032000000000153 39.992866146253334Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(252,252,252,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":2.5,"ry":2.5,"cx":2.5,"cy":32,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":2.5,"ry":2.5,"cx":2.5,"cy":8.5,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":2.5,"ry":2.5,"cx":27.1456,"cy":20,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

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
circuit_digital_gate_DIN40700_AND = circuit_digital_gate_DIN40700_AND.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() && i2.getValue());
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function(context)
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function(context)
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