console.log("hi");
var audio = new Audio("audio.mp3");

var socket = io();

let namebox = document.getElementById("name")
let chatbox = document.getElementById("chat")
let messagebox = document.getElementById("message")
let sendbutton = document.getElementById("send")

sendbutton.addEventListener("click", ()=>{
    console.log("clicked");
    let name = namebox.value.trim();
    if(name==""){
        name = "anonymous";
        namebox.value = "";
    }
    let message = messagebox.value;
    console.log(message);
    if(message != ""){
        //send name message to the server(package up the data)
        let data ={name: name, message: message}

        //send the message to the server
        socket.emit('message', data)

        console.log(data)
    }
    messagebox.value = "";
})

//recieve the data from the server and do things!!
socket.on("incoming", (data)=>{
    console.log(data);
    let name  = data.name;
    let message = data.message;
    let li = document.createElement("li");
    let p =  document.createElement("p");
    p.innerHTML = "<span class='sender'>"+ name +":</span> "+ message;
    li.appendChild(p);
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight;
})

socket.on("incoming1",(data)=>{
    console.log(data);
    audio.play();
})

messagebox.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        sendbutton.click();
    }
})