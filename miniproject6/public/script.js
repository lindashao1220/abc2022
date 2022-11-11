let btn = document.getElementById("btn");
let content = document.getElementById("input").value;

btn.addEventListener("click",()=>{
   console.log(content);
    window.location.href = "/guess?name=";
});




// function riddle(){
//     let riddle = document.getElementById("input").value;
//     console.log(riddle);
// }


// window.location.href = "/guess?word=" + content;