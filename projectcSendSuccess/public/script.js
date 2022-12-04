let cnv;
var webCam;
var webCamImage;
var snap;
var slider;
// let show = true;

var socket = io();

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
        let data ={message: imgData}
        //send the message to the server
        socket.emit('message', data)
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


//recieve the data from the server and do things!!
socket.on("incoming", (data)=>{
    console.log(data);
    let message = data.message;
    document.getElementById("recieve").src = message;
})