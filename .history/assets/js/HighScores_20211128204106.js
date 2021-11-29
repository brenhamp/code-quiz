var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");



var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

//if score list is not empty
if (highScores !== null) {

    for (var i = 0; i < highScores.length; i++) {
        //display them in a list
        var createLi = document.createElement("li");
        createLi.textContent = highScores[i].initials + " " + highScores[i].score;
        highScore.appendChild(createLi);

    }
}
// go back function
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});

//function to clear scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});