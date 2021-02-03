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

        // fill
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x,this.y,this.size,this.size);

        // erase
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x+this.size/6,this.y+this.size/6,this.size/1.5,this.size/1.5)

        // fill
        ctx.globalCompositeOperation='source-over';
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+this.size,this.y+this.size/2,this.size,this.size/8)

        // fill
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
        }

    }

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

let player = new Player(20,64,64,'red');
let key = new Key(10, 200, 200);

player.draw();
key.draw();