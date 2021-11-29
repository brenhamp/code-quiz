var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");



var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

//if score list is not empty
if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        //display them in a list
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
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