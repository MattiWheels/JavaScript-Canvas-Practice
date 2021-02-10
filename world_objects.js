class Player {
    constructor(size,x,y,v,hue) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.v = v;
        this.hue = hue;
    }
    draw() {
        this.vision();
        ctx.fillStyle = this.hue;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.size,this.size);
        ctx.closePath();
        ctx.fill();
    }
    vision() {
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x+5,this.y+5,55,0,2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.globalCompositeOperation='source-over';
    }
    drop(obj) {
        if (obj.held) {
            obj.held = false;
            obj.x = this.x+this.size*1.5;
            obj.y = this.y;
        }
        else {
            obj.held = false;
        }
    }
}

class Key {
    held = false;
    true_size = 10;
    sizex = this.size
    sizey = this.size
    constructor(size,x,y) {
        this.size = size;
        this.x = x;
        this.y = y;
    }
    draw() {
        // fill ring shape - the main part of the key
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.size,this.size);
        ctx.closePath();
        ctx.fill();

        // erase to make key-hole
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.rect(this.x+this.size/6,this.y+this.size/6,this.size/1.5,this.size/1.5);
        ctx.closePath();
        ctx.fill();

        // fill long key piece
        ctx.globalCompositeOperation='source-over';
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.rect(this.x+this.size,this.y+this.size/2,this.size,this.size/8);
        ctx.closePath();
        ctx.fill();

        // fill key teeth
        ctx.beginPath();
        ctx.rect(this.x+this.size*2,this.y+this.size/2,this.size/6,this.size/3);
        ctx.rect(this.x+this.size*1.5,this.y+this.size/2,this.size/6,this.size/3);
        ctx.closePath();
        ctx.fill();
    }
    carry_check(player) {
        let check = collision(player,this);
        if(check == true) {
            door.open = false;
            this.held = true;
            this.size = this.true_size/2;
            this.x = player.x+player.size/4;
            this.y = player.y+player.size/4;
        } else {
            this.held = false;
            if(this.size != key.true_size) {
                this.size = key.true_size;
            }
        }
        if(this.held == false && collision(this, door) == true) {
            door.open = true;
        }
    }
}

class Door {
    open = false;
    true_size = 32;
    size = 32;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        if(this.open == true) {
            ctx.fillStyle = 'Silver';
            ctx.beginPath();
            ctx.rect(this.x,this.y,this.true_size,this.true_size);
            ctx.closePath();
            ctx.fill();
    
            ctx.fillStyle = 'Black';
            ctx.beginPath();
            ctx.rect(this.x+this.true_size/10,this.y+this.true_size/10,this.true_size-this.true_size/5,this.true_size-this.true_size/5);
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.fillStyle = 'Silver';
            ctx.beginPath();
            ctx.rect(this.x,this.y,this.true_size,this.true_size);
            ctx.closePath();
            ctx.fill();
    
            ctx.fillStyle = 'Navy';
            ctx.beginPath();
            ctx.rect(this.x+this.true_size/10,this.y+this.true_size/10,this.true_size-this.true_size/5,this.true_size-this.true_size/5);
            ctx.closePath();
            ctx.fill();
    
            ctx.fillStyle = 'Silver';
            ctx.beginPath();
            ctx.rect(this.x+this.true_size/3,this.y+this.true_size/3,this.true_size/3,this.true_size/3);
            ctx.rect(this.x,this.y+this.true_size/2.333,this.true_size,this.true_size/7);
            ctx.rect(this.x+this.true_size/5.1,this.y,this.true_size/16,this.true_size);
            ctx.rect(this.x+this.true_size/2.111,this.y,this.true_size/16,this.true_size);
            ctx.rect(this.x+this.true_size/1.333,this.y,this.true_size/16,this.true_size);
            ctx.closePath();
            ctx.fill();
    
            ctx.fillStyle = 'Black';
            ctx.beginPath();
            ctx.rect(this.x+this.true_size/2.4,this.y+this.true_size/2.4,this.true_size/6,this.true_size/6);
            ctx.closePath();
            ctx.fill();
        }

    }
}

class Wall {
    constructor(size1,size2,x,y) {
        this.size1 = size1;
        this.size2 = size2;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = 'navy';
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.size1,this.size2);
        ctx.closePath();
        ctx.fill();
    }
    barrier(player) {
        let check = collision(player,this)
        if (check) {
            if (upPressed) {
                player.y = this.y + this.size2;
            }
            else if (downPressed) {
                player.y = this.y - player.size;
            }
            else if (leftPressed) {
                player.x = this.x + this.size1;
            }
            else if (rightPressed) {
                player.x = this.x - player.size;
            }
        }
    }
}



