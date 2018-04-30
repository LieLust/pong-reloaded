export  { canvas, context, width, height, ratio }

const canvas = document.getElementById('main')

const context = canvas.getContext("2d")    //definit le getContext de main à 2d 
const width = window.innerWidth          //definit width à la largeur de l'écran
const height = window.innerHeight -100        //definit height à la hauteur de l'écran 
//(J'ai réduit de 100 pour pouvoir voir les scores.)
const ratio = window.devicePixelRatio     //definit ratio par rapport à la taille de l'écran


export default { canvas, context, width, height, ratio }