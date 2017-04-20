// Make sure you put your code in a document.ready!
$(document).ready(function () {
	// DOM element references
	var $totalScore = $('#totalscore');

	//variables
	var totalScore = 0;

<<<<<<< HEAD
//variables
/*
=======

>>>>>>> 6e2ca9d127cdca224b5fef4421de72fb2efeece5




	//random number to start game 19-120
	var actualNumber = Math.floor(Math.random() * 101) + 19;
	var totalScore = 0;

	console.log("Actual Number: " + actualNumber);


	//random number for each crystal  1-12 
	// Which crystal variable corresponds to which color?
	// green = cystal1
	var crystal1 = Math.floor(Math.random() * 12) + 1;
	var crystal2 = Math.floor(Math.random() * 12) + 1;
	var crystal3 = Math.floor(Math.random() * 12) + 1;
	var crystal4 = Math.floor(Math.random() * 12) + 1;

	console.log("crystal 1: " + crystal1);
	console.log("crystal 2: " + crystal2);
	console.log("crystal 3: " + crystal3);
	console.log("crystal 4: " + crystal4);






	//take that random number for each crystal and add it to a total
	$(".btn").on("click", function() {
		console.log("You clicked a gem! Which one is it?");
		var gemColor = $(this).data('gem-color');

		var scoreToAdd;

		// TODO: add all the other scores!
		switch (gemColor) {
			case 'green':
				scoreToAdd = crystal1;
				break;
			case 'yellow':
				break;
			case 'red':
				break;
			case 'blue':
				break;
			default:
				console.log("There is no color " + gemColor + " - how did you get that?");
				break;
		}

		totalScore += parseInt(scoreToAdd);
		redraw();
	})

	console.log("Compounding Score: " + totalScore)

	// redraw any HTML elements that might have been affected by interactions
	function redraw () {
		$totalScore.find('h1').text(totalScore);
	}



	//display "win" if score matches first random game number

<<<<<<< HEAD
console.log("Compounding Score: " + totalScore)*/
=======
>>>>>>> 6e2ca9d127cdca224b5fef4421de72fb2efeece5


	//if player wins or loses then reset score



	//count number of wins and losses

	// Initially, draw the DOM so that total score is shown as 0
	redraw();
});


// Make sure you put your code in a document.ready!
$(document).ready(function () {
	// DOM element references
	var $totalScore = $('#totalscore');

	//variables
	var totalScore = 0;






	//random number to start game 19-120
	var actualNumber = Math.floor(Math.random() * 101) + 19;
	var totalScore = 0;

	console.log("Actual Number: " + actualNumber);


	//random number for each crystal  1-12 
	// Which crystal variable corresponds to which color?
	// green = cystal1
	var crystal1 = Math.floor(Math.random() * 12) + 1;
	var crystal2 = Math.floor(Math.random() * 12) + 1;
	var crystal3 = Math.floor(Math.random() * 12) + 1;
	var crystal4 = Math.floor(Math.random() * 12) + 1;

	console.log("crystal 1: " + crystal1);
	console.log("crystal 2: " + crystal2);
	console.log("crystal 3: " + crystal3);
	console.log("crystal 4: " + crystal4);






	//take that random number for each crystal and add it to a total
	$(".btn").on("click", function() {
		console.log("You clicked a gem! Which one is it?");
		var gemColor = $(this).data('gem-color');

		var scoreToAdd;

		// TODO: add all the other scores!
		switch (gemColor) {
			case 'green':
				scoreToAdd = crystal1;
				break;
			case 'yellow':
				scoreToAdd = crystal2;
				break;
			case 'red':
				scoreToAdd = crystal3;
				break;
			case 'blue':
				scoreToAdd = crystal4;
				break;
			default:
				//console.log("There is no color " + gemColor);
				break;
		}



		totalScore += parseInt(scoreToAdd);
		redraw();

		if (totalScore === actualNumber) {
			$("#winner").html("You Win!!")
		}

		else if (totalScore > actualNumber)
			$("#winner").html("You Lose, You Suck");
	

	})

	console.log("Compounding Score: " + totalScore)

	// redraw any HTML elements that might have been affected by interactions
	function redraw () {
		$totalScore.find('h1').text(totalScore);
	}



	//display "win" if score matches first random game number
	


	//if player wins or loses then reset score



	//count number of wins and losses

	// Initially, draw the DOM so that total score is shown as 0
	redraw();
});