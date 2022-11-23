let socket = io("");
// let socket = io("https://abc-socket-hackathon.glitch.me");

var audio = new Audio("audio.mp3");

let others = [];
let myId;
let testMode = true;

//receiveMyId
socket.on('singleId', function(msg) {
  console.log("My ID:", msg.value)
  myId = msg.value
});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function(msg) {
  console.log("updatedClients", msg)
  others = msg.value
});


let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

let textInput0 = document.getElementById("message0");
let textInput1 = document.getElementById("message1");
let textInput2 = document.getElementById("message3");
let textInput3 = document.getElementById("message4");
let textInput4 = document.getElementById("message5");

// allbutme.addEventListener("click", ()=>{
//   let text =textInput0.value;
//   socket.emit("textToAllButMe", {value: text});
//   textInput0.value = "";
// })

randomSingle.addEventListener("click", ()=>{
  let text =textInput0.value;
  socket.emit("textToAllButMe", {value: text});
  textInput0.value = "";
})

//if i recieve someone press button 1
socket.on("text", (msg)=>{
  //console.log(msg.value);
  audio.play();

  let p = document.createElement("p");
  let line = msg.value;
  p.innerHTML = line;
  p.style.fontFamily = "sans-serif";
  p.style.position = "absolute";
  p.style.color = "green";
  p.style.fontSize = Math.floor(10 + Math.random() * 90) +"px";
  p.style.left = Math.random()* window.innerWidth*0.8 + "px";
  p.style.top = Math.random()* window.innerHeight*0.8 + "px";
  document.body.appendChild(p);
})


