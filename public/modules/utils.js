import { gameInfo } from './dom-references.js'
import { canvas } from './canvas.js'

export  { render, renderGameInfo, renderInCanvas }

const render = (domElement, html) => {
    domElement.innerHTML = html
}

const renderGameInfo = html => {
    gameInfo.innerHTML = html
} 

const renderInCanvas = html => {
    canvas.innerHTML = html
} 

// bon en fait maintenant on peut se passer de renderGameInfo et renderInCanvas
//vu qu'on peut passer un arg domElement dans le render de base.

export default { render, renderGameInfo, renderInCanvas }