let sw = screen.width;
let sh = screen.height;

let ranX =  300;
 
let ranX1 = screen.width * getRandomArbitrary(0.4, 0.8);  //0.6;//Math.random(0.55,0.6);//0.6;
let ranY1 = screen.height * getRandomArbitrary(0.2,0.4);  //0.3;//Math.random(0.2,0.4)//0.3;

let ranX2 = screen.width * getRandomArbitrary(0.55, 0.85);  //0.3;//Math.random(0.55, 0.6);//0.3;
let ranY2 = screen.height * getRandomArbitrary(0.2, 0.4); //Math.random(0.2, 0.4)//0.2;

let ranX3 = screen.width * getRandomArbitrary(0.2, 0.5);  //0.6;//Math.random(0.55,0.6);//0.6;
let ranY3 = screen.height * getRandomArbitrary(0.3,0.4);  //0.3;//Math.random(0.2,0.4)//0.3;

let xPos1 = ranX + 80;
let xPos2 = ranX - 50;
let xPos3 = ranX1 + 80;
let xPos4 = ranX1 - 50;
let y = sh;

var audio = new Audio('firework.m4a');
var audio1 = new Audio('firework.mp3');

alert("Hello! Firework is coming:)");

button.addEventListener("click", topStar);

function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

function topStar(){
let h = screen.height;
let win = window.open("star", "_blank", "width=30, height=30, top="+h+", left ="+300);
let Win = window.open("star1", "_blank", "width=5, height=250, top="+ranY1+", left ="+ranX1);

win.addEventListener("load", ()=>{
  let interval = setInterval(()=>{
    h-=30;
    if(h < 100){
      clearInterval(interval);
      win.close();
      openMoreWindow();
      audio1.play();
    }else{
      win.moveTo(ranX, h);
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
      //audio.play();
      y =sh;
      //topStar1();
    }else{
      Win.moveTo(ranX1, y);
    }
  }, 50)
})
}

// let intervalCount = 0

// let countedInterval = setInterval(()=>{
//   console.log("boom!", intervalCount)
//   if(intervalCount > 7){
//     clearInterval(countedInterval)
//   }
//   intervalCount++;
// }, 2000)


// function openMoreWindow(){
//   let win0 = window.open("popup0/index.html", "", "width=25, height=25, left="+xPos1+", top="+2);
//   let win1 = window.open("popup1/index.html", "", "width=25, height=25, left="+xPos1+", top="+190);
//   let win2 = window.open("popup2/index.html", "", "width=25, height=25, left="+xPos2+", top="+2);
//   let win3 = window.open("popup3/index.html", "", "width=25, height=25, left="+xPos2+", top="+190);

//   let intervalCount = 0;

//   let countedInterval = setInterval(()=>{
//   console.log("boom!", intervalCount);
//   win0.resizeBy(3+intervalCount*1, 3+1*intervalCount);
//   win1.resizeBy(3+intervalCount*1, 3+1*intervalCount);
//   win2.resizeBy(3+intervalCount*1, 3+1*intervalCount);
//   win3.resizeBy(3+intervalCount*1, 3+1*intervalCount);

//   win0.moveTo(xPos1 + 10 * intervalCount, 2 + 10 * intervalCount);
//   win1.moveTo(xPos1 + 10 * intervalCount, 190 + 10 * intervalCount);
//   win2.moveTo(xPos2 + 10 * intervalCount, 2 + 10 * intervalCount);
//   win3.moveTo(xPos2 + 10 * intervalCount, 190 + 10 * intervalCount);
// }, 500);
// }

// if(intervalCount > 6){
//   clearInterval(countedInterval);
//  win0.close();
//  win1.close();
//  win2.close();
//  win3.close();
//  }
//  intervalCount++;
// }, 500)

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
  win0.moveTo(xPos1 + 10 * intervalCount, 2 - 10 * intervalCount);
  win1.moveTo(xPos1 + 10 * intervalCount, 190 + 10 * intervalCount);
  win2.moveTo(xPos2 - 10 * intervalCount, 2 - 10 * intervalCount);
  win3.moveTo(xPos2 - 10 * intervalCount, 190 + 10 * intervalCount);
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
  let radius = 250;
  let x = radius * Math.cos(angle3) + ranX1 - 70 - radius;
  let y = radius * Math.sin(angle3) + ranY1 + 70;
  if(intervalCount > 7){
    clearInterval(countedInterval);
    win3.close();
    topStar2();
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
let y = radius * Math.sin(angle2) + ranY2 - 70;
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

function topStar2(){
let y = screen.height;
let Win = window.open("star1", "_blank", "width=5, height=250, top="+ranY3+", left ="+ranX3);

Win.addEventListener("load", ()=>{
  let interval = setInterval(()=>{
    y-=30;
    if(y < ranY3){
      clearInterval(interval);
      Win.close();
      openMoreWindow9();
      openMoreWindow10();
      openMoreWindow11();
      openMoreWindow12();
      audio.play();
      //topStar1();
    }else{
      Win.moveTo(ranX3, y);
    }
  }, 50)
})
}

function openMoreWindow9(){
let win0 = window.open("window4/index.html", "", "width=40, height=40, left="+(ranX3+70)+", top="+(ranY3-70)+"");
//console.log(win0.screenLeft)
let intervalCount = 0;
let angle = Math.PI;

win0.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
    let radius = 100;

    let x = radius * Math.cos(angle) + ranX3 + 70 + radius; // + 0.1 * screen.height//+ screen.width - screen.width* 0.7 //- 300;
    let y = radius * Math.sin(angle) + ranY3 - 70;// + 0.1 * screen.width//+ screen.height   //- 300 - 850;

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

function openMoreWindow10(){
let win1 = window.open("window5/index.html", "", "width=40, height=40, left="+(ranX3+70)+", top="+(ranY3+70)+"");
// console.log(win1.screenLeft)

let intervalCount = 0;
let angle1 = Math.PI;

win1.addEventListener("load",()=>{
let countedInterval = setInterval(()=>{
// console.log(intervalCount); 
let radius = 400;
let x = radius * Math.cos(angle1) + ranX3 + 70 + radius;// - 0.1 * screen.width;//+ screen.width // - 300 - radius;
let y = radius * Math.sin(angle1) + ranY3 + 70; //+ screen.height //- 300 + radius + 100 - 850;
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

function openMoreWindow11(){
let win2 = window.open("window6/index.html", "", "width=40, height=40, left="+(ranX3-70)+", top="+(ranY3-70)+"");
let intervalCount = 0;
let angle2 = 0;

win2.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 200;
  let x = radius * Math.cos(angle2) + ranX3 - 70 - radius;
  let y = radius * Math.sin(angle2) + ranY3 - 70; 
  //console.log(win2.screenLeft);
  // console.log("2",x,y); 
  if(intervalCount > 11){
    clearInterval(countedInterval);
    win2.close();
    //topStar1();
  }else{
    win2.moveTo(x , y);
  }
  intervalCount++;
  angle2 = angle2 - Math.PI/14;
}, 400)
})
}

function openMoreWindow12(){
let win3 = window.open("window7/index.html", "", "width=40, height=40, left="+(ranX3-70)+", top="+(ranY3+70)+"");
let intervalCount = 0;
let angle3 = 0;

win3.addEventListener("load",()=>{
  let countedInterval = setInterval(()=>{
  // console.log(intervalCount); 
  let radius = 250;
  let x = radius * Math.cos(angle3) + ranX3 - 70 - radius;
  let y = radius * Math.sin(angle3) + ranY3 + 70;
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





// let inter;
// let button = document.getElementById("button");
// let enough = document.getElementById("enough");

// function shootingStars(){
//   button.style.display = "none";
//   enough.style.display = "block";

//   inter = setInterval(()=>{
//     let ran = Math.random();
//     if(ran<0.4){
//       topStar();
//     }else if (ran>0.5) {
//       topStar();

//     }
//   },5000);
// }


// function stop(){
//   clearInterval(inter);
//   button.style.display = "block";
//   enough.style.display = "none";
// }


// button.addEventListener("click", shootingStars);
// enough.addEventListener("click", stop);