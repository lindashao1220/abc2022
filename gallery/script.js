console.log('ddddd')
var circle = document.getElementById("circle");
let up = document.getElementById("upBtn");
let down = document.getElementById("downBtn");
var rotate = circle.style.transform;
var rotateSum;

function movebackward(){
    console.log('backward');
    rotateSum = rotate + "rotate(-720deg)";
    circle.style.transform = rotateSum;
    rotate = rotateSum;
}

function moveforward(){
    console.log('forward');
    rotateSum = rotate + "rotate(720deg)";
    circle.style.transform = rotateSum;
    rotate = rotateSum;
}

up.addEventListener("click", movebackward);
down.addEventListener("click",moveforward);



