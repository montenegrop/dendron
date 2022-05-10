const express = require('express')
// import Contenedor from '../../clase4/entregable/index'

const app = express()

const PORT = 8080

app.get('', (req, res) => {
    res.send({ mensaje: 'Hola mundo' })
})

app.get('/productos', (req, res) => {
    // const contenedor = new Contenedor('productos.txt
    // contenedor.getRandom()
    res.send('Endpoint de productos')
})

app.get('/api/suma/:num1/:num2', (req, res) => {
    console.log('xd')
    const { num1, num2 } = req.params
    const resultado = num1 + num2
    return res.json({ resultado })
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
