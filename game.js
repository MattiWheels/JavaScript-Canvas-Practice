class Player {
    constructor(size,x,y,v,hue) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.v = v;
        this.hue = hue;
    }
    draw() {
        this.move();
        this.vision();
        ctx.fillStyle = this.hue;
        ctx.fillRect(this.x,this.y,10,10);
        
    }
    vision() {
        ctx.arc(this.x+5,this.y+5,55,0,2 * Math.PI);
        ctx.closePath();
    }
    move() {
        
    }

}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
        console.log('right');
        player.x += player.v;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
        console.log('left');
        player.x -= player.v;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
        console.log('up');
        player.y -= player.v;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
        console.log('down');
        player.y += player.v;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function update() {
    requestAnimationFrame(update);

    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.draw();
    player2.draw();
    player3.draw();
    //ctx.fillStyle = "grey";
    //ctx.rect(canvas.width,0,-canvas.width,canvas.height);
    //ctx.fill();
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let player = new Player(10,64,64,10,'red');
let player2 = new Player(10, 478, 234,5,'blue');
let player3 = new Player(10, 120, 460,5,'yellow');
//let key = new Key();

requestAnimationFrame(update);
//myVar = setInterval(update, 42);