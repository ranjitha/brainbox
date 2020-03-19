#!/usr/bin/env node
const express = require('express')
const app = express()
const http = require('http').Server(app)
const { program } = require('commander');
const bodyParser = require('body-parser')

const io = require('./comm/websocket').connect(http, {path: '/socket.io'})
const mqtt = require('./comm/hive-mqtt').connect(io, "freegroup/brainbox")
const raspi = require("./comm/raspi").connect(io)

program
  .option('--storage <string>',       'The storage bakcend to use. Possible values are ["personal", "hosted"]', "personal")
  .option('--port <number>', 'The port number for the server to use', 7400)


program.parse(process.argv)


console.log("+==========================================================================+")
console.log('| Welcome to brainbox - the beginning of something awesome                 |');
console.log("|==========================================================================|")

// application specific configuration settings
//
const arduino = require("./comm/arduino")
const storage = require("./storage/"+program.storage)


// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))



// Determine the IP:PORT to use for the http server
//
const address = require("./network")


// =======================================================================
// Check how many Arduinos are connected to serial port and
// ask to user which one to use.
//
// =======================================================================
arduino.init(io, runServer);


// =======================================================================
//
// The main HTTP Server and socket.io run loop. Serves the HTML files
// and the socket.io access point to change/read the GPIO pins if the server
// is running on an Raspberry Pi
//
// =======================================================================
function runServer() {
  // provide the  WebApp with this very simple
  // HTTP server. Good enough for an private raspi access
  //
  app.use(express.static(__dirname + '/../frontend'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.get('/', (req, res) => res.redirect('/circuit'));

  storage.init(app)
  console.log("|                                                                          |")
  console.log("| Enabled Features:                                                        |")
  console.log("|   Authentication                                                         |")
  console.log(`|   [${storage.permissions.authentication.enabled?'X':' '}] Login Screen                                                       |`)
  console.log("|                                                                          |")
  console.log("|   Circuit Simulator                                                      |")
  console.log(`|   [${storage.permissions.brains.create?'X':' '}] Save new circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.update?'X':' '}] Update circuit diagrams                                            |`)
  console.log(`|   [${storage.permissions.brains.list  ?'X':' '}] Show all circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.demos ?'X':' '}] Show demo circuit diagrams                                         |`)
  console.log(`|   [${storage.permissions.brains.delete?'X':' '}] Delete a circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.read  ?'X':' '}] Open a circuit diagrams                                            |`)
  console.log("|                                                                          |")
  console.log("|   Shape Designer                                                         |")
  console.log(`|   [${storage.permissions.shapes.create?'X':' '}] Create new shapes                                                  |`)
  console.log(`|   [${storage.permissions.shapes.update?'X':' '}] Change existing shapes                                             |`)
  console.log(`|   [${storage.permissions.shapes.list  ?'X':' '}] Show all shapes                                                    |`)
  console.log(`|   [${storage.permissions.shapes.delete?'X':' '}] Delete an existing shape                                           |`)
  console.log(`|   [${storage.permissions.shapes.read  ?'X':' '}] Using a shape                                                      |`)
  console.log("|                                                                          |")
  console.log("|   Updates                                                                       |")
  console.log(`|   [${storage.permissions.updates.list?'X':' '}] Show available updates                                             |`)
  console.log(`|   [${storage.permissions.updates.update?'X':' '}] Allow to install available updates                                 |`)

  console.log("|==========================================================================|")

  io.on('connection', socket => {
    socket.emit('permissions', storage.permissions);
  })

  http.listen(program.port, function () {
    console.log('| System is up and running. Copy the URL below and open this               |');
    console.log('| in your browser: http://' + address + ':' + program.port + '/               ');
    console.log('|                  http://localhost:' + program.port + '/                    ');
    console.log("============================================================================")
  });
}
