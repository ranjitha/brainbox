// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiOUTPUT = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiOUTPUT",
   VERSION: "1.0.111_198",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:106.61262500000157,height:259.5},attr), setter, getter);
     var port;
     // gpio_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 28.968047990644045 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_1");
     port.setMaxFanOut(1);
     // gpio_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 38.72832369942196 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_2");
     port.setMaxFanOut(1);
     // gpio_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 47.89226396917145 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_3");
     port.setMaxFanOut(1);
     // gpio_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 57.12954720616548 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_4");
     port.setMaxFanOut(1);
     // gpio_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 65.92480732177273 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_5");
     port.setMaxFanOut(1);
     // gpio_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 75.14450867052024 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_6");
     port.setMaxFanOut(1);
     // gpio_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 84.93550096339108 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_7");
     port.setMaxFanOut(1);
     // gpio_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 15.249587226836155, y: 93.83133911367987 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_8");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 106.61262500000157;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L106.61262500000157,0 L106.61262500000157,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M106.60618588992817,47.99999999907308Q106.60612499999843,46 106.60612499999843, 44L106.60612499999843,2Q106.60612499999843,0 104.60612499999843, 0L3.6061249999984284,0Q1.6061249999984284,0 1.6061249999984284, 2L1.6061249999984284,44Q1.6061249999984284,46 3.6061249999984284, 46L14.34612499999912,46Q16.34612499999912,46 16.34612499999912, 48L16.34612499999912,257.5Q16.34612499999912,259.5 18.34612499999912, 259.5L104.61262500000157,259.5Q106.61262500000157,259.5 106.61256411007183, 257.5000000009269L106.60618588992817,47.99999999907308');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":25.25798524419497,"y":75.1720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Output GPIO');
       shape.attr({"x":4,"y":21.94793749999917,"text-anchor":"start","text":"Output GPIO","font-family":"\"Arial\"","font-size":17,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'2');
       shape.attr({"x":27.25798524419497,"y":100.5,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'3');
       shape.attr({"x":27.25798524419497,"y":124.3588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4');
       shape.attr({"x":27.25798524419497,"y":147.3588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'5');
       shape.attr({"x":27.25798524419497,"y":170.7332749999996,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'6');
       shape.attr({"x":27.25798524419497,"y":196.50137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":27.25798524419497,"y":221.5,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'8');
       shape.attr({"x":27.25798524419497,"y":243.05374999999913,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":69.08258524419489,"cy":72.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M74.66660524419603 63.10502500000075L63.525485244195806 63.10502500000075L63.525485244195806 53.274625000000015L74.66660524419603 53.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M61.83734010743956,86.68742174721956Q61.3536865523547,84.3212085643172 65.01346100532373, 83.53730360715826L65.01346100532373,83.53730360715826Q68.67323545829277,82.75339864999933 71.90351318166131, 83.42978257348068L71.90351318166131,83.42978257348068Q75.13379090502985,84.10616649696203 75.32963807461238, 86.57990071354197L75.32963807461238,86.57990071354197Q75.5254852441949,89.05363493012192 71.81073687939488, 90.32220267578214L71.81073687939488,90.32220267578214Q68.09598851459486,91.59077042144236 65.20849108855964, 90.32220267578214L65.20849108855964,90.32220267578214Q62.320993662524415,89.05363493012192 61.83734010743956, 86.68742174721956L61.83734010743956,86.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M86.3667101890358,55.684774099766635Q84.64625958284705,59.295874999999796 80.64798934134767, 59.17825240038364L76.59667989113707,59.05906947361764Q72.59840964963769,58.941446874001485 72.35215719243095, 54.949034103843616L72.30185043740241,54.133426684208615Q72.05559798019567,50.141013914050745 74.47178476809268, 48.0772128335384L74.47178476809268,48.0772128335384Q76.88797155598968,46.01341175302605 79.84102925588604, 45.426005680511935L79.84102925588604,45.426005680511935Q82.7940869557824,44.83859960799782 86.76311827786319, 45.3353796039132L87.07330073811684,45.374203293834874Q91.04233206019762,45.87098328975026 89.32188145400887, 49.48208418998342L86.3667101890358,55.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":69.0254852441958,"cy":78.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":73.94498524419578,"cy":68.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":65.44498524419578,"cy":68.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M71.7530936625244,52.09992905405352Q70.1280936625244,55.84992905405397 66.1280936625235, 57.572902027026885L66.1280936625235,57.572902027026885Q62.12809366252259,59.295874999999796 59.78434366252395, 58.383712837837265L59.78434366252395,58.383712837837265Q57.440593662525316,57.471550675674735 55.84684366252486, 55.54587499999889L55.84684366252486,55.54587499999889Q54.25309366252441,53.62019932432304 52.81559366252441, 49.87019932432304L52.81559366252441,49.87019932432304Q51.37809366252441,46.12019932432304 57.25309366252441, 45.20803716216142L57.25309366252441,45.20803716216142Q63.12809366252441,44.295874999999796 68.2530936625244, 46.32290202702643L68.2530936625244,46.32290202702643Q73.3780936625244,48.349929054053064 71.7530936625244, 52.09992905405352L71.7530936625244,52.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M53.94135162060866,77.00072237161612Q54.50460957869291,72.60027499999978 58.65398688256391, 74.61934036716548L58.65398688256391,74.61934036716548Q62.80336418643492,76.63840573433117 63.09072892447966, 80.51343261639249L63.09072892447966,80.51343261639249Q63.37809366252441,84.38845949845381 60.62425377443924, 84.9943672492268L60.62425377443924,84.9943672492268Q57.87041388635407,85.60027499999978 55.62425377443924, 83.50072237161612L55.62425377443924,83.50072237161612Q53.37809366252441,81.40116974323246 53.94135162060866, 77.00072237161612L53.94135162060866,77.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M75.82212619620213,79.51260111401734Q76.64308219204668,76.35769425824037 80.56460678126132, 75.28416780326324L80.56460678126132,75.28416780326324Q84.48613137047596,74.21064134828612 84.41333637441085, 75.1127998494685L84.41333637441085,75.1127998494685Q84.34054137834573,76.01495835065089 83.68301331127077, 80.0617839245524L83.68301331127077,80.0617839245524Q83.0254852441958,84.10860949845392 78.89725582138908, 84.8863159410671L78.89725582138908,84.8863159410671Q74.76902639858235,85.66402238368028 74.88509829946997, 84.1657651767373L74.88509829946997,84.1657651767373Q75.00117020035759,82.66750796979431 75.82212619620213, 79.51260111401734L75.82212619620213,79.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M78.08874320228006,66.22087237161668Q78.6520011603643,61.82042499999989 82.80137846423531, 63.83949036716558L82.80137846423531,63.83949036716558Q86.95075576810632,65.85855573433128 87.23812050615106, 69.7335826163926L87.23812050615106,69.7335826163926Q87.5254852441958,73.60860949845392 84.77164535611064, 74.2145172492269L84.77164535611064,74.2145172492269Q82.01780546802547,74.82042499999989 79.77164535611064, 72.72087237161668L79.77164535611064,72.72087237161668Q77.5254852441958,70.62131974323347 78.08874320228006, 66.22087237161668L78.08874320228006,66.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M72.00824320228003,58.945338564964004Q72.57150116036428,55.89887499999895 76.72087846423528, 57.29668948495964L76.72087846423528,57.29668948495964Q80.87025576810629,58.69450396992033 81.15762050615103, 61.37721488827083L81.15762050615103,61.37721488827083Q81.44498524419578,64.05992580662132 78.69114535611061, 64.47940040331014L78.69114535611061,64.47940040331014Q75.93730546802544,64.89887499999895 73.69114535611061, 63.445338564964004L73.69114535611061,63.445338564964004Q71.44498524419578,61.991802129929056 72.00824320228003, 58.945338564964004L72.00824320228003,58.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M54.99077840076916,63.15928806953707Q58.60346313901391,60.82042499999989 60.21880973824318, 62.66769167532493L60.21880973824318,62.66769167532493Q61.83415633747245,64.51495835064998 60.79008121375682, 68.8624316352716L60.79008121375682,68.8624316352716Q59.74600609004119,73.20990491989323 56.56266947235508, 73.98761136250687L56.56266947235508,73.98761136250687Q53.379332854668974,74.7653178051205 52.37871325859669, 70.13173447209738L52.37871325859669,70.13173447209738Q51.37809366252441,65.49815113907425 54.99077840076916, 63.15928806953707L54.99077840076916,63.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M64.21922769910543,55.55345494670701Q67.72685314793671,54.89887499999895 69.71922769910543, 55.95862738455435L69.71922769910543,55.95862738455435Q71.71160225027415,57.01837976910974 70.20073069131286, 59.51246751600229L70.20073069131286,59.51246751600229Q68.68985913235156,62.006555262894835 64.15990987274017, 62.667463496247365L64.15990987274017,62.667463496247365Q59.62996061312879,63.328371729599894 60.17078143170147, 59.76820331150748L60.17078143170147,59.76820331150748Q60.711602250274154,56.20803489341506 64.21922769910543, 55.55345494670701L64.21922769910543,55.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line
       shape = this.canvas.paper.path('M81.77637705219786 51.47225227999843L80.21989705219858,52.31412773599868Q78.66341705219929,53.156003191998934 77.46355549750086, 54.75610701661679L76.11878524419626,56.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M65.30534524419636 55.04527500000131L64.17026172419628,53.4769985199996Q63.0351782041962,51.90872203999788 60.96057058819497, 50.47466328799874L58.88596297219374,49.04060453599959');
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
circuit_hardware_raspi_RaspiOUTPUT = circuit_hardware_raspi_RaspiOUTPUT.extend({

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