const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}

render(`<h1> On joue à Pong?</h1>`)