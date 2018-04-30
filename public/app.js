import { render, renderGameInfo, renderInCanvas } from './modules/utils.js'
import { gameInfo, paddle1Html, paddle2Html, paddle1Score, paddle2Score, footer } from './modules/dom-references.js'
import { canvas, context, width, height, ratio } from './modules/canvas.js'
import Ball from './modules/ball.js'
import Paddle from './modules/paddle.js'
import test from './modules/test.js'

test()

render(footer, 'Créé par Aurélie Bayre & Maxence Millescamps' )

//initialise les propriétés par rapport à la taille de l'écran
canvas.width = width * ratio
canvas.height = height * ratio
canvas.style.width = width + "px"
canvas.style.height = height + "px"
context.scale(ratio, ratio)

//créer une nouvelle balle et deux paddles
const ball = new Ball(-6, 1)
const paddle1 = new Paddle(20, 1)
const paddle2 = new Paddle(width - 40, 2)


animate() //appelle de la fonction animate
function animate(){                         //fonction animate c'est update du jeu
    context.clearRect(0, 0, width, height)  //efface l'écran

    context.beginPath()                     //dessine la ligne qui sert de filet
    context.moveTo(width / 2, 0)
    context.lineTo(width / 2, height)
    context.stroke()

    ball.paddles(paddle1)
    ball.paddles(paddle2)
    ball.update()                           //appelle de la fonction qui update la balle
    ball.draw()                              //appelle de la fonction qui dessine la balle
   
    paddle1.draw() 
    paddle2.draw()

    window.onkeydown = function(event) { 
        let key = event.keyCode; 
        if(key === 83 && paddle1.y < height - (paddle1.h / 2)) //descendre
            paddle1.y += 20
        if(key === 40 && paddle2.y < height - (paddle2.h / 2)) //descendre
            paddle2.y += 20
        if(key === 90 && paddle1.y > paddle1.h/2) //monter
            paddle1.y -= 20
        if(key === 38 && paddle2.y > paddle2.h/2) //monter
            paddle2.y -= 20
    } 
    
    if (paddle1.score > paddle2.score) {
        paddle1Html.className = "alert alert-success"
        paddle2Html.className = "alert alert-danger"
    }
    else if (paddle1.score === paddle2.score) {
        paddle1Html.className = "alert alert-primary"
        paddle2Html.className = "alert alert-primary"
        }
    else {
        paddle2Html.className = "alert alert-success"
        paddle1Html.className = "alert alert-danger"
    }
    requestAnimationFrame(animate)          //appelle la fonction animate 60 fois par seconde
}

