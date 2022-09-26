console.log(window);
let button = document.getElementById("button");

let sw = screen.width;
let sh = screen.height;
let popupWidth = 200;
let popupHeight = 200;



function openSingleWindow(){
  let ranX = Math.random()*sw - popupWidth;
  let ranY = Math.random()*sh - popupHeight;
  
    //window.open("https://www.w3schools.com/cssref/pr_padding-left.asp")
    let win = window.open("popup/index.html","","width="+popupWidth+",height="+popupHeight+", left="+ranX+", top="+ranY);
    function closeWindow(){
      win.close();
    }
    setTimeout(closeWindow,2000);
  }

  function openMannyWindows(num){
    for(let i=0; i<num; i++){
      openSingleWindow();
    }
  }

button.addEventListener("click", ()=>{
  console.log("button clicked");
  openMannyWindows(4);
})
