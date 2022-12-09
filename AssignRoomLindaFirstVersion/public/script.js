var socket = io();
console.log("hiiii:)))hi")

socket.on('connectToRoom',function(data){
    document.body.innerHTML = '';
    document.write(data.mes);
 });
