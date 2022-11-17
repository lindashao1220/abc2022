let button2 = document.getElementById("getData");

    button2.addEventListener("click",()=>{
      fetch("/getAnswers")
      .then((resFromServer)=>{
          return resFromServer.json();
      })
      .then((processedData)=>{
          console.log(processedData)
          console.log(processedData.data)




        let answers=processedData.data;
        let rightSum = 0;
        let wrongSum = 0;
        for (var i = 0; i<answers.length; i++){
          if (answers[i] == "right"){
            rightSum = rightSum +1;
  

          }
          if (answers[i] == "wrong"){
            wrongSum = wrongSum +1;
           
          }
        }
        console.log(rightSum);
        console.log(wrongSum);
    
        let p = document.createElement("p");
        p.innerHTML = "overall, there are " + rightSum + " right answers, and " + wrongSum + " wrong answers in total:)";
        document.body.appendChild(p);


        })
      })
    