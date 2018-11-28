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
        imageUrl: "../images/RedGem.png"
       },
       blue: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "../images/BlueGem.png"
       },
       purple: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "../images/PurpleGem.png"
       },
       yellow: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "../images/YellowGem.png"
       }

   };

}

// creatin the random number generator for values betwwen 19 -120
function randomNumGen() {
    return Math.floor(Math.random() * 120) + 19;
}

//function that resets game





































});