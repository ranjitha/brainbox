const shortid = require('shortid')

const db = require('./db')

function mapUser(user){
  // dont't expose passwords or other sensible data to the outer world
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    displayName: user.displayName,
    role: user.role
  }
}

// each backend storage with authentication MUST have an "userinfo" endpoint
//
exports.userinfo = (req, res) => {
  if(!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(403).send("user not logged in")
  }
  else{
    res.send(mapUser(req.user))
  }
}

exports.list = (req, res) => {
  db.users.all((error, users)=>{
    users = users
      .filter( u => u.username!==null)
      .map( u => mapUser(u))
    res.status(200).send(users)
  })
}

exports.get = (req, res) => {
  db.users.findById(req.params.id, (error, user)=>{
    res.status(200).send(mapUser(user))
  })
}

exports.delete = (req, res) => {
  db.users.delete(req.params.id, (error)=>{
    res.status(200).send("done")
  })
}


exports.put = (req, res) => {
  let user = req.body
  // it is not allowed to change the username or the id
  delete user.username
  delete user.id
  db.users.update(req.params.id, user, (error, userUpdated)=>{
    res.status(200).send(mapUser(userUpdated))
  })
}


exports.post = (req, res) => {
  let user = req.body
  user.id = shortid.generate()
  db.users.create(user, (error, userCreated)=>{
    res.status(200).send(mapUser(userCreated))
  })
}

