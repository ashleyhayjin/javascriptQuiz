var buttonChoices = document.querySelector(".choices");
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("timerText");
var answerButtons = document.querySelectorAll(".answer-btn");

//Starts Game
startButton.addEventListener("click", startGame);

function init() {
  answerButtons.classList.add("hide");
  startGame();
}

//Starting Game Function 
function startGame() {
  startButton.classList.add("hide");
}
var timeLeft = 60;

function setTimer() {
  var timerInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      //game is over
      clearInterval(timerInterval);
    }
  }, 1000);
}

function questionReveal() {}

var allQuestions = [
  {
    question: "How do you define a variable on javascript?",
    answers: {
      a: "var x",
      b: "x",
      c: "var = x",
    },

    rightAnswer: "a",
  },
  {
    question: "How do you define a variable on javascript?",
    answers: {
      a: "var x",
      b: "x",
      c: "var = x",
    },

    rightAnswer: "a",
  },
  {
    question: "How do you define a variable on javascript?",
    answers: {
      a: "var x",
      b: "x",
      c: "var = x",
    },

    rightAnswer: "a",
  },
  {
    question: "How do you define a variable on javascript?",
    answers: {
      a: "var x",
      b: "x",
      c: "var = x",
    },

    rightAnswer: "a",
  },
  {
    question: "How do you define a variable on javascript?",
    answers: {
      a: "var x",
      b: "x",
      c: "var = x",
    },

    rightAnswer: "a",
  },
];
