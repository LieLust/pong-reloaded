const express = require('express')

const app = express()
app.use(express.static('public'))

console.log('coucou on démarre le serveur')

app.listen(8080)