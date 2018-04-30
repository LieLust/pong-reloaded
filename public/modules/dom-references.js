export  { gameInfo, paddle1Html, paddle2Html, paddle1Score, paddle2Score, footer }

const gameInfo = document.getElementById("gameInfo")
//on pourrait ajouter un footer, un aside...

//là pour l'instant gameInfo dans server.js se décompose comme ça:
//mais maintenant que c'est modutlarisé avec un render spécial, on peut peutêre faire autrement.

const footer = document.getElementById("footer")

const paddle1Html = document.getElementById("paddle1")
const paddle2Html = document.getElementById("paddle2")
const paddle1Score = document.getElementById("paddle1-score")
const paddle2Score = document.getElementById("paddle2-score")


export default { gameInfo, paddle1Html, paddle2Html, paddle1Score, paddle2Score, footer }