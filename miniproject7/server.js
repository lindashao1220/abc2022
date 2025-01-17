const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let userNum = 0;

app.use(express.static('public'));
  

  io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    userNum++;
    io.emit("count",userNum);
  
    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
      userNum--;
      io.emit("count",userNum);
    });
    console.log(userNum);
  });
  
  
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });