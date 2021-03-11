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
var currentIndex = 0;
var userChoice;
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
    timerDisplay.textContent = secondsRemaining;

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
    secondsRemaining += 15;
  }
  else{
    console.log("oof.");
    secondsRemaining -= 15;

  }
  currentIndex++;
  displayQuestion();
};



