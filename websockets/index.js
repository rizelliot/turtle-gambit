const WebS = require("ws")

const wss = new WebS.Server({port:8085})

wss.on("connection", ws =>{
  console.log("yeah")
  ws.on("message", msg => {
    wss.broadcast(JSON.stringify({func:msg.toString()}))

  })
});

wss.broadcast = function broadcast(msg){
    wss.clients.forEach(function each(client) {
      client.send(msg)
    })
}