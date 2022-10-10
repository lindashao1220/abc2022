let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;

let ranX = Math.random(0.7,)*sh;
let xPos1 = ranX +80;
let xPos2 = ranX -50;
let y = sh;

//let windowNames = ["popup0/index.html", "popup1/index.html", "popup2/index.html", "popup3/index.html"];
// let xPos = [20,220,340,700,800,100];
// let yPos = [20,220,340,400,500,100];

alert("Hello! Firework is coming:)");

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


function shootingStars(){
  let inter;
  button.style.display = "none";
  inter = setInterval(topStar(),200);
}

button.addEventListener("click", shootingStars);


function openMoreWindow(){
    let win0 = window.open("popup0/index.html", "", "width=25, height=25, left="+xPos1+", top="+2);
    let win1 = window.open("popup1/index.html", "", "width=25, height=25, left="+xPos1+", top="+190);
    let win2 = window.open("popup2/index.html", "", "width=25, height=25, left="+xPos2+", top="+2);
    let win3 = window.open("popup3/index.html", "", "width=25, height=25, left="+xPos2+", top="+190);

       //slower down the for loop
        const sleep = (time) => {
          return new Promise((resolve) => setTimeout(resolve, time))
        }

        const biggerWindow = async () => {
          for(let i=0; i<8; i++){
          await sleep(500);
          console.log(10+i*5);

            // ???  for(let i=0; i<windowNames.length; i++){
            //  console.log("win"+[i]);
            //  let windows = "win"+[i];
            //}
        win0.resizeBy(3+i*1, 3+1*i);
        win1.resizeBy(3+i*1, 3+1*i);
        win2.resizeBy(3+i*1, 3+1*i);
        win3.resizeBy(3+i*1, 3+1*i);
        }
      }
      setTimeout(biggerWindow(), 4000)

    setTimeout(function(){
      win0.close();
      win1.close();
      win2.close();
      win3.close();
  }, 4000)
  }


if(y < 60){
  openMoreWindow();
}
