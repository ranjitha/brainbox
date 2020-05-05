const shortid = require('shortid')
const {mapUser} = require("./rest-user")

const classroom = require('../../classroom')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@')

// dont't expose sensitive data per accident. Add a
// mapping layer in between before expose the object
function mapData(group) {
  if (Array.isArray(group)) {
    return group.map(data => mapData(data))
  }
  return {
    id: group.id,
    role: group.role,
    joinToken: group.joinToken,
    name: group.name
  }
}

exports.list = (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(403).send("user not logged in")
  } else {
    Promise.all([
      classroom.graph.get({subject: "" + req.user.id, predicate: "owner"})
        .then((groupSPOs) => {
          return Promise.all(groupSPOs.map(spo =>  classroom.groups.findById(spo.object, { role: "owner" })))
        }),
      classroom.graph.get({subject: "" + req.user.id, predicate: "member"})
        .then((groupSPOs) => {
          return Promise.all(groupSPOs.map(spo => classroom.groups.findById(spo.object, { role: "member" })))
        })
    ])
      .then((groups) => {
        res.status(200).send(mapData(groups.flat()))
      })
      .catch(error => {
        res.status(500).send(error)
      })
  }
}

exports.get = (req, res) => {
  classroom.groups.findById(req.params.id)
    .then((group) => {
      return Promise.all([
        // get all users of the group
        classroom.graph.get({ predicate: "member", object: ""+group.id})
          .then((groupSPOs) => {
            return Promise.all(groupSPOs.map(spo => classroom.users.findById(spo.subject)))
          }),
        // the group itself
        Promise.resolve(group)

        // in the future we collect the assignment as well
        // TODO
      ])
    })
    .then( (data)=>{
      group = { members: map(data[0]), ...data[1] }
      res.status(200).send(mapData(group))
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

exports.del = (req, res) => {
  // ensure that the calling user is the owner of the group before we delete them
  //
  classroom.graph.get({subject: req.user.id, predicate: "owner", object: req.params.id})
    .then((rv) => {
      rv.forEach(r => {
        // get ALL relations to the named group
        classroom.graph.get({object: r.object})
          .then((data) => {
            // delete all relations of the group
            return classroom.graph.del(data)
          })
          .then((data) => {
            // delete the group metadata itself from the DB
            return classroom.groups.del(req.params.id)
          })
      })
      res.status(200).send("done")
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

exports.put = (req, res) => {
  let data = req.body
  // it is not allowed to change the id
  delete data.id

  classroom.groups.update(req.params.id, data)
    .then((dataUpdated) => {
      res.status(200).send(mapData(dataUpdated))
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}


exports.join = (req, res) => {
  let data = req.body
  if (!data.joinToken) {
    res.status(400).send("joinToken");
    return
  }

  classroom.groups.findByJoinToken(data.joinToken)
    .then((data) => {
      classroom.graph.put([
        {subject: req.user.id, predicate: "member", object: data.id}
      ])
      res.status(200).send(mapData(data))
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}


exports.post = (req, res) => {
  let data = req.body

  if (!data.name) {
    res.status(400).send("data");
    return
  }

  data.id = shortid.generate()
  data.joinToken = shortid.generate()

  classroom.groups.create(data)
    .then((dataCreated) => {
      // generate the triple in the graph DB to indicate, that I'm the owner
      return classroom.graph.put([{subject: req.user.id, predicate: "owner", object: data.id}])
    })
    .then(() => {
      res.status(200).send(mapData(data))
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
