const makeDir = require('make-dir')
const path = require('path')
const fs = require('fs')

let levelup = require('levelup')
let leveldown = require('leveldown')
let levelgraph = require('levelgraph')

let db = null

function spo(subject, predicate, object){
  return db.put([{
    subject,
    predicate,
    object
  }])
}

exports.init = function (app, args) {
  let dbDir = path.join(args.folder, "classroom", "graph", path.sep)
  let initialRun = !fs.existsSync(dbDir)

  // Ensure that the required storage folder exists
  //
  makeDir(dbDir)

  db = levelgraph(levelup(leveldown(dbDir)))
}


exports.setOwner = function(group, user){
  return spo(user.id, "owner", group.id)
}
