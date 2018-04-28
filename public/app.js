
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
    <canvas id="drawingSpace" width="540" height="640"  style="border: 1px solid #000000;">
    Votre navigateur ne supporte pas le Canvas HTML5
    </canvas>
    `
renderSpace(canvasSpace)
const drawingSpace = document.getElementById("drawingSpace")

const paddle1 = drawingSpace.getContext("2d")
paddle1.fillStyle = "#D11D05";
paddle1.fillRect(20, 20, 150, 20);

const paddle2 = drawingSpace.getContext("2d");
paddle1.fillStyle = "#133";
paddle1.fillRect(20, 600, 150, 20);

const ball = drawingSpace.getContext("2d");
ball.fillStyle="#1D1075"
ball.arc(270, 320, 10, 0, 2 * Math.PI);
ball.fill();


//fonctions:
/*
* start qui donne toutes les propriétés(emplacements, vélocité)
* quand tout le jeu fonctionne, faire une fonction restart.
* pour la partie dev: un autorestart quand la balle est sortie
* 
* collision avec les bord du plateau (+ 10 ou moins 10)
* collision avec les paddles
* mouvement alétoire de la balle
* Aurélie déplacement des paddles gestion des touches et vélocité des paddles et collision paddle bord du plateau
 */
