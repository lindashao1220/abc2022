// document.body.onload = addElement;
// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
//   newContent.style('font-size', '20px');
//   newContent.style('background-color', 'orange');
//   newContent.style('color', 'white');
//   newContent.style('z-index','10000');
// }

//create game banner
//let timeBanner = document.createElement('div');
// timeBanner.setAttribute('class', 'newContent');
// newContent.style('position', 'fixed');
// newContent.style('background-color', 'orange');
// newContent.style('width', '80px');
// newContent.style('height', '80px');
// newContent.style('z-index','10000');
// newContent.style('top', 'calc(50vh - 40px)');

// let canvas = document.createElement('canvas');
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 150, 100);

// document.body.appendChild(divBanner);

//a trigger to start
// let buffer = "";
// document.addEventListener('keypress', logKey);
// function logKey(e) {
//   console.log( "input: " + e.key );
//   buffer += e.key;
//   if ( buffer.slice(-5) == "start") {
//     console.log("snake activated");
//     myFunction();
//     // document.removeEventListener('keypress', logKey);
//   }
// }
//addEventListener("click", afunction());


let timeBanner = document.createElement('div');
timeBanner.setAttribute('id', 'timeBanner');
document.body.appendChild(timeBanner);

//timeBanner.innerHTML += "lllll";
// let node1 = document.createTextNode ("here!!");
// timeBanner.appendChild(node1);

var seconds = 60;
var timer;

function myFunction() {
  if(seconds < 60){
   timeBanner.innerHTML += "NOW YOU HAVE "+ seconds +" SECONDS LEFT";
    //let node = document.createTextNode ("NOW YOU HAVE "+ seconds +" SECONDS LEFT");
    //timeBanner.appendChild(node);
    console.log("NOW YOU HAVE "+ seconds +" LEFT");
    //console.log(node);
  }
  if (seconds >0){
    seconds--;
  } else {
    clearInterval(timer);
  }
}
timer = window.setInterval(function() {
      myFunction();
    }, 1000);


// continuous scroll
var innards = document.body.innerHTML;
document.body.innerHTML += innards;

$(window).scroll(function (e){
  if ($(document).height() < $(window).scrollTop() + $(window).height() * 10){
    document.body.innerHTML += innards;
  }
});

console.log("LindaisHEREEEEE!!!");

//bounding
let tags = document.getElementsByTagName("a");

function scrolled(){
  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top
    };
  }
  // make red 
  for(let i = 0; i < tags.length; i++){
    if(tags[i].textContent != "" && getOffset(tags[i]).top != 0){
       tags[i].style.color = "red";
        //tags[i].innerHTML += getOffset(tags[i]).top;
    }
  
    if(getOffset(tags[i]).top < 400){
      tags[i].style.color = "green";
    }
  }

  //window.scrollBy(0, 0.01);

}
setInterval(scrolled, 100);



//solution1: make the scroll-down into a larger scale
let intervalCount = 1;
let maxInterval = 15;
let countedInterval = setInterval(()=>{
  window.scrollBy(0, intervalCount);
  console.log("This is", intervalCount);
   if(intervalCount > maxInterval){
     clearInterval(countedInterval);
     alert("Game is over now!");
   }
   //intervalCount++;
}, 40)

setTimeout(function(){
  intervalCount =  intervalCount + 4
}, 5000);

setTimeout(function(){
  intervalCount =  intervalCount + 8
}, 10000)

setTimeout(function(){
  intervalCount =  intervalCount + 12
}, 15000)

// addEventListener("click", function(){
//   intervalCount =  intervalCount + 6
// });

console.log(intervalCount);



//solution2: change the interval time

// let interval = 1000;
// function timer() {
//   // setTimeout(()=>{
//   interval = interval - 10;
//   window.scrollBy(0, 1);
//    if (interval >= 1.1) {
//      console.log(interval);
//      setTimeout(timer, interval);
//    }
//   //  while (interval <= 1){
//   //   setTimeout(timer, 0.1);
//   //  }
//   //},200
// }; 
// timer();



