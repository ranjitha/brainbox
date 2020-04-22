// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_GPIOWrite = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_GPIOWrite",
   VERSION: "1.0.157_284",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:105.00650000000314,height:259.5},attr), setter, getter);
     var port;
     // gpio_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 28.968047990644045 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_1");
     port.setMaxFanOut(1);
     // gpio_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 38.72832369942196 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_2");
     port.setMaxFanOut(1);
     // gpio_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 47.89226396917145 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_3");
     port.setMaxFanOut(1);
     // gpio_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 57.12954720616548 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_4");
     port.setMaxFanOut(1);
     // gpio_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 65.92480732177273 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_5");
     port.setMaxFanOut(1);
     // gpio_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 75.14450867052024 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_6");
     port.setMaxFanOut(1);
     // gpio_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 84.93550096339108 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_7");
     port.setMaxFanOut(1);
     // gpio_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.953288838496762, y: 93.83133911367987 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_8");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 105.00650000000314;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L105.00650000000314,0 L105.00650000000314,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M105.00006088992974,47.99999999907308Q105,46 105, 44L105,2Q105,0 103, 0L2,0Q0,0 0, 2L0,44Q0,46 2, 46L12.740000000000691,46Q14.740000000000691,46 14.740000000000691, 48L14.740000000000691,257.5Q14.740000000000691,259.5 16.74000000000069, 259.5L103.00650000000314,259.5Q105.00650000000314,259.5 105.0064391100734, 257.5000000009269L105.00006088992974,47.99999999907308');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":23.65186024419654,"y":75.1720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Write GPIO');
       shape.attr({"x":8.393875000001572,"y":21.94012499999917,"text-anchor":"start","text":"Write GPIO","font-family":"\"Arial\"","font-size":17,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'2');
       shape.attr({"x":25.65186024419654,"y":100.5,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'3');
       shape.attr({"x":25.65186024419654,"y":124.3588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4');
       shape.attr({"x":25.65186024419654,"y":147.3588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'5');
       shape.attr({"x":25.65186024419654,"y":170.7332749999996,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'6');
       shape.attr({"x":25.65186024419654,"y":196.50137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":25.65186024419654,"y":221.5,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'8');
       shape.attr({"x":25.65186024419654,"y":243.05374999999913,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":67.47646024419646,"cy":72.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M73.0604802441976 63.10502500000075L61.91936024419738 63.10502500000075L61.91936024419738 53.274625000000015L73.0604802441976 53.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M60.23121510744113,86.68742174721956Q59.747561552356274,84.3212085643172 63.407336005325305, 83.53730360715826L63.407336005325305,83.53730360715826Q67.06711045829434,82.75339864999933 70.29738818166288, 83.42978257348068L70.29738818166288,83.42978257348068Q73.52766590503143,84.10616649696203 73.72351307461395, 86.57990071354197L73.72351307461395,86.57990071354197Q73.91936024419647,89.05363493012192 70.20461187939645, 90.32220267578214L70.20461187939645,90.32220267578214Q66.48986351459644,91.59077042144236 63.60236608856121, 90.32220267578214L63.60236608856121,90.32220267578214Q60.71486866252599,89.05363493012192 60.23121510744113, 86.68742174721956L60.23121510744113,86.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M84.76058518903737,55.684774099766635Q83.04013458284862,59.295874999999796 79.04186434134924, 59.17825240038364L74.99055489113864,59.05906947361764Q70.99228464963926,58.941446874001485 70.74603219243252, 54.949034103843616L70.69572543740398,54.133426684208615Q70.44947298019724,50.141013914050745 72.86565976809425, 48.0772128335384L72.86565976809425,48.0772128335384Q75.28184655599125,46.01341175302605 78.23490425588761, 45.426005680511935L78.23490425588761,45.426005680511935Q81.18796195578398,44.83859960799782 85.15699327786476, 45.3353796039132L85.46717573811841,45.374203293834874Q89.4362070601992,45.87098328975026 87.71575645401045, 49.48208418998342L84.76058518903737,55.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":67.41936024419738,"cy":78.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":72.33886024419735,"cy":68.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":63.83886024419735,"cy":68.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M70.14696866252598,52.09992905405352Q68.52196866252598,55.84992905405397 64.52196866252507, 57.572902027026885L64.52196866252507,57.572902027026885Q60.52196866252416,59.295874999999796 58.17821866252552, 58.383712837837265L58.17821866252552,58.383712837837265Q55.83446866252689,57.471550675674735 54.24071866252643, 55.54587499999889L54.24071866252643,55.54587499999889Q52.64696866252598,53.62019932432304 51.20946866252598, 49.87019932432304L51.20946866252598,49.87019932432304Q49.77196866252598,46.12019932432304 55.64696866252598, 45.20803716216142L55.64696866252598,45.20803716216142Q61.52196866252598,44.295874999999796 66.64696866252598, 46.32290202702643L66.64696866252598,46.32290202702643Q71.77196866252598,48.349929054053064 70.14696866252598, 52.09992905405352L70.14696866252598,52.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M52.33522662061023,77.00072237161612Q52.89848457869448,72.60027499999978 57.047861882565485, 74.61934036716548L57.047861882565485,74.61934036716548Q61.19723918643649,76.63840573433117 61.484603924481235, 80.51343261639249L61.484603924481235,80.51343261639249Q61.77196866252598,84.38845949845381 59.01812877444081, 84.9943672492268L59.01812877444081,84.9943672492268Q56.264288886355644,85.60027499999978 54.01812877444081, 83.50072237161612L54.01812877444081,83.50072237161612Q51.77196866252598,81.40116974323246 52.33522662061023, 77.00072237161612L52.33522662061023,77.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M74.2160011962037,79.51260111401734Q75.03695719204825,76.35769425824037 78.95848178126289, 75.28416780326324L78.95848178126289,75.28416780326324Q82.88000637047753,74.21064134828612 82.80721137441242, 75.1127998494685L82.80721137441242,75.1127998494685Q82.7344163783473,76.01495835065089 82.07688831127234, 80.0617839245524L82.07688831127234,80.0617839245524Q81.41936024419738,84.10860949845392 77.29113082139065, 84.8863159410671L77.29113082139065,84.8863159410671Q73.16290139858393,85.66402238368028 73.27897329947155, 84.1657651767373L73.27897329947155,84.1657651767373Q73.39504520035916,82.66750796979431 74.2160011962037, 79.51260111401734L74.2160011962037,79.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M76.48261820228163,66.22087237161668Q77.04587616036588,61.82042499999989 81.19525346423688, 63.83949036716558L81.19525346423688,63.83949036716558Q85.34463076810789,65.85855573433128 85.63199550615263, 69.7335826163926L85.63199550615263,69.7335826163926Q85.91936024419738,73.60860949845392 83.16552035611221, 74.2145172492269L83.16552035611221,74.2145172492269Q80.41168046802704,74.82042499999989 78.16552035611221, 72.72087237161668L78.16552035611221,72.72087237161668Q75.91936024419738,70.62131974323347 76.48261820228163, 66.22087237161668L76.48261820228163,66.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M70.4021182022816,58.945338564964004Q70.96537616036585,55.89887499999895 75.11475346423686, 57.29668948495964L75.11475346423686,57.29668948495964Q79.26413076810786,58.69450396992033 79.5514955061526, 61.37721488827083L79.5514955061526,61.37721488827083Q79.83886024419735,64.05992580662132 77.08502035611218, 64.47940040331014L77.08502035611218,64.47940040331014Q74.33118046802701,64.89887499999895 72.08502035611218, 63.445338564964004L72.08502035611218,63.445338564964004Q69.83886024419735,61.991802129929056 70.4021182022816, 58.945338564964004L70.4021182022816,58.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M53.38465340077073,63.15928806953707Q56.99733813901548,60.82042499999989 58.61268473824475, 62.66769167532493L58.61268473824475,62.66769167532493Q60.22803133747402,64.51495835064998 59.18395621375839, 68.8624316352716L59.18395621375839,68.8624316352716Q58.13988109004276,73.20990491989323 54.956544472356654, 73.98761136250687L54.956544472356654,73.98761136250687Q51.773207854670545,74.7653178051205 50.77258825859826, 70.13173447209738L50.77258825859826,70.13173447209738Q49.77196866252598,65.49815113907425 53.38465340077073, 63.15928806953707L53.38465340077073,63.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M62.613102699107,55.55345494670701Q66.12072814793828,54.89887499999895 68.113102699107, 55.95862738455435L68.113102699107,55.95862738455435Q70.10547725027573,57.01837976910974 68.59460569131443, 59.51246751600229L68.59460569131443,59.51246751600229Q67.08373413235313,62.006555262894835 62.553784872741744, 62.667463496247365L62.553784872741744,62.667463496247365Q58.02383561313036,63.328371729599894 58.56465643170304, 59.76820331150748L58.56465643170304,59.76820331150748Q59.105477250275726,56.20803489341506 62.613102699107, 55.55345494670701L62.613102699107,55.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line
       shape = this.canvas.paper.path('M80.17025205219943 51.47225227999843L78.61377205220015,52.31412773599868Q77.05729205220086,53.156003191998934 75.85743049750243, 54.75610701661679L74.51266024419783,56.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M63.69922024419793 55.04527500000131L62.56413672419785,53.4769985199996Q61.42905320419777,51.90872203999788 59.35444558819654, 50.47466328799874L57.27983797219531,49.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_hardware_raspi_GPIOWrite = circuit_hardware_raspi_GPIOWrite.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                console.log("set raspi gpio",port.getValue())
                hardware.raspi.set(port.getName(), port.getValue());
            }
        });
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.gpio.get(port.getName()));
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    }
    
});