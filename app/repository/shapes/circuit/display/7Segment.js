// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_display_7Segment = CircuitFigure.extend({

   NAME: "circuit_display_7Segment",
   VERSION: "1.0.44_80",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:90,height:175},attr), setter, getter);
     var port;
     // port_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 6.187428571428557 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     port.setMaxFanOut(20);
     // port_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 20.473142857142843 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_b");
     port.setMaxFanOut(20);
     // port_c
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 34.758857142857124 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_c");
     port.setMaxFanOut(20);
     // port_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 49.04457142857141 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_d");
     port.setMaxFanOut(20);
     // port_e
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 63.330285714285694 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_e");
     port.setMaxFanOut(20);
     // port_f
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 77.61599999999999 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_f");
     port.setMaxFanOut(20);
     // port_g
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 91.90171428571426 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_g");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 90;
      this.originalHeight= 175;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L90,0 L90,175 L0,175");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M0,2Q0,0 2, 0L88,0Q90,0 90, 2L90,173Q90,175 88, 175L2,175Q0,175 0, 173L0,2');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // seg_a
       shape = this.canvas.paper.path('M22.5,7.8279999999999745Q22.5,4.8279999999999745 25.5, 4.8279999999999745L79.5,4.8279999999999745Q82.5,4.8279999999999745 82.5, 7.8279999999999745L82.5,11.827999999999975Q82.5,14.827999999999975 79.5, 14.827999999999975L25.5,14.827999999999975Q22.5,14.827999999999975 22.5, 11.827999999999975L22.5,7.8279999999999745');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_a");
       
       // seg_b
       shape = this.canvas.paper.path('M73.764920771077,22.227039779341887Q73.9887319206191,19.235400000000027 76.98645340387436, 19.35230127813636L81.50227851674474,19.528403604681195Q84.5,19.645304882817527 84.274657968082, 22.636829739583895L80.2366101112989,76.24387514323365Q80.0112680793809,79.23540000000003 77.0112680793809, 79.23540000000003L72.5,79.23540000000003Q69.5,79.23540000000003 69.7238111495421, 76.24376022065817L73.764920771077,22.227039779341887');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_b");
       
       // seg_c
       shape = this.canvas.paper.path('M67.04142077107649,98.81963977934183Q67.26523192061859,95.82799999999997 70.26295340387382, 95.94490127813683L74.77877851674425,96.12100360468244Q77.77649999999949,96.2379048828193 77.55115796808148, 99.22942973958567L73.51311011129839,152.8364751432336Q73.28776807938038,155.82799999999997 70.28776807938038, 155.82799999999997L65.77649999999949,155.82799999999997Q62.77649999999949,155.82799999999997 63.00031114954158, 152.83636022065812L67.04142077107649,98.81963977934183');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_c");
       
       // seg_d
       shape = this.canvas.paper.path('M10,161.82799999999997Q10,158.82799999999997 13, 158.82799999999997L67,158.82799999999997Q70,158.82799999999997 70, 161.82799999999997L70,165.82799999999997Q70,168.82799999999997 67, 168.82799999999997L13,168.82799999999997Q10,168.82799999999997 10, 165.82799999999997L10,161.82799999999997');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_d");
       
       // seg_e
       shape = this.canvas.paper.path('M13.264920771077009,97.81963977934183Q13.488731920619102,94.82799999999997 16.486453403874357, 94.9449012781363L21.002278516744745,95.12100360468115Q24,95.23790488281747 23.774657968082003, 98.22942973958385L19.736610111298894,151.8364751432336Q19.511268079380898,154.82799999999997 16.511268079380898, 154.82799999999997L12,154.82799999999997Q9,154.82799999999997 9.223811149542094, 151.83636022065812L13.264920771077009,97.81963977934183');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_e");
       
       // seg_f
       shape = this.canvas.paper.path('M18.26492077107701,22.227039779341887Q18.488731920619102,19.235400000000027 21.486453403874393, 19.352301278135453L26.00227851674471,19.528403604678918Q29,19.645304882814344 28.774657968082014, 22.63682973958072L24.736610111298884,76.24387514323365Q24.511268079380898,79.23540000000003 21.511268079380898, 79.23540000000003L17,79.23540000000003Q14,79.23540000000003 14.223811149542094, 76.24376022065817L18.26492077107701,22.227039779341887');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_f");
       
       // seg_g
       shape = this.canvas.paper.path('M17,85.82799999999997Q17,82.82799999999997 20, 82.82799999999997L74,82.82799999999997Q77,82.82799999999997 77, 85.82799999999997L77,89.82799999999997Q77,92.82799999999997 74, 92.82799999999997L20,92.82799999999997Q17,92.82799999999997 17, 89.82799999999997L17,85.82799999999997');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_g");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
circuit_display_7Segment = circuit_display_7Segment.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

      //  this.attr({resizeable:false});
    //    this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        // ensure that the ports has the same order as the segments
        //
        this.portLockup = [];
        this.portLockup.push({ p:this.getPort("port_a"), s:"seg_a"});
        this.portLockup.push({ p:this.getPort("port_b"), s:"seg_b"});
        this.portLockup.push({ p:this.getPort("port_c"), s:"seg_c"});
        this.portLockup.push({ p:this.getPort("port_d"), s:"seg_d"});
        this.portLockup.push({ p:this.getPort("port_e"), s:"seg_e"});
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_f"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});
    },
    
    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerAttr(element.s, { fill:element.p.getValue()?"#C21B7A":null});
        });
    }

});