console.log("time to start the timer!");

let sec = 0;
let min = 0;
let onOff = 0;
let interval = null;
function count(){
sec++;
if(sec < 60){
    document.getElementById("timer").innerHTML = min + ":" + sec;
    if(sec < 10){
    document.getElementById("timer").innerHTML = min + ":" + "0" + sec;
    }
}
if(sec/60 == 1){
    sec = 0;
    min++;
    if(sec < 10){
        document.getElementById("timer").innerHTML = min + ":" + "0" + sec;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec;
}
}

function startTime(){
    onOff = 1;
    if(onOff == 1){
        interval = window.setInterval(count , 100);
        document.getElementById("start").innerHTML = "Start";
    }
}

function stopTimer(){
    onOff = 0;
    if(onOff == 0){
        window.clearInterval(interval);
        document.getElementById("stop").innerHTML = "Stop";
    }
}

function restartTimer(){
    window.clearInterval(interval);
    onOff = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerHTML = "0:00";
}