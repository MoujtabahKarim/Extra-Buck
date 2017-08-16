
//Canvas variables 
var canvas;
var canvasContext;
//Player Variables
var score = 0;
var playerWidth = 30  ;
var playerHeight = 30 ; 


//+1 Bank
const bSize = 50 ; 
const b1x = 20;
const b1y = 250;
 





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

//Updates the positions of each object on the canvas
function update() {


	// +1 Bank
	if(playerYposition > b1y && playerYposition < b1y + bSize/2) {
		if(playerXposition > b1x && playerXposition < b1x + bSize/2)  {
			score++ ; 
		}
		
	}
	
}

//Draws the positions of each object on the canvas
function draw() {
	
	

	//Drawing the background
	drawRect(0, 0, canvas.width, canvas.height, "grey") ; 



	//Drawing the bank
	drawRect(b1x, b1y, bSize, bSize, "white");
	
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

	//+1Label
	canvasContext.fillStyle = "green" ;
	canvasContext.fillText("$1" , b1x + 8, b1y + (bSize/1.45));

	}
	


function updateScore() {

}