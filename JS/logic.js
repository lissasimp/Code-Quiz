//when game opened, timer set to 0

var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("#time");
let start = document.querySelector('#start');

var timerCount;

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startTimer()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    if (timerCount === 0 || quizQuestions.length === 0) {
        clearInterval(timer);
        winGame();
      }
    }
    }; 1000

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);








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





