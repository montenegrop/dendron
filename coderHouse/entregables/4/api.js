import express from 'express'
import multer from 'multer'
import Contenedor from './contenedor.js'

const productsApi = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/thumbnails')
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${new Date().toISOString().split('T')[0]}-${file.originalname}`
        )
    },
})

const contenedor = new Contenedor('./productos.json')

productsApi.use(express.json())
productsApi.use(express.urlencoded({ extended: true }))

// devuelve todos los productos.
productsApi.get('/', async (req, res) => {
    res.send(await contenedor.getAll())
})

// devuelve un producto según su id.
productsApi.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const producto = await contenedor.getById(id)
    if (producto !== null) {
        res.send(producto)
        console.log(`Producto ${id} encontrado`)
    } else {
        res.status(404).send({ error: 'Producto no encontrado' })
    }
})

export default productsApi
