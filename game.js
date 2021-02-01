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

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = new Player(10,64,64,'red');
let player2 = new Player(10, 478, 234,'blue');
let player3 = new Player(10, 120, 460,'yellow');
//let key = new Key();

player.draw();
player2.draw();
player3.draw();

ctx.fillStyle = "grey";
ctx.rect(canvas.width,0,-canvas.width,canvas.height);
ctx.fill();
