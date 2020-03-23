export default {
  fileSuffix: ".sheet",
  backend: {
    sheet: {
      list: "/backend/sheet/list",
      image: file  =>  `./sheet/${file}`,
      get:   file  =>  `../backend/sheet/get?filePath=${file}`,
      save: "/backend/sheet/save"
    }
  }
}
