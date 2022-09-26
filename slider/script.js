let range = document.getElementById("myRange");
let valueDisplay = document.getElementById("valueDisplay");

console.log(range)
// function changeHappened(){
//   console.log("a change happened");
// }

//range.addEventlistener("change",changeHappened);

function inputHappened(){
  console.log("a input happended");
  let value = range.value;
  valueDisplay.innerHTML = value;
  valueDisplay.
}

range.addEventlistener("input",inputHappened);