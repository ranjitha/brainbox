// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_digital_gate_DIN40700_XNOR = CircuitFigure.extend({

   NAME: "circuit_digital_gate_DIN40700_XNOR",
   VERSION: "1.0.142_260",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:49.55230000000847,height:40},attr), setter, getter);
     var port;
     // output
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 90.91868591367256, y: 50.12074999999868 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output");
     port.setMaxFanOut(20);
     // input0
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.018069796961653, y: 16.25 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input0");
     port.setMaxFanOut(20);
     // input1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.027104695442479, y: 78.87074999999868 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 49.55230000000847;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L49.55230000000847,0 L49.55230000000847,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // shape
       shape = this.canvas.paper.path('M13.252300000006471 39.99286614625362L13.353811537641377 40L17.67738868579181 39.696155060244564L21.869596130131868 38.79385241571799L25.80305576882347 37.32050807568885L29.35825142117301 35.320888862379434L32.427160266298415 32.85575219373095L34.91653506188322 30L36.75073741444885 26.840402866513614L38.47403601366568 23.572963553338923L39.55230000000847 20L38.37403601366532 16.327036446660713L36.75073741444885 13.159597133486386L34.91653506188322 10L32.427160266298415 7.14424780626905L29.35825142117301 4.679111137620566L25.80305576882347 2.679491924311151L21.869596130131868 1.2061475842820073L17.67738868579181 0.3038449397554359L13.353811537641377 0L13.252300000006471 0.0071338537463816465L13.252300000006471 0.9913750037803766L14.046320798218403 2.0019469287772154L16.245901932858942 6L17.866580706891 10.423435986881486L18.85911361586932 15.1378510253262L19.193343049601026 20L18.85911361586932 24.8621489746738L17.866580706891 29.576564013118514L16.245901932858942 34L14.046320798218403 37.998053071222785L13.252300000006471 39.00862499621962L13.252300000006471 39.99286614625362Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(252,252,252,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","shape");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":44.55230000000847,"cy":20.04829999999947,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Line
       shape = this.canvas.paper.path('M5.778000000006614 0L7.349175000007563,2.6831749999983003Q8.920350000008511,5.366349999996601 9.991525000007641, 8.349524999996447L9.991525000007641,8.349524999996447Q11.062700000006771,11.332699999996294 11.657500000006621, 15.201499999995121L11.657500000006621,15.201499999995121Q12.252300000006471,19.07029999999395 11.791750000004868, 22.512649999997848L11.791750000004868,22.512649999997848Q11.331200000003264,25.955000000001746 10.254750000005515, 29.67119999999977L10.254750000005515,29.67119999999977Q9.178300000007766,33.3873999999978 7.5650000000073305, 36.58234999999877L5.951700000006895,39.77729999999974');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M16.100000000000364 6.348299999999654L0,6.348299999999654');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M16.800000000000182 31.648299999999836L0.1999999999998181,31.648299999999836');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_digital_gate_DIN40700_XNOR = circuit_digital_gate_DIN40700_XNOR.extend({

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
        
         o1.setValue( (i1.getValue() && !i2.getValue() ) || ( !i1.getValue() && i2.getValue() ));
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