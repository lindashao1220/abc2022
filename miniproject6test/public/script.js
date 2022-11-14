// let btn = document.getElementById("btn");
// let content = document.getElementById("inPut").value;

// btn.addEventListener("click",()=>{
//     alert(content);
//     console.log(content);
//     //window.location.href = "/guess?name=";
// });



function manySquares(){
    let content = document.getElementById("input").value;
    console.log(content);
    let link = "/guess?name=" + content;
    console.log(link);
    window.location.href = link;
  }



// function riddle(){
//     let riddle = document.getElementById("input").value;
//     console.log(riddle);
// }


// window.location.href = "/guess?word=" + content;