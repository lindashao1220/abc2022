console.log("hello");
var seconds = 10;
var timer;

function myFunction() {
  if(seconds < 60){
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0){
    seconds--;
  } else {
    //
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
        chrome.tabs.move(tabs[0].id, {index: 0});
    });
    clearInterval(timer);
  }
}
timer = window.setInterval(function() {
      myFunction();
    }, 1000);

document.getElementById("timer").innerHTML="10 seconds count down"; 

let message = {msg: "here"};




