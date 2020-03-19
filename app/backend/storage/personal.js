const generic = require("./filesystem")
const update = require("../update")
const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const {thumbnail} = require("../converter/thumbnail")

const brainboxHomeDir = process.env.HOME + "/.brainbox/"
const brainsHomeDir   = brainboxHomeDir + "brains/"
const shapeAppDir     = path.normalize(__dirname + '/../../shapes/')
const brainsAppDir    = path.normalize(__dirname + '/../../brains/')

// Ensure that the required storage folder exists
//
if (!fs.existsSync(brainboxHomeDir)) {
  fs.mkdirSync(brainboxHomeDir)
}
if (!fs.existsSync(brainsHomeDir)) {
  fs.mkdirSync(brainsHomeDir)
}

// Storage backend for the personal usage
//
module.exports = {
  // the permissions are exposed to the UI. The UI can enable/disable features regardings
  // this settings
  permissions: {
    authentication:{
      enabled: false
    },
    updates:{
      update: true,
      list: true
    },
    brains:{
      create: true,
      update: true,
      delete: true,
      read: true,
      list:  true,
      demos:  true
    },
    shapes:{
      create: true,
      update: true,
      delete: true,
      read: true,
      list: true
    }
  },


  init: function(app){
    console.log("| You are using a storage engine which save files on your local disc.      |")
    console.log("| This kind of storage is perfect for personal usage.                      |")
    console.log("| You can choose another storage with the '--storage' command line argument|")
    console.log("|                                                                          |")
    console.log("| File Location:                                                           |")
    console.log("|    "+brainsHomeDir)

    // =================================================================
    // Handle brain files
    //
    // =================================================================
    app.get('/backend/brain/list',    (req, res) => module.exports.listFiles(brainsHomeDir,      req.query.path, res))
    app.get('/backend/brain/get',     (req, res) => module.exports.getJSONFile(brainsHomeDir,    req.query.filePath, res))
    app.get('/backend/brain/image',   (req, res) => module.exports.getBase64Image(brainsHomeDir, req.query.filePath, res))
    app.post('/backend/brain/delete', (req, res) => module.exports.deleteFile(brainsHomeDir,     req.body.filePath, res))
    app.post('/backend/brain/rename', (req, res) => module.exports.renameFile(brainsHomeDir,     req.body.from, req.body.to, res))
    app.post('/backend/brain/save',   (req, res) => module.exports.writeBrain(brainsHomeDir,      req.body.filePath, req.body.content, res))


    // =================================================================
    // Handle EXAMPLE brain files
    //
    // =================================================================
    app.get('/backend/demo/list',  (req, res) => module.exports.listFiles(brainsAppDir, req.query.path, res))
    app.get('/backend/demo/get',   (req, res) => module.exports.getJSONFile(brainsAppDir, req.query.filePath, res))
    app.get('/backend/demo/image', (req, res) => module.exports.getBase64Image(brainsAppDir, req.query.filePath, res))


    // =================================================================
    // Handle update files
    //
    // =================================================================
    app.get('/backend/updates/shapes', (req, res) => update.getLatestShapeRelease(res))
    app.post('/backend/updates/shapes', async (req, res) => update.upgradeTo(shapeAppDir, req.body.url, res))


    // =================================================================
    // Handle shape files
    //
    // =================================================================
    app.use('/circuit/shapes', express.static(shapeAppDir));
    app.get('/backend/shape/list', (req, res) => module.exports.listFiles(shapeAppDir, req.query.path, res))
    app.get('/backend/shape/get', (req, res) => module.exports.getJSONFile(shapeAppDir, req.query.filePath, res))
    app.get('/backend/shape/image', (req, res) => module.exports.getBase64Image(shapeAppDir, req.query.filePath, res))
    app.post('/backend/shape/delete', (req, res) => module.exports.deleteFile(shapeAppDir, req.body.filePath, res))
    app.post('/backend/shape/rename', (req, res) => module.exports.renameFile(shapeAppDir, req.body.from, req.body.to, res))
    app.post('/backend/shape/save', (req, res) => module.exports.writeShape(shapeAppDir, req.body.filePath, req.body.content, req.body.commitMessage, res))
  },

  listFiles: generic.listFiles,
  getJSONFile: generic.getJSONFile,
  getBase64Image: generic.getBase64Image,
  renameFile: generic.renameFile,
  deleteFile: generic.deleteFile,
  writeFile: (baseDir, subDir, content, res, callback ) => {
    generic.writeFile(baseDir, subDir, content, res, (subDir, err)=>{
      res.setHeader('Content-Type', 'application/json')
      res.send(`{ "filePath": ${subDir} }`)
      callback(subDir,err)
    })
  },

  writeShape:  function (baseDir, subDir, content, reason, res ){
    const io = require('../comm/websocket').io

    generic.writeShape(baseDir, subDir, content, res, (err)=>{
      // inform the browser that the processing of the
      // code generation is ongoing
      //
      io.sockets.emit("shape:generating", {
        filePath: subDir
      })

      // create the js/png/md async to avoid a blocked UI
      //
      thumbnail(baseDir, subDir)

      io.sockets.emit("shape:generated", {
        filePath: subDir,
        imagePath: subDir.replace(".shape", ".png"),
        jsPath: subDir.replace(".shape", ".js")
      })

      // commit the shape to the connected github backend
      // (if configured)
      update.commitShape(baseDir+subDir, subDir, reason)
    })
  },

  writeBrain:  function (baseDir, subDir, content, res ) {
    generic.writeBrain(baseDir, subDir, content, res, (err) => {
      const io = require('../comm/websocket').io
      io.sockets.emit("brain:generated", {
        filePath: filePath
      })
    })
  }
}

