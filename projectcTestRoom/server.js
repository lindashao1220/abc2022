const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/left-eye', (req, res) => {
      res.redirect("/left-eye");
}
)

app.get('/right-eye', (req, res) => {
  res.redirect("/right-eye");
}
)

app.get('/masterpiece', (req, res) => {
  res.redirect("/masterpiece");
}
)

let userNum = 0;
//general event listener for any socket connection
io.on('connection', (socket) => {
  //code inside is for individual
  //for each we console
  console.log('a user connected', socket.id);
  userNum++;
  console.log(userNum);


  //for each we see if it disconnects
 socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    userNum--;
    console.log(userNum);
 });


//righteye
 socket.on("message", (data)=>{
  console.log(data);
  socket.broadcast.emit("incoming", data);
 })

 //lefteye
 socket.on("message1", (data)=>{
  console.log(data);
  socket.broadcast.emit("incoming1", data);
 })


});

server.listen(3000, () => {
  console.log('listening on *:3000');
});