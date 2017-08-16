
//Canvas variables 
var canvas;
var canvasContext;
//Player Variables
var score = 0;
var playerWidth = 30  ;
var playerHeight = 30 ; 
var playerXposition = 450 ; 
var playerYposition = 400 ; 


//+1 Bank
const bSize = 50 ; 
const b1x = 20;
const b1y = 250;

const b2x = 150 ; 
const b2y = 250 ; 

const b3x = 280 ; 
const b3y = 250 ;

const b4x = 410 ; 
const b4y = 250 ;

const b5x = 540 ; 
const b5y = 250 ;

const b6x = 670 ; 
const b6y = 250 ;

const b7x = 800 ; 
const b7y = 250 ;






window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 60;
	setInterval(function(){
		update() ; 
		draw() ; 
	}, 1000/framesPerSecond);

	canvas.addEventListener('mousemove', 
		function(evt) {
			var mousePos = calculateMousePos(evt);


			playerYposition = mousePos.y - playerHeight/2;
			playerXposition = mousePos.x - playerWidth/2;
			
			
	});
}

function calculateMousePos(evt) {
	var rect = canvas.getBoundingClientRect() ; 
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop ;

	return {
		x:mouseX,
		y:mouseY
	};
}

function collides(x, y) {
	if(playerYposition > y && playerYposition < y + bSize/2) {
		if(playerXposition > x && playerXposition < x + bSize/2)  {
			return true ; 
		}
		
	} else {
		return false ; 
	}

}

//Updates the positions of each object on the canvas
function update() {

	score+= 0.10; 

	// +1 Bank
	if(collides(b1x, b1y)) {
		score++; 
	}
	// +100 Bank
	if(collides(b2x, b2y)) {
		score+= 100; 
	}

	if(collides(b3x, b3y)) {
		score+=1000;
	}	


	if(collides(b4x, b4y)) {
		score+=10000;
	}
	
	if(collides(b5x, b5y)) {
		score+= 100000; 
	}

	if(collides(b6x, b6y)) {
		score+=1000000;
	}	

	if(collides(b7x, b7y)) {
		score+= 1000000;
	}
	
}

//Draws the positions of each object on the canvas
function draw() {
	
	

	//Drawing the background
	drawRect(0, 0, canvas.width, canvas.height, "grey") ; 



	//Drawing the bank
	drawRect(b1x, b1y, bSize, bSize, "white");

	drawRect(b2x, b2y, bSize, bSize, "white");

	drawRect(b3x, b3y, bSize, bSize, "white");

	drawRect(b4x, b4y, bSize, bSize, "white");

	drawRect(b5x, b5y, bSize, bSize, "white");

	drawRect(b6x, b6y, bSize, bSize, "white");

	drawRect(b7x, b7y, bSize, bSize, "white");
	
	//Drawing the player
	drawRect(playerXposition, playerYposition, playerWidth,playerHeight, "green");
	

	//Draws the score
	drawScore() ; 
	

}

function drawRect(xPosition, yPosition, width, height, color) {
	canvasContext.fillStyle = color ; 
	canvasContext.fillRect(xPosition, yPosition, width, height) ; 
}

function drawScore() {
	//Draws the $
	canvasContext.fillStyle = "white" ;
	canvasContext.font = "30px Arial";
	canvasContext.fillText("$ " , canvas.width/2, canvas.height-10);
	//Draws the score
	canvasContext.fillStyle = "yellow" ;
	canvasContext.fillText(Math.round(score) , canvas.width/2 + 19, canvas.height-10);



	}
	


function updateScore() {

}