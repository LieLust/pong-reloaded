
const canvas = document.getElementById('main')

const render = html => {
    canvas.innerHTML = html
} 

const context = canvas.getContext("2d"),    //defini le getContext de main à 2d
        width = window.innerWidth,          //defini width à la largeur de l'écran
        height = window.innerHeight,        //defini height à la hauteur de l'écran
        ratio = window.devicePixelRatio     //defini ratio par rapport à la taille de l'écran

//initialise les propriété par rapport à la taille de l'écran
canvas.width = width * ratio
canvas.height = height * ratio
canvas.style.width = width + "px"
canvas.style.height = height + "px"
context.scale(ratio, ratio)

const paddle1 = canvas.getContext("2d")
paddle1.fillStyle = "#D11D05";
paddle1.fillRect(20, 20, 20, 150);

const paddle2 = canvas.getContext("2d");
paddle1.fillStyle = "#133";
paddle1.fillRect(20, 600, 20, 150);

const ball = canvas.getContext("2d");
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
