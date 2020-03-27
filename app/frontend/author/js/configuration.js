export default {
  fileSuffix: ".sheet",
  backend: {
    file: {
      list:   path       => `../backend/sheet/list?path=${path}`,
      get:    file       => `../backend/sheet/get?filePath=${file}`,
      desc:  file       => `../backend/sheet/desc?filePath=${file}`,
      del:     `../backend/sheet/delete`,
      rename:  `../backend/sheet/rename`,
      save:    `../backend/sheet/save`
    },

    demo:{
      list:   path       => `../backend/demo/sheet/list?path=${path}`,
      get:    file       => `../backend/demo/sheet/get?filePath=${file}`,
      desc:  file       => `../backend/demo/sheet/desc?filePath=${file}`
    }
  },

  shapes: {
    url: "../shapes/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

  color: {
    high: "#C21B7A",
    low:  "#0078F2"
  },

  designer: {
    url: "../designer/"
  },

  simulator: {
    url: "../circuit/"
  }

}
