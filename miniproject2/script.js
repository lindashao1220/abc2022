let button = document.getElementById("button");
let sw = screen.width;
let sh = screen.height;
let popWidth = 400;
let popHeight = 400;

let windowNames = ["popup2", "popup3", "popup4", "popup5"];
let yPos = [20,220,340,700];
let openWindows = [];

function openWindowOne(){
    let randomX = Math.random()*sw - popWidth;
    let randomY = Math.random()*sh - popHeight;
    let randomW= sw;
    let randomH = sh;
    let newWindow=window.open("popup1/index.html","","width="+randomW+",height="+randomH+",left="+randomX+",top="+randomY+"");
    //setTimeout(newWindow.close(),2000);
    setTimeout(function(){
      newWindow.close();
      greenLight();
      // openManyWindows(4);
  }, 1500)
    }
  
  button.addEventListener("click", ()=>{
    openWindowOne();
  })
    

function greenLight(){
        // let ranY = Math.random()*sh - 200;
        let x = 0;
        for(let i=0; i<windowNames.length; i++){
          let url = windowNames[i];
          let win = window.open(url, "", "width=150, height=200, left="+x+", top="+(i*200));
          let interval = setInterval(()=>{
            x+= 30 - (Math.random(10));
            if(x > sw-200){
              clearInterval(interval);
              win.close();
              redLight();
            }else{
              win.moveTo(x,yPos[i]);
            }
          }, 1000)
        }
      }

function redLight(){
  for(let i =0; i<5; i++){
    let stp = window.open(popup6, "", "width="+sw+", height="+sh+", left="+sw*0.4+", top="+sh*0.3+"");
    setTimeout(function(){
      stp.close();
      greenLight();
      // openManyWindows(4);
  }, 1500)
    console.log(index);
  // stp.addEventListener("load", ()=>{
  //   setTimeout(function(){
  //     stp.close();
  //   }, 1000);
  // })
  // }
}
}


        // in each loop:
            // we get the windowName out of windowNames using i
            // use the name to open a window like this:
            // use i to determine the windows Y position (first window on top, second below, etc.)
            // let win = window.open(windowName, "", "width=250, height=130, left="+x+", top="+ranY+"");
            // push the win object into openWindows array. openWindows array will ultimately have an object for each open window
            // openWindows.push(win)
            // generate random number for speed
            // start an interval to move win across using the random speed
            // inside interval have also a closing mechanism (ie when window reach max width, close it something)







        //let win1 = window.open("popup2", "", "width=250, height=130, left="+x+", top="+ranY+"");
        
        // for(let index=2; index<4; index++){
        //   index++;
        //  }

        // let interval[index] = setInterval(()=>{
        //   x+=5;
        //   if(x > sw-300){
        //     clearInterval(interval[index]);
        //     win[index].close();
        //   }else{
        //     win[index].moveTo(x, ranY+200);
        //   }
        // }, 50)

        // let interval = setInterval(()=>{
        //     x+=5;
        //     if(x > sw-300){
        //       clearInterval(interval);
        //       win2.close();
        //     }else{
        //       win2.moveTo(x, ranY+200);
        //     }
        //   }, 50)

        //   let interval1 = setInterval(()=>{
        //     x+=5;
        //     if(x > sw-300){
        //       clearInterval(interval1);
        //       win3.close();
        //     }else{
        //       win3.moveTo(x, ranY+400);
        //     }
        //   }, 50)





