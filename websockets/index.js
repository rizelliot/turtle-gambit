const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 1081 });

wss.on('connection', function connection(ws) {

    console.log('turtle connected!')

    ws.on("message",msg=>{
      wss.broadcast(JSON.stringify({func:msg.toString()}))
  });

  ws.send('something');
});

wss.broadcast = function broadcast(msg){
  wss.clients.forEach(function each(client) {
      client.send(msg)
  });
};