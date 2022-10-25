// let display = document.getElementById("counterDisplay")
// let button = document.getElementById("up")

// let counter = 0;
// button.addEventListener("click", ()=>{
//     counter++;
//     display.innerHTML = counter;

//     // tell baclkground script that we increase the count
//     chrome.runtime.sendMessage({message: "count went up"});
// })

// // ask background for current count. 
// chrome.runtime.sendMessage({message: "remind me of the count"}, function(response){
//     console.log("this is the response", response);
//     alert(response.theCount);
//     display.innerHTML = response.theCount;
//     counter = response.theCount;
// });