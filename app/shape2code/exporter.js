var json=[
  {
    "type": "shape_designer.figure.ExtPolygon",
    "id": "deca748f-5f68-724b-54a1-a8aae5ce28c8",
    "x": 7948.299812499998,
    "y": 7870.25,
    "width": 105.00650000000314,
    "height": 259.5,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "baseClass": "draw2d.SetFigure",
      "code": "/**\n * by 'Draw2D Shape Designer'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ntestShape = testShape.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n         // your special code here\n    },\n\n    /**\n     *  Called by the simulator for every calculation\n     *  loop\n     *  @required\n     **/\n    calculate:function()\n    {\n        this.getInputPorts().each(function(index,port){\n            if(port.hasChangedValue() && port.getConnections().getSize()>0){\n                hardware.gpio.set(port.getName(), port.getValue());\n            }\n        });\n        this.getOutputPorts().each(function(index,port){\n            port.setValue(hardware.gpio.get(port.getName()));\n        });\n    },\n\n\n    /**\n     *  Called if the simulation mode is starting\n     *  @required\n     **/\n    onStart:function()\n    {\n    },\n\n    /**\n     *  Called if the simulation mode is stopping\n     *  @required\n     **/\n    onStop:function()\n    {\n    }\n});",
      "name": "Rectangle",
      "markdown": "# Raspberry Pi GPIO \n\n## About GPIO\nThe Raspberry Pi provides Input/Outport ports \nintended to control or monitor other devices and \nsubsystem modules. These `GPIO` (general purpose I/O) \nsignals on the 2x13 header pins on the RPi motherboad  \ninclude SPI, I2C, serial UART, 3V3 and 5V power.\n\n## Interaction\nYou can control these GPIO pins on the raspi with brainbox.\n\n## Install\n\n```\nsudo npm install -g brainbox\n````\n\nThis takes a while on a raspbery B+ 2 but should success.\n\n## Start the server on the raspi\nafter this you can start the `brainbox` server on the raspberry\nwith\n\n```\nbrainbox <ENTER>\n```\n\n## Connect with the browser\n\nAfter this the BrainBox echos the url on the console \nhow to connect with your browser to the Raspi.\n\nNow you can drive the GPIO pins on raspi with the BrainBox\n\n",
      "type": "Output",
      "direction": 1
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#FFFFFF",
    "color": "#303030",
    "stroke": 1,
    "radius": 2,
    "dasharray": null,
    "vertices": [
      {
        "x": 8053.299812499998,
        "y": 7916.25
      },
      {
        "x": 8053.299812499998,
        "y": 7870.25
      },
      {
        "x": 7948.299812499998,
        "y": 7870.25
      },
      {
        "x": 7948.299812499998,
        "y": 7916.25
      },
      {
        "x": 7963.039812499998,
        "y": 7916.25
      },
      {
        "x": 7963.039812499998,
        "y": 8129.75
      },
      {
        "x": 8053.306312500001,
        "y": 8129.75
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "374670fc-e214-ae4c-2c21-41eff7d2fb66",
    "x": 7957.951672744194,
    "y": 7940.422084535721,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_1",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "ec1b1a42-9200-8b60-6d78-ce6b9ffb8ff8",
    "x": 7957.951672744194,
    "y": 7965.75,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_2",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "97efc72a-c9ad-f50b-e7ca-ba6a168eda02",
    "x": 7957.951672744194,
    "y": 7989.530425,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_3",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "59d900da-9d6d-2389-86b5-cc14d2a24513",
    "x": 7957.951672744194,
    "y": 8013.501174999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_4",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "2d728a2e-374a-0ecf-1d20-dd42f0ebf62a",
    "x": 7957.951672744194,
    "y": 8036.324875,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_5",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "b63caa07-5dc6-5566-62c2-f2975cfa2c99",
    "x": 7957.951672744194,
    "y": 8060.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_6",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "bb6288f8-25aa-e53b-0457-e8c1135fe7bf",
    "x": 7946.693687499999,
    "y": 7878.690124999999,
    "width": 65.796875,
    "height": 21.015625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "Output GPIO",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 17,
    "fontColor": "#BD2466",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "1d0b5415-6131-c884-8a84-a8c95f52e4de",
    "x": 7957.951672744194,
    "y": 8085.657625,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_7",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "f3ee5e55-735a-0890-fbd3-817e5c584636",
    "x": 7957.951672744194,
    "y": 8108.742324999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_8",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "e8b1c86f-e639-4ceb-2005-a718a1bfaa89",
    "x": 7967.951672744194,
    "y": 7932.922084535721,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "1",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "095d97b3-aa94-7a52-f908-6b73628ee844",
    "x": 7969.951672744194,
    "y": 7958.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "2",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "753d3c24-6196-80a0-b470-4a344361f7df",
    "x": 7969.951672744194,
    "y": 7982.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "3",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "69cf1c85-0090-43a9-c52a-3f7626442075",
    "x": 7969.951672744194,
    "y": 8005.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "ff804450-ebd7-bf66-211e-31bce79a379c",
    "x": 7969.951672744194,
    "y": 8028.483275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "5",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "11559508-7363-cd07-e737-f15858989ae9",
    "x": 7969.951672744194,
    "y": 8054.251375,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "6",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "9baf5722-89dd-628d-e0d4-39bae1316611",
    "x": 7969.951672744194,
    "y": 8079.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "7",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "2e2aa124-27f2-b41b-71a6-b63b7b325bd1",
    "x": 7969.951672744194,
    "y": 8100.803749999999,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "8",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "901b96e7-19ba-81f5-9c02-8599dbd64c2b",
    "x": 8000.276272744194,
    "y": 7926.148874999999,
    "width": 31,
    "height": 33,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#000000",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "918554d3-5d1a-c476-655d-56fcaa50e03f",
    "x": 8010.219172744195,
    "y": 7923.524625,
    "width": 11.141120000000228,
    "height": 9.830400000000736,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#000000",
    "color": "#303030",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "vertices": [
      {
        "x": 8021.360292744195,
        "y": 7933.355025000001
      },
      {
        "x": 8010.219172744195,
        "y": 7933.355025000001
      },
      {
        "x": 8010.219172744195,
        "y": 7923.524625
      },
      {
        "x": 8021.360292744195,
        "y": 7923.524625
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8355e815-33ab-61ee-3f40-fcddb68252fb",
    "x": 8008.047374052354,
    "y": 7953.003398649999,
    "width": 14.171798691840195,
    "height": 8.837371771443031,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 5,
    "dasharray": null,
    "vertices": [
      {
        "x": 8008.047374052354,
        "y": 7954.571208564317
      },
      {
        "x": 8015.366922958292,
        "y": 7953.003398649999
      },
      {
        "x": 8021.827478405029,
        "y": 7954.356166496962
      },
      {
        "x": 8022.219172744194,
        "y": 7959.303634930122
      },
      {
        "x": 8014.789676014594,
        "y": 7961.840770421442
      },
      {
        "x": 8009.014681162524,
        "y": 7959.303634930122
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "b76f1f2c-4b36-c11e-9972-def4e0c60dc3",
    "x": 8018.749285480195,
    "y": 7915.088599607998,
    "width": 18.986734080001952,
    "height": 14.457275392001975,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 4,
    "dasharray": null,
    "vertices": [
      {
        "x": 8031.339947082846,
        "y": 7929.545875
      },
      {
        "x": 8019.292097149637,
        "y": 7929.1914468740015
      },
      {
        "x": 8018.749285480195,
        "y": 7920.391013914051
      },
      {
        "x": 8023.581659055989,
        "y": 7916.263411753026
      },
      {
        "x": 8029.487774455782,
        "y": 7915.088599607998
      },
      {
        "x": 8037.736019560197,
        "y": 7916.12098328975
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "ec0bfd07-0974-75a8-cec7-26676326f4a1",
    "x": 8010.219172744195,
    "y": 7942.850275,
    "width": 11,
    "height": 11,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "53a44861-b93e-277a-7230-2b3117b59744",
    "x": 8016.638672744195,
    "y": 7934.570425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "7504563b-fb58-e81a-db91-58deaba8e0ff",
    "x": 8008.138672744195,
    "y": 7934.070425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "3237a6cf-13dd-a5b8-66e1-b80c8de4e3c2",
    "x": 7998.071781162524,
    "y": 7914.545875,
    "width": 22,
    "height": 15,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 10,
    "dasharray": null,
    "vertices": [
      {
        "x": 8016.821781162524,
        "y": 7926.099929054054
      },
      {
        "x": 8008.821781162522,
        "y": 7929.545875
      },
      {
        "x": 8004.1342811625245,
        "y": 7927.721550675675
      },
      {
        "x": 8000.946781162524,
        "y": 7923.870199324323
      },
      {
        "x": 7998.071781162524,
        "y": 7916.370199324323
      },
      {
        "x": 8009.821781162524,
        "y": 7914.545875
      },
      {
        "x": 8020.071781162524,
        "y": 7918.599929054053
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "d5ded4b5-5027-e1f6-f52e-39fddae0735b",
    "x": 8000.071781162524,
    "y": 7942.850275,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8001.198297078692,
        "y": 7942.850275
      },
      {
        "x": 8009.497051686434,
        "y": 7946.888405734331
      },
      {
        "x": 8010.071781162524,
        "y": 7954.638459498454
      },
      {
        "x": 8004.564101386353,
        "y": 7955.850275
      },
      {
        "x": 8000.071781162524,
        "y": 7951.6511697432325
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "a6b803b8-ba32-d0ee-99cd-468538588d7e",
    "x": 8021.462713898582,
    "y": 7944.460641348286,
    "width": 9.717104971893605,
    "height": 11.453381035394159,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8023.336769692046,
        "y": 7946.60769425824
      },
      {
        "x": 8031.179818870475,
        "y": 7944.460641348286
      },
      {
        "x": 8031.034228878345,
        "y": 7946.264958350651
      },
      {
        "x": 8029.719172744195,
        "y": 7954.358609498454
      },
      {
        "x": 8021.462713898582,
        "y": 7955.91402238368
      },
      {
        "x": 8021.694857700357,
        "y": 7952.917507969794
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "46ff341a-d7c2-bc18-3345-bedc33f4d125",
    "x": 8024.219172744195,
    "y": 7932.070425,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8025.3456886603635,
        "y": 7932.070425
      },
      {
        "x": 8033.6444432681055,
        "y": 7936.108555734331
      },
      {
        "x": 8034.219172744195,
        "y": 7943.858609498454
      },
      {
        "x": 8028.711492968025,
        "y": 7945.070425
      },
      {
        "x": 8024.219172744195,
        "y": 7940.8713197432335
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "0c9eb891-48b8-4dd8-6403-65c1415ee66b",
    "x": 8018.138672744195,
    "y": 7926.148874999999,
    "width": 10,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8019.2651886603635,
        "y": 7926.148874999999
      },
      {
        "x": 8027.5639432681055,
        "y": 7928.94450396992
      },
      {
        "x": 8028.138672744195,
        "y": 7934.309925806621
      },
      {
        "x": 8022.630992968025,
        "y": 7935.148874999999
      },
      {
        "x": 8018.138672744195,
        "y": 7932.241802129929
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8ac7f75a-c167-c3fd-f699-09791f3926af",
    "x": 7998.071781162524,
    "y": 7931.070425,
    "width": 10.456062674948043,
    "height": 13.944892805120617,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8005.297150639013,
        "y": 7931.070425
      },
      {
        "x": 8008.527843837472,
        "y": 7934.76495835065
      },
      {
        "x": 8006.43969359004,
        "y": 7943.459904919893
      },
      {
        "x": 8000.073020354668,
        "y": 7945.0153178051205
      },
      {
        "x": 7998.071781162524,
        "y": 7935.748151139074
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "bca87bbc-9e34-23f4-0521-dd7f67ea13cd",
    "x": 8006.323648113128,
    "y": 7925.148874999999,
    "width": 12.081641637145367,
    "height": 8.429496729600942,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8014.420540647936,
        "y": 7925.148874999999
      },
      {
        "x": 8018.405289750273,
        "y": 7927.26837976911
      },
      {
        "x": 8015.383546632351,
        "y": 7932.256555262895
      },
      {
        "x": 8006.323648113128,
        "y": 7933.5783717296
      },
      {
        "x": 8007.405289750273,
        "y": 7926.458034893415
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "1ab2ef18-5dba-f3e5-a43d-6f32a31efdc8",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 8028.470064552197,
        "y": 7921.722252279998
      },
      {
        "x": 8025.3571045521985,
        "y": 7923.406003191999
      },
      {
        "x": 8022.8124727441955,
        "y": 7926.799457272002
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 2,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "3c3dfd1c-cb05-2bb9-f82b-4d515d365750",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 8011.999032744196,
        "y": 7925.295275000001
      },
      {
        "x": 8009.728865704195,
        "y": 7922.158722039998
      },
      {
        "x": 8005.579650472193,
        "y": 7919.290604536
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 4,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  }
];

app.fileNew();

var reader = new draw2d.io.json.Reader();
reader.unmarshal(app.view,json);

var code = null;
var img  = null;
var customCode=app.getConfiguration("code");
var markdown = app.getConfiguration("markdown");
markdown = markdown?markdown:"";
var writer = new shape_designer.FigureWriter();
try {
    writer.marshal(app.view, "testShape", function (js) {
        code = js;
        try {
            eval(js);
        }
        catch (exc) {
            console.log("Error in shape code. \nRemove error and try it again:\n\n>>    " + exc);
            throw exc;
        }
        var splash = $(
            '<div class="overlay-scale">' +
            '<div id="test_canvas">' +
            '</div>' +
            '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);
        var canvas = new draw2d.Canvas("test_canvas");
        var test = new testShape();
        canvas.add(test, 400, 160);
        canvas.commonPorts.each(function (i, p) {
            p.setVisible(false);
        });

        canvas.getBoundingBox = function () {
            var xCoords = [];
            var yCoords = [];
            this.getFigures().each(function (i, f) {
                var b = f.getBoundingBox();
                xCoords.push(b.x, b.x + b.w);
                yCoords.push(b.y, b.y + b.h);
            });
            var minX = Math.min.apply(Math, xCoords);
            var minY = Math.min.apply(Math, yCoords);
            var width = Math.max(10, Math.max.apply(Math, xCoords) - minX);
            var height = Math.max(10, Math.max.apply(Math, yCoords) - minY);

            return new draw2d.geo.Rectangle(minX, minY, width, height);
        };

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl, base64) {
            img = base64;
            splash.remove();
        }, canvas.getBoundingBox().scale(10, 10));
    });
}
catch(e){
    console.log(e);
    code="";
    img="";
}


