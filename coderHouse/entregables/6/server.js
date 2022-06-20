const http = require('http')
const express = require('express')
const { Server } = require('socket.io')
const ApiController = require('./ApiController.js')

// Server constants & config
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const productosController = new ApiController('./productos.json')
const chatsController = new ApiController('./chat.json')
const port = process.env.PORT || 8080
app.set('views', './views')
app.set('view engine', 'pug')

express.Router()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
