const db = require('./db')

exports.list = (req, res) => {
  db.users.all((error, users)=>{
    res.status(200).send(users)
  })
}

exports.get = (req, res) => {
  db.users.findById(req.params.id, (error, user)=>{
    res.status(200).send(user)
  })
}

exports.delete = (req, res) => {
  db.users.delete(req.params.id, (error)=>{
    res.status(200).send("done")
  })
}

exports.put = (req, res) => {
  let user = JSON.stringify(req.body)
  db.users.update(req.params.id, user, (error, userUpdated)=>{
    res.status(200).send(userUpdated)
  })
}


exports.post = (req, res) => {
  let user = JSON.stringify(req.body)
  db.users.create(user, (error, userCreated)=>{
    res.status(200).send(userCreated)
  })
}

