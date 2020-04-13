// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiINPUT = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiINPUT",
   VERSION: "1.0.112_199",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:106.25999999999931,height:259.5},attr), setter, getter);
     var port;
     // gpio_9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 27.028901734104174 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_9");
     port.setMaxFanOut(20);
     // gpio_10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 36.80154142581888 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_10");
     port.setMaxFanOut(20);
     // gpio_11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 45.96548169556837 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_11");
     port.setMaxFanOut(20);
     // gpio_12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 55.202764932562395 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_12");
     port.setMaxFanOut(20);
     // gpio_13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 63.99802504816965 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_13");
     port.setMaxFanOut(20);
     // gpio_14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 73.60308285163777 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_14");
     port.setMaxFanOut(20);
     // gpio_15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 83.00871868978798 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_15");
     port.setMaxFanOut(20);
     // gpio_16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 87.92923019009974, y: 91.9045568400768 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_16");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 106.25999999999931;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L106.25999999999931,0 L106.25999999999931,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M92.80000000000018,48Q92.80000000000018,46 94.80000000000018, 46L104.25999999999931,46Q106.25999999999931,46 106.25999999999931, 44L106.25999999999931,2Q106.25999999999931,0 104.25999999999931, 0L3.259999999999309,0Q1.2599999999993088,0 1.2599999999993088, 2L1.2599999999993088,44Q1.2599999999993088,46 1.2481969268556656, 47.99996517156282L0.01180307314364315,257.50003482843715Q0,259.5 2, 259.5L90.80000000000018,259.5Q92.80000000000018,259.5 92.80000000000018, 257.5L92.80000000000018,48');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Input GPIO');
       shape.attr({"x":8.433599999999387,"y":20.0078125,"text-anchor":"start","text":"Input GPIO","font-family":"\"Arial\"","font-size":18,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":38.170060244195156,"cy":69.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M43.7540802441963 60.10502500000075L32.612960244196074 60.10502500000075L32.612960244196074 50.274625000000015L43.7540802441963 50.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M30.924815107439827,83.68742174721956Q30.44116155235497,81.3212085643172 34.100936005324, 80.53730360715826L34.100936005324,80.53730360715826Q37.76071045829303,79.75339864999933 40.99098818166158, 80.42978257348068L40.99098818166158,80.42978257348068Q44.22126590503012,81.10616649696203 44.417113074612644, 83.57990071354197L44.417113074612644,83.57990071354197Q44.612960244195165,86.05363493012192 40.89821187939515, 87.32220267578214L40.89821187939515,87.32220267578214Q37.18346351459513,88.59077042144236 34.29596608855991, 87.32220267578214L34.29596608855991,87.32220267578214Q31.408468662524683,86.05363493012192 30.924815107439827, 83.68742174721956L30.924815107439827,83.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.454185189036075,52.684774099766635Q53.73373458284732,56.295874999999796 49.735464341347935, 56.17825240038364L45.68415489113734,56.05906947361764Q41.685884649637956,55.941446874001485 41.43963219243122, 51.949034103843616L41.389325437402675,51.133426684208615Q41.14307298019594,47.141013914050745 43.55925976809294, 45.0772128335384L43.55925976809294,45.0772128335384Q45.97544655598995,43.01341175302605 48.92850425588631, 42.426005680511935L48.92850425588631,42.426005680511935Q51.88156195578267,41.83859960799782 55.85059327786345, 42.3353796039132L56.16077573811711,42.374203293834874Q60.12980706019789,42.87098328975026 58.409356454009135, 46.48208418998342L55.454185189036075,52.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":38.112960244196074,"cy":75.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":43.032460244196045,"cy":65.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":34.532460244196045,"cy":65.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M40.840568662524674,49.09992905405352Q39.215568662524674,52.84992905405397 35.215568662523765, 54.572902027026885L35.215568662523765,54.572902027026885Q31.215568662522855,56.295874999999796 28.87181866252422, 55.383712837837265L28.87181866252422,55.383712837837265Q26.528068662525584,54.471550675674735 24.93431866252513, 52.54587499999889L24.93431866252513,52.54587499999889Q23.340568662524674,50.62019932432304 21.903068662524674, 46.87019932432304L21.903068662524674,46.87019932432304Q20.465568662524674,43.12019932432304 26.340568662524674, 42.20803716216142L26.340568662524674,42.20803716216142Q32.215568662524674,41.295874999999796 37.340568662524674, 43.32290202702643L37.340568662524674,43.32290202702643Q42.465568662524674,45.349929054053064 40.840568662524674, 49.09992905405352L40.840568662524674,49.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M23.028826620608925,74.00072237161612Q23.592084578693175,69.60027499999978 27.74146188256418, 71.61934036716548L27.74146188256418,71.61934036716548Q31.890839186435187,73.63840573433117 32.17820392447993, 77.51343261639249L32.17820392447993,77.51343261639249Q32.465568662524674,81.38845949845381 29.711728774439507, 81.9943672492268L29.711728774439507,81.9943672492268Q26.95788888635434,82.60027499999978 24.711728774439507, 80.50072237161612L24.711728774439507,80.50072237161612Q22.465568662524674,78.40116974323246 23.028826620608925, 74.00072237161612L23.028826620608925,74.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M44.9096011962024,76.51260111401734Q45.730557192046945,73.35769425824037 49.652081781261586, 72.28416780326324L49.652081781261586,72.28416780326324Q53.57360637047623,71.21064134828612 53.500811374411114, 72.1127998494685L53.500811374411114,72.1127998494685Q53.428016378346,73.01495835065089 52.77048831127104, 77.0617839245524L52.77048831127104,77.0617839245524Q52.112960244196074,81.10860949845392 47.98473082138935, 81.8863159410671L47.98473082138935,81.8863159410671Q43.85650139858262,82.66402238368028 43.97257329947024, 81.1657651767373L43.97257329947024,81.1657651767373Q44.08864520035786,79.66750796979431 44.9096011962024, 76.51260111401734L44.9096011962024,76.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M47.176218202280324,63.22087237161668Q47.739476160364575,58.82042499999989 51.88885346423558, 60.83949036716558L51.88885346423558,60.83949036716558Q56.03823076810659,62.858555734331276 56.32559550615133, 66.7335826163926L56.32559550615133,66.7335826163926Q56.612960244196074,70.60860949845392 53.85912035611091, 71.2145172492269L53.85912035611091,71.2145172492269Q51.10528046802574,71.82042499999989 48.85912035611091, 69.72087237161668L48.85912035611091,69.72087237161668Q46.612960244196074,67.62131974323347 47.176218202280324, 63.22087237161668L47.176218202280324,63.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M41.095718202280295,55.945338564964004Q41.658976160364546,52.89887499999895 45.80835346423555, 54.29668948495964L45.80835346423555,54.29668948495964Q49.95773076810656,55.69450396992033 50.2450955061513, 58.37721488827083L50.2450955061513,58.37721488827083Q50.532460244196045,61.05992580662132 47.77862035611088, 61.47940040331014L47.77862035611088,61.47940040331014Q45.02478046802571,61.89887499999895 42.77862035611088, 60.445338564964004L42.77862035611088,60.445338564964004Q40.532460244196045,58.991802129929056 41.095718202280295, 55.945338564964004L41.095718202280295,55.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M24.078253400769427,60.15928806953707Q27.69093813901418,57.82042499999989 29.30628473824345, 59.66769167532493L29.30628473824345,59.66769167532493Q30.921631337472718,61.51495835064998 29.87755621375709, 65.8624316352716L29.87755621375709,65.8624316352716Q28.83348109004146,70.20990491989323 25.65014447235535, 70.98761136250687L25.65014447235535,70.98761136250687Q22.46680785466924,71.7653178051205 21.466188258596958, 67.13173447209738L21.466188258596958,67.13173447209738Q20.465568662524674,62.49815113907425 24.078253400769427, 60.15928806953707L24.078253400769427,60.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.3067026991057,52.55345494670701Q36.814328147936976,51.89887499999895 38.8067026991057, 52.95862738455435L38.8067026991057,52.95862738455435Q40.79907725027442,54.01837976910974 39.288205691313124, 56.51246751600229L39.288205691313124,56.51246751600229Q37.777334132351825,59.006555262894835 33.24738487274044, 59.667463496247365L33.24738487274044,59.667463496247365Q28.717435613129055,60.328371729599894 29.25825643170174, 56.76820331150748L29.25825643170174,56.76820331150748Q29.799077250274422,53.20803489341506 33.3067026991057, 52.55345494670701L33.3067026991057,52.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'9');
       shape.attr({"x":70.67006024419516,"y":70.10027499999978,"text-anchor":"start","text":"9","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'10');
       shape.attr({"x":65.57360637047532,"y":95.5,"text-anchor":"start","text":"10","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'11');
       shape.attr({"x":66.57360637047532,"y":119.3588749999999,"text-anchor":"start","text":"11","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'12');
       shape.attr({"x":66.67006024419516,"y":142.3588749999999,"text-anchor":"start","text":"12","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'13');
       shape.attr({"x":66.67006024419516,"y":165.7332749999996,"text-anchor":"start","text":"13","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'14');
       shape.attr({"x":66.57360637047532,"y":189.50137499999983,"text-anchor":"start","text":"14","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'15');
       shape.attr({"x":67.57360637047532,"y":215.5,"text-anchor":"start","text":"15","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'16');
       shape.attr({"x":67.57360637047532,"y":238.05374999999913,"text-anchor":"start","text":"16","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line
       shape = this.canvas.paper.path('M53.863852052198126 48.47225227999843L52.30737205219884,49.31412773599868Q50.75089205219956,50.156003191998934 49.55103049750114, 51.75610701661679L48.20626024419653,53.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M37.39282024419663 52.04527500000131L36.25773672419655,50.4769985199996Q35.12265320419647,48.90872203999788 33.04804558819524, 47.47466328799874L30.973437972194006,46.04060453599959');
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
circuit_hardware_raspi_RaspiINPUT = circuit_hardware_raspi_RaspiINPUT.extend({

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
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.raspi.get(port.getName()));
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