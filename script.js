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

//start Game
startButton.addEventListener("click", startGame);

//timer
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
  //displays question
  document.getElementById("question-display").innerHTML = "";
  var questions = document.createElement("h1");
  var currentQuestion = allQuestions[questionIndex].question;
  questions.textContent = currentQuestion;

  var questionDisplay = document.getElementById("question-reveal");
  questionDisplay.appendChild(questions);

  var answerChoice = allQuestions[questionIndex].choices;
  //choices buttons
  for (var i = 0; i < answerChoice.length; i++) {
    var choicesButtons = document.createElement("button");
    var displayButton = document.getElementById("answer-btn");
    displayButton.appendChild(choicesButtons);
    choicesButtons.textContent = answerChoice[i];
    choicesButtons.onclick = answerCheck;
  }
}

function answerCheck() {
  var correctAnswer = allQuestions[questionIndex].rightAnswer;
  userPick = this.innerHTML;

  if (userPick === correctAnswer) {
    console.log("response :", " You got it right!");
  } else if (userPick !== correctAnswer) {
    console.log("response:", "You got it wrong");
    timeOff();
  }
  questionIndex++;
  if (questionIndex === allQuestions.length) {
    console.log("Here's your score");
  }

  revealQuestion();
};

function hideQuestion (){


}

function timeOff() {
  timeLeft -= 15;
}

function startGame() {
  timer();
  hideElements();
  revealQuestion();
}
// counter for current question, every time you go to the next questions i++, at the end there's a prompt to save their score as well to
//localstorage. Dynamically inside the DOM
