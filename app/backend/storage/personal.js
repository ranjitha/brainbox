const generic = require("./_base_")
const update = require("../update")
const path = require('path')
const express = require('express')
const {thumbnail} = require("../converter/thumbnail")
const colors = require('colors')
const makeDir = require('make-dir');


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
      demos:  {
        create: true,
        update: true,
        delete: true,
        read: true,
        list: true
      }
    },
    shapes:{
      create: true,
      update: true,
      delete: true,
      read: true,
      list: true
    },
    sheets:{
      create: true,
      update: true,
      delete: true,
      read: true,
      list: true,
      demos: {
        create: true,
        update: true,
        delete: true,
        read: true,
        list: true
      }
    }
  },


  init: function(app, args){
    const brainsHomeDir   = args.folder + "brains/"
    const sheetsHomeDir   = args.folder + "sheets/"
    const sheetsAppDir    = path.normalize(__dirname + '/../../repository/sheets/')
    const shapesAppDir    = path.normalize(__dirname + '/../../repository/shapes/')
    const brainsAppDir    = path.normalize(__dirname + '/../../repository/brains/')

    // Ensure that the required storage folder exists
    //
    makeDir(sheetsAppDir)
    makeDir(brainsHomeDir)

    console.log("| You are using the "+"'personal'".bold.green+" file storage engine.                        |")
    console.log("| This kind of storage is perfect for personal usage.                      |")
    console.log("| You can choose another storage with the '--storage' command line argument|")
    console.log("|                                                                          |")
    console.log("| User File Locations:                                                     |")
    console.log("|    Circuit: "+brainsHomeDir)
    console.log("|    Author: "+sheetsHomeDir)

    // =================================================================
    // Handle user Author files
    //
    // =================================================================
    app.get('/backend/sheet/list',    (req, res) => module.exports.listFiles(sheetsHomeDir,      req.query.path, res))
    app.get('/backend/sheet/get',     (req, res) => module.exports.getJSONFile(sheetsHomeDir,    req.query.filePath, res))
    app.get('/backend/sheet/desc',    (req, res) => module.exports.getBase64Image(sheetsHomeDir, req.query.filePath, res))
    app.post('/backend/sheet/delete', (req, res) => module.exports.deleteFile(sheetsHomeDir,     req.body.filePath, res))
    app.post('/backend/sheet/rename', (req, res) => module.exports.renameFile(sheetsHomeDir,     req.body.from, req.body.to, res))
    app.post('/backend/sheet/save',   (req, res) => module.exports.writeSheet(sheetsHomeDir,     req.body.filePath, req.body.content, res))


    // =================================================================
    // Handle user brain files
    //
    // =================================================================
    app.get('/backend/brain/list',    (req, res) => module.exports.listFiles(brainsHomeDir,      req.query.path, res))
    app.get('/backend/brain/get',     (req, res) => module.exports.getJSONFile(brainsHomeDir,    req.query.filePath, res))
    app.get('/backend/brain/image',   (req, res) => module.exports.getBase64Image(brainsHomeDir, req.query.filePath, res))
    app.post('/backend/brain/delete', (req, res) => module.exports.deleteFile(brainsHomeDir,     req.body.filePath, res))
    app.post('/backend/brain/rename', (req, res) => module.exports.renameFile(brainsHomeDir,     req.body.from, req.body.to, res))
    app.post('/backend/brain/save',   (req, res) => module.exports.writeBrain(brainsHomeDir,      req.body.filePath, req.body.content, res))


    // =================================================================
    // Handle pre-installed brain/sheet files
    //
    // =================================================================
    app.get('/backend/demo/brain/list',  (req, res) => module.exports.listFiles(brainsAppDir, req.query.path, res))
    app.get('/backend/demo/brain/get',   (req, res) => module.exports.getJSONFile(brainsAppDir, req.query.filePath, res))
    app.get('/backend/demo/brain/image', (req, res) => module.exports.getBase64Image(brainsAppDir, req.query.filePath, res))
    app.get('/backend/demo/sheet/list',  (req, res) => module.exports.listFiles(sheetsAppDir, req.query.path, res))
    app.get('/backend/demo/sheet/get',   (req, res) => module.exports.getJSONFile(sheetsAppDir, req.query.filePath, res))

    // =================================================================
    // Handle system shape files
    //
    // =================================================================
    app.use('/shapes', express.static(shapesAppDir));
    app.get('/backend/shape/list', (req, res) => module.exports.listFiles(shapesAppDir, req.query.path, res))
    app.get('/backend/shape/get', (req, res) => module.exports.getJSONFile(shapesAppDir, req.query.filePath, res))
    app.get('/backend/shape/image', (req, res) => module.exports.getBase64Image(shapesAppDir, req.query.filePath, res))
    app.post('/backend/shape/delete', (req, res) => module.exports.deleteFile(shapesAppDir, req.body.filePath, res))
    app.post('/backend/shape/rename', (req, res) => module.exports.renameFile(shapesAppDir, req.body.from, req.body.to, res))
    app.post('/backend/shape/save', (req, res) => module.exports.writeShape(shapesAppDir, req.body.filePath, req.body.content, req.body.commitMessage, res))


    // =================================================================
    // Handle system update files
    //
    // =================================================================
    app.get('/backend/updates/shapes', (req, res) => update.getLatestShapeRelease(res))
    app.post('/backend/updates/shapes', async (req, res) => update.upgradeTo(shapesAppDir, req.body.url, res))
  },

  listFiles: generic.listFiles,
  getJSONFile: generic.getJSONFile,
  getBase64Image: generic.getBase64Image,
  renameFile: generic.renameFile,
  deleteFile: generic.deleteFile,
  writeFile: generic.deleteFile,

  writeShape: function (baseDir, subDir, content, reason, res ){
    const io = require('../comm/websocket').io

    module.exports.writeFile(baseDir, subDir, content, res, (err)=>{
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

  writeBrain: function (baseDir, subDir, content, res ) {
    module.exports.writeFile(baseDir, subDir, content, res, (err) => {
      const io = require('../comm/websocket').io
      io.sockets.emit("brain:generated", {
        filePath: subDir
      })
    })
  },

  writeSheet: function (baseDir, subDir, content, res ) {
    module.exports.writeFile(baseDir, subDir, content, res)
  }

}

