var socket = io();

socket.on("incoming", (data)=>{
  console.log(data);
  let message = data.message;
  document.getElementById("recieve").src = message;
})

socket.on("incoming1", (data)=>{
  console.log(data);
  let message = data.message1;
  document.getElementById("recieve1").src = message;
})