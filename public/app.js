
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

class Ball{
    constructor(vx, vy){    //construction de la balle
        this.x = width / 2  //position x de la balle defini à la moitier de la largeur de l'écran
        this.y = height / 2 //position y de la balle defini à la moitier de la hauteur de l'écran
        this.vx = vx        //defini la velociter x de la balle avec le parametre qui lui à été atribué
        this.vy = vy        //defini la velociter y de la balle avec le parametre qui lui à été atribué

        this.r = 10         //defini le rayon de la balle
    }

    update(){               //fonction update qui va géré l'update de la balle
        this.colision()     //appele de la fonction colision

        this.x += this.vx   //gere l'update de la position x de la balle par rapport à la velocité vx de la balle
        this.y += this.vy   //gere l'update de la position y de la balle par rapport à la velocité vy de la balle
    }

    //fonction qui va géré la colision de la balle avec l'écran
    colision(){
        if(this.y + this.r > height){    
            this.vy *= -1
        } else if(this.y - this.r < 0){
            this.vy *= -1
        }
    }

    //fonction qui va géré l'affichage de la balle
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, 10, 0, 2 * Math.PI)
        context.fill()
    }
}

//créé une nouvelle balle
const ball = new Ball(2, 6)

animate() //appelle de la fonction animate
function animate(){                         //fonction animate c'est update du jeu
    context.clearRect(0, 0, width, height)  //efface l'écran

    context.beginPath()                     //dessine la ligne qui sert de filet
    context.moveTo(width / 2, 0)
    context.lineTo(width / 2, height)
    context.stroke()

    ball.update()                           //appelle de la fonction qui l'update la balle
    ball.draw()                             //appelle de la fonction qui dessine la balle

    requestAnimationFrame(animate)          //appelle la fonction animate 60 fois par seconde
}

const paddle1 = canvas.getContext("2d")
paddle1.fillStyle = "#D11D05";
paddle1.fillRect(20, 20, 20, 150);

const paddle2 = canvas.getContext("2d");
paddle1.fillStyle = "#133";
paddle1.fillRect(20, 600, 20, 150);

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
