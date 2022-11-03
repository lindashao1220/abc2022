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
// copy1.setAttribute('class', 'webpageCopy');
// copy2.setAttribute('class', 'webpageCopy');


// document.body.append(newDiv);
document.body.innerHTML = ""; // clear web
document.body.append(copy1); // append copy1
document.body.append(copy2); // append copy2

// let content1 = document.createElement('div');
// content1.setAttribute('id', 'div2');
// content1.append(innards);


// console.log(newDiv);

