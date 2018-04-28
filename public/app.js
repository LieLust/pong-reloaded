const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}

render(`<canvas id="drawingSpace" width="540" height="640" style="border: 1px solid #000000;">Votre navigateur ne supporte pas canvas HTML 5</canvas>`)
const ball = document.getElementById("drawingSpace");
const ctx = ball.getContext("2d");
ctx.fillStyle="#1D1075"
ctx.arc(270, 320, 10, 0, 2 * Math.PI);
ctx.fill();