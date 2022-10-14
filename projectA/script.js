let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;

let ranX =  300;

let ranX1 = screen.width * 0.6;//Math.random(0.55,0.6);//0.6;
let ranY1 = screen.height * 0.3;//Math.random(0.2,0.4)//0.3;

let ranX2 = screen.width * 0.3;//Math.random(0.55, 0.6);//0.3;
let ranY2 = screen.height * 0.2;//Math.random(0.2, 0.4)//0.2;

// let ranX3 = screen.width * 0.3;
// let ranY3 = screen.height * 0.2;


let xPos1 = ranX +80;
let xPos2 = ranX - 50;
let xPos3 = ranX1 + 80;
let xPos4 = ranX1 - 50;
let y = sh;


var audio = new Audio('firework.mp3');

alert("Hello! Firework is coming:)");


function topStar(){
  let win = window.open("star", "_blank", "width=30, height=30, top="+y+", left ="+ranX);
  let Win = window.open("star1", "_blank", "width=5, height=250, top="+ranY1+", left ="+ranX1);

  win.addEventListener("load", ()=>{
    let interval = setInterval(()=>{
      y-=20;
      if(y < 60){
        clearInterval(interval);
        win.close();
        openMoreWindow();
        //topStar1();
      }else{
        win.moveTo(ranX, y);
      }
    }, 50)
  })

  Win.addEventListener("load", ()=>{
    let interval = setInterval(()=>{
      y-=30;
      if(y < ranY1){
        clearInterval(interval);
        Win.close();
        openMoreWindow1();
        openMoreWindow2();
        openMoreWindow3();
        openMoreWindow4();
        audio.play();
        //topStar1();
      }else{
        Win.moveTo(ranX1, y);
      }
    }, 50)
  })
}

// function shootingStars(){
//   let inter;
//   button.style.display = "none";
//   inter = setInterval(topStar(),200);
// }

button.addEventListener("click", topStar);

  // let intervalCount = 0

  // let countedInterval = setInterval(()=>{
  //   console.log("boom!", intervalCount)
  //   if(intervalCount > 7){
  //     clearInterval(countedInterval)
  //   }
  //   intervalCount++;
  // }, 2000)


  function openMoreWindow(){
    let win0 = window.open("popup0/index.html", "", "width=25, height=25, left="+xPos1+", top="+2);
    let win1 = window.open("popup1/index.html", "", "width=25, height=25, left="+xPos1+", top="+190);
    let win2 = window.open("popup2/index.html", "", "width=25, height=25, left="+xPos2+", top="+2);
    let win3 = window.open("popup3/index.html", "", "width=25, height=25, left="+xPos2+", top="+190);

    let intervalCount = 0;

    let countedInterval = setInterval(()=>{
    console.log("boom!", intervalCount);
    win0.resizeBy(3+intervalCount*1, 3+1*intervalCount);
    win1.resizeBy(3+intervalCount*1, 3+1*intervalCount);
    win2.resizeBy(3+intervalCount*1, 3+1*intervalCount);
    win3.resizeBy(3+intervalCount*1, 3+1*intervalCount);
    if(intervalCount > 6){
     clearInterval(countedInterval);
    win0.close();
    win1.close();
    win2.close();
    win3.close();
    }
    intervalCount++;
  }, 500)
  }
  
  
function openMoreWindow1(){
  let win0 = window.open("window0/index.html", "", "width=40, height=40, left="+(ranX1+70)+", top="+(ranY1-70)+"");
  //console.log(win0.screenLeft)
  let intervalCount = 0;
  let angle = Math.PI;

  win0.addEventListener("load",()=>{
    let countedInterval = setInterval(()=>{
      let radius = 100;

      let x = radius * Math.cos(angle) + ranX1 + 70 + radius; // + 0.1 * screen.height//+ screen.width - screen.width* 0.7 //- 300;
      let y = radius * Math.sin(angle) + ranY1 - 70;// + 0.1 * screen.width//+ screen.height   //- 300 - 850;

      //console.log(win0.screenLeft);
      // console.log("1",x,y); 
      if(intervalCount > 13){
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
  let win1 = window.open("window1/index.html", "", "width=40, height=40, left="+(ranX1+70)+", top="+(ranY1+70)+"");
  // console.log(win1.screenLeft)

  let intervalCount = 0;
  let angle1 = Math.PI;

win1.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 400;
  let x = radius * Math.cos(angle1) + ranX1 + 70 + radius;// - 0.1 * screen.width;//+ screen.width // - 300 - radius;
  let y = radius * Math.sin(angle1) + ranY1 + 70; //+ screen.height //- 300 + radius + 100 - 850;
  //console.log(x,y);
  //console.log(win1.screenLeft)
  // console.log("2",x,y); 
  if(intervalCount > 4){
    clearInterval(countedInterval);
    win1.close();
  }else{
    win1.moveTo(x , y);
    //console.log("boom!", intervalCount, x, y);
  }
  intervalCount++;
  angle1 = angle1 - Math.PI/14;
}, 400)
})
}

function openMoreWindow3(){
  let win2 = window.open("window2/index.html", "", "width=40, height=40, left="+(ranX1-70)+", top="+(ranY1-70)+"");
  let intervalCount = 0;
  let angle2 = 0;

  win2.addEventListener("load",()=>{
    let countedInterval = setInterval(()=>{
    // console.log(intervalCount); 
    let radius = 200;
    let x = radius * Math.cos(angle2) + ranX1 - 70 - radius;
    let y = radius * Math.sin(angle2) + ranY1 - 70; 
    //console.log(win2.screenLeft);
    // console.log("2",x,y); 
    if(intervalCount > 11){
      clearInterval(countedInterval);
      win2.close();
      topStar1();
    }else{
      win2.moveTo(x , y);
    }
    intervalCount++;
    angle2 = angle2 - Math.PI/14;
  }, 400)
  })
}

function openMoreWindow4(){
  let win3 = window.open("window3/index.html", "", "width=40, height=40, left="+(ranX1-70)+", top="+(ranY1+70)+"");
  let intervalCount = 0;
  let angle3 = 0;

  win3.addEventListener("load",()=>{
    let countedInterval = setInterval(()=>{
    // console.log(intervalCount); 
    let radius = 400;
    let x = radius * Math.cos(angle3) + ranX1 - 70 - radius;
    let y = radius * Math.sin(angle3) + ranY1 + 70;
    if(intervalCount > 7){
      clearInterval(countedInterval);
      win3.close();
      //topStar2();
    }else{
      win3.moveTo(x , y);
    }
    intervalCount++;
    angle3 = angle3 + Math.PI/14;
  }, 400)
  })

}


function topStar1(){
  let y = screen.height;
  let Win1 = window.open("star2", "_blank", "width=50, height=50, top="+y+", left ="+ranX2);

  Win1.addEventListener("load", ()=>{
    let interval = setInterval(()=>{
      y-=20;
      if(y < ranY2){
        clearInterval(interval);
        Win1.close();
        openMoreWindow5();
        openMoreWindow6();
        openMoreWindow7();
        openMoreWindow8();
        audio.play();
      }else{
        Win1.moveTo(ranX2, y);
      }
    }, 50)
  })
}

function openMoreWindow5(){
  let win0 = window.open("win0/index.html", "", "width=40, height=40, left="+(ranX2+70)+", top="+(ranY2-70)+"");
  // console.log(win0.screenLeft)
  let intervalCount = 0;
  let angle = Math.PI;

  win0.addEventListener("load",()=>{
    let countedInterval = setInterval(()=>{
    let radius = 400;
    let x = radius * Math.cos(angle) + ranX2 + radius;
    let y = radius * Math.sin(angle) + ranY2;

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

function openMoreWindow6(){
  let win1 = window.open("win1/index.html", "", "width=40, height=40, left="+(ranX2+70)+", top="+(ranY2+70)+"");
  // console.log(win1.screenLeft)

  let intervalCount = 0;
  let angle1 = Math.PI;

win1.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 300;
  let x = radius * Math.cos(angle1) + ranX2 + 70 + radius;
  let y = radius * Math.sin(angle1) + ranY2 + 70;
  //console.log(win1.screenLeft)
  // console.log("2",x,y); 
  if(intervalCount > 7){
    clearInterval(countedInterval);
    win1.close();
  }else{
    win1.moveTo(x , y);
    //  console.log("boom!", intervalCount, x, y);
  }
  intervalCount++;
  angle1 = angle1 - Math.PI/14;
}, 400)
})
}

function openMoreWindow7(){
  let win2 = window.open("win3/index.html", "", "width=40, height=40, left="+(ranX2-70)+", top="+(ranY2-70)+"");
  let intervalCount = 0;
  let angle2 = 0;

win2.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  let radius = 300;
  let x = radius * Math.cos(angle2) + ranX2 - 70 - radius;
  let y = radius * Math.sin(angle2) + + ranY2 - 70;
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

function openMoreWindow8(){
  let win3 = window.open("win2/index.html", "", "width=40, height=40, left="+(ranX2-70)+", top="+(ranY2+70)+"");
  let intervalCount = 0;
  let angle3 = 0;

win3.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 200;
  let x = radius * Math.cos(angle3) + ranX2 - 70 - radius;
  let y = radius * Math.sin(angle3) + ranY2 + 70;
  if(intervalCount > 4){
    clearInterval(countedInterval);
    win3.close();
  }else{
    win3.moveTo(x , y);
  }
  intervalCount++;
  angle3 = angle3 + Math.PI/14;
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