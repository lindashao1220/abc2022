console.log("hi");


// we can use socket io code beacue tjhe library has been included
let socket = io();

socket.on("count",(number)=>{
    console.log("received count:",number)
    document.getElementById("p1").innerHTML = "Now we have " + number + " people in the room";
  })