export default {
  fileSuffix: ".shape",
  backend: {
    shape: {
      list: "/backend/shape/list",
      get:  file=>`../backend/shape/get?filePath=${file}`,
      save:"/backend/shape/save"
    }
  }
}
