// array for questions

var questions = [
    {
        question: "What can be stored in an array in JavaScript?",
        choices: ["a. strings", "b. boolean values", "c. other arrays", "d. all of the above"],
        answer: "d. all of the above"

    },

    {
        question: "String values can be denoted by enclosing them in _____.",
        choices: ["a. square braces", "b. curly braces", "c. quotation marks", "d. parentheses"],
        answer: "c. quotation marks"
    },

    {
        question: "What is the difference between == and === in JavaScript?",
        choices: ["a. == checks for value equality, === checks for value and type equality", "b. == checks for type equality, === checks for value and type equality", "c. both of them check for value and type equality, and they function the same", "d. none of the above"],
        answer: "a. == checks for value equality, === checks for value and type equality"
    },

    {
        question: "How do you add a single-line comment in JavaScript?",
        choices: ["a. <!--comment--!>", "b. //comment", "c. /*comment*/", "d. #comment"],
        answer: "b. //comment"
    },

    {
        question: "Which of the following is an example of a DOM event?",
        choices: ["a. click", "b. load", "c. drag", "d. all of the above"],
        answer: "d. all of the above"
    }
];

//contains the score and keeps track of questions asked
var score = 0;
var quizIndex = 0;

// grab elements from HTML

var currentTime = document.querySelector("#timer");
var startQuiz = document.querySelector("#startQuiz");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

//60 seconds for quiz time
var timeLeft = 61;

//interval time
var intervalTime = 0;

//deduct 5 seconds for wrong answers
var timePenalty = 5;


//timer function

startQuiz.addEventListener("click", function () {
    if (intervalTime === 0) {
        intervalTime = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(setInterval);
                finishedQuiz ();
                currentTime.textContent = "Time's up!";
            }
    }, 1000);
    }
    render(quizIndex);
});

//creates new unordered lists
var ulCreator = document.createElement ("ul");


//writes questions and choices to the page
function render(quizIndex) {
    //make sure these elements are empty
    questionsDiv.innerHTML = "";
    ulCreator.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[quizIndex].question;
        var userChoices = questions[quizIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreator);
        ulCreator.appendChild(listItem);
        listItem.addEventListener("click", (grade));
    })
    };

// grade user's selected choice against contents of "answer"
function grade(event) {
    var userAnswer = event.target;

    if(userAnswer.matches("li")) {
        var divCreator = document.createElement("div");
        divCreator.setAttribute("id", "responseDiv");

        //if user's choice matches the answer
        if (userAnswer.textContent == questions[quizIndex].answer) {
            //increase their score
            score++;
            //notify user
            divCreator.textContent = "Correct! The answer is: " + questions[quizIndex].answer;
        }

        //If user is wrong
        else {
            //penalize their time
            timeLeft = timeLeft - timePenalty;
            //notify
            divCreator.textContent = "Wrong! The correct answer is: " + questions[quizIndex].answer;

        }
    }

    //advance to next question

    quizIndex++;

    //finish quiz when questions run out
    if (quizIndex >= questions.length) {
        finishedQuiz ();
        divCreator.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.length + " correct!";
    }
    else {
        render(quizIndex);
    }
    questionsDiv.appendChild(divCreator);
}


//create landing page when the user finishes the quiz
function finishedQuiz () {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

       // create h1 to signal to the user the quiz is done
       var h1Creator = document.createElement("h1");
       h1Creator.setAttribute("id", "h1Creator");
       h1Creator.textContent = "All Done!"
   
       questionsDiv.appendChild(h1Creator);
   
       //p element to hold final score
       var paragraphCreator = document.createElement("p");
       paragraphCreator.setAttribute("id", "createdParagraph");
   
       questionsDiv.appendChild(paragraphCreator);

       if (timeLeft >= 0) {
           var timeRemaining = timeLeft;
           var paragraphCreator2 = document.createElement("p");
           paragraphCreator2.setAttribute("id", "createdParagraph2");
           clearInterval(intervalTime);
           createdParagraph.textContent = "Your final score is: " + timeRemaining;
           questionsDiv.appendChild(paragraphCreator2);
       }

       //label for user's initials
       var labelCreator = document.createElement("label");
       labelCreator.setAttribute("id", "createdLabel");
       labelCreator.textContent = "Please enter your initials: ";

       questionsDiv.appendChild(labelCreator);

       //input for user to enter their initials
       var inputCreator = document.createElement("input");
       inputCreator.setAttribute("type", text);
       inputCreator.setAttribute("id", "initial")
       inputCreator.textContent = "";

       questionsDiv.appendChild(inputCreator);

       //submit button
       var submitButton = document.createElement("button");
       submitButton.setAttribute("type", "text");
       submitButton.setAttribute("id", "submitButton");

       questionsDiv.appendChild(submitButton);

       //local storage for initials and score
       submitButton.addEventListener("click", function () {
           var initials = inputCreator.value;

           if (initials === null) {
               alert("No value entered!");
           }

           else {
               var finalScore = {initials: initials, score: timeRemaining}
               console.log(finalScore);
               var highScores = localStorage.getItem("highScores");
               if (highScores === null) {
                   highScores = [];
               }
               else {
                   highScores = JSON.parse("highScores");
               }
               highScores.push(finalScore);
               var newScore = JSON.stringify(highScores);
               localStorage.setItem("highScores", newScore);
               window.location.replace ("./HighScores.html");
           }
       });
   
}