let button1=document.getElementById("btn");
// let button2 = document.getElementById("getData");

button1.addEventListener("click", ()=>{
  console.log("1");
  let content = document.getElementById("input").value;
    let link = "/guess?name=" + content;
    console.log(link);
    console.log(content);
    if(content == "Sleeping beauty" || content == "Sleeping Beauty" || content == "sleeping beauty" ){
    window.location.href = link;
    }else{
      document.getElementById("input").value = "";
    }
    let route = "/sendAnswer?answer="+ content;
    fetch(route);
})
