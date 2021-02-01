const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;

var x = 65
var y = 65

var p_size = 10;
var p

drawPlayer();
drawKey();
drawFog();

function drawPlayer() { 
    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,10,10);
}

function drawKey() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(540,230,10,10);
}


function drawFog() {
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(x+5, y+5, 28, 0, 2 * Math.PI);
    ctx.rect(640, 0, -640, 480);
    ctx.fill();
}