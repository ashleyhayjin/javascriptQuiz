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
var choicesButtons = document.getElementById("answerChoicesDisplay");
startBtn.addEventListener("click", startGame);

function startGame (){
  startDiv.classList.add("hide");
  displayQuestion();
}

console.log(allQuestions.length);
function displayQuestion (){
  for(i = 0; i < 1; i++){
    var questionGame = document.createElement("p");
    questionGame.textContent = allQuestions[i].question;
    gameDiv.appendChild(questionGame);
    var answerChoiceBtn1 = document.createElement("button");
    var answerChoiceBtn2 = document.createElement("button");
    var answerChoiceBtn3 = document.createElement("button");
    answerChoiceBtn1.textContent = allQuestions[i].choices[0];
    answerChoiceBtn2.textContent = allQuestions[i].choices[1];
    answerChoiceBtn3.textContent = allQuestions[i].choices[2];
    choicesButtons.appendChild(answerChoiceBtn1);
    choicesButtons.appendChild(answerChoiceBtn2);
    choicesButtons.appendChild(answerChoiceBtn3);

    if(answerChoiceBtn1.addEventListener("click", function() || )
  }; 
}