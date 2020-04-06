import "font-awesome/css/font-awesome.css"
import "../less/index-page.less"
import AuthorPage from "../../_common/js/AuthorPage"


function getParam(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
  let regexS = "[\\?&]" + name + "=([^&#]*)"
  let regex = new RegExp(regexS)
  let results = regex.exec(window.location.href)
  // the param isn't part of the normal URL pattern...
  //
  if (results === null) {
    // maybe it is part in the hash.
    //
    regexS = "[\\#]" + name + "=([^&#]*)"
    regex = new RegExp(regexS)
    results = regex.exec(window.location.hash)
    if (results === null) {
      return null
    }
  }
  return results[1]
}


$(window).load(function () {
  let globalSheet = getParam("global")
  let authorPage = new AuthorPage("#authorContent", globalSheet)

  authorPage.render()
  setTimeout(()=>{
    mathMLdone = true
  },2000)
})
