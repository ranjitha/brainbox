export default {
  fileSuffix: ".shape",
  backend: {
    shape: {
      list: "/backend/shape/list",
      image: file  =>  `./shapes/${file}`,
      get:   file  =>  `../backend/shape/get?filePath=${file}`,
      save: "/backend/shape/save"
    }
  }
}
