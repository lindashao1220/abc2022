let cnv;
var webCam;
var webCamImage;
var snap;
var slider;
let show = true;

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
if (show == true){
  image(webCam, 0, 0, 400, 300);
}
}

function takePhoto(){
  // saveFrames('selfie', 'png', 1, 1);
  console.log("hiiii");
  image(webCam, 0, 0, 400, 300);
  show = false;
  let c = document.getElementById("cnv");
  console.log(c);
  var data = c.toDataURL('image/png');
  console.log(data);
}


let btn = document.getElementById("button");
btn.addEventListener("click", ()=>{
  takePhoto();
})

