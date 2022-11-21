const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//general event listener forany socket connection
io.on('connection', (socket) => {
  //code inside is for individual
  //for each we console
  console.log('a user connected', socket.id);

  //for each we see if it disconnects
 socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
 });

 socket.on("message", (data)=>{
  console.log(data)

  //io: send to all the clients
  io.emit("incoming", data);
 })

});


server.listen(3000, () => {
  console.log('listening on *:3000');
});