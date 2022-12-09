var socket = io();
console.log("hiiii:)))")

socket.on("totalUser", (data)=>{
    console.log("hiiii")
   
    let num = data.mes;
    console.log(data.mes);
//     if( num % 2 == 0){
//       window.location.href = "/right-eye";
// }
//     if( num % 2 == 1){
//       window.location.href = "/left-eye";
//   }
})


// socket.on("joinroom", ()=>{
//     console.log("client1 event is triggered")
// })

// setTimeout(()=>{
//     socket.emit("join")
// }, 3000)