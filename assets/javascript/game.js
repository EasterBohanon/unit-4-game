$(document).ready(function() {

//Set variables for the game functions
// set variables for the target score, users score, wins and losses



//Number that will populate when crystals are clicked
var userScore = 0;

var randomNum = randomNumGen();

var wins = 0; 

var losses = 0;

var gems;



function randomCrystalVal() {
    return {
        points: Math.floor(Math.random() * 12) +1,
    };
}

// creatin the random number generator for values betwwen 19 -120
function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
}



//function that resets game

function resetGame() {
    userScore = 0;
    gems = randomCrystalVal;
    randomNum = randomNumGen;
    $("#target-score").text(randomNum);
}


function updatePage(didPlayerWin) {
    $("#wins").empty();

    if (didPlayerWin === true) {
      
        $("#wins").html('<p> Wins: </p>' + wins);
        alert("You Won Yo! You may be the next Einstein!");
        resetGame();
        showTargetScore();
    }
    else if (didPlayerWin === false) {
       
        $("#losses").html('<p> Losses: </p>' + losses);
        alert("Yeah thats a hard no! Try Again!");
        resetGame();
        showTargetScore();
    } 
}

// Hopefully will show the total number the user is clicking
function updateUserScore(gems) {
userScore += gems[gems.attr("users-score")].randomCrystalVal;
}

// will hopefully show the User's guess

function pleaseShowUserGuess() {
    var userScoreNum = $("#users-score").text(userScore);
    $("#users-score").html();
    $("#users-score").html(userScoreNum);

}

resetGame();
updatePage();
pleaseShowUserGuess();



//hopefully this will create an onclick event for the pictures
$(".gems").on("click", function() {
    randomCrystalVal();
    userScoreNum = userScore + randomCrystalVal;
    $("#users-score").text(userScore);
    updateUserScore($(this));
    pleaseShowUserGuess();


    if (userScoreNum === randomNum) {
        wins++;
        resetGame();
        updatePage(true);

    }

    else if (userScoreNum > randomNum) {
        losses++;
        resetGame();
        updatePage(false);

    }

});









































});