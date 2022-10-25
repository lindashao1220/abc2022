console.log("hello this is Linda");

window.addEventListener('mouseup', mouseUPP);

function mouseUPP(){
    let selectedText = window.getSelection().toString();
    console.log(selectedText);
    if(selectedText.length > 0){
        let message = {
            text: selectedText
        };


        chrome.runtime.sendMessage(message);
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, message);
        // })
    }
}




