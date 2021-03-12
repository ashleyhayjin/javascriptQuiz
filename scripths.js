var submitBtn = document.querySelector(".saveBtn");
var inputText = document.querySelector(".inputSave")
var localDisplay = document.getElementById("display-scores");
var scoreMsg = document.querySelector("#score-message");
window.addEventListener("load", displayScore);
var scoreDisplay = localStorage.getItem("score");
var cleanBtn = document.querySelector(".clean-local");
submitBtn.addEventListener("click", saveLocal);

var scoreMessage = document.createElement("p");
var localEL = document.createElement("p");

function saveLocal(){
    localStorage.setItem("GameName", inputText.value);
    var displayLocal = localStorage.getItem("GameName");
    localEL.textContent = displayLocal + " " + scoreDisplay;
    localDisplay.appendChild(localEL);
}

function displayScore (){
scoreMessage.textContent = "Your score was " + scoreDisplay;
scoreMsg.appendChild(scoreMessage);
}

cleanBtn.addEventListener("click", cleanQuery);

function cleanQuery(){
    localStorage.removeItem("score");
    localStorage.removeItem("GameName");
    scoreMessage.textContent = "";
    localEL.textContent = "";
}
