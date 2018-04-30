import { canvas, context, width, height, ratio } from './canvas.js'

const restartGame = (laBalle) =>{
    laBalle.x = width / 2
    laBalle.y = height / 2
}

export class Ball{
    constructor(vx, vy){    //construction de la balle
        this.x = width / 2  //position x de la balle definie à la moitié de la largeur de l'écran
        this.y = height / 2 //position y de la balle definie à la moitié de la hauteur de l'écran
        this.vx = vx        //definit la velociter x de la balle avec le paramètre qui lui à été atribué
        this.vy = vy        //definit la velociter y de la balle avec le paramètre qui lui à été atribué

        this.r = 10         //definit le rayon de la balle
    }

    update(){               //fonction update qui va gérer l'update de la balle
        this.collision()     //appele de la fonction collision

        this.x += this.vx   //gère l'update de la position x de la balle par rapport à la velocité vx de la balle
        this.y += this.vy   //gère l'update de la position y de la balle par rapport à la velocité vy de la balle
    }

    //fonction qui va gérer la collision de la balle avec l'écran
    collision(){
        if(this.y + this.r > height){    
            this.vy *= -1
        } else if(this.y - this.r < 0){
            this.vy *= -1
        }

        if(this.x + this.r > width){
            restartGame(this)
            paddle1.score ++
        }else if(this.x - this.r < 0){
            restartGame(this)
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
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, 10, 0, 2 * Math.PI)
        context.fill()
    }
}


export default Ball