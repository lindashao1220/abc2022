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


let connected = [];
let rooms = [];
let userNum = -1;

io.on('connection', (socket) => {
  // if (rooms.length==0 || rooms[rooms.length-1].members.length>=5){
  //   rooms.push({
  //     roomIndex: rooms.length,
  //     members:[socket.id]
  //   })
  // }else{
  //   rooms[rooms.length-1].members.push(socket.id)
  //   }
  if (rooms.length==0){
    rooms.push({
      roomIndex: rooms.length,
      members:[socket.id],
      parts: {
        lefteye:'',
        righteye:'',
        mouth:'',
        forehead:'',
        nose:''
      }
    })
  }

        if (rooms[rooms.length - 1].members.length <= 5) {
          rooms[rooms.length - 1].members.push(socket.id);
          let objParts = rooms[rooms.length - 1].parts
          console.log(Object.keys(objParts));
          for (i of Object.keys(objParts)){
            if (objParts.i==''){
              rooms[rooms.length - 1].parts[i]=socket.id;
            }
         
            console.log(objParts[i]);
            }
        }else{
    rooms.push({
      roomIndex:rooms.length,
      members:[socket.id]
    })
  }
  
  console.log("assiging room", rooms.length-1);
  console.log(rooms)


  let roomNum = rooms.length-1;

  console.log("roomNum", roomNum)
  console.log('a user connected', socket.id);
  socket.join("room-"+roomNum);
  let data = {mes: "You are in room no. "+ roomNum}
  io.sockets.to("room-"+roomNum).emit('connectToRoom', data);

  connected.push({
    userName: socket.id,
    room: roomNum
  });

 socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    socket.leave("room-"+roomNum);
    connected = connected.filter(client => client.userName != socket.id);
    console.log(connected);
 });

console.log(connected);

});


server.listen(3000, () => {
  console.log('listening on *:3000');
});