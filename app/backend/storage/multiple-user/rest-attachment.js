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
    owner: group.owner,
    members: group.members,
    name: group.name
  }
}

exports.list = (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(403).send("user not logged in")
  } else {
    let groupId = req.params.groupId
    let userId = "" + req.user.id
    Promise.all([
      classroom.graph.get({subject: userId, predicate: "owner", object: groupId}),
      classroom.graph.get({subject: userId, predicate: "member", object: groupId})
    ])
      .then((groups) => {
        if(groups.length===0) {
          throw "user is not member of the requested group"
        }
        return classroom.graph.get({subject:groupId, predicate:"hasAttachment"})
          .then((spos)=>{
            return Promise.all(spos.map(spo => classroom.attachment.get(spo.object)))
          })
      })
      .then( attachments => {
        res.status(200).send(attachments)
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
        return Promise.all(groupSPOs.map(spo => classroom.users.get(spo.subject)))
      }),
    // get the owner of the group
    classroom.graph.get({predicate: "owner", object: "" + req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.users.get(spo.subject)))
      }),
    // the group itself either as as owner
    classroom.graph.get({subject: "" + req.user.id, predicate: "owner", object: req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.groups.get(spo.object, {role: "owner"})))
      }),
    // or as member.
    classroom.graph.get({subject: "" + req.user.id, predicate: "member", object: req.params.id})
      .then((groupSPOs) => {
        return Promise.all(groupSPOs.map(spo => classroom.groups.get(spo.object, {role: "member"})))
      })
  ])
    .then((data) => {
      // either you are "owner" (data[2]) or "member" (data[3])
      // we merge the and use the first element....anyhow - the array contains only ONE element.
      //
      let group = {members: mapUser(data[0]), owner: mapUser(data[1][0]), ...data[2].concat(data[3])[0]}
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
      if(rv.length===0){
        return Promise.reject("not owner of group")
      }
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
      res.status(403).send(error)
    })
}


exports.post = (req, res) => {
  let data = req.body

  if (!data.file) {
    res.status(400).send("file");
    return
  }

  if (!data.group) {
    res.status(400).send("group");
    return
  }

  if (!data.type) {
    res.status(400).send("type");
    return
  }

  data.id = shortid.generate()

  // allow only that we set the logged in user as reference. Otherwise it is null
  //
  if(data.user !== req.user.id) {
    data.user = null
  }

  classroom.attachments.create({id:data.id, user:data.user, file: data.file, type: data.type})
    .then(() => {
      // generate the triple in the graph DB to indicate, that the user has assigned a document to the group
      //
      return classroom.graph.put({subject: data.group, predicate: "hasAttachment", object: data.id})
    })
    .then(() => {
      req.params.id = data.id
      exports.get(req, res)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
