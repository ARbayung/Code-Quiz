var timerElement = document.querySelector("#time");
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var QScreen = document.querySelector("#questions");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var score = document.querySelector("#final-score");

var timer;
var timerCount;
var scoreCounter;

function startQuiz(){
    //setting start time to 10 seconds
    timerCount = 10;
    //disabling start button to stop timer from overlapping
    start.disabled = true;
    startScreen.classList.add("hide");
    QScreen.classList.remove("hide");

    

    //initialising timer function
    startTimer();
    question1();
}

function question1(){
    question.textContent = "what is my fav color?";

    var listUL = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");


    li1.textContent = "green";
    li2.textContent = "blue";
    li3.textContent = "red";
    li4.textContent = "yellow";

    choices.appendChild(listUL);
    listUL.appendChild(li1);
    listUL.appendChild(li2);
    listUL.appendChild(li3);
    listUL.appendChild(li4);

    choices.addEventListener("click", function(event){
        
        var element = event.target;
        var correct = document.querySelector(".correct");

        if(element = li1){
            timerCount = timerCount + 5;
        }
    })

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