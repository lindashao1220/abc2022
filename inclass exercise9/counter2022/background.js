console.log("leon is sitting in the background waiting for news.")

let count = 0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
      
      console.log("background script: GOT MESSAGE:", request);

      //send response to the popup ...
      if (request.message === "remind me of the count"){
        let myResponse = {theCount: count};
          console.log("background script: REPLYING:", myResponse);
        sendResponse(myResponse);
        
      }else if

      //also increase the count as the click goes...
      (request.message == "count went up"){
        console.log("background script: COUNT WENT UP:", count);
        count++;
      } 
});