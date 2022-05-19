const express = require('express')
const app = express()

const { engine } = require('express-handlebars')
const moment = require('moment')

const engienFn = engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
})

app.engine('hbs', engienFn)
app.set('views', './views')
app.set('view engine', 'hbs')

var trabajando = false
var pausado = false
var empezado = false
var terminable = false
var empezable = false

const PORT = 8086

app.get('/iniciable/casino', (req, res) => {
    empezable = true
    trabajando = false
    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
    }
    return res.render('layouts/main', data)
})

app.get('/empezar', (req, res) => {
    trabajando = true
    empezado = true
    empezable = false

    var key = moment().format('DD MM YYYY')

    console.log('req empezar:', req)
    var ahora = moment().format('DD MM YYYY hh:mm:ss')

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
    }
    return res.render('layouts/main', data)
})

app.get('/pausar', (req, res) => {
    trabajando = false
    pausado = true
    terminable = true

    // var ahora = moment().format('DD MM YYYY hh:mm:ss')

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
    }
    return res.render('layouts/main', data)
})

app.get('/continuar', (req, res) => {
    trabajando = true
    terminable = false

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
    }
    return res.render('layouts/main', data)
})

app.get('/terminar', (req, res) => {
    trabajando = false
    pausado = false
    empezado = false
    terminable = false
    empezable = false

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
    }
    return res.render('layouts/main', data)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', (error) => console.log(`Error en servidor: ${error}`))
