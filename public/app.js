
const canvas = document.getElementById('main')
const paddle1Html = document.getElementById("paddle1")
const paddle2Html = document.getElementById("paddle2")
const paddle1Score = document.getElementById("paddle1-score")
const paddle2Score = document.getElementById("paddle2-score")

const render = html => {
    canvas.innerHTML = html
} 

const context = canvas.getContext("2d"),    //defini le getContext de main à 2d
        width = window.innerWidth,          //defini width à la largeur de l'écran
        height = window.innerHeight -100,        //defini height à la hauteur de l'écran
        ratio = window.devicePixelRatio     //defini ratio par rapport à la taille de l'écran

//initialise les propriété par rapport à la taille de l'écran
canvas.width = width * ratio
canvas.height = height * ratio
canvas.style.width = width + "px"
canvas.style.height = height + "px"
context.scale(ratio, ratio)

class Ball{
    constructor(vx, vy){    //construction de la balle
        this.x = width / 2  //position x de la balle defini à la moitier de la largeur de l'écran
        this.y = height / 2 //position y de la balle defini à la moitier de la hauteur de l'écran
        this.vx = vx        //defini la velociter x de la balle avec le parametre qui lui à été atribué
        this.vy = vy        //defini la velociter y de la balle avec le parametre qui lui à été atribué

        this.r = 10         //defini le rayon de la balle
    }

    update(){               //fonction update qui va géré l'update de la balle
        this.collision()     //appele de la fonction collision

        this.x += this.vx   //gere l'update de la position x de la balle par rapport à la velocité vx de la balle
        this.y += this.vy   //gere l'update de la position y de la balle par rapport à la velocité vy de la balle
    }

    //fonction qui va géré la collision de la balle avec l'écran
    collision(){
        if(this.y + this.r > height){    
            this.vy *= -1
        } else if(this.y - this.r < 0){
            this.vy *= -1
        }

        if(this.x + this.r > width){
            restartGame()
            paddle1.score ++
        }else if(this.x - this.r < 0){
            restartGame()
            paddle2.score ++
        }
    }
//collision paddles-ball
    paddles(paddle){
        let bLeft = this.x - this.r
        let bRight = this.x + this.r
        let bTop = this.y - this.r
        let bBottom = this.y + this.r

        let pLeft = paddle.x - paddle.w / 2
        let pRight = paddle.x + paddle.w / 2
        let pTop = paddle.y - paddle.h / 2
        let pBottom = paddle.y + paddle.h / 2

        if(bLeft < pRight && bRight > pLeft && bTop < pBottom && bBottom > pTop){
            this.vx *= -1
        }
    }

    //fonction qui va géré l'affichage de la balle
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, 10, 0, 2 * Math.PI)
        context.fill()
    }
}

class Paddle{
    constructor(x, paddleNum){
        this.x = x
        this.y = 20
        this.h= 150
        this.w = 20
        this.paddleNum = paddleNum
        this.score = 0
    }

    draw(){
        let top = this.y - this.h / 2
        let left = this.x - this.w / 2
        
        context.fillRect(left, top, this.w, this.h)
        if (this.paddleNum === 1) {
            paddle1Score.innerHTML = this.score
        } else {
            paddle2Score.innerHTML = this.score
        } 

    }
}

//créé une nouvelle balle
const ball = new Ball(-6, 1)
const paddle1 = new Paddle(20, 1)
const paddle2 = new Paddle(width - 40, 2)

window.onkeydown = function(event) { 
    let key = event.keyCode; 
    if(key === 40){         //descendre
        paddle1.y += 60
    } else if(key === 38){  //monter
        paddle1.y -= 60
    } 
}

const restartGame = () =>{
    ball.x = width / 2
    ball.y = height / 2
}

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
