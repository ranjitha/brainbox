let db = require("./db").db

exports.findById = function(id, cb) {
  process.nextTick(function() {
    let user = db()
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
    let user = db()
      .get('users')
      .find({ username })
      .value()
    if(user) {
      return cb(null, user)
    }
    else{
      return cb(new Error("not found"))
    }
  })
}

exports.all = function(cb) {
  process.nextTick(function() {
    let users = db()
      .get('users')
      .value()
    return cb(null, users)
  })
}

exports.delete = function(id, cb) {
  process.nextTick(function() {
    db()
      .get('users')
      .remove({ id })
      .write()
    return cb(null)
  })
}

exports.update = function(id, user, cb) {
  process.nextTick(function() {
    let currentUser = db()
      .get('users')
      .find({ id })
      .value()
    if(currentUser) {
      Object.assign(currentUser, user)
      db()
        .get('users')
        .find({id})
        .assign(currentUser)
        .write()
      return cb(null, currentUser)
    }
    else{
      return cp(new Error("unknown user"), null)
    }
  })
}


exports.create = function(user, cb) {
  process.nextTick(function() {
    bcrypt.hash(user.password, 10, function(err, hash) {
      user.password = hash
      db().get("users")
        .push(user)
        .write()
      return cb(null, user)
    })
  })
}
