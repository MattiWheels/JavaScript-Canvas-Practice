

// set up canvas and context
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-200;

var upPressed = downPressed = rightPressed = leftPressed = false;
var player = new Player(8,63,63,4,'red');
var key = new Key(10, 88, 88);

var wall = new Wall(512,32,143,151);
var wall2 = new Wall(32,128,143,183);
var wall3 = new Wall(64,64,143,343);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// update the screen
update();
