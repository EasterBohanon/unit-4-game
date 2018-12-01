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
       red: {
        points: Math.floor(Math.random() * 12) +1,
        // imageUrl: "../images/RedGem.png"
       },
       blue: {
        points: Math.floor(Math.random() * 12) +1,
        // imageUrl: "../images/BlueGem.png"
       },
       purple: {
        points: Math.floor(Math.random() * 12) +1,
        // imageUrl: "../images/PurpleGem.png"
       },
       yellow: { 
        points: Math.floor(Math.random() * 12) +1,
        // imageUrl: "../images/YellowGem.png"
       }

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
       wins++;
        $("#wins").htm('<p> Wins: </p>' + wins);
        alert("You Won Yo! You may be the next Einstein!");
        resetGame();
        showTargetScore();
    }
    else if (didPlayerWi === false) {
        losses++;
        $("#losses").htm('<p> Losses: </p>' + losses);
        alert("Yeah thats a hard no! Try Again!");
        resetGame();
        showTargetScore();
    } 
}







































});