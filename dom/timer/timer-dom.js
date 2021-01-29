console.log("time to start the timer!");

let sec = 0;
let min = 0;
let onOff = 0;
var timer;

let startTime = document.getElementById('start');
let stopTime = document.getElementById('stop');
let restartTime = document.getElementById('restart');
let mid = document.getElementById('timer');

let para = document.querySelector('p');

mid.appendChild(para);
mid.appendChild(startTime);
mid.appendChild(stopTime);
mid.appendChild(restartTime);

startTime.onclick = function(sec, min, onOff){
    onOff = 1;
    sec = parseInt(sec);
    min = parseInt(min);
    timer = setInterval(startTime, 1000);

    if(onOff == 1){
        if(sec < 59){
             sec = sec + 1;
        }
        if(sec == 60){
             min = min + 1;
            sec = 0;
         }
        para.textContent = min + ":" + sec;
    }
}

stopTime.onclick = function(sec, min, onOff){
    onOff = 0;
    para.textContent = min + ":" + sec;
}

restartTime.onclick = function(onOff, min, sec){
    onOff = 0;
    min = 0;
    sec = 0;
    para.textContent = min + ":" + sec;
}
