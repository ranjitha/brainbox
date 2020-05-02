let db = require("./db").db

let type = "group"
let entity = "groups"


exports.findByUser = function (user, cb) {
  process.nextTick(function () {
    let data = db()
      .get(entity)
      .find({ownerId: user.id})
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

exports.findById = function (id, cb) {
  process.nextTick(function () {
    let result = db()
      .get(entity)
      .find({id})
      .value()
    if (result) {
      cb(null, result)
    } else {
      cb(new Error(type + ' ' + id + ' does not exist'))
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
    let current = db()
      .get(entity)
      .find({id})
      .value()
    if (current) {
      Object.assign(current, data)
      db()
        .get(entity)
        .find({id})
        .assign(current)
        .write()
      return cb(null, current)
    } else {
      return cp(new Error("unknown " + type), null)
    }
  })
}

exports.create = function (data, cb) {
  process.nextTick(function () {
    db().get(entity)
      .push(data)
      .write()
    return cb(null, data)
  })
}
