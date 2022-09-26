function manySquares(){
  //clear container
  document.getElementById("boxContainer").innerHTML="";

  let num = document.getElementById("input").value;
  for(let i=0; i<num ; i++){
    let sqr = document.createElement("div");
    document.getElementById("boxContainer").appendChild(sqr);
    sqr.className = 'sqrs';
  }
}