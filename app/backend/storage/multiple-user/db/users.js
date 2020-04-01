const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const makeDir = require('make-dir')
const path = require('path')
const fs = require('fs')
const bcrypt = require("bcrypt");


let db = null
let salt = null

let defaultUsers = [
  { id: 1, username: 'admin', password: 'secret', displayName: 'Admin', role:"admin", email: 'admin@example.com' },
  { id: 2, username: 'jack',  password: 'secret', displayName: 'Jack',  role:"user",  email: 'jack@example.com' },
  { id: 3, username: 'jill',  password: 'secret', displayName: 'Jill',  role:"user",  email: 'jill@example.com' }
]

exports.init = async function(app, args){
  let userDBDir  = path.join(args.folder, "users", path.sep)
  let userDBFile = path.join(userDBDir, 'db.json')
  let initialRun = !fs.existsSync(userDBFile)

  console.log(initialRun)

  // Ensure that the required storage folder exists
  //
  makeDir(userDBDir)

  const adapter = new FileSync(userDBFile)
  db = low(adapter)

  // Set some defaults (required if your JSON file is empty)
  db.defaults({ users: [] })
    .write()

  // setup some default users if we start the first time
  //
  if(initialRun){
    defaultUsers.forEach( (user) => {
      bcrypt.hash(user.password, 10, function(err, hash) {
        user.password = hash
        db.get("users")
          .push(user)
          .write()
      })
    })
  }
}


exports.findById = function(id, cb) {
  process.nextTick(function() {
    let user = db
      .get('users')
      .find({ id })
      .value()
    if (user) {
      cb(null, user)
    } else {
      cb(new Error('User ' + id + ' does not exist'))
    }
  })
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    let user = db
      .get('users')
      .find({ username })
      .value()
    return cb(null, user)
  })
}
