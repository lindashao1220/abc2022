function performance(){
    window.scrollTo(0,0);
}

function rotateWin(){
    document.body.style.transform = "rotate(90deg)";
}

console.log("hello0000");

function gotMessage(message,sender,sendResponse){
    console.log(message);

    setTimeout(function () {
        performance();
      }, 1000);

      setTimeout(function () {
        rotateWin();
      }, 3000);
    
    

}

chrome.runtime.onMessage.addListener(gotMessage);