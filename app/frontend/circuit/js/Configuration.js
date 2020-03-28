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

    user: {
      list:   path => `../backend/user/brain/list?path=${path}`,
      get:    file => `../backend/user/brain/get?filePath=${file}`,
      image:  file => `../backend/user/brain/image?filePath=${file}`,
      del:            `../backend/user/brain/delete`,
      rename:         `../backend/user/brain/rename`,
      save:           `../backend/user/brain/save`,
      folder:         `../backend/user/brain/folder`
    },

    global:{
      list:   path => `../backend/global/brain/list?path=${path}`,
      get:    file => `../backend/global/brain/get?filePath=${file}`,
      image:  file => `../backend/global/brain/image?filePath=${file}`,
      folder:         `../backend/global/brain/folder`
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
    url: "../shapes/global/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

  color: {
    high: "#C21B7A",
    low:  "#0078F2"
  }
};
