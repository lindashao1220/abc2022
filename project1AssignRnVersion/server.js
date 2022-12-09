const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("../project2AssignRnVersion2Copy/node_modules/socket.io/dist");
const io = new Server(server);


app.use(express.static('public'));


let connected = [];
let rooms = [];
let maxPerRoom = 5;


function allocateRoomIdxFor(newPersonId){
    //!!!help find the room that still have seats for the clients
    let roomWithSpot = rooms.findIndex(room=>{
        return room.members.length < maxPerRoom && room.members.length != 0 
    })
    console.log("allocating", roomWithSpot);
    if(roomWithSpot == -1){
        let newIdx = rooms.length
        rooms.push({
            name: "room-"+newIdx,
            members: [newPersonId],
            parts:{
              lefteye:'',
              righteye:'',
              mouth:'',
              forehead:'',
              nose:''
            }
        })
        return newIdx;
    }else{
        rooms[roomWithSpot].members.push(newPersonId);
        return roomWithSpot;
    }
  }


io.on('connection', (socket) => {
//   all we want to do with the client, we need to do in here.
    console.log('------------------------------------');
    console.log('[+] a user connected', socket.id);
    let clientObject = {
        id: socket.id,
        roomIdx: allocateRoomIdxFor(socket.id),
        color: getRandomColor(),
    }


    let num = clientObject.roomIdx;
    console.log("hiiiiiiiii", num);

    clientObject.face= getFacePart()
    
    socket.join('room-'+clientObject.roomIdx);
    socket.emit('socketInfo', clientObject);



    function getFacePart(){
      console.log("hiiiiiiiii", num);
      let id = socket.id;
      if(rooms[num].members.indexOf(id) == 0){
       return "lefteye"
      }
      if(rooms[num].members.indexOf(id) == 1){
        return "righteye"
      }
      if(rooms[num].members.indexOf(id) == 2){
        return "mouth"
      }
      if(rooms[num].members.indexOf(id) == 3){
        return "forehead"
      }
      if(rooms[num].members.indexOf(id) == 4){
        return "nose"
      }
    }

  
    
    connected.push(clientObject);
    console.log("connected", connected)
    console.log("rooms", rooms);

    // tell socket who else is in their room
    socket.emit('onlineInYourRoom', rooms[clientObject.roomIdx].members.map(id=>connected.find(elm=>elm.id == id)));
    // tell others in their room that they have a new member
    socket.to('room-'+clientObject.roomIdx).emit("newPerson", clientObject)

    // connected.forEach(id=>{
    //     let copy = [...connected];
    //     io.to(id).emit("updatedClients", {value: copy.filter(otherid=>otherid!=id)});
    // })

    socket.on("colorChange", newColor=>{
        console.log('------------------------------------');
        console.log("✨", socket.id, "changed their color", newColor);
        // update color in connected array
        let elm = connected.find(el=>el.id == socket.id)
        elm.color = newColor;
        console.log("connected", connected)




        // tell rest of the room about the updated color
        socket.to('room-'+clientObject.roomIdx).emit("newColor", elm)


    })




    socket.on('disconnect', () => {
        console.log('------------------------------------');
        console.log('[-] user disconnected', socket.id);
        let idx = connected.findIndex(elm=>elm.id==socket.id)
        let roomIdx = connected[idx].roomIdx;
        let memberIdx = rooms[roomIdx].members.findIndex(elm => elm==socket.id);
        rooms[roomIdx].members.splice(memberIdx, 1);
        if(rooms[roomIdx].members.length == 0 && roomIdx == rooms.length-1){
            rooms.splice(roomIdx, 1);
        }else if(rooms[roomIdx].members.length != 0){
            // let other in this room know 
            socket.to('room-'+clientObject.roomIdx).emit("personLeft", socket.id)
        }
        connected.splice(idx, 1);

        console.log("connected", connected)
        console.log("rooms", rooms);

        // // console.log(connected)
        // connected.forEach(id=>{
        //   let copy = [...connected];
        //   io.to(id).emit("updatedClients", {value: copy.filter(otherid=>otherid!=id)});
        // })
    });


});


server.listen(3000, () => {
  console.log('listening on *:3000');
});


//return random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  
//  //righteye
//  socket.on("message", (data)=>{
//   console.log(data);
//   socket.broadcast.emit("incoming", data);
//  })

//  //lefteye
//  socket.on("message1", (data)=>{
//   console.log(data);
//   socket.broadcast.emit("incoming1", data);
//  })


  
