let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;

let ranX = Math.random(0.4,0.6)*sh;
let y = sh;


let windowNames = ["popup0/index.html", "popup1/index.html", "popup2/index.html", "popup3/index.html"];
let xPos = [20,220,340,700,800,100];
let yPos = [20,220,340,400,500,100];
let openWindows = [];

function topStar(){
  let win = window.open("star", "_blank", "width=30, height=30, left="+y+", top="+ranX);

  win.addEventListener("load", ()=>{
    let interval = setInterval(()=>{
      y-=20;
      if(y < 60){
        clearInterval(interval);
        win.close();
        openMoreWindow();
      }else{
        win.moveTo(ranX, y);
      }
    }, 50)
  })
}

let inter;

function shootingStars(){
  button.style.display = "none";
  inter = setInterval(topStar(),200);
}

button.addEventListener("click", shootingStars);


function openMoreWindow(){
  for(let i=0; i<windowNames.length; i++){
    let url = windowNames[i];
    let win = window.open(url, "", "width=150, height=200, left="+ranX+", top="+(i*200));
    setTimeout(function(){
      win.close();
  }, 1500)
  }
}

if(y < 60){
  openMoreWindow();

}
