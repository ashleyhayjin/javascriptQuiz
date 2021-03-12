var submitBtn = document.querySelector(".saveBtn");
var inputText = document.querySelector(".inputSave")
var localDisplay = document.getElementById("display-scores");
var scoreMsg = document.getElementById("score-message");
submitBtn.addEventListener("click", saveLocal);
function saveLocal(){
    localStorage.setItem("GameName", inputText.value);
    var displayLocal = localStorage.getItem("GameName");
    var localEL = document.createElement("p");
    localEL.textContent = displayLocal;
    localDisplay.appendChild(localEL);
    console.log(displayLocal);
    var scoreDisplay = localStorage.getItem("score");
    var scoreMessage = document.createElement("p");
    scoreMessage.textContent = "Your score was" + scoreDisplay;
    scoreMsg.appendChild(scoreMessage);
    inputText.value = ""; 
}

