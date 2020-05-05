const path = require('path')

let levelup = require('levelup')
let leveldown = require('leveldown')
let levelgraph = require('levelgraph')

let dir = process.env.HOME + "/.brainbox/"
let file = path.join(dir, "classroom", "graph", path.sep)

db = levelgraph(levelup(leveldown(file)))


new Promise ((resolve, reject) => {
  db.get({
    subject: "1"
  }, function(error, rv){
    if(error) reject(error)
    else resolve(JSON.parse("["+new String(rv).toString()+"]"))
  })
}).then( (data)=>{
  console.log(data)
})
