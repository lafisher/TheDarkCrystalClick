//variables

var numberToWin = 0;
var mysticNum = 0; 
var gelflingNum = 0; 
var crystalNum = 0;
var aughraNum = 0; 
var score =0; 
var winCount = 0;
var lossCount = 0;

//create button click for start quest button / reset game to . . .

//generatenrandom number 
function startGame () {
numberToWin = Math.floor((Math.random() * (120-19)) + 19);
console.log(numberToWin);

//append to quest div
document.getElementById("quest").innerHTML = numberToWin;

}
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

}
crystalPower ();

//$(document).on("click", ".btn btn-primary btn-lg",startGame,crystalPower);

//and generate random numbers for each dark crystal character div

//and append to each character div 

//onclick function for each character div to

//append crystal magic wisdom love with new score for every char click

// if else statement for quest vs CMWL 

//if quest === CMWL you win! flash you win image and win text over game play

//else quest >! CMWL you lose! flash lose image and lose text over game play
// $(document).on("click", ".className", functionName);










//"What was sundered and undone"
//"Shall be whole the Two made One"
//"You win!"