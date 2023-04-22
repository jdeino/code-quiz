// DOM Vars
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

// Clear Scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Local Storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

goBack.addEventListener("click", function () {
    window.location.replace("./highscores.html");
});