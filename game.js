class Player {
    constructor(size,x,y,v,hue) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.v = v;
        this.hue = hue;
    }
    draw() {
        this.vision()
        ctx.fillStyle = this.hue;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    vision() {
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle = 'white';
        ctx.arc(this.x+5,this.y+5,55,0,2 * Math.PI);
        ctx.fill();
        ctx.globalCompositeOperation='source-over';
    }
    drop(obj) {
        obj.held = false;
        obj.x = this.x+this.size*1.5;
        obj.y = this.y;
    }

}

class Key {
    held = false;
    true_size = 10;
    constructor(size,x,y) {
        this.size = size;
        this.x = x;
        this.y = y;
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
    collide_check(player) {
        let check = collision(player, key);
        if(check == true) {
            key.held = true;
            key.size = key.true_size/2;
            key.x = player.x;
            key.y = player.y;
        } else {
            key.held = false;
            if(key.size != key.true_size) {
                key.size = key.true_size;
            }
        }

    }

}

function draw_fog() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0,0,canvas.width,canvas.height);
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
    else if(e.key == " ") {
        player.drop(key);
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

function update() {
    requestAnimationFrame(update);
    
    if (player.x >= (canvas.width-10)) {
        player.x = (canvas.width-10);
    }
    else if (player.x <= 0) {
        player.x = 0;
    }

    if (player.y >= (canvas.height-10)) {
        player.y = (canvas.height-10);
    }
    else if (player.y <= 0) {
        player.y = 0;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);
    //draw_fog();
    key.collide_check(player, key);
    player.draw();
    key.draw();
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-200;

var player = new Player(10,64,64,1,'red');
var key = new Key(10, 88, 88);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

update();
