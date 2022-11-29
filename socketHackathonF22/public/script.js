// let socket = io("");
let socket = io("https://abc-socket-hackathon.glitch.me");

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
// let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}


//textToAllButMe
let textInput0 = document.getElementById("message0");
let allbutme = document.getElementById("allbutme");
allbutme.addEventListener("click", ()=>{
  let text =textInput0.value;
  console.log("sending")
  socket.emit("textToAllButMe", {value: text});
  textInput0.value = "";
})

socket.on("text", (msg)=>{
  console.log(msg.value);
  audio.play();
  let p = document.createElement("p");
  let line = msg.value;
  p.innerHTML = line;
  p.style.fontFamily = "sans-serif";
  p.style.position = "absolute";


  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColor1 = Math.floor(Math.random()*16777211).toString(16);
  document.body.style.backgroundColor = "#" + randomColor1;
  p.style.color =  "#" + randomColor;;
  // p.style.color = "green";
  p.style.fontSize = Math.floor(10 + Math.random() * 70) +"px";
  p.style.left = Math.random()* window.innerWidth * 0.8 + "px";
  p.style.top = Math.random()* window.innerHeight * 0.8 + "px";
  document.body.appendChild(p);
})



var src = document.getElementById("check");
var img = document.createElement("img");

img.src = "check.png";
// boolean1ToAllButMe
let checkBox = document.getElementById("vehicle1");
checkBox.addEventListener("change", ()=>{
  let boolean1 = checkBox.checked;
  //console.log(boolean1);
  socket.emit("boolean1ToAllButMe", {value: boolean1});
})

socket.on("boolean1", (msg)=>{
  console.log(msg.value);
  // console.log(msg);
  // audio.play();
  if(msg.value == true){
  img.style.width = 210+"px";
  src.appendChild(img);
  document.body.style.backgroundColor = "white";
  }
  if(msg.value == false){
    document.getElementById("check").innerHTML = "";
    }
})


// valueToAllButMe
let slider = document.getElementById("slider");
slider.addEventListener("input", ()=>{
let rangeInput = document.getElementById("slider").value;
// console.log(rangeInput);
socket.emit("valueToAllButMe", {value:rangeInput});
});
socket.on("value", (msg)=>{
  console.log(msg.value);
  let angle = msg.value;
  console.log(angle)
  src.style.transform = "rotate(" + angle + "deg)";

})