const shortid = require('shortid')

const classroom = require('../../classroom')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@')

function mapUser(user) {
  if (Array.isArray(user)) {
    return user.map(data => mapUser(data))
  }
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName
  }
}

// dont't expose sensitive data per accident. Add a
// mapping layer in between before expose the object
function mapGroup(group) {
  if (Array.isArray(group)) {
    return group.map(data => mapGroup(data))
  }
  return {
    id: group.id,
    role: group.role,
    joinToken: group.joinToken,
    members: group.members,
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
          return Promise.all(groupSPOs.map(spo => classroom.groups.findById(spo.object, {role: "owner"})))
        }),
      classroom.graph.get({subject: "" + req.user.id, predicate: "member"})
        .then((groupSPOs) => {
          return Promise.all(groupSPOs.map(spo => classroom.groups.findById(spo.object, {role: "member"})))
        })
    ])
      .then((groups) => {
        res.status(200).send(mapGroup(groups.flat()))
      })
      .catch(error => {
        res.status(500).send(error)
      })
  }
}

exports.get = (req, res) => {
  Promise.all([
    // get all users of the group
    classroom.graph.get({predicate: "member", object: "" + req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.users.findById(spo.subject)))
      }),
    // the group itself
    classroom.graph.get({subject: "" + req.user.id, predicate: "owner", object: req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.groups.findById(spo.object, {role: "owner"})))
      }),
    classroom.graph.get({subject: "" + req.user.id, predicate: "member", object: req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.groups.findById(spo.object, {role: "member"})))
      })

    // in the future we collect the assignment as well
    // TODO
  ])
    .then((data) => {
      // either you are "owner" (data[1]) or "member" (data[2])
      // we merge the and use the first element....anyhow - the array contains only ONE element.
      //
      let group = {members: mapUser(data[0]), ...data[1].concat(data[2])[0]}
      res.status(200).send(mapGroup(group))
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
      res.status(200).send(mapGroup(dataUpdated))
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
      res.status(200).send(mapGroup(data))
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
      res.status(200).send(mapGroup(data))
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
