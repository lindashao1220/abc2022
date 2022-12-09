var socket = io();
console.log("hiiii:)))");

let cnv;
var webCam;
var webCamImage;
var snap;
var slider;
// let show = true;



function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
  canvas.id("cnv");
  
  webCam = createCapture(VIDEO);
  webCam.size(100,80);
  webCam.position(100,50);
  webCam.hide();
}


function draw() {
// if (show == true){
  image(webCam, 0, 0, 400, 300);
// }
}

function takePhoto(){
  // saveFrames('selfie', 'png', 1, 1);
  console.log("hiiii");
  image(webCam, 0, 0, 400, 300);
  // show = false;
  let imgData = imageToDataUri(document.getElementsByTagName("video")[0], 400/3, 300/3);
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
    document.getElementById("myId").innerText = data.id;
    document.getElementById("myRoom").innerText = data.roomIdx;
    document.getElementById("myPart").innerText = data.part;
})



socket.on("incoming", (newImg)=>{
  console.log(newImg);
  let message = newImg.imgChange;
  console.log(message);
  document.getElementById("recieve1").src = message;
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
        li.innerText = member.id;
        li.id = member.id;
        li.style.backgroundColor = member.color;
        if(member.id == myId){
            li.innerText += " (you)";
            let colorPicker = document.createElement("input");
            colorPicker.setAttribute("type", "color");
            colorPicker.setAttribute("value", member.color);
            colorPicker.className = "colorPicker";
            colorPicker.addEventListener("change", changedColor);
            li.appendChild(colorPicker);
        }
        document.getElementById("onlineList").appendChild(li);
    })
   
})



socket.on("newPerson", newPerson=>{
    console.log("new person!", newPerson);
    let li = document.createElement("li");
    li.id = newPerson.id;
    li.innerText = newPerson.id;
    li.style.backgroundColor = newPerson.color;
    document.getElementById("onlineList").appendChild(li);
})

socket.on("newColor", person=>{
    document.getElementById(person.id).style.backgroundColor = person.color;
})

socket.on("personLeft", id=>{
    console.log("person left!", id);
    let elm = document.getElementById(id)
    elm.parentNode.removeChild(elm);
})
