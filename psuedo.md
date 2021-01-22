1. Start button
2. When start button is clicked the timer starts.
3. 5 questions with 4 answers in each question.
4. When you answer a question, you're presented with the next question.
5. IF question is answered incorrectly, time is deducted from the timer. 
6. Message if you answer correctly or incorrectly.
7. There is a view highscore option
8. When there are no more questions or the timer reaches 0, the game is over.
9. When the game is over, the user can save their initials in the score. 
10. The initials show each time for all the different users who've played the game. 


Molly Soufrine to Everyone (6:28 PM)
// hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");
Molly Soufrine to Everyone (6:49 PM)
{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
Molly Soufrine to Everyone (6:53 PM)
var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;