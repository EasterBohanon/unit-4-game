var blue = Math.floor(Math.random() * 12) + 1;
var purple = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
// this is the number that we will be trying to reach
var randomNum = Math.floor(Math.random() * 200) + 50;
var userScore = 0;

var wins = 0;
var losses = 0;


var targetScoreText = $("#target-score");
var userScoreText = $("#user-score");
var winsText = $("#wins");
var lossText = $("#losses");

function play() {
    targetScoreText.text(randomNum);
    blue = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;
    red = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    randomNum = Math.floor(Math.random() * 200) + 50;
    userScore = 0;
    userScoreText.html(userScore);
    targetScoreText.html(randomNum);
    console.log(randomNum);

}
$(document).ready(function(){
    targetScoreText.html(randomNum);
    
    $("#red").click(function (event) {
        userScore = userScore + red;
        userScoreText.html(userScore);
        game();
        console.log(red, "red guess")
    });
    $("#blue").click(function (event) {
        userScore = userScore + blue;
        userScoreText.html(userScore);
        game();
        console.log(blue, "blue guess")
    });
    $("#purple").click(function (event) {
        userScore = userScore + purple;
        userScoreText.html(userScore);
        game();
        console.log(purple, "purple guess")
    });
    $("#yellow").click(function (event) {
        userScore = userScore + yellow;
        userScoreText.html(userScore);
        game();
        console.log(yellow, "yellow guess")
    });

    function game() {
        if (userScore === randomNum) {
            alert("Alrighty there Einstein");
            $("#wins").text(wins +=1 );
            play();
        } else if(userScore > randomNum) {
            alert("Maybe you should revisit grade school");
            $("#losses").text(losses +=1 );
            play();
        }
       

    }

});
