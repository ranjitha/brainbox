export default {
  fileSuffix: ".sheet",
  appName: "Brainbox Author",
  loginRedirect: "author",

  backend: {
    shared: {
      get:    file  => `../api/shared/sheet/get?filePath=${file}`,
      save:            `../api/shared/sheet/save`,
    },
    user: {
      list:   path  => `../api/user/sheet/list?path=${path}`,
      get:    file  => `../api/user/sheet/get?filePath=${file}`,
      image:  file  => `../_common/images/files_markdown.svg`,
      delete:          `../api/user/sheet/delete`,
      rename:          `../api/user/sheet/rename`,
      save:            `../api/user/sheet/save`,
      folder:          `../api/user/sheet/folder`
    },

    global:{
      list:   path  => `../api/global/sheet/list?path=${path}`,
      get:    file  => `../api/global/sheet/get?filePath=${file}`,
      image:  file  => `../_common/images/files_markdown.svg`,
      delete:          `../api/global/sheet/delete`,
      rename:          `../api/global/sheet/rename`,
      save:            `../api/global/sheet/save`,
      folder:          `../api/global/sheet/folder`
    }
  },

  shapes: {
    url: "../shapes/global/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

  color: {
    high: "#C21B7A",
    low:  "#0078F2"
  }

}
