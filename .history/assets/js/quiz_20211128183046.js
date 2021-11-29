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

            if (timeLeft <=0) {
                clearInterval(setInterval);
                finishQuiz ();
                currentTime.textContent = "Time's up!";
            }
    }, 1000);
    }
    render(questionIndex);

});

//creates new unordered lists
var ulCreator = document.createElement ("ul");


//writes questions and choices to the page
function render(questionIndex) {
    //make sure these elements are empty
    questionsDiv.innerHTML = "";
    ulCreator.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var user
    }
}