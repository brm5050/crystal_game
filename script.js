

//variables


var totalScore = 0;






//random number to start game 19-120


var actualNumber = Math.floor(Math.random() * 101) + 19;

console.log("Actual Number: " + actualNumber);


//random number for each crystal  1-12

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

console.log("crystal 1: " + crystal1);
console.log("crystal 2: " + crystal2);
console.log("crystal 3: " + crystal3);
console.log("crystal 4: " + crystal4);






//take that random number for each crystal and add it to a total


$("#greenBtn").on("click", function() {
	var totalScore = ($(this).attr(crystal1));
	totalScore = parseInt(totalScore);
})

console.log("Compounding Score: " + totalScore)



//display "win" if score matches first random game number



//if player wins or loses then reset score



//count number of wins and losses



