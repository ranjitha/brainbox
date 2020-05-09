export default {
  appName: "Brainbox Groups",
  loginRedirect: "groups",


  sheet: {
      user: {
        list: path => `../api/user/sheet/list?path=${path}`,
        image: file => `../_common/images/files_markdown.svg`,
        folder: `../api/user/sheet/folder`
      },

      global: {
        list: path => `../api/global/sheet/list?path=${path}`,
        image: file => `../_common/images/files_markdown.svg`,
        folder: `../api/global/sheet/folder`
      }
  }
}
