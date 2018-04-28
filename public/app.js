
const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}

render(`<p> hello world</p>
    <div id="gameBoard"></div>`)

const gameBoard= document.getElementById('gameBoard')

const renderSpace = html => {
    gameBoard.innerHTML = html
} 

const canvasSpace = `
    <canvas id="drawingSpace" width="540" height="540"  style="border: 1px solid #000000;">
    Votre navigateur ne supporte pas le Canvas HTML5
    </canvas>
    `


renderSpace(canvasSpace)
const drawingSpace = document.getElementById("drawingSpace")

let paddle1 = drawingSpace.getContext("2d")
paddle1.fillStyle = "#FF0000";
paddle1.fillRect(20, 20, 150, 20);

let paddle2 = drawingSpace.getContext("2d");
paddle1.fillStyle = "#808099";
paddle1.fillRect(20, 500, 150, 20);

