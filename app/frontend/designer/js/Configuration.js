export default {
  fileSuffix: ".shape",
  appName: "Brainbox Designer",
  loginRedirect: "designer",

  backend: {
    user: {
      get:    file => `../api/user/shape/get?filePath=${file}`,
      image:  file => `../shapes/user/${file}`,
      list:   path => `../api/user/shape/list?path=${path}`
    },

    global:{
      get:    file => `../api/global/shape/get?filePath=${file}`,
      image:  file => `../api/global/shape/image?filePath=${file}`,
      list:   path => `../api/global/shape/list?path=${path}`,
      delete:         `../api/global/shape/delete`,
      folder:         `../api/global/shape/folder`,
      save:           `../api/global/shape/save`
    }
  }
}
