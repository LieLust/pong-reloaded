
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
let ctx = drawingSpace.getContext("2d")

const canvasWidth = 540
const canvasHeight = 640

const width = 100
const height = 20

let x1 = canvasWidth / 2 - width / 2
let y1 = canvasHeight -620

const paddle1 = (x1, y1, width, height) => {
    ctx.fillStyle = "133"; 
    ctx.fillRect(x1, y1, width, height); 
}

const ball = drawingSpace.getContext("2d");
ball.fillStyle="#1D1075"
ball.arc(270, 320, 10, 0, 2 * Math.PI);
ball.fill();
//on affiche le paddle au démarrage
paddle1(x1, y1, width, height)

window.onkeydown = function(event) {  
    let key = event.keyCode; 
    if(key === 39 && x1<=420)
        x1 = x1+20
   if(key === 37 && x1>10)
        x1 = x1-20
		
  	//on efface la zone du paddle1 (bande du haut)
    
    ctx.clearRect(0, 0, 540, 40);

    //on redessine le paddle1
    paddle1(x1,y1,width,height);
};
  

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

 /*
 *DOC
 * Pour le mouvemnt du paddle 
 * https://codepen.io/svsdesigns/pen/pvmjPG
 * 
 * 
 * 
 * */
