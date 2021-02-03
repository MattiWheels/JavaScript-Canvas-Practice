class Player {
    constructor(size,x,y,hue) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.hue = hue;
    }
    draw() {
        this.vision()
        ctx.fillStyle = this.hue;
        ctx.fillRect(this.x,this.y,10,10);
        
    }
    vision() {
        ctx.arc(this.x+5,this.y+5,55,0,2 * Math.PI);
        ctx.closePath();
    }

}

class Key {
    held = false;
    constructor(size,x,y,dx,dy) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
    }
    draw() {

        // fill ring shape - the main part of the key
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x,this.y,this.size,this.size);

        // erase to make key-hole
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x+this.size/6,this.y+this.size/6,this.size/1.5,this.size/1.5)

        // fill long key piece
        ctx.globalCompositeOperation='source-over';
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+this.size,this.y+this.size/2,this.size,this.size/8)

        // fill key teeth
        ctx.fillRect(this.x+this.size*2,this.y+this.size/2,this.size/6,this.size/3);
        ctx.fillRect(this.x+this.size*1.5,this.y+this.size/2,this.size/6,this.size/3);

    }
    collide_check(player, key) {
        if(this.held === false) {
            check = collision(player, key);
            if(check === true) {
                this.held = true;
                this.x = player.x;
                this.y = player.y;
            }
            this.x = this.x
            this.y = this.y
        }

    }

}

//previous movement functions temporarily commented out.

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
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

//main loop.
function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.draw();
    key.draw();
    //ctx.fillStyle = "grey";
    //ctx.rect(canvas.width,0,-canvas.width,canvas.height);
    //ctx.fill();
}


function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.size &&
        rect1.x + rect1.size > rect2.x &&
        rect1.y < rect2.y + rect2.size &&
        rect1.y + rect1.size > rect2.y) {
        return true;
    } else {
        return false;
    }
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-200;

var player = new Player(20,64,64,'red');
var key = new Key(10, 200, 200);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//document.addEventListener("keydown", function(e) {
//    keys[e.key] = true;
//});
//document.addEventListener("keyup", function(e) {
//    keys[e.key] = false;
//});


update();
//myVar = setInterval(update, 42);
