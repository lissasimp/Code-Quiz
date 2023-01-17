// var scores = document.querySelector("scores");
// var timerElement = document.querySelector("#time");
var startButton = document.getElementById("start");
var startScreen = document.querySelector("#start-screen");
// var screen = document.querySelector(".wrapper"); //do I need this variable?
var questionContainerEl = document.getElementById("question-container");
// var hideScreen = document.querySelector(".hide");
var questionElement = document.getElementById("question-title");
var answerElement= document.getElementById("choices"); //when user clicks choice, correct or incorrect
// var endScreen = document.querySelector("#end-screen");
// var score = document.querySelector("#final-score");
// var initials = document.querySelector("#initials"); //max 3?
// var submitBtn = document.querySelector("#submit");
// var goBackBtn = document.querySelector("[href=index.html]");
// var viewScores = document.querySelector("[href=./highscores.html]") //links to high score page
// var scores = document.querySelector(".scores"); //holds scores?
// var highScoresList = document.querySelector("#highscores")//ol so will need to use event delegation to add high scores
// var clearBtn = document.querySelector("#clear");
// do I need to target wrappers?
//when to use class and when to use id in querySelector?


// var correctAnswerIndex 
// var timer;
// var timerCount;
// var quizQuestions;
// var finalScore; //holds the time left
// var penalty; //takes 10 seconds off the time if

// The startGame function is called when the start button is clicked.
//Timer changes to 60 seconds and then starts counting down
//hide questions until start button is clicked
//when start button is clicked, hide start screen

var shuffledQuestions, currentQuestionIndex;

function startGame() {
//   timerCount = 60;
//   startTimer()
console.log("started")
//this ahides start screen once game begins
startScreen.classList.add('hide');
currentQuestionIndex=0; //starts question array from first question
shuffledQuestions= quizQuestions.sort(() => Math.random() - .5) //this will create negative and postive numbers so will create a random array

questionContainerEl.classList.remove('hide');
nextQuestion();

};
function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(questionTitle) {
  questionElement.innerText = questionTitle.questionTitle
  
};
// }
// }

// function selectAnswer() {


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
      //if counter reaches 0 or questions run out then timer will stop
    // if (timerCount === 0 || quizQuestions.length === 0) {
    //     clearInterval(timer);
    //     //takes player to enter hight scores
    //     winGame(); //high scores function? link?
    //   }
    // }
    // }, 1000);


//Questions
//Display first question and answer choices
//When player clicks on choice:
//If correct will display feedback correct (plus well done? text content?), 
//hide current screen and move to next
//If incorrect will display feedback incorrect (plus bad luck?), and take 10 seconds off time
//hide current screen and move to next screen
//correct/incorrect should only be displayed for a couple of seconds

//event listener to start game
startButton.addEventListener('click', startGame);


//Attach an event listener to answer options
// choices.addEventListener("click", ) // need to create an answer function as my second parameter


// //Attach an event listener to submit button
// submitBtn.addEventListener("click", ) // create a submit function as 2nd parameter

//Attach an event listener to high scores







//feedback at bottom of page appears with - correct/wrong - but then disappears



//if answer is correct,  - saved client side?




//if answer is wrong, 10 seconds deducted from score





//If timer reaches 0 or all questions are answered, game ends
//countdown timer on coloursplosion

//function playTheQuiz()
//for loop questions.length
//quizQuestions[i].question

//playTheQuiz - right at the end




//when the game ends, score is displayed- score is actually the number of seconds you have left
//user enters initial into high scores and presses submit - local storage
//list of high scores displayed //Jane Doe email activity  windows.location.href = highscores - activty 8 day 2


//link this file to the question file - questions will need to be a variable


