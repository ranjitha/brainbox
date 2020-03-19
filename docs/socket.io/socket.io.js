// running in a none node.js/socket.io backend. Just a simple WebServer
// In this case we provide a Socket.io mock object without any functionality
//

function io(){
  // patch the URL for the backend to deliver predefined files
  // for the static website with a nodeJS backend
  //
  if(window.conf.backend.file) {
    window.conf.backend.file.list  = function(path) { return '../brain/index.json'}
    window.conf.backend.file.get   = function(file) { return '../brain/'+file }
    window.conf.backend.file.image = function()     { return '../brain/img' }
  }

  if(window.conf.backend.demo) {
    window.conf.backend.demo.list  = function(path) { return '../brain/index.json'}
    window.conf.backend.demo.get   = function(file) { return '../brain/'+file }
    window.conf.backend.demo.image = function(file) { return '../brain/'+file.replace(".brain", ".png") }
  }

  if(window.conf.backend.shape) {
    window.conf.backend.shape.get = function (file) {return './shapes/' + file}
  }

  $("#statusRaspi").addClass("disabled")

  return {
        emit:function(){

        },
        on:function(event, callback){
            // fake the successful connection in the serverless enviroment
            //
            if(event==="connect"){
                setTimeout(callback,5);
            }

            // if we run in a headless/serverless mode like on the gh-pages/docs site
            // in this case we fire a special event to indicate that we can remove the
            // file-open / file/save button
            if(event==="permissions"){
              setTimeout(function(){
                callback({
                  authentication:{
                    enabled: false
                  },
                  updates:{
                    update: false,
                    list: false
                  },
                  brains:{
                    create: false,
                    update: false,
                    delete: false,
                    read: true,
                    list: false,
                    demos: true
                  },
                  shapes:{
                    create: false,
                    update: false,
                    delete: false,
                    read: true,
                    list: false
                  }
                })
              },1);
            }
        }
    };
}
