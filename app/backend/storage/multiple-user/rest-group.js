const shortid = require('shortid')

const classroom = require('../../classroom')

// dont't expose sensitive data per accident. Add a
// mapping layer in between before expose the object
function mapData(group){
  if(Array.isArray(group) ){
    return group.map( data =>  mapData(data) )
  }
  return {
    id: group.id,
    name: group.name
  }
}

exports.list = (req, res) => {
  if(!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(403).send("user not logged in")
  }
  else{
    classroom.groups.findByUser(req.user, (error, data)=>{
      res.status(200).send(mapData(data))
    })
  }
}

exports.get = (req, res) => {
  classroom.groups.findById(req.params.id, (error, data)=>{
    res.status(200).send(mapData(data))
  })
}

exports.delete = (req, res) => {
  classroom.groups.findById(req.params.id, (error, data)=>{
    if(data.ownerId === req.user.id) {
      classroom.groups.delete(req.params.id, (error) => {
        res.status(200).send("done")
      })
    }
    else {
      res.status(403).send("permission denied")
    }
  })
}

exports.put = (req, res) => {
  let data = req.body
  // it is not allowed to change the id
  delete data.id
  classroom.groups.update(req.params.id, data, (error, dataUpdated)=>{
    res.status(200).send(mapData(dataUpdated))
  })
}

exports.post = (req, res) => {
  let data = req.body

  if(!data.name){ res.status(400).send("data"); return  }

  data.id = shortid.generate()
  data.ownerId = req.user.id
  classroom.groups.create(data, (error, dataCreated) => {
    res.status(200).send(mapData(dataCreated))
  })
}
