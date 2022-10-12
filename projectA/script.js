let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;

// let ranX = Math.random(0.6,0.7)*sw;
// let ranX1 = Math.random(0.4,0.45)*sw;
let ranX = 400;
let ranX1 = 700;
let xPos1 = ranX +80;
let xPos2 = ranX - 50;
let xPos3 = ranX1 + 80;
let xPos4 = ranX1 - 50;
let y = sh;

//let windowNames = ["popup0/index.html", "popup1/index.html", "popup2/index.html", "popup3/index.html"];
// let xPos = [20,220,340,700,800,100];
// let yPos = [20,220,340,400,500,100];

//alert("Hello! Firework is coming:)");

function topStar(){
  let win = window.open("star", "_blank", "width=30, height=30, top="+y+", left ="+ranX);
  let Win = window.open("star1", "_blank", "width=5, height=250, top="+y+", left ="+ranX1);

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

  Win.addEventListener("load", ()=>{
    let interval = setInterval(()=>{
      y-=30;
      if(y < 500){
        clearInterval(interval);
        Win.close();
        openMoreWindow1();
        openMoreWindow2();
        openMoreWindow3();
        openMoreWindow4();
      }else{
        Win.moveTo(ranX1, y);
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

function openMoreWindow1(){
  let win0 = window.open("window0/index.html", "", "width=40, height=40, left=700, top=500");
  // console.log(win0.screenLeft)
  let intervalCount = 0;
  let angle = Math.PI;

  win0.addEventListener("load",()=>{
    let countedInterval = setInterval(()=>{
    let radius = 400;
    let x = radius * Math.cos(angle) + screen.width - 300;
    let y = radius * Math.sin(angle) + screen.height - 300;
    console.log(win0.screenLeft)
    // console.log("1",x,y); 
    if(intervalCount > 9){
      clearInterval(countedInterval);
      win0.close();
    }else{
      win0.moveTo(x , y);
      //  console.log("boom!", intervalCount, x, y);
    }
    intervalCount++;
    angle = angle + Math.PI/14;
  }, 400)
})
}

function openMoreWindow2(){
  let win1 = window.open("window1/index.html", "", "width=40, height=40, left=700, top=650");
  // console.log(win1.screenLeft)

  let intervalCount = 0;
  let angle1 = -Math.PI/2;

win1.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 400;
  let x = radius * Math.cos(angle1) + screen.width - 300 - radius;
  let y = radius * Math.sin(angle1) + screen.height - 300 + radius + 100;
  console.log(win1.screenLeft)
  // console.log("2",x,y); 
  if(intervalCount > 4){
    clearInterval(countedInterval);
    win1.close();
  }else{
    win1.moveTo(x , y);
    //  console.log("boom!", intervalCount, x, y);
  }
  intervalCount++;
  angle1 = angle1 + Math.PI/14;
}, 400)
})
}

function openMoreWindow3(){
  let win2 = window.open("window2/index.html", "", "width=40, height=40, left=570, top=500");
  let intervalCount = 0;
  let angle2 = 2*Math.PI;

win2.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 400;
  let x = radius * Math.cos(angle2) + screen.width - 300 - 2 * radius -100;
  let y = radius * Math.sin(angle2) + screen.height - 300 ;
  console.log(win2.screenLeft);
  // console.log("2",x,y); 
  if(intervalCount > 11){
    clearInterval(countedInterval);
    win2.close();
  }else{
    win2.moveTo(x , y);
  }
  intervalCount++;
  angle2 = angle2 - Math.PI/14;
}, 400)

})
}

function openMoreWindow4(){
  let win3 = window.open("window3/index.html", "", "width=40, height=40, left=570, top=650");
  let intervalCount = 0;
  let angle3 = 3*Math.PI/2;

win3.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 400;
  let x = radius * Math.cos(angle3) + screen.width - 300 - radius -100;
  let y = radius * Math.sin(angle3) + screen.height - 300 + radius;
  console.log(win3.screenLeft);
  // console.log("2",x,y); 
  if(intervalCount > 4){
    clearInterval(countedInterval);
    win3.close();
  }else{
    win3.moveTo(x , y);
  }
  intervalCount++;
  angle3 = angle3 - Math.PI/14;
}, 400)
})
}



//up and down firework
// function openMoreWindow1(){
//   let win0 = window.open("window0/index.html", "", "width=40, height=40, left="+xPos3+", top="+2);
//   // let win1 = window.open("window1/index.html", "", "width=40, height=40, left="+xPos3+", top="+190);
//   // let win2 = window.open("window2/index.html", "", "width=40, height=40, left="+xPos4+", top="+2);
//   // let win3 = window.open("window3/index.html", "", "width=40, height=40, left="+xPos4+", top="+190);
//   let intervalCount = 0;
//   let angle = Math.PI;

//   win0.addEventListener("load",()=>{
//     let countedInterval = setInterval(()=>{
//     console.log(intervalCount)
//     // let minus = Math.sin(intervalCount * 100);
//     // let height = screen.height;
//     // let pos1 = height - minus;
//     let radius = 400;
//     let x = radius * Math.cos(angle) + screen.width + 500;
//     let y = radius * Math.sin(angle) + screen.height ;

//     if(intervalCount > 15){
//       clearInterval(countedInterval);
//       win0.close();
//     }else{
//       win0.moveTo(x , y);
//        console.log("boom!", intervalCount, x, y);
//     }
//     intervalCount++;
//     angle = angle + Math.PI/14;
//   }, 500)
// })
// }
  

  // let intervalCount = 0

  // let countedInterval = setInterval(()=>{
  //   console.log("boom!", intervalCount)
  //   if(intervalCount > 7){
  //     clearInterval(countedInterval)
  //   }
  //   intervalCount++;
  // }, 2000)