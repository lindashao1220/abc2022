// credit to chinooooo
var innards = document.body.innerHTML;
document.body.innerHTML += innards;

$(window).scroll(function (e){
  if ($(document).height() < $(window).scrollTop() + $(window).height() * 10){
    document.body.innerHTML += innards;
  }
});

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
      console.log("i am done!");
      tags[i].innerHTML = "done"
    }
  }

setInterval(function(){
  window.scrollBy(0,2)
}, 10)


}

document.addEventListener('click', scrolled);


