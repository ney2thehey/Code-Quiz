// User is presented with 5 questions - array of objects
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#theanswerchoices");
var submitBtn = document.querySelector("#submit-quiz");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");
    //  Format for questions???
        // Object that conatins {question: string, Choices: array, answer: string}

        var Questions = [
            {
                mainquestion: "Method that removes last element from an array and returns that element",
                answerchoices: ["pop()", "shift()", "unshift()", "slice()"],
                Answer: "pop()"
            },
        
            {
                mainquestion: "What does HTML stand for?",
                answerchoices: ["HyperTransmit Markup Language", "HyperTransmition Markup Language", "HyperTransfer Markup Language", "HyperText Markup Language"],
                Answer: "HyperText Markup Language"
            },
        
            {
                mainquestion: "How does a for loop start?",
                answerchoices: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", " for (i <= 5; i++)"],
                Answer: "for (i = 0; i <= 5; i++)"
            },
        
            {
                mainquestion: "In JavaScript, which of the following is a logical operator?",
                answerchoices: ["|", "&&", "%", "/"],
                Answer: "&&" 
            },
        
            {
                mainquestion: "How do you write 'Hello World' in an alert box?",
                answerchoices: ["msgBox('Hello World')", "alertBox('Hello World')", "msg('Hello World')", "alert('Hello World')"],
                Answer: "alert('Hello World')"
            }];
        
        // Get Dom Elements
        

        
        // Quiz's initial state
        
        var mainQuestionIndex = 0;
        var time = Questions.length * 15;
        var timer;
        
        // Start quiz and hide frontpage
        
        function quizStart() {
            timer = setInterval(clockTick, 1000);
            timerEl.textContent = time;
            var landingScreenEl = document.getElementById("start-screen");
            landingScreenEl.setAttribute("class", "hide");
            questionsEl.removeAttribute("class");
            getQuestion();
        }
        
        // Loop through array of questions and answers and create list with buttons
        
        function getQuestion() {
            var currentQuestion = Questions[mainQuestionIndex];
          var promptEl = document.getElementById("question-words")
            promptEl.textContent = currentQuestion.mainquestion;
            choicesEl.innerHTML = "";
            currentQuestion.answerchoices.forEach(function(choice, i) {
                var choiceBtn = document.createElement("button");
                choiceBtn.setAttribute("value", choice);
                choiceBtn.textContent = i + 1 + ". " + choice;
                choiceBtn.onclick = questionClick;
                choicesEl.appendChild(choiceBtn);
            });
        }
        
        // Check for right answers and deduct time for wrong answer, go to next question
        
        function questionClick() {
            if (this.value !== Questions[mainQuestionIndex].Answer) {
              time -= 10;
              if (time < 0) {
                time = 0;
              }
              timerEl.textContent = time;
              feedbackEl.textContent = `Wrong! The correct answer was ${Questions[mainQuestionIndex].Answer}.`;
            
            } else {
              feedbackEl.textContent = "Correct!";
            
            }
            feedbackEl.setAttribute("class", "feedback");
            setTimeout(function() {
              feedbackEl.setAttribute("class", "feedback hide");
            }, 2000);
            mainQuestionIndex++;
            if (mainQuestionIndex === Questions.length) {
              quizEnd();
            } else {
              getQuestion();
            }
        }
        
        // End quiz by hiding questions, stop timer and show final score
        
        function quizEnd() {
            clearInterval(timer);
            var endScreenEl = document.getElementById("end-quiz");
            endScreenEl.removeAttribute("class");
            var finalScoreEl = document.getElementById("final-score");
            finalScoreEl.textContent = time;
            questionsEl.setAttribute("class", "hide");
        }
        
        // End quiz if timer reaches 0
        
        function clockTick() {
            time--;
            timerEl.textContent = time;
            if (time <= 0) {
              quizEnd();
            }
        }
        
        // Save score in local storage along with users' name
        
        function saveHighscore() {
            var name = nameEl.value.trim();
            if (name !== "") {
              var highscores =
                JSON.parse(window.localStorage.getItem("highscores")) || [];
              var newScore = {
                score: time,
                name: name
              };
              highscores.push(newScore);
              window.localStorage.setItem("highscores", JSON.stringify(highscores));
            }
        }
        
        // Save users' score after pressing enter
        
        function checkForEnter(event) {
            if (event.key === "Enter") {
                saveHighscore();
            }
        }
        nameEl.onkeyup = checkForEnter;
        
        // Save users' score after clicking submit
        
        submitBtn.onclick = saveHighscore;
        
        // Start quiz after clicking start quiz
        
        startBtn.onclick = quizStart;
 //what i did here with tutpr 
            // function displayQuestion (){
            //     document.getElementById("question-words").textContent=questions[0].prompt;
            //     document.getElementById("answer0").textContent=questions[0].options[i];

            // }


    
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next quesrion access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page


  // declare wordBlank, win, lose, timer, startButton (use querySelector)
  
  //declare variables 
  
  //create arrays used to create blanks and letters on screen
  
  //create array of words the user will guess. 
  
  //create an init function which will be called when the page loads 
  //example:
//   function init(){
//       getWins();
//       getLosses();
//   }
  
  //create a startGame function which is called when the start button is clicked.
  
  //create winGame function which will be called when the win conditions are met. 
  
  //create loseGame function which will be called when timer reaches 0
  
  //create setTimer function which starts and stops the timer and triggers winGame() and loseGame()
  //use SetInterval and clearInverval for this
  
  //create a function that creates blanks on screen
  //use math.floor that randomly picks word from words array. 
  //use loop to push blanks to blankLetters array
  //use (.join) to convert blankLetters array into a string and render it to the screen. 
  
  //create function to update win count on screen and save win count to local storage
  
  //create a function to update lose count on screen and save to local storage 
  
  //create getWins() and getLosses() functions to get stored value from local storage if it exists.  If stored value does not exist, set winCounter to 0. If stored value is retrieved from local storage, update win count to that value.
  
  //create function to test if guessed letter is in the word and renders it to the screen
  
  //attach event listener to document to listen to key event
  
  //attach event listener to start button to call startGame function on click 
  
  //call the init() function so that it fires when page opens
  
  //bonus: add reset button. 
  //create resetGame() function which resets win and loss counts as well as renders win and loss counts and set them into client storage. 
  //attach event listener to button. 