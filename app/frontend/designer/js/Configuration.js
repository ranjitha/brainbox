export default {
  fileSuffix: ".shape",
  appName: "Brainbox Designer",
  loginRedirect: "./designer/",

  backend: {
    user: {
      get:    file => `../backend/user/shape/get?filePath=${file}`,
      image:  file => `../shapes/user/${file}`,
      list:   path => `../backend/user/shape/list?path=${path}`,
      save:           "../backend/user/shape/save"
    },

    global:{
      get:    file => `../backend/global/shape/get?filePath=${file}`,
      image:  file => `../backend/global/shape/image?filePath=${file}`,
      list:   path => `../backend/global/shape/list?path=${path}`,
      folder:         `../backend/global/shape/folder`
    }
  },


  useradmin: {
    url: "../user"
  },

  simulator: {
    url: "../circuit/"
  },

  author: {
    url: "../author/"
  }
}
