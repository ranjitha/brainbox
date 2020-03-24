import 'codemirror/lib/codemirror.css'
import CodeMirror from 'codemirror'
import 'codemirror/mode/gfm/gfm.js'
import 'codemirror/addon/selection/active-line.js'
let md = require('markdown-it')();
md.use(require("markdown-it-asciimath"));

export default class Toolbar {

  constructor(editorId, previewId, content) {
    this.editorId = editorId
    this.previewId = previewId

    this.editor = CodeMirror.fromTextArea(document.getElementById(this.editorId), {
      lineNumbers: true,
      mode: 'gfm',
      theme: 'default',
      viewportMargin: Infinity,
      autofocus: true,
      lineWrapping: true,
      styleActiveLine: {nonEmpty: true},
    })

    this.editor.setValue(content)
    this.editor.on('changes', this.debounce(() => {
      this.updatePreview()
    }, 500, false))
    this.updatePreview()
  }

  updatePreview(){
    let markdown = this.editor.getValue()
    let result = md.render(markdown)
    document.getElementById(this.previewId).innerHTML = result
  }

  getValue(){
    return this.editor.getValue()
  }

  debounce(func, wait, immediate) {
    let timeout
    return function () {
      let context = this
      let args = arguments
      let later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }
}
