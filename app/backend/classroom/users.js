let db = require("./db").db


let type = "user"
let entity = "users"

exports.findById = function (id, cb) {
  process.nextTick(function () {
    let data = db()
      .get(entity)
      .find({id})
      .value()
    if (data) {
      cb(null, data)
    } else {
      cb(new Error(type + ' ' + id + ' does not exist'))
    }
  })
}

exports.findByUsername = function (username, cb) {
  process.nextTick(function () {
    let data = db()
      .get(entity)
      .find({username})
      .value()
    if (data) {
      return cb(null, data)
    } else {
      return cb(new Error("not found"))
    }
  })
}

exports.all = function (cb) {
  process.nextTick(function () {
    let data = db()
      .get(entity)
      .value()
    if (data) {
      if(Array.isArray(data)){
        return cb(null, data)
      }
      else{
        return cb(null, [data])
      }
    } else {
      return cb(null, [])
    }
  })
}

exports.delete = function (id, cb) {
  process.nextTick(function () {
    db()
      .get(entity)
      .remove({id})
      .write()
    return cb(null)
  })
}

exports.update = function (id, data, cb) {
  process.nextTick(function () {
    let currentData = db()
      .get(entity)
      .find({id})
      .value()
    if (currentData) {
      Object.assign(currentData, data)
      db()
        .get(entity)
        .find({id})
        .assign(currentData)
        .write()
      return cb(null, currentData)
    } else {
      return cp(new Error("unknown " + type), null)
    }
  })
}


exports.create = function (data, cb) {
  process.nextTick(function () {
    bcrypt.hash(data.password, 10, function (err, hash) {
      data.password = hash
      db().get(entity)
        .push(data)
        .write()
      return cb(null, data)
    })
  })
}
