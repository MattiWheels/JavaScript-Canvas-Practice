const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

drawPlayer();

function drawPlayer() {
    ctx.rect(64,64,50,50);
    ctx.fillStyle = 'red';
    ctx.fill();
}