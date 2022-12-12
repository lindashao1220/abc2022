// let butt = document.getElementById("butt");
// butt.addEventListener("click", ()=>{
//   console.log("noashdjab")
// });

// let popup = document.getElementById("popup");

// function openPopup(){
//   console.log("clicked")
//   popup.classList.add("open-popup");
// }

// function closePopup(){
//   popup.classList.remove("open-popup");
// }

var socket = io();
console.log("hiiii:)))");

let cnv;
var webCam;
var webCamImage;
var snap;
var slider;
// let show = true;

const texts =[];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
  canvas.id("cnv");
  
  webCam = createCapture(VIDEO);
  // webCam.size(200,80);
  // webCam.position(0,0);
  webCam.hide();
}



let name; 
socket.on("socketInfo", data=>{
  name = data.part;
  console.log("nihaoooo")
})


function draw() {
  push();
  translate(width,0);
  scale(-1, 1);
  image(webCam, 0, 0, 400, 300);
  pop();
  if (name == "nose"){
    noFill();
    beginShape();
    curveVertex(161,101);
    curveVertex(161,101);
    curveVertex(162,194);
    curveVertex(112,271);
    curveVertex(112,271);
    strokeWeight(10);
    endShape();
    noFill();
    beginShape();
    curveVertex(230, 100);
    curveVertex(230, 100);
    curveVertex(229, 183);
    curveVertex(282, 266);
    curveVertex(282,271);
    strokeWeight(10);
    endShape();
  }else if(name == "lefteye" || name == "righteye"){
    noFill();
    beginShape();
    curveVertex(58,156);
    curveVertex(58,156);
    curveVertex(89, 138);
    curveVertex(121, 126);
    curveVertex(158, 119);
    curveVertex(203, 116);
    curveVertex(250, 121);
    curveVertex(289, 130);
    curveVertex(325, 139);
    curveVertex(325, 139);
    strokeWeight(10);
    endShape();
    
    noFill();
    beginShape();
    curveVertex(65, 212);
    curveVertex(65, 212);
    curveVertex(120, 181);
    curveVertex(184, 167);
    curveVertex(252, 170);
    curveVertex(314, 195);
    curveVertex(275,236);
    curveVertex(206,251);
    curveVertex(114,240);
    curveVertex(65, 212);
    curveVertex(65, 212);
    strokeWeight(10);
    endShape();
  }else if(name == "mouth"){
    strokeWeight(7)
    noFill();
    beginShape();
    curveVertex(45, 179);
    curveVertex(45, 179);
    curveVertex(92, 164);
    curveVertex(141, 151);
    curveVertex(179, 146);
    curveVertex(198, 158);
    curveVertex(216, 144);
    curveVertex(252, 150);
    curveVertex(296, 164);
    curveVertex(344,179);
    curveVertex(380,179);
    endShape();
    noFill();
    beginShape();
    curveVertex(45, 179);
    curveVertex(45, 179);
    curveVertex(93, 207);
    curveVertex(159, 217);
    curveVertex(211, 221);
    curveVertex(267, 210);
    curveVertex(317, 194);
    curveVertex(344, 179);
    curveVertex(344, 179);
    endShape();
    noFill();
    beginShape();
    curveVertex(45, 179);
    curveVertex(45, 179);
    curveVertex(117, 176);
    curveVertex(187, 179);
    curveVertex(237, 178);
    curveVertex(344, 179);
    curveVertex(344, 179);
    endShape();  
  }else if(name == "forehead"){
    strokeWeight(7)
    noFill();
    beginShape();
    curveVertex(23, 255);
    curveVertex(23, 255);
    curveVertex(57, 170);
    curveVertex(100,124);
    curveVertex(155, 91);
    curveVertex(231, 93);
    curveVertex(304, 134);
    curveVertex(336, 176);
    curveVertex(372, 255);
    curveVertex(372, 255);
  
    endShape();
  }
}


function takePhoto(){
  // saveFrames('selfie', 'png', 1, 1);
  console.log("hiiii");
  image(webCam, 0, 0, 400, 300);
  // show = false;
  let imgData = imageToDataUri(document.getElementsByTagName("video")[0], 400/2, 300/2);
  console.log(imgData);
  document.getElementById("output").src = imgData;


  //send message to the server
  let sendbutton = document.getElementById("send");
  sendbutton.addEventListener("click", ()=>{
    console.log("clicked");
        //send name message to the server(package up the data)
        let data ={imgChange: imgData}
        //send the message to the server
        socket.emit('imgChange', data)
        console.log(data)
})
}


let btn = document.getElementById("button");
btn.addEventListener("click", ()=>{
  takePhoto();
})


function imageToDataUri(img, width, height) {
  // create an off-screen canvas
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
  // set its dimension to target size
  canvas.width = width;
  canvas.height = height;
  // draw source image into the off-screen canvas:
  ctx.drawImage(img, 0, 0, width, height);
  // encode image to data-uri with base64 version of compressed image
  return canvas.toDataURL();
}











let myId;
// document.getElementById("myId").innerText = socket.id;

socket.on("socketInfo", data=>{
    myId = data.id;
    // document.getElementById("myId").innerText = data.id;
    // document.getElementById("myRoom").innerText = data.roomIdx;
    // document.getElementById("myPart").innerText = data.part;

  texts.push("PHOTO",
  "COLLAGE",
  "照片",
  "拼贴",
  "Please",
  "take",
  "a picture",
  "of your " + data.part,
  ":)")   

})


socket.on("lefteye", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve1").src = message;


})

socket.on("righteye", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve2").src = message;


})

socket.on("mouth", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve3").src = message;

})


socket.on("forehead", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve4").src = message;
  
})

socket.on("nose", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve5").src = message;
})


socket.on("update", (data)=>{
  console.log(data.lefteye);
if(data.lefteye == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve1").src = data.lefteye;
  console.log("case2")
}

if(data.lefteye == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve1").src = data.lefteye;
  console.log("case2")
}

if(data.righteye == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve2").src = data.righteye;
  console.log("case2")
}

if(data.forehead == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve4").src = data.forehead;
  console.log("case2")
}

if(data.nose == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve5").src = data.nose;
  console.log("case2")
}

if(data.mouth == undefined){
  console.log("case1")
}else{
  document.getElementById("recieve3").src = data.mouth;
  console.log("case2")
}
})

function changedColor(e){
    console.log(e.target.value);
    document.getElementById(myId).style.backgroundColor = e.target.value;

    // inform room:
    socket.emit("colorChange", e.target.value);
}



socket.on("onlineInYourRoom", inMyRoom=>{
    console.log("inMyRoom", inMyRoom)
    inMyRoom.forEach(member=>{
        let li = document.createElement("li");
        li.innerText = member.part + ": ";
        li.id = member.id;
        if(member.id == myId){
            li.innerText += "🫵";
        }else{
           li.innerText += "👤";
        }
        document.getElementById("onlineList").appendChild(li);
    })
   
})

socket.on("newPerson", newPerson=>{
    console.log("new person!", newPerson);
    let li = document.createElement("li");
    li.id = newPerson.id;
    li.innerText = newPerson.part + ": 👤";
    document.getElementById("onlineList").appendChild(li);
})


socket.on("personLeft", id=>{
    console.log("person left!", id);
    let elm = document.getElementById(id)
    elm.parentNode.removeChild(elm);
})



/*reference: https://alvarotrigo.com/blog/css-text-animations/ */
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();



