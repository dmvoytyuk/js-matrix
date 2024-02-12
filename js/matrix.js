const canvasEl = document.querySelector(".matrix");
// const dpr = window.devicePixelRatio;
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
const ctx = canvasEl.getContext("2d");
ctx.font = "20px Tahoma";

const colsNumbers = canvasEl.width / 15;
console.log(Math.round(colsNumbers));
const posY = [];

for (let i = 0; i < colsNumbers; i++) {
  posY[i] = -Math.round(Math.random() * 1000);
  // console.log(posY[i]);
}

function matrix() {
  // draw background
  ctx.fillStyle = "rgba(0,0,0,0.09)";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  // draw raws
  let x = 3;
  for (let i = 0; i < colsNumbers; i++) {
    ctx.fillStyle = "rgba(0,255,50,1)";
    let char = Math.random() > 0.4 ? 1 : 0;
    ctx.fillText(char, x, posY[i]);
    x = x + 20;
  }
  for (let i = 0; i < colsNumbers; i++) {
    posY[i] = posY[i] + 20;
    if (posY[i] > canvasEl.height + Math.round(Math.random() * 100)) {
      posY[i] = -Math.round(Math.random() * 1000);
    }
  }

  setTimeout(matrix, 100);
}

matrix();

window.addEventListener("resize", changeCanvasSize);
function changeCanvasSize() {
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  location.reload();
}

ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
