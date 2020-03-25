export default {
  fileSuffix: ".sheet",
  backend: {
    sheet: {
      list: "/backend/sheet/list",
      image: file  =>  `./sheet/${file}`,
      get:   file  =>  `../backend/sheet/get?filePath=${file}`,
      save: "/backend/sheet/save"
    }
  },

  shapes: {
    url: "./shapes/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

}
