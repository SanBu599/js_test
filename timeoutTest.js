// console.log("document Start");

// var obj = setInterval(stratTime(), 3000);


// function stratTime(){
//     console.log("Timeout Call");
// }
// var count = 0;

// window.setInterval(function(){
//     console.log("test"+count++);
// },1000);
var time = 0;

var interval;

function timeStart(){
    interval = setInterval(function(){
        document.getElementById("result").value = time++;
    },1000);
}

function timeEnd(){
    clearInterval(interval);
}