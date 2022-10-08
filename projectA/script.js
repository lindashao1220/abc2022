let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;

function topStar(){
  let ranX = Math.random()*sh - 200;
  let y = sh;
  let win = window.open("star", "_blank", "width=30, height=30, left="+y+", top="+ranX);

  win.addEventListener("load", ()=>{
    let interval = setInterval(()=>{

      // increasing the value of x in every interval
      y-=20;

      if(y < 10){
        clearInterval(interval);
        // and close the star window
        win.close();
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


// function stop(){
//   // clear the interval and show star button / hide stop button
//   clearInterval(inter);
//   button.style.display = "block";
//   // enough.style.display = "none";
// }

// add listeners, done!
button.addEventListener("click", shootingStars);
// enough.addEventListener("click", stop);
