const express = require('express')
const app = express()
const port = process.env.PORT || 8080
let visitas = 0
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send("<h1 style='color:blue;'>Bienvenidos al servidor express</h1>")
})
app.get('/visitas', (req, res) => {
    res.set('Content-Type', 'text/html')
    visitas++
    res.send(`<h1 style='color:blue;'>Visitas: ${visitas}</h1>`)
})
app.get('/fyh', (req, res) => {
    const date = new Date().toLocaleString()
    res.json({ fyh: date })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
