#!/usr/bin/env node
const express = require('express')
const app = express()
const http = require('http').Server(app)
const { program } = require('commander')
const bodyParser = require('body-parser')
const colors = require('colors')
const io = require('./comm/websocket').connect(http, {path: '/socket.io'})
const mqtt = require('./comm/hive-mqtt').connect(io, "freegroup/brainbox")
const raspi = require("./comm/raspi").connect(io)

program
  .option('--arduino <boolean>','Allow the server to communicate to an Arduino which is connected via USB', false)
  .option('--storage <string>', 'The storage backend to use. Possible values are ["personal", "hosted"]', "personal")
  .option('--folder <string>',  'The storage folder to use if the type of storage supports it', process.env.HOME + "/.brainbox/" )
  .option('--port <number>',    'The port number for the server to use', 7400)


program.parse(process.argv)


console.log("+==========================================================================+")
console.log('| '+'    Welcome to brainbox - the beginning of something awesome'.red+'             |');
console.log("|==========================================================================|")

// application specific configuration settings
//
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
if(program.arduino){
  const arduino = require("./comm/arduino")
  arduino.init(io, runServer)
}
else {
  runServer()
}


// =======================================================================
//
// The main HTTP Server and socket.io run loop. Serves the HTML files
// and the socket.io access point to change/read the GPIO pins if the server
// is running on an Raspberry Pi
//
// =======================================================================
async function  runServer() {
  // provide the  WebApp with this very simple
  // HTTP server. Good enough for an private raspi access
  //
  app.use(express.static(__dirname + '/../frontend'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.get('/', (req, res) => res.redirect('/circuit'));

  await storage.init(app, program)

  console.log("|                                                                          |")
  console.log("| "+"Enabled Features:".bold+"                                                        |")
  console.log("|   "+"Authentication".bold+"                                                         |")
  console.log(`|   [${storage.permissions.authentication.enabled?'X':' '}] Login Screen                                                       |`)
  console.log("|                                                                          |")
  console.log("|   "+"Circuit Simulator".bold+"                                                      |")
  console.log(`|   [${storage.permissions.brains.create?'X'.green:' '}] Save new circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.update?'X'.green:' '}] Update circuit diagrams                                            |`)
  console.log(`|   [${storage.permissions.brains.list  ?'X'.green:' '}] Show all circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.demos ?'X'.green:' '}] Show demo circuit diagrams                                         |`)
  console.log(`|   [${storage.permissions.brains.delete?'X'.green:' '}] Delete a circuit diagrams                                          |`)
  console.log(`|   [${storage.permissions.brains.read  ?'X'.green:' '}] Open a circuit diagrams                                            |`)
  console.log("|                                                                          |")
  console.log("|   "+"Shape Designer".bold+"                                                         |")
  console.log(`|   [${storage.permissions.shapes.create?'X'.green:' '}] Create new shapes                                                  |`)
  console.log(`|   [${storage.permissions.shapes.update?'X'.green:' '}] Change existing shapes                                             |`)
  console.log(`|   [${storage.permissions.shapes.list  ?'X'.green:' '}] Show all shapes                                                    |`)
  console.log(`|   [${storage.permissions.shapes.delete?'X'.green:' '}] Delete an existing shape                                           |`)
  console.log(`|   [${storage.permissions.shapes.read  ?'X'.green:' '}] Using a shape                                                      |`)
  console.log("|                                                                          |")
  console.log("|   "+"Updates".bold+"                                                                |")
  console.log(`|   [${storage.permissions.updates.list?'X'.green:' '}] Show available updates                                             |`)
  console.log(`|   [${storage.permissions.updates.update?'X'.green:' '}] Allow to install available updates                                 |`)
  console.log("|                                                                          |")
  console.log("| "+"Hardware Connection:".bold+"                                                     |")
  console.log(`|   [${program.arduino?'X'.green:' '}] Connect Arduino via USB                                            |`)

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
