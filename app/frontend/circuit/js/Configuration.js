// This configuration file will be overridden if the application
// is provided by a node.js server. In this case we store all
// circuits and shapes on the local node.js server instead of
// using the global available repository.
// Check the special route in the ./server/main.js for this.
//
// This is useful if you want run the DigitalTrainingStudio local on
// RaspberryPi or another IoT device
//
//
export default {
  fileSuffix: ".brain",

  backend: {

    configuration:  `../backend/configuration`,

    file: {
      list:   path       => `../backend/brain/list?path=${path}`,
      get:    file       => `../backend/brain/get?filePath=${file}`,
      image:  file       => `../backend/brain/image?filePath=${file}`,
      del:     `../backend/brain/delete`,
      rename:  `../backend/brain/rename`,
      save:    `../backend/brain/save`
    },

    demo:{
      list:   path       => `../backend/demo/brain/list?path=${path}`,
      get:    file       => `../backend/demo/brain/get?filePath=${file}`,
      image:  file       => `../backend/demo/brain/image?filePath=${file}`
    }
  },

  issues: {
    url:"dddddd"
  },

  designer: {
    url: "../designer/"
  },

  author: {
    url: "../author/"
  },

  updates: {
    url: "../backend/updates",
    shapes: "../backend/updates/shapes"
  },

  shapes: {
    url: "../shapes/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

  color: {
    high: "#C21B7A",
    low:  "#0078F2"
  }
};
