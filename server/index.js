
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080' })

server.on('connection', socket => { 

  socket.on('message', message => {

    socket.send(`Message from server ${message}, Time: ${Date()}`);

  });

  // setInterval(() => {
  //   console.log("ping")
  //   socket.ping();
  //   // socket.send(`heartbeat,  Time: ${Date()}`);
  // }, 10000);

});