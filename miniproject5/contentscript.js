console.log("hello this is Linda");


// ggogle image CHECK
const queryString1 = window.location.href;
console.log("queryString1", queryString1);

let urlAddon = window.location.search;
let urlParams = new URLSearchParams(urlAddon);
let purpose = urlParams.get("purpose")
console.log("purpose", purpose)
if(purpose == "lindaMadness"){
  console.log("mad!!!")
  setTimeout(function () {
    window.scrollTo(0,980);
  }, 400);
}
// console.log(q)

// let string = queryString1.substr(0,32);
// console.log(string);
// // AM I IN GOOGLE IMAGE
// if (string == "https://www.google.com/search?q="){
//   console.log("working");
//   setTimeout(function () {
//     window.scrollTo(0,980);
//   }, 400);
// }


// const queryString = win1.location.href;

//       // var popupURL = win1.location.protocol + "://" + win1.location.host + "/"  + win1.location.pathname;
//       //console.log(popupURL);
//         if (queryString === "about:blank"){
        
//         console.log("hellllllllo");

//         setTimeout(function () {
//         win1.scrollTo(0,980);
//       }, 3000);
//     }


window.addEventListener('mouseup', mouseUPP);

function mouseUPP(){
    let selectedText = window.getSelection().toString();
    console.log(selectedText);
    if(selectedText.length > 0){
          word =  selectedText;
          let url = "https://www.google.com/search?q="+ word +"&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjs9Nejnfv6AhWNEIgKHZgWB84Q_AUoAXoECAEQAw&biw=1440&bih=789&dpr=2&purpose=lindaMadness";
            
            //console.log(url);
       let win1 = window.open(url, "_blank", "width=500, height=400, top="+300+", left ="+300);
      // win1.location.href = url;
      //  //if 

      setTimeout(function () {
        win1.close();
      }, 4000);
  }
}




