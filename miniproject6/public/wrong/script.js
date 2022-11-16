let button1=document.getElementById("btn");

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
})
