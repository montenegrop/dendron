import express from 'express'
const app = express()

import { engine } from 'express-handlebars'
import moment from 'moment'

// redis:
import client from './casinoredis.js'

// dirname and handlebar:
import * as path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const engienFn = engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
})
app.engine('hbs', engienFn)
app.set('views', './views')
app.set('view engine', 'hbs')

// variables:
var trabajando = false
var pausado = false
var empezado = false
var terminable = false
var empezable = false
var inicialMoment = null
var totalTiempo = 0
var diferenciaTiempo = 0
var totalHistorico = 0

const PORT = 8086

// redis:
await client.connect()

var key = 'noEmpezado'
var value = 'iniciadoNoTerminado'
const keyHistorico = 'xdSecsT'
var valueHistorico = (await client.get(keyHistorico)) || 0

// await client.set('key2', 'value3')
// const value = await client.get('hello')

app.get('/iniciable/casino', async (req, res) => {
    empezable = true
    trabajando = false

    var valueHistorico = (await client.get(keyHistorico)) || 0

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
        totalTiempo,
    }
    return res.render('layouts/main', data)
})

app.get('/empezar', async (req, res) => {
    trabajando = true
    empezado = true
    empezable = false

    diferenciaTiempo = 0
    totalTiempo = 0
    inicialMoment = moment()
    key = 'xdSecs:' + inicialMoment.format('DD_MM_YYYY')

    let i = 0
    let exists = true
    while (exists) {
        let try_key = await client.get(key + '-' + i.toString())
        if (try_key == null) {
            exists = false
        }
        i = i + 1
    }
    key = key + '-' + i.toString()
    console.log(key)

    await client.set(key, value)

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
        totalTiempo,
    }
    return res.render('layouts/main', data)
})

app.get('/pausar', (req, res) => {
    trabajando = false
    pausado = true
    terminable = true

    diferenciaTiempo = moment().diff(inicialMoment, 'seconds')
    totalTiempo = totalTiempo + diferenciaTiempo

    // var ahora = moment().format('DD MM YYYY hh:mm:ss')

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
        totalTiempo,
    }
    return res.render('layouts/main', data)
})

app.get('/continuar', (req, res) => {
    trabajando = true
    terminable = false
    inicialMoment = moment()

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
        totalTiempo,
    }
    return res.render('layouts/main', data)
})

app.get('/terminar', async (req, res) => {
    trabajando = false
    pausado = false
    empezado = false
    terminable = false
    empezable = false

    console.log(totalTiempo)
    await client.set(key, totalTiempo)
    valueHistorico = client.set(keyHistorico, valueHistorico)
    console.log(valueHistorico)

    const data = {
        trabajando,
        pausado,
        empezado,
        terminable,
        empezable,
        totalTiempo,
    }
    return res.render('layouts/main', data)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', (error) => console.log(`Error en servidor: ${error}`))
