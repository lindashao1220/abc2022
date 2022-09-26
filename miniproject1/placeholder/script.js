let contentElement = document.getElementById("content");
let text = contentElement.innerHTML;
let letters = text.split("");
let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
contentElement.innerHTML = letterSpans.join("");
let spanTags = contentElement.getElementsByTagName("span");

let randomMultipliers = letters.map((letter)=>{ return Math.random()*70})

let angle = letters.map((letter)=>{ return Math.floor(Math.random()*360)})


  let sliderValue = 1;
  for(let i = 0; i < spanTags.length; i+=1){
    let randomMultiplier = randomMultipliers[i];
    spanTags[i].style.fontSize = randomMultiplier+"px";
  }

//console.log(letters);
contentElement.addEventListener("mouseover", ()=>{
    for(let i = 0; i < spanTags.length; i+=1){
      //console.log(spanTags[i]);
      let deg1 = angle[i];
      console.log(deg1);
      spanTags[i].style.transform = "rotate("+Number(deg1)+"deg)";

     }
  })

  //spanTags[].style.transform = rotate("0.5turn");

  console.log(contentElement);
  console.log(spanTags);

  contentElement.addEventListener("mouseout", ()=>{
    for(let i = 0; i < spanTags.length; i+=1){
      //console.log(spanTags[i]);
      let deg1 = -angle[i];
      //console.log(deg1);
      spanTags[i].style.transform = "rotate("+Number(deg1)+"deg)";
     }
  })
  