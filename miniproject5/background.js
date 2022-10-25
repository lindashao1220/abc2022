console.log("background onnn");

chrome.runtime.onMessage.addListener(reciever);

function reciever(request, sender, sendResponse){
  console.log(request);
}