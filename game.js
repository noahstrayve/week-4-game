generateNumbers: function(){
	this.randomNum = Math.floor((Math.random() * 120) + 19);
	this.buttonANum = Math.floor((Math.random() * 12) + 1);
	this.buttonBNum = Math.floor((Math.random() * 12) + 1);
	this.buttonCNum = Math.floor((Math.random() * 12) + 1);
	this.buttonDNum = Math.floor((Math.random() * 12) + 1);
},

printGameStats: function(){
	console.log("Random number: " + this.randomNum);
	console.log("A number: " + this.buttonANum);
	console.log("B number: " + this.buttonBNum);
	console.log("C number: " + this.buttonCNum);
	console.log("D number: " + this.buttonDNum);
}

var winCounter = 0;
var lossCounter = 0;
var finalNumber = ""
var currentNumber = ""
var gemOne
var gemTwo
var gemThree
var gemFour

