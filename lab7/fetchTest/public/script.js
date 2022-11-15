console.log("hello");
let input = document.getElementById("input");
let button = document.getElementById("button");
let getDataButtton = document.getElementById("getData");

getDataButtton.addEventListener("click",()=>{
    fetch("getPet")
    .then((responseFromServer)=>{
        return responseFromServer.json();
        // console.log(responseFromServer.text());
    }) .then((procesesedData=>{
        console.log(procesesedData);
        console.log(procesesedData.data);
    }))
})

button.addEventListener("click", ()=>{
    let pet = input.value;
    console.log(pet);
    let route = "sendPet?pet="+pet
    fetch(route);

    input.value="";
})