function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.globalCompositeOperation='destination-over';

    wall.draw();
    wall2.draw();
    wall3.draw();


    ctx.fillStyle = tile;
    ctx.beginPath();
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.closePath();
    ctx.fill();
    ctx.globalCompositeOperation='destination-atop';
    boundary(player);

    player.draw();
    wall.barrier(player);
    wall2.barrier(player);
    wall3.barrier(player);

    //draw_fog();

    key.carry_check(player);
    key.draw();

    //door.draw();

}

// set up canvas and context
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
var bg = document.getElementById('bg');
const tile = ctx.createPattern(bg,'repeat');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-200;

var upPressed = downPressed = rightPressed = leftPressed = false;
var player = new Player(8,63,63,4,'red');
var key = new Key(10, 88, 88);
var door = new Door(0,0)

var wall = new Wall(512,32,143,151);
var wall2 = new Wall(32,128,143,183);
var wall3 = new Wall(64,64,143,343);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// update the screen
update();
