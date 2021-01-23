//Questions Index
var allQuestions = [
  {
    question: "Where do you link a javascript sheet into html?",
    choiceA: "at the top in the <head> element",
    choiceB: "right above the closing </body> element",
    choiceC: "right below the Css stylsheet",
    rightAnswer: "choice B",
  },
  {
    question: "What does the DOM stand for?",
    choiceA: "Document On Model",
    choiceB: "Document Object Mobile",
    choiceC: "Document Object Model",
    rightAnswer: "choice C",
  },
  {
    question: "What type of brackets are objects nested into?",
    choiceA: "{}",
    choiceB: "[]",
    choiceC: "()",
    rightAnswer: "choice A",
  },
  {
    question: "How do you define a variable on javascript?",
    choiceA: "var x;",
    choiceB: "x;",
    choiceC: "var = x;",
    rightAnswer: "choice A",
  },
  {
    question: "What loops are used in Javascript?",
    choiceA: "For",
    choiceB: "While",
    choiceC: "Both",
    rightAnswer: "choice C",
  },
];

//score tracking
var score = 0;
var questionIndex = 0;
var finalQuestionIndex = allQuestions.length;

//timer variables
// var timer = document.querySelector("");
var timeLeft = 75;
var startTime = 0;
var timerEl = document.querySelector(".timer");

//variables
var startButton = document.querySelector(".start-btn");
var answerChoices = document.getElementById("button-hidden");
var p = document.getElementById("hide-p");
var timerInterval;
var questionText = document.querySelector(".question-display");
var buttonA = document.querySelector(".A");
var buttonB = document.querySelector(".B");
var buttonC = document.querySelector(".C");
//start Game
startButton.addEventListener("click", startGame);

function timer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining.";
    if (timeLeft <= 0) {
      timerEl.textContent = "Game is Over";
    }
  }, 1000);
}

function hideElements() {
  startButton.classList.add("hide");
  answerChoices.classList.remove("hide");
  p.classList.add("hide");
}

function revealQuestion() {
  for (var i = 0; i < allQuestions.length; i++) {
    questionText.textContent = allQuestions[i].question;
    buttonA.textContent = allQuestions[i].choiceA;
    buttonB.textContent = allQuestions[i].choiceB;
    buttonC.textContent = allQuestions[i].choiceC;
  }
}

function startGame() {
  timer();
  hideElements();
  revealQuestion();
}
