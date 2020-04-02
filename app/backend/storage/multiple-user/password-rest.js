const NodeCache = require( "node-cache" )
const uuid = require('uuid/v4')
const db = require('./db')
const bcrypt = require("bcrypt");

const passwordResetRequestCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } )


exports.resetRequest = (req, res)=>{
  let user = req.body
  let id = uuid()

  passwordResetRequestCache.set(id, user)
  res.send(uuid())
}

exports.reset = (req, res)=>{
  let request = req.body
  let id = request.id
  let password = request.password

  let user = passwordResetRequestCache.take(id)
  if ( user === undefined ){
    res.status(404).send("Password Request link timeout")
  }
  else{
    bcrypt.hash(password, 10, function(err, hash) {
      user.password = hash
      db.update(user.id, user, (error, user)=>{
        if(error){ res.status(412); return}
        res.send("done")
      })
    })
  }
}
