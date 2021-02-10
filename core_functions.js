function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
        player.x += player.v;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
        player.x -= player.v;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
        player.y -= player.v;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
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

function boundary(obj) {
    if (obj.x >= (canvas.width-obj.size)) {
        obj.x = (canvas.width-obj.size);
    }
    else if (obj.x <= 0) {
        obj.x = 0;
    }

    if (obj.y >= (canvas.height-obj.size)) {
        obj.y = (canvas.height-obj.size);
    }
    else if (obj.y <= 0) {
        obj.y = 0;
    }
}

function collision(rect1, rect2) {
    if(rect1.size) {
        rect1.size1 = rect1.size;
        rect1.size2 = rect1.size;
    }
    
    if(rect2.size) {
        rect2.size1 = rect2.size;
        rect2.size2 = rect2.size;
    }

    if (rect1.x < rect2.x + rect2.size1 &&
        rect1.x + rect1.size1 > rect2.x &&
        rect1.y < rect2.y + rect2.size2 &&
        rect1.y + rect1.size2 > rect2.y) {
        return true;
    } else {
        return false;
    }
}

function draw_fog() {
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.closePath();
    ctx.fill();
}