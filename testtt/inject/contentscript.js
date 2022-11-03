console.log("hii");

var innards = document.body.innerHTML;
//document.body.innerHTML += innards;

console.log(typeof innards);


let copy1 = document.createElement('div');
copy1.innerHTML = innards;
let copy2 = document.createElement('div');
copy2.innerHTML = innards;

copy1.setAttribute('id', 'copy1');
copy2.setAttribute('id', 'copy2');
copy1.setAttribute('class', 'webpageCopy');
copy2.setAttribute('class', 'webpageCopy');


// document.body.append(newDiv);
document.body.innerHTML = ""; // clear web
document.body.append(copy1,copy2); // append copy1
// document.body.append(copy2); // append copy2

let tags = document.getElementsByTagName("a");
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


  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  }, false;
console.log(getOffset(copy1).bottom);

let countedInterval = setInterval(()=>{
    console.log(getOffset(copy1).bottom);
    console.log(getOffset(copy2).bottom);
if (getOffset(copy1).bottom < 0){
    console.log("it is 1");
    //getOffset(copy1).top =  getOffset(copy2).bottom;
    copy1.appendAfter(copy2);
} else if(getOffset(copy2).bottom < 0){
    console.log("it is 2");
    //getOffset(copy2).top =  getOffset(copy1).bottom;
    copy2.appendAfter(copy1);
}
}, 40) 
