function performance(){
    window.scrollTo(0, 0);
    document.body.style.transform = "rotate(90deg)";
}

console.log("hello0000");

function gotMessage(message,sender,sendResponse){
    console.log(message);
    performance();

}

chrome.runtime.onMessage.addListener(gotMessage);