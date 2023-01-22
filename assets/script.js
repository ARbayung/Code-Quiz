var timerElement = document.querySelector("#time");
var start = document.querySelector("#start");

var timer;
var timerCount;


function startQuiz(){
    //setting start time to 10 seconds
    timerCount = 10;
    //disabling start button to stop timer from overlapping
    start.disabled = true;
    //initialising timer function
    startTimer();
}

function startTimer(){
    //using setInterval to control timer
    timer = setInterval(function(){
        //takes away a value per second
        timerCount--;
        //allows the html to show variable changes
        timerElement.textContent = timerCount;

        //stops timer from going below 0, clears timer
        if(timerCount === 0) {
            clearInterval(timer);
        }
    //controls speed of timer 1000 being one second
    }, 1000);
}

start.addEventListener("click", startQuiz);