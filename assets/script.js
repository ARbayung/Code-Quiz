var timerElement = document.querySelector("#time");
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var QScreen = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var score = document.querySelector("#final-score");
var endScreen = document.querySelector("#end-screen");


var timer;
var timerCount;
var scoreCounter;
var gameOver = false;

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
    question2
}

function question1(){
    questionTitle.textContent = "what is my fav color?";

    var listUL = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");


    li1.textContent = "green";
    li2.textContent = "blue";
    li3.textContent = "red";
    li4.textContent = "yellow";

    li1.classList.add("correct");
    li2.classList.add("incorrect");
    li3.classList.add("incorrect");
    li4.classList.add("incorrect");


    choices.appendChild(listUL);
    listUL.appendChild(li1);
    listUL.appendChild(li2);
    listUL.appendChild(li3);
    listUL.appendChild(li4);

    checkQuestion();

}

function question2(){
    questionTitle.textContent = "who am i?";

    li1.textContent = "abs";
    li2.textContent = "jess";
    li3.textContent = "darem";
    li4.textContent = "anmol";

    li1.classList.add("correct");
    li2.classList.add("incorrect");
    li3.classList.add("incorrect");
    li4.classList.add("incorrect");


    choices.appendChild(listUL);
    listUL.appendChild(li1);
    listUL.appendChild(li2);
    listUL.appendChild(li3);
    listUL.appendChild(li4);

    checkQuestion();

}

function checkQuestion(){
    choices.addEventListener("click", function(event){
        
        var element = event.target;
        var correct = document.querySelector(".correct");

        if(element.matches(".correct")){
            timerCount = timerCount + 5;
        }else if(element.matches(".incorrect")){
            timerCount = timerCount - 5;
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
            QScreen.classList.add("hide");
            endScreen.classList.remove("hide");
        }
    //controls speed of timer 1000 being one second
    }, 1000);
}



start.addEventListener("click", startQuiz);