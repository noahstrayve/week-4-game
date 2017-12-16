$(document).ready(function(){

	var randomNumberOne = Math.floor(Math.random() * 12 + 1);
	var randomNumberTwo = Math.floor(Math.random() * 12 + 1);
	var randomNumberThree = Math.floor(Math.random() * 12 + 1);
	var randomNumberFour = Math.floor(Math.random() * 12 + 1);

	var randomNumberGoal = Math.floor(Math.random() * 102 + 19);

	var countingUp = [];
	var datNumber = 0;

	var winner = 0;
	var loser = 0;

	var ratio = 1;

	var track = [];

		

	document.getElementById("winCondition").innerHTML = randomNumberGoal
	document.getElementById("win").innerHTML = winner
	document.getElementById("loss").innerHTML = loser

	$(".crystalOne").on("click", function() {
		
		alert(randomNumberOne)

		countingUp = []
			
		countingUp.push(randomNumberOne)
			
		for (var i = 0; i< countingUp.length; i++) {
		
			datNumber += countingUp[i];
	
		}
	
		alert("Your have " + datNumber + " gems!")
			
		if (datNumber === randomNumberGoal) {
		
			alert("YOU WIN!!!!!!!")
		
			restartGameWin()
	
		}

		else if (datNumber > randomNumberGoal) {
		
			alert("YOU LOSE!!!!!!!")
		
			restartGameLose()
	
		}
	});
		
	$(".crystalTwo").on("click", function() {
	
		alert(randomNumberTwo)

		countingUp = []
			
		countingUp.push(randomNumberTwo)
			
		for (var i = 0; i< countingUp.length; i++) {
		
			datNumber += countingUp[i];
	
		}
	
		alert("Your have " + datNumber + " gems!")
			
		if (datNumber === randomNumberGoal) {
		
			alert("YOU WIN!!!!!!!")
		
			restartGameWin()
	
		}

		else if (datNumber > randomNumberGoal) {
		
			alert("YOU LOSE!!!!!!!")
		
			restartGameLose()
	
		}
	});
		
	$(".crystalThree").on("click", function() {
	
		alert(randomNumberThree)

		countingUp = []
			
		countingUp.push(randomNumberThree)
			
		for (var i = 0; i< countingUp.length; i++) {
		
			datNumber += countingUp[i];
	
		}
			
		alert("Your have " + datNumber + " gems!")
			
		if (datNumber === randomNumberGoal) {
		
			alert("YOU WIN!!!!!!!")
		
			restartGameWin()
	
		}

		else if (datNumber > randomNumberGoal) {
		
			alert("YOU LOSE!!!!!!!")
		
			restartGameLose()
	
		} 
	});
		
	$(".crystalFour").on("click", function() {
	
		alert(randomNumberFour)

		countingUp = []
			
		countingUp.push(randomNumberFour)
			
		for (var i = 0; i< countingUp.length; i++) {
		
			datNumber += countingUp[i];
	
		}
			
		alert("Your have " + datNumber + " gems!")
			
		if (datNumber === randomNumberGoal) {
		
			alert("YOU WIN!!!!!!!")
		
			restartGameWin()
	
		}

		else if (datNumber > randomNumberGoal) {
		
			alert("YOU LOSE!!!!!!!")
		
			restartGameLose()
	
		} 
	});	

	function restartGameWin() {
		winner++
		document.getElementById("win").innerHTML = winner
		datNumber = 0
		countingUp = []
		randomNumberOne = Math.floor(Math.random() * 12 + 1);
		randomNumberTwo = Math.floor(Math.random() * 12 + 1);
		randomNumberThree = Math.floor(Math.random() * 12 + 1);
		randomNumberFour = Math.floor(Math.random() * 12 + 1);
		randomNumberGoal = Math.floor(Math.random() * 102 + 19);
		document.getElementById("winCondition").innerHTML = randomNumberGoal
	}	

	function restartGameLose() {
		loser = loser + ratio
		document.getElementById("loss").innerHTML = loser	
		datNumber = 0
		countingUp = []
		randomNumberOne = Math.floor(Math.random() * 12 + 1);
		randomNumberTwo = Math.floor(Math.random() * 12 + 1);
		randomNumberThree = Math.floor(Math.random() * 12 + 1);
		randomNumberFour = Math.floor(Math.random() * 12 + 1);
		randomNumberGoal = Math.floor(Math.random() * 102 + 19);
		document.getElementById("winCondition").innerHTML = randomNumberGoal
	}

});