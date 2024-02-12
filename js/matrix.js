const canvasEl = document.querySelector('.matrix');
const dpr  = window.devicePixelRatio;
canvasEl.height = window.innerHeight * dpr;
canvasEl.width = window.innerWidth * dpr;
const ctx = canvasEl.getContext('2d');
ctx.scale(dpr, dpr);
ctx.fillStyle = 'rgba(0,0,0,1)';
ctx.fillRect(0,0,canvasEl.width,canvasEl.height);
window.addEventListener('resize', changeCanvasSize);
function changeCanvasSize() {
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvasEl.width,canvasEl.height);
}

ctx.font = "20px Tahoma";
function matrix(){  
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvasEl.width,canvasEl.height);
    // draw raws 
    let x = 10;
    let y = Math.random() * 1000;
    for(let i = 0; i < canvasEl.width /15; i++) {
        ctx.fillStyle = 'rgba(0,255,50,1)';
        let char = Math.random()>0.4?1:0;
        ctx.fillText(char,x, y);
        x = x + 20;
    }

    //draw columns
    ctx.fillStyle = 'rgba(0,255,50,1)';
    let char = Math.random()>0.4?1:0;
    ctx.fillText(char,x, y);
    setTimeout(matrix, 50);
    y = y + 20;
    if(y > canvasEl.height + 20) {
        y = -1 * Math.random() * 100;
        console.log(y);
    }
}

// matrix();