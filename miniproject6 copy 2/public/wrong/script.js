let button1=document.getElementById("btn");
let button2 = document.getElementById("getData");

button1.addEventListener("click", ()=>{
  let content = document.getElementById("input").value;
    let link = "/guess?name=" + content;
    console.log(link);
    console.log(content);
    if(content == "Sleeping beauty" || content == "Sleeping Beauty" || content == "sleeping beauty" ){
    window.location.href = link;
    }

    let route = "/sendAnswer?answer="+ content;
    fetch(route);
})

button2.addEventListener("click",()=>{
  fetch("/getAnswers")
  .then((resFromServer)=>{
      return resFromServer.json();
  })
  .then((processedData)=>{
      console.log(processedData)
      console.log(processedData.data)
      let answers=processedData.data;

      answers.forEach(answer => {
        let p = document.createElement("p");
        p.innerHTML = answer;
        document.body.appendChild(p);
      })
    })
  })
