//Questions Index
var allQuestions = [
  {
    question: "Where do you link a javascript sheet into html?",
    choices: [
      "at the top in the <head> element",
      "right above the closing </body> element",
      "right below the Css stylesheet",
    ],
    rightAnswer: "right above the closing </body> element",
  },
  {
    question: "What does the DOM stand for?",
    choices: [
      "Document On Model",
      "Document Object Mobile",
      "Document Object Model",
    ],
    rightAnswer: "Document Object Model",
  },
  {
    question: "What type of brackets are objects nested into?",
    choices: ["{}", "[]", "()"],
    rightAnswer: "{}",
  },
  {
    question: "How do you define a variable on javascript?",
    choices: ["var x", "x", "var = x"],
    rightAnswer: "var x",
  },
  {
    question: "What loops are used in Javascript?",
    choices: ["For", "While", "Both"],
    rightAnswer: "Both",
  },
];

var startBtn = document.querySelector(".startbtn");
var startDiv = document.querySelector(".start-game");
var gameDiv = document.getElementById("game-div");
var secondsRemaining = 75;
var choicesButtons = document.getElementById("answerChoicesDisplay");
var resultsWord = document.getElementById("results");
var currentIndex = 0;
var userChoice;
var score = 0;
startBtn.addEventListener("click", startGame);


function startGame() {
  startDiv.classList.add("hide");
  startTimer()
}


function startTimer(){
  displayQuestion();
  timer = setInterval(function(){
    secondsRemaining -= 1;
  
    var timerDisplay = document.getElementById("timer-display");
    timerDisplay.textContent = "Time left: " + secondsRemaining;
  if(secondsRemaining <= 0 || currentIndex === 5){
      clearInterval(timer)
      resultsWord.innerHTML = "";
      gameDiv.innerHTML = "";
      choicesButtons.innerHTML = "";
      gameOver();
  } 
  }, 1000);
  
}

console.log(allQuestions.length);

function displayQuestion() {
 
  gameDiv.innerHTML= "";
  choicesButtons.innerHTML="";
  var questionTitle = document.createElement("h1");
  var currentQuestion = allQuestions[currentIndex].question;
  questionTitle.textContent = currentQuestion;
  gameDiv.appendChild(questionTitle);
  var choices = allQuestions[currentIndex].choices;
  for(i=0; i<choices.length; i++){
    var choicesEl = document.createElement("button");
    choicesButtons.appendChild(choicesEl);
    choicesEl.textContent = choices[i]
    choicesEl.onclick = checkAnswer;
  };

}

function checkAnswer(){
  var answer = allQuestions[currentIndex].rightAnswer;
  console.log(this.textContent);
  userChoice = this.textContent;  
  if(userChoice === answer){
    console.log("yas");
    correctAnswer();
  }
  else{
    console.log("oof.");
  incorrectAnswer();
  }
  currentIndex++;
  console.log(currentIndex);
  displayQuestion();
};

function correctAnswer (){
  resultsWord.innerHTML = "";
  var displayCorrect = document.createElement("p");
  displayCorrect.textContent = "You're Correct!";
  resultsWord.appendChild(displayCorrect)
  secondsRemaining += 15; 
  score++;
};

function incorrectAnswer(){
  resultsWord.innerHTML = "";
  var displayIncorrect = document.createElement("p");
  displayIncorrect.textContent = "You're incorrect";
  resultsWord.appendChild(displayIncorrect)
  if(secondsRemaining === 0){
    gameOver();
  } else{
  secondsRemaining -= 15;
  };
};

function gameOver(){
  console.log("You ran out of time or you don't have anymore questions.")
  secondsRemaining === 0;
  clearInterval(timer);
  console.log(score);
  localStorage.setItem("score", score);
  window.location.href = "highscore.html";
};