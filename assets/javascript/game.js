//variables

var numberToWin = 0;
var mysticNum = 0; 
var gelflingNum = 0; 
var crystalNum = 0;
var aughraNum = 0; 
var score = 0; 
var winCount = 0;
var lossCount = 0;

//create button click for start quest button / reset game 

//generate random number 
function startGame () {
numberToWin = Math.floor((Math.random() * (120-19)) + 19);
console.log(numberToWin);


//append to quest div
document.getElementById("quest").innerHTML = numberToWin;
}

//append to Crystal Magic Wisdom Love



startGame();

function crystalPower () {
mysticNum = Math.floor((Math.random() * 12) + 1);
console.log(mysticNum);
gelflingNum = Math.floor((Math.random() *  12) + 1);
console.log(gelflingNum);
crystalNum = Math.floor((Math.random() *  12) + 1);
console.log(crystalNum);
aughraNum = Math.floor((Math.random() *  12) + 1);
console.log(aughraNum);

$("#mystic").on("click", function() {
	  var mysticNum = ($(this).attr("data-mysticNum"));
    mysticNum = parseInt(mysticNum);
    
    score += mysticNum;

    alert("New score: " + score);

})

$("#gelfling").on("click", function() {
	  var gelflingNum = ($(this).attr("data-gelflingNum"));
    gelflingNum = parseInt(gelflingNum);
    
    score += gelflingNum;

    alert("New score: " + score);

})

$("#shards").on("click", function() {
	  var crystalNum = ($(this).attr("data-crystalNum"));
    crystalNum = parseInt(crystalNum);
    
    score += crystalNum;

    alert("New score: " + score);

})

$("#aughra").on("click", function() {
	  var aughraNum = ($(this).attr("data-aughraNum"));
    aughraNum = parseInt(aughraNum);
    
    score += aughraNum;

    alert("New score: " + score);

})
};

crystalPower ();

document.getElementById("win").innerHTML = winCount;
document.getElementById("lose").innerHTML = lossCount;

//$(document).on("click", ".btn btn-primary btn-lg",startGame,crystalPower);

//and generate random numbers for each dark crystal character div

//and attach to each character div 

//onclick function for each character div to

//append crystal magic wisdom love with new score for every char click

// if else statement for quest vs CMWL 

//if quest === CMWL you win! flash you win image and win text over game play

//else quest >! CMWL you lose! flash lose image and lose text over game play
// $(document).on("click", ".className", functionName);










//"What was sundered and undone"
//"Shall be whole the Two made One"
//"You win!"