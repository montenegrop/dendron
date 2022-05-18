import express from 'express'
import Contenedor from './contenedor.js'

const app = express()
const port = process.env.PORT ?? 8080
const products = new Contenedor('productos.txt')

app.get('/', (req, res) => {
    res.send(
        '<div><p>Bienvenido, pruebe nuestras URLs disponibles:</p><a href="/productos">productos</a> <a href="/randomProduct">producto aleatorio</a></div>'
    )
})

app.get('/productos', (req, res) => {
    res.json(products.getAll())
})

app.get('/productoRandom', (req, res) => {
    const data = products.getAll()
    const random = Math.floor(Math.random() * data.length)
    res.json(data[random])
})

app.listen(port, () => {
    console.log(`Serivdor corriendo en http://localhost:${port}`)
})
