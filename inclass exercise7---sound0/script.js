let on = document.getElementById("on");
let off = document.getElementById("off");

//speaker
let context = new AudioContext();
let destination = context.destination;

//oscillator
let oscillator = context.createOscillator();
oscillator.frequency.value = 440; 

//volume knob
let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);


let oscillatorHasStarted = false;

on.addEventListener("click", ()=>{
    if (oscillatorHasStarted == false){
        oscillator.start(0);
        oscillatorHasStarted = true;
    }
    gain.gain.value = 1;
   
})

off.addEventListener("click", ()=>{
    gain.gain.value = 0 ;
})

