const express = require('express')
const { Router } = express

const app = express()

app.use((req, res, next) => {
    console.log('time', Date.now())
    return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let mensajes = []

const mascotasRouter = Router()
const personasRouter = Router()

const personas = [{ nombre: 'john', apellido: 'samsung', edad: 67 }]
const mascotas = [{ nombre: 'morgan', raza: 'callejero', edad: 6 }]

personasRouter.get('', (req, res) => {
    res.json(personas)
})
personasRouter.post('', (req, res) => {
    const persona = req.body
    personas.push(persona)
    res.json('post-personas')
})

mascotasRouter.get('', (req, res) => {
    res.json(mascotas)
})
mascotasRouter.post('', (req, res) => {
    res.send('post-mascotas')
})

app.use('/personas', personasRouter)
app.use('/mascotas', mascotasRouter)

app.listen(8080)
