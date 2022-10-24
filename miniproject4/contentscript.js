function scrollUp(){
    window.scrollTo(0, 0);
}

console.log("hello0000");

function gotMessage(message,sender,sendResponse){
    console.log(message);
    scrollUp();
}

chrome.runtime.onMessage.addListener(gotMessage);