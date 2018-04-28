
const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}




render(`<p> hello world</p>
    <div id="gameBoard"></div>`)

const gameBoard= document.getElementById('gameBoard')

const renderPaddles = html => {
    gameBoard.innerHTML = html
}
    

const paddle = () => `
    <canvas id="theCanvas" width="50" height="10"  style="border: 1px solid #000000;">
    Votre navigateur ne supporte pas le Canvas HTML5
    </canvas>
    `


const paddleA = paddle()
const paddleB = paddle()

renderPaddles(paddleA)