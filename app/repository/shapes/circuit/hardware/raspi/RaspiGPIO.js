// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiGPIO = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiGPIO",
   VERSION: "1.0.44_80",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:105,height:259.5},attr), setter, getter);
     var port;
     // gpi_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 27.811978626482198 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_1");
     port.setMaxFanOut(1);
     // gpi_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 37.57225433526012 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_2");
     port.setMaxFanOut(1);
     // gpi_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 46.73619460500961 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_3");
     port.setMaxFanOut(1);
     // gpi_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 55.97347784200363 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_4");
     port.setMaxFanOut(1);
     // gpi_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 64.76873795761088 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_5");
     port.setMaxFanOut(1);
     // gpi_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 73.98843930635839 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_6");
     port.setMaxFanOut(1);
     // gpi_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 83.77943159922923 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_7");
     port.setMaxFanOut(1);
     // gpi_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 92.67526974951802 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_8");
     port.setMaxFanOut(1);
     // gpo_9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 27.799614643545407 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_9");
     port.setMaxFanOut(20);
     // gpo_10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 37.57225433526012 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_10");
     port.setMaxFanOut(20);
     // gpo_11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 46.73619460500961 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_11");
     port.setMaxFanOut(20);
     // gpo_12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 55.97347784200363 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_12");
     port.setMaxFanOut(20);
     // gpo_13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 64.76873795761088 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_13");
     port.setMaxFanOut(20);
     // gpo_14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 74.373795761079 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_14");
     port.setMaxFanOut(20);
     // gpo_15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 83.77943159922923 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_15");
     port.setMaxFanOut(20);
     // gpo_16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 92.67526974951802 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_16");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 105;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L105,0 L105,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M91.54000000000087,48Q91.54000000000087,46 93.54000000000087, 46L103,46Q105,46 105, 44L105,2Q105,0 103, 0L2,0Q0,0 0, 2L0,44Q0,46 2, 46L12.740000000000691,46Q14.740000000000691,46 14.740000000000691, 48L14.740000000000691,257.5Q14.740000000000691,259.5 16.74000000000069, 259.5L89.54000000000087,259.5Q91.54000000000087,259.5 91.54000000000087, 257.5L91.54000000000087,48');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'GPIO');
       shape.attr({"x":33.936460244196496,"y":15.936499999999796,"text-anchor":"start","text":"GPIO","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":22.65186024419654,"y":72.1720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'2');
       shape.attr({"x":24.65186024419654,"y":97.5,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'3');
       shape.attr({"x":24.65186024419654,"y":121.3588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4');
       shape.attr({"x":24.65186024419654,"y":144.3588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'5');
       shape.attr({"x":24.65186024419654,"y":167.7332749999996,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'6');
       shape.attr({"x":24.65186024419654,"y":193.50137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":24.65186024419654,"y":218.5,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'8');
       shape.attr({"x":24.65186024419654,"y":240.05374999999913,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":52.47646024419646,"cy":59.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M58.060480244197606 50.10502500000075L46.91936024419738 50.10502500000075L46.91936024419738 40.274625000000015L58.060480244197606 40.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M45.23121510744113,73.68742174721956Q44.747561552356274,71.3212085643172 48.407336005325305, 70.53730360715826L48.407336005325305,70.53730360715826Q52.06711045829434,69.75339864999933 55.29738818166288, 70.42978257348068L55.29738818166288,70.42978257348068Q58.52766590503143,71.10616649696203 58.72351307461395, 73.57990071354197L58.72351307461395,73.57990071354197Q58.91936024419647,76.05363493012192 55.20461187939645, 77.32220267578214L55.20461187939645,77.32220267578214Q51.489863514596436,78.59077042144236 48.60236608856121, 77.32220267578214L48.60236608856121,77.32220267578214Q45.71486866252599,76.05363493012192 45.23121510744113, 73.68742174721956L45.23121510744113,73.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M69.76058518903737,42.684774099766635Q68.04013458284862,46.295874999999796 64.04186434134924, 46.17825240038364L59.99055489113864,46.05906947361764Q55.99228464963926,45.941446874001485 55.74603219243252, 41.949034103843616L55.69572543740398,41.133426684208615Q55.44947298019724,37.141013914050745 57.86565976809425, 35.0772128335384L57.86565976809425,35.0772128335384Q60.28184655599125,33.01341175302605 63.23490425588761, 32.426005680511935L63.23490425588761,32.426005680511935Q66.18796195578398,31.83859960799782 70.15699327786476, 32.3353796039132L70.46717573811841,32.374203293834874Q74.4362070601992,32.87098328975026 72.71575645401045, 36.48208418998342L69.76058518903737,42.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":52.41936024419738,"cy":65.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":57.33886024419735,"cy":55.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":48.83886024419735,"cy":55.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.14696866252598,39.09992905405352Q53.52196866252598,42.84992905405397 49.52196866252507, 44.572902027026885L49.52196866252507,44.572902027026885Q45.52196866252416,46.295874999999796 43.17821866252552, 45.383712837837265L43.17821866252552,45.383712837837265Q40.83446866252689,44.471550675674735 39.24071866252643, 42.54587499999889L39.24071866252643,42.54587499999889Q37.64696866252598,40.62019932432304 36.20946866252598, 36.87019932432304L36.20946866252598,36.87019932432304Q34.77196866252598,33.12019932432304 40.64696866252598, 32.20803716216142L40.64696866252598,32.20803716216142Q46.52196866252598,31.295874999999796 51.64696866252598, 33.32290202702643L51.64696866252598,33.32290202702643Q56.77196866252598,35.349929054053064 55.14696866252598, 39.09992905405352L55.14696866252598,39.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M37.33522662061023,64.00072237161612Q37.89848457869448,59.60027499999978 42.047861882565485, 61.61934036716548L42.047861882565485,61.61934036716548Q46.19723918643649,63.63840573433117 46.484603924481235, 67.51343261639249L46.484603924481235,67.51343261639249Q46.77196866252598,71.38845949845381 44.01812877444081, 71.9943672492268L44.01812877444081,71.9943672492268Q41.264288886355644,72.60027499999978 39.01812877444081, 70.50072237161612L39.01812877444081,70.50072237161612Q36.77196866252598,68.40116974323246 37.33522662061023, 64.00072237161612L37.33522662061023,64.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M59.216001196203706,66.51260111401734Q60.03695719204825,63.35769425824037 63.95848178126289, 62.284167803263244L63.95848178126289,62.284167803263244Q67.88000637047753,61.21064134828612 67.80721137441242, 62.1127998494685L67.80721137441242,62.1127998494685Q67.7344163783473,63.014958350650886 67.07688831127234, 67.0617839245524L67.07688831127234,67.0617839245524Q66.41936024419738,71.10860949845392 62.29113082139065, 71.8863159410671L62.29113082139065,71.8863159410671Q58.16290139858393,72.66402238368028 58.278973299471545, 71.1657651767373L58.278973299471545,71.1657651767373Q58.395045200359164,69.66750796979431 59.216001196203706, 66.51260111401734L59.216001196203706,66.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M61.48261820228163,53.22087237161668Q62.04587616036588,48.82042499999989 66.19525346423688, 50.83949036716558L66.19525346423688,50.83949036716558Q70.34463076810789,52.858555734331276 70.63199550615263, 56.733582616392596L70.63199550615263,56.733582616392596Q70.91936024419738,60.608609498453916 68.16552035611221, 61.2145172492269L68.16552035611221,61.2145172492269Q65.41168046802704,61.82042499999989 63.16552035611221, 59.72087237161668L63.16552035611221,59.72087237161668Q60.91936024419738,57.62131974323347 61.48261820228163, 53.22087237161668L61.48261820228163,53.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.4021182022816,45.945338564964004Q55.96537616036585,42.89887499999895 60.114753464236856, 44.29668948495964L60.114753464236856,44.29668948495964Q64.26413076810786,45.69450396992033 64.5514955061526, 48.37721488827083L64.5514955061526,48.37721488827083Q64.83886024419735,51.05992580662132 62.08502035611218, 51.47940040331014L62.08502035611218,51.47940040331014Q59.331180468027014,51.89887499999895 57.08502035611218, 50.445338564964004L57.08502035611218,50.445338564964004Q54.83886024419735,48.991802129929056 55.4021182022816, 45.945338564964004L55.4021182022816,45.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M38.38465340077073,50.15928806953707Q41.99733813901548,47.82042499999989 43.61268473824475, 49.66769167532493L43.61268473824475,49.66769167532493Q45.22803133747402,51.51495835064998 44.18395621375839, 55.862431635271605L44.18395621375839,55.862431635271605Q43.13988109004276,60.20990491989323 39.956544472356654, 60.98761136250687L39.956544472356654,60.98761136250687Q36.773207854670545,61.7653178051205 35.77258825859826, 57.13173447209738L35.77258825859826,57.13173447209738Q34.77196866252598,52.49815113907425 38.38465340077073, 50.15928806953707L38.38465340077073,50.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M47.613102699107,42.55345494670701Q51.12072814793828,41.89887499999895 53.113102699107, 42.95862738455435L53.113102699107,42.95862738455435Q55.105477250275726,44.01837976910974 53.59460569131443, 46.51246751600229L53.59460569131443,46.51246751600229Q52.08373413235313,49.006555262894835 47.553784872741744, 49.667463496247365L47.553784872741744,49.667463496247365Q43.02383561313036,50.328371729599894 43.56465643170304, 46.76820331150748L43.56465643170304,46.76820331150748Q44.105477250275726,43.20803489341506 47.613102699107, 42.55345494670701L47.613102699107,42.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'9');
       shape.attr({"x":71.97646024419646,"y":72.10027499999978,"text-anchor":"start","text":"9","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'10');
       shape.attr({"x":64.88000637047662,"y":97.5,"text-anchor":"start","text":"10","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'11');
       shape.attr({"x":65.88000637047662,"y":121.3588749999999,"text-anchor":"start","text":"11","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'12');
       shape.attr({"x":65.97646024419646,"y":144.3588749999999,"text-anchor":"start","text":"12","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'13');
       shape.attr({"x":65.97646024419646,"y":167.7332749999996,"text-anchor":"start","text":"13","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'14');
       shape.attr({"x":65.88000637047662,"y":191.50137499999983,"text-anchor":"start","text":"14","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'15');
       shape.attr({"x":66.88000637047662,"y":217.5,"text-anchor":"start","text":"15","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'16');
       shape.attr({"x":66.88000637047662,"y":240.05374999999913,"text-anchor":"start","text":"16","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line
       shape = this.canvas.paper.path('M65.17025205219943 38.47225227999843L63.61377205220015,39.31412773599868Q62.057292052200864,40.156003191998934 60.85743049750244, 41.75610701661679L59.51266024419783,43.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M48.69922024419793 42.04527500000131L47.56413672419785,40.4769985199996Q46.42905320419777,38.90872203999788 44.35444558819654, 37.47466328799874L42.27983797219531,36.04060453599959');
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
circuit_hardware_raspi_RaspiGPIO = circuit_hardware_raspi_RaspiGPIO.extend({

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
                raspi.gpio.set(port.getName(), port.getValue());
            }
        });
        this.getOutputPorts().each(function(index,port){
            port.setValue(raspi.gpio.get(port.getName()));
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
    }
});