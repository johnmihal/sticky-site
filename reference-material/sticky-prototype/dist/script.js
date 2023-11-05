const canvas = document.getElementById('drawing-board');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const loadBtn = document.getElementById('loadBtn');

const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

canvas.width = 400;
canvas.height = 400;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

ctx.fillStyle = '#ffe599';

clearBtn.addEventListener('click', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

exportBtn.addEventListener('click', e => {
    let img = canvas.toDataURL("image/webp", 0.1)
});

loadBtn.addEventListener('click', e => {
    alert("not implemented");
});


const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);