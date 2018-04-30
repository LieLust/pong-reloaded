import { canvas, context, width, height, ratio } from './canvas.js'
import {paddle1Html, paddle2Html, paddle1Score, paddle2Score } from './dom-references.js'

export class Paddle{
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

export default Paddle