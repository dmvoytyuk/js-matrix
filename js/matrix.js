const canvasEl = document.querySelector(".matrix");
// const dpr = window.devicePixelRatio;
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
const ctx = canvasEl.getContext("2d");
const fontSize = 24;
ctx.font = `${fontSize}px Matrix`;

const colsNumbers = canvasEl.width / fontSize;
console.log(Math.round(colsNumbers));

const chars = `1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./!@#$%^&*()_+`;
const posY = [];
for (let i = 0; i < colsNumbers; i++) {
  posY[i] = -Math.round(Math.random() * 1000);
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
    ctx.fillText(getRandomChar(chars), x, posY[i]);
    x = x + fontSize;
  }
  for (let i = 0; i < colsNumbers; i++) {
    posY[i] = posY[i] + fontSize;
    if (posY[i] > canvasEl.height + Math.round(Math.random() * 100)) {
      posY[i] = -Math.round(Math.random() * 1000);
    }
  }

  setTimeout(matrix, 70);
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

function getRandomChar(chars) {
  const number = Math.random() * chars.length;
  return chars.charAt(number);
}

ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
