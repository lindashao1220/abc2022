// $(window).scroll(function (e){
//   if ($(document).height() < $(window).scrollTop() + $(window).height() * 10){
//     document.body.innerHTML += innards;
//   }
// });

// elements to append

// let innards = document.body.innerHTML;
// document.body.innerHTML += innards;
let innards = document.body.innerHTML;
let extractInnards = innards.innerHTML;

let webPages = document.createElement('div');
webPages.setAttribute('id', 'webPages');

let webPage01 = document.createElement('div');
webPage01.setAttribute('id', 'webPage01');
let webPage02 = document.createElement('div');
webPage02.setAttribute('id', 'webPage02');

webPages.append(webPage01, webPage02);

webContent = [];

let gameIsPlaying = false;
let gameIsOver = false;

//BEFORE THE PROJECT IS COMPLETE: (dont need this anymore but maybe for personal best scores?)
// 1: COMMENT THE CHROME STORAGE OUT
// 2: COMMENT CLEAR STORAGE IN TO RESET THE ARRAY
// chrome.storage.local.get({webContent: []}, (result) => {
//   // console.log(result.webContent);
//   let webContent = result.webContent;
//   webContent.push({innards: innards});
//     chrome.storage.local.set({webContent: webContent}, function () {
//       // you can use strings instead of objects
//       // if you don't  want to define default values
//       // chrome.storage.local.get('webContent', function (result) {
//       //     // console.log(result.webContent)
//       // });
//       chrome.storage.local.get('webContent', function (result) {
//         // document.getElementsByTagName("body")[0].innerHTML = "";
//         document.body.append(webPages);
//         // console.log(result.webContent[0].innards);
//         // webPage01.innerHTML = result.webContent[0].innards;
//         // webPage02.innerHTML = result.webContent[0].innards;
//         console.log(getOffset(webPage01));
//         console.log(getOffset(webPage01).top - getOffset(webPage01).height)
        
//       });
//   });
// });
// chrome.storage.local.clear(() => {
//   console.log('Everything was removed');
// }); //use this when the game is finished


// create game banner 
let banner = document.createElement('div');
banner.setAttribute('id', 'gameBanner');
// create frog as player
let froggy = document.createElement('div');
froggy.setAttribute('id', 'froggy');
// append banner and player
// document.body.appendChild(banner);
// banner.appendChild(froggy);

// time counter
let timeBanner = document.createElement('div');
timeBanner.setAttribute('id', 'timeBanner');
document.body.appendChild(timeBanner);

let seconds = 100;
let timer;

// get all tag elements 
let tags = document.getElementsByTagName("a");
// console.log(Array.from(document.getElementsByTagName("a")));
tagsArray = [];

tagsArray.push(); //add new tags 
tagsArray.splice(); //remove or replace aging tags

const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    bottom: rect.bottom, 
  };
}
let sw = screen.width;
let sh = screen.height;

function isFroggyColliding(a, b) {
  return !(
      ((a.top + a.height) < (b.top)) || //froggy.top + froggy.height < tags.top
      (a.top > (b.top + b.height)) || //froggy.top > tags.top + tags.height
      ((a.left + a.width) < b.left) || //froggy.left + froggy.width < tags.left
      (a.left > (b.left + b.width)) //froggy.left > tags.left + tags.width
  );
} // https://codepen.io/mixal_bl4/pen/qZYWOm

const leftKey = "ArrowLeft";
const rightKey = "ArrowRight";

window.onkeydown = function(event) {
  const keyCode = event.key;
  event.preventDefault();
  if(keyCode == "ArrowLeft") {
    // updateOffset();
    console.log(getOffset(froggy).left);
    // console.log("I moved left", a);
    // console.log("Left arrow")
    froggy.style.left = (froggy.offsetLeft + -10) + 'px';
  } else if(keyCode == "ArrowRight") {
    updateOffset();
    // console.log("I moved right", a);
    // console.log("Right arrow")
    froggy.style.left = (froggy.offsetLeft + 10) + 'px';
  }
}

Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;
//https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

let playButton = document.createElement('button');
playButton.setAttribute("id", "playButton");
document.body.append(playButton);

function playFrogger() {
  gameIsPlaying = true;

  document.getElementsByTagName("body")[0].innerHTML = "";
  document.body.append(webPages);
  
  webPage01.innerHTML = innards;
  webPage02.innerHTML = innards;

  let started = Date.now();
  let runTime = 100000;
  let intervalCount = 2;
  // let maxInterval = 15;
  let countedInterval = setInterval(()=>{
    window.scrollBy(0, intervalCount);
    // console.log("This is", intervalCount);
    if(Date.now() - started > runTime) {
      alert("Game is over now!");
      clearInterval(countedInterval);
    } else {
      if(getOffset(webPage01).bottom < 0) {
        // webPages.parentNode.remove(webPage01);
        // webPage01.remove();
        webPage01.appendAfter(webPage02);
        console.log("Page removed and added below");
      } else if(getOffset(webPage02).bottom < 0) {
        webPage02.appendAfter(webPage01);
        console.log("web page two moved below");
      }
      // get offset positioning here
      // if(intervalCount > maxInterval){
      //   clearInterval(countedInterval);
      //   alert("Game is over now!");
      //   timeIsRunning = false;
      // }
    }
  }, 40) //every 40 milliseconds
  
  setTimeout(function(){
    intervalCount =  intervalCount + 4
  }, 6000);
  
  setTimeout(function(){
    intervalCount =  intervalCount + 8
  }, 12000)
  
  setTimeout(function(){
    intervalCount =  intervalCount + 10
  }, 18000)
  addEventListener("click", function(){
    intervalCount =  intervalCount + 6
  });
  
}
playButton.addEventListener("click", playFrogger);


//references 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
// https://stackoverflow.com/questions/23585320/how-to-move-object-with-keyboard-in-javascript
// http://jsfiddle.net/medda86/y6WU9/
// https://stackoverflow.com/questions/10445410/getting-the-x-and-y-coordinates-for-a-div-element#:~:text=If%20the%20element%20is%20in,')%3B%20let%20Y%3Dwindow.
// https://dustinpfister.github.io/2019/03/14/canvas-position/
// https://github.com/chjno/100days/tree/master/62_infinite_scroll
// https://stackoverflow.com/questions/2440377/javascript-collision-detection
// https://codepen.io/mixal_bl4/pen/qZYWOm


