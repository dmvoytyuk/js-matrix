const canvasEl = document.querySelector(".matrix");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
const ctx = canvasEl.getContext("2d");

//set font
const fontSize = 24;
ctx.font = `${fontSize}px Matrix`;

const colsNumbers = canvasEl.width / fontSize;

const chars = `1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./!@#$%^&*()_+`;

// randomize initial Y position for each column
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
    ctx.fillText(getRandomChar(chars), x, posY[i]);
    x = x + fontSize;
  }
  for (let i = 0; i < colsNumbers; i++) {
    posY[i] = posY[i] + fontSize;
    if (posY[i] > canvasEl.height + Math.round(Math.random() * 100)) {
      posY[i] = -Math.round(Math.random() * 1000);
    }
  }

  setTimeout(matrix, 90);
}

//enter the matrix
matrix();

// refresh window on resize
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

// tools
function getRandomChar(chars) {
  const number = Math.random() * chars.length;
  return chars.charAt(number);
}
