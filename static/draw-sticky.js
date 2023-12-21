const canvas = document.getElementById('drawing-board');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const loadBtn = document.getElementById('loadBtn');

const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.getBoundingClientRect()["x"];
const canvasOffsetY = canvas.getBoundingClientRect()["y"];

console.log(canvasOffsetX);

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

canvas.width = 500;
canvas.height = 500;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

ctx.fillStyle = '#ffe599';

clearBtn.addEventListener('click', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener('click', e => {
    console.log("save")
    let sticky_data = canvas.toDataURL("image/png", 1);
    console.log(sticky_data)


    fetch("/", {
    method: "POST",
    body: JSON.stringify({
        img: sticky_data
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then((response) => console.log(response)); //response.json())
    // .then((json) => console.log(json));
});

// loadBtn.addEventListener('click', e => {
//     alert("not implemented");
// });


const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX-canvasOffsetX , e.clientY-canvasOffsetY);
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